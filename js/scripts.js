console.log('Hello from js/scripts.js!');

const customName1 = document.getElementById("customname1");
const customName2 = document.getElementById("customname2");
    const randomize = document.querySelector(".randomize");
    const story = document.querySelector(".story");

    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
    }

    let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk under the high heat. When Bob and Mary got to :inserty:, they stared in horror for a few moments, then :insertz:. They were exhausted, but was surprised with the whole scenery — :insertx: weighs 300 pounds, and it was a hot day."

    let insertX = ["Willy Wolka","Micky Mouse","The president"];
    let insertY = ["the chocolate factory","Disneyland","the White House"];
    let insertZ = ["the chocolate fireworks start exploding","melted into a puddle on the sidewalk","all the nut crackers were walking away"];
    randomize.addEventListener('click', result);

    function result(){
        let newStory = storyText;
        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(/:insertx:/g, xItem);
        newStory = newStory.replace(/:inserty:/g, yItem);
        newStory = newStory.replace(/:insertz:/g, zItem);


        if (customName1.value !== ""){
            const name = customName1.value;
            newStory = newStory.replace("Bob", name);
        }

        if (customName2.value !== ""){
            const name = customName2.value;
            newStory = newStory.replace("Mary", name);
        }

        if (document.getElementById("uk").checked){
            const weight = Math.round(300 / 14) + " stones";
            const temperature = Math.round((94 - 32) * 5 / 9) + " celcius";
            newStory = newStory.replace(94, temperature);
            newStory = newStory.replace(300, weight);

        }

        story.textContent = newStory;
        story.style.visibility = "visible";

    }
