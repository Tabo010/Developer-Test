
  //Global Variables

  //Store Country names and states
  let countries = [];
  let provinces = [];

  //Country Output results
  let countryOutput = ""
  let provinceOutput = ""


  //Get document elements injection
  var countrySelection;
  var provinceSelection;

  // //Form Validation Function
  function validateData() {

    //display successful alert
    alert("Sign Up Successful")

    //perform backend code...


  }

  //Run function on window load
  window.onload = function(){

    countrySelection = document.getElementById('countrySelection');
    provinceSelection = document.getElementById('provinceSelection');

    //Fetch Data from API
    fetch('https://countriesnow.space/api/v0.1/countries/states')
    .then(response => {
      return response.json();
    }).then(data => {

      //Loop though data to get countries data and country names
      data.data.forEach(country => {

        //Push countries into countries variable for filtering provinces
        countries.push(country);

        //Injected country names into the country selection
        countryOutput += `<option value = "${country.name}">${country.name}</option>`;

      });
      //Display the Provinces on the frontend
      countrySelection.innerHTML = countryOutput;

      //Set Province after page load
      setProvince(countrySelection.value);

    })
    .catch(error => {
        console.log(error);
    })
  }

  //Function to set provinces
  function setProvince(countrySelected){

    //Initalise selected country variable
    var selectedCountry = countrySelected;

    //Reset Province output everytime a new country is selected
    provinceOutput = `<option value ="" selected = "selected">Select a Province</option>`;

    //Loop through the countries and provines to get final provinces
    countries.forEach(country => {
         if(country.name === selectedCountry){
           country.states.forEach(province => {
             console.log(province.name);
             //Injected provine names into the province selection
             provinceOutput += `<option name = "province" value = "${province.name}">${province.name}</option>`;

           });

         }
       });
       //Display the Provinces on the frontend
       provinceSelection.innerHTML = provinceOutput;

  }
