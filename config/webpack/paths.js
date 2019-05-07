import path from 'path';

module.exports = {
    root: path.resolve(__dirname, '../', '../'),
    outputPath: path.resolve(__dirname, '../', '../', 'build'),
    entryPath: path.resolve(__dirname, '../', '../', 'src/index.js'),
    templatePath: path.resolve(__dirname, '../', '../', 'src/index.html'),
    componentsPath: path.resolve(__dirname, '../', '../', 'src/components'),
    pagesPath: path.resolve(__dirname, '../', '../', 'src/pages'),
    storePath: path.resolve(__dirname, '../', '../', 'src/store'),
    stylesPath: path.resolve(__dirname, '../', '../', 'src/styles'),
    apiPath: path.resolve(__dirname, '../', '../', 'src/api'),
    configPath: path.resolve(__dirname, '../', '../', 'config'),
    imagesFolder: 'images',
    fontsFolder: 'fonts',
    cssFolder: 'css',
    jsFolder: 'js'
};