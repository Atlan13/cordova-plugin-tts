/*

    Cordova Text-to-Speech Plugin
    https://github.com/vilic/cordova-plugin-tts

    by VILIC VANE
    https://github.com/vilic

    MIT License

*/

exports.speak = function (parameters, onfulfilled, onrejected) {
    var options = {};

    if (typeof parameters == 'string') {
        options.text = parameters;
    } else {
        options = parameters;
    }

    cordova
        .exec(function () {
            onfulfilled();
        }, function (reason) {
            onrejected(reason);
        }, 'TTS', 'speak', [options]);
};