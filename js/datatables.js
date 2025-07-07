$('#tablaDatos').DataTable({
  paging: true,
  searching: false,  
  info: false,      
  lengthChange: false 
});

$(document).ready(function () {
  let tabla = $('#tablaDatos').DataTable({
    paging: true,
    searching: false,
    info: false,
    lengthChange: false
  });

  $('#cargarBtn').on('click', function () {
    let tipo = $('#tipoDatos').val();
    let url = `https://jsonplaceholder.typicode.com/${tipo}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        tabla.clear().destroy();

        if (tipo === "users") {
          $('#tablaDatos thead').html(`
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Sitio Web</th>
            </tr>
          `);
          tabla = $('#tablaDatos').DataTable({
            paging: true,
            searching: false,
            info: false,
            lengthChange: false
          });
          data.forEach(u => {
            tabla.row.add([
              u.id,
              u.name,
              u.username,
              u.email,
              u.website
            ]);
          });
        } else if (tipo === "posts") {
          $('#tablaDatos thead').html(`
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Contenido</th>
            </tr>
          `);
          tabla = $('#tablaDatos').DataTable({
            paging: true,
            searching: false,
            info: false,
            lengthChange: false
          });
          data.forEach(p => {
            tabla.row.add([
              p.id,
              p.title,
              p.body
            ]);
          });
        } else if (tipo === "comments") {
          $('#tablaDatos thead').html(`
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Comentario</th>
            </tr>
          `);
          tabla = $('#tablaDatos').DataTable({
            paging: true,
            searching: false,
            info: false,
            lengthChange: false
          });
          data.forEach(c => {
            tabla.row.add([
              c.id,
              c.name,
              c.email,
              c.body
            ]);
          });
        }

        tabla.draw();
      });
  });
});
