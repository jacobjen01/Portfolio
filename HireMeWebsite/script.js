document.getElementById("hireButton").addEventListener("click", function() {
    let contactInfo = document.getElementById("contactInfo");
    contactInfo.style.display = contactInfo.style.display === "none" ? "block" : "none";
});

document.getElementById("showImageButton").addEventListener("click", function() {
    let image = document.getElementById("projectImage");
    image.style.display = image.style.display === "none" ? "block" : "none";
});