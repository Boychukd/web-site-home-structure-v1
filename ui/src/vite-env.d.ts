/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLARITY_PROJECT_ID?: string;
  readonly VITE_ENABLE_CLARITY_IN_DEV?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
