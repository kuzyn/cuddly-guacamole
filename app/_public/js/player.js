// player.js

(function() {
    $(document).on('ready', function() {

        console.log('player.js ready');

        var ap;
        var option = {
            element: document.getElementById('player1'), // Optional, player element
            narrow: false, // Optional, narrow style
            autoplay: false, // Optional, autoplay song(s), not supported by mobile browsers
            showlrc: 0, // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
            mutex: true, // Optional, pause other players when this player playing
            theme: '#e6d0b2', // Optional, theme color, default: #b7daff
            loop: false, // Optional, loop play music, default: true
            music: [{ // Required, music info, see: ###With playlist
                title: 'Theme Loop', // Required, music title
                author: 'DTLJ', // Required, music author
                url: './assets/ITMthemeloop.mp3', // Required, music url
                pic: './assets/dtlj-logo.png', // Optional, music picture
            }, { // Required, music info, see: ###With playlist
                title: 'English 25 Sec Extra', // Required, music title
                author: 'DTLJ', // Required, music author
                url: './assets/ITM_english_25_sec_extra.mp3', // Required, music url
                pic: './assets/dtlj-logo.png', // Optional, music picture
            }]
        };

        // init
        ap = new APlayer(option);
        ap.init();

        // listeners
        ap.on('play', function() {
            var track = $('.aplayer-title').html();
            console.log("Track:", track);
        });

        // kludge
        var lasttime;
        ap.on('playing', function() {
            var time = $('.aplayer-ptime').html();
            if (time !== lasttime) {
                console.log("Time:", time);
                lasttime = time;
            }

        });

    });
})();
