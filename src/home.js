export default function load() {
  const content = document.getElementById("content");
  const homeTab = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Home";
  homeTab.appendChild(headline);
  const description = document.createElement("p");
  description.textContent = "lorem ipsum";
  homeTab.appendChild(description);

  content.appendChild(homeTab);
}
