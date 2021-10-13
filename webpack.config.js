const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    target: 'web',
    entry: path.resolve(__dirname, 'src/index.tsx'),
    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx',
            '.scss'
        ]
    },
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader' }
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
                include: path.resolve(__dirname, 'assets', 'json')
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Warped',
            body: true,
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: path.resolve(__dirname, 'build', 'index.html'),
            inject: true
        })
    ],
    devServer: {
        compress: true,
        port: 3000
    }
};
