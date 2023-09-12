function changeTabs(event, tabName) {
  const tabContents = document.querySelectorAll(".tabcontent");
  tabContents.forEach((tab) => {
    tab.style.display = "none";
  });
  const tabMainLinks = document.querySelectorAll(".tabMainLinks");
  tabMainLinks.forEach((link) => {
    link.classList.remove("active");
  });
  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = "block";
  event.currentTarget.classList.add("active");
}

function displayAge() {
  const date = new Date();
  const year = date.getFullYear();
  document.getElementById("age").innerHTML = year - 1999;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownCaret = document.querySelector(".arrow");
  const dropdownContent = document.querySelector(".dropdown-content");
  // add click event to dropdown button
  dropdownBtn.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent.classList.toggle("menu-open");
    dropdownBtn.setAttribute(
      "aria-expanded",
      dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });

  dropdownContent.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret.classList.remove("arrow-rotate");
    // add open styles to menu element
    dropdownContent.classList.remove("menu-open");
    dropdownBtn.setAttribute(
      "aria-expanded",
      dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
  });
});
