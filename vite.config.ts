import { AliasOptions, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

const aliasPaths = ['assets', 'components', 'styles', 'layouts', 'pages'];

const alias: AliasOptions = Object.fromEntries(
  aliasPaths.map((path) => [`@${path}`, resolve(__dirname, `./src/${path}`)]),
);

console.log(alias);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  assetsInclude: ['**/*.png', '**/*.PNG'],
  resolve: {
    alias,
  },
});
