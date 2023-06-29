// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);


/**
 * Returns array of same name as string
 * @param {string} drum - drum type
 * @returns {*} - array of same name as drum
 */

function drumName(drum) {
    switch(drum) {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
}

/**
 * Switches drum boolean at specific index
 * @param {string} drum 
 * @param {number} index 
 * @returns {void}
 */

function toggleDrum(drum,index) {
    if (!drum || index < 0 || index > 15) {
        return;
    }
    const drums = drumName(drum);
    if (!drums) {
        return;
    }
    drums[index] = !drums[index];
}

/**
 * Resets all values for drum to false
 * @param {string} drum 
 * @returns {void}
 */

function clear(drum) {
    if (!drum) {
        return;
    }
    const drums = drumName(drum);
    if (!drums) {
        return;
    }
    drums.fill(false);
}

/**
 * Flips boolean values for all elements in drum
 * @param {string} drum 
 * @returns {void}
 */

function invert(drum) {
    if (!drum) {
        return;
    }
    const drums = drumName(drum);
    if (!drums) {
        return;
    }

    for (let i = 0; i < 16; i++) {
        drums[i] = !drums[i];
    }

}

console.log(`${kicks}
${snares}
${hiHats}
${rideCymbals}`);