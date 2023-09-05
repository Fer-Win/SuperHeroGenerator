const randomBtn= document.getElementById("randomHero");
const imgDiv = document.getElementById("heroImg");
const heroStats = document.getElementById("heroStats");
const  heroBtn = document.getElementById("getHero");
const heroSearch = document.getElementById("searchInput");
// const heroName = document.querySelector(".heroName")


const access_token = '1384550775447844'
const BASE_URL = `https://www.superheroapi.com/api.php/${access_token}`


const getSearchHero =(name)=>{
 
  fetch(`${BASE_URL}/search/${name}`)
  .then(response => response.json())
  .then(json=>{
    console.log(json)
    imgDiv.innerHTML='';
    showHeroInfo(json.results[0])
    //  const name = `<h2>${json.results[0].name}</h2>`
    // // heroName.innerText = json.results[0].name;
    //  imgDiv.innerHTML =`${name}<img height=300 width=300 src="${json.results[0].image.url}"<br>${stats}`
    // heroStats.innerHTML = JSON.stringify(json.results[0].powerstats)
    
  // json.results.forEach(result =>{
  //       heroName.innerText = result.name;
  //         imgDiv.innerHTML +=`<img height=300 width=300 src="${result.image.url}">`
  })
}
const statToEMoji= {
  intelligence : '🧠',
  strength:'💪',
  speed:'🐎',
  durability:'🧲',
power:'⚡',
combat:'⚔',
}
const showHeroInfo = (character) =>{
  // for(stat in character.powerstats){
  //   console.log(stat)
  // }
   const name = `<h2>${character.name}</h2>`
 const img =  `<img height=300 width=300 src="${character.image.url}"/><br>`
  const stats=Object.keys(character.powerstats).map(stat=>{
   return `<p>${statToEMoji[stat]} ${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
  }).join('')

   imgDiv.innerHTML =`${name}${img}${stats}`

}

const getRandomSuperHero= (id) =>{
  fetch(`${BASE_URL}/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
  showHeroInfo(json)
     // heroName.innerText = json.name;
    // imgDiv.innerHTML='';
    // const name = `<h2>${json.name}</h2>`
    // imgDiv.innerHTML =`${name}<img height=300 width=300 src="${json.image.url}"<br>${stats}`
  })
}

randomBtn.onclick=()=>{
  let randomId = Math.ceil(Math.random()*731)
  getRandomSuperHero(randomId)
}
heroBtn.onclick = () => getSearchHero(heroSearch.value);
window.addEventListener("keyup",(e)=>{
  if(e.key=='Enter'){
    getSearchHero(heroSearch.value);
  }
 if(e.key=='r' || e.key=='R'){
  let randomId = Math.ceil(Math.random()*731)
  getRandomSuperHero(randomId)
 }
})
