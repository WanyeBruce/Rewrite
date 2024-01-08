/*
致敬伟人
[rewrite_local]
# > 网易云解锁VIP
^https:\/\/interface3?\.music\.163\.com\/eapi\/playermode\/ url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/search\/complex\/(page|rec\/song\/get) url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/song\/(chorus|enhance\/|play\/|type\/detail\/get) url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/(v1\/artist\/top\/song|v3\/discovery\/recommend\/songs) url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https:\/\/interface3?\.music\.163\.com\/eapi\/vipnewcenter\/app\/resource\/newaccountpage url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https?:\/\/interface3?\.music\.163\.com\/eapi\/(homepage\/|v6\/)?playlist\/ url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js
^https?:\/\/interface3?\.music\.163\.com\/eapi\/vipauth\/app\/auth\/(soundquality\/)?query url script-request-header https://raw.githubusercontent.com/WanyeBruce/Rewrite/main/wyy.js

[mitm] 
hostname = *.music.163.com
*/
headers = $request.headers;

headers['Cookie'] = 'EVNSM=1.0.0; MUSIC_U=007554A4E9B79721FBBFBB24ADAF3CBA42C9BD7F8189190D4E7091A8EDE5CA4AC2F7556D2F8C30710A999BEFC770B41C3B5EA1A2CDCC0035E9C3DCC8868BF2AA883A179B1C83BBD3D13AA13E6FF424CD257A012EA10F0C1EB232837FFD15B91244BC0F9D26EACE2CDE6F02EDC0DAAD308FE3DD64B34D85081CB4B960D0309964D7362309F29B3F9E40EBD1D5FF5E64B73DE1513F030EF253CBA06A968EC7A8F158E5B88D5BD5197105E9DC6E63CE80A0B431B2E8F360667244E766A377EFBDD401BCAB3756D6B41BAA7FBAA20D9FE463EB1BB5026C2BD06106C25E625917CD2DC3CA43843CAEA4CD0983F54951C7477B40BC55D7B366A7DE090FEBE6D4B5CF0ACE922ABC6005AD561E8018480322E43C7230C699E39566CA591B78B15F519C0D23; NMCID=ofrrna.1699992631000.01.3; NMDI=Q1NKTQcBDABfNSicrttzFBstTOiXAAAAirv7y5UqnBnVn5D1GoBDfPmub1P0PIUC%2F0lyDYcyKywO3dqinTnkA0d%2FZKp8dZifHFVcoipywGOnxNua8Y%2BDPnqoE36jq3DbwfRcy%2BSDkhxQNJYm%2BrSkXz%2FxBg%2FMDy%2BfB4uaaiXkudJI42vrgGpq3Hy2vfEKXUBuOG7lz1Syws5Qwl4zXlPb7CBa0LqVwMiz0Nee23ueOQ%3D%3D; appkey=IuRPVVmc3WWul9fT; appver=9.0.0; buildver=4670; caid={"lastIyunId":"41f1356401cf02bf3775ad0a58d22c89","iyunId":"7c305378e0540be63b385e790a717746","iyunVersion":"20230330","lastIyunVersion":"20220111"}; channel=distribution; deviceId=940d70a2c52aecfcdfd64b6c0816cee8; idfa=51E9076F-EBDA-451B-ABEF-14D6C5F9BC86; idfv=B219739C-5D08-4CE9-BA66-B96086D6028E; machineid=iPhone13.2; os=iPhone OS; osver=14.4; packageType=release; sDeviceId=940d70a2c52aecfcdfd64b6c0816cee8; URS_APPID=E65739534E2D6F7B9A9B359D071FDFA04CFD5861BCA56DAFDAE4D72CDABD8CA69CC2821647BBF7FC67D9350F9678A060; ntes_kaola_ad=1; JSESSIONID-WYYY=hkv%5C%2BRvbJ%5CbCYAJPwuhRe7b91F%2FhpMGzJcszPZTfO%2BKvkTP0J8SDutS6quHoMv7jJsPYiTxb6hdynog1WZtFNqzNIoRrO7ntrRSu1%5CEIIHz0nUy%2BR9FCAG1x0omwFiIi4cqpf43wpj9CuCH0%2FGQSKAbHkW7B5YdSSUFh%2BpyhB72TjCpy%3A1704191307658; _iuqxldmzr_=33; _ntes_nnid=5742d465f07356554eda23ff49792226,1703908827893; _ntes_nuid=5742d465f07356554eda23ff49792226; __csrf=7a92936a0b67043ccc4704fdd5e91395; NMTID=00OGTZVRumuF5TIEkMUoaKuZ7vmSnkAAAGMhd50fg';
headers['User-Agent'] = 'NeteaseMusic 8.10.60/4390 (iPhone; iOS 14.4; zh_CN)';
headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":1210368,"appver":"9.0.0"},"tPJJnts2H31BZXmp":{"version":2596864,"appver":"2.0.30"},"c0Ve6C0uNl2Am0Rl":{"version":595968,"appver":"1.7.50"},"IuRPVVmc3WWul9fT":{"version":28403712,"appver":"9.0.0"}}';
$done({
    headers
});
})
