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
//articles is itself an object

//i think we'll be doing something like this? response.data.articles.bootstrap, as an example. Bootstrap is an array with 3 articles, each article object has a headline, authorPhoto and authorName

//should have a total of 15 articles

//i think we want to do Object.entries. so first we'd do const articleEntries = Object.entries(articles); and then we can do articleEntries.forEach

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
