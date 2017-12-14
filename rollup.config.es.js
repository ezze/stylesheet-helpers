import babel from 'rollup-plugin-babel';

const config = {
    name: 'stylesheetHelpers',
    input: 'src/index.js',
    output: {
        file: 'dist/stylesheet-helpers.es.js',
        format: 'es'
    },
    external: [],
    plugins: [
        babel({
            babelrc: false,
            presets: [
                ['env', { modules: false }]
            ],
            plugins: [
                'external-helpers'
            ],
            exclude: 'node_modules/**'
        })
    ]
};

export default config;
