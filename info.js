// Función para obtener usuarios del almacenamiento local o usar valores predeterminados
const obtenerUsuarios = () => {
    const usuariosAlmacenados = localStorage.getItem('baseDatosUsuarios');
    return usuariosAlmacenados ? JSON.parse(usuariosAlmacenados) : [
      {
        "nombre": "Pablo",
        "apellido": "Rojas",
        "email": "projas@gmail.com",
        "telefono": "320558456",
        "direccion": "Cra 5 #32-8",
        "cedula": "123456",
        "usuario": "projas",
        "contrasena": "123456"
      },
      {
        "nombre": "Roman",
        "apellido": "Riquelme",
        "email": "rriquelme@gmail.com",
        "telefono": "318958452",
        "direccion": "CRa12 #23-33",
        "cedula": "789456",
        "usuario": "rriquelme",
        "contrasena": "123456"
      },
      {
        "nombre": "Pedro",
        "apellido": "Zamora",
        "email": "pzamora@gmail.com",
        "telefono": "315797411",
        "direccion": "Cra 8 #97-6",
        "cedula": "456123",
        "usuario": "pzamora",
        "contrasena": "123456"
      }
    ];
  };
  
  // Función para ver los detalles de los usuarios en la tabla
  const mostrarDetallesUsuarios = () => {
    const usuarios = obtenerUsuarios();
    const tablaDetallesUsuarios = document.getElementById('tablaDetallesUsuarios');
    tablaDetallesUsuarios.innerHTML = usuarios.map((usuario, indice) => `
      <tr>
        <th scope="row">${indice + 1}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.email}</td>
        <td>${usuario.telefono}</td>
        <td>${usuario.direccion}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.usuario}</td>
        <td>${usuario.contrasena}</td>
      </tr>
    `).join('');
  };
  
  // Cargar los detalles de los usuarios al iniciar la página
  window.addEventListener('load', mostrarDetallesUsuarios);