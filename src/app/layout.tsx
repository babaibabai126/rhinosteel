import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rhinosteel.co.in"),
  title: "Rhino Steel | Think Roof - Think Rhino | PEB, Roofing & Insulation Solutions, Kolkata",
  description:
    "Rhino Steel — one-stop destination for PEB, Prefab structures, Tenso structures, colour coated roofing sheets in 4 types (JSW, AM/NS Optigal, SKYSAFE, Aluminium), A-frame resort structures, trussless roofing, polycarbonate sheets & turbo vents, aluminium bubble foil insulation, PUF panels and LGSF rooftop extensions in Kolkata.",
  keywords: [
    "Rhino Steel",
    "Think Roof Think Rhino",
    "PEB Kolkata",
    "Pre-Engineered Building",
    "Prefab structures",
    "Tensile structure",
    "tensile car parking shed",
    "Colour coated roofing sheet",
    "JSW PPGL sheet",
    "AM/NS Optigal",
    "SKYSAFE PPGL",
    "aluminium roofing sheet",
    "A-frame resort structure",
    "Trussless roofing",
    "Polycarbonate sheet",
    "Turbo ventilator",
    "Aluminium bubble foil insulation",
    "PUF panel",
    "LGSF",
    "LGSF rooftop extension",
    "roofing contractor Kolkata",
  ],
  authors: [{ name: "Rhino Steel" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rhino Steel | Think Roof - Think Rhino",
    description:
      "Complete roofing & steel structure solutions — PEB, Prefab, Tenso, Roofing Sheets, Polycarbonate, Insulation, PUF Panels & LGSF.",
    siteName: "Rhino Steel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${display.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
