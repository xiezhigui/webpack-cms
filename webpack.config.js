// 导入处理路径的模块
var path = require('path');

const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin'); //. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    //entry: './src/main.js', // 项目入口文件
    entry: path.resolve(__dirname, './src/main.js'),
    output: { // 配置输出选项
        path: path.resolve(__dirname, 'dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    devServer:{
        open:true,
        port:7890,
        hot:true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new VueLoaderPlugin(), //. Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
          template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
          filename: 'index.html' // 指定生成的页面的名称
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|gif|bmp|png|jpeg)$/,use:['url-loader?limit=257116']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },
            { test:/\.vue$/, use: 'vue-loader'}
        ]
    },  
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
         // "vue$": "vue/dist/vue.js"
        }
    },
    mode: 'development' // 设置mode
}