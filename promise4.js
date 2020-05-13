async function getUsers() {
  const res = await fetch('https://api.github.com/users');
  const data = await res.json();

  let users = '';

  data.forEach((user) => {
    users += `<li>Id: ${user.id} User: <img src="${user.avatar_url}" width="100px" height="100px"></li>`;
  });

  console.log(data);
  document.body.innerHTML = users;
}

getUsers();
