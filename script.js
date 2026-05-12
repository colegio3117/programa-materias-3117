const content = document.getElementById("content");
const breadcrumb = document.getElementById("breadcrumb");
const backBtn = document.getElementById("backBtn");

let historyStack = [];

/* DATOS COMPLETOS */
const data = {
  mañana: {
    nombre: "Electrónica",

    cursos: {

      "Primer año - Ciclo Básico": [
        "Lengua I",
        "Lengua Extrangera I",
        "Educacion Fisica I",
        "Educacion Artistica I",
        "Geografia I",
        "Historia I",
        "Formacion Etica Ciudadana I",
        "Matematicas I",
        "Ciencias Biologicas I",
        "Fisico-Quimica",
        "Tecnologia",
        "Dibujo Tecnico I",
        "Taller Profesional I: Electricidad",
        "Taller Profesional I: Carpinteria",
        "Taller Profesional I: Hojalateria"
      ],

      "Segundo año - Ciclo Básico": [
        "Lengua II",
        "Lengua Extrangera II",
        "Educacion Fisica II",
        "Educacion Artistica II",
        "Geografia II",
        "Historia II",
        "Formacion Etica Ciudadana II",
        "Matematicas II",
        "Ciencias Biologicas II",
        "Fisica I",
        "Quimica I",
        "Dibujo Tecnico II",
        "Taller Profesional II: Electricidad y Electronica",
        "Tecnologia de la Informacion y la Comunicacion"
      ],

      "Primer año - Ciclo Superior": [
        "Lengua III",
        "Lengua Extrangera III",
        "Educacion Fisica III",
        "Geografia III",
        "Historia III",
        "Formacion Etica Ciudadana III",
        "Matematicas III",
        "Ciencias Biologicas IIi",
        "Fisica Orientada",
        "Quimica II",
        "Dibujo Tecnico Orientado y CAD",
        "Tecnologia de los Materiales Orientada",
        "Circuitos Electricos y Magntismo",
        "Taller Preindustrial: Torneria y Fresadol Soldadura Semiautomatica",
        "Taller Preindustrial: Electronica",
        "Taller Preindustrial: Instalaciones Electricas"
      ],


      "Segundo año - Ciclo Superior": [
        "Lengua y Literatura I",
        "Lengua Extrangera: Ingles Tecnico I",
        "Educacion Fisica IV",
        "Historia IV",
        "Analisis Matematico",
        "Proyecto y Gestion de Emprendimientos",
        "Hardware y Leguaje de Programacion",
        "Electronica Dicreta e Integrada I",
        "Tecnologia de los Dispositivos Electronicos",
        "Circuitos Electricos y Redes",
        "Dispositivos y Modelos Digitales",
        "Laboratorio de ELectronica General",
        "Taller de Electronica I"
      ],


      "Tercer año - Ciclo Superior": [
        "Lengua y Literatura II",
        "Lengua Extrangera: Ingles Tecnico II",
        "Educacion Fisica V",
        "Filosofia",
        "Tecnologia de Control Orientada",
        "Electronica Dicreta e Integrada II",
        "Simulacion y Diseño Electronico Asistido",
        "Electronica Industrial",
        "Matematica Aplicada en Electronica",
        "Laboratorio de Dispositivos Digitales Programables",
        "Laboratorio de Instrumentacion y Mediacion",
        "Tecnología de los Dispositivos Electrónicos",
        "Taller de Electronica II"
      ],

      "Cuarto año - Ciclo Superior": [
        "Lengua y Literatura III",
        "Lengua Extrangera: Ingles Tecnico II",
        "Etica Y Deontologia",
        "Marco Juridico (Laboral y Procesos Productos)",
        "Organizacion, Gestion y Seguridad Industrial",
        "Sistemas Electricos Analogicos",
        "Sitemas Electronicos de Control",
        "Sistemas Electronicos de Comunicacion y Enlaces",
        "Laboratorio de Electronica Industrial",
        "Laboratorio de Ensayos Electronicos",
        "Practicas Profesionalizantes"
      ]

    }
  },

  tarde: {
    nombre: "Informática",

    cursos: {

      "Primer año - Ciclo Básico": [
        "Lengua I",
        "Lengua Extrangera I",
        "Educacion Fisica I",
        "Educacion Artistica I",
        "Geografia I",
        "Historia I",
        "Formacion Etica Ciudadana I",
        "Matematicas I",
        "Ciencias Biologicas I",
        "Fisico-Quimica",
        "Tecnologia",
        "Dibujo Tecnico I",
        "Taller Profesional I: Electricidad",
        "Taller Profesional I: Carpinteria",
        "Taller Profesional I: Hojalateria"
      ],

      "Segundo año - Ciclo Básico": [
        "Lengua II",
        "Lengua Extrangera II",
        "Educacion Fisica II",
        "Educacion Artistica II",
        "Geografia II",
        "Historia II",
        "Formacion Etica Ciudadana II",
        "Matematicas II",
        "Ciencias Biologicas II",
        "Fisica I",
        "Quimica I",
        "Dibujo Tecnico II",
        "Taller Profesional II: Electricidad y Electronica",
        "Tecnologia de la Informacion y la Comunicacion",
        "Taller Preprofesional II - Herreria"
      ],

      "Primer año - Ciclo Superior": [
        "Lengua III",
        "Lengua Extranjera III",
        "Educación Física III",
        "Geografía III",
        "Historia III",
        "Formación Ética y Ciudadana II",
        "Matemática III",
        "Ciencias Biológicas III",
        "Física II",
        "Química II",
        "Tecnología de la Información y de las Comunicaciones II",
        "Dibujo Técnico - CAD",
        "Diseño Gráfico y Asistido",
        "Taller: Introduccion a la Informatica",
        "Taller II: Electronica Basica General",
        "Taller II: Instalaciones Electricas Basicas"
      ],

      "Segundo año - Ciclo Superior": [
        "Lengua y Literatura I",
        "Lengua Extranjera: Inglés Técnico I",
        "Educación Física IV",
        "Filosofía",
        "Análisis Matemático I",
        "Tecnología de los materiales",
        "Taller de Lenguajes de Programacion",
        "Configuracion y Adaptacion del Sistema Operativo",
        "Instalacion de Computadoras",
        "Introduccion a la programacion",
        "Asistencia Sobre Utilitarios",
        "Instalacion Basica de Software"
      ],

      "Tercer año - Ciclo Superior": [
        "Lengua y Literatura II",
        "Lengua Extranjera: Inglés Técnico II",
        "Educación Física V",
        "Ética y Deontología",
        "Matemática Aplicada I",
        "Contabilidad y Finanzas",
        "Administración y Comercialización de Microemprendimientos Informáticos",
        "Legislación Informática",
        "Instalacion y Remplazo de Componentes Internos",
        "Adaptacion y Complementacion de Programa",
        "Administracion de Redes Locales",
        "Manipulacion y preservacion de Datos",
        "Apreciacion de los Sistemas de Informacion Tipicos",
        "Conversion y Reparacion de Datos",
        "Practicas profecionalizante I",
      ],

      "Cuarto año - Ciclo Superior": [
        "Lenguaje y Literatura III",
        "Lengua Extranjera: Inglés Técnico III",
        "Lenguaje Artístico y Comunicaciona",
        "Matemática Aplicada II",
        "Proyecto Tecnológico",
        "Asistencia sobre Aplicaciones Especificas",
        "Mantenimientos de Software",
        "Conexion a Redes Extendidas",
        "Mantenimiento de Hardware Monousuario",
        "Adaptacion del Ambiente de Trabajo",
        "Autogestion Aplicada",
        "Aplicacion en Redes Informaticas",
        "Proyecto Final",
        "Practicas Profesionalizantes II",
      ]

    }
  }
};

