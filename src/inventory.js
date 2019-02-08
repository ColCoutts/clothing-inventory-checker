const jsonString = window.localStorage.getItem('allItems');

let allItems = [];

if(jsonString) {
    allItems = JSON.parse(jsonString);
}

const tbody = document.getElementById('all-items');

for(let i = 0; i < allItems.length; i++) {
    const currentItem = allItems[i];
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

    tbody.appendChild(tr);
}

