import sveltePreprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			// https://github.com/sveltejs/svelte-preprocess
		}),
	],

	kit: {
		// https://kit.svelte.dev/docs#adapters
		adapter: staticAdapter({ // https://github.com/sveltejs/kit/tree/master/packages/adapter-static
			pages: 'src/main/resources/META-INF/resources',
			fallback: 'index.html',
		}), 

		ssr: false, // https://kit.svelte.dev/docs#ssr-and-javascript-ssr
		//target: '#svelte' // hydrate the <div id="svelte"> element in src/app.html

		files: { // https://kit.svelte.dev/docs#configuration-files
			assets: 'src/static',
			hooks: 'src/svelte-kit/hooks',
			lib: 'src/svelte-kit/lib',
			routes: 'src/svelte-kit/routes',
			serviceWorker: 'src/svelte-kit/service-worker',
			template: 'src/svelte-kit/app.html'
		},
	},
};

export default config;