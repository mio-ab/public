/**
 * Highlight part(s) of a text string
 *
 * @param {string} haystack Full text to be searched
 * @param {string} needle Text fragment to highlight in haystack
 * @return {string} Highlighted text
 */
function highlight( haystack, needle )
{
  var startTag  = '<span class="hl">',
  closeTag      = '</span>',
  highlight     = '',
  i             = -1;
     
  while ( haystack.length > 0 )
  {
    i = haystack.toLowerCase().indexOf( needle.toLowerCase(), i+1 );
    if ( i < 0 )
    {
      highlight   += haystack;
      haystack = '';
    }
    else
    {
      highlight   += haystack.substring( 0, i ) + startTag + haystack.substr( i, needle.length ) + closeTag;
      haystack = haystack.substr( i+needle.length );
      i = -1;
    }
  }
  
  return highlight;
}
