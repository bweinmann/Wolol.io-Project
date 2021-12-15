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

const civ1Container = document.querySelector(".civ-1-container");
const civ2Container = document.querySelector(".civ-2-container");
const civ1Name = document.querySelector("#civ-1-name");
const civ2Name = document.querySelector("#civ-2-name");
const civ1Aspects = document.querySelector("#civ-1-aspects");
const civ2Aspects = document.querySelector("#civ-2-aspects");
const civ1Input = document.querySelector("#civilization-1");
const civ2Input = document.querySelector("#civilization-2");
const civ1List = document.querySelector("#select-civ-1");
const civ2List = document.querySelector("#select-civ-2");

let civInfo = [];

async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civData = res.data.civilizations;
    console.log(civData);
    civInfo = civData;
    // civData.forEach((civObj) => {
    //   (civObj);
    // })
    selectCiv(civData)
  } catch(error) {
    console.error(error);
    // displayErrorMessage();
  }
}

fetchCivInfo();



function selectCiv (civ) {
  console.log(civ)
  for (let i = 0; i< civ.length; i++) {
  let name = civ[i].name;
  // let expansion = civ[i].expansion;
  // console.log(expansion);
  let civ1Selection = document.createElement("option");
  let civ2Selection = document.createElement("option");
  civ1Selection.innerHTML = `${name}`;
  civ2Selection.innerHTML = `${name}`;
  civ1List.appendChild(civ1Selection)
  civ2List.appendChild(civ2Selection) 
  // civ1Selection.value = i;
  // civ2Selection.value = i;
  // civ1Aspects.appendChild(civ1Selection);
  // civ1Aspects.appendChild(civ2Selection);
}
}

  // function displayErrorMessage() {
  //   const errorImage = document.createElement("img");
  //   errorImage.src = "Assets/AOE-error.png"
  //   errorImage.alt = "404 install error"
  //   civContainer.appendChild("errorImage");
  // }

  function showCiv1(civ1) {
    removeCivInfoContainer1()
     const foundCiv = civInfo.find(civ => {
       return civ.name === civ1;
     })
     showCiv1ArmyType(foundCiv);
      console.log(foundCiv);
      const civ1Input = document.createElement("h1");   
        civ1Input.innerText = `${civ1}`;     
        civ1Name.appendChild(civ1Input); 
          
      }

   function showCivName2(civ2) {      
    const civ2Input = document.createElement("h1");        
    civ2Input.innerText = `${civ2}`;       
    civ2Name.appendChild(civ2Input)         
   }

   function showCiv1ArmyType(civ) {
    const civ1AT = document.createElement("li")
    civ1AT.innerText = `${civ.army_type}`
    civ1Aspects.appendChild(civ1AT);
  }

    function showCiv2ArmyType(civ) {
      const civ2AT = document.createElement("li")
      civ2AT.innerText = `${civ.army_type}`
      civ2Aspects.appendChild(civ2AT);
    }

    // }
    // function showciv2Expansion(civ2) {
    //   const civ2Exp = document.createElement("li");
    //   let expansion = 
    //   console.log(expansion);
    //   civ2Aspects.appendChild(civ2Exp);
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
    event.preventDefault();
    let inputValue1 = document.getElementById("select-civ-1");
    let newInput1 = inputValue1.options[inputValue1.selectedIndex].value
    showCiv1(newInput1);
    // showciv1Expansion(newInput1);
    
  }

  function handleSubmit2(event) {
    event.preventDefault();
    let inputValue2 = document.getElementById("select-civ-2");
    let newInput2 = inputValue2.options[inputValue2.selectedIndex].value
    showCivName2(newInput2);

    // removeCivInfoContainer2()
   
  }
  //Remove the previous civ info

  function removeCivInfoContainer1() {
      civ1Name.innerText = "";  
  }

  function removeCivInfoContainer2() {
    civ2Container.innerHTML = "";  
}

  //filtering out key:values in the civ object

  // function filterCiv1Object() {
  //   for (let value of Object.values(civData)) {
  //     if (Object.keys === ("name" || "id") {
  //       value = null;
  //     }
  //   }
  //