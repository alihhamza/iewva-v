import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteComponents, {AntDesignVueResolver} from 'vite-plugin-components/dist';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        ViteComponents({
            customComponentResolvers: [AntDesignVueResolver()],
        }),
    ]
})
