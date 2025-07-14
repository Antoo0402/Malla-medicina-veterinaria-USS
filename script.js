const cursosData = [
  // SEMESTRE 1
  { nombre: "Biología celular", semestre: 1, requisitos: [] },
  { nombre: "Química General y Orgánico", semestre: 1, requisitos: [] },
  { nombre: "Física Médica", semestre: 1, requisitos: [] },
  { nombre: "Matemáticas", semestre: 1, requisitos: [] },
  { nombre: "Orientación profesional", semestre: 1, requisitos: [] },
  { nombre: "Estrategia para el aprendizaje", semestre: 1, requisitos: [] },

  // SEMESTRE 2
  { nombre: "Bioquímica General", semestre: 2, requisitos: ["Biología celular", "Química General y Orgánico"] },
  { nombre: "Anatomía Veterinaria 1", semestre: 2, requisitos: ["Biología celular"] },
  { nombre: "Histología Veterinaria", semestre: 2, requisitos: ["Biología celular"] },
  { nombre: "Zoología Veterinaria", semestre: 2, requisitos: [] },
  { nombre: "Bienestar animal", semestre: 2, requisitos: ["Orientación profesional"] },
  { nombre: "Inglés Instrumental 1", semestre: 2, requisitos: [] },

  // SEMESTRE 3
  { nombre: "Antropología", semestre: 3, requisitos: [] },
  { nombre: "Ecología", semestre: 3, requisitos: ["Zoología Veterinaria"] },
  { nombre: "Fisiología Animal", semestre: 3, requisitos: ["Bioquímica General", "Histología Veterinaria", "Bienestar animal"] },
  { nombre: "Anatomía Veterinaria 2", semestre: 3, requisitos: ["Anatomía Veterinaria 1"] },
  { nombre: "Microbiología General", semestre: 3, requisitos: ["Bioquímica General"] },
  { nombre: "Inmunología", semestre: 3, requisitos: ["Histología Veterinaria"] },
  { nombre: "Genética Ganadera", semestre: 3, requisitos: ["Biología celular", "Matemáticas"] },
  { nombre: "Inglés Instrumental 2", semestre: 3, requisitos: ["Inglés Instrumental 1"] },

  // SEMESTRE 4
  { nombre: "Ética", semestre: 4, requisitos: ["Antropología"] },
  { nombre: "Producción de forraje", semestre: 4, requisitos: ["Ecología"] },
  { nombre: "Fisiopatología animal", semestre: 4, requisitos: ["Fisiología Animal", "Inmunología"] },
  { nombre: "Reproducción animal", semestre: 4, requisitos: ["Fisiología Animal"] },
  { nombre: "Enfermedades parasitarias", semestre: 4, requisitos: ["Zoología Veterinaria"] },
  { nombre: "Enfermedades infecciosas", semestre: 4, requisitos: ["Microbiología General", "Inmunología"] },
  { nombre: "Patología general", semestre: 4, requisitos: ["Fisiología Animal"] },

  // SEMESTRE 5
  { nombre: "Electivo FILS", semestre: 5, requisitos: ["Ética"] },
  { nombre: "Nutrición y alimentación animal", semestre: 5, requisitos: ["Producción de forraje"] },
  { nombre: "Patología especial de sistemas", semestre: 5, requisitos: ["Patología general"] },
  { nombre: "Farmacología Veterinaria 1", semestre: 5, requisitos: ["Enfermedades infecciosas"] },
  { nombre: "Andrología", semestre: 5, requisitos: ["Reproducción animal", "Fisiopatología animal"] },
  { nombre: "Sistema de producción de carne", semestre: 5, requisitos: ["Genética Ganadera", "Reproducción animal"] },
  { nombre: "Economía", semestre: 5, requisitos: ["Matemáticas", "Producción de forraje"] },
];
// Continúa desde la Parte 1...

// SEMESTRE 6
cursosData.push(
  { nombre: "Cirugía general", semestre: 6, requisitos: ["Patología especial de sistemas"] },
  { nombre: "Farmacología Veterinaria 2", semestre: 6, requisitos: ["Farmacología Veterinaria 1", "Enfermedades parasitarias"] },
  { nombre: "Sistema de producción de leche", semestre: 6, requisitos: ["Nutrición y alimentación animal", "Reproducción animal"] },
  { nombre: "Tecnología de la carne", semestre: 6, requisitos: ["Sistema de producción de carne"] },
  { nombre: "Ginecología y obstetricia", semestre: 6, requisitos: ["Andrología"] },
  { nombre: "Contabilidad y administración", semestre: 6, requisitos: ["Economía"] }
);

// SEMESTRE 7
cursosData.push(
  { nombre: "Cirugía especial", semestre: 7, requisitos: ["Cirugía general", "Farmacología Veterinaria 2"] },
  { nombre: "Exploración clínica", semestre: 7, requisitos: ["Patología especial de sistemas", "Ginecología y obstetricia"] },
  { nombre: "Análisis estadístico", semestre: 7, requisitos: ["Contabilidad y administración"] },
  { nombre: "Sistema de peces", semestre: 7, requisitos: ["Reproducción animal", "Nutrición y alimentación animal"] },
  { nombre: "Tecnología de la leche", semestre: 7, requisitos: ["Tecnología de la carne", "Sistema de producción de leche"] },
  { nombre: "Conservación de la vida silvestre", semestre: 7, requisitos: ["Ecología"] }
);

// SEMESTRE 8
cursosData.push(
  { nombre: "Toxicología Veterinaria", semestre: 8, requisitos: ["Farmacología Veterinaria 2"] },
  { nombre: "Métodos complementarios de diagnóstico", semestre: 8, requisitos: ["Física Médica", "Exploración clínica"] },
  { nombre: "Medicina Interna", semestre: 8, requisitos: ["Exploración clínica", "Cirugía especial"] },
  { nombre: "Metodología de la investigación", semestre: 8, requisitos: ["Análisis estadístico"] },
  { nombre: "Epidemiología y salud pública", semestre: 8, requisitos: ["Farmacología Veterinaria 1", "Análisis estadístico"] },
  { nombre: "Formulación y evaluación de proyectos", semestre: 8, requisitos: ["Contabilidad y administración"] }
);

// SEMESTRE 9
cursosData.push(
  { nombre: "Clínica de animales silvestres y exóticos", semestre: 9, requisitos: ["Toxicología Veterinaria", "Medicina Interna", "Conservación de la vida silvestre", "Métodos complementarios de diagnóstico"] },
  { nombre: "Clínica de equinos y rumiantes", semestre: 9, requisitos: ["Toxicología Veterinaria", "Medicina Interna", "Métodos complementarios de diagnóstico"] },
  { nombre: "Clínica de animales de compañía", semestre: 9, requisitos: ["Toxicología Veterinaria", "Medicina Interna", "Métodos complementarios de diagnóstico"] },
  { nombre: "Legislación y deontología", semestre: 9, requisitos: ["Epidemiología y salud pública"] },
  { nombre: "Memoria de título", semestre: 9, requisitos: [ /* todos los anteriores */ ] },  // bloqueada manualmente
  { nombre: "Introducción de los animales", semestre: 9, requisitos: [] }
);

// SEMESTRE 10
cursosData.push(
  { nombre: "Electivo 1", semestre: 10, requisitos: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Legislación y deontología"] },
  { nombre: "Electivo 2", semestre: 10, requisitos: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Legislación y deontología"] },
  { nombre: "Electivo 3", semestre: 10, requisitos: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Legislación y deontología"] },
  { nombre: "Internado", semestre: 10, requisitos: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Legislación y deontología"] }
);
