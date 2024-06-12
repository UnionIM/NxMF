import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'invoice',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
