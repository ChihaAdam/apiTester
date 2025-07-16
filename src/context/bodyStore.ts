import {create} from 'zustand';

interface BodyStore {
  body: string;
  setBody: (body: string) => void;
}

export const useBodyStore = create<BodyStore>((set) => ({
  body: "",
  setBody: (body: string) => set({ body }),
}));