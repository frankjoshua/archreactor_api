const fs = require('fs');
const { Console } = require('console');

const settings = {
  api_key: '',
  key: '',
  url: '',
  snipeit: {
    token: '',
  },
};

fs.readFile('.config', 'utf8', (err, data) => {
  if (!err) {
    Object.assign(settings, JSON.parse(data));
    console.log('Setting loaded...');
  }
});

const getSettings = () => {
  return settings;
};

exports.getSettings = getSettings;
