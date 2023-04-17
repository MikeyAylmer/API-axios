async function getRandomDog(){
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
   const img = document.querySelector('#dog');
    img.src= res.data.message;
};
// the above function appends random dog images from an API to an img src.

async function getDogByBreed(breed){
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector('#dog');
    img.src = res.data.message;
}
