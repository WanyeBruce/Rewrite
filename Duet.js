/******************************

脚本名称: Duet
下载地址：商店
脚本作者：ios151
更新时间：2023年11月15日 04:20
问题反馈：https://t.me/ios151
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


https://rdp.duetdisplay.com/v1/users/validateReceipt url script-response-body
https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/Duet.js

[mitm] 

hostname = rdp.duetdisplay.com*/

*******************************/

var objc = JSON.parse($response.body);

    objc = {
  "success": true,
  "products": [
    {
      "vendor": "apple",
      "product": "DuetAirAnnual",
      "subscriptionId": 391969,
      "purchaseDate": "2023-11-14T20:08:02Z",
      "cancelled": false,
      "expiresDate": "2099-11-21T20:07:56Z",
      "inTrial": true
    }
  ],
  "hasStripeAccount": false
}

$done({body : JSON.stringify(objc)});

