const param = new URLSearchParams(window.location.search);
console.log(param)

let getToken;



async function token() {
    if (getToken = true) {
        return fetch("https://trainers-api.herokuapp.com/auth/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "username=user1&password=1234"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                getToken = data.token
                let key = 'token'
                sessionStorage.setItem(key, token)

                //     fetch('https://trainers-api.herokuapp.com/v1/api/users/1', {
                //         "method": "GET",
                //         "headers": {
                //             "": "",
                //             "Authorization": "Bearer token"
                //         }
                //     })
                //         .then(res => console.log(res))
                //         .then(error => console.log(error))

                // })
            })

    }
}



async function apiLink(url) {
    data = await pageData(url);
    getToken = await token()

    return data;
}

function pageData(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + getToken
        }

    })
        .then(retrieve => retrieve.json())
}



document.addEventListener('DOMContentLoaded', () => {
    //document.querySelector('.nav__back').style.display = 'none'
})

// token()

// async function getData(url) {
//     fetch(url, {

//         "method": "GET"
//     })
//         .then(response => response.json())

// }
// // getData()

// async function apiLink(url) {
//     data = await getData(url)
//     return (data)
// }

// (async function () {
//     const data = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes');
//     console.log(data)

// })()

// async function getData(api) {
//     await token();
//     let data = await myFetch.get(api)
//     if (!data.error) {
//         return data
//     }
//     else {
//         get_token = true;
//         await token(api)
//         data = await myFetch.get(api);
//         return data;
//     }
// }
// getData()
// fetch("https://trainers-api.herokuapp.com/api/v1/classes/1", {
//     "method": "GET",

// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));