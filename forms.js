$(document).ready(function () {

  const today = new Date().toISOString().split('T')[0];
  $('#fechaIngreso').attr('max', today);

  function setError(selector, message) {
    $(selector).addClass('error-input');
    $(selector).next('.error').text(message);
  }

  $('#cancelBtn').click(function () {
    $('#userForm')[0].reset();
    $('.error').text('');
    $('input, select').removeClass('error-input');
  });

  $('#saveBtn').click(function () {
    let isValid = true;

    $('.error').text('');
    $('input, select').removeClass('error-input');

    const nombre = $('#nombre').val().trim();
    const usuario = $('#usuario').val().trim();
    const fechaIngreso = $('#fechaIngreso').val();
    const email = $('#email').val().trim();

    if (nombre === '') {
      setError('#nombre', 'Este campo es obligatorio.');
      isValid = false;
    }

    if (usuario === '') {
      setError('#usuario', 'Este campo es obligatorio.');
      isValid = false;
    }

    if (!fechaIngreso) {
      setError('#fechaIngreso', 'Fecha de ingreso es obligatoria.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
      setError('#email', 'Este campo es obligatorio.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setError('#email', 'Email no válido.');
      isValid = false;
    }

    if (isValid) {
      alert('Usuario guardado correctamente.');
      $('#userForm')[0].reset();
    }
  });
});