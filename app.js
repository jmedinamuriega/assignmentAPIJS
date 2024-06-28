
//I do const the keys that the marvelAPI gives to me so I can call those by the name
const publicKey = '2915381d746dbf70319697668b4b0362';
const privateKey = '12d3ee1c3f7df7af386a8100040729261679e88f';
const ts = new Date().getTime();
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
//TS is something is a timestamp, this is usefull to guarantee the autenticity of the API solucitude and the hash creation
//The hash is required by the API 

//Obtain and show characters
//The use of async function allows the use of await in the function, made that we can work with promises easier
async function fetchAndDisplayCharacters() {
  //Error catching
  try {
    //This line of code makes a solicitude to the MarvelAPI, and the keyword await, pauses the execution of the function until it is done.
    //and it includes ts, publicKey, and hash, that are required by the API
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    //THis line do something similar to the const response, again await makes sure that the function waits until the JSON done
    const data = await response.json();
    //This extracts the array of characters in the API's response
    const characters = data.data.results;
    //This obtains a reference to the HTML elemnt with the id characters container
    const container = document.getElementById('characters-container');
    container.innerHTML = ''; // Clear the container before appending new data

    characters.forEach(character => {
      //and this is the HTML interaction
      const characterElement = document.createElement('div');
      characterElement.classList.add('character');
      characterElement.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
        <p>${character.description || 'No description available.'}</p>
      `;
      container.appendChild(characterElement);
    });
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}

//And this made CupCakes

fetchAndDisplayCharacters();

//i am joking here I am calling the function!
