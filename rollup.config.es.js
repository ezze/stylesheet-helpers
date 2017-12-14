import babel from 'rollup-plugin-babel';

const config = {
    name: 'stylesheetTraverser',
    input: 'src/index.js',
    output: {
        file: 'dist/stylesheet-traverser.es.js',
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
