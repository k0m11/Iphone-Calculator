let a = ""; // first number
let b = ""; // second number
let sign = ""; // operation sign
let finish = false;
let buttons = document.querySelector(".buttons-container")

const out = document.querySelector("h1")
// initialize arrays
const digit = ["0","1","2","3","4","5","6","7","8","9","0", "."];
const action = ["-", "+", "X", "/", "%", "+/-"]

// AC button function
function clearAll() {
    a = "";
    b = "";
    sign = "";
    out.innerHTML = 0;
}

buttons.addEventListener("click", (event)=> {
    // isn't button pressed
    if(!event.target.classList.contains("button")) return;

    // pressed clearAll button
    else if(event.target.classList.contains("#ac")) return;

    // getting pressed button
    const key = event.target.innerHTML

    // if button 0-9 or . was pressed
    if (digit.includes(key)) {
        if (b == "" && sign == "") {
            a += key
            out.innerHTML = a
            console.log(a)
        }
        else if(a!== "" && b!== "" && finish) {
            b = key;
            finish = false;
            out.innerHTML = b;
        }
        else {
            b+= key;
            out.innerHTML = b
        }
    }
    // if button + - / X was pressed
    else if (action.includes(key)) {     
        if (key == "%"){
            a = a/100
            out.innerHTML = a
        }
        else if (key == "+/-"){
            a = -a
            out.innerHTML = a
        }
        else {
        sign = key
        out.innerHTML = sign
        }
    }

    // if button = was pressed
    else if(key == "=") {
        if (b === "") b = a
        switch(sign) {
            case "+":
                a = (+(a)+(+b));
                break;
            case "-":
                a = (a-b);
                break;
            case "X":
                a = (a*b);
                break;
            case "/":
                if(b === "0"){
                    out.innerHTML = "Error";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = (a/b)
                break;
        }
        finish = true
        out.innerHTML = a 
    }
})
