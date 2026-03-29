/// <reference types="vite/client" />

interface ImportMeta {
  glob: (glob: string, options?: any) => Record<string, unknown>;
}
