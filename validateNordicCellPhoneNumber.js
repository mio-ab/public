
/**
 * Validate nordic cellphone numbers.
 *
 * SE: http://www.pts.se/sv/Bransch/Telefoni/Nummerfragor/Telefoninummerplanen/
 * DK: https://erhvervsstyrelsen.dk/nummerplan
 * NO: http://www.nkom.no/marked/nummerforvaltning/e.164-nummerplan/samlet-norsk-nummerplan-for-telefon-mm
 * FI: https://www.viestintavirasto.fi/sv/
 *
 * 
 */
function validateCellPhoneNumber( phoneNumber, countryCode, formatNumber ) {
    var n = phoneNumber.replace(/\D/g,""),
    cc = (countryCode ? countryCode.toString().toUpperCase() : false),
    fn = (formatNumber === true ? true : false),
    set = {
        "SE" : {
            "regexp" : /(70|72|73|76|79)([0-9]{7})/g,
            "prefix" : "+46"
        },"NO" : {
            "regexp" : /(4|9)([0-9]{7})/g,
            "prefix" : "+47"
        },"DK" : {
            "regexp" : /(2[0-9]|3[0-1]|4[0-2]|5[0-3]|6[0-1]|71|81|9[1-3])([0-9]{6})/g,
            "prefix" : "+45"
        },"FI" : {
            "regexp" : /(4[0-2]|43[0-9]|44|45[0-9]|46|47|48|49[0-9]|50)([0-9]{4,8})/g,
            "prefix" : "+358"
        },"AX" : {
            "regexp" : /(4[0-2]|43[0-9]|44|45[0-9]|46|47|48|49[0-9]|50)([0-9]{4,8})/g,
            "prefix" : "+358"
        }};
    return (set[cc] && set[cc].regexp.test(n) ? (fn ? set[cc].prefix+n.match(set[cc].regexp)[0] : true) : false);
}
