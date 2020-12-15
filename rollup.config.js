import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
 
export default {
  input: 'src/index.ts',
  output: {
    name: 'EventBus',
    dir: 'dist',
    format: 'umd'
  },
  plugins: [typescript(), serve('dist')]
};