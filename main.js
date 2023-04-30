//kör "npm install" i terminalen
//sen kör "npm run dev"

// import advancedChart from "./advancedChart.js";
import simpleChart from "./simpleChart.js";
import advancedChart from "./advancedChart.js";

const toggle = document.querySelector("#toggle-chart");
const simple = document.querySelector("#simple-chart");
const advanced = document.querySelector("#advanced-chart");

toggle.addEventListener("input", () => {
    simple.classList.toggle("hide");
    advanced.classList.toggle("hide");
});
//växla mellan enkel och avancerad graf?
//logga vilken tid som mätningen gjordes?
//färgschema för graf https://www.learnui.design/tools/data-color-picker.html#single

//hämta html element
