const cursosData = [
  // Formato: {nombre, semestre, requisitos}
  { nombre: "Biología celular", semestre: 1, requisitos: [] },
  { nombre: "Química General y Orgánico", semestre: 1, requisitos: [] },
  { nombre: "Física Médica", semestre: 1, requisitos: [] },
  { nombre: "Matemáticas", semestre: 1, requisitos: [] },
  { nombre: "Orientación profesional", semestre: 1, requisitos: [] },
  { nombre: "Estrategia para el aprendizaje", semestre: 1, requisitos: [] },

  { nombre: "Bioquímica General", semestre: 2, requisitos: ["Biología celular", "Química General y Orgánico"] },
  { nombre: "Anatomía Veterinaria 1", semestre: 2, requisitos: ["Biología celular"] },
  { nombre: "Histología Veterinaria", semestre: 2, requisitos: ["Biología celular"] },
  { nombre: "Zoología Veterinaria", semestre: 2, requisitos: [] },
  { nombre: "Bienestar animal", semestre: 2, requisitos: ["Orientación profesional"] },
  { nombre: "Inglés Instrumental 1", semestre: 2, requisitos: [] },

  { nombre: "Antropología", semestre: 3, requisitos: [] },
  { nombre: "Ecología", semestre: 3, requisitos: ["Zoología Veterinaria"] },
  { nombre: "Fisiología Animal", semestre: 3, requisitos: ["Bioquímica General", "Histología Veterinaria", "Bienestar animal"] },
  { nombre: "Anatomía Veterinaria 2", semestre: 3, requisitos: ["Anatomía Veterinaria 1"] },
  { nombre: "Microbiología General", semestre: 3, requisitos: ["Bioquímica General"] },
  { nombre: "Inmunología", semestre: 3, requisitos: ["Histología Veterinaria", "Bienestar animal"] },
  { nombre: "Genética Ganadera", semestre: 3, requisitos: ["Biología celular", "Matemáticas"] },
  { nombre: "Inglés Instrumental 2", semestre: 3, requisitos: ["Inglés Instrumental 1"] },

  // Puedes continuar añadiendo los cursos del resto de los semestres aquí...
];

const estadoCursos = {}; // Guardar cursos aprobados
const malla = document.getElementById("malla");

// Agrupar por semestre
const cursosPorSemestre = {};
cursosData.forEach(curso => {
  if (!cursosPorSemestre[curso.semestre]) cursosPorSemestre[curso.semestre] = [];
  cursosPorSemestre[curso.semestre].push(curso);
  estadoCursos[curso.nombre] = false;
});

// Mostrar los cursos
for (let semestre in cursosPorSemestre) {
  const columna = document.createElement("div");
  columna.classList.add("semestre");
  const titulo = document.createElement("h2");
  titulo.textContent = `Semestre ${semestre}`;
  columna.appendChild(titulo);

  cursosPorSemestre[semestre].forEach(curso => {
    const div = document.createElement("div");
    div.classList.add("curso");
    div.textContent = curso.nombre;
    div.dataset.nombre = curso.nombre;
    div.dataset.requisitos = JSON.stringify(curso.requisitos);
    if (curso.requisitos.length > 0) div.classList.add("bloqueado");
    columna.appendChild(div);
  });

  malla.appendChild(columna);
}

// Función para actualizar estado
function actualizarEstado() {
  document.querySelectorAll(".curso").forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = JSON.parse(div.dataset.requisitos);

    if (estadoCursos[nombre]) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
      div.removeEventListener("click", manejarClick);
    } else {
      const desbloqueado = requisitos.every(req => estadoCursos[req]);
      div.classList.toggle("bloqueado", !desbloqueado);
      if (desbloqueado) div.addEventListener("click", manejarClick);
      else div.removeEventListener("click", manejarClick);
    }
  });
}

// Click para aprobar ramo
function manejarClick(e) {
  const nombre = e.currentTarget.dataset.nombre;
  estadoCursos[nombre] = true;
  actualizarEstado();
}

actualizarEstado();
