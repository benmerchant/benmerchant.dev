export class HomeService {

  constructor($http, Globalvars){

    // need the home route for home methods
    this.apiUrl = `${Globalvars.apiUrl}/home`;
    this.$http = $http;
    this.method = 'GET';

///////////////////////////////////////////////////////////

    this.url = 'http://localhost:3005/api/home';

///////////////////////////////////////////////////////////

}


    getStaticArray(cb) {
      this.$http({
        method: this.method,
        url: this.url
      }).then(
        function successCallback(response){
          if(response.status===200) {cb(response.data);}
        },
      function errorCallback(response) {
        if(errorCallback.status===400) {cb('error');}
      })};

};
HomeService.$inject = ['$http','Globalvars'];
