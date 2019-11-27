import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { phoneNumberConverter, promise } from './scripts';

$(document).ready(function() {

  $('#find-doctor').click(function() {

    promise.then(function(response) {
      $("#display-results").empty();
      let body = JSON.parse(response);
      let doctors = body.data;

      if(doctors.length === 0){
        $("#display-results").empty().append("<h5>I'm sorry, no Doctors meet this criteria.</h5>");
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
      }
      $("#display-div").show();

    }, function(error) {
      $("#display-results").empty().append(`<h5>There was an error processing your request: ${error.message}</h5>`);
      $("#display-div").show();
    });

  });
});
