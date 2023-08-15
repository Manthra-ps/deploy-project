/*
Template: Honey Bill - Responsive Bootstrap 4 Admin Dashboard Template
Author: iqonicthemes.in
Design and Developed by: iqonicthemes.in
NOTE: This file contains the styling for responsive Template.
*/

/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Fixed Nav
:: Magnific Popup
:: Ripple Effect
:: Sidebar Widget
:: FullScreen
:: Page Loader
:: Counter
:: Progress Bar
:: Page Menu
:: Close  navbar Toggle
:: Mailbox
:: chatuser
:: chatuser main
:: Chat start
:: todo Page
:: user toggle
:: Data tables
:: Form Validation
:: Active Class for Pricing Table
:: Flatpicker
:: Scrollbar
:: checkout
:: Datatables
:: image-upload
:: video
:: Button
:: Pricing tab

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {
  "use strict";

  /*---------------------------------------------------------------------
        Tooltip
        -----------------------------------------------------------------------*/
  // jQuery('[data-toggle="popover"]').popover();
  // jQuery('[data-toggle="tooltip"]').tooltip();

  /*---------------------------------------------------------------------
        Fixed Nav
        -----------------------------------------------------------------------*/

  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() > 0) {
  //     $(".iq-top-navbar").addClass("fixed");
  //   } else {
  //     $(".iq-top-navbar").removeClass("fixed");
  //   }
  // });

  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() > 0) {
  //     $(".white-bg-menu").addClass("sticky-menu");
  //   } else {
  //     $(".white-bg-menu").removeClass("sticky-menu");
  //   }
  // });


  /*---------------------------------------------------------------------
        Page Loader
        -----------------------------------------------------------------------*/
  jQuery("#load").fadeOut();
  jQuery("#loading").delay().fadeOut("");


  /*---------------------------------------------------------------------
        Form Validation
        -----------------------------------------------------------------------*/

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );


  /*---------------------------------------------------------------------
        Sweet alt Delete
        -----------------------------------------------------------------------*/
  // $('[data-extra-toggle="delete"]').on("click", function (e) {
  //   const closestElem = $(this).attr("data-closest-elem");
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: "btn btn-primary",
  //       cancelButton: "btn btn-outline-primary ml-2",
  //     },
  //     buttonsStyling: false,
  //   });

  //   swalWithBootstrapButtons
  //     .fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, delete it!",
  //       showClass: {
  //         popup: "animate__animated animate__zoomIn",
  //       },
  //       hideClass: {
  //         popup: "animate__animated animate__zoomOut",
  //       },
  //     })
  //     .then((willDelete) => {
  //       if (willDelete.isConfirmed) {
  //         swalWithBootstrapButtons
  //           .fire({
  //             title: "Deleted!",
  //             text: "Your note has been deleted.",
  //             icon: "success",
  //             showClass: {
  //               popup: "animate__animated animate__zoomIn",
  //             },
  //             hideClass: {
  //               popup: "animate__animated animate__zoomOut",
  //             },
  //           })
  //           .then(() => {
  //             if (closestElem == ".card") {
  //               $(this).closest(closestElem).parent().remove();
  //             } else {
  //               $(this).closest(closestElem).remove();
  //             }
  //           });
  //       } else {
  //         swalWithBootstrapButtons.fire({
  //           title: "Your note is safe!",
  //           showClass: {
  //             popup: "animate__animated animate__zoomIn",
  //           },
  //           hideClass: {
  //             popup: "animate__animated animate__zoomOut",
  //           },
  //         });
  //       }
  //     });
  // });

})(jQuery);


// $(document).ready(function () {
//   $("#beforearrow").on("click", function () {
//     $("#afterarrow").toggleClass("active");
//   });
// });

window.onload=function(){
  
  const $button  = document.querySelector('#sidebar-toggle');
  const $wrapper = document.querySelector('#wrapper');
  console.log( 'in window onload');
  if($button != null || $button != undefined)
  {
     $button.addEventListener('click', (e) => {
        e.preventDefault();
        $wrapper.classList.toggle('toggled');
  });
}
} 

$(document).ready(function() {
  $("#iq-sidebar-toggle a").on("click", function() {
    $("#iq-sidebar-toggle a").removeClass("active");
    $(this).addClass("active");
  });
});

