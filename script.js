/* Declare variables below to save the different sections (divs) of your story*/
let paragraph = document.querySelector("p");
let p2 = document.querySelector(".p2");
let img = document.querySelector("img");
let body = document.querySelector("body");
let h12 = document.querySelector(".h12");
let h13 = document.querySelector(".h13");
let h14 = document.querySelector(".h14");
let h2 = document.querySelector("h2");
let header = document.querySelector("h1");
let h11 = document.querySelector(".h11");
let Thanks = document.querySelector(".Thanks");
let button = document.querySelector("button");
let shadow1 = document.querySelector(".shadow1");
let shadow11 = document.querySelector(".shadow11");
let shadow2 = document.querySelector(".shadow2");
let option1 = document.querySelector(".option1");
let option = document.querySelector(".option11");
let button1 = document.querySelector(".option1");
let button2 = document.querySelector(".option2");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let next = document.querySelector(".next");
let first = document.querySelector(".first");
let title = document.querySelector(".title");
let h1color = document.querySelector(".h1color");
let page2 = document.querySelector(".page2");
let actual = document.querySelector(".actual");
let actual2 = document.querySelector(".actual2");
let optionone = document.querySelector(".option-one-screen");
let optiono = document.querySelector(".option-one-end");
let optiontwo = document.querySelector(".option-two-screen");
let optiont = document.querySelector(".option-two-end");
let end2 = document.querySelector(".nextend2");
let end1 = document.querySelector(".nextend1");
let con1 = document.querySelector(".consequence1");
let ending = document.querySelector(".ending");
let reset = document.querySelector(".reset");
let reset1 = document.querySelector(".reset1");

button.onkeydown = function() {
    Thanks.innerHTML = "Now let the story begin!!";
    title.style.display = "block";
    first.style.display = "none";
};

next.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "block";
    actual2.style.display = "block";
};

actual.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "block";
};

actual2.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "block";
};

end1.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "none";
    optiono.style.display = "block";
};

end2.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "none";
    optiono.style.display = "none";
    optiont.style.display = "block";
};

con1.onclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "none";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "none";
    optiono.style.display = "none";
    optiont.style.display = "none";
    ending.style.display = "block";
};

reset.ondblclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "block";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "none";
    optiono.style.display = "none";
    optiont.style.display = "none";
    ending.style.display = "none";
};

reset1.ondblclick = function() {
    title.style.display = "none";
    Thanks.style.display = "none";
    first.style.display = "block";
    Thanks.style.diaplay = "none";
    actual.style.display = "none";
    actual2.style.display = "none";
    optionone.style.display = "none";
    optiontwo.style.display = "none";
    optiono.style.display = "none";
    optiont.style.display = "none";
    ending.style.display = "none";
};

header.onmouseover = function() {
    header.innerHTML = "CHOOSE YOUR PATH!!!";
};

p2.style.backgroundColor = "#F9629F";
shadow2.style.backgroundColor = "#F9629F";
shadow1.style.backgroundColor = "black";
shadow11.style.backgroundColor = "black";


button2.onclick = function() {
    image2.style.display = "block";
    next.style.display = "block";

};
button1.ondblclick = function() {
    image1.style.display = "block";
};
p2.onmouseover = function() {
    p2.innerHTML = "CONGRATULATIONS!!!. YOU GOT HOME SAFE. SEE YOU NEXT TIME.";
};

shadow1.onmouseover = function() {
    shadow1.innerHTML = "I see you chose dark and eerie. WALK OVER THERE NOW!!!";
};

shadow2.onmouseover = function() {
    shadow2.innerHTML = "You chose nice and safe. Walk over there";
};


setTimeout(() => {
    paragraph.innerHTML = "You choose to go to the dark path. A wolf starts approaching you, it pounces and eat you. You don't get home. I WONT SEE YOU NEXT TIME.  ";
}, 27000);

setTimeout(() => {
    h11.innerHTML = "The next day you bring your family to come along with you on a hiking trip in a different place, you see two paths, one dark and eerie, the other peaceful and nice. What path would you choose?";
}, 39000);
setTimeout(() => {
    h12.innerHTML = "DARK AND EERIE";
}, 49000);
setTimeout(() => {
    h13.innerHTML = "OR";
}, 50000);
setTimeout(() => {
    h14.innerHTML = "NICE AND SAFE";
}, 51000);

