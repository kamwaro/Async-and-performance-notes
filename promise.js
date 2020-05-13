// let promiseToCleanTheRoom = new Promise((resolve, reject) => {
//   // cleaning

//   let isClean = true;

//   if (isClean) {
//     resolve('Clean');
//   } else {
//     reject('not clean');
//   }
// });

// promiseToCleanTheRoom
//   .then(function(fromResolve) {
//     console.log(`The room is ${fromResolve}`);
//   })
//   .catch(function(fromReject) {
//     console.log(`The room is ${fromReject}`);
//   });

const clickHere = document.querySelector('.btn');

clickHere.addEventListener('click', success, error);

function success() {
  console.log('Successful...');
}

function error() {
  console.log('Error...');
}
