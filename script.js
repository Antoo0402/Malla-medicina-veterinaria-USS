document.addEventListener('DOMContentLoaded', function() {
    // Datos completos de la malla curricular
    const curriculumData = [
        // Primer semestre
        {
            semester: "1er Semestre",
            courses: [
                { name: "Biología celular", opens: ["Bioquímica General", "Anatomía Veterinaria 1", "Histología veterinaria", "Genética Ganadera"] },
                { name: "Química General y Orgánico", opens: ["Bioquímica General"] },
                { name: "Fica Médica", opens: ["Métodos de complementarios de diagnóstico"] },
                { name: "Matemáticas", opens: ["Genética Ganadera", "Economía"] },
                { name: "Orientación profesional", opens: ["Bienestar animal"] },
                { name: "Estrategia para el aprendizaje", opens: [] }
            ]
        },
        // Segundo semestre
        {
            semester: "2do Semestre",
            courses: [
                { name: "Bioquímica General", opens: ["Fisiología Animal", "Microbiología General"] },
                { name: "Anatomía Veterinaria 1", opens: ["Anatomía Veterinaria 2"] },
                { name: "Histología Veterinaria", opens: ["Fisiología Animal", "Inmunología Veterinaria"] },
                { name: "Zoología Veterinaria", opens: ["Ecología", "Enfermedades parasitarias"] },
                { name: "Bienestar animal", opens: ["Fisiología Animal", "Inmunología", "Sistema de producción de carne"] },
                { name: "Inglés Instrumental 1", opens: ["Inglés Instrumental 2"] }
            ]
        },
        // Tercer semestre
        {
            semester: "3er Semestre",
            courses: [
                { name: "Antropología", opens: ["Ética"] },
                { name: "Ecología", opens: ["Producción de forraje", "Conservación de la vida silvestre"] },
                { name: "Fisiología Animal", opens: ["Fisiopatología Animal", "Reproducción animal", "Enfermedades infecciosas", "Patología general"] },
                { name: "Anatomía Veterinaria 2", opens: [] },
                { name: "Microbiología General", opens: ["Enfermedades infecciosas"] },
                { name: "Immunología", opens: ["Fisiopatología Animal", "Enfermedades infecciosas"] },
                { name: "Genética Ganadera", opens: ["Sistema de producción de carne", "Sistema de producción de leche"] },
                { name: "Inglés Instrumental 2", opens: [] }
            ]
        },
        // Cuarto semestre
        {
            semester: "4to Semestre",
            courses: [
                { name: "Ética", opens: ["Electivo FILS"] },
                { name: "Producción de forraje", opens: ["Nutrición y alimentación animal", "Economía"] },
                { name: "Fisiopatología animal", opens: ["Farmacología Veterinaria", "Andrología"] },
                { name: "Reproducción animal", opens: ["Andrología", "Sistema de producción de carne", "Sistema de producción de leche", "Sistema de producción de peces"] },
                { name: "Enfermedades parasitarias", opens: ["Farmacología Veterinaria 2"] },
                { name: "Enfermedades infecciosas", opens: ["Farmacología Veterinaria 1", "Epidemiología y salud publica"] },
                { name: "Patología general", opens: ["Patología especial de sistemas"] }
            ]
        },
        // Quinto semestre
        {
            semester: "5to Semestre",
            courses: [
                { name: "Electivo FILS", opens: [] },
                { name: "Nutrición y alimentación animal", opens: ["Sistema de producción de leche", "Sistema de producción de peces"] },
                { name: "Patología especial de sistemas", opens: ["Cirugía General", "Exploración clínica de los animal"] },
                { name: "Farmacología Veterinaria 1", opens: ["Farmacología Veterinaria 2"] },
                { name: "Andrología", opens: ["Ginecología y obstetricia"] },
                { name: "Sistema de producción de carne", opens: ["Tecnología de la carne"] },
                { name: "Economía", opens: ["Contabilidad y administración"] }
            ]
        },
        // Sexto semestre
        {
            semester: "6to Semestre",
            courses: [
                { name: "Cirugía general", opens: ["Cirugía especial"] },
                { name: "Farmacología Veterinaria 2", opens: ["Cirugía especial", "Toxicología Veterinaria"] },
                { name: "Sistema de producción de leche", opens: ["Tecnología de la leche"] },
                { name: "Tecnología de la carne", opens: ["Tecnología de la leche"] },
                { name: "Ginecología y obstetricia", opens: ["Exploración clínica de los animales"] },
                { name: "Contabilidad y administración", opens: ["Análisis estadísticos", "Formulación y evaluación de proyectos"] }
            ]
        },
        // Séptimo semestre
        {
            semester: "7mo Semestre",
            courses: [
                { name: "Cirugía especial", opens: ["Medicina interna"] },
                { name: "Exploración clínica", opens: ["Métodos complementarios de diagnóstico", "Medicina interna"] },
                { name: "Análisis estadístico", opens: ["Metodología de la investigación científica", "Epidemiología y salud publica"] },
                { name: "Sistema de peces", opens: [] },
                { name: "Tecnología de la leche", opens: ["Inocuidad de los alimentos"] },
                { name: "Conservación de la vida silvestre", opens: ["Clínica de animales silvestres y exóticos"] }
            ]
        },
        // Octavo semestre
        {
            semester: "8vo Semestre",
            courses: [
                { name: "Toxicología Veterinaria", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía", "Inocuidad de los alimentos"] },
                { name: "Métodos complementarios de diagnóstico", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía"] },
                { name: "Medicina Interna", opens: ["Clínica de animales silvestres y exóticos", "Clínica de equinos y rumiantes", "Clínica de animales de compañía"] },
                { name: "Metodología de la investigación", opens: ["Memoria de título"] },
                { name: "Epidemiología y salud publica", opens: ["Legislación y deontología", "Inocuidad de los alimentos"] },
                { name: "Formulación y evaluación de proyectos", opens: ["Memoria de título"] }
            ]
        },
        // Noveno semestre
        {
            semester: "9no Semestre",
            courses: [
                { name: "Clínica de animales silvestres y exóticos", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Clínica de equinos y rumiantes", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Clínica de animales de compañía", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Legislación y deontología", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] },
                { name: "Memoria de título", opens: [], requiresAll: true, requiresUpTo: 8 },
                { name: "Inocuidad de los alimentos", opens: ["Electivo 1", "Electivo 2", "Electivo 3", "Internado"] }
            ]
        },
        // Décimo semestre
        {
            semester: "10mo Semestre",
            courses: [
                { name: "Electivo 1", opens: [] },
                { name: "Electivo 2", opens: [] },
                { name: "Electivo 3", opens: [] },
                { name: "Internado", opens: [] }
            ]
        }
    ];

    // Estado de la aplicación
    const state = {
        completedCourses: JSON.parse(localStorage.getItem('completedCourses')) || {},
        totalCourses: curriculumData.reduce((total, semester) => total + semester.courses.length, 0),
        courseElements: {}
    };

    // Elementos del DOM
    const DOM = {
        curriculumGrid: document.querySelector('.curriculum-grid'),
        resetBtn: document.getElementById('reset-btn'),
        progressBar: document.querySelector('.progress-bar'),
        progressText: document.getElementById('progress-text')
    };

    // Inicializar la aplicación
    function init() {
        renderCurriculum();
        setupEventListeners();
        updateProgress();
    }

    // Renderizar toda la malla curricular
    function renderCurriculum() {
        DOM.curriculumGrid.innerHTML = '';
        state.courseElements = {};

        curriculumData.forEach(semester => {
            const semesterElement = createSemesterElement(semester);
            DOM.curriculumGrid.appendChild(semesterElement);
        });
    }

    // Crear elemento de semestre
    function createSemesterElement(semester) {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        const semesterTitle = document.createElement('h2');
        semesterTitle.textContent = semester.semester;
        semesterElement.appendChild(semesterTitle);
        
        semester.courses.forEach(course => {
            const courseElement = createCourseElement(course);
            semesterElement.appendChild(courseElement);
            state.courseElements[course.name] = courseElement;
        });
        
        return semesterElement;
    }

    // Crear elemento de curso
    function createCourseElement(course) {
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        courseElement.dataset.courseName = course.name;
        
        // Configurar estado del curso
        updateCourseState(course, courseElement);
        
        // Contenido del curso
        const courseNameElement = document.createElement('div');
        courseNameElement.className = 'course-name';
        courseNameElement.textContent = course.name;
        courseElement.appendChild(courseNameElement);
        
        // Requisitos que abre
        if (course.opens && course.opens.length > 0) {
            const courseRequirementsElement = document.createElement('div');
            courseRequirementsElement.className = 'course-requirements';
            courseRequirementsElement.textContent = `Abre: ${course.opens.join(', ')}`;
            courseElement.appendChild(courseRequirementsElement);
        }
        
        // Tooltip para requisitos faltantes
        if (!state.completedCourses[course.name]) {
            const prerequisites = getPrerequisites(course.name);
            const missingPrerequisites = prerequisites.filter(p => !state.completedCourses[p]);
            
            if (missingPrerequisites.length > 0) {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = `Requisitos: ${missingPrerequisites.join(', ')}`;
                courseElement.appendChild(tooltip);
            }
        }
        
        // Evento de clic
        courseElement.addEventListener('click', () => handleCourseClick(course, courseElement));
        
        return courseElement;
    }

    // Actualizar estado visual del curso
    function updateCourseState(course, courseElement) {
        const isCompleted = state.completedCourses[course.name];
        
        // Reiniciar clases
        courseElement.className = 'course';
        courseElement.classList.remove('completed', 'available', 'locked');
        
        if (isCompleted) {
            courseElement.classList.add('completed');
            return;
        }
        
        // Verificar requisitos
        const prerequisites = getPrerequisites(course.name);
        const allPrerequisitesMet = prerequisites.every(p => state.completedCourses[p]);
        
        // Verificar requisito especial de "Memoria de título"
        if (course.requiresAll && course.requiresUpTo) {
            const allPreviousCompleted = checkAllPreviousSemestersCompleted(course.requiresUpTo);
            if (!allPreviousCompleted) {
                courseElement.classList.add('locked');
                addPrerequisiteIcon(courseElement, "Todos los anteriores");
                return;
            }
        }
        
        if (prerequisites.length > 0 && !allPrerequisitesMet) {
            courseElement.classList.add('locked');
            addPrerequisiteIcon(courseElement, `${prerequisites.filter(p => !state.completedCourses[p]).length}/${prerequisites.length}`);
            return;
        }
        
        // Si no está completado y no tiene requisitos incumplidos, está disponible
        courseElement.classList.add('available');
    }

    // Añadir icono de requisitos faltantes
    function addPrerequisiteIcon(element, text) {
        // Eliminar icono existente si lo hay
        const existingIcon = element.querySelector('.prerequisite-icon');
        if (existingIcon) element.removeChild(existingIcon);
        
        const icon = document.createElement('span');
        icon.className = 'prerequisite-icon';
        if (element.classList.contains('locked')) icon.classList.add('locked');
        icon.textContent = text;
        element.appendChild(icon);
    }

    // Manejar clic en un curso
    function handleCourseClick(course, courseElement) {
        if (courseElement.classList.contains('locked')) return;
        
        // Alternar estado de completado
        const courseName = course.name;
        if (state.completedCourses[courseName]) {
            delete state.completedCourses[courseName];
            courseElement.classList.remove('completed');
            courseElement.classList.add('available');
        } else {
            state.completedCourses[courseName] = true;
            courseElement.classList.remove('available');
            courseElement.classList.add('completed');
            
            // Efecto visual al completar
            courseElement.style.transform = 'scale(1.05)';
            setTimeout(() => {
                courseElement.style.transform = 'scale(1)';
            }, 200);
        }
        
        // Guardar estado y actualizar
        localStorage.setItem('completedCourses', JSON.stringify(state.completedCourses));
        updateAllCoursesState();
        updateProgress();
    }

    // Actualizar estado de todos los cursos
    function updateAllCoursesState() {
        curriculumData.forEach(semester => {
            semester.courses.forEach(course => {
                const courseElement = state.courseElements[course.name];
                if (courseElement) updateCourseState(course, courseElement);
            });
        });
    }

    // Obtener requisitos para un curso
    function getPrerequisites(courseName) {
        const prerequisites = [];
        
        curriculumData.forEach(semester => {
            semester.courses.forEach(course => {
                if (course.opens && course.opens.includes(courseName)) {
                    prerequisites.push(course.name);
                }
            });
        });
        
        return prerequisites;
    }

    // Verificar si todos los cursos hasta cierto semestre están completados
    function checkAllPreviousSemestersCompleted(upToSemester) {
        for (let i = 0; i < upToSemester; i++) {
            const semester = curriculumData[i];
            
            for (const course of semester.courses) {
                if (!state.completedCourses[course.name]) {
                    return false;
                }
            }
        }
        
        return true;
    }

    // Actualizar barra de progreso
    function updateProgress() {
        const completedCount = Object.keys(state.completedCourses).length;
        const progressPercentage = Math.round((completedCount / state.totalCourses) * 100);
        
        DOM.progressBar.style.setProperty('--progress', `${progressPercentage}%`);
        DOM.progressText.textContent = `${progressPercentage}% completado (${completedCount}/${state.totalCourses} ramos)`;
    }

    // Configurar event listeners
    function setupEventListeners() {
        DOM.resetBtn.addEventListener('click', () => {
            state.completedCourses = {};
            localStorage.removeItem('completedCourses');
            updateAllCoursesState();
            updateProgress();
        });
    }

    // Iniciar la aplicación
    init();
});
