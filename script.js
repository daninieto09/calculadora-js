const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == "clear"){

            display.innerText="";

        }else if(item.id == "backspace"){

            display.innerText = display.innerText.slice(0, -1);

        }else if(display.innerText != "" && item.id=="equal"){

            //display.innerText = eval(display.innerText);
            try {

                display.innerText = Function('"use strict"; return (' + display.innerText + ')')();

            } catch {
                // Si falla, ejecuta esto en vez de romper el programa
                display.innerText = "Error";
                setTimeout(() => (display.innerText = ""), 2000);
            }

        }else if(display.innerText == "" && item.id=="equal"){

            display.innerText = null;
            setTimeout( ()=> (display.innerText = ""), 2000 );

        }else{

            display.innerText+=item.id;
            
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const icon = document.querySelector(".toggler-icon");

let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark=!isDark;

    // Cambia el icono
     icon.className = isDark
     ? "toggler-icon fa-solid fa-moon"
     : "toggler-icon fa-solid fa-sun";
}