import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// Import /serverless for a Serverless SSR site
import vercelServerless from '@astrojs/vercel/serverless';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: vercelServerless(),
	integrations: [tailwind(), db()],
});