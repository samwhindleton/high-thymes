// MODULE
// configure app, needs to match what is in index.html
const app = angular.module('MyApp', []);


// CONTROLLER
// give MainController an alias of `ctrl` to type less
app.controller('MainController', function() {
  this.test = 'test message';

}); // closes app.controller