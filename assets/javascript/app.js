var superHero = ["Gambit", "Wolverine", "Nightcrawler", "Colossus", "Beast"]

 // Generic function for capturing the super name from the data-attribute
//  function alertSuperName() {
//     var superName = $(this).attr("data-name");

    // alert(superName);
  

  // Function for displaying super data
  function renderButtons() {

    // Deleting old super prior to adding new super
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of supers
    for (var i = 0; i < superHero.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class of super to our button
      a.addClass("super");
      a.addClass("btn-warning");
      a.addClass("btn");
      // Adding a data-attribute
      a.attr("data-name", superHero[i]);
      // Providing the initial button text
      a.text(superHero[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-hero").on("click", function(event) {
    // Preventing the buttons default behavior when clicked 
    event.preventDefault();
    // This line grabs the input from the textbox
    var newSuperHero = $("#newSuperInput").val().trim();

    // Adding the super hero from the textbox to our array
    superHero.push(newSuperHero);

    // Calling renderButtons which handles the processing of super hero array
    renderButtons();

 

});



  // Calling the renderButtons function to display the intial buttons
  renderButtons();
  $("#buttons-view").on("click" , "button" , function(){
  var superHeroGif = $(this).attr("data-name");
    console.log(this);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + superHeroGif
   + "&api_key=A92vVwRV8KfmQO8vxolt6RQ8jjUDq8Z4&limit=10";
// Get the data into the button to get the API to pull gifs

  $.ajax({
    url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response);
    // Storing an array of results in the results variable
    var results = response.data;

    // Looping over every result item
    for (var i = 0; i < results.length; i++) {

      // Only taking action if the photo has an appropriate rating
      if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        // Creating a div for the gif
        var gifDiv = $("<div>");

        // Storing the result item's rating
        var rating = results[i].rating;

        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + rating);

        // Creating an image tag
        var personImage = $("<img>");

        // Giving the image tag an src attribute of a proprty pulled off the
        // result item
        personImage.attr("src", results[i].images.fixed_height.url);

        // Appending the paragraph and personImage we created to the "gifDiv" div we created
        gifDiv.append(p);
        gifDiv.append(personImage);

        // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
        $("#gifs-appear-here").prepend(gifDiv);
      }
    }
  });

  });
// renderButtons();

  

  