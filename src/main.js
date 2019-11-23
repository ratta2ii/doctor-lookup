import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { Example, anotherExample } from './scripts';


const API_KEY = "44daf8c9eb3e172b888f7b46e3411e9e";
const API_Parameter = "user_key";
const endPoint = "https://api.betterdoctor.com/2016-03-01/doctors?";


$(document).ready(function() {

  $('#find-doctor').click(function() {

    let condition = $("#condition-input").val();
    let url = `${endPoint}query=${condition}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${API_KEY}`;
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
      else {
        reject(Error(request.statusText));    /// Fix error message
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {

      $("#display-results").empty();
      let doctors = response.data;

      if(doctors.length === 0 || condition === undefined){
         $("#display-results").empty();
         $("#display-results").append("<h1>I'm sorry, no Doctors meet this criteria.</h1>");
         $("#display-div").show();
      }
      else {
        for (let i in doctors){
          let profile = doctors[i].practices[0];
          let address = profile.visit_address;
          let phoneNumber = profile.phones[0].number;
          let newPatients = profile.accepts_new_patients;
          if (newPatients === true){
            newPatients = "YES";
          }
          else {
            newPatients = "Not at this time.";
          }
          $("#display-results").append(`<li>${profile.name}</li><n><li>${address.street}, ${address.city}, ${address.state} ${address.zip}</li><n><li>${phoneNumber}</li><n><li>${profile.website}</li><li>Accepting new patients: ${newPatients} </li><br>`);

        }
        $("#display-div").show();
      }

    };

  });

});
