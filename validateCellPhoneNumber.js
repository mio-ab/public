/**
 * Kontrollerar om ett svenskt mobiltelefonnummer är giltigt enligt PTS nummerplan för mobiltelefonitjänster.
 * 
 * @param {String} cellPhoneNumber Mobiltelefonnummer som ska kontrolleras
 * @param {Boolean} returnValidNumber Sätts till "true" om giltiga telefonnummer ska returneras istället för boolean (true)
 * @param {String} returnFormat Specificerar format för giltiga telefonnummer som retuneras (e164|plain). Standardformat är e164.
 * @returns {String|Boolean}
*/
function validateCellPhoneNumber( cellPhoneNumber, returnValidNumber, returnFormat ) {
    var n = cellPhoneNumber.replace(/\D/g,""), prefix = ["70","72","73","76","79"];
    for (var p in prefix) {
        if (n.indexOf(prefix[p]) > -1 && n.substring(n.indexOf(prefix[p]), n.length).length === 9) {
            return (returnValidNumber === true ? (returnFormat.toLowerCase() === "plain" ? "0" : "+46") + 
            n.substring(n.indexOf(prefix[p]), n.length) : true);
        }
    }
    return false;
}
