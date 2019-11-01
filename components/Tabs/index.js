// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// axios
//   .get("https://lambda-times-backend.herokuapp.com/topics")
//   .then(response => {
//     console.log(response);
//   });

//we are iterating, use .forEach
// structure is response.data.topics, there are 5 objects in the data array

const parentTopicEl = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(item => {
      const newTopic = createTab(item);
      parentTopicEl.appendChild(newTopic);
    });
  });

//tab component below

function createTab(topic) {
  const newTab = document.createElement("div");
  newTab.classList.add("tab");
  newTab.textContent = topic;

  return newTab;
}
