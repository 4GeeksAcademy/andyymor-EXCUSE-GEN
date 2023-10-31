/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theExcuse").innerHTML = generateExcuse();
  });
};
const generateExcuse = () => {
  let who = ["that cat", "a bird", "some fish"];
  let how = ["mauled", "deep fried", "cooked"];
  let what = ["that car", "some shoes", "a large diamond"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let howIndex = Math.floor(Math.random() * how.length);
  let whatIndex = Math.floor(Math.random() * what.length);

  return who[whoIndex] + " " + how[howIndex] + " " + what[whatIndex];
};
