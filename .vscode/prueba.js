<form id="miFormulario">
    <input type="text" id="nombre" name="nombre">
    <button type="submit">Enviar</button>
</form>

let formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', function(evento) {
evento.preventDefault();
alert('Formulario enviado!');
});