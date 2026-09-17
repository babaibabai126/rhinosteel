'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PRODUCTS, CONTACT } from '@/lib/data';
import { useEnquiryStore } from '@/lib/store';

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(100, 'Name is too long'),
  phone: z
    .string()
    .trim()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      'Enter a valid 10-digit Indian mobile number'
    ),
  email: z
    .string()
    .trim()
    .email('Enter a valid email address')
    .max(120, 'Email is too long')
    .optional()
    .or(z.literal('')),
  product: z.string().min(1, 'Please select a product'),
  message: z.string().trim().max(1000, 'Message is too long (max 1000 characters)').optional().or(z.literal('')),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

function buildWhatsAppMessage(values: EnquiryFormValues): string {
  const lines = [
    'Hello Rhino Steel! New enquiry from your website:',
    '',
    `*Name:* ${values.name}`,
    `*Mobile:* ${values.phone}`,
  ];
  if (values.email) {
    lines.push(`*Email:* ${values.email}`);
  }
  lines.push(`*Interested In:* ${values.product}`);
  if (values.message) {
    lines.push(`*Requirement:* ${values.message}`);
  }
  lines.push('', '(Sent via www.rhinosteel.com)');
  return lines.join('\n');
}

export function EnquiryForm() {
  const { toast } = useToast();
  const selectedProduct = useEnquiryStore((s) => s.selectedProduct);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      product: '',
      message: '',
    },
  });

  // Sync product selected from product cards into the form
  React.useEffect(() => {
    if (selectedProduct) {
      setValue('product', selectedProduct, { shouldValidate: false });
    }
  }, [selectedProduct, setValue]);

  const productValue = watch('product');

  const onSubmit = (values: EnquiryFormValues) => {
    // Primary delivery: open WhatsApp with the enquiry pre-filled for the
    // visitor to send. This works everywhere, including serverless hosting
    // (Vercel) where a database cannot persist.
    const text = encodeURIComponent(buildWhatsAppMessage(values));
    const waUrl = `https://wa.me/${CONTACT.phones[0].tel.replace('+', '')}?text=${text}`;

    // Best-effort database save in the background (works where a real
    // database is available). Fire-and-forget, never blocks the user.
    try {
      void fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
        keepalive: true,
      });
    } catch {
      // WhatsApp delivery is the primary channel; ignore storage failures.
    }

    // Open WhatsApp within the user gesture so popup blockers allow it.
    // NOTE: do NOT pass 'noopener' in features — that makes window.open
    // return null by spec, which would wrongly trigger the location fallback
    // and open WhatsApp twice. Sever the opener reference manually instead.
    const win = window.open(waUrl, '_blank');
    if (win) {
      win.opener = null;
      win.focus();
    } else {
      window.location.href = waUrl;
    }

    setSubmitStatus('success');
    reset();
    useEnquiryStore.getState().setSelectedProduct('');
    toast({
      title: 'Almost done — press SEND in WhatsApp!',
      description:
        'Your enquiry details are pre-filled in WhatsApp. If it did not open, call us at +91 90070 06050.',
    });
  };

  return (
    <div className="rounded-xl border border-border/70 bg-card p-6 shadow-sm sm:p-8">
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground sm:text-3xl">
        How Can I <span className="text-primary">Help You?</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Tell us what you need — a new shed, a re-roofing estimate or product pricing.
        On submission, your enquiry opens in <strong className="text-foreground">WhatsApp</strong> — just press
        send and we receive it instantly. Fields marked <span className="text-primary">*</span> are required.
      </p>

      {submitStatus === 'success' && (
        <div className="mt-5 flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <div className="text-sm">
            <p className="font-semibold text-foreground">Almost there — press SEND in WhatsApp!</p>
            <p className="mt-0.5 text-muted-foreground">
              Your enquiry is pre-filled in the WhatsApp window that just opened. If it did
              not open, call us directly at <strong>+91 90070 06050</strong>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="enq-name">
              Your Name <span className="text-primary">*</span>
            </Label>
            <Input
              id="enq-name"
              placeholder="e.g. Rahul Sharma"
              autoComplete="name"
              aria-invalid={!!errors.name}
              {...register('name')}
            />
            {errors.name && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="enq-phone">
              Mobile Number <span className="text-primary">*</span>
            </Label>
            <Input
              id="enq-phone"
              type="tel"
              inputMode="tel"
              placeholder="e.g. 9876543210"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              {...register('phone')}
            />
            {errors.phone && (
              <p className="text-xs font-medium text-destructive" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="enq-email">Email (optional)</Label>
          <Input
            id="enq-email"
            type="email"
            placeholder="e.g. you@company.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Product interest */}
        <div className="space-y-2">
          <Label htmlFor="enq-product">
            I Am Interested In <span className="text-primary">*</span>
          </Label>
          <Select
            value={productValue ?? ''}
            onValueChange={(val) => setValue('product', val, { shouldValidate: true })}
          >
            <SelectTrigger id="enq-product" className="w-full" aria-invalid={!!errors.product}>
              <SelectValue placeholder="Select a product / service" />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {PRODUCTS.map((product) => (
                <SelectItem key={product.id} value={product.name}>
                  {product.name}
                </SelectItem>
              ))}
              <SelectItem value="Multiple Products / Not Sure">
                Multiple Products / Not Sure
              </SelectItem>
            </SelectContent>
          </Select>
          {errors.product && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.product.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="enq-message">Your Requirement</Label>
          <Textarea
            id="enq-message"
            placeholder="Tell us about your project — location, approximate area (sq. ft.), timeline, or any specific question…"
            rows={4}
            aria-invalid={!!errors.message}
            {...register('message')}
          />
          {errors.message && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full text-base font-semibold">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>
              <Send className="mr-2 h-4.5 w-4.5" aria-hidden="true" />
              Submit Enquiry
            </>
          )}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          We respect your privacy. Your details are used only to respond to this enquiry.
        </p>
      </form>
    </div>
  );
}
