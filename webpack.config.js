const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');





module.exports = {
    entry: {
        index: './src/js/scripts.js'

    },// 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },              // 出口文件
    mode: 'production',      // 開發模式配置 development
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './dist'
                }
            },
                // 'style-loader',//跟MiniCssExtractPlugin 會衝突所以要關掉
                'css-loader',
                'sass-loader'
            ],
        },
        //babel loader
        {
            test: /\.(js)$/,
            exclude: /(node_modules)/,

            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
            include: path.resolve(__dirname, 'src'),
        },

        ]

    },          // 處裡對應模組
    plugins: [
        new CleanWebpackPlugin(), // 清除舊建構檔案
        new MiniCssExtractPlugin({
            filename: "./[name].css" // 產生出來的css
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],  //選擇注入資源 chunk
            inject: 'body', //預設<body> js </body>  head or body
            template: './src/index.html',
            //來源
            filename: 'index.html',
            // 目的地
            title: '首頁'
        }),
        //全域載入jq
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/layout/nav.html'),
            location: 'nav',
            template_filename: ['index.html']
        })
    ],// 對應的插件
    // resolve: {
    //     alias: {
    //         vue: 'vue/dist/vue.js'
    //     }
    // }, //解決vue jquery 路徑
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },         // 服務器配置
}