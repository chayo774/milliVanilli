var car =[
    {trade: "Toyota", color: "cafe", model:1985},
    {trade: "Kia", color: "Gris", model:2005},
    {trade: "Nissan", color: "Celeste", model:1995},
    {trade: "SangYong", color: "AquaVerde", model:2020},
]
console.log(car)
function drive(auto){
    console.log("Nombre:", auto.trade, "Color:", auto.color)
}
car.forEach(drive)

// function customPrompt() {
//     // Show the custom prompt
//     document.getElementById("myPrompt").style.display = "flex";
  
//     // Focus on the input field
//     document.getElementById("promptInput").focus();
//   }
  
//   function submitPrompt() {
//     // Get the input value
//     let userInput = document.getElementById("promptInput").value;
  
//     // Hide the prompt
//     document.getElementById("myPrompt").style.display = "none";
  
//     // Do something with the user input
//     alert(`Hello ${userInput}!`);
//   }
  