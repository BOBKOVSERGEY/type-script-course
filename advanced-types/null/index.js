"use strict";
const n = null;
function getUserNext() {
    if (Math.random() > .5) {
        return {
            name: 'V'
        };
    }
    else {
        return {
            name: 'John'
        };
    }
}
