// usage
$(document).ready(function () {

    $('.color-red').binder('click', function (e) {
         $(this).css('color', 'red');
         e.preventDefault();
         console.log('color-red-click');
    });

    $('.color-red').binder('click', function (e) {
         $(this).css('text-decoration', 'none');
         e.preventDefault();
         console.log('color-red-click-underline');
    });

    $('.color-red').binder('click', function (e) {
         console.log('color-red-click-underline2');
    });

    $('.add-link').binder('click', function (e) {
        $(this).after('<a class="color-red">cool #' + $('.color-red').length +'</a>');
        $.binder.run();
        e.preventDefault();
    });

     $('.add-ajax').binder('click', function (e) {
        var that = this;
        $.ajax({
            url: 'example.ajax.html',
            success: function (data) {
                that.after(data);
            }
        });
        e.preventDefault();
    });

});
$.binder.ajax(true); // if you want auto ajax support