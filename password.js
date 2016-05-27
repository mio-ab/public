/**
 * Generate a password
 *
 * @param int Length The length of the password
 * @return string The password
 */

function generate_password( Length ) {
	var Chars = [], Output = '', SetsUsed = true;

	// Check that the value for parameter Length is a number and at least 4
	// if it's not, set Length to 20 (default)
	if ( typeof Length !== 'number' || Length < 4 ) Length = 20;

	// Check if the set with lower case letters is required 
	Chars.push({Set : 'abcdefghijklmnopqrstuvwxyz'.split(''), Used : false});
	Chars.push({Set : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), Used : false});
	Chars.push({Set : '0123456789'.split(''), Used : false });
	Chars.push({Set : '!@#%&(){}[]<>=?+*^~-_.:,;/|$£€\\\'`"'.split(''), Used : false });

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

	// Check if all sets were used
	for ( var i in Chars ) {
		if ( SetsUsed === true && Chars[i].Used === false ) {
			SetsUsed = false;
		}
	}

	// If all sets were NOT used, recursively generated a new password,
	// otherwise output the password
	return (SetsUsed === false ? generate_password( Length ) : Output);
}
