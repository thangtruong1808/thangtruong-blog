/// <reference types="vite/client" />

declare const __HAS_CV__: boolean;

interface ImportMetaEnv {
  readonly VITE_AUTHOR_EMAIL?: string;
  readonly VITE_PHONE?: string;
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_FEATURED_VIDEO_URL?: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
  readonly VITE_WEB3FORMS_FROM_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
