function obtenerInformacionPersonajePorId() {
    var idPersonaje = document.getElementById('characterId').value;
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
        .then(response => response.json())
        .then(data => {
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            informacionPersonajeDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p>Género: ${data.gender}</p>
                <p>Especie: ${data.species}</p>
                <p>Ubicación: ${data.location.name}</p>
                <p>Estado: ${data.status}</p>
                <p>Origen: ${data.origin.name}</p>
                <img src="${data.image}" alt="Foto de ${data.name}">
            `;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            informacionPersonajeDiv.innerHTML = '<p>Error al obtener los datos. Por favor, inténtalo de nuevo.</p>';
        });
}

function filtrarPersonajesPorEspecie(species) {
    fetch(`https://rickandmortyapi.com/api/character/?species=${species}`)
        .then(response => response.json())
        .then(data => {
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            if (data.results.length > 0) {
                var personajesHTML = data.results.map(personaje => `
                    <div>
                        <h2>${personaje.name}</h2>
                        <p>Género: ${personaje.gender}</p>
                        <p>Especie: ${personaje.species}</p>
                        <p>Ubicación: ${personaje.location.name}</p>
                        <p>Estado: ${personaje.status}</p>
                        <p>Origen: ${personaje.origin.name}</p>
                        <img src="${personaje.image}" alt="Foto de ${personaje.name}">
                    </div>
                `).join('');
                informacionPersonajeDiv.innerHTML = personajesHTML;
            } else {
                informacionPersonajeDiv.innerHTML = '<p>No se encontraron personajes para la especie seleccionada.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            informacionPersonajeDiv.innerHTML = '<p>Error al obtener los datos. Por favor, inténtalo de nuevo.</p>';
        });
}

function filtrarPersonajesPorGenero(genero) {
    fetch(`https://rickandmortyapi.com/api/character/?gender=${genero}`)
        .then(response => response.json())
        .then(data => {
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            if (data.results.length > 0) {
                var personajesHTML = data.results.map(personaje => `
                    <div>
                        <h2>${personaje.name}</h2>
                        <p>Género: ${personaje.gender}</p>
                        <p>Especie: ${personaje.species}</p>
                        <p>Ubicación: ${personaje.location.name}</p>
                        <p>Estado: ${personaje.status}</p>
                        <p>Origen: ${personaje.origin.name}</p>
                        <img src="${personaje.image}" alt="Foto de ${personaje.name}">
                    </div>
                `).join('');
                informacionPersonajeDiv.innerHTML = personajesHTML;
            } else {
                informacionPersonajeDiv.innerHTML = '<p>No se encontraron personajes para el género seleccionado.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            informacionPersonajeDiv.innerHTML = '<p>Error al obtener los datos. Por favor, inténtalo de nuevo.</p>';
        });
}

function mostrarTodosLosPersonajes() {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => {
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            if (data.results.length > 0) {
                var personajesHTML = data.results.map(personaje => `
                    <div>
                        <h2>${personaje.name}</h2>
                        <p>Género: ${personaje.gender}</p>
                        <p>Especie: ${personaje.species}</p>
                        <p>Ubicación: ${personaje.location.name}</p>
                        <p>Estado: ${personaje.status}</p>
                        <p>Origen: ${personaje.origin.name}</p>
                        <img src="${personaje.image}" alt="Foto de ${personaje.name}">
                    </div>
                `).join('');
                informacionPersonajeDiv.innerHTML = personajesHTML;
            } else {
                informacionPersonajeDiv.innerHTML = '<p>No se encontraron personajes.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            var informacionPersonajeDiv = document.getElementById('informacionPersonaje');
            informacionPersonajeDiv.innerHTML = '<p>Error al obtener los datos. Por favor, inténtalo de nuevo.</p>';
        });
}
