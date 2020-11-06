let loginButton = document.querySelector('.login');
let formName = document.getElementById('form__name');
const form = document.querySelector('.form');
let message = document.querySelector('.error-message');

// loginButton.addEventListener('click', (e) => {

//     form.style.display = "block"

// });


// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if (formName.value == "") {
//         message.textContent = "Please fill in your name!";
//         return false
//     }
// })
// function validate(f) {
//     console.log('sssuskjn')
//     f.preventDefault()
//     if (f.formName.value == "") {
//         message.textContent = "Please fill in your name!";
//         return false
//     }


// }
// // console.log(formName);
// let formPass = document.getElementById('form__password');

// const form = document.querySelector('.form');
// console.log(formPass);


// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(formPass.value)

// });

// (async function () {
//     let data = await apiLink('https://trainers-api.herokuapp.com/v1/api/classes')
//     console.log(data)

// })();


// fetch("https://trainers-api.herokuapp.com/api/v1/users/1", {
//     "method": "GET",
//     "headers": {
//         "": "",
//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkNUNCd3lhQ21xblVLODUxWFlYaThLLmY4RUFkanFraUQuN2h4RDkzSTRIOGdWR2NBazdhLi4iLCJ1c2VyRmlyc3ROYW1lIjpudWxsLCJ1c2VyTGFzdE5hbWUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiJ9LCJpYXQiOjE2MDQ2NTYxMjQsImV4cCI6MTYwNDY1OTcyNH0.Q7iimf3XIXh7cgPjm7ecfbuXxWiJ4cVEjAbiaKKhpjk"
//     }
// })
//     .then(response => console.log(response))
//     .catch(err => console.error(err));




// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then((response) => response.json())
// .then((data) => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });










// const form = document.querySelector('#form')

// const name = document.querySelector('.form__name').value
// const pass = document.querySelector('.form__password')

// fetch("https://trainers-api.herokuapp.com/auth/token", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: "username=user1&password=1234"
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         d
//     })

// // form.addEventListener('submit', (e) => {
// //     e.preventDefault()
// //     console.log(e)

// //     fetch("https://trainers-api.herokuapp.com/auth/token", {
// //         "method": "POST",
// //         "headers": {
// //             "Content-Type": "application/x-www-form-urlencoded"
// //         },
// //         "body": `username=${name.value}&password=${pass.value}`
// //     })
// //         .then(response => response.json())
// //         .then(data => {
// //             console.log(data)
// //             // if (data.token !== undefined) {
// //             //     sessionStorage.setItem('token', data.token)
// //             // }
// //         })
// //         .catch(err => console.error(err));
// // })

// // (async function () {

// //     // let users = await apiLink(`https://trainers-api.herokuapp.com/api/v1/users1`, {
// //     //     "method": "GET",
// //     //     "headers": {
// //     //         "": "",
// //     //         "Authorization": "Bearer 
// //     //     })

// // })()

