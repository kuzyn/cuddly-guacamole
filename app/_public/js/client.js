// client.js
(function() {
    $(document).on('ready', function() {

        console.log('client.js ready');


        //////////////
        // Handlers //
        //////////////

        $("#entry-submission textarea").keypress(function(event) {
            if (event.which === 13) {
                event.preventDefault();
                $("#entry-submission").submit();
            }
        });

        $('#entry-submission').submit(function(event) {
            event.preventDefault();
            var $form = $(this);
            var url = $form.attr('action');
            var payload = {
                message: $form.find('textarea[name="entry-message"]').val()
            };

            // refactor to get the location maybe? or get a cookie or somthing?
            $.get('/', function() {})
                .done(function(data) {
                    console.log(data);
                })
                .fail(function(error) {
                    console.log(error);
                })
                .always(function() {
                    postMessage(url, payload, function(err, res) {
                        if (err) {
                            console.log(err);
                            $('.request-output').html(JSON.stringify(err, null, 4));
                        }
                        console.log(res);
                        $('.request-output').html(JSON.stringify(res, null, 4));
                    });
                });
        });


        /////////////
        // Helpers //
        /////////////

        function postMessage(_url, _payload, _cb) {

            $.post(_url, _payload)
                .done(function(data) {
                    console.log("done :)", data);
                    _cb(undefined, data);
                })
                .fail(function(err) {
                    console.log('fail!', err);
                    _cb(err, undefined);
                });
        }

    });
})();
