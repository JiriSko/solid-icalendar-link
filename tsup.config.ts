import { defineConfig } from 'tsup';
import { solidPlugin } from 'esbuild-plugin-solid';

export default defineConfig(() => ({
	clean: true,
	dts: 'src/index.tsx',
	entry: ['src/index.tsx'],
	esbuildPlugins: [solidPlugin()],
	format: ['cjs'],
}));
