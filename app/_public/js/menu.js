// menu.js
(function() {
    $(document).on('ready', function() {

        console.log('menu.js ready');

        getEntries(3);

        setInterval(function () {
            getEntries(3);
        }, 5000);


        //////////////
        // Handlers //
        //////////////

        $("#button-refresh").on("click", function(event) {
            event.preventDefault();
            getEntries(3);
        });


        /////////////
        // Helpers //
        /////////////

        function getEntries(num) {
            var results;
            $.get("/entry/" + num)
            .done(function(data) {
                // console.log("done :)", data);
                results = data;
            })
            .fail(function(err) {
                // console.log('fail :(', err);
            })
            .always(function(){
                console.log('getEntries always :o');
                $(".request-output").html("");
                if (results) {
                        results.forEach(function(element, index, array){
                            $(".request-output").append("<span>Comment #" + (index+1) + ": " + element.message + "</span>\n");
                        });
                }
            }
        );
        }
    });
})();
