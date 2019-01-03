var superHero = ["Gambit", "Wolverine", "Nightcrawler", "Colossus", "Beast"]

 // Generic function for capturing the super name from the data-attribute
 function alertSuperName() {
    var superName = $(this).attr("data-name");

    alert(superName);
  }

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
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var newSuperHero = $("#newSuperInput").val().trim();

    // Adding the super hero from the textbox to our array
    superHero.push(newSuperHero);

    // Calling renderButtons which handles the processing of super hero array
    renderButtons();

  });

  // Function for displaying the super hero info
  // We're adding a click event listener to all elements with the class "super"
  // We're adding the event listener to the document because it will work for dynamically generated elements
  // $(".super").on("click") will only add listeners to elements that are on the page at that time
  $(document).on("click", ".super", alertSuperName);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();