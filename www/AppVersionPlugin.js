cordova.define("cordova/plugin/AppVersion",

    function (require, exports, module) {

        var exec = require("cordova/exec");

        /**
         * Constructor.
         *
         * @returns {AppVersion}
         */
        function AppVersion() {
        };


        AppVersion.prototype.appVersion = function (successCallback, errorCallback) {
            exec(successCallback, errorCallback, "AppVersion", "getVersionNumber", []);
        };


        var appVersion = new AppVersion();
        module.exports = appVersion;
    });