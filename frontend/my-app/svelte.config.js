import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        files: {
            routes: 'src/routes'
        },
        alias: {
            $types: './src/$types.d.ts'
        }
    },
    preprocess: vitePreprocess()
};

export default config;
