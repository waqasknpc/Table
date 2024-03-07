var table = prompt("Which table do you want to write?")
if(isNaN(table)){
    alert("Error: Please write only the number of which you want to write the table")
    reload();
} else{
    console.log("Multiplication table for " + table + " :");
for (var i = 1; i <= 10; i++) {
    console.log( table + " x " + i + " = " + (table * i));
}
}
