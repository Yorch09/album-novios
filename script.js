const cloudName = 'TU_CLOUD_NAME'; // Sustituye con tu cloud name
const uploadPreset = 'album_unsigned'; // Usa el nombre que diste al preset
const obj = document.getElementById('mapa');
obj.addEventListener('load', () => {
  const svg = obj.contentDocument;
  const provincias = svg.querySelectorAll('[id^="ES-"]'); // IDs tipo ES-M, ES-BA, etc.
  const defs = svg.querySelector('defs') || svg.createElementNS('http://www.w3.org/2000/svg','defs');
  if (!svg.querySelector('defs')) svg.documentElement.prepend(defs);

  provincias.forEach(prov => {
    prov.classList.add('provincia');
    prov.addEventListener('click', () => selectProvincia(prov, svg, defs));
  });
});

let provinciaSeleccionada = null;

function selectProvincia(prov, svg, defs) {
  svg.querySelectorAll('.activa').forEach(el => el.classList.remove('activa'));
  prov.classList.add('activa');
  provinciaSeleccionada = { el: prov, svg, defs };
  document.getElementById('imagen-container').style.display = 'block';
  document.getElementById('provincia-title').innerText =
    prov.getAttribute('id').replace('ES-','');
}


function subirImagen() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Por favor selecciona una imagen');
    return;
  }

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    console.log('Imagen subida:', data.secure_url);

    const img = document.createElement('img');
    img.src = data.secure_url;
    img.alt = 'Foto subida';
    img.width = 300;

    document.getElementById('imagenes').appendChild(img);
  })
  .catch(err => {
    console.error('Error al subir imagen:', err);
    alert('Hubo un problema al subir la imagen');
  });
}
