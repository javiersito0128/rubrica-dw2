// Función para obtener usuarios del almacenamiento local o usar usuarios predeterminados
const obtenerUsuarios = () => {
    const usuariosAlmacenados = localStorage.getItem('baseDatosUsuarios');
    if (usuariosAlmacenados) {
      return JSON.parse(usuariosAlmacenados);
    } else {
      const usuariosPredeterminados = [
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
      localStorage.setItem('baseDatosUsuarios', JSON.stringify(usuariosPredeterminados));
      return usuariosPredeterminados;
    }
  };
  
  // Función para guardar usuarios en el almacenamiento local
  const guardarUsuarios = (usuarios) => {
    localStorage.setItem('baseDatosUsuarios', JSON.stringify(usuarios));
  };
  
  // Función para actualizar la tabla de usuarios en la interfaz
  const actualizarTablaUsuarios = () => {
    const usuarios = obtenerUsuarios();
    const cuerpoTablaUsuarios = document.getElementById('tablaUsuarios');
    cuerpoTablaUsuarios.innerHTML = usuarios.map((usuario, indice) => `
      <tr>
        <th scope="row">${indice + 1}</th>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.cedula}</td>
      </tr>
    `).join('');
  };
  
  // Manejador de evento para el envío del formulario de registro
  document.getElementById('registroForm').addEventListener('submit', (evento) => {
    evento.preventDefault();
  
    // Obtener datos del formulario
    const nuevoUsuario = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      email: document.getElementById('email').value,
      telefono: document.getElementById('telefono').value,
      direccion: document.getElementById('direccion').value,
      cedula: document.getElementById('cedula').value,
      usuario: document.getElementById('usuario').value,
      contrasena: document.getElementById('contrasena').value
    };
  
    const usuarios = obtenerUsuarios();
  
    // Verificar si la cédula ya está registrada
    if (usuarios.some(usuario => usuario.cedula === nuevoUsuario.cedula)) {
      alert('La cédula ya está registrada.');
      return;
    }
  
    // Agregar nuevo usuario y actualizar almacenamiento
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);
  
    alert('Usuario registrado exitosamente.');
    actualizarTablaUsuarios();
    document.getElementById('registroForm').reset();
  });
  
  // Cargar la tabla de usuarios al iniciar la página
  window.addEventListener('load', actualizarTablaUsuarios);