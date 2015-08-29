/**
 * Generate a password string
 * 
 * Generates a random password string containing characters from sets according to given 
 * parameters. The length of the output string will be at least "1", or the number of
 * required character sets (if this number is higher).
 *
 * @param int Length The desired length of the output string
 * @param bool Letters Use letters aA-zZ
 * @param bool Numbers Use numbers 0-9
 * @param bool Punctuations Use punctuations (!@#$?*...)
 * @return string A random string
 */

function password( Length, Letters, Numbers, Punctuations ) {
    // Set empty vars
    var Chars = [], Output = '', SetsUsed = true;

    // Check that the value for parameter len is a number. If it's not, set len to zero (0).
    if ( typeof Length !== 'number' ) var Length = 0;

    // Check if the set with lower case letters is required 
    if ( Letters !== false ) {
        Chars.push({"Set" : "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" "), "Used" : false});
    	Chars.push({"Set" : "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" "), "Used" : false});
    }

    // Check if the set with numbers is required 
    if ( Numbers !== false ) {
        Chars.push({"Set" : "0 1 2 3 4 5 6 7 8 9".split(" "), "Used" : false });
    }
    
    // Check if the set with punctuations is required 
    if ( Punctuations !== false ) {
        Chars.push({Set : "§ ! @ # % & ( ) { } [ ] < > = ?  + * ^ ~ - _ . : , ; / | £ $ € ¥ ' ´ `".split(" "), Used : false });
    }
    
    // Make sure that len value is at least the same as the number of character sets to be used.
    Length = ( Chars.length == 0 || Chars.length > Length ? Chars.length : Length );

    // Start the loop
    for ( var i = 0; i < Length; i++ ) {
        // Get a random character set
        var Set = Math.floor( Math.random() * Chars.length );
        
        // Get the position for a random character in the current set
        var Pos = Math.floor( Math.random() * Chars[Set].Set.length );
        
        // Append the found character to the output string
        Output += Chars[Set].Set[Pos];
        
        // Mark the current set as used
        Chars[Set].Used = true;
    }

    // Check if all required sets were used
    for ( var i in Chars ) {
        if ( SetsUsed === true && Chars[i].Used === false ) {
            SetsUsed = false;
        }
    }
    
    // If all required sets were NOT used, recursively request a new string to be generated
    return (SetsUsed === false ? this( Length, Letters, Numbers, Punctuations ) : Output);
}
