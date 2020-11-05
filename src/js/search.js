const searchBar = document.getElementById('search');


const searchClasses = async searchText => {
    let data = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes')
    console.log(data)

    let matches = data.filter(classes => {
        const regex = new RegExp(`^${searchText}`, "gi")
        return classes.className.match(regex)
        //console.log(classes)
    })
    console.log(matches)

}

searchBar.addEventListener('input', () => searchClasses(searchBar.value));


(async function () {
    const search = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes')

    console.log(search)
    let trainers = await apiLink('https://trainers-api.herokuapp.com/api/v1/trainers')

    // const searchBar = document.getElementById('search');
    // console.log(searchBar)
    // searchBar.addEventListener('keyup', (e) => {
    //     const searchString = e.target.value;
    //     console.log(searchString)

    //     const filteredSearch = search.filter(element => {

    //         return (
    //             element.className.toLowerCase().includes(searchString) || element.classDay.toLowerCase().includes(searchString)
    //         )
    //         // if (searchString) {

    //         //     return element.className.toLowerCase().includes(searchString)

    //         // } else {
    //         //     document.querySelector('.search__message').innerText = "Your search did not give any results. Try to search for something else."
    //         //     console.log(document.querySelector('.search__message'))
    //         // }

    //     });
    //     console.log(filteredSearch);

    // })

    // console.log(param.get('/search'))
    // console.log(trainers)


    // search.forEach(element => {

    //     const searchTemplate = document.querySelector(".search__template")
    //     const searchContainer = document.querySelector(".search__mid-container");
    //     const clone = searchTemplate.content.cloneNode(true);

    //     clone.querySelector('.search__img').src = element.asset.url;
    //     clone.querySelector('.search__mid-title').innerText = element.className;



    //     searchContainer.appendChild(clone)

    // });

    trainers.forEach(element => {
        //console.log(element)
        const trainerTemplate = document.querySelector(".trainers__template")
        const trainerContainer = document.querySelector(".search__trainer-container");
        const trainerClone = trainerTemplate.content.cloneNode(true);

        trainerClone.querySelector('.search__img-small').src = element.asset.url
        trainerClone.querySelector('.search__name').innerText = element.trainerName

        trainerContainer.appendChild(trainerClone)


    });
})()
