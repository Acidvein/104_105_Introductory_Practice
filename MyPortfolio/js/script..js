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

// Шаг 2
for (const key of Object.keys(reiGalleryData.profile)) {
    console.log(key)
}
console.log();

// Шаг 3
const bestImages =
    reiGalleryData.imageCards.filter(image => image.likes > 100).map(image => "Карточка: " + image.title);

for (const image of bestImages) {
    console.log(image);
}
console.log();

// Шаг 4
let likesSum = 0;
for (const image of reiGalleryData.imageCards) {
    likesSum += image.likes;
}
console.log(likesSum);
console.log();

// Шаг 5
let allTags = new Set();
for (const image of reiGalleryData.imageCards) {
    for (const tag of image.tags) {
        allTags.add(tag);
    }
}
for (const tag of allTags) {
    console.log(tag)
}
