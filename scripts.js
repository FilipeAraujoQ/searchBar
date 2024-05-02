var pessoas = [
    { name: "João da Silva", idade: 30, sexo: "Masculino" },
    { name: "Maria Oliveira", idade: 25, sexo: "Feminino" },
    { name: "José Santos", idade: 40, sexo: "Masculino" },
    { name: "Ana Souza", idade: 35, sexo: "Feminino" },
    { name: "Pedro Lima", idade: 28, sexo: "Masculino" },
    { name: "Mariana Costa", idade: 45, sexo: "Feminino" },
    { name: "Paulo Pereira", idade: 33, sexo: "Masculino" },
    { name: "Fernanda Almeida", idade: 22, sexo: "Feminino" },
    { name: "Luiz Santos", idade: 38, sexo: "Masculino" },
    { name: "Carla Silva", idade: 29, sexo: "Feminino" },
    { name: "Ricardo Oliveira", idade: 42, sexo: "Masculino" },
    { name: "Beatriz Lima", idade: 31, sexo: "Feminino" },
    { name: "Gustavo Pereira", idade: 27, sexo: "Masculino" },
    { name: "Juliana Santos", idade: 36, sexo: "Feminino" },
    { name: "Marcos Almeida", idade: 26, sexo: "Masculino" },
    { name: "Camila Costa", idade: 39, sexo: "Feminino" },
    { name: "Lucas Oliveira", idade: 24, sexo: "Masculino" },
    { name: "Isabela Souza", idade: 32, sexo: "Feminino" },
    { name: "Bruno Silva", idade: 37, sexo: "Masculino" },
    { name: "Tatiane Pereira", idade: 23, sexo: "Feminino" },
    { name: "Renato Santos", idade: 34, sexo: "Masculino" },
    { name: "Aline Lima", idade: 41, sexo: "Feminino" },
    { name: "Henrique Almeida", idade: 28, sexo: "Masculino" },
    { name: "Patrícia Costa", idade: 43, sexo: "Feminino" },
    { name: "Eduardo Silva", idade: 30, sexo: "Masculino" },
    { name: "Vanessa Oliveira", idade: 25, sexo: "Feminino" },
    { name: "Rodrigo Souza", idade: 44, sexo: "Masculino" },
    { name: "Carolina Santos", idade: 29, sexo: "Feminino" },
    { name: "Marcelo Lima", idade: 35, sexo: "Masculino" },
    { name: "Ana Paula Pereira", idade: 22, sexo: "Feminino" }
];

const searchwrapper = document.querySelector('.container');
const inputBox = searchwrapper.querySelector('input');
const patientsBox = searchwrapper.querySelector('.list');

inputBox.addEventListener('input', (e) => {
    const userData = e.target.value.trim().toLowerCase();
    const filteredPatients = pessoas.filter(patient => patient.name.toLowerCase().startsWith(userData));
    showPatients(filteredPatients);
});

function showPatients(list) {
let listData = '';
if (list.length) {
    listData = list.map(data => `<div class="card">
                                    <div id="name">${data.name}</div>
                                    <div id="age">${data.idade} anos</div>
                                </div>`).join('');
} else {
    listData = '<span>Nenhum paciente encontrado</span>';
}
patientsBox.innerHTML = "<p class='title-list-pascients'>Listagem de pacientes </p>";
patientsBox.innerHTML += listData;
patientsBox.classList.toggle('active', !!list.length);
}
patientsBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'DIV') {
        inputBox.value = e.target.textContent;
        patientsBox.classList.remove('active');
    }
});
inputBox.addEventListener('input', (e) => {
    const userData = e.target.value.trim();
    if (!userData) {
        patientsBox.innerHTML = '';
        patientsBox.classList.remove('active');
    }
});