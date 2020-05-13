const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((values) => console.log(values));
