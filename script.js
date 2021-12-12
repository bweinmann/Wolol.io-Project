//https://age-of-empires-2-api.herokuapp.com/docs/

async function fetchCivInfo() {
    const url = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`;
    const res = await axios.get(url);
    console.log(res.data)
  }
  fetchCivInfo();