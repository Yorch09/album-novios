const fotos = [
  { src: "img/primer_viaje.jpg", desbloqueada: true },
  { src: "img/cena_romantica.jpg", desbloqueada: false },
  { src: "img/cumple.jpg", desbloqueada: false },
];

const gallery = document.getElementById("gallery");

fotos.forEach(foto => {
  const img = document.createElement("img");
  img.src = foto.desbloqueada ? foto.src : "https://via.placeholder.com/200x200.png?text=🔒+Bloqueada";
  gallery.appendChild(img);
});
