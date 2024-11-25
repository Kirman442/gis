const path = require('path');
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
const CopyPlugin = require('copy-webpack-plugin');

export const mode = 'production';
export const entry = './src/index.js';
export const output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js'
};
export const module = {
    rules: [
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[name][ext]',
            },
        },
        {
            test: /\.css$/,
            use: [
                _loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: true,
                        import: true,
                        // Включаем поддержку CSS модулей для файлов с расширением .module.css
                        modules: {
                            auto: (resourcePath) => resourcePath.endsWith('.module.css'),
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        },
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ],
            // Обрабатываем CSS как из src, так и из node_modules
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules')
            ]
        }
    ]
};
export const optimization = {
    minimize: true,
    minimizer: [
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    'default',
                    {
                        discardComments: { removeAll: true },
                        // Сохраняем важные вендорные префиксы
                        autoprefixer: true
                    }
                ]
            }
        }),
        new TerserPlugin()
    ],
    splitChunks: {
        cacheGroups: {
            // Группируем стили основного приложения
            styles: {
                name: 'styles',
                type: 'css/mini-extract',
                chunks: 'all',
                enforce: true
            },
            // Отдельная группа для стилей из node_modules
            vendorStyles: {
                name: 'vendor',
                type: 'css/mini-extract',
                chunks: 'all',
                enforce: true,
                test: /[\\/]node_modules[\\/].+\.css$/
            }
        }
    }
};
export const plugins = [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css'
    }),
    new CopyPlugin({
        patterns: [
            {
                from: 'public/fonts',
                to: 'fonts'
            }
        ]
    })
];