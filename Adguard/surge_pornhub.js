let ele = '<head>'
//let replace = '<head><script type="text/javascript" src="//limbopro.com/Adguard/pornhubX.user.js"></script>';
let replace = '<head><script type="text/javascript" src="//limbopro.com/Adguard/Adblock4limbo.user.js"></script>';
let body = $response.body
.replace(ele, replace);
$done({body});