import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// import { Example, anotherExample } from './scripts';

const API_KEY = "44daf8c9eb3e172b888f7b46e3411e9e"; // user_key=API_KEY (parameter)
const API_Parameter = "user_key";  //
const endPoint = "https://api.betterdoctor.com/2016-03-01/doctors?";


// complete url for testing
// https://api.betterdoctor.com/2016-03-01/doctors?query=toothache&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=44daf8c9eb3e172b888f7b46e3411e9e




$(document).ready(function() {

  $('#find-doctor').click(function() {

    let city = $("#city-input").val();
    let condition = $("#condition-input").val();
    let request = new XMLHttpRequest();

    let url = `${endPoint}query=${condition}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${API_KEY}`;


    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);



        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      let doctorInfo = response.data[0].profile;
      console.log(`${doctorInfo.first_name} ${doctorInfo.middle_name} ${doctorInfo.last_name}`);

      $(".display-div").show();
      $('#display-results').empty().text(`${doctorInfo.first_name} ${doctorInfo.middle_name} ${doctorInfo.last_name}`);
    };

  });

});
