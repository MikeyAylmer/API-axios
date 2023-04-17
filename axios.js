async function getLaunches(){
    const res = await axios.get('https://api.spacexdata.com/v3/launches');
    renderLaunches(res.data);
    
}

//we put this in a seperate function so now we can just call this function inside the axios request.
function renderLaunches(launches){
    const ul = document.querySelector('#launches');
    for(let launch of launches){
        // then we append that <li> and append it to the <ul>.
        ul.append(makeLaunchLI(launch));
       
    }
}

function makeLaunchLI(launch){
    const newLI = document.createElement('LI');
        const mission = document.createElement('B');
        //wrapping the appended text with a bold tag element.
        mission.innerText = launch.mission_name
        // here we take the bold tag and append it to the empty <li>.
        newLI.append(mission)
        //then to add the launch details to the <li> as well
        newLI.innerHTML += ` - ${launch.details}`
        return newLI;
}

// we set an event listener to the button to append the API data.
const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getLaunches);