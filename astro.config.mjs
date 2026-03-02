// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // For GitHub Pages deployment:
    // If your repo is username.github.io, use: https://username.github.io
    // If your repo is username.github.io/portfolio, use: https://username.github.io/portfolio
    site: 'https://sagar290.github.io/sagardash-portfolio-site',
    
    // Set base to '/repo-name' if deploying to a repository other than username.github.io
    // Remove this line if deploying to username.github.io
    base: '/sagardash-portfolio-site',
    
    integrations: [tailwind()],
});