
let users = require('./dev_modules/database/users');

users.searchRowByField('id', '1').then(re => {console.log(re)});
