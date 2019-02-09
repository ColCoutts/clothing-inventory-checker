const jsonString = window.localStorage.getItem('allItems');

let allItems = [];

if(jsonString) {
    allItems = JSON.parse(jsonString);
}

const tbody = document.getElementById('all-items');
//array use
function populateTable(array) {
    for(let i = 0; i < array.length; i++) {
        const currentItem = array[i];
        const tr = document.createElement('tr');
        
        const nameCell = document.createElement('td');
        const a = document.createElement('a');
        a.href = 'item-detail.html?name=' + encodeURIComponent(currentItem.name);
        a.textContent = currentItem.name;
        nameCell.appendChild(a);
        
        tr.appendChild(nameCell);
        
        const categoryCell = document.createElement('td');
        categoryCell.textContent = currentItem.category;
        tr.appendChild(categoryCell);
        
        const quantityCell = document.createElement('td');
        quantityCell.textContent = currentItem.quantity;
        tr.appendChild(quantityCell);
        
        tbody.appendChild(tr);
    }
}

const form = document.getElementById('form');
const categorySort = document.getElementById('category-sort');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const category = categorySort.value;
    let matchingItems = [];
    
    for(let i = 0; i < allItems.length; i++){
        let currentItem = allItems[i];

        if(currentItem.category === category){
            matchingItems.push(currentItem);
        } 
    } while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
    populateTable(matchingItems);
});

populateTable(allItems);

