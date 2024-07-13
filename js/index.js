getsearchName("");
// Nav open and close
$(document).on("click", ".fa-x", function () {
  closeNav();
});
$(document).on("click", ".fa-align-justify", function () {
  $("nav").animate({ left: "0" }, 800);
  $("#navList").animate({ top: "0" }, 1000);
  $(this).removeClass("fa-align-justify").addClass("fa-x");
});
function closeNav() {
  $("nav").animate({ left: "-260px" }, 800);
  $("#navList").animate({ top: "100%" }, 1000);
  $(".fa-x").removeClass("fa-x").addClass("fa-align-justify");
}
// Item animation
$(document).ready(function () {
  // Use event delegation to handle hover events on dynamically created elements
  $(document).on("mouseenter", ".col-md-3", function () {
    $(this).find(".itemName").stop().animate({ top: "0%" }, 500);
  });

  $(document).on("mouseleave", ".col-md-3", function () {
    $(this).find(".itemName").stop().animate({ top: "100%" }, 500);
  });
});
// Spinner enable & disable
function displaySpinner() {
  $(".spinner").fadeOut(600, function () {
    $(this).removeClass("d-none");
  });
}
function disableSpinner() {
  $(".spinner").fadeOut(600, function () {
    $(this).addClass("d-none");
  });
}
// Nav links on click
function removeItemView() {
  $("#categoriesView").removeClass("d-none");
  $("#mealView").addClass("d-none");
}
$(document).on("click", "#categories", function () {
  getCategories();
  removeItemView();
  closeNav();
});
$(document).on("click", "#area", function () {
  getAreas();
  removeItemView();
  closeNav();
});
$(document).on("click", "#ingredients", function () {
  getIngredients();
  removeItemView();
  closeNav();
});
$(document).on("click", "#search", function () {
  getSearch();
  removeItemView();
  closeNav();
});
$(document).on("click", "#contact", function () {
  document.getElementById("categoriesView").innerHTML = `
   <div class="container w-75 text-center mt-5">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled="" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>`;
  closeNav();
  submitBtn = document.getElementById("submitBtn");
  document.getElementById("nameInput").addEventListener("blur", function () {
    if (nameValidation()) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  document.getElementById("emailInput").addEventListener("blur", function () {
    if (emailValidation()) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  document.getElementById("phoneInput").addEventListener("blur", function () {
    if (phoneValidation()) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  document.getElementById("ageInput").addEventListener("blur", function () {
    if (ageValidation()) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
    }
  });
  document
    .getElementById("passwordInput")
    .addEventListener("blur", function () {
      if (passwordValidation()) {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-none", "d-block");
      }
    });
  document
    .getElementById("repasswordInput")
    .addEventListener("blur", function () {
      if (repasswordValidation()) {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-none", "d-block");
      }
    });
});
function inputsValidation() {
  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
}
function nameValidation() {
  return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
}
function emailValidation() {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    document.getElementById("emailInput").value
  );
}
function phoneValidation() {
  return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    document.getElementById("phoneInput").value
  );
}
function ageValidation() {
  return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
    document.getElementById("ageInput").value
  );
}
function passwordValidation() {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
    document.getElementById("passwordInput").value
  );
}
function repasswordValidation() {
  return (
    document.getElementById("repasswordInput").value ==
    document.getElementById("passwordInput").value
  );
}
// Meal Display
async function getMeal(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getMeal = JSON.parse(result);
    displayMeal(getMeal.meals);
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
function displayMeal(meal) {
  $("#categoriesView").addClass("d-none");
  $("#mealView").removeClass("d-none");
  cartona = "";
  for (let i = 0; i < 20; i++) {
    let result = meal[0][`strIngredient${i}`];
    if (result != null && result != "") {
      cartona += `<li class="alert alert-info m-2 p-1">${result}</li>`;
    }
  }
  if (meal[0].strTags == null) {
    meal[0].strTags = "";
  }
  $("#mealView").html(`
        <i class="fa-solid fa-xmark closeItem" onclick="removeItemView()"></i>
    <div class="row py-5 g-4" id="rowData">
          <div class="col-md-4">
            <img
              class="w-100 rounded-3"
              src="${meal[0].strMealThumb}"
              alt=""
            />
            <h2>${meal[0].strMeal}</h2>
          </div>
          <div class="col-md-8">
            <h2>Instructions</h2>
            <p>
              ${meal[0].strInstructions}
            </p>
            <h3><span class="fw-bolder">Area : </span>${meal[0].strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${meal[0].strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">  
                ${cartona}
            </ul>
            <h3>Tags : ${meal[0].strTags}</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap"></ul>
               
            <a
              target="_blank"
              href="${meal[0].strSource}"
              class="btn btn-success"
              >Source</a
            >
            <a
              target="_blank"
              href="${meal[0].strYoutube}"
              class="btn btn-danger"
              >Youtube</a
            >
          </div>
        </div>`);
}
function displayMealsList(value) {
  let rowDiv = document.querySelector(".row");
  let cartona = "";
  for (let i = 0; i < value.length; i++) {
    cartona += `<div class="col-md-3 mt-5">
              <div class="item position-relative overflow-hidden"  onclick="getMeal('${value[i].idMeal}')">
              <img src="${value[i].strMealThumb}" alt="" class="w-100" />
              <div class="itemName p-4 meal">
              <h3>${value[i].strMeal}</h3>
              </div>
              </div>
              </div>`;
  }
  rowDiv.innerHTML = cartona;
}
// Category functions and displays
async function getCategories() {
  const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getCategories = JSON.parse(result);
    displayCategories(getCategories.categories.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
function displayCategories(category) {
  let rowDiv = document.querySelector(".row");
  let cartona = "";
  for (let i = 0; i < category.length; i++) {
    cartona += `<div class="col-md-3 mt-5">
        <div class="item position-relative overflow-hidden" onclick="getCategoriesDetails('${category[i].strCategory}')">
        <img src="${category[i].strCategoryThumb}" alt="" class="w-100" />
        <div class="itemName p-4">
        <h3>${category[i].strCategory}</h3>
        <p>${category[i].strCategoryDescription}</p>
        </div>
        </div>
        </div>`;
  }
  rowDiv.innerHTML = cartona;
}
async function getCategoriesDetails(catName) {
  const catDetails = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`;
  const catOptions = {
    method: "GET",
  };

  try {
    displaySpinner();
    const responseCat = await fetch(catDetails, catOptions);
    const resultCat = await responseCat.text();
    let getCategories = JSON.parse(resultCat);
    displayMealsList(getCategories.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
// Area functions and displays
async function getAreas() {
  const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getareas = JSON.parse(result);
    displayAreas(getareas.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
function displayAreas(area) {
  let rowDiv = document.querySelector(".row");
  let cartona = "";
  for (let i = 0; i < area.length; i++) {
    cartona += `<div class="col-md-3 mt-5">
          <div class="item position-relative overflow-hidden text-center text-white"
            onclick="getAreasDetails('${area[i].strArea}')">
          <i class="fa-solid fa-house-laptop fa-4x"></i>
          <h3>${area[i].strArea}</h3>
          </div>
          </div>`;
  }
  rowDiv.innerHTML = cartona;
}
async function getAreasDetails(areaName) {
  const areaDetails = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`;
  const areaOptions = {
    method: "GET",
  };

  try {
    displaySpinner();

    const responsearea = await fetch(areaDetails, areaOptions);
    const resultarea = await responsearea.text();
    let getAreas = JSON.parse(resultarea);

    displayMealsList(getAreas.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
// Ingredients functions and displays
async function getIngredients() {
  const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getIngredients = JSON.parse(result);
    displayIngredients(getIngredients.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
function displayIngredients(Ingredients) {
  let rowDiv = document.querySelector(".row");
  let cartona = "";
  for (let i = 0; i < Ingredients.length; i++) {
    if (Ingredients[i].strDescription == null) {
      Ingredients[i].strDescription = "No description found for this item";
    }

    cartona += `<div class="col-md-3 mt-5">
            <div class="item position-relative overflow-hidden text-center text-white"
              onclick="getIngredientsDetails('${
                Ingredients[i].strIngredient
              }')">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${Ingredients[i].strIngredient}</h3>
            <p>${Ingredients[i].strDescription
              .split(" ")
              .slice(0, 20)
              .join(" ")}</p>
            </div>
            </div>`;
  }
  rowDiv.innerHTML = cartona;
}
async function getIngredientsDetails(ingredientName) {
  const areaDetails = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`;
  const areaOptions = {
    method: "GET",
  };

  try {
    displaySpinner();

    const responseIngredients = await fetch(areaDetails, areaOptions);
    const resultIngredients = await responseIngredients.text();
    let getIngredients = JSON.parse(resultIngredients);

    displayMealsList(getIngredients.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
// Search functions and displays
function getSearch() {
  let rowDiv = document.querySelector(".row");
  rowDiv.innerHTML = `<div class="col-md-6 searchbox">
            <input onkeyup="getsearchName(this.value)" class="form-control bg-transparent text-white customPlaceholder" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6 searchbox">
            <input onkeyup="getsearchLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white customPlaceholder" type="text" placeholder="Search By First Letter">
        </div>
        <div class="row" id="searchInside"></div>
    `;
}
async function getsearchName(searchName) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getsearch = JSON.parse(result);
    searchByName(getsearch.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
async function getsearchLetter(searchLetter) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`;
  const options = {
    method: "GET",
  };

  try {
    displaySpinner();
    const response = await fetch(url, options);
    const result = await response.text();
    let getsearch = JSON.parse(result);
    searchByName(getsearch.meals.slice(0, 20));
    disableSpinner();
  } catch (error) {
    disableSpinner();
    console.error(error);
  }
}
function searchByName(value) {
  let rowDiv = document.querySelector("#searchInside");
  let cartona = "";
  for (let i = 0; i < value.length; i++) {
    cartona += `<div class="col-md-3 mt-5" id="searchedItem">
        <div class="item position-relative overflow-hidden" onclick="getMeal('${value[i].idMeal}')">
        <img src="${value[i].strMealThumb}" alt="" class="w-100" />
        <div class="itemName p-4 meal">
        <h3>${value[i].strMeal}</h3>
        </div>
        </div>
        </div>`;
  }
  rowDiv.innerHTML = cartona;
}
function searchByFLetter(value) {
  displaySpinner();
  let rowDiv = document.querySelector(".row");
  let newChild = `<h3 class="text-white" id="searchedItem">${value}</h3>`;
  let lastChild = rowDiv.querySelector("#searchedItem");
  if (lastChild) {
    rowDiv.removeChild(lastChild);
  }
  rowDiv.insertAdjacentHTML("beforeend", newChild);
}
