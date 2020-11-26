// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).

// $('selector').click(); // associa ad un click una funzione

// METODO 1: senza dichiarare variabili
// ('div.header-right > a').click(function () {
//   $('.hamburger-menu').show();
// });
//
// $('.hamburger-menu >a.close').click(function () {
//   $('.hamburger-menu').hide();
// });

// METODO 2: dichiarando le variabili, per renderlo più comprensibile
var headerRightIcon = $("div.header-right > a");
var hamburgerMenu = $(".hamburger-menu");
var hamburgerMenuIconClose = $(".hamburger-menu >a.close");

headerRightIcon.click(function () {
  hamburgerMenu.show();
});

hamburgerMenuIconClose.click(function () {
  hamburgerMenu.hide();
});
