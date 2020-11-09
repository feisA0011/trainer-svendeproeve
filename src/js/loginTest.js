const testForm = document.querySelector('.test')
const testName = document.querySelector('.test__name');
const testPass = document.querySelector('.test__password');
const message = document.querySelector('.message');
let myToken;


























// testForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     function userInfo(thisName, thisPassword) {

//         // fetch("https://trainers-api.herokuapp.com/api/v1/users/1", {
//         //     "method": "GET",
//         //     "headers": {
//         //         "Content-Type": "application/x-www-form-urlencoded",
//         //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InVzZXIxIiwicGFzc3dvcmQiOiIkMmEkMTUkNUNCd3lhQ21xblVLODUxWFlYaThLLmY4RUFkanFraUQuN2h4RDkzSTRIOGdWR2NBazdhLi4iLCJ1c2VyRmlyc3ROYW1lIjpudWxsLCJ1c2VyTGFzdE5hbWUiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDMtMDhUMTk6MDY6NDIuMzgyWiJ9LCJpYXQiOjE2MDQ4NzM5ODcsImV4cCI6MTYwNDg3NzU4N30.Q2rVPtHJU_fbasJj6psRbS0iUrwOrHFHmEEI6oQ3jk8"
//         //     }
//         // })
//         //     .then(response => response.json())

//         fetch("https://trainers-api.herokuapp.com/auth/token", {
//             "method": "POST",
//             "headers": {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             "body": `username=${testName.value}&password=${testPass.value}`
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 // myToken = data.token
//                 // console.log(data.token)
//                 // if (data.username != thisName) {
//                 //     message.innerHTML = 'Username is incorrect'
//                 // }
//                 // else if (data.password != thisPassword) {
//                 //     message.innerHTML = 'Password is incorrect'
//                 // }
//                 // else if (data.username == thisName || data.password == thisPassword)
//                 //     succss()

//             })
//             .catch(err => console.error(err));
//         // .then(data => {

//         //     console.log(data)
//         //     if (data.username != thisName) {
//         //         message.innerHTML = 'Username is incorrect'
//         //     }
//         //     else if (data.password != thisPassword) {
//         //         message.innerHTML = 'Password is incorrect'
//         //     }
//         //     else if (data.username == thisName || data.password == thisPassword)
//         //         succss()

//         // })
//         // .catch(err => console.error(err));
//     }
//     userInfo(testName.value, testPass.value)


//     function succss() {
//         console.log('success')
//     }
// })

// fetch("https://trainers-api.herokuapp.com/auth/token", {
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     "body": "username=user1&password=1234"
// })
//     .then(response => response.json())
//     .then(data => {
//         myToken = data.token
//         console.log(data.token)

//     })
//     .catch(err => console.error(err));






