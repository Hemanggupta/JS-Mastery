// changing inner text

const heading = document.querySelector('.logo');
const links = document.querySelectorAll('.nav-item a');
const google = links[0].getAttribute('href').slice(1);

//adding new attribute into link to open them in new tab
const newTab = document.createAttribute('target')
newTab.value = "_blank"

//innerHTML
const headline = document.querySelector('.headline');

console.log(heading.textContent)
heading.innerText = "Lets Do";
console.log(heading.textContent);

//changing style
heading.style.color = "lightblue";
heading.style.fontSize = "3rem";
heading.style.fontFamily = "san-sherrif";
heading.style.paddingTop = "1rem";

console.log(links);
links.forEach(link => {
  console.log(link.innerText)
  link.style.color = "lightgreen";
  link.style.textDecoration = "underline";
});

//adding new tab attribute into DOM
links[0].setAttributeNode(newTab);
links[0].setAttribute('href', 'https:/google.com');
console.log(google);

//innerHTML
headline.innerHTML = "<h2>Let's Manage Your Tasks</h2>";
headline.innerHTML += "<button class=\"btn btn-headline\">Lets Do It</button>";
console.log(headline.innerHTML);