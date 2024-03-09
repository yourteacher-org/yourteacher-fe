import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  assetsInclude: ['**/*.png', '**/*.PNG'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
