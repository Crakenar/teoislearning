function changeTabs(event, tabName) {
    const tabContents = document.querySelectorAll(".tabcontent");
    tabContents.forEach(tab => {
        tab.style.display = "none";
    });
    const tabMainLinks = document.querySelectorAll(".tabMainLinks");
    tabMainLinks.forEach(link => {
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