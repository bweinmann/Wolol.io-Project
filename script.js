//https://age-of-empires-2-api.herokuapp.com/docs/


async function fetchCivInfo() {
  try {
    const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
    const res = await axios.get(`https://boiling-mountain-84087.herokuapp.com/${url}`)
    console.log(res);
  } catch(error) {
    console.error(error)};
  }

  fetchCivInfo();