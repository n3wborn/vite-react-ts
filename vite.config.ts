import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react()],
        define: {
            __APP_ENV__: env.APP_ENV,
        },
        server: {
            port: 5555,
            host: true,
        },
        preview: {
            port: 8080,
            host: true,
        }
    }
});
