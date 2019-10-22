$(document).ready(function() {
    var searchButton = $('.search-button');
    var searchBox = $('.search-box');

    searchButton.click(function() {
      // missing "-" on class name
        searchBox.toggleClass('search-box--hidden');
    })

    // log title of each card
    var cardTitle;
    $('.card-box').click(function(){
      cardTitle = $(this).attr("id");
      console.log(cardTitle);
    });
})
