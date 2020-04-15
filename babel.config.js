const presets = [
    '@babel/env',
    '@babel/preset-react',
    '@babel/preset-typescript',
]

const plugins = [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-numeric-separator',
]

module.exports = {
    presets,
    plugins,
}
