import Picture from "./assets/jp.jpg";

export default function load() {
  const div = document.createElement("div");
  const headline = document.createElement("h1");
  headline.textContent = "Besto Resutorantsu";
  div.appendChild(headline);
  const description = document.createElement("p");
  description.textContent = "lorem ipsum";
  div.appendChild(description);
  const picture = new Image();
  picture.src = Picture;
  div.appendChild(picture);

  document.body.appendChild(div);
}
