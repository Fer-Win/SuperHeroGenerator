const randomBtn= document.getElementById("randomHero");
const imgDiv = document.getElementById("heroImg");
const  heroBtn = document.getElementById("getHero");
const heroSearch = document.getElementById("searchInput");


const access_token = '1384550775447844'
const BASE_URL = `https://www.superheroapi.com/api.php/${access_token}`


const getSearchHero =(name)=>{
 
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json=>{
    console.log(json)
    imgDiv.innerHTML='';
  json.results.forEach(result =>{
          imgDiv.innerHTML +=`<img height=300 width=300 src="${result.image.url}">`
  })
  })
}
const getRandomSuperHero= (id) =>{
  fetch(`${BASE_URL}/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    imgDiv.innerHTML =`<img height=300 width=300 src="${json.image.url}">`
  })
}

randomBtn.onclick=()=>{
  let randomId = Math.ceil(Math.random()*731)
  getRandomSuperHero(randomId)
}
heroBtn.onclick = () => getSearchHero(heroSearch.value);
h