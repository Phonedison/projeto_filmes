interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_TOKEN: string;
  // adicione mais variáveis aqui se necessário
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
