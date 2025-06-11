const cloudName = 'TU_CLOUD_NAME'; // Sustituye con tu cloud name
const uploadPreset = 'album_unsigned'; // Usa el nombre que diste al preset

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
