const fs = require("fs")
const path = require("path")
    // Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
const dotenv = require("dotenv")
import { defineConfig, searchForWorkspaceRoot } from 'vite'
    import vue from '@vitejs/plugin-vue'
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

module.exports = defineConfig({
    plugins: [
        vue(),
        // styleImport({
        //     libs: [
        //         //按需加载vant模块样式
        //         {
        //             libraryName: "vant",
        //             esModule: true,
        //             resolveStyle: (name) => {
        //                 return `vant/es/${name}/style/index`;
        //             },
        //         },
        //     ],
        // }),
    ],
   
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src') //设置别名
        }
    },
    
    server: {
         // 反向代理
        proxy: {
            '/v1/': {
                target: "http://security-dev.yingyingwork.com",
                // target: "http://192.168.10.74:3000",
                changeOrigin: true,
                rewrite: path => path.replace(/^\/v1/, "")
            }
        },
        fs: {
            strict: false,
        },
        hostname: process.env.VITE_HOST,
        port: process.env.VITE_PORT,
            // 压缩
        minify: 'esbuild',
        // 是否自动在浏览器打开
        open: true,
        // 是否开启 https
        https: false,
        // 服务端渲染
        ssr: false,
    },
    // optimizeDeps: {
    //     include: ['ElementPlus']
    // },
    // 引用全局 scss
    // cssPreprocessOptions: {
    //     scss: {
    //         additionalData: `
    //             @import "/src/styles/index.scss";
    //         `
    //     }
    // },
    
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
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})