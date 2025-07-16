import {create} from 'zustand';

export type httpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface HttpMethodStore {
  method: httpMethod;
  setMethod: (method: httpMethod) => void;
}
export const useHttpMethodStore = create<HttpMethodStore>((set) => ({
  method: "GET",
  setMethod: (method: httpMethod) => set({ method }),
}));