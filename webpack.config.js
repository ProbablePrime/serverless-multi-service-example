// webpack.config.js
const path = require('path');
module.exports = {
    entry: './handler.ts',
    externals: ['aws-sdk'],
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: 'handler.js'
    },
    target: 'node',
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        loaders: [{
            test: /\.ts$/, loader: 'awesome-typescript-loader',
            options: {
                configFileName: path.join(__dirname, 'tsconfig.json'),
            }
        }],
    }
};
