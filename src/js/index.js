const params = new URLSearchParams(document.location.search);
console.log(params)

let get_token = true;

async function token() {
    if (get_token = true) {
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
                get_token = data.token;

            })

    }
}
async function apiLink(url) {
    data = await pageData(url);
    return data;
}

function pageData(url) {
    return fetch(url, {
        method: 'GET',

    })
        .then(retrieve => retrieve.json())
}
(async function () {
    const data = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes/4');
    const assetImg = await apiLink('https://trainers-api.herokuapp.com/api/v1/assets')
    console.log(assetImg[7])
    // const homeBgImg = document.querySelector('.home__top');
    // console.log(homeBgImg)
    console.log(data)
    let img = document.querySelector('.test')
    console.log(img)
    // document.querySelector('.home__title').textContent = data.className;
    // document.querySelector('.home__top').style.backgroundImage = `url(${data.asset.url})`
    img.src = assetImg[7].url

})()

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