(function ($) {
    'use strict';
    $.fn.binder = function (identity, event_name, handler) {
        return this.each(function (e) {
            if ($.isFunction(event_name)) { // if $('thing').binder('click', callback);
                handler = event_name;
                event_name = identity;
                identity = $(this).selector;
            }
            identity = 'binder' + identity; // if $('thing').binder('identity', 'event', callback)
            if (!$(this).data(identity)) {
                if (typeof event_name === 'function') { // if $('thing').binder('identity', callback)
                    $.proxy(event_name, $(this).data(identity, true))(e);
                } else {
                    $(this).bind(event_name, handler).data(identity, true);
                }
            }
        });
    };

    $.binder = function (identity, event_name, handler) {
        return $('[data-binder="' + identity + '"]').each(function () {
            $(this).binder(identity, event_name, handler);
        });
    };

    $.binder.callbacks = [];
    $.binder.run = function () {
        $.each($.binder.callbacks, function (i, cb) {
            cb();
        });
    };
    $.binder.add = function (cb) {
        return $.binder.callbacks.push(cb);
    };

    $.binder.ajax = function () {
        $(document).ajaxComplete(function (event, jqXHR, ajaxOptions) {
            if (!ajaxOptions.skipBinder) {
                $($.binder.run);
            }
        }); // fire biner after ajax callback is completed
    };

}(jQuery));