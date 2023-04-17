async function getDogByBreed(breed){
    //we wrap our code with a try when making a request and any errors will be caught in the corresponding catch block.
    try {
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
    } catch (e) {
        console.log(e);
        alert("BREED NOT FOUND!");
        getRandomDog()

    }
    
}
// to handle error's when using an API we use try and catch methods.

async function getRandomDog(){
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
   const img = document.querySelector('#dog');
    img.src= res.data.message;
};

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener('submit', function(e){
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
   
});

async function getJoke(){
    let res = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(res.data.value);
}

// the next code is jsut examples of using param but the API in the innstructor videos isnt working anymore
// async function getJoke(firstName, lastName)
// { let res = await axios.get(`http:/api.icndb.com/jokes/random`, { params: {firstName, lastName}});
// console.log(res.data.value.joke);}
// getJoke("Butters", "Steele")
// this returns a joke with the params as the value for the key inside the getJoke() params, its just a shorter
// cut instead of templet literal or hard coding.