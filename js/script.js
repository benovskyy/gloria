$ (document).ready (function () {
    $ ('.circle').on ('mousemove', function () {

        $ (this).parent ().css ('webkitAnimation','none');
        setTimeout (function () {
            $ ('.pendulum').css ('webkitAnimation','');
        }, 1);

        $ (this).parent ().removeClass ('play');
        $ (this).parent ().addClass ('play');
    })
});
