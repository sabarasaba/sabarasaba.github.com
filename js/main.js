$(function(){

  // --- Responsive Menu --- //

  var header = $(".sidebar"),
      menu = $("ul#pagenav"),
      menuButton = $("<div class='menubutton'><a href='#'><span></span><span></span><span></span></a></div>");

  menuButton.click(showMenu);
  header.append(menuButton);

  function showMenu (event) {
    if (menu.is(":visible"))
        menu.slideUp({complete:function(){$(this).css('display','');} });
    else
        menu.slideDown();
  }

  // Prevents # being appended to URL. Also Prevents jumping to the top of the page because of the # anchor.
  $(".menubutton").click(function(event) {
    event.preventDefault();
  });

});