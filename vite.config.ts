import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Standard Vite config for a React app. Removed TanStack / Cloudflare-specific setup.
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
