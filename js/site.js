function getValues() {
  let userInput = document.getElementById("message").value.trim();

  if (userInput == "") {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter some text",
      heightAuto: false,
    });
  } else {
    let palindromeResults = checkForPalindrome(userInput);

    displayResults(palindromeResults);
  }
}

function checkForPalindrome(message) {
  let results = "";

  message = message.replaceAll(/[^a-zA-Z]/g, "");

  for (i = message.length - 1; i >= 0; i--) {
    results += message[i];
  }

  if (results.toLowerCase() == message.toLowerCase()) {
    return [true, results];
  } else {
    return [false, results];
  }
}

function displayResults(results) {
  document.getElementById("msg").textContent = results[1];
  document.getElementById("alert").classList.remove("alert-danger");
  document.getElementById("alert").classList.remove("alert-success");

  if (results[0] == true) {
    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("resultsMessage").innerText =
      "Success! Your string is a palindrome.";
  } else {
    document.getElementById("alert").classList.add("alert-danger");
    document.getElementById("resultsMessage").innerText =
      "Failure! Your string is not a palindrome.";
  }
  document.getElementById("alert").classList.remove("d-none");
}
