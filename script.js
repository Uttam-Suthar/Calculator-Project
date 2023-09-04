var buttons = document.getElementsByClassName("button")
var display = document.getElementById("display")
var displayValue1 = 0;
var displayValue2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        console.log("click on button")
        var value = this.getAttribute('data-value');
        if ((value == '+' || value == '-' || value == '*' || value == '/' || value == 'AC')) {
            operator = value;
            displayValue1 = parseFloat(display.textContent)
            display.innerText = ""
        }
        else if (value == '%') {
            operator = value;
            displayValue1 = parseFloat(display.textContent);
            display.innerText = "";
            var result = eval(displayValue1 + '*1/100');
            display.innerText += result;

        }
        else if (value == '+/-') {
            displayValue1 = parseFloat(display.textContent);
            display.innerText = "";
            var result = eval(displayValue1 + '* -1');
            display.innerText += result;
        }

        else if (value == 'C') {
            var str = display.innerText;
            display.innerText = str.substring(0, str.length - 1);
        }

        else if (value == '=') {
            displayValue2 = parseFloat(display.textContent);

            var result = eval(displayValue1 + " " + operator + " " + displayValue2);
            display.innerText = "";
            if (result == 'Infinity') {
                display.innerText += 'Error';
            } else
                display.innerText += result;
            displayValue1 = 0;
            displayValue2 = null;
            operator = null;
        }
        else {
            display.innerText += value;
        }
    })
}

document.addEventListener('keydown', function (event) {
    if (event.key >= 0 && event.key <= 9) {
        display.innerText += event.key;
    } else if (event.key == '+' || event.key == '*' || event.key == '/' || event.key == '-') {
        operator = event.key;
        displayValue1 = parseFloat(display.textContent);

        display.innerText = '';
    } else if (event.key == 'Backspace') {
        var str = display.innerText;
        display.innerText = str = str.substring(0, str.length - 1);
    }
    else if (event.key == '=' || event.key == 'Enter') {
        displayValue2 = parseFloat(display.textContent);
        var result = eval(displayValue1 + " " + operator + " " + displayValue2);
        display.innerText = "";
        if (result == 'Infinity') {
            display.innerText += 'Error';
        } else
            display.innerText += result;
        displayValue1 = 0;
        displayValue2 = null;
        operator = null;

    }
});


