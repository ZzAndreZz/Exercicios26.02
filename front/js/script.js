var cpf = document.getElementById("cpfPaciente");



cpf.addEventListener('keyup', (event) => {
    if (isNaN(cpf.value)) {
        cpf.value = cpf.value.substring(0, (cpf.value.length - 1));
    }
    if (cpf.value.length >= 11) {
        cpf.value = cpf.value.substring(0, 11);
    }
});