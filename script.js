//querySelector returns FIRST match
//getElementById returns element with matching id(only ONE ID allowed in html)

// User Information Object - IDEA: PUSH TO DATABASE?
const userInfo = {
  apiKey: "",
};

// HTML ID SELECTORS
// User Input Textbox
const userInput = document.getElementById("userInput");

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
  const inputText = userInputForm.userInput.value;

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
// document.getElementById("game-1").innerHTML = "Test1";
// document.getElementById("game-2").innerHTML = "Test2";
// document.getElementById("game-3").innerHTML = "Test3";
// document.getElementById("game-4").innerHTML = "Test4";
// document.getElementById("game-5").innerHTML = "Test5";
// document.getElementById("game-6").innerHTML = "Test6";
// document.getElementById("game-7").innerHTML = "Test7";
// document.getElementById("game-8").innerHTML = "Test8";
// document.getElementById("game-9").innerHTML = "Test9";
// document.getElementById("game-10").innerHTML = "Test10";
