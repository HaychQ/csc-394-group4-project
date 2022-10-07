//querySelector returns FIRST match
//getElementById returns element with matching id(only ONE ID allowed in html)

// User Information Object - IDEA: PUSH TO DATABASE?
const userInfo = {
  apiKey: "",
};

// const userInput = document.getElementById("userInput").textContent;
// const userInput = document.getElementById("userInput").innerText;
const userInput = document.getElementById("userInput");
const btnUserInput = document.getElementById("btn_UserInput");

// Form - Contains API Key(string) given from User
const userInputForm = document.getElementById("userInputForm");

btnUserInput.addEventListener("click", function (event) {
  // PREVENTS FORM SUBMISSION
  event.preventDefault();

  /* User's text entered - inputText = formId.inputId.value
   */
  const inputText = userInputForm.userInput.value;

  // Storing user's API Key into userInfo object
  userInfo.apiKey = inputText;

  console.log("User Input: ", inputText);
  console.log("userInfo: ", userInfo);
});
