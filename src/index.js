import hello from "./hello.js";
import world from "./world.js";
import css from "./style.css";

const $root = document.querySelector("#root");
$root.innerHTML = `${hello} ${world} 여기는 index입니다`;
console.log("css", css);
