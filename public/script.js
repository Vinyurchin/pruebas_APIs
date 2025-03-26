const form = document.getElementById('userForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const data = {
    username: form.username.value,
    email: form.email.value,
    password: form.password.value,
  };

  try {
    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      responseMessage.textContent = 'Usuario registrado con éxito: ' + result.username;
      responseMessage.style.color = 'green';
      form.reset();
    } else {
      responseMessage.textContent = 'Error al registrar el usuario.';
      responseMessage.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    responseMessage.textContent = 'Error al conectar con el servidor.';
    responseMessage.style.color = 'red';
  }
});