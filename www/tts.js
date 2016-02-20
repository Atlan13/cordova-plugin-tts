/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (text, pitch, onfulfilled, onrejected) {
    var options = {};

    if (typeof text == 'string') {
        options.text = text;
    }
    if (typeof pitch == 'double') {
        options.pitch = pitch;
    }

    cordova
        .exec(function () {
            onfulfilled();
        }, function (reason) {
            onrejected(reason);
        }, 'TTS', 'speak', [options]);
};