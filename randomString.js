/* randstr - Generate a pseudo random string
 * 
 * @param {int} Output string length
 * @returns {string} A pseudo random string
 */
function randstr( l ) {
    var s = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i < l; i++) s += c.charAt(Math.floor(Math.random()*c.length));
    return s;
}
