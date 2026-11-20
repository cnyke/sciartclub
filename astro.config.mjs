import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: set to the Sci Art Club domain (also update public/CNAME)
export default defineConfig({
  site: 'https://sciartclub.example',
  output: 'static',
  integrations: [tailwind()],
});
