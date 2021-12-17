//https://age-of-empires-2-api.herokuapp.com/docs/




// const menu_btn = document.querySelector(".hamburger");

// menu_btn.addEventListener('click', function () {
//   menu_btn.classList.toggle('is-active')
// })

window.onscroll = function() {stickyNav()};
let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky"); 
  } else {
    navbar.classList.remove("sticky");
  }
}




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
const civ1Info = document.querySelector(".civ-1-info");
const civ2Info = document.querySelector(".civ-2-info");



let civInfo = [];

async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`);
    const civData = res.data.civilizations;
    console.log(civData);
    civInfo = civData;
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
  let name = civ[i].name
  let civ1Selection = document.createElement("option");
  let civ2Selection = document.createElement("option");
  civ1Selection.innerHTML = `${name}`;
  civ2Selection.innerHTML = `${name}`;
  civ1List.appendChild(civ1Selection)
  civ2List.appendChild(civ2Selection) 
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
     showTeamBonus1(foundCiv);
     showCivilizatoinBonus1(foundCiv)
      console.log(foundCiv);
      const civ1Input = document.createElement("h1");   
        civ1Input.innerText = `${civ1}`;     
        civ1Name.appendChild(civ1Input); 
          
      }

   function showCiv2(civ2) {  
    removeCivInfoContainer2()
    const foundCiv = civInfo.find(civ => {
      return civ.name === civ2;
    })    
    showCiv2ArmyType(foundCiv);
    showTeamBonus2(foundCiv);
    showCivilizatoinBonus2(foundCiv)
    const civ2Input = document.createElement("h1");        
    civ2Input.innerText = `${civ2}`;       
    civ2Name.appendChild(civ2Input)         
   }

   function showCiv1ArmyType(civ) {
    const civ1AT = document.createElement("li")
    civ1AT.innerText = `Army Type: ${civ.army_type}`
    civ1Aspects.appendChild(civ1AT);
  }

    function showCiv2ArmyType(civ) {
      const civ2AT = document.createElement("li")
      civ2AT.innerText = `Army Type: ${civ.army_type}`
      civ2Aspects.appendChild(civ2AT);
    }

    function showTeamBonus1(civ) {
      const civ1TB = document.createElement("li")
      civ1TB.innerText = `Team Bonus: ${civ.team_bonus}`
      civ1Aspects.appendChild(civ1TB);
    }

    function showTeamBonus2(civ) {
      const civ2TB = document.createElement("li")
      civ2TB.innerText = `Team Bonus: ${civ.team_bonus}`
      civ2Aspects.appendChild(civ2TB);
    }

    function showCivilizatoinBonus1(civ) {
      const civ1Bonus = document.createElement("li")
      civ1Bonus.innerText = `Civilization Bonus: ${civ.civilization_bonus}`
      civ1Aspects.appendChild(civ1Bonus);
    }

    function showCivilizatoinBonus2(civ) {
      const civ2Bonus = document.createElement("li")
      civ2Bonus.innerText = `Civilization Bonus: ${civ.civilization_bonus}`
      civ2Aspects.appendChild(civ2Bonus);
    }


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
    
  }

  function handleSubmit2(event) {
    event.preventDefault();
    let inputValue2 = document.getElementById("select-civ-2");
    let newInput2 = inputValue2.options[inputValue2.selectedIndex].value
    showCiv2(newInput2);
  
  }
  //Remove the previous civ info

  function removeCivInfoContainer1() {
      civ1Name.innerText = "";
      civ1Aspects.innerText = "";  
  }

  function removeCivInfoContainer2() {
      civ2Name.innerHTML = ""; 
      civ2Aspects.innerText = "";
}
