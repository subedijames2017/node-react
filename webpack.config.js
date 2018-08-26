var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use:[{
                  loader: 'babel-loader',
                  query: {
                      "presets": ["react", "es2015", "stage-2"]
                  }
                }]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};
