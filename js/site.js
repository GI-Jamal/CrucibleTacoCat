function getValues() {
  document.getElementById("alert").classList.remove("alert-danger");
  document.getElementById("alert").classList.remove("alert-success");
  document.getElementById("alert").classList.add("d-none");

  let userInput = document.getElementById("message").value;

  checkInput = userInput.replaceAll(/[^a-zA-Z0-9]/g, "");

  if (checkInput == "") {
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
  let reverseMessage = "";

  messageSanitized = message.replaceAll(/[^a-zA-Z0-9]/g, "");

  for (i = messageSanitized.length - 1; i >= 0; i--) {
    results += messageSanitized[i];
  }

  for (i = message.length - 1; i >= 0; i--)
  {
    reverseMessage += message[i]
  }

  if (results.toLowerCase() == messageSanitized.toLowerCase()) {
    return [true, reverseMessage];
  } else {
    return [false, reverseMessage];
  }
}

function displayResults(results) {
  document.getElementById("msg").textContent = results[1];

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
