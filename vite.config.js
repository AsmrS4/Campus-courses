import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteAliases } from "vite-aliases";
import legacy from "@vitejs/plugin-legacy";
import RubyPlugin from 'vite-plugin-ruby'
import inject from "@rollup/plugin-inject";

export default defineConfig({
    root: resolve(__dirname, 'src'),
    server: {
        port: 8080,
        hmr: true,
        resolve: {
            alias: {
                '~@coreui': resolve(__dirname, 'node_modules/@coreui/coreui'),
                '~bootstrap': resolve(__dirname, 'node_modules/bootstrap')
            }
        },
        plugins: [
            inject({   // => that should be first under plugins array
                $: 'jquery',
                jQuery: 'jquery',
            }),
            RubyPlugin(),
        ],
        proxy: {
            '/login': {
                target: 'http://localhost:8080/pages/account',
                rewrite: (path) => path.replace(/^\/pages\/account\/login.html/, '')
            },
            '/register': {
                target: 'http://localhost:8080/pages/account',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/pages\/account\/register.html/, '')
            },
            '/*': {
                target: 'http://localhost:8080',
                rewrite: (path) => path.replace(/^\/index.html/, '')
            },
            '/profile': {
                target: 'http://localhost:8080/pages/account',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/pages\/account\/profile.html/, '')
            }
        }
    },

})