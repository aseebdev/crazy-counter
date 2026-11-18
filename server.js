



const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const label = document.getElementById("label");
const countercontiner = document.getElementById("countercontiner");
const defaults = document.getElementById("defaults");
const span = document.getElementById("span");


let count = 0;
defaults.onclick = function(){
    
    label.removeAttribute("style");
    increase.removeAttribute("style");
    decrease.removeAttribute("style");
    reset.removeAttribute("style");
    defaults.removeAttribute("style");
    span.removeAttribute("style");
}

increase.onclick = function(){
    span.style.color = "red";
    label.style.color = "green";
    label.style.display = "block";
    label.style.textAlign = "center";
    label.style.fontSize = "10em";
    label.style.fontFamily = "Helvetica"
    increase.style.padding = "10px 20px";
    increase.style.color = "green";
    reset.style.padding = "10px 20px";
    reset.style.color = "blue";
    decrease.style.padding = "10px 20px";
    decrease.style.color = "red"
    defaults.style.display = "block";
    defaults.style.textAlign = "center";
    defaults.style.fontSize = "1.8em";
    defaults.style.fontWeight = "800";
    defaults.style.fontFamily = "Arial, sans-serif";

    defaults.style.background = "linear-gradient(90deg, #06B6D4, #3B82F6, #9333EA)";
    defaults.style.backgroundClip = "text";
    defaults.style.webkitBackgroundClip = "text";
    defaults.style.color = "transparent";

    defaults.style.letterSpacing = "0.5px";
    defaults.style.lineHeight = "1.4";
    defaults.style.margin = "15px auto";
    defaults.style.padding = "5px";

    
    reset.style.padding = "10px 20px";
    countercontiner.style.textAlign = "center";

    count++;
    label.textContent = `${count}`
}
decrease.onclick = function(){
    span.style.color = "red";
    label.style.color = "red";
    label.style.display = "block";
    label.style.textAlign = "center";
    label.style.fontSize = "10em";
    label.style.fontFamily = "Helvetica"
    increase.style.padding = "10px 20px";
    increase.style.color = "green";
    decrease.style.padding = "10px 20px";
    decrease.style.color = "red"
    reset.style.padding = "10px 20px";
    reset.style.color = "blue";
    countercontiner.style.textAlign = "center";
    defaults.style.display = "block";
    defaults.style.textAlign = "center";
    defaults.style.fontSize = "1.8em";
    defaults.style.fontWeight = "800";
    defaults.style.fontFamily = "Arial, sans-serif";

    defaults.style.background = "linear-gradient(90deg, #06B6D4, #3B82F6, #9333EA)";
    defaults.style.backgroundClip = "text";
    defaults.style.webkitBackgroundClip = "text";
    defaults.style.color = "transparent";

    defaults.style.letterSpacing = "0.5px";
    defaults.style.lineHeight = "1.4";
    defaults.style.margin = "15px auto";
    defaults.style.padding = "5px";

    count--;
    label.textContent = `${count}`
}
reset.onclick = function(){
    span.style.color = "red";
    label.style.color = "black";
    label.style.display = "block";
    label.style.textAlign = "center";
    label.style.fontSize = "10em";
    label.style.fontFamily = "Helvetica"
    increase.style.padding = "10px 20px";
    increase.style.color = "green";
    decrease.style.padding = "10px 20px";
    decrease.style.color = "red"
    reset.style.padding = "10px 20px";
    reset.style.color = "blue";
    countercontiner.style.textAlign = "center";
    defaults.style.display = "block";
    defaults.style.textAlign = "center";
    defaults.style.fontSize = "1.8em";
    defaults.style.fontWeight = "800";
    defaults.style.fontFamily = "Arial, sans-serif";

    defaults.style.background = "linear-gradient(90deg, #06B6D4, #3B82F6, #9333EA)";
    defaults.style.backgroundClip = "text";
    defaults.style.webkitBackgroundClip = "text";
    defaults.style.color = "transparent";

    defaults.style.letterSpacing = "0.5px";
    defaults.style.lineHeight = "1.4";
    defaults.style.margin = "15px auto";
    defaults.style.padding = "5px";

    count = 0;
    label.textContent = `${count}`
}