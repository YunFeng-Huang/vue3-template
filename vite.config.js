const fs = require("fs")
const path = require("path")
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")
// import {
//     defineConfig
// } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import styleImport from 'vite-plugin-style-import'
const envFiles = [
    /** default file */
    `.env`,
    /** mode file */
    `.env.${process.env.NODE_ENV}`
]

for (const file of envFiles) {
    const envConfig = dotenv.parse(fs.readFileSync(file))
    for (const k in envConfig) {
        process.env[k] = envConfig[k]
    }
}

module.exports = {
    // 反向代理
    proxy: {
        '/v1/': {
            // https://dev-gateway.iuctrip.com
            target: "https://gateway.iuctrip.com",
            // target: "http://192.168.10.74:3000",
            changeOrigin: true,
            rewrite: path => path.replace(/^\/v1/, "")
        }
    },
    alias: {
        "/@/": path.resolve(__dirname, "./src"),
    },
    // optimizeDeps: {
    //     include: ['ElementPlus']
    // },
    // hostname: process.env.VITE_HOST,
    port: process.env.VITE_PORT,
    // 引用全局 scss
    cssPreprocessOptions: {
        scss: {
            additionalData: `
                @import "./src/styles/variables.scss";
            `
        }
    },
    // plugins: [ @import url("//unpkg.com/element-ui@2.12.0/lib/theme-chalk/index.css");
    //     vue(),
    //     styleImport({
    //         libs: [{
    //             libraryName: 'element-plus',
    //             esModule: true,
    //             ensureStyleFile: true,
    //             resolveStyle: (name) => {
    //                 name = name.slice(3)
    //                 return `element-plus/packages/theme-chalk/src/${name}.scss`;
    //             },
    //             resolveComponent: (name) => {
    //                 return `element-plus/lib/${name}`;
    //             },
    //         }]
    //     })
    // ],
    // 压缩
    minify: 'esbuild',
    // 是否自动在浏览器打开
    open: true,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    /**
     * Base public path when served in production.
     * @default '/'
     */
    base: './',
    assetsDir: 'assets',
    /**
     * Directory relative from `root` where build output will be placed. If the
     * directory exists, it will be removed before the build.
     * @default 'dist'
     */
    outDir: `./dist-temp/${process.env.VITE_ENV}`,

}