const buttons = document.querySelector(".buttons")
const ClearAll = document.querySelector(".AC")
const plusMinus = document.querySelector(".PM")
const Delete = document.querySelector(".Delete")
const Dot = document.querySelector(".Dot")
let result = document.querySelector(".result")
let a = ""
let b = ""
let sign = ""
let count = 90

const digits = ["0","1","2","3","4","5","6","7","8","9","."]
const signs = ["+","-","/","X","+/-","AC"]

ClearAll.addEventListener("click", ()=> {
    a = ""
    b = ""
    sign = ""
    result.innerHTML = 0
})

Delete.addEventListener("click", ()=> {
    if (sign == "") {
        a = Math.floor(a/10)
        result.innerHTML = a
    }
    else {
        b = Math.floor(b/10)
        result.innerHTML = b
    }
})

plusMinus.addEventListener("click", ()=> {
    if (sign == "") {
        a = -a
        result.innerHTML = a
    }
    else {
        b = -b
        result.innerHTML = b
    }
})

buttons.addEventListener("click", (event)=> {
    if(result.innerHTML.length >= 7 && result.innerHTML.length < 10) {
        result.style.fontSize = `${count -= 5}px`
    }
    if(!event.target.classList.contains("button")) return;
    if(event.target.classList.contains("AC")) return;
    if(event.target.classList.contains("PM")) return;
    let key = event.target.innerHTML
    // for numbers
    if(digits.includes(key)) {
        if(result.innerHTML.length == 10) alert("This is limit in length for normal showing, be carefull");;
        // for Dots
        if(result.innerHTML.includes(".")) {
            if(event.target.classList.contains("Dot")) return;
        }
        if(b == "" && sign == "") {
            a += key
            result.innerHTML = a
        }
        if(!sign == "") {
            b += key
            result.innerHTML = b
        }
    }

    // for signs
    if(signs.includes(key)) {
        if(a == "") sign = ""
        else {
            switch(key) {
                case "+":
                    sign = "+"
                    break
                case "-":
                    sign = "-"
                    break
                case "X":
                    sign = "X"
                    break
                case "/":
                    sign = "/"
                    break
            }
            result.innerHTML = sign
        }
    }

    if(key == "=") {
        switch(sign) {
            case "+":
                a = (+a) + (+b)
                result.innerHTML = a
                break
            case "-":
                a = a - b
                result.innerHTML = a
                break
            case "X":
                a = a * b
                result.innerHTML = a
                break
            case "/":
                if(b == 0) {
                    a = ""
                    result.innerHTML = "Error"
                }
                else {
                    a = a / b
                    result.innerHTML = a
                }
                break
        }
        b = ""
        sign = ""
    }
    console.log(a,sign,b)
})
