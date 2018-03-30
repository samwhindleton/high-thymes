// MODULE
const app = angular.module('MyApp', []);


// CONTROLLER
app.controller('MainController', ['$http', function($http) {
  // holds data recived from create recipe form
  this.createForm = {};

  // create function
  this.createThymes = () => {
  console.log('creating thymes!');
    $http({
      method: 'POST',
      url: '/thymes',
      data: this.createForm
    }).then((response) => {
      // console.log(response);
      // console.log(response.data);
      console.table(response.data);
      // reset create thyme form to empty
      this.createForm = {};
      // this.thymes.push(response.data);
      // this.thymes.unshift(response.data);
    }, error => {
      // console.error(error.message);
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

}]); // closes MainController controller
