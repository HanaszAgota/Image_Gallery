const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUT_DIR = path.join(__dirname, 'out');

module.exports = {
    mode: 'main',
    entry: path.join(SRC_DIR, './src/index.js'),
    output: {
        path: OUT_DIR,
        filename: 'dist.js',
    }
}