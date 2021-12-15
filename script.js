//https://age-of-empires-2-api.herokuapp.com/docs/

//what is the overall structure of the data set?
//civs is an object that contains an array of 32 objects, 
//each of the 32 objects contains an object with the exception of civ bonus,
//unique tech and unique unit. 
//*Note that some unique techs and unit contain an empty array*

//how to target the name?
//iterate through the civs array to select civs[i].name

//how to target the array inside 1 of the 32 objects?
//iterate through the array of the civizilization[i].object

//how to target the civ aspects?
//need to exclude the name and the id, how?
//not sure, somehow need to target the name and id key:value pair and remove...

const civContainer = document.querySelector(".civ-info-container");
const civ1Name = document.querySelector("#civ-1-name");
const civ2Name = document.querySelector("#civ-2-name");
const civ1Aspects = document.querySelector("#civ-1-aspects");
const civ2Aspects = document.querySelector("#civ-2-aspects")


async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civ1Data = res.data.civilizations;
    // console.log(res.data);
    console.log(civ1Data); 
    showciv1Name(civ1Data);
    // showcivTwoName();

  } catch(error) {
    console.error(error);
    // displayErrorMessage();
  }
}

fetchCivInfo();

  function displayErrorMessage() {
    const errorImage = document.createElement("img");
    errorImage.src = "Assets/AOE-error.png"
    errorImage.alt = "404 install error"
    civContainer.appendChild("errorImage");
  }

  function showciv1Name(civ) {
    // console.log(civ);
    const currentCiv1Name = document.createElement("h1");
    
    for (let i = 0; i< civ.length; i++) {
        let name = civ[i].name;
        console.log(name);
        currentCiv1Name.innerHTML = `${name}`;
        civ1Name.appendChild(currentCiv1Name);
      }
  }
     //Add civ 1 info
  // function showciv1Aspects
  //    const civ1Info = civ1Aspects;
  //    civ1Info.innerText = `${data.civs}`;
  //    civ1Aspects.appendChild(civ1Info);

    // function showcivTwoName(civ) {
    //   for (let i = 0; i< civ.length; i++) {
    //       let name = civ[i].name;
    //       currentCivTwoName.innerHTML = `${name}`;
    //       civTwo.appendChild(currentCivTwoName);
    //     }
    // }

    //Add civ two info
    // const civTwoInfo = civTwoAspects;
    // civTwoInfo.innerText = `${data.civs}`;
    // civTwoAspects.appendChild(civTwoInfo);
  // }

  const searchForm1 = document.querySelector(".civ-1-menu");
  const searchFormTwo = document.querySelector("civ-2-menu");
  const searchInput1 = document.querySelector(".civ-1");
  const searchInputTwo = document.querySelector("civ-2");

  searchForm1.addEventListener("submit", handleSubmit);

  function handleSubmit() {
    console.log(searchInput1.value);
    // console.log(searchInputTwo.value);
    let inputValue1 = searchInput1.value;
    // let inputValueTwo = searchInputTwo.value;
    searchInput1.value = "";
    // searchInputTwo.value = "";
    console.log(inputValue1);
    // console.log(inputValueTwo);
    fetchCivInfo(inputValue1);
    // fetchCivInfoTwo(inputValueTwo);

    //do I need to remove seperately or together?
    removeCivInfoContainer();
  }

  //Remove the previous civ info

  function removeCivInfoContainer() {
      civContainer.innerHTML = "";
  }

  // function removeCivInfoContainer2() {

  // }

  //filtering out key:values in the civ object

  // function filterCiv1Object() {
  //   for (let value of Object.values(civData)) {
  //     if (Object.keys === ("name" || "id") {
  //       value = null;
  //     }
  //   }
  // }