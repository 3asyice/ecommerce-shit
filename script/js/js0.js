var img = [
    "../../../assets/img/propaganda/1.png",
    "../../../assets/img/propaganda/2.png",
    "../../../assets/img/propaganda/3.png"
];
var i = 0;
function mostrarImg() {
document.getElementById('imagem').src = img [i];
}
function next() {
i++;
if (i >= img.length){
i = 0;
}
mostrarImg();
}
function back() {
i--;
if (i <= img.length){
i - 1;
if (i < 0){
i = 2;
}
}
mostrarImg();
}
var imgs = [
    "../../../assets/img/propaganda/1.png",
    "../../../assets/img/propaganda/2.png",
    "../../../assets/img/propaganda/3.png"
];
var indice = 1;
function mostrarimg() {
document.getElementById('images').src = imgs [indice];
}
function proximo() {
indice++;
if (indice >= imgs.length){
indice = 0;
}
mostrarimg();
}
function voltar() {
indice--;
if (indice <= imgs.length){
indice - 1;
if (indice < 0){
indice = 2;
}
}
mostrarimg();
}
