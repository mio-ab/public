function randomString()
{
  var s = "", c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 7; i++ ) s += c.charAt(Math.floor(Math.random() * c.length));
  return s;
}
