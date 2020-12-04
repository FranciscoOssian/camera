const turnAlwaysOnTop = require('./commandsList/turnAlwaysOnTop');

const commands = [
    {
      commandName:'CommandOrControl+J',
      process: turnAlwaysOnTop
    }
];

module.exports = commands;