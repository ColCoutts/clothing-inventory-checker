// pull allItems from localstorage
//parse said storage in if statment
// if we need a vairable of null

const jsonString = window.localStorage.getItem('allItems');

let allItems = [];
let populateItem = null;

if(jsonString) {
    allItems = JSON.parse(jsonString);
    // populateItem = allItems[allItems.length - 1];
}

const searchParams = new URLSearchParams(window.location.search);
const itemToFind = searchParams.get('name');

for(let i = 0; i < allItems.length; i++) {
    let currentItem = allItems[i];
    if(currentItem.name === itemToFind) {
        populateItem = currentItem;
        break;
    } 
}

//text.content = something.value
const name = document.getElementById('name');
const category = document.getElementById('category');

name.textContent = populateItem.name;
category.textContent = populateItem.category;


