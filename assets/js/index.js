document.getElementById('form-book').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value.trim();
    let author = document.getElementById('author').value.trim();
    let price = document.getElementById('price').value.trim();
    let description = document.getElementById('description').value.trim();

    if (title && author && price && description) {
        addBookToTable(title, author, price, description);

        // Clear the form inputs
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('price').value = '';
        document.getElementById('description').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

function addBookToTable(title, author, price, description) {
    const table = document.getElementsByClassName('table-book')[0].getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const titleData = newRow.insertCell(0);
    const authorData = newRow.insertCell(1);
    const priceData = newRow.insertCell(2);
    const descriptionData = newRow.insertCell(3);

    titleData.textContent = title;
    authorData.textContent = author;
    priceData.textContent = price;
    descriptionData.textContent = description;
}

function removeBook() {
    var removeBook = document.getElementsByClassName('table-book')[0].getElementsByTagName('tbody')[0];

    if(removeBook.lastChild){
        removeBook.removeChild(removeBook.lastChild);
    } else {
        alert("No books to remove.");
    }
}

function clearSearchHighlights() {
    const bookListItems = document.getElementsByClassName('table-book')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    Array.from(bookListItems).forEach(item => {
        item.style.backgroundColor = ''; // Reset to default background color
    });
}

function highlight() {
    clearSearchHighlights();
    const searchText = document.getElementById('searched').value.toLowerCase();
    const table = document.getElementsByClassName('table-book')[0].getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    Array.from(rows).forEach(row => {
        const cells = row.getElementsByTagName('td');
        const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchText));

        if (match) {
            row.style.backgroundColor = 'yellow'; // Highlight matching rows
        }
    });
}
