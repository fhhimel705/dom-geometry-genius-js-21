function getValueById(inputId) {
  const input = document.getElementById(inputId);
  const inputValue = parseFloat(input.value);
  return inputValue;
}
function showAreaDiv(inputDiv) {
  inputDiv.style.display = "block";
  inputDiv.style.display = "grid";
  inputDiv.style.grid = "grid-cols-3";
}
function calculate(input1, input2) {
  const calculate = input1 * input2;
  return calculate;
}
function removeValue(inputId1, inputId2) {
  const a = document.getElementById(inputId1);
  a.value = "";
  const b = document.getElementById(inputId2);
  b.value = "";
}
document.getElementById("triangle-btn").addEventListener("click", function () {
  const b = getValueById("triangle-b-field");
  const h = getValueById("triangle-h-field");
  const area = 0.5 * calculate(b, h);
  const areaInnerText = document.getElementById("triangle-area");
  const triangleDiv = document.getElementById("triangle-div");
  if (isNaN(area)) {
    alert("input number");
  } else if (area <= 0) {
    alert("Enter positive number");
    removeValue("triangle-b-field", "triangle-h-field");
  } else {
    areaInnerText.innerText = area;
    showAreaDiv(triangleDiv);
    removeValue("triangle-b-field", "triangle-h-field");
  }
});

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const W = getValueById("rectangle-w-field");
  const I = getValueById("rectangle-i-field");
  const area = calculate(W, I);
  const areaInnerText = document.getElementById("rectangle-area");
  const rectangleDiv = document.getElementById("rectangle-div");
  if (isNaN(area)) {
    alert("input number");
  } else if (area <= 0) {
    alert("Enter positive number");
    removeValue("rectangle-w-field", "rectangle-i-field");
  } else {
    areaInnerText.innerText = area;
    showAreaDiv(rectangleDiv);
    removeValue("rectangle-w-field", "rectangle-i-field");
  }
});
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    const b = getValueById("parallelogram-b-field");
    const h = getValueById("parallelogram-h-field");
    const area = calculate(b, h);
    const areaInnerText = document.getElementById("parallelogram-area");
    const parallelogramDiv = document.getElementById("parallelogram-div");
    if (isNaN(area)) {
      alert("input number");
    } else if (area <= 0) {
      alert("Enter positive number");
      removeValue("parallelogram-b-field", "parallelogram-h-field");
    }
    else {
      areaInnerText.innerText = area;
      showAreaDiv(parallelogramDiv);
      removeValue("parallelogram-b-field", "parallelogram-h-field");
    }
  });
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const d1 = getValueById("rhombus-d1-field");
  const d2 = getValueById("rhombus-d2-field");
  const area = 0.5 * calculate(d1, d2);
  const areaInnerText = document.getElementById("rhombus-area");
  const rhombusDiv = document.getElementById("rhombus-div");
  if (isNaN(area)) {
    alert("input number");
  } else if (area <= 0) {
    alert("Enter positive number");
    removeValue("rhombus-d1-field", "rhombus-d2-field");
  } else {
    areaInnerText.innerText = area;
    showAreaDiv(rhombusDiv);
    removeValue("rhombus-d1-field", "rhombus-d2-field");
  }
});
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const p = getValueById("pentagon-p-field");
  const b = getValueById("pentagon-b-field");
  const area = 0.5 * calculate(p, b);
  const areaInnerText = document.getElementById("pentagon-area");
  const pentagonDiv = document.getElementById("pentagon-div");
  if (isNaN(area)) {
    alert("input number");
  } else if (area <= 0) {
    alert("Enter positive number");
    removeValue("pentagon-p-field", "pentagon-b-field");
  } else {
    areaInnerText.innerText = area;
    showAreaDiv(pentagonDiv);
    removeValue("pentagon-p-field", "pentagon-b-field");
  }
});
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const a = getValueById("ellipse-a-field");
  const b = getValueById("ellipse-b-field");
  const area = 0.5 * calculate(a, b);
  const areaInnerText = document.getElementById("ellipse-area");
  const ellipseDiv = document.getElementById("ellipse-div");
  if (isNaN(area)) {
    alert("input number");
  } else if (area <= 0) {
    alert("Enter positive number");
    removeValue("ellipse-b-field", "ellipse-a-field");
  } else {
    areaInnerText.innerText = area;
    showAreaDiv(ellipseDiv);
    removeValue("ellipse-a-field", "ellipse-b-field");
  }
});
