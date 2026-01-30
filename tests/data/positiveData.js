// Data array for 26 positive test cases
const positiveTestCases = [
    { id: 'POS_01', input: 'Mama pansal yanavaa.', expected: 'මම පන්සල් යනවා' },
    { id: 'POS_02', input: 'eekanam hari.', expected: 'ඒකනම් හරි' },
    { id: 'POS_03', input: 'karunakarala mata ee udhavva karanna.', expected: 'කරුනකරල මට ඒ උදව්ව කරන්න.' },
    { id: 'POS_04', input: 'ooka dhiilaa palayan.', expected: 'ඕක දීලා පලයන්' },
    { id: 'POS_05', input: 'eyaa giyoo.', expected: 'එයා ගියෝ' },
    { id: 'POS_06', input: 'gihin enna.', expected: 'ගිහින් එන්න' },
    { id: 'POS_07', input: 'mama office yanavaa.', expected: 'මම office යනවා' },
    { id: 'POS_08', input: 'nikan nikan.', expected: 'නිකන් නිකන්' },
    { id: 'POS_09', input: 'api gedhara giyaa.', expected: 'අපි ගෙදර ගියා' },
    { id: 'POS_10', input: 'mata ooni naee.', expected: 'මට ඕනි නෑ' },
    { id: 'POS_11', input: 'api class yamu.', expected: 'අපි class යමු' },
    { id: 'POS_12', input: 'puLuvannam mata eeka karala dhenna.', expected: 'පුළුවන්නම් මට ඒක කරල දෙන්න' },
    { id: 'POS_13', input: 'ATM', expected: 'ATM' },
    { id: 'POS_14', input: 'jaya veevaa!', expected: 'ජය වේවා' },
    { id: 'POS_15', input: '10.30 AM', expected: '10.30 AM' },
    { id: 'POS_16', input: 'ela machan! supiri!!', expected: 'එල මචන්! සුපිරි!!' },
    { id: 'POS_17', input: 'jayama veevaa!', expected: 'ජයම වේවා' },
    { id: 'POS_18', input: 'karuNaakaralaa mata ida dhenna.', expected: 'කරුණාකරලා මට ඉඩ දෙන්න' },
    { id: 'POS_19', input: 'Oyaa kohedha inne.', expected: 'ඔයා කොහෙද ඉන්නේ' },
    { id: 'POS_20', input: 'mama ehema karanne naee.', expected: 'මම එහෙම කරන්නේ නෑ' },
    { id: 'POS_21', input: 'mama gihilla ivvaa.', expected: 'මම ගිහිල්ල ඉව්වා' },
    { id: 'POS_22', input: 'api kadeeta giya nisaa eeka gaththaa.', expected: 'අපි කඩේට ගිය නිසා ඒක ගත්තා' },
    { id: 'POS_23', input: 'mama rassaavak karanavaa.', expected: 'මම රස්සාවක් කරනවා' },
    { id: 'POS_24', input: 'eyaa pansal giyaa.', expected: 'එයා පන්සල් ගියා' },
    { id: 'POS_25', input: 'Suba udhaeesanak', expected: 'සුබ උදෑසනක්' },
    {
        id: 'POS_26', input: `api adha gedhara yanavaa, haebaeyi traffic nisaa
 late veyi. mata office eke Zoom meeting eka
 thiyenne 10.30 AM ta. karuNaakarala mata 
WhatsApp message ekak dhanna, oyaa enavadha
 kiyala. api passe Colombo yamu, Lamayi mall
 ekata, eke KFC valata yanavaa, haebaeyi cinema
 balanna veyidha dhanne naee. mata popcorn 
saha Coke kanna oonee. api gedharata 7.00 PM
 ta vath enna epaeyi.`,
        expected: `අපි අද ගෙදර යනවා, හැබැයි traffic නිසා
 late වෙයි. මට office eke Zoom meeting
 එක තියෙන්නෙ 10.30 AM ට.
 කරුණාකරල මට WhatsApp message
 එකක් දන්න, ඔයා එනවද කියල.
 අපි පස්සෙ Colombo යමු, ළමයි mall 
එකට, eke KFC වලට යනවා, හැබැයි
 cinema බලන්න වෙයිද දන්නෙ නෑ.
 මට popcorn සහ Coke කන්න ඕනේ. 
අපි ගෙදරට 7.00 PM ට වත් එන්න එපැයි` }
];

export default positiveTestCases;