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
    civilizationData.forEach((civObject) => {
    showCivilizationInfo(civObject);
    })
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

  //we need to loop through the civilizations array [0] through [32] to access the values.
  //note this should be inside the fetchCivInfo function

  //ex. console.log(civilizationData[0].name)

  function showCivilizationInfo(data) {
    console.log(data);

    //Add civilization one name
    const civilizationOneName = civilizationOne;
    civilizationOneName.innerText = `${data.civilizations.name}`; 
    civilizationOne.appendChild(civilizationOneName);
  
    ////Add civilization two name
    const civilizationTwoName = civilizationTwo
    civilizationTwoName.innerText = `${data.civilizations.name}`; 
    civilizationTwo.appendChild(civilizationTwoName);
  
    //Add civilization one info
    const civilizationOneInfo = civilizationOneAspects;
    civilizationOneInfo.innerText = `${data.civilizations.name}`;
    civilizationOneAspects.appendChild(civilizationOneInfo);

    //Add civilization two info
    const civilizationTwoInfo = civilizationTwoAspects;
    civilizationTwoInfo.innerText = `${data.civilizations.name}`;
    civilizationTwoAspects.appendChild(civilizationTwoInfo);
  }

  // const searchForm = document.querySelector();
  // const searchInput = document.querySelector();

  // searchForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    console.log(searchInput.value);
    let inputValue = searchInput.value;
    searchInput.value = "";
    console.log(inputValue);
    fetchCivInfo(inputValue);
    removeCiv();
  }

  //Remove the previous civ info

  function removeCivInfoContainer1() {

  }

  function removeCivInfoContainer2() {

  }