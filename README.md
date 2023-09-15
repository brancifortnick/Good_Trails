
# [Good Trails](https://goodtrailss-aa-11462f77aa53.herokuapp.com/)
GoodTrails is a goodreads.com clone which focuses on locating popular Trails in each state. Whether you're a novice or expert level hiker, GoodTrails is the place for you to keep track of your past adventure(s) and / or upcoming excursion(s).

  * [Features](https://github.com/Run5/GoodTrails/wiki/Features)
  * [Schema](https://github.com/Run5/GoodTrails/wiki/Database-Schema)
  * [Frontend-Routes](https://github.com/Run5/GoodTrails/wiki/Frontend-Routes)
  * [API-Routes](https://github.com/Run5/GoodTrails/wiki/API-Documentation)

### Database Schema
![dbdiagram](https://user-images.githubusercontent.com/65651149/120942110-a2c3e880-c6f4-11eb-9f4b-51467dcd920b.png)

### My Trails
![myTrails page](https://user-images.githubusercontent.com/65651149/120942182-31386a00-c6f5-11eb-9dfa-1c517e86057c.jpg)

### Review and Comment
![GoodTrailsGif](https://user-images.githubusercontent.com/65651149/120942218-6f358e00-c6f5-11eb-8bd6-d3f920c2c1da.gif)

 ### Technologies Used
 * JavaScript
 * Node.js
 * Express.js
 * PostgreSQL (Sequelize ORM)
 * Express.js
 * Pug.js
 * HTML
 * CSS
 * Heroku


 ### Key Features
   * the authenticated user can create a collection of trails they are either interested in, or have previously visited.  
     This is accomplished by selecting state codes which house the trail data for a variety of trails - ranging difficulties.
   * ability to read trail data such as, descriptions, difficulty and location of each trail / Hike.
   * ability to create, edit and delete reviews.

 ### Brief Code Snippet
  * The code below dynamically create review divs
  ```javascript
  function renderReviews(reviews, reviewDisplayContainer) {
    try {
      if (reviews.length === 0) {
        const noReviewText = document.createElement("p")
        noReviewText.innerHTML = "There are no reviews for this trail yet"
        reviewDisplayContainer.appendChild(noReviewText);
      } else {
        // empty the reviewDisplayContainer
        reviewDisplayContainer.innerHTML = "";
        reviews.forEach(review => {
          const newReviewDiv = document.createElement("div");
          newReviewDiv.setAttribute("id", `review-${review.id}-div`);
          newReviewDiv.setAttribute("class", "each-review");
          // fill in review text and author
          const newReviewText = document.createElement("p")
          const newReviewUser = document.createElement("p")
          newReviewText.innerHTML = review.review
          newReviewUser.innerHTML = `-Reviewed by ${review.User.username}`
          newReviewDiv.append(newReviewText, newReviewUser)
          reviewDisplayContainer.append(newReviewDiv)
        })
      }
    } catch (error) {
     console.error(error);
      }
   };
  ```
# Developers:

 **Chase Brashear**
  * https://github.com/run5

 **Geoff Yang**
  * https://github.com/geoffyang

 **Michael Tufo**
  * https://github.com/Machaelmus

 **Nicholas Brancifort**
  * https://github.com/brancifortnick
