/* =================================================================
                [ Initialize Tooltip  ]
==================================================================*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
/* =================================================================
                        [ Sidebar  ]
==================================================================*/
let sidebarMenu = document.querySelector('.sidebar__menu');

Array.from(sidebarMenu.children).forEach(item => {
  item.querySelector('.sidebar__menu--link').addEventListener('click', e => {
    if (!$('.sidebar').hasClass('active') || window.innerWidth < 992) {
      item.classList.toggle('open-menu')
      $(item).find('.sidebar__menu--sub').slideToggle()
      Array.from(sidebarMenu.children).forEach(sub => {
        if (!sub.classList.contains('active')) {
          if (sub !== item) {
            sub.classList.remove('open-menu')
            $(sub).find('.sidebar__menu--sub').slideUp()
          }
        }
      })
    }
  })
});


$('.sidebar-toggler__button').click(e => {
  e.preventDefault();
  $('.sidebar-toggler__button').toggleClass("open");
  $('.sidebar').toggleClass('active');
  $('.main').toggleClass('active');
  $('.main-footer').toggleClass('active');
});


/* =================================================================
                          [ Initialize SlimScroll   ]
==================================================================*/
$(document).ready(function () {
  $('.slimscroll-box').slimscroll({
    height: '100%',
  });
});


$(document).click(function (e) {
  if (window.innerWidth < 992) {
    if (!$(e.target).closest('.sidebar , .sidebar-toggler__button').length) {
      $('.sidebar-toggler__button').removeClass("open");
      $('.sidebar').removeClass('active');
      $('.main').removeClass('active');
      $('.main-footer').removeClass('active');
    }
  }
});

/* =================================================================
                     [  Refresh Button In Panel   ]
==================================================================*/
$('.box-refresh').on('click', function (e) {
  e.preventDefault();
  $("<div class='refresh-block'><span class='refresh-loader'><i class='fa fa-spinner fa-spin text-dark'></i></span></div>").appendTo($(this).parents('.card-header__tools').parents('.card-header').parents('.card'));
  setTimeout(function () {
    $('.refresh-block').remove();
  }, 1500);
});

/* =================================================================
                   [  Close  Button In Panel   ]
==================================================================*/
$('.card-header__tools--btn.box-remove').click(function (e) {
  e.preventDefault();
  $(this).parents('.card').parent().remove();
});

/* =================================================================
                   [  Star Toggle In Inbox   ]
==================================================================*/
try {
  $('.star__toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
} catch (error) {}

/* =================================================================
                   [  Toggle Checkbox In Inbox   ]
==================================================================*/
try {
  $('#toggle-checkbox').click(function () {
    var checkedStatus = this.checked;
    $('.table__inbox--checkbox').each(function () {
      $(this).prop('checked', checkedStatus);
      if ($(this).prop("checked") == true) {
        $(this).parent().closest('tr').addClass('selected');
      } else {
        $(this).parent().closest('tr').removeClass('selected');
      }
    });
  });

  $('.table__inbox--checkbox').click(function () {
    $(this).parent().closest('tr').toggleClass('selected')
  });
} catch (error) {}





/* =================================================================
                [ Profile Img Change ]
==================================================================*/
$('.avatar-img__input').on('change', function () {
  var input = $(this);
  if (input[0] && input[0].files && input[0].files[0]) {
    if (!input[0].files[0].type.includes("image")) {
      // $('.avatar--img').attr('src', '../img/pr3o.png');
      return false;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.avatar___img')
        .attr('src', e.target.result);
    };

    reader.readAsDataURL(input[0].files[0]);
  }
});
$('input:file').change(
  function (e) {
    let fileSize = parseInt(e.currentTarget.files[0].size, 10) / 1024;
    filesize = Math.round(fileSize);
    $('.filesize').addClass('filesize').text('(' + filesize + 'kb)');
    $('.selectedFiles').text(e.currentTarget.files[0].name).appendTo($('.selectedFiles'));
  });