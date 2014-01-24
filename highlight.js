/**
 * Highlight parts of a text string
 *
 * @param {string} haystack The string being searched, otherwise known as the haystack.
 * @param {string} needle The value being searched for, otherwise known as the needle.
 * @return {string} This function returns a string with highlighted text.
 */
function highlight( haystack, needle )
{
	var openTag = '<span class="hl">';
	var closeTag = '</span>';
	var highlighted = '';
	var i = -1;

	while ( haystack.length > 0 )
	{
		i = haystack.toLowerCase().indexOf( needle.toLowerCase(), i+1 );
		if ( i < 0 )
		{
			highlighted += haystack;
			haystack = '';
		}
		else
		{
			highlighted += haystack.substring( 0, i ) + openTag + haystack.substr( i, needle.length ) + closeTag;
			haystack = haystack.substr( i+needle.length );
			i = -1;
		}
	}
	
	return highlighted;
}
