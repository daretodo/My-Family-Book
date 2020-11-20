var reasons=[
    "Darren Mathew",
    "Aiden Mathew",
    "Beena Mathew",
    "Bijoy Mathew",
    "Maria Studden",
    ];
    var images=[
    "Darren.JPG",
    "Aiden.JPG",
    "Beena.jpg",
    "Bijoy.JPG",
    "Maria.JPG",
    ];
    var i=0;
    function nextslide(){
    document.getElementById("heading2").innerHTML=reasons[i];
    document.getElementById("album").src=images[i];
    i++;
    if (i>4){i=0};
    }
    