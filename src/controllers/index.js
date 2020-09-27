const fs = require('fs');
const path = require('path');
const logger = require('../modules/logger');

module.exports = app => {
    fs.readdirSync(__dirname).filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js"))).forEach(file => {
        logger.info(`Controller load: ${file}`);
        require(path.resolve(__dirname, file))(app)
    });
}