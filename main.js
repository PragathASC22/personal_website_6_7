let change_theme = document.querySelector("#change_theme");
let colors = ["purple", "blue", "green", "pink", "gold", "lightBlue", "orange", "silver"];

change_theme.onclick = function(){
    let all_div = document.getElementsByClassName("theme")
    for (let i = 0; i<all_div.length; i++) {
        let randomIdx = Math.random();
        randomIdx = randomIdx * colors.length;
        randomIdx = Math.floor(randomIdx);

        let randomColor = colors[randomIdx];
        all_div[i].style["background-color"] = randomColor;
    }
}

let change_logo = document.querySelector("#gen_logo");
let logos = ["images/P-Logo1.jpg", "images/P-Logo2.jpg", "images/P-Logo3.jpg"];
let logo_field = document.querySelector("#logo")

change_logo.onclick = function(){
    let randomIdx = Math.random();
    randomIdx = randomIdx * logos.length;
    randomIdx = Math.floor(randomIdx);
    logo_field.setAttribute("src",logos[randomIdx]);
}


