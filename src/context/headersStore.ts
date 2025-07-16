import { create } from "zustand";

export type headersType = {
  [key: string]: string;
};
interface HeadersStore {
  headers: headersType;
  addHeader: (key: string, value: string) => void;
  removeHeader: (index: number) => void;
  updateHeaderKey: (index: number, newKey: string) => void;
  updateHeaderValue: (index: number, newValue: string) => void;
}

export const useHeadersStore = create<HeadersStore>((set) => ({
  headers: {},
  addHeader: (key: string, value: string) =>
    set((state) => ({
      headers: { ...state.headers, [key]: value },
    })),
  removeHeader: (index: number) =>
    set((state) => {
      const newHeaders = { ...state.headers };
      delete newHeaders[Object.keys(newHeaders)[index]];
      return { headers: newHeaders };
    }),
  updateHeaderKey: (index: number, newKey: string) =>
    set((state) => {
      const newHeaders = { ...state.headers };
      const oldKey = Object.keys(newHeaders)[index];
      const value = newHeaders[oldKey];
      delete newHeaders[oldKey];
      newHeaders[newKey] = value;
      return { headers: newHeaders };
    }),
  updateHeaderValue: (index: number, newValue: string) =>
    set((state) => {
      const newHeaders = { ...state.headers };
      const key = Object.keys(newHeaders)[index];
      newHeaders[key] = newValue;
      return { headers: newHeaders };
    }),
}));
