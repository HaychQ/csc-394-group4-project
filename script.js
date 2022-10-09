//querySelector returns FIRST match
//getElementById returns element with matching id(only ONE ID allowed in html)
/*TODO
CREATE LOGIN SECTION
-Add Eventlistener onclick, store Username & Password into userInfo Object
*/

/* 
name="" inside HTML Forms - For Database
User Steam Id => steamid
UserAPI Key   => apikey
Username      => username
Password      => password
*/

// User Information Object - IDEA: PUSH TO DATABASE?
const userInfo = {
  steamId: "",
  apiKey: "",
  username: "",
  password: "",
};

const imageList = ["https://i.postimg.cc/GmBrBqkV/steam-card-17.jpg", "https://i.postimg.cc/SsbybCY5/steam-card-5.jpg"];

// HTML ID SELECTORS

// User Input Textboxes
const user_SteamId = document.getElementById("userSteamId");
const user_ApiKey = document.getElementById("userApiKey");

// User Submit Button
const btn_UserInput = document.getElementById("btn_UserInput");

// Form - Contains API Key(string) given by User
const user_InputForm = document.getElementById("userInputForm");

// Individual Game Selectors
// const game1 = document.getElementById("game-1");

btn_UserInput.addEventListener("click", function (event) {
  // PREVENTS FORM SUBMISSION
  event.preventDefault();

  if (isUserInputValid()) {
    // Storing User Steam ID & User API Key into userInfo object
    userInfo.steamId = user_InputForm.userSteamId.value;
    userInfo.apiKey = user_InputForm.userApiKey.value;

    console.log("User Steam ID: ", userInfo.steamId);
    console.log("User API KEY: ", userInfo.apiKey);
    console.log("userInfo: ", userInfo);

    //Call function to display games
    displayGames();
  } else {
    alert("Please enter Steam ID and Steam API Key");
  }
});

// Checks that User has provided SteamId & Api Key
function isUserInputValid() {
  const id = user_InputForm.userSteamId.value;
  const key = user_InputForm.userApiKey.value;

  if (id.length !== 0 && key.length !== 0) return true;
  else return false;
}

/* 
  Updates Game slot - Example/Placeholder - Game image will be displayed here
  Updates each game using String literals
*/
function displayGames() {
  for (let i = 1; i < 11; i++) {
    // document.getElementById(`game-${i}`).innerHTML = `Display${i}`;
    if (i < 6) {
      document.getElementById(`game-${i}`).innerHTML = `<img src=${imageList[0]}/>`;
    } else document.getElementById(`game-${i}`).innerHTML = `<img src=${imageList[1]}/>`;
  }
}
/*
document.getElementById("game-1").innerHTML = "Display1";
document.getElementById("game-2").innerHTML = "Display2";
document.getElementById("game-3").innerHTML = "Display3";
document.getElementById("game-4").innerHTML = "Display4";
document.getElementById("game-5").innerHTML = "Display5";
document.getElementById("game-6").innerHTML = "Display6";
document.getElementById("game-7").innerHTML = "Display7";
document.getElementById("game-8").innerHTML = "Display8";
document.getElementById("game-9").innerHTML = "Display9";
document.getElementById("game-10").innerHTML = "Display10";
*/
