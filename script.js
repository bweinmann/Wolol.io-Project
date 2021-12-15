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
const civ2Aspects = document.querySelector("#civ-2-aspects");
const civ1Input = document.querySelector("#civilization-1");
const civ2Input = document.querySelector("#civilization-2");
const civ1List = document.querySelector("#select-civ-1");
const civ2List = document.querySelector("#select-civ-2");


async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civData = res.data.civilizations;
    // console.log(civData);
    selectCiv(civData)
    // civData.forEach((civObj) => {
    //   showcivName(civObj)
    // });
    
    // showcivName(civData);
    // showciv2Name(civData);

  } catch(error) {
    console.error(error);
    displayErrorMessage();
  }
}

fetchCivInfo();

  function displayErrorMessage() {
    const errorImage = document.createElement("img");
    errorImage.src = "Assets/AOE-error.png"
    errorImage.alt = "404 install error"
    civContainer.appendChild("errorImage");
  }

  function showCivName1(civ1) {
    
      const civ1Input = document.createElement("h1");
     
        civ1Input.innerText = `${civ1}`;
       
        civ1Name.appendChild(civ1Input);
       

      }

   function showCivName2(civ2) {
        
        const civ2Input = document.createElement("h1");
        
          civ2Input.innerText = `${civ2}`;
          
          
          civ2Name.appendChild(civ2Input);
          
        }


    function selectCiv (civ) {
        for (let i = 0; i< civ.length; i++) {
        let name = civ[i].name;
        let civ1Selection = document.createElement("option");
        let civ2Selection = document.createElement("option");
        civ1Selection.innerHTML = `${name}`;
        civ2Selection.innerHTML = `${name}`;
        civ1List.appendChild(civ1Selection)
        civ2List.appendChild(civ2Selection)
        
    }
  }
      


     //Add civ 1 info
  // function showciv1Aspects(civ1) {

  //    const civ1Info = document.createElement("h2")

  //    civ1Info.innerText = `${data.civs}`;

  //    civ1Aspects.appendChild(civ1Info);
  // }
    
    //Add civ two info
    // const civTwoInfo = civTwoAspects;
    // civTwoInfo.innerText = `${data.civs}`;
    // civTwoAspects.appendChild(civTwoInfo);
  // }

  const searchForm1 = document.querySelector("#select-civ-1");
  const searchForm2 = document.querySelector("#select-civ-2");
  const searchInput1 = document.querySelector(".civ-1-list");
  const searchInput2 = document.querySelector(".civ-2-list");

  searchForm1.addEventListener("change", handleSubmit1);
  searchForm2.addEventListener("change", handleSubmit2);

  function handleSubmit1(event) {
    // removeCivInfoContainer();
    let inputValue1 = document.getElementById("select-civ-1");
    let newInput1 = inputValue1.options[inputValue1.selectedIndex].value
    showCivName1(newInput1);
    // removeCivInfoContainer1()
    
  }

  function handleSubmit2(event) {
    let inputValue2 = document.getElementById("select-civ-2");
    let newInput2 = inputValue2.options[inputValue2.selectedIndex].value
    // console.log(newInput2)
    showCivName2(newInput2);
    // removeCivInfoContainer2()
   
  }
  //Remove the previous civ info

//   function removeCivInfoContainer1() {
//       civ1Name.innerHTML = "";
      
//   }

//   function removeCivInfoContainer2() {
//     civ2Name.innerHTML = "";
    
// }
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