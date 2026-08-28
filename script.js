const display = document.getElementById("display");

// Display me value add karna
function appendValue(value) {
    display.value += value;

    // Cursor ko hamesha end par rakho
    display.scrollLeft = display.scrollWidth;

    adjustFontSize();
}

// Display ko clear karna
function clearDisplay() {
    display.value = "";
    display.style.fontSize = "30px";
}

// Last character delete karna
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculation perform karna
function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        let result = eval(display.value);

        display.value = result;

    } catch (error) {

        display.value = "Error";

    }

}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {

        appendValue(key);

    }

    else if (key === "Enter") {

        event.preventDefault();
        calculate();

    }

    else if (key === "Backspace") {

        deleteLast();

    }

    else if (key === "Escape") {

        clearDisplay();

    }

});

function adjustFontSize() {

    if(display.value.length > 18){

        display.style.fontSize = "24px";

    }

    if(display.value.length > 28){

        display.style.fontSize = "20px";

    }

}

