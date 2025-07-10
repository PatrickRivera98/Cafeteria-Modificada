# 📋 GUÍA PARA IMPLEMENTAR NAVBAR Y FOOTER COMPARTIDOS

## 🎯 **Objetivo**
Usar el mismo navbar y footer en todas las páginas del proyecto Cafetería Miski.

## 📁 **Archivos Creados**
- `includes/navbar.html` - Navbar compartido
- `includes/footer.html` - Footer compartido  
- `includes/includes.js` - Script para cargar los includes
- `includes/template.html` - Template base para nuevas páginas

## 🔧 **Cómo Implementar en Páginas Existentes**

### **Paso 1: Actualizar el HTML**
Reemplaza el navbar y footer existente con:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Título - Cafetería Miski</title>
    
    <!-- CSS Dependencies -->
    <link rel="stylesheet" href="../portada-Patrick/style.css">
    <link rel="stylesheet" href="tu-archivo.css"> <!-- CSS específico de la página -->
    <link rel="icon" href="../portada-Patrick/imagenes/Logo de cafetería simple gris.png">
    <link rel="stylesheet" href="../portada-Patrick/script/bootstrap_min.css">
    
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navbar Placeholder -->
    <div id="navbar-placeholder"></div>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Tu contenido específico aquí -->
    </main>

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <!-- JavaScript Dependencies -->
    <script src="../portada-Patrick/script/bootstrap_bundle_min.js"></script>
    <script src="../portada-Patrick/script/code.js"></script>
    <script src="../includes/includes.js"></script>
    
    <!-- Establecer página activa -->
    <script>
        setActivePage('nombre-seccion'); // productos, mision, historia, clientes, contacto
    </script>
</body>
</html>
```

### **Paso 2: Ajustar las Rutas**
Dependiendo de la ubicación de cada archivo, ajustar las rutas:

**Para archivos en la raíz:**
```html
<link rel="stylesheet" href="portada-Patrick/style.css">
<script src="includes/includes.js"></script>
```

**Para archivos en subcarpetas:**
```html
<link rel="stylesheet" href="../portada-Patrick/style.css">
<script src="../includes/includes.js"></script>
```

### **Paso 3: Actualizar CSS**
Agregar en el CSS de cada página:
```css
.main-content {
    margin-top: 80px; /* Para el navbar fijo */
    padding-top: 20px;
}
```

## 📝 **Páginas a Actualizar**

### **1. Misión - Leslie**
- Archivo: `mision - Leslie/FINAL/index.html`
- Página activa: `setActivePage('mision');`

### **2. Historia - Samuel**  
- Archivo: `diseño-Samuel/programacionDiseñoweb/index.html`
- Página activa: `setActivePage('historia');`

### **3. Productos - Brenda**
- Archivo: `productos-Brenda/index-BRENDA.html`
- Página activa: `setActivePage('productos');`

### **4. Clientes - Danny**
- Archivo: `proyecto-Danny/PROYECTO/index2.html`
- Página activa: `setActivePage('clientes');`

### **5. Contacto - Mari**
- Archivo: `contactos - Mari/index-MARI.html`
- Página activa: `setActivePage('contacto');`

## ⚡ **Ventajas de este Método**

✅ **Centralizado** - Un solo lugar para actualizar navbar/footer
✅ **Fácil mantenimiento** - Cambios se reflejan en todas las páginas
✅ **Consistencia** - Mismo diseño en todo el sitio
✅ **SEO amigable** - Cada página mantiene su estructura HTML
✅ **Navegación funcional** - Los enlaces se ajustan automáticamente

## 🔄 **Proceso de Migración**

1. **Backup** - Hacer copia de las páginas originales
2. **Actualizar una por una** - Empezar con la más sencilla
3. **Probar** - Verificar que todo funcione correctamente
4. **Ajustar CSS** - Corregir cualquier problema de estilos
5. **Validar enlaces** - Asegurar que la navegación funcione

## 🚨 **Problemas Comunes y Soluciones**

**❌ Navbar no aparece:**
- Verificar que la ruta a `includes/includes.js` sea correcta
- Comprobar que el archivo `includes/navbar.html` exista

**❌ Estilos rotos:**
- Ajustar rutas de CSS según la ubicación del archivo
- Verificar que `portada-Patrick/style.css` se cargue correctamente

**❌ JavaScript no funciona:**
- Cargar Bootstrap antes que el script de includes
- Verificar que no haya errores en la consola del navegador

## 📞 **Contacto**
Si tienes problemas implementando esto, puedo ayudarte página por página.
