import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import loadFirst from "./first-load.js";

function loadNav() {
  const nav = document.createElement("div");
  const linkHome = document.createElement("a");
  linkHome.textContent = "Home";
  nav.appendChild(linkHome);
  const linkMenu = document.createElement("a");
  linkMenu.textContent = "Menú";
  nav.appendChild(linkMenu);
  const linkContact = document.createElement("a");
  linkContact.textContent = "Contact";
  nav.appendChild(linkContact);
  nav.onclick = switchTab;
  document.body.insertBefore(nav, document.body.firstChild);
}

function switchTab(e) {
  const content = document.getElementById("content");
  const tab = e.target.textContent;
  content.replaceChildren();
  switch (tab) {
    case "Home":
      loadHome();
      break;
    case "Menú":
      loadMenu();
      break;
    case "Contact":
      loadContact();
      break;
    default:
      alert("page not found");
      loadHome();
  }
}

loadNav();
loadFirst();
loadHome();
