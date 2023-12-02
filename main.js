import "./style.css";
// 引入 aos.js 动画库并初始化
import AOS from "aos";

AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

document.addEventListener("aos:in", ({ detail }) => {
  console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  console.log("animated out", detail);
});
