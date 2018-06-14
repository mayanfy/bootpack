//  webpack.config.js 

const path = require('path');


const config = {

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    }
};

module.exports = config;