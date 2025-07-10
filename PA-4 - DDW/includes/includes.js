// Función para cargar includes de navbar y footer
document.addEventListener('DOMContentLoaded', function() {
    // Detectar la ruta base según la ubicación del archivo
    const pathLevel = getPathLevel();
    const basePath = pathLevel + 'includes/';
    
    // Decidir qué archivos usar según el nivel de directorio
    let navbarFile, footerFile;
    
    if (pathLevel === '../../') {
        // Para páginas en subdirectorios
        navbarFile = basePath + 'navbar-subdirectorio.html';
        footerFile = basePath + 'footer-subdirectorio.html';
    } else {
        // Para páginas en el directorio raíz
        navbarFile = basePath + 'navbar.html';
        footerFile = basePath + 'footer.html';
    }
    
    // Cargar Navbar
    loadInclude('navbar-placeholder', navbarFile, pathLevel);
    
    // Cargar Footer
    loadInclude('footer-placeholder', footerFile, pathLevel);
});

function getPathLevel() {
    const currentPath = window.location.pathname;
    
    // Para archivos locales, detectar por la estructura de carpetas en la URL
    if (currentPath.includes('mision') || currentPath.includes('diseño-Samuel') || 
        currentPath.includes('proyecto-Danny') || currentPath.includes('productos-Brenda') || 
        currentPath.includes('contactos')) {
        return '../../';
    }
    
    // Si la URL contiene subdirectorios
    const pathSegments = currentPath.split('/').filter(segment => segment && segment !== 'index.html');
    if (pathSegments.length >= 2) {
        return '../../';
    }
    
    return '';
}

function loadInclude(elementId, filePath, pathLevel = '') {
    const element = document.getElementById(elementId);
    if (element) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                // Corregir las rutas en el contenido cargado
                let correctedData = data;
                
                // Reemplazar rutas absolutas con rutas relativas según el nivel de directorio
                if (pathLevel === '../../') {
                    // Para páginas en subdirectorios profundos
                    correctedData = correctedData.replace(/href="\/([^"]*)/g, 'href="../../$1');
                    correctedData = correctedData.replace(/src="\/([^"]*)/g, 'src="../../$1');
                } else {
                    // Para páginas en el directorio raíz
                    correctedData = correctedData.replace(/href="\/([^"]*)/g, 'href="$1');
                    correctedData = correctedData.replace(/src="\/([^"]*)/g, 'src="$1');
                }
                
                element.innerHTML = correctedData;
                
                // Inicializar Bootstrap después de cargar el navbar
                if (elementId === 'navbar-placeholder') {
                    initializeBootstrap();
                }
            })
            .catch(error => {
                console.error('Error loading include:', error);
                // Fallback en caso de error
                if (elementId === 'navbar-placeholder') {
                    element.innerHTML = '<p>Error cargando navegación</p>';
                } else if (elementId === 'footer-placeholder') {
                    element.innerHTML = '<p>Error cargando footer</p>';
                }
            });
    }
}

function initializeBootstrap() {
    // Reinicializar dropdowns de Bootstrap después de cargar el navbar
    if (typeof bootstrap !== 'undefined') {
        const dropdowns = document.querySelectorAll('.dropdown-toggle');
        dropdowns.forEach(dropdown => {
            new bootstrap.Dropdown(dropdown);
        });
    }
}

// Función para establecer la página activa en el navbar
function setActivePage(pageId) {
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => {
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === pageId) {
                    link.classList.add('active');
                }
            });
        }, 100);
    });
}
