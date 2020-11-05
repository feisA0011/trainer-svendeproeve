(async function () {
    const data = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes/4');

    const list = await apiLink("https://trainers-api.herokuapp.com/api/v1/classes")
    //console.log(list)

    document.querySelector('.home__title').innerText = data.className;
    document.querySelector('.home__top').style.backgroundImage = `url(${data.asset.url})`

    list.forEach(element => {
        console.log(element)
        const homeTemplate = document.querySelector(".home__template")
        const container = document.querySelector(".home__btm");
        const clone = homeTemplate.content.cloneNode(true);

        clone.querySelector(".home__class-name").innerText = element.className;
        clone.querySelector(".home__class-img").src = element.asset.url
        clone.querySelector(".home__details-link").href = `/details?id=${element.id}`

        container.appendChild(clone)
    });


})()