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
                // target: "http://security-dev.yingyingwork.com",
                // target: "http://10.254.4.232:3000",
                target: "http://10.20.12.71:3000",
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
    base: './',
    build: {
        // 指定输出路径，默认'dist'
        outDir: `./dist-temp/${process.env.VITE_ENV}`,
        // 指定生成静态资源的存放路径(相对于build.outDir)
        assetsDir: './assets',
        // // 小于此阈值的导入或引用资源将内联为base64编码，设置为0可禁用此项。默认4096（4kb）
        // assetsInlineLimit: '4096',
        // 启用/禁用CSS代码拆分，如果禁用，整个项目的所有CSS将被提取到一个CSS文件中,默认true
        cssCodeSplit: true,
        // 构建后是否生成source map文件，默认false
        sourcemap: false,
        // 为true时，会生成manifest.json文件，用于后端集成
        manifest: false,
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true
            }
        }
    }
})