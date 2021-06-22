import {defineConfig} from "vite";
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
    define: {
        global: 'window',
        'process.env': process.env
    },
    plugins: [
        reactRefresh()
    ],
    esbuild: {
        jsxInject: 'import React from "react";'
    }
})
