const chalk = require('chalk');
module.exports = {
    debug: function (text) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.hex('#ffff00')("DEBUG")}: ${text}`);
    },
    success: function (text) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.hex('#00ff00')("SUCCESS")}: ${text}`);
    },
    info: function (text) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.hex('#0055ff')("INFO")}: ${text}`);
    },
    error: function (text) {
        const today = new Date(), time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return console.log(`[ ${chalk.hex('#15dfff')(time)} ] ${chalk.bold.hex('#ff5555')("ERROR")}: ${text}`);
    }
}