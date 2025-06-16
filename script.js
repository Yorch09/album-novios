var simplemaps_countrymap_mapdata={
  main_settings: {
    width: 337.1,
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect"
  },
  state_specific: {
    ESAN: {
      name: "Andalucía",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESAR: {
      name: "Aragon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESAS: {
      name: "Asturias",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCB: {
      name: "Cantabria",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCE: {
      name: "Ceuta",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCL: {
      name: "Castilla y León",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCM: {
      name: "Castilla la Mancha",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCN: {
      name: "Islas Canarias",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESCT: {
      name: "Cataluña",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESEX: {
      name: "Extremadura",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESGA: {
      name: "Galicia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESIB: {
      name: "Islas Baleares",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESMC: {
      name: "Murcia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESMD: {
      name: "Comunidad de Madrid",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESML: {
      name: "Melilla",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESNC: {
      name: "Navarra, Comunidad Foral de",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESPV: {
      name: "País Vasco",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESRI: {
      name: "La Rioja",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ESVC: {
      name: "Comunidad Valenciana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Madrid",
      lat: "40.412752",
      lng: "-3.707721"
    }
  },
  labels: {
    ESAN: {
      name: "Andalucía",
      parent_id: "ESAN"
    },
    ESAR: {
      name: "Aragon",
      parent_id: "ESAR"
    },
    ESAS: {
      name: "Asturias",
      parent_id: "ESAS"
    },
    ESCB: {
      name: "Cantabria",
      parent_id: "ESCB"
    },
    ESCE: {
      name: "Ceuta",
      parent_id: "ESCE"
    },
    ESCL: {
      name: "Castilla y León",
      parent_id: "ESCL"
    },
    ESCM: {
      name: "Castilla la Mancha",
      parent_id: "ESCM"
    },
    ESCN: {
      name: "Islas Canarias",
      parent_id: "ESCN"
    },
    ESCT: {
      name: "Cataluña",
      parent_id: "ESCT"
    },
    ESEX: {
      name: "Extremadura",
      parent_id: "ESEX"
    },
    ESGA: {
      name: "Galicia",
      parent_id: "ESGA"
    },
    ESIB: {
      name: "Islas Baleares",
      parent_id: "ESIB"
    },
    ESMC: {
      name: "Murcia",
      parent_id: "ESMC"
    },
    ESMD: {
      name: "Comunidad de Madrid",
      parent_id: "ESMD"
    },
    ESML: {
      name: "Melilla",
      parent_id: "ESML"
    },
    ESNC: {
      name: "Navarra, Comunidad Foral de",
      parent_id: "ESNC"
    },
    ESPV: {
      name: "País Vasco",
      parent_id: "ESPV"
    },
    ESRI: {
      name: "La Rioja",
      parent_id: "ESRI"
    },
    ESVC: {
      name: "Comunidad Valenciana",
      parent_id: "ESVC"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
for (const codigo in simplemaps_countrymap_mapdata.state_specific) {
  const estado = simplemaps_countrymap_mapdata.state_specific[codigo];

  if (provinciasConFoto[codigo]) {
    // Tiene foto: no cambia de color al pasar
    estado.color = "#88A4BC";
    estado.hover_color = "#88A4BC"; // sin cambio de color
    estado.description = `<img src="${provinciasConFoto[codigo]}" style="max-width:150px;">`;
  } else {
    // No tiene foto: sí cambia al pasar el ratón
    estado.color = "#88A4BC";
    estado.hover_color = "#3B729F";
    estado.description = ""; // o algo como "Haz clic para subir foto"
  }
}
simplemaps_countrymap.hooks.state_click = function(codigo) {
  if (!provinciasConFoto[codigo]) {
    alert(`Has hecho clic en ${simplemaps_countrymap_mapdata.state_specific[codigo].name}`);
    // Aquí puedes abrir tu formulario de subida, por ejemplo
  }
};
simplemaps_countrymap.load();


