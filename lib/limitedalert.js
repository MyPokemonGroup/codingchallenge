const limitedAlert = function () {
    /**
     * logs message if in NodeJS, shows alert popup window if in browser
     *
     * @param message
     */
    let innerLimitedAlert = function (message) {
        if (innerLimitedAlert.called < 3) {
            if (typeof window === "undefined") {
                console.log(message);
            } else {
                alert(message);
            }

            innerLimitedAlert.called++;
        }
    };

    // initialize called variable to be 0
    innerLimitedAlert.called = 0 ;

    // function used to display formatted code on this html page
    innerLimitedAlert.codeString = function() {
        return limitedAlert.toString().split("\n").map((line) => "    " + line).join("\n");
    };

    // return alert function with limitation
    return innerLimitedAlert;
};


module.exports = limitedAlert();