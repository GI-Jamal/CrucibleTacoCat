function getValues() {
  let userInput = document.getElementById('message').value;


  let palindromeResults = checkForPalindrome(userInput);

  displayResults(palindromeResults);
}

function checkForPalindrome(message) {
  let results = '';

  for (i = message.length - 1; i >=0; i--)
  {
    results += message[i];
  }

  if (results == message)
  {
    return [true, results];
  }

  else
  {
    return [false, results];
  }
}

function displayResults(results) {


  document.getElementById("msg").textContent = results[1];
  
  if (results[0] == true)
  {
    
    document.getElementById("alert").classList.add("alert-success");
    document.getElementById('resultsMessage').innerText = 'Success! Your string is a palindrome.'
  }
  else
  {
    document.getElementById("alert").classList.add("alert-danger");
    document.getElementById("resultsMessage").innerText = "Failure! Your string is not a palindrome.";
  }
  document.getElementById("alert").classList.remove("d-none");
}
