var image = document.getElementById("xyz");
image.src = "../img/1.jpg"
function changeimg() {
if (image.getAttribute('src') == "../img/1.jpg") {
    image.src = "../img/2.jpg"; 
}
else if (image.getAttribute('src') == "../img/2.jpg") {
    image.src = "../img/3.jpg"; 
}
else if (image.getAttribute('src') == "../img/3.jpg") {
    image.src = "../img/4.jpeg"; 
}
else if (image.getAttribute('src') == "../img/4.jpeg") {
    image.src = "https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple_Shot-on-iPhone-Challenge-2020_Austin-Mann_01072020_big.jpg.large.jpg"; 
}
else {
    image.src = "../img/1.jpg"; 
}
}
