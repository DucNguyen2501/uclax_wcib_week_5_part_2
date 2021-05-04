console.log('Hello from js/scripts.js!');

const customName1 = document.getElementById('customname1');
const customName2 = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const randomImage = document.querySelector('.randomImage');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk under the high heat. When Bob and Mary got to :inserty:, they stared in horror for a few moments, then :insertz:. Both Bob and Mary were exhausted, but was surprised with the whole scenery — :insertx: weighs 300 pounds, and it was a hot day.';
let insertx = ['Willy Wolka','Micky Mouse','The president'];
let inserty = ['the chocolate factory','Disneyland','the White House'];
let insertz = ['the chocolate fireworks start exploding','melted into a puddle on the sidewalk','all the nut crackers were walking away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:",xItem);
  newStory = newStory.replace(":inserty:",yItem);
  newStory = newStory.replace(":insertz:",zItem);

  if(customName1.value !== '') {
    const name = customName1.value;
    newStory = newStory.replace("Bob",name);
  }

  if(customName2.value !== '') {
    const name = customName2.value;
    newStory = newStory.replace("Mary",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286)+" stone";
    const temperature =  Math.round((94-32) * 5 / 9)+"centigrade";
    newStory = newStory.replace("94 fahrenheit",temperature);
    newStory = newStory.replace("300 pounds",weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
