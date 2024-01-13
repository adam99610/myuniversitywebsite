document.getElementById("customer-rec").style.display = "none";

function toggleSection() {
    var section = document.getElementById("customer-rec");
    section.style.display = (section.style.display === "none") ? "block" : "none";
}