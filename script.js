//https://age-of-empires-2-api.herokuapp.com/docs/

//what is the overall structure of the data set?
//civilizations is an object that contains an array of 32 objects, 
//each of the 32 objects contains an object with the exception of civ bonus,
//unique tech and unique unit. 
//*Note that some unique techs and unit contain an empty array*

//how to target the name?
//iterate through the civilizations array to select civilizations[i].name

//how to target the array inside one of the 32 objects?
//iterate through the array of the civizilization[i].object

//how to target the civ aspects?
//need to exclude the name and the id, how?
//not sure, somehow need to target the name and id key:value pair and remove...

const civilizationContainer = document.querySelector(".civ-info-container");
const civilizationOne = document.querySelector("#civ-1-name");
const civilizationTwo = document.querySelector("#civ-2-name");
const civilizationOneAspects = document.querySelector("#civ-1-aspects");
const civilizationTwoAspects = document.querySelector("#civ-2-aspects")


async function fetchCivOneInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civilizationData = res.data.civilizations;
    console.log(res.data);
    // console.log(typeof res.data.civilizations);
    // console.log(typeof res.data.civilizations[0].civilization_bonus);
    // console.log(civilizationData[0].unique_tech);
    for (let index of civilizationData) {
      console.log(index.name);
    }

    civilizationData.forEach((civObject) => {
    showCivilizationOneInfo(civObject);
    })
  } catch(error) {
    console.error(error);
    // displayErrorMessage();
  }
}

fetchCivOneInfo();

// async function fetchCivTwoInfo() {
//   try {
//     const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
//     const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
//     const civilizationData = res.data.civilizations;
//     console.log(res.data);
//     console.log(typeof res.data.civilizations);
//     console.log(typeof res.data.civilizations[0].civilization_bonus);
//     // console.log(civilizationData[0].unique_tech);
//     civilizationData.forEach((civObject) => {
//     showCivilizationTwoInfo(civObject);
//     })
//   } catch(error) {
//     console.error(error);
//     // displayErrorMessage();
//   }
// }

//   fetchCivTwoInfo();

  // function displayErrorMessage() {
  //   const errorImage = document.createElement("img");
  //   errorImage.src = "Assets/AOE-error.png"
  //   errorImage.alt = "404 install error"
  //   civilizationContainer.appendChild("errorImage");
  // }

  //we need to loop through the civilizations array [0] through [32] to access the values.
  //note this should be inside the fetchCivInfo function

  //ex. console.log(civilizationData[0].name)

  function showCivilizationOneInfo(data) {
    console.log(data);

    //Add civilization one name
    const civilizationOneName = civilizationOne;
    civilizationOneName.innerText = `${data.civilizations.name}`; 
    civilizationOne.appendChild(civilizationOneName);

     //Add civilization one info
     const civilizationOneInfo = civilizationOneAspects;
     civilizationOneInfo.innerText = `${data.civilizations}`;
     civilizationOneAspects.appendChild(civilizationOneInfo);
  
  // function showCivilizationTwoInfo() {

    ////Add civilization two name
    // const civilizationTwoName = civilizationTwo
    // civilizationTwoName.innerText = `${data.civilizations.name}`; 
    // civilizationTwo.appendChild(civilizationTwoName);

    //Add civilization two info
    // const civilizationTwoInfo = civilizationTwoAspects;
    // civilizationTwoInfo.innerText = `${data.civilizations.name}`;
    // civilizationTwoAspects.appendChild(civilizationTwoInfo);
  // }

  const searchFormOne = document.querySelector(".civ-1-menu");
  // const searchFormTwo = document.querySelector("civ-2-menu");
  const searchInputOne = document.querySelector(".civilization-1");
  // const searchInputTwo = document.querySelector("civilization-2");

  searchFormOne.addEventListener("submit", handleSubmit);

  function handleSubmit() {
    console.log(searchInputOne.value);
    // console.log(searchInputTwo.value);
    let inputValueOne = searchInputOne.value;
    // let inputValueTwo = searchInputTwo.value;
    searchInputOne.value = "";
    // searchInputTwo.value = "";
    console.log(inputValueOne);
    // console.log(inputValueTwo);
    fetchCivOneInfo(inputValueOne);
    // fetchCivInfoTwo(inputValueTwo);

    //do I need to remove seperately or together?
    // removeCivConctainer();
  }

  //Remove the previous civ info

  // function removeCivInfoContainer1() {

  }

  // function removeCivInfoContainer2() {

  // }

  //filtering out key:values in the civ object

  // function filterCivOneObject() {
  //   for (let value of Object.values(civilizationData)) {
  //     if (Object.keys === ("name" || "id") {
  //       value = null;
  //     }
  //   }
  // }