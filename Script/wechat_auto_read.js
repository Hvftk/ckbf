/*

> 微信阅读（全自动），阅读得积分，100积分换1元
> 请复制下面的链接在微信中打开
> 主选打开地址：https://shrtm.nu/riIs
> 备选打开地址：https://shrtm.nu/k8Pp
> Tg通知频道：https://t.me/ddgksf2021
> 建议积分每天兑换，并清空，不要积累


【QuantumultX】 :
*************************
[rewrite_local]
^https?://mp\.weixin\.qq\.com/s\?.* url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/wechat_auto_read.js
*************************

【Loon】 :
*************************
[Script]
http-response ^https?://mp\.weixin\.qq\.com/s\?.* tag=微信自动阅读（羊毛）, script-path=https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/wechat_auto_read.js
*************************

【Surge】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,script-path=https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/wechat_auto_read.js
*************************

【小火箭】 :
*************************
[Script]
微信自动阅读（羊毛） = type=http-response,pattern=^https?://mp\.weixin\.qq\.com/s\?.*,script-path=https://github.com/ddgksf2013/Cuttlefish/raw/master/Script/wechat_auto_read.js
*************************

[mitm]
hostname = mp.weixin.qq.com

*/

var body = $response.body
    .replace(/</script>/, 'setTimeout(()=>window.history.back(),6000); </script>');
$done({ body });