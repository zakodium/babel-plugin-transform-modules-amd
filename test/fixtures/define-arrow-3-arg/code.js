define("alpha", ["require", "exports", "beta"], (require, exports, beta) => {
    exports.verb = function() {
        return beta.verb();
        //Or:
        return require("beta").verb();
    }
});
