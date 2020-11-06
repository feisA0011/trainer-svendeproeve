
document.onload = function () {
    let navTitle = document.querySelector('nav__title')
}
const searchBar = document.getElementById('search');


const searchClasses = async searchText => {

    let data = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes')

    //console.log(data)

    let matches = data.filter(classes => {
        const regex = new RegExp(`^${searchText}`, "gi")

        return (
            classes.className.match(regex) ||
            classes.classDescription.match(regex) || classes.classDay.match(regex) || classes.trainer.trainerName.match(regex)

        )
        //console.log(classes)
    })
    if (searchText.length === 0) {
        matches = [];
    }
    if (searchText.length === 0) {
        // document.querySelector(".search__mid-container").style.display =
        // 'none'

    } else {
        // document.querySelector(".search__mid-container").style.display = 'block'
        // document.querySelector(".search__mid-container").style.display = 'flex'
    }
    outputClasses(matches)

};
const outputClasses = matches => {
    if (matches.length > 0) {

        matches.forEach(element => {
            //console.log(element)
            const searchTemplate = document.querySelector(".search__template")
            const searchContainer = document.querySelector(".search__mid-container");
            const clone = searchTemplate.content.cloneNode(true);

            clone.querySelector('.search__img').src = element.asset.url;
            clone.querySelector('.search__mid-title').innerText = element.className;



            searchContainer.appendChild(clone)
        })




    }

}

searchBar.addEventListener('input', () => searchClasses(searchBar.value));


(async function () {
    const search = await apiLink('https://trainers-api.herokuapp.com/api/v1/classes')

    //console.log(search)
    let trainers = await apiLink('https://trainers-api.herokuapp.com/api/v1/trainers')

    const searchBar = document.getElementById('search');
    console.log(searchBar)


    const displayClasses = () => {
        search.forEach(element => {

            const searchTemplate = document.querySelector(".search__template")
            const searchContainer = document.querySelector(".search__mid-container");
            const clone = searchTemplate.content.cloneNode(true);

            clone.querySelector('.search__img').src = element.asset.url;
            clone.querySelector('.search__mid-title').innerText = element.className;



            searchContainer.appendChild(clone)

        });
    }


    displayClasses()

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
