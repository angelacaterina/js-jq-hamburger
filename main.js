// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// $('selector').click(); // associa ad un click una funzione
$('div.header-right > a').click(function () {
  $('.hamburger-menu').show();
});

$('.hamburger-menu >a.close').click(function () {
  $('.hamburger-menu').hide();
});
