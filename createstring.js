/**
 * Generate a random string
 * ---
 * Generates a random text string containing characters sets according to given 
 * parameters. Uses all character sets by default. The length of the output string
 * will be at least "1", or the number character sets (if this number is higher).
 *
 * @param int l The minimum length of output string (returned string can be longer)
 * @param bool w Use letters a-z in lower case
 * @param bool x Use letters A-Z in upper case
 * @param bool y Use numbers 0-9
 * @param bool z Use punctuations (!@#$?*...)
 * @return string A random string
 */
function createString( l, w, x, y, z )
{
    var a = [], c = [], p = '', g = true, n1, n2, s = 0, i = 0;
    
    if( !w && !x && !y && !z ) { w=1, x=1, y=1, z=1; }
    if( w ) { c.push(0); s++; a.push("abcdefghijklmnopqrstuvwxyz"); }
    if( x ) { c.push(0); s++; a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    if( y ) { c.push(0); s++; a.push("0123456789"); }
    if( z ) { c.push(0); s++; a.push("!@#%&/(){}[]=?+*^~-_.:,;"); }
    if( l < s ) { l = s; }
    
    for( i = 0; i < l; i++ )
    {
        n1 = Math.floor( Math.random() * (s-0) );
        n2 = Math.floor( Math.random() * (a[n1].length-0) );
        p += a[n1][n2];
        c[n1] = 1;
    }
    
    for( i = 0; i < s; i++ )
        if( c[i] === 0 ) g = false; 
    
    if( g )
        return p;
    else
        return createString( l, w, x, y, z );
}
