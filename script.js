//https://age-of-empires-2-api.herokuapp.com/docs/

const civilizationContainer = document.querySelector(".civ-info-container");
const civilizationOne = document.querySelector("#civ-1-name");
const civilizationTwo = document.querySelector("#civ-2-name");
const civilizationOneAspects = document.querySelector("#civ-1-aspects");
const civilizationTwoAspects = document.querySelector("#civ-2-aspects")


async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civilizationData = res.data.civilizations;
    console.log(res.data);
    console.log(civilizationData[0].unique_tech);
  } catch(error) {
    displayErrorMessage();
  }
}
  fetchCivInfo();

  function displayErrorMessage() {
    const errorImage = document.createElement("img");
    errorImage.src = "Assets/AOE-error.png"
    errorImage.alt = "404 install error"
    civilizationContainer.appendChild("errorImage");
  }

  //we need to loop through the civilizations array to access the values.
  //note this should be inside the fetchCivInfo function

  //ex. console.log(civilizationData[0].name)

  // function showCivilizationInfo(data) {

  //   //Add civilization one name
  //   const civilizationOneName = document.createElement("h2")
  //   civilizationName.innerText = `${civilizationData.name}`; 
  //   civilizationOne.appendChild(civilizationOneName);
  
  //   ////Add civilization two name
  //   const civilizationTwoName = document.createElement("h2")
  //   civilizationName.innerText = `${civilizationData.name}`; 
  //   civilizationTwo.appendChild(civilizationTwoName);
  
  //   //Add civilization one info
  //   const civilizationOneInfo = document.createElement("h3");
  //   civilizationOneInfo.innerText = `${civilizationData.}`;
  //   civilizationOneAspects.appendChild();

  //   //Add civilization two info
  //   const civilizationTwoInfo = document.createElement("h3");
  //   civilizationTwoInfo.innerText = `${civilizationData.}`;
  //   civilizationTwoAspects.appendChild(civilizationTwoInfo);
  // }