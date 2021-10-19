module.exports = {
    // 转义
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\ts$': 'babel-jest',
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node']
}