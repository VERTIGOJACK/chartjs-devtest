//kör "npm install" i terminalen
//sen kör "npm run dev"

//importera paket från npm
import { Chart } from "chart.js/auto";
//importera data från annan .js fil (istället för api)
import data from "./data.js";

//växla mellan enkel och avancerad graf?
//logga vilken tid som mätningen gjordes?
//färgschema för graf https://www.learnui.design/tools/data-color-picker.html#single

//hämta html element
const app = document.querySelector("#app");
const canvas = document.querySelector("#chart");

//sätt höjd bredd på canvas
canvas.width = 800;
canvas.height = 400;

//hämta canvas kontext
const ctx = canvas.getContext("2d");

//funktion som returnerar array med "mätning1, mätning2" etc.
const counts = () => {
  let countArray = [];
  for (let index = 1; index < data.length + 1; index++) {
    countArray.push("Mätning " + index);
  }
  return countArray;
};

//värden som kommer återanvändas
let mBorderwidth = 6;
let mTension = 0.2;

//skapa chart
let mChart = new Chart(ctx, {
  type: "line",
  data: {
    //använder counts funktionen ovan
    labels: counts(),
    datasets: [
      {
        label: "Andningsfrekvens",
        //hämtar alla värden ur data arrayen, för key "andningsfrekvens"
        data: data.map((value) => value.andningsfrekvens),
        borderColor: "#488f31",
        backgroundColor: "#488f31",
        borderWidth: mBorderwidth,
        //hur mycket bezier curve man vill ha
        tension: mTension,
      },
      {
        label: "Syremättnad",
        data: data.map((value) => value.syremättnad),
        borderColor: "#8aac49",
        backgroundColor: "#8aac49",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
      {
        label: "Tillförd syrgas",
        data: data.map((value) => value.syrgas),
        borderColor: "#c6c96a",
        backgroundColor: "#c6c96a",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
      {
        label: "Systoliskt blodtryck",
        data: data.map((value) => value.systolisktblodtryck),
        borderColor: "#ffe792",
        backgroundColor: "#ffe792",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
      {
        label: "Pulsfrekvens",
        data: data.map((value) => value.pulsfrekvens),
        borderColor: "#f8b267",
        backgroundColor: "#f8b267",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
      {
        label: "Medvetandegrad",
        data: data.map((value) => value.medvetandegrad),
        borderColor: "#eb7a52",
        backgroundColor: "#eb7a52",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
      {
        label: "Temperatur",
        data: data.map((value) => value.temperatur),
        borderColor: "#de425b",
        backgroundColor: "#de425b",
        borderWidth: mBorderwidth,
        tension: mTension,
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0, // Minimum value
        max: 3, // Maximum value

        ticks: {
          stepSize: 1, // Increment between values
          callback: (value) => {
            return value.toFixed(0); // tar bort decimal från värden på y axeln.
          },
        },
      },
    },
  },
});
