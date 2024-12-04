// Hämtar checkbox, lagrar i variabel
const checkbox = document.getElementById("divStyle");

// Hämtar alla textfält, lagrar i en variabel
const inputFields = document.querySelectorAll(".textfield");

<<<<<<< HEAD
// Hämtar knappen och lagrar i en variabel
const button = document.getElementById("removeDiv");

// Hämtar "emptyDiv" och lagrar i en variabel
const emptydiv = document.getElementsByClassName("emptyDiv");

function handleInput(e) {
    const targetName = e.target.name;

    const contentField = settings.content;

    console.log(targetName);
    if (targetName === "content") {
        emptydiv.innerHTML = contentField.value;
    }
}

function handleClick(e) {
    console.log('Någon klickade på knappen! Parameter, ', e);
}

button.addEventListener('click', handleClick);

checkbox.addEventListener('change');

inputFields.addEventListener('');
=======
// Hämtar knappen, lagrar i variabel
const button = document.getElementById("removeDiv");

// Hämtar div-elementet, lagrar i variabel
const emptyDiv = document.getElementsByClassName("emptyDiv");
>>>>>>> d6129d416e21eb70bbe135e18faac5fae3c6336f
