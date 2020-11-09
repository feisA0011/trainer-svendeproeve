const param = new URLSearchParams(window.location.search);
console.log(param)


let getToken;

function token() {
    if (getToken == true) {
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
                sessionStorage.setItem(key, getToken)
            })

    }
}


// function token() {
//     if (getToken = true) {

//         return fetch("https://trainers-api.herokuapp.com/auth/token", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: "username=user1&password=1234"
//         })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 getToken = data.token
//                 let key = 'token'
//                 sessionStorage.setItem(key, getToken)

//                 // fetch('https://trainers-api.herokuapp.com/v1/api/users/1', {
//                 //     method: "GET",
//                 //     headers: {
//                 //         "": "",
//                 //         "Authorization": "Bearer " + getToken
//                 //     })



//             })
//     }



async function apiLink(url) {
    data = await pageData(url);
    getToken = await token()

    return data;
}


function pageData(url) {
    return fetch(url, {
        method: 'GET',
        // headers: {
        //     'Authorization': 'Bearer ' + getToken
        // }

    })
        .then(retrieve => retrieve.json())
}



// fetch('https://trainers-api.herokuapp.com/api/v1/classes/2/ratings', {
//     'method': 'GET'
// })
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(element => {
//             console.log(element)


//             let list = ['one', 'two', 'three', 'four', 'five'];

//             list.forEach(function (elem) {
//                 document.getElementById(elem).addEventListener("click", function () {
//                     let cls = document.getElementById(elem).className;

//                     if (cls.includes("unchecked")) {
//                         document.getElementById(elem).classList.remove("unchecked");
//                         document.getElementById(elem).classList.add("checked");
//                     }
//                     else {

//                         document.getElementById(cls).disabled = true;

//                         // document.getElementById(element).classList.remove("checked"); document.getElementById(element).classList.add("unchecked");
//                     }
//                 });
//             });
//         })
//     })
//     .catch(err => console.error(err));
// }

