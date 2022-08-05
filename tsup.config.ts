import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/*.ts',
  ],
  format: ['cjs', 'esm'],
  splitting: true,
  clean: true,
  dts: true,
})
