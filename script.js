//querySelector returns FIRST match
//getElementById returns element with matching id(only ONE ID allowed in html)

// User Information Object - IDEA: PUSH TO DATABASE?
const userInfo = {
  apiKey: "",
};

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
    document.getElementById(`game-${i}`).innerHTML = `Display${i}`;
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
