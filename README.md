# Doctor Lookup
##### By Trevor Mackin
###### Created November 22, 2019

## Description

_This is a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in their city (Seattle in this case) who can treat their medical issue.._

## Setup/Installation Requirements:

Open gh-pages at https://ratta2ii.github.io/doctor-lookup/ to view website
##### OR
1. Open https://ratta2ii.github.io/doctor-lookup
2. Clone repository to local machine
3. $ npm install  (in the command line interface) to install
4. Create .env file in root directory
5. Get API key at https://www.betterdoctor.com and save as const API_KEY in .env file
4. $ npm run start -for live server
5. OPTIONAL:  $ npm run test (for testing with Jest)


## Specifications:

User inputs City Name:
User inputs Medical Condition:
###### Example:

* ### Input:  
    * ##### Flu
* ### Output:


      Karen Heart MD
      18645 17th Street, Seattle, WA 98121
      1 + (206) 555-4444
      www.kheartMD.com
      Expecting new patients: NO


      Johnny Smith MD
      3217 N 16th Street, Seattle, WA 98101
      1 + (206) 555 - 5555
      www.fludoctor.com
      Excepting new patients: YES

    . . . Ongoing list for as many Doctors meet the criteria


 ###### Example 2:   
* ### Input:  
    * ##### bicpzn
* ### Output:


      I'm sorry, no Doctors meet this search criteria. Please try other search terms.


 ###### Example 3:

* ### Input:  
    * ##### headaches
* ### Output:


      Output will throw error if server is unable to retrieve information from the API call.

      "There was an error processing your request: Error Message"

## Technologies Used:

* HTML
* CSS
* Bootstrap
* jQuery (Version 3.4.1)
* JavaScript
* Jest
* ESLint
* npm
* Webpack
* Babel

### License:

Copyright (c) 2019 **Trevor Mackin**
