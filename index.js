// Sidebar Topics
const topics = [
    "HTML Basics",
    "CSS Flexbox",
    "JavaScript Loop",
    "DOM Manipulation",
    "Responsive Design",
    "Animation",
    "Intersection Observer",
    "API Fetch",
    "Bootstrap",
    "Tailwind",
    "Performance Optimization",
    "Performance Optimization"
];

const classnameTopics = [
    "HTML-Basics",
    "CSS-Flexbox",
    "JavaScript-Loop",
    "DOM-Manipulation",
    "Responsive-Design",
    "Animation",
    "Intersection-Observer",
    "API-Fetch",
    "Bootstrap",
    "Tailwind",
    "Performance-Optimization",
    "Performance-Optimization"
];

const topicsList = document.getElementById("topicsList");

topics.forEach(text => {
    const li = document.createElement("li");
    li.className = "topics cursor-pointer";
    li.textContent = text;
    topicsList.appendChild(li);
});

// Newest Topics
const Ntopics = [
    "Folder Structure",
    "Route",
    "Components",
    "Parameter"
];

const newTopics = document.getElementById('newtopics');

Ntopics.forEach(ntext => {
    const li = document.createElement('li');
    li.className = "new-topics-text cursor-pointer";
    li.textContent = ntext;
    newTopics.appendChild(li);
});

// Topic Boxes with Dates
const topicsBoxesContainer = document.getElementById('topics-boxes-container-center');

const topicsBoxesContainerDate = [
    "01/01/26", "01/02/26", "01/03/26", "01/04/26", "01/05/26",
    "01/06/26", "01/07/26", "01/08/26", "01/09/26", "01/10/26",
    "01/10/26", "01/11/26",
];

const gradients = [
    "linear-gradient(to right, rgb(140, 82, 255), rgb(92, 225, 230))",
    "linear-gradient(135deg, rgb(0, 74, 173), rgb(203, 108, 230))",
    "linear-gradient(135deg, rgb(255, 102, 196), rgb(255, 222, 89))",
    "linear-gradient(135deg, rgb(255, 247, 173), rgb(255, 169, 249))",
    "linear-gradient(135deg, rgb(0, 74, 173), rgb(203, 108, 230))",
    "linear-gradient(135deg, rgb(93, 224, 230), rgb(0, 74, 173))",
    "linear-gradient(to right, rgb(12, 192, 223), rgb(255, 222, 89))",
    "linear-gradient(to right, rgb(255, 222, 89), rgb(255, 145, 77))",
    "#506ff9",
    "linear-gradient(to right, rgb(0, 0, 0), rgb(53, 51, 205))",
    "linear-gradient(to right, rgb(140, 82, 255), rgb(92, 225, 230))",
    "linear-gradient(135deg, rgb(0, 74, 173), rgb(203, 108, 230))"
];

// POPUP ELEMENTS
const showBox = document.getElementById("abosulte-box");
const title = document.getElementById("boxes-container-pop-up-title");
const exitBtn = document.getElementById("boxes-container-pop-up-exit");
const body = document.getElementById("body");
const whatIsTitle = document.getElementById("whatIsTitle");

topics.forEach((boxesText, index) => {

    const boxDiv = document.createElement("div");
    boxDiv.className = "topics-boxes-container cursor-pointer " + classnameTopics[index];
    boxDiv.style.background = gradients[index];

    boxDiv.onclick = function () {
        showBox.style.display = "flex";
        title.textContent = topics[index];
        body.style.overflow = "hidden";
        whatIsTitle.textContent = topics[index];
    };

    const textDiv = document.createElement("div");
    textDiv.className = "topics-boxes-text";
    textDiv.textContent = boxesText;
    boxDiv.appendChild(textDiv);

    const dateDiv = document.createElement("div");
    dateDiv.className = "topics-boxes-date";
    dateDiv.textContent = topicsBoxesContainerDate[index] || "";
    boxDiv.appendChild(dateDiv);

    topicsBoxesContainer.appendChild(boxDiv);
});

// CLOSE POPUP
exitBtn.onclick = function () {
    showBox.style.display = "none";
    body.style.overflow = "";
};

