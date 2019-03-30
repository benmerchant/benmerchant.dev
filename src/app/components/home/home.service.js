export class HomeService {

  constructor($http, Globalvars){
    this.$http = $http;
    this.Globalvars = Globalvars;
    // need the home route for home methods
    this.apiUrl = `${this.Globalvars.apiUrl}/home`;
  }

  getStaticArray(cb) {
    this.$http({
      method: 'GET', // actually makes more sense to hard code
      url: this.apiUrl
    }).then(
      function successCallback(response){
        if(response.status===200) {cb(response.data);}
      },
    function errorCallback(response) {
      if(errorCallback.status===400) {cb('error');}
    })};
};
HomeService.$inject = ['$http','Globalvars'];
