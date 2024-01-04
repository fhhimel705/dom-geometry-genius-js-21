// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// function changeColor(element) {
//   element.style.backgroundColor = getRandomColor();
// }
  function getRandomLightColor() {
    const minIntensity = 200; // Adjust as needed
    const maxIntensity = 255;

    const getRandomIntensity = () =>
      Math.floor(Math.random() * (maxIntensity - minIntensity + 1)) +
      minIntensity;

    const red = getRandomIntensity();
    const green = getRandomIntensity();
    const blue = getRandomIntensity();

    return `rgb(${red}, ${green}, ${blue})`;
  }

  function changeLightColor(element) {
    element.style.backgroundColor = getRandomLightColor();
  }
function resetColor(element) {
  element.style.backgroundColor = "white";
}
