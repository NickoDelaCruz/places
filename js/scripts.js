function Places (location, landmark) {
  this.firstLocation = location;
  this.lastLandmark = landmark;
}

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedFirstLocation = $("input#new-city").val();
    var inputtedLastLandmark = $("input#new-landmark").val();

    var newPlace = new Places(inputtedFirstLocation, inputtedLastLandmark);

    $("ul#places").append("<li><span class='contact'>" + newPlace.firstLocation + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.firstLocation);
      $(".first-location").text(newPlace.firstLocation);
      $(".first-landmarks").text(newPlace.lastLandmark);
    });

  $("input#new-city").val("");
  $("input#new-landmarks").val("");
 });
});
