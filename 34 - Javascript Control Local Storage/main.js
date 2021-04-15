// Select elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

window.onload = function () {
  theInput.focus();
};

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    theInput.focus();

    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-items")) {
      showItems();
    }

    if (e.target.classList.contains("delete-all-items")) {
      deleteAllItems();
    }
  });
});

function showMessage() {
  if (theInput.value === "") {
    results.innerHTML = "Input can't be empty";
  }
}

function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found local storage item called <span>${theInput.value}</span>`;

      theInput.value = "";
    } else {
      results.innerHTML = `No local storage item called <span>${theInput.value}</span> is found`;

      theInput.value = "";
    }
  } else {
    showMessage();
  }
}

function addItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found local storage item called <span>${theInput.value}</span>`;

      theInput.value = "";
    } else {
      localStorage.setItem(theInput.value, "Control Local Storage");

      results.innerHTML = `Local storage item <span>${theInput.value}</span> is added`;

      theInput.value = "";
    }
  } else {
    showMessage();
  }
}

function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);

      results.innerHTML = `Local storage item called <span>${theInput.value}</span> is deleted`;

      theInput.value = "";
    } else {
      results.innerHTML = `No local storage item called <span>${theInput.value}</span> is found`;
    }
  } else {
    showMessage();
  }
}

function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";

    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class='keys'>${key}: ${value}</span>`;
    }
  } else {
    results.innerHTML = `Local storage is empty`;
  }
}

function deleteAllItems() {
  if (localStorage.length) {
    localStorage.clear();

    results.innerHTML = `All items are deleted`;
  } else {
    results.innerHTML = `Local storage is empty`;
  }
}
