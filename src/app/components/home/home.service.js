export class HomeService {

  constructor($http, Globalvars){

    // need the home route for home methods
    this.apiUrl = `${Globalvars.apiUrl}/home`;
    this.$http = $http;

    // i spent so much time on this. Im not sending the statuses back right

    // hard code apiURL real quick...
    // get teh static Array from the back end
    // next we'll do MongoDB

    // lets split it up. still not wokring. Postman and Browswer API call are working
    this.method = 'GET';
    this.url = 'localhost:3005/api/home';



    this.getStaticArray = (cb) => {
      this.$http({
        method: this.method,
        url: this.url
      }).then(

        function successCallback(response){
          if(response.status===200) {cb(response.data);}
        },

      function errorCallback(response) {
        if(errorCallback.status===400) {cb('error');}
      })



    }};};


HomeService.$inject = ['$http','Globalvars'];
