/**
 * Generate a password
 *
 * @param int Length The length of the password
 * @return string The password
 */
function generate_pwd( len ) {
    var i, set, pos, output = '', setsUsed = true, charSets = [
        {set:'abcdefghijklmnopqrstuvwxyz'.split(''), used:false},
        {set:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), used:false},
        {set:'0123456789'.split(''), used:false},
        {set:'!@#%&(){}[]=?+*^~-_.:,;/|'.split(''), used:false}
    ];
    len = typeof len !== 'number' || len < 4 ? 20 : len;
    for (i = 0; i < len; i++) {
        set = Math.floor(Math.random()*charSets.length);
        pos = Math.floor(Math.random()*charSets[set].set.length);
        output += charSets[set].set[pos];
        charSets[set].used = true;
    }
    for (i in charSets) {
        if (setsUsed === true && charSets[i].used === false) {
            setsUsed = false;
        }
    }
    return setsUsed === false ? this(len) : output;
}
