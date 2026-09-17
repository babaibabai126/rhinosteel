import { create } from 'zustand';

interface EnquiryState {
  selectedProduct: string;
  setSelectedProduct: (product: string) => void;
}

export const useEnquiryStore = create<EnquiryState>((set) => ({
  selectedProduct: '',
  setSelectedProduct: (product: string) => set({ selectedProduct: product }),
}));
