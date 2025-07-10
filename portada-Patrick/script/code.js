$(function()
{
    $("#alerta").click(function()
    {
        alert("Te saluda Patrick");
    })

    $("#alerta_parrafo1").click(function()
    {
        alert($("#parrafo1").text());
    })

    $("#ocultar").click(function()
    {
        $("#parrafo1").hide();
    })

    $("#mostrar").click(function()
    {
        $("#parrafo1").show();
        $("h1").show();
    })

    $("#salida1").mouseenter(function()
    {
        $("#mapa").slideDown();
    })

    $("#salida1").mouseleave(function()
    {
        $("#mapa").slideUp();
    })

    $("#salida2").mouseenter(function()
    {
        $("#mapa").fadeOut();
    })

    $("#salida2").mouseleave(function()
    {
        $("#mapa").fadeIn();
    })

})

// Script para navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar-custom');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Smooth scrolling para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Newsletter form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        alert('¡Gracias por suscribirte! Te mantendremos informado sobre nuestras ofertas especiales.');
        this.reset();
      }
    });
  }
});
