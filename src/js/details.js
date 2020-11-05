(async function () {
    const detailsId = param.get('id');
    let details = await apiLink(`https://trainers-api.herokuapp.com/api/v1/classes/${detailsId}`);
    let trainer = await apiLink(`https://trainers-api.herokuapp.com/api/v1/trainers/${details.trainer.id}`)
    // let trainers = await apiLink(`https://trainers-api.herokuapp.com/api/v1/trainers`);

    // console.log(trainers)
    console.log(details)

    document.querySelector('.details__title').innerText = details.className;
    document.querySelector('.details__top').style.backgroundImage = `url(${details.asset.url})`
    document.querySelector('.details__day').innerText = details.classDay;
    document.querySelector('.details__time').innerText = details.classTime;
    document.querySelector('.details__info').innerText = details.classDescription;
    document.querySelector('.details__trainer-img').src = trainer.asset.url
    document.querySelector('.details__trainer-text').innerText = trainer.trainerName




    // console.log(trainers)


})()