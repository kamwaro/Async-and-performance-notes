async function getUsers() {
  const res = await fetch('https://api.github.com/users');
  const data = await res.json();

  let all = '';

  console.log(data);

  data.forEach(
    (users) =>
      (all += `<li>Name: ${users.login} <img src=${users.avatar_url}> </img></li>`)
  );

  document.body.innerHTML = all;
}

getUsers();
