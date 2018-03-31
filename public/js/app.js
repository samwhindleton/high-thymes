// MODULE
const app = angular.module('MyApp', []);


// CONTROLLER
app.controller('MainController', ['$http', function($http) {
  // holds data recived from create createThymes function
  this.createForm = {};
  // holds data recived from getThymes function
  this.thymes = [];

  // create function
  this.createThymes = () => {
  console.log('creating thymes');
    $http({
      method: 'POST',
      url: '/thymes',
      data: this.createForm
    }).then((response) => {
      this.createForm = {};
      this.thymes.push(response.data);
    }, error => {
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

  // get function
  this.getThymes = () => {
    console.log('getting all thymes');
    $http({
      method: 'GET',
      url: '/thymes'
    }).then((response) => {
      console.table(response.data);
      this.thymes = response.data;
    }, error => {
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

  // update likes function
  this.updateLikes = (thymes) => {
    thymes.likes = thymes.likes + 1;
    $http({
      method: 'PUT',
      url: '/thymes/' + thymes._id,
      data: {likes: thymes.likes}
    }).then((response) => {
      console.log(response.data.likes);
    }, error => {
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

  // edit index show/hide
  this.indexOfEditFormToShow = null;
  // update thyme function
  this.updateThyme = (thymes) => {
    console.log('updating:' + thymes._id);
    $http({
      method: 'PUT',
      url: '/thymes/' + thymes._id,
      data: {
         name: thymes.name,
      }
    }).then((response) => {
      console.log(response.data);
    }, error => {
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

  // delete function
  this.deleteThymes = (id) => {
    $http({
      method: 'DELETE',
      url: '/thymes/' + id
    }).then((response) => {
      console.log(response.data);
      const removeByIndex = this.thymes.findIndex(thymes =>
      thymes._id === id);
      this.thymes.splice(removeByIndex, 1);
    }, error => {
      console.error(error);
    }).catch(error => console.error('Catch: ', error));
  };

  // run get function on page load
  this.getThymes();
}]); // closes MainController controller
