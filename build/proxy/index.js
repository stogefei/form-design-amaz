const type = 'dev';

let target;
switch (type) {
  case 'dev':
    target = 'http://159.75.221.84/';
    break;
  case 'test':
    target = 'http://1.12.252.89/';
    break;
  case 'demo':
    target = 'https://demo.babaisz.com';
    break;
  case 'bpc':
    target = 'http://bpc.babaisz.com';
    break;
}
const options = {
  target,
  changeOrigin: true,
};

module.exports = {
  '/api': options,
};
