import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [sveltekit(),
		viteStaticCopy({
			targets: [
			  { src: 'node_modules/tinymce/*', dest: 'tinymce' }
			]
		  })
		]
});
