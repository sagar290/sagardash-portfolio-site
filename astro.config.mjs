// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Your custom domain
    site: 'https://sagardash.me',
    
    // Remove 'base' when using a custom domain
    // Only use 'base' for subdirectory deployments like github.io/portfolio
    integrations: [tailwind()],
});
