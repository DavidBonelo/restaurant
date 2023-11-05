export default function load() {
  const content = document.getElementById("content");
  const menuTab = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Best Menú";
  menuTab.appendChild(headline);
  const description = document.createElement("p");
  description.textContent = "lorem ipsum";
  menuTab.appendChild(description);

  content.appendChild(menuTab);
}
