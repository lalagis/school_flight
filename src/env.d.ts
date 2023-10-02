/// <reference types="astro/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly CESIUM_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
