//
fetch('adressbok-1.json')
// Hämtar in json-data.
.then(res => res.json())
// sorterar datan.
.then(data => data.sort( (a, b) => a.age - b.age))
.then(data =>  {
    console.log(data)

    // skapar x variabel och tilldelar det information om finns i data.
    var x ="";
    // Loopar json datan.
    for (i in data) {
        x += 
        `<ul>
        <li>${data[i].firstname + " " + data[i].lastname}</li>
        <li>${data[i].age}</li>    
        <li>${data[i].email}</li>
        <li>${data[i].phone}</li>
        </ul>`;
      }
      // Ändrar innehållet till information som finns på x variabeln.
    document.getElementById("message").innerHTML = x;
})