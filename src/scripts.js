import { API_KEY } from './../.env';


export function getDoctors(medicalCondition){
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    const endPoint = "https://api.betterdoctor.com/2016-03-01/doctors?";
    let url = `${endPoint}query=${medicalCondition}&location=47.6062%2C-122.3321%2C25&skip=0&limit=25&user_key=${API_KEY}`;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      }
      else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}


export function phoneNumberConverter(str){
  return `1 + (${str.slice(0,3)}) ${str.slice(3,6)}-${str.slice(6)}`;
}


export function websiteTextConverter(str){
  if (str === undefined){
    return "Website Coming Soon";
  }
  if (str.charAt(7) === "/"){
    return str.slice(8);
  }
  else {
    return str.slice(7);
  }
}


export function newPatientConverter(newPatients){
  if (newPatients === true){
    return "YES";
  }
  else {
    return "Not at this time.";
  }
}
