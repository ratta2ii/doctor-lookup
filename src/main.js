import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { API_KEY } from './../.env';
import { phoneNumberConverter } from './scripts';

$(document).ready(function() {

  $('#find-doctor').click(function() {

    let condition = $("#condition-input").val();
    const endPoint = "https://api.betterdoctor.com/2016-03-01/doctors?";
    let url = `${endPoint}query=${condition}&location=47.6062%2C-122.3321%2C25&skip=0&limit=25&user_key=${API_KEY}`;
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
      else {
        $("#display-results").empty();
        $("#display-results").append("<h5>Error: Trying to connect.</h5>");
        $("#display-div").show();
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      $("#display-results").empty();
      let doctors = response.data;

      if(doctors.length === 0 || condition === ""){
        $("#display-results").empty();
        $("#display-results").append("<h5>I'm sorry, no Doctors meet this criteria.</h5>");
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
          $("#display-results").append(`<li class="doc-name">${profile.name}</li><n><li>${address.street}, ${address.city}, ${address.state} ${address.zip}</li><n><li>${phoneNumberConverter(phoneNumber)}</li><n><li>${profile.website === undefined ? "Website Coming Soon": profile.website}</li><li>Accepting new patients: ${newPatients} </li><br>`);
        }
        $("#display-div").show();
      }

    };

  });

});
