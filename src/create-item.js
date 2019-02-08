const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    //pull input and create a const that contains the textContent of input text
    const name = form.elements.name.value;
    const category = form.elements.category.value;

    const singleItem = {
        name: name,
        category: category
    };

    let allItems = [];

    const jsonString = window.localStorage.getItem('allItems');
    if(jsonString) {
        allItems = JSON.parse(jsonString);
    } 

    allItems.push(singleItem);

    const serialize = JSON.stringify(allItems);
    window.localStorage.setItem('allItems', serialize);
    
    console.log(allItems);
    window.location = 'inventory.html';
    
});
//declare empty array
// window.localStorage.getItem
// window.localStorage.setItem
// .push singleItem into array