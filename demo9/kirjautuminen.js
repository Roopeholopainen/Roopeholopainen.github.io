document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if (localStorage.getItem("kirjautunut") === "kyllä"){
        document.getElementById("tervetuloa_teksti").textContent += ` ${localStorage.getItem("nimi")}`;
        document.getElementById("kirjautumis_lomake").style.display = "none";
    }
}
function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä");
}