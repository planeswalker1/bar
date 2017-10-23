let over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

if (over21) {
  $('div#drinks').slideDown();
} else {
  $('div#under-21').slideDown();
}
