export default function load() {
  const content = document.getElementById("content");
  const contactTab = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Contact us";
  contactTab.appendChild(headline);
  const description = document.createElement("p");
  description.textContent = "lorem ipsum";
  contactTab.appendChild(description);

  content.appendChild(contactTab);
}
