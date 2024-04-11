// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const heartButton = document.getElementById("heartButton");
  const errorModal = document.getElementById("errorModal");
  const errorMessage = document.getElementById("errorMessage");

  heartButton.addEventListener("click", () => {
      mimicServerCall()
          .then(() => {
              // Mimicked server returns success
              heartButton.innerText = "Full Heart";
              heartButton.classList.add("activated-heart");
          })
          .catch(() => {
              // Mimicked server returns failure
              errorMessage.innerText = "Error: Server request failed.";
              errorModal.classList.remove("hidden");

              // Hide modal after 3 seconds
              setTimeout(() => {
                  errorModal.classList.add("hidden");
              }, 3000);
          });
  });

  // Toggle heart on click (full heart to empty)
  heartButton.addEventListener("click", () => {
      if (heartButton.innerText === "Full Heart") {
          heartButton.innerText = "Empty Heart";
          heartButton.classList.remove("activated-heart");
      }
  });

  function mimicServerCall() {
      return new Promise((resolve, reject) => {
          // Simulate server response (50% success rate)
          setTimeout(() => {
              const isSuccess = Math.random() < 0.5; // 50% chance of success
              if (isSuccess) {
                  resolve();
              } else {
                  reject();
              }
          }, 1000); // Simulate delay of 1 second
      });
  }
});