/* helper */
function slugify(text){
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g,"-")
    .replace(/^-|-$/g,"");
}

/* render */
function renderCards(items){
  content.innerHTML = "";

  items.forEach(item=>{
    const btn = document.createElement("button");

    btn.className = "option-card";

    btn.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.subtitle || ""}</p>
    `;

    btn.onclick = item.action;

    content.appendChild(btn);
  });
}

function renderPdfCards(turno, curso, materias){

  content.innerHTML = "";

  materias.forEach((materia,index)=>{

    const link = document.createElement("a");

    link.className = "option-card pdf-card";

    const archivo =
      `${turno}/${slugify(curso)}/materia${index+1}.pdf`;
      
    link.href = archivo;

    link.target = "_blank";

    link.innerHTML = `
      <span class="pdf-icon">📄</span>
      <h3>${materia}</h3>
      <p>Abrir programa</p>
    `;

    content.appendChild(link);

  });

  breadcrumb.innerText =
    `Inicio / ${data[turno].nombre} / ${curso}`;
}

/* HOME */
function showHome(){

  historyStack = [];

  backBtn.classList.add("hidden");

  breadcrumb.innerText = "Inicio";

  renderCards([

    {
      title:"Turno Mañana",
      subtitle:"Orientación en Electrónica",

      action:()=>{

        historyStack.push(showHome);

        showCursos("mañana");
      }
    },

    {
      title:"Turno Tarde",
      subtitle:"Orientación en Informática",

      action:()=>{

        historyStack.push(showHome);

        showCursos("tarde");
      }
    }

  ]);
}

/* CURSOS */
function showCursos(turno){

  backBtn.classList.remove("hidden");

  breadcrumb.innerText =
    `Inicio / ${data[turno].nombre}`;

  const cursos = Object.keys(data[turno].cursos);

  renderCards(

    cursos.map(curso=>({

      title:curso,

      subtitle:"Ver materias",

      action:()=>{

        historyStack.push(()=>showCursos(turno));

        renderPdfCards(
          turno,
          curso,
          data[turno].cursos[curso]
        );
      }

    }))
  );
}

/* volver */
backBtn.onclick = ()=>{

  const prev = historyStack.pop();

  if(prev) prev();

  if(historyStack.length === 0){

    backBtn.classList.add("hidden");
  }
};

showHome();