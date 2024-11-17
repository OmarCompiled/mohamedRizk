function increment(){
    const counter = document.getElementById("counter");
    let count = +counter.innerHTML;
    counter.innerHTML = count+1; 
}

function changeDuaa(){
    const counter = document.getElementById("counter");
    counter.innerHTML = 0;

    const duaa = document.getElementById("duaa");
    const duaa1 = "اللهم تجاوز عن سيئاته";
    const duaa2 = "اللهم اجعل قبره روضةً من رياض الجنَّة";
    const duaa3 = "اللهم اغفر له وارحمه";

    if(duaa.innerHTML != duaa1 && duaa.innerHTML != duaa2) {
        duaa.innerHTML = duaa1;
    } else if(duaa.innerHTML === duaa1 && duaa.innerHTML != duaa2) {
        duaa.innerHTML = duaa2;
    } else {
        duaa.innerHTML = duaa3;
    }
   
}
