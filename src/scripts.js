import $ from 'jquery';
import { API_KEY } from './../.env';


let conditionInput = function() {
  let condition = $("#condition-input").empty().val();
  return condition;
}


export let promise = new Promise(function(resolve, reject) {

  let request = new XMLHttpRequest();
  let condition = conditionInput();
  const endPoint = "https://api.betterdoctor.com/2016-03-01/doctors?";
  let url = `${endPoint}query=${condition}&location=47.6062%2C-122.3321%2C25&skip=0&limit=25&user_key=${API_KEY}`;

  request.onload = function() {
    if (this.status === 200) {
      resolve(request.response);
    }
    else {
      reject(Error(request.statusText));
    }
  }
  request.open("GET", url, true);
  request.send();
});


export function phoneNumberConverter(str){
  return `1 + (${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`;
}
