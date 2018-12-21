const baseConfig = require("./webpack.config.base")
const merge = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = merge(baseConfig,{
    mode: 'production',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
    })],
    externals: {
        react : "React",
        'react-dom': "ReactDOM"
    }
})
