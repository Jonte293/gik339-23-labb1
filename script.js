// Hämtar checkbox, lagrar i variabel
const checkbox = document.getElementById("divStyle");

// Hämtar alla textfält, lagrar i en variabel
const inputFields = document.querySelectorAll(".textfield");

// Hämtar knappen, lagrar i variabel
const button = document.getElementById("removeDiv");

// Hämtar div-elementet, lagrar i variabel
const emptyDiv = document.querySelector(".emptyDiv");

function handleInput(e) {
    const targetName = e.target.name;
    const targetField = e.target.value;

    console.log(targetName, e.target);
    if (targetName === "content") {
        emptyDiv.innerHTML = targetField;
    }
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    emptyDiv.remove();
    console.log('Någon klickade på "Ta bort" knappen! Parameter, ', e);
});

checkbox.addEventListener('change', (e) => {
    const colorField = document.getElementById('color');
    emptyDiv.style.backgroundColor = colorField.value;
});

inputFields.forEach(field => {
    field.addEventListener("input", handleInput)
    field.addEventListener("blur", handleInput)
});