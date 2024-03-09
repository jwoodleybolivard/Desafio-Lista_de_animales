// Obtén una referencia al formulario utilizando su id
const formularioConsulta = document.getElementById('consultaForm');

// Agrega un event listener al formulario para el evento 'submit'
formularioConsulta.addEventListener('submit', function (event) {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    // Recoge los datos del formulario
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    // Obtiene una referencia a la lista donde se mostrarán los datos
    let listaDatos = document.getElementById('resultado').querySelector('ul');

    // Crea un nuevo elemento de lista con los datos recogidos
    let nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = `Dueño: ${propietario}, Teléfono: ${telefono}, Dirección: ${direccion}, Nombre de la Mascota: ${nombreMascota}, Tipo: ${tipo}, Motivo de la consulta: ${enfermedad}`;

    // Agrega el nuevo elemento de lista a la lista existente
    listaDatos.appendChild(nuevoElementoLista);

    // Limpia los campos del formulario después de agregar los datos
    formularioConsulta.reset();
});
