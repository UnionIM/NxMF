import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run invoice:serve',
        production: 'nx run invoice:preview',
      },
      ciWebServerCommand: 'nx run invoice:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
