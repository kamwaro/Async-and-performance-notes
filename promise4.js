async function getUsers() {
  const res = await fetch('https://api.github.com/users');
  const data = await res.json();

  console.log(data);

  let users = '';

  data.forEach(
    (user) =>
      (users += `<div class="user">Name:${user.login}<img src=${user.avatar_url} width="100px" height="100px"></img></div>`)
  );

  document.body.innerHTML = users;
}

getUsers();
