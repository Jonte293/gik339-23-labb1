// Hämtar checkbox, lagrar i variabel:
const checkbox = document.getElementById("divStyle");

// Hämtar alla textfält (lagras i en NodeList), lagrar NodeListan i en variabel:
const inputFields = document.querySelectorAll(".textfield");

// Hämtar knappen, lagrar i variabel:
const button = document.getElementById("removeDiv");

// Hämtar div-elementet, lagrar i variabel:
const emptyDiv = document.querySelector(".emptyDiv");

// Fördefinierad funktion som kommer att användas som eventlyssnare till inputfälten:
function handleInput(e) {
    const targetName = e.target.name;
    const targetField = e.target.value;

    console.log(targetName, e.target);
    if (targetName === "content") {
        emptyDiv.innerHTML = targetField;
    }
}

// Eventlyssnare till knappen, med anonym funktion:
button.addEventListener('click', (e) => {
    e.preventDefault();
    emptyDiv.remove();
    console.log('Någon klickade på "Ta bort" knappen! Parameter, ', e);
});

// Eventlyssnare till checkbox, med anonym funktion:
checkbox.addEventListener('change', (e) => {
    const colorField = inputFields[0];
    emptyDiv.style.backgroundColor = colorField.value;
});

// Eventlyssnare till textfälten, med tidigare skapad funktion kopplad till:
inputFields.forEach(field => {
    field.addEventListener("input", handleInput)
    field.addEventListener("blur", handleInput)
});