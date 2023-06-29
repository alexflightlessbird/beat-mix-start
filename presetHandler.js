// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (method, index, newPresetArray) => {
    let responseArr = [];

    if (method == "GET") {
        if (presets[index]) {
            responseArr = [200, presets[index]];
        } else {
            responseArr[0] = 404;
        }
    } else if (method == "PUT") {
        if (presets[index]) {
            presets[index] = newPresetArray;
            responseArr = [200, newPresetArray];
        } else {
            responseArr[0] = 404;
        }
    } else {
        responseArr[0] = 400;
    }

    return responseArr;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
