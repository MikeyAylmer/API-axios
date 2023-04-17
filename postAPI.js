// async function getUsers(){
//     const res = await axios.get('https://reqres.in/api/users');
//     console.log(res);
// }
// // when we send the get we get a whole bunch of users back.

// async function createUser(){
//     const res = await axios.post('https://reqres.in/api/users',
//     {username: 'BowserTheFrenchie', email: "Frenchiesrthebest@yahoo.com", age: 4});
//     console.log(res);
// }
// // when we send a post request we typically send info with it and that info will be used to send some sort of response back to us
// // that includes that data.
// getUsers();
// createUser();

async function getUsers(token){
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', {params: { token }});
    console.log(res);
}

// below is an async function to create a new username, password and name
async function signUp(username, password, name){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', 
    {user: {name, username, password} } )
    console.log(res);
}
// the above function is to create a user and give us a token to login
async function login(username, password,){
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', 
    {user: {username, password} } )
    console.log(res);
    return res.data.token;
}

// getUsers();
// signUp('PhaserFace', 'school', 'Gan')

//below we are logging in using the Phaserface credentials hard-coded then passing the token to getUsers() to give use permission to call getUsers()
async function getUsersWithAuth(){
    const token = await login('PhaserFace', 'school');
    getUsers(token);
}
// getUsersWithAuth()

//
async function createStory(){
    const token = await login('PhaserFace', 'school');
    const newStory = {
        token,
        story: {
            author: 'PhaserFace',
            title : 'School of Hack',
            url: 'http://google.com'
        }
    }
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res);
 }

createStory();
// so we make one request to sign someone up or if we already have credentials we log in that gives us a token back
// we then send a POST request and we have to add data in. we follow the rules of the API.
// in this case we need to log in, we need to pass in a user and the user needs to have to properties username and password.
// those need to match something in the database. so a user thats already been signed up or registered. if it does
// we get back a token save it
