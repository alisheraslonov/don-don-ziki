//! selector
const siz = document.querySelector("#siz");
const komp = document.querySelector("#komp");
const result = document.querySelector("#result");
const tosh = document.querySelector("#tosh");
const qaychi = document.querySelector("#qaychi");
const qogoz = document.querySelector("#qogoz");
const komp_tosh = document.querySelector("#komp-tosh");
const komp_qaychi = document.querySelector("#komp-qaychi");
const komp_qogoz = document.querySelector("#komp-qogoz");

//! tosh
function clickTosh() {
    tosh.style.display = "block";
    qaychi.style.display = "none";
    qogoz.style.display = "none";
    let randomNumber = Math.ceil(Math.random() * 3)
    switch (randomNumber) {
        case 1:
            komp_tosh.style.display = "block";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Durang";
            break;
        case 2:
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "block";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Siz  yuttingiz";
            siz.innerHTML++;
            break;
        case 3: 
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "block";
            result.innerHTML = "Kompyuter yutdi";
            komp.innerHTML++;
            break;
    }
} 

//! qaychi
function clickQaychi() {
    qaychi.style.display = "block";
    tosh.style.display = "none";
    qogoz.style.display = "none";
    let randomNumber = Math.ceil(Math.random() * 3)
    switch (randomNumber) {
        case 1:
            komp_tosh.style.display = "block";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Kompyuter yutdi";
            komp.innerHTML++;
            break;
        case 2:
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "block";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Durang";
            break;
        case 3: 
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "block";
            result.innerHTML = "Siz yutdingiz";
            siz.innerHTML++;
            break;
    }
}  

//! Qogoz
function clickQogoz() {
    qogoz.style.display = "block";
    tosh.style.display = "none";
    qaychi.style.display = "none";
    let randomNumber = Math.ceil(Math.random() * 3)
    switch (randomNumber) {
        case 1:
            komp_tosh.style.display = "block";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Siz yutdingiz";
            siz.innerHTML++;
            break;
        case 2:
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "block";
            komp_qogoz.style.display = "none";
            result.innerHTML = "Siz  yuttingiz";
            result.innerHTML = "Kompyuter yutdi";
            komp.innerHTML++;
            break;
        case 3: 
            komp_tosh.style.display = "none";
            komp_qaychi.style.display = "none";
            komp_qogoz.style.display = "block";
            result.innerHTML = "Durang";
            break;
    }
} 