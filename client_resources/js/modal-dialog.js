insight.ready(function () {
    var view = insight.getView();

    // This will overwrite the alert() function globally
    window.alert = function (message) {
        var config = {
            animate: false,
            message: message,
            buttons: {
                ok: {
                    className: 'btn btn-primary'
                }
            }
        };
        bootbox.alert(config);
    };

    $('#trigger-alert').on('click', function () {
        alert('This is a bootbox alert');
    });

    $('#trigger-confirm').on('click', function () {
        // Or you can just call the bootbox methods directly

        var config = {
            message: 'This is a bootbox confirm.',
            animate: false,
            callback: function (result) {
                console.log('You chose: ' + result);
            },
            buttons: {
                confirm: {
                    className: 'btn btn-primary'
                },
                cancel: {
                    className: 'btn btn-primary'
                }
            }
        };
        bootbox.confirm(config);
    });

    view.start();
});
