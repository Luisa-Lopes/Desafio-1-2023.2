const form = document.getElementById('form');
const name = document.getElementById("name");

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    console.log(name.value)
    alert(`Obrigado sr(a) ${name.value}  os seus dados foram encaminhados com sucesso!`);
});

