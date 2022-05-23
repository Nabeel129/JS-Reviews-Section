// Local Reviews Data

const reviews = [{
    id: 1,
    name: "Sara Jones",
    job: "UI/UX Designer",
    img: "./img/0.jpg",
    info: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my"
},
{
    id: 2,
    name: "Anna Johnsan",
    job: "Web Designer",
    img: "./img/1.jpg",
    info: "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The"
}, {
    id: 3,
    name: "Peter Jones",
    job: "Intern",
    img: "./img/2.jpg",
    info: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary"
}, {
    id: 4,
    name: "Bill Anderson",
    job: "The Boss",
    img: "./img/3.jpg",
    info: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens"
}
];

// console.log(reviews[0]);

// Get elements to be replaced

const nameEmp = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const img = document.getElementById('img');


//Get elements that cause event 

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const random = document.getElementById('random');

//Starting Point
let currentItem = 0;

//Getting first item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    nameEmp.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

//next button function 
next.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//Previous button function 
prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = 3;
    }
    showPerson(currentItem);
});

//Previous button function 
random.addEventListener("click", function () {
    currentItem = (Math.floor(Math.random() * 4));
    showPerson(currentItem);
});
