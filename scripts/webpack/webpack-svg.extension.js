const autoprefixer = require('autoprefixer');
const injectRule = require("../injections/injectRule");

function injectStylusConfiguration(config) {
    injectRule(config, {
        test: /\.svg$/,
        use: [
            {
                loader: 'babel-loader'
            },
            // { loader: path.resolve('loaders/iconComponentLoader') },
            {
                loader: require.resolve('react-svg-loader'),
                options: {
                    jsx: true,
                    svgo: {
                        plugins: [{removeTitle: true}],
                    },
                },
            },
        ],
    });
    return config;
}

module.exports = (config) => {
    return injectStylusConfiguration({...config});
}