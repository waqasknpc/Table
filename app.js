var table = prompt("Which table do you want to write?")
if(isNaN(table)){
    alert("Error: Please write only the number of which you want to write the table")
    reload();
} else{
    console.log("Multiplication Table for " + table + " :");
    document.write("<center><h2>")
    document.write("Multiplication Table for " + table + " :");
    document.write("</h2></center>")
for (var i = 1; i <= 10; i++) {
    console.log( table + " x " + i + " = " + (table * i));
    document.write("<center><b>")
    document.write( table + " x " + i + " = " + (table * i));
    document.write("</center></b>")
}
    document.write("<center><h5>")
    document.write("Also Write Table of " + table + " in Console");
    document.write("</h5></center>")
}
