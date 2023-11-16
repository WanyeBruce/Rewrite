/*


[rewrite_local]

#哔哩哔哩解锁大会员
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/bilibili.js

[mitm]
hostname = *.biliapi.*, *.bilibili.*

*/

var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '';

modifiedHeaders['Authorization'] = 'identify_v1 9684f1c40099867305918494703250b1CjD_JPSfRPzvPedQ6fqyXP_UGxMyeUnZueHltD57MEqHzBRKmkfwCpK7QvK5O_dXe6YSVlNyVFppZXk3VlhwbFQ4UVNSQzBJZmI3eGhFVF9jUmpfbkNzT29NTkg4UVVvQ3A3blNVUjZhMjZYN1BQN3VFdmtFcGVvbmN1aGZsVHNBdmJIcHR1aS1nIIEC';

modifiedHeaders['User-Agent'] = 'bili-universal/75500200 CFNetwork/1331.0.7 Darwin/21.4.0 os/ios model/iPhone 13 mobi_app/iphone build/75500200 osVer/15.4.1 network/2 channel/AppStore';

$done({headers : modifiedHeaders});
