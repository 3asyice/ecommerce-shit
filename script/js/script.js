var x = document.getElementById('main_menu');
var y = false;
function menu() {
y = !y;
if (y) {
x.style.display = 'block';
setTimeout(() => {
x.classList.add('visible');
}, 10);
} else {
x.classList.remove('visible');
setTimeout(() => {
x.style.display = 'none';
}, 500);
}}



var img = [
    "../../assets/img/propaganda/1.png",
    "../../assets/img/propaganda/2.png",
    "../../assets/img/propaganda/3.png"
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
    "../../assets/img/propaganda/1.png",
    "../../assets/img/propaganda/2.png",
    "../../assets/img/propaganda/3.png"
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



 // Carregar estado qnd for selecionar
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
.then(res => res.json())
.then(estados => {
const selectEstado = document.getElementById('estado');
estados.sort((a, b) => a.nome.localeCompare(b.nome));
estados.forEach(estado => {
const opt = document.createElement('option');
opt.value = estado.id;
opt.textContent = estado.nome;
selectEstado.appendChild(opt);
});
});



// carrega cidades do estado qnd usuario seleciona estado
document.getElementById('estado').addEventListener('change', function () {
const estadoId = this.value;
const selectCidade = document.getElementById('cidade');
selectCidade.innerHTML = '<option>Carregando...</option>';
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`)
.then(res => res.json())
.then(cidades => {
selectCidade.innerHTML = '<option value="">Selecione uma cidade</option>';
cidades.forEach(cidade => {
const opt = document.createElement('option');
opt.value = cidade.nome;
opt.textContent = cidade.nome;
selectCidade.appendChild(opt);
});
});
});


document.getElementById('cep').addEventListener('input', function (e) {
let value = e.target.value.replace(/\D/g, ''); 
if (value.length > 5) {
value = value.slice(0, 5) + '-' + value.slice(5, 8);
}
e.target.value = value.slice(0, 9);
});

