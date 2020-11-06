const param = new URLSearchParams(window.location.search);
console.log(param)


let getToken;



function token() {
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
                sessionStorage.setItem(key, getToken)

                // fetch('https://trainers-api.herokuapp.com/v1/api/users/1', {
                //     method: "GET",
                //     headers: {
                //         "": "",
                //         "Authorization": "Bearer " + getToken
                //     })

<<<<<<< HEAD



=======
                // })
            
                "Authorization": "Bearer " + getToken
>>>>>>> bc6c9d22ac6df29649842bf3086489866d2f6abf
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
        // headers: {
        //     'Authorization': 'Bearer ' + getToken
        // }

    })
        .then(retrieve => retrieve.json())
}



fetch('https://trainers-api.herokuapp.com/api/v1/classes/2/ratings', {
    'method': 'GET'
})
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element)


            let list = ['one', 'two', 'three', 'four', 'five'];

            list.forEach(function (elem) {
                document.getElementById(elem).addEventListener("click", function () {
                    let cls = document.getElementById(elem).className;

                    if (cls.includes("unchecked")) {
                        document.getElementById(elem).classList.remove("unchecked");
                        document.getElementById(elem).classList.add("checked");
                    }
                    else {

                        document.getElementById(cls).disabled = true;

                        // document.getElementById(element).classList.remove("checked"); document.getElementById(element).classList.add("unchecked");
                    }
                });
            });
        })
    })
    .catch(err => console.error(err));


<<<<<<< HEAD
=======
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
>>>>>>> bc6c9d22ac6df29649842bf3086489866d2f6abf
