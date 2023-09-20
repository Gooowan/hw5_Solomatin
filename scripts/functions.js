function concatenateString(text, maxLength) {
    if (text.length <= maxLength) {
        return text.toUpperCase(); // If the string is within the maxLength, return it in all caps.
    } else {
        const shortenString = text.substring(0, maxLength);
        const readyString = shortenString.toUpperCase() + "...";
        return readyString;
    }
}

function createTableWithBorders(rowAmount, cellAmount) {
    const table = document.getElementById("myTable");
    table.style.border = "2px solid black"; // Add a border to the table

    // Create rows and cells and attach them to the table
    for (let i = 0; i < rowAmount; i++) {
        const row = table.insertRow(i); // Create a new row
        row.style.border = "1px solid black"; // Add a border to the row

        for (let j = 0; j < cellAmount; j++) {
            const cell = row.insertCell(j); // Create a new cell
            cell.style.border = "1px solid black"; // Add a border to the cell
            cell.innerText = `Row ${i + 1}, Cell ${j + 1}`; // Set inner text for the cell
        }
    }
}

console.log(concatenateString("If look could kill", 8))
//createTableCells(3, 5);

const createTableButton = document.getElementById("createTableButton");
createTableButton.addEventListener("click", function() {
    createTableWithBorders(3, 3);
});