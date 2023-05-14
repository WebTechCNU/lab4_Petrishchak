let arr = [
  
    {
        name: "cat 2",
        link: "media/image1.jpg",
        description: "this is description",
        category: 1
    },
    {
        name: "cat 3",
        link: "media/image2.jpg",
        description: "this is description",
        category: 1
    },
    {
        name: "cat 5",
        link: "media/image3.jpg",
        description: "this is description",
        category: 2
    },
    {
        name: "cat 5",
        link: "media/image4.jpg",
        description: "this is description",
        category: 3/1
    },
    {
        name: "cat 5",
        link: "media/image5.jpg",
        description: "this is description",
        category: 3
    },
    {
        name: "cat 5",
        link: "media/image6.jpg",
        description: "this is description",
        category: 2/1
    },
    {
        name: "cat 5",
        link: "media/image7.jpg",
        description: "this is description",
        category: 1
    },
    {
        name: "cat 5",
        link: "media/image8.jpg",
        description: "this is description",
        category: 2
    },
    {
        name: "cat 5",
        link: "media/image10.jpg",
        description: "this is description",
        category: 3
    }];

    let barColors = [
        "rgba(0,0,255,0.5)",
        "rgba(255,0,255,0.5)",
        "rgba(255,0,0,0.5)",
        "rgba(0,255,255,0.5)",
        "rgba(0,255,0,0.5)",
        "rgba(125,125,255,0.5)",
        "rgba(255,0,125,0.5)",
        "rgba(0,125,255,0.5)",
        "rgba(125,255,125,0.5)"
    ];

let cookie = "user subscribed";

function getElements(category) {
    let cont = document.querySelector("#container");
    let out = "<div class='row'>";
    let i = 0;
    arr.forEach(elem => {
        if (category == null || elem.category == category) {
            out += "<div class='col-sm-4'><img class='img-fluid' src=" + elem.link + " alt=" + elem.name + " ><p>" + elem.description + "</p></div>"
            i++;
        }
        if (i % 3 == 0) {
            out += "</div><div class='row'>";
        }
    });
    out += "</div>";
    cont.innerHTML = out;
}

let modal = document.getElementById("myModal");
let closeBtn = document.querySelector("#closeBtn");

function close() {
    modal.style.display = "none";
}

setTimeout(() => {
    if (document.cat != cat) {
        modal.style.display = "block";

    }
}, 3000)

let closeTime = 5;

setInterval(() => {
    if (modal.style.display == "block" && closeTime > 0) {
        closeTime -= 1;
        closeBtn.innerHTML = closeTime + " seconds";
    } else if(closeTime <= 0){
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", close);
    }
}, 1000)


function subscribe() {
    document.cat = cat;
    close();
}



new Chart("myChart", {
    type: "pie",
    data: {
        labels: arr.map(e => e.name),
        datasets: [{
            backgroundColor: barColors,
            data: arr.map(e => e.category)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Cats"
        }
    }
});