document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('users');
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        users.forEach(user => {
          const card = document.createElement('div');
          card.classList.add('user-card');
          card.innerHTML = `
            <h2>Ismi: ${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Manzil:</strong> ${user.address.street}</p>
            <p><strong>Email:</strong> ${user.email}</p>
          `;
          userList.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching users:', error));
  });
  
  