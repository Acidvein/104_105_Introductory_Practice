var reiGalleryData = {
    profile: {name: "Seregin Konstantin", profession: "Student", age: 18},
    imageCards: [
        {id: 0, title: "Обычная Реечка", about: "Реечка снятая в есстественной среде обитания", filename: "Reechka-1",
            likes: 999, tags: ["Rei", "Blue", "Classic"]},
        {id: 1, title: "Реечка с пистолетом", about: "Реечка с пистолетом снятая в есстественной среде обитания",
            filename: "Reechka-2", likes: 37, tags: ["Rei", "Weapon", "Danger"]},
        {id: 2, title: "Майнкрафт Реечка", about: "Майнкрафт Реечка снятая в есстественной среде обитания",
            filename: "Reechka-3", likes: 101, tags: ["Rei", "Minecraft", "Danger"]},
        {id: 3, title: "Реечка застрявшая в деревьях", about: "Застрявшая в деревьях Реечка снятая в лесу",
            filename: "Reechka-4", likes: 370, tags: ["Rei", "Tree"]}
    ],
    preferences: new Map([["theme", "dark"], ["language", "ru"]])
};


const galleryContainer = document.querySelector(".rei-gallery");

reiGalleryData.imageCards.forEach((image) => {
    const card = document.createElement("div");
    card.classList.add("rei-card");
    const title = document.createElement("h3");
    title.textContent = image.title;
    const about = document.createElement("p");
    about.textContent = image.about;
    const img = document.createElement("img");
    img.classList.add("rei-image");
    img.src = `img/${image.filename}.jpg`;
    img.alt = image.title;
    card.append(title);
    card.append(img);
    card.append(about);
    galleryContainer.append(card);

});
