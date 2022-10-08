//querySelector returns FIRST match
//getElementById returns element with matching id(only ONE ID allowed in html)
/*TODO
API SECTION - Priority*
-Add Steam User ID Textbox - REQUIRED*
-API KEY - add REQUIRED*
-Display alert if user leaves input empty

CREATE LOGIN SECTION
-Add Eventlistener onclick, store Username & Password into userInfo Object
-Update Design: 
  -Create Account Header
  -Shrink submit button width

-GAME DISPLAY SECTION - Priority*
-Add placeholder image(this will be swapped out using innerHTML). Default image can be left alone IF user doesn't have all 10 games

FUTURE EXTRAS: Add tilt to cards/card grow(x1.1-1.2), Fade-In on site launch for API SECTION
*/

// User Information Object - IDEA: PUSH TO DATABASE?
const userInfo = {
  apiKey: "",
};

const imageList = ["https://i.postimg.cc/GmBrBqkV/steam-card-17.jpg", "https://i.postimg.cc/SsbybCY5/steam-card-5.jpg"];

// HTML ID SELECTORS

// User Input Textbox
const userInputText = document.getElementById("userInputText");

// User Submit Button
const btnUserInput = document.getElementById("btn_UserInput");

// Form - Contains API Key(string) given by User
const userInputForm = document.getElementById("userInputForm");

// Individual Game Selectors
const game1 = document.getElementById("game-1");

btnUserInput.addEventListener("click", function (event) {
  // PREVENTS FORM SUBMISSION
  event.preventDefault();

  // User's text entered - inputText = formId.inputId.value
  const inputText = userInputForm.userInputText.value;

  // Storing user's API Key into userInfo object
  userInfo.apiKey = inputText;

  console.log("User Input: ", inputText);
  console.log("userInfo: ", userInfo);

  //Call function to display games
  displayGames();
});

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
