// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     console.log(response);
//   });

//response.data.articles  within here, we have 5 arrays filled with objects. Each array corresponds with a topic.
//articles is itself an object. we've got bootstrap, javascript, jquery, node, technology as arrays with arrays inside

//i think we'll be doing something like this? response.data.articles.bootstrap, as an example. Bootstrap is an array with 3 articles, each article object has a headline, authorPhoto and authorName

//should have a total of 15 articles

//i think we want to do Object.entries. so first we'd do const articleEntries = Object.entries(articles); and then we can do articleEntries.forEach

//Below is deconstructing the Article Object using Object.entries and then applying the .forEach method on its values, which happen to be the arrays that were matched with topic keys.

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    for (let [key, value] of Object.entries(response.data.articles)) {
      value.forEach(item => {
        const newArticleCard = createCard(
          item.headline,
          item.authorPhoto,
          item.authorName
        );
        cardContainer.appendChild(newArticleCard);
      });
    }
  });

//Below is one example that works, but I specifically pulled out each topic section within the Article Object and then applied the .forEach method to each topic array.

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then(response => {
//     //use object.entries to const a new array
//     // const topicsArray = Object.values(response.data.articles);
//     // console.log(topicsArray);
//     const bootstrapArray = response.data.articles.bootstrap;
//     // console.log(bootstrapArray);

//     const javascriptArray = response.data.articles.javascript;
//     // console.log(javascriptArray);

//     const jqueryArray = response.data.articles.jquery;
//     // console.log(jqueryArray);

//     const nodeArray = response.data.articles.node;
//     // console.log(nodeArray);

//     const technologyArray = response.data.articles.technology;
//     // console.log(technologyArray);

//     bootstrapArray.forEach(item => {
//       const newArticleCard = createCard(
//         item.headline,
//         item.authorPhoto,
//         item.authorName
//       );
//       cardContainer.appendChild(newArticleCard);
//     });

//     javascriptArray.forEach(item => {
//       const newArticleCard = createCard(
//         item.headline,
//         item.authorPhoto,
//         item.authorName
//       );
//       cardContainer.appendChild(newArticleCard);
//     });

//     jqueryArray.forEach(item => {
//       const newArticleCard = createCard(
//         item.headline,
//         item.authorPhoto,
//         item.authorName
//       );
//       cardContainer.appendChild(newArticleCard);
//     });

//     nodeArray.forEach(item => {
//       const newArticleCard = createCard(
//         item.headline,
//         item.authorPhoto,
//         item.authorName
//       );
//       cardContainer.appendChild(newArticleCard);
//     });

//     technologyArray.forEach(item => {
//       const newArticleCard = createCard(
//         item.headline,
//         item.authorPhoto,
//         item.authorName
//       );
//       cardContainer.appendChild(newArticleCard);
//     });
//   });

// topicsArray.map(item => {
//   const newArticleCard = createCard(
//     item.headline,
//     item.authorPhoto,
//     item.authorName
//   );
//   cardContainer.appendChild(newArticleCard);
// });
//   });

// createCard function

function createCard(headline, authorPhoto, authorName) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const cardHeadline = document.createElement("div");
  cardHeadline.textContent = headline;
  newCard.appendChild(cardHeadline);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("author");
  newCard.appendChild(cardAuthor);

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList.add("img-container");
  cardAuthor.appendChild(cardImgDiv);

  const authorImg = document.createElement("img");
  authorImg.src = authorPhoto;
  cardImgDiv.appendChild(authorImg);

  const cardAuthorName = document.createElement("span");
  cardAuthorName.textContent = authorName;
  cardAuthor.appendChild(cardAuthorName);

  return newCard;
}
