// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
module.exports = {
  name: 'host',
  remotes: [
    ['about', 'http://192.168.0.243:4201'],
    ['cart', 'http://192.168.0.243:4202'],
    ['shop', 'http://192.168.0.243:4203'],
  ],
};
