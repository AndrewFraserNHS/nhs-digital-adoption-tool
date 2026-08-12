/// <reference types="vite/client" />

declare global {
  interface Window {
    NHSDigitalAdoption: Record<string, unknown>;
  }
}

export {};
