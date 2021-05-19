var buttonPrev = document.querySelector(".previous");
var buttonNext = document.querySelector(".next");

var counter = 0;

let people = [{
        "name": "Maria Hristova",
        "job": "Web Developer",
        "description": "Designs and builds websites for corporate or individual clients. Works with colleagues and clients to understand website requirements and client needs. Writes, tests, and debugs code and applications. Maintains knowledge of programming languages and monitors website analytics.",
        "icon": "png/avatar-1.png"
    },
    {
        "name": "John Smith",
        "job": "Senior Developer",
        "description": "The responsibilities of senior developers include writing code, analyzing data, and contributing to the design and implementation of software. ... Ultimately, a top-notch senior developer should have extensive experience in software development, be able to keep up-to-date with deadlines, and have strong analytical skills.",
        "icon": "png/avatar-5.png"
    },
    {
        "name": "Ewan Devin",
        "job": "Accountant",
        "description": "As an accountant you will be responsible for preparing accounts, budgeting and managing financial information. You could also be advising and helping clients, whether that's individuals or international companies, on financial situations.",
        "icon": "png/avatar-6.png"
    }
];


buttonPrev.onclick = () => {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    setDetails();
};

buttonNext.onclick = () => {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    setDetails();
};

function setDetails() {
    document.querySelector(".name").innerHTML = people[counter].name;
    document.querySelector(".jobtitle").innerHTML = people[counter].job;
    document.querySelector(".description").innerHTML = people[counter].description;
    document.querySelector("#personImg").src = people[counter].icon;
}