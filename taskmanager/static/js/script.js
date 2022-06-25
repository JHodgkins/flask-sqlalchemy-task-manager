
document.addEventListener('DOMContentLoaded', function() {
  // Navbar initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

  // Date picker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm yyyy",
      i18: {done: "Select"}
    });

  // Category select field initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

  // Collapsible task view initialization  
    collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });