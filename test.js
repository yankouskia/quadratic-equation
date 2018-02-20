const assert = require('assert');
Object.freeze(assert);
const solveEquation = require('./src/index');

describe('Solve quadratic equation', () => {
  it('1', () => {
    const solutions = solveEquation('-20 * x^2 - 108797540 * x - 130011773690520');
    assert.deepEqual(solutions, [-3667291, -1772586]);
  });
  
  it('2', () => {
    const solutions = solveEquation('294 * x^2 - 141195558 * x - 1600964090384736');
    assert.deepEqual(solutions, [-2105744, 2586001]);
  });
  
  it('3', () => {
    const solutions = solveEquation('-267 * x^2 + 296412186 * x + 4722715166392080');
    assert.deepEqual(solutions, [-3687112, 4797270]);
  });
  
  it('4', () => {
    const solutions = solveEquation('-417 * x^2 + 806708601 * x + 3174554007677316');
    assert.deepEqual(solutions, [-1956499, 3891052]);
  });
  
  it('5', () => {
    const solutions = solveEquation('-478 * x^2 + 3021138772 * x - 4052495536885632');
    assert.deepEqual(solutions, [1931872, 4388502]);
  });
  
  it('6', () => {
    const solutions = solveEquation('367 * x^2 + 1773708798 * x + 292266180528840');
    assert.deepEqual(solutions, [-4662180, -170814]);
  });
  
  it('7', () => {
    const solutions = solveEquation('485 * x^2 + 1080338955 * x + 514155874862470');
    assert.deepEqual(solutions, [-1538401, -689102]);
  });
  
  it('8', () => {
    const solutions = solveEquation('431 * x^2 + 911452509 * x + 267423794912344');
    assert.deepEqual(solutions, [-1762747, -351992]);
  });
  
  it('9', () => {
    const solutions = solveEquation('-200 * x^2 - 888725200 * x - 104468049705600');
    assert.deepEqual(solutions, [-4322792, -120834]);
  });
  
  it('10', () => {
    const solutions = solveEquation('142 * x^2 - 1069080086 * x + 2011605981501984');
    assert.deepEqual(solutions, [3699437, 3829296]);
  });
  
  it('11', () => {
    const solutions = solveEquation('-206 * x^2 - 1701578746 * x - 3454735806747668');
    assert.deepEqual(solutions, [-4665502, -3594589]);
  });
  
  it('12', () => {
    const solutions = solveEquation('-8 * x^2 - 59910648 * x - 102244152727440');
    assert.deepEqual(solutions, [-4858026, -2630805]);
  });
  
  it('13', () => {
    const solutions = solveEquation('-44 * x^2 + 51547628 * x + 266429578357272');
    assert.deepEqual(solutions, [-1943726, 3115263]);
  });
  
  it('14', () => {
    const solutions = solveEquation('198 * x^2 + 1310713866 * x + 2090008945278936');
    assert.deepEqual(solutions, [-3942124, -2677643]);
  });
  
  it('15', () => {
    const solutions = solveEquation('-473 * x^2 - 2571124886 * x - 3420402126706400');
    assert.deepEqual(solutions, [-3112400, -2323382]);
  });
  
  it('16', () => {
    const solutions = solveEquation('-29 * x^2 - 60510849 * x + 189527331568964');
    assert.deepEqual(solutions, [-3804428, 1717847]);
  });
  
  it('17', () => {
    const solutions = solveEquation('428 * x^2 - 1262641516 * x - 2402667529459440');
    assert.deepEqual(solutions, [-1315915, 4266012]);
  });
  
  it('18', () => {
    const solutions = solveEquation('-452 * x^2 - 3327703100 * x - 5961384164545512');
    assert.deepEqual(solutions, [-4282338, -3079837]);
  });
  
  it('19', () => {
    const solutions = solveEquation('-473 * x^2 + 2227662085 * x - 136635191332332');
    assert.deepEqual(solutions, [62156, 4647489]);
  });
  
  it('20', () => {
    const solutions = solveEquation('337 * x^2 - 1347061118 * x - 1287098482464435');
    assert.deepEqual(solutions, [-796695, 4793909]);
  });
  
  it('21', () => {
    const solutions = solveEquation('148 * x^2 + 1215797356 * x + 2439974086889496');
    assert.deepEqual(solutions, [-4727598, -3487249]);
  });
  
  it('22', () => {
    const solutions = solveEquation('-454 * x^2 - 3721518358 * x - 7549656215739228');
    assert.deepEqual(solutions, [-4509963, -3687214]);
  });
  
  it('23', () => {
    const solutions = solveEquation('153 * x^2 + 357823395 * x - 133149552904242');
    assert.deepEqual(solutions, [-2665237, 326522]);
  });
  
  it('24', () => {
    const solutions = solveEquation('-498 * x^2 - 406335630 * x + 4591609305841572');
    assert.deepEqual(solutions, [-3471713, 2655778]);
  });
  
  it('25', () => {
    const solutions = solveEquation('219 * x^2 - 292471653 * x - 3083732127280242');
    assert.deepEqual(solutions, [-3143667, 4479154]);
  });
  
  it('26', () => {
    const solutions = solveEquation('148 * x^2 - 568254436 * x + 514394625520056');
    assert.deepEqual(solutions, [1461619, 2377938]);
  });
  
  it('27', () => {
    const solutions = solveEquation('-429 * x^2 - 289351920 * x + 6720397265732436');
    assert.deepEqual(solutions, [-4309518, 3635038]);
  });
  
  it('28', () => {
    const solutions = solveEquation('245 * x^2 + 1375935925 * x + 1818341552728820');
    assert.deepEqual(solutions, [-3488653, -2127412]);
  });
  
  it('29', () => {
    const solutions = solveEquation('274 * x^2 + 290093390 * x - 3946187251120884');
    assert.deepEqual(solutions, [-4361126, 3302391]);
  });
  
  it('30', () => {
    const solutions = solveEquation('329 * x^2 - 715635865 * x - 2509488263828406');
    assert.deepEqual(solutions, [-1880653, 4055838]);
  });
  
  it('31', () => {
    const solutions = solveEquation('123 * x^2 + 21247020 * x - 2263734541948992');
    assert.deepEqual(solutions, [-4377268, 4204528]);
  });
  
  it('32', () => {
    const solutions = solveEquation('497 * x^2 - 2461495876 * x + 2975604382840964');
    assert.deepEqual(solutions, [2095306, 2857402]);
  });
  
  it('33', () => {
    const solutions = solveEquation('-436 * x^2 + 3530846592 * x - 7147944567254720');
    assert.deepEqual(solutions, [4015460, 4082812]);
  });
  
  it('34', () => {
    const solutions = solveEquation('-300 * x^2 + 76955700 * x + 1235393506869000');
    assert.deepEqual(solutions, [-1905070, 2161589]);
  });
  
  it('35', () => {
    const solutions = solveEquation('-57 * x^2 - 155566509 * x + 89650574327106');
    assert.deepEqual(solutions, [-3217994, 488757]);
  });
  
  it('36', () => {
    const solutions = solveEquation('-381 * x^2 + 2871374115 * x - 5385906614046864');
    assert.deepEqual(solutions, [3516911, 4019504]);
  });
  
  it('37', () => {
    const solutions = solveEquation('-154 * x^2 + 645219652 * x - 602658645850800');
    assert.deepEqual(solutions, [1405588, 2784150]);
  });
  
  it('38', () => {
    const solutions = solveEquation('484 * x^2 - 1735749840 * x - 440083768225024');
    assert.deepEqual(solutions, [-237776, 3824036]);
  });
  
  it('39', () => {
    const solutions = solveEquation('-131 * x^2 - 1006051311 * x - 1770580185043078');
    assert.deepEqual(solutions, [-4948439, -2731342]);
  });
  
  it('40', () => {
    const solutions = solveEquation('63 * x^2 + 217013076 * x + 185403268649088');
    assert.deepEqual(solutions, [-1875616, -1569036]);
  });
  
  it('41', () => {
    const solutions = solveEquation('104 * x^2 - 907363600 * x + 1969338101694600');
    assert.deepEqual(solutions, [4055835, 4668815]);
  });
  
  it('42', () => {
    const solutions = solveEquation('236 * x^2 - 1439922376 * x + 2081465681789004');
    assert.deepEqual(solutions, [2352903, 3748463]);
  });
  
  it('43', () => {
    const solutions = solveEquation('291 * x^2 + 230249967 * x - 295345785953268');
    assert.deepEqual(solutions, [-1477953, 686716]);
  });
  
  it('44', () => {
    const solutions = solveEquation('36 * x^2 - 31639860 * x - 112399239902184');
    assert.deepEqual(solutions, [-1381357, 2260242]);
  });
  
  it('45', () => {
    const solutions = solveEquation('178 * x^2 - 1296885216 * x + 2361820662896696');
    assert.deepEqual(solutions, [3594694, 3691178]);
  });
  
  it('46', () => {
    const solutions = solveEquation('-114 * x^2 - 251511930 * x + 892429663678416');
    assert.deepEqual(solutions, [-4110648, 1904403]);
  });
  
  it('47', () => {
    const solutions = solveEquation('-342 * x^2 + 940819086 * x + 636703315397676');
    assert.deepEqual(solutions, [-561958, 3312891]);
  });
  
  it('48', () => {
    const solutions = solveEquation('-191 * x^2 - 498676361 * x + 12346951780600');
    assert.deepEqual(solutions, [-2635400, 24529]);
  });
  
  it('49', () => {
    const solutions = solveEquation('-6 * x^2 - 2704356 * x + 16947721094640');
    assert.deepEqual(solutions, [-1921066, 1470340]);
  });
  
  it('50', () => {
    const solutions = solveEquation('-57 * x^2 + 302165322 * x - 240310169901000');
    assert.deepEqual(solutions, [974396, 4326750]);
  });
  
  it('51', () => {
    const solutions = solveEquation('-290 * x^2 + 1477509110 * x - 1422200174715000');
    assert.deepEqual(solutions, [1288359, 3806500]);
  });
  
  it('52', () => {
    const solutions = solveEquation('311 * x^2 + 503689691 * x - 2621617409264010');
    assert.deepEqual(solutions, [-3823990, 2204409]);
  });
  
  it('53', () => {
    const solutions = solveEquation('289 * x^2 + 755749450 * x + 460512878992725');
    assert.deepEqual(solutions, [-1648335, -966715]);
  });
  
  it('54', () => {
    const solutions = solveEquation('385 * x^2 + 1014367970 * x - 2416079700509475');
    assert.deepEqual(solutions, [-4147727, 1513005]);
  });
  
  it('55', () => {
    const solutions = solveEquation('403 * x^2 + 2702475282 * x + 4478876195016600');
    assert.deepEqual(solutions, [-3711300, -2994594]);
  });
  
  it('56', () => {
    const solutions = solveEquation('-164 * x^2 + 1024241664 * x - 1587715150011580');
    assert.deepEqual(solutions, [2858131, 3387245]);
  });
  
  it('57', () => {
    const solutions = solveEquation('-141 * x^2 + 1092146661 * x - 2055620530029864');
    assert.deepEqual(solutions, [3224648, 4521073]);
  });
  
  it('58', () => {
    const solutions = solveEquation('-240 * x^2 - 2196362400 * x - 5014768722771840');
    assert.deepEqual(solutions, [-4782308, -4369202]);
  });
  
  it('59', () => {
    const solutions = solveEquation('-132 * x^2 - 656872656 * x - 796671131945040');
    assert.deepEqual(solutions, [-2882518, -2093790]);
  });
  
  it('60', () => {
    const solutions = solveEquation('-375 * x^2 + 1758412125 * x - 1086042255243750');
    assert.deepEqual(solutions, [731850, 3957249]);
  });
  
  it('61', () => {
    const solutions = solveEquation('-401 * x^2 - 325972098 * x + 886685129745408');
    assert.deepEqual(solutions, [-1948002, 1135104]);
  });
  
  it('62', () => {
    const solutions = solveEquation('30 * x^2 + 63436590 * x - 56700499682640');
    assert.deepEqual(solutions, [-2791592, 677039]);
  });
  
  it('63', () => {
    const solutions = solveEquation('243 * x^2 + 1238570028 * x + 301955199309504');
    assert.deepEqual(solutions, [-4840272, -256724]);
  });
  
  it('64', () => {
    const solutions = solveEquation('-19 * x^2 - 74826066 * x + 547242791800');
    assert.deepEqual(solutions, [-3945514, 7300]);
  });
  
  it('65', () => {
    const solutions = solveEquation('121 * x^2 - 324992690 * x - 993390335560491');
    assert.deepEqual(solutions, [-1821441, 4507331]);
  });
  
  it('66', () => {
    const solutions = solveEquation('185 * x^2 + 536527750 * x - 638327174869360');
    assert.deepEqual(solutions, [-3806584, 906434]);
  });
  
  it('67', () => {
    const solutions = solveEquation('186 * x^2 - 491700486 * x - 1692138575652840');
    assert.deepEqual(solutions, [-1971340, 4614891]);
  });
  
  it('68', () => {
    const solutions = solveEquation('-376 * x^2 + 1089866832 * x + 2634059512823848');
    assert.deepEqual(solutions, [-1568311, 4466893]);
  });
  
  it('69', () => {
    const solutions = solveEquation('145 * x^2 - 707447025 * x + 13566729261020');
    assert.deepEqual(solutions, [19253, 4859692]);
  });
  
  it('70', () => {
    const solutions = solveEquation('-440 * x^2 - 1441291720 * x + 985050474216160');
    assert.deepEqual(solutions, [-3856219, 580556]);
  });
  
  it('71', () => {
    const solutions = solveEquation('-322 * x^2 - 673406650 * x + 2890182335559288');
    assert.deepEqual(solutions, [-4218852, 2127527]);
  });
  
  it('72', () => {
    const solutions = solveEquation('199 * x^2 - 500338934 * x - 2264662631212800');
    assert.deepEqual(solutions, [-2342950, 4857216]);
  });
  
  it('73', () => {
    const solutions = solveEquation('-52 * x^2 + 259005188 * x - 55054093464760');
    assert.deepEqual(solutions, [222499, 4758370]);
  });
  
  it('74', () => {
    const solutions = solveEquation('-65 * x^2 + 360530300 * x - 496734807600915');
    assert.deepEqual(solutions, [2551557, 2995063]);
  });
  
  it('75', () => {
    const solutions = solveEquation('-34 * x^2 + 20206302 * x + 181841397158340');
    assert.deepEqual(solutions, [-2034495, 2628798]);
  });
  
  it('76', () => {
    const solutions = solveEquation('93 * x^2 - 210051474 * x - 1107442121769675');
    assert.deepEqual(solutions, [-2501575, 4760193]);
  });
  
  it('77', () => {
    const solutions = solveEquation('-442 * x^2 - 62980138 * x + 874553957560920');
    assert.deepEqual(solutions, [-1479685, 1337196]);
  });
  
  it('78', () => {
    const solutions = solveEquation('-483 * x^2 - 464527665 * x + 1259420029877142');
    assert.deepEqual(solutions, [-2165733, 1203978]);
  });
  
  it('79', () => {
    const solutions = solveEquation('-173 * x^2 + 1201588454 * x - 1782914317044765');
    assert.deepEqual(solutions, [2148235, 4797363]);
  });
  
  it('80', () => {
    const solutions = solveEquation('211 * x^2 + 1414155338 * x + 2166950296356855');
    assert.deepEqual(solutions, [-4330785, -2371373]);
  });
  
  it('81', () => {
    const solutions = solveEquation('87 * x^2 + 734366739 * x + 1513662380294274');
    assert.deepEqual(solutions, [-4864074, -3576923]);
  });
  
  it('82', () => {
    const solutions = solveEquation('-74 * x^2 + 586722320 * x - 1091391697000374');
    assert.deepEqual(solutions, [2980747, 4947933]);
  });
  
  it('83', () => {
    const solutions = solveEquation('-324 * x^2 + 580935888 * x + 1070053657117236');
    assert.deepEqual(solutions, [-1129909, 2922921]);
  });
  
  it('84', () => {
    const solutions = solveEquation('218 * x^2 + 524536558 * x - 856143092022180');
    assert.deepEqual(solutions, [-3521390, 1115259]);
  });
  
  it('85', () => {
    const solutions = solveEquation('-198 * x^2 + 204643494 * x + 3075587247239892');
    assert.deepEqual(solutions, [-3458186, 4491739]);
  });
  
  it('86', () => {
    const solutions = solveEquation('99 * x^2 - 218331630 * x - 472841602833600');
    assert.deepEqual(solutions, [-1345190, 3550560]);
  });
  
  it('87', () => {
    const solutions = solveEquation('275 * x^2 - 2331242925 * x + 4840527412195750');
    assert.deepEqual(solutions, [3635290, 4841957]);
  });
  
  it('88', () => {
    const solutions = solveEquation('54 * x^2 + 116755992 * x - 453692901615822');
    assert.deepEqual(solutions, [-4174687, 2012539]);
  });
  
  it('89', () => {
    const solutions = solveEquation('460 * x^2 - 664263000 * x + 30880589544000');
    assert.deepEqual(solutions, [48090, 1395960]);
  });
  
  it('90', () => {
    const solutions = solveEquation('93 * x^2 + 627150615 * x + 931480364461548');
    assert.deepEqual(solutions, [-4534948, -2208607]);
  });
  
  it('91', () => {
    const solutions = solveEquation('-78 * x^2 + 11926044 * x + 556462530926250');
    assert.deepEqual(solutions, [-2595625, 2748523]);
  });
  
  it('92', () => {
    const solutions = solveEquation('-309 * x^2 + 998149722 * x + 710515901594520');
    assert.deepEqual(solutions, [-600282, 3830540]);
  });
  
  it('93', () => {
    const solutions = solveEquation('-156 * x^2 + 139999704 * x + 413402009641920');
    assert.deepEqual(solutions, [-1239880, 2137314]);
  });
  
  it('94', () => {
    const solutions = solveEquation('-472 * x^2 - 793957808 * x + 1212416810326440');
    assert.deepEqual(solutions, [-2651045, 968931]);
  });
  
  it('95', () => {
    const solutions = solveEquation('-201 * x^2 + 988432776 * x - 146544471101655');
    assert.deepEqual(solutions, [153021, 4764555]);
  });
  
  it('96', () => {
    const solutions = solveEquation('-230 * x^2 + 667739910 * x + 48119401665500');
    assert.deepEqual(solutions, [-70358, 2973575]);
  });
  
  it('97', () => {
    const solutions = solveEquation('292 * x^2 - 92936884 * x - 699430954372776');
    assert.deepEqual(solutions, [-1396701, 1714978]);
  });
  
  it('98', () => {
    const solutions = solveEquation('383 * x^2 - 141629187 * x - 1790457858001160');
    assert.deepEqual(solutions, [-1985131, 2354920]);
  });
  
  it('99', () => {
    const solutions = solveEquation('423 * x^2 + 108469467 * x + 4581056865564');
    assert.deepEqual(solutions, [-203108, -53321]);
  });
  
  it('100', () => {
    const solutions = solveEquation('-420 * x^2 + 686698740 * x - 236193821481240');
    assert.deepEqual(solutions, [492018, 1142979]);
  });
  
  it('101', () => {
    const solutions = solveEquation('423 * x^2 + 2294164188 * x + 2945229426427680');
    assert.deepEqual(solutions, [-3337096, -2086460]);
  });
  
  it('102', () => {
    const solutions = solveEquation('426 * x^2 - 805519140 * x - 4801499990899200');
    assert.deepEqual(solutions, [-2542390, 4433280]);
  });
  
  it('103', () => {
    const solutions = solveEquation('-340 * x^2 - 2201893380 * x - 3485120187960680');
    assert.deepEqual(solutions, [-3722639, -2753518]);
  });
  
  it('104', () => {
    const solutions = solveEquation('22 * x^2 - 33921800 * x - 87977391531678');
    assert.deepEqual(solutions, [-1372257, 2914157]);
  });
  
  it('105', () => {
    const solutions = solveEquation('-285 * x^2 + 403917105 * x + 3296115925146000');
    assert.deepEqual(solutions, [-2765200, 4182453]);
  });
  
  it('106', () => {
    const solutions = solveEquation('309 * x^2 - 1045260480 * x + 567471620472204');
    assert.deepEqual(solutions, [679322, 2703398]);
  });
  
  it('107', () => {
    const solutions = solveEquation('249 * x^2 - 1589145390 * x + 2535483316528200');
    assert.deepEqual(solutions, [3178090, 3204020]);
  });
  
  it('108', () => {
    const solutions = solveEquation('-53 * x^2 + 70718324 * x - 23261473790276');
    assert.deepEqual(solutions, [588422, 745886]);
  });
  
  it('109', () => {
    const solutions = solveEquation('274 * x^2 - 2053427788 * x + 3717197925891450');
    assert.deepEqual(solutions, [3058237, 4436025]);
  });
  
  it('110', () => {
    const solutions = solveEquation('-22 * x^2 + 96973294 * x + 17139122136576');
    assert.deepEqual(solutions, [-170171, 4578048]);
  });
  
  it('111', () => {
    const solutions = solveEquation('84 * x^2 + 323512140 * x + 213336456311664');
    assert.deepEqual(solutions, [-3006628, -844707]);
  });
  
  it('112', () => {
    const solutions = solveEquation('469 * x^2 + 361590089 * x + 55480880166502');
    assert.deepEqual(solutions, [-559579, -211402]);
  });
  
  it('113', () => {
    const solutions = solveEquation('15 * x^2 - 3536985 * x - 34261174324080');
    assert.deepEqual(solutions, [-1398009, 1633808]);
  });
  
  it('114', () => {
    const solutions = solveEquation('395 * x^2 + 2200728675 * x + 3064780686922870');
    assert.deepEqual(solutions, [-2822707, -2748758]);
  });
  
  it('115', () => {
    const solutions = solveEquation('-315 * x^2 - 1272963510 * x - 745076991937320');
    assert.deepEqual(solutions, [-3331076, -710078]);
  });
  
  it('116', () => {
    const solutions = solveEquation('119 * x^2 - 792666854 * x + 1154494628368095');
    assert.deepEqual(solutions, [2151205, 4509861]);
  });
  
  it('117', () => {
    const solutions = solveEquation('127 * x^2 - 1221793467 * x + 2936946332195156');
    assert.deepEqual(solutions, [4698124, 4922297]);
  });
  
  it('118', () => {
    const solutions = solveEquation('-396 * x^2 - 569529576 * x + 346226478225012');
    assert.deepEqual(solutions, [-1898687, 460481]);
  });
  
  it('119', () => {
    const solutions = solveEquation('87 * x^2 - 265240206 * x - 132731802332016');
    assert.deepEqual(solutions, [-437608, 3486346]);
  });
  
  it('120', () => {
    const solutions = solveEquation('176 * x^2 - 23434752 * x - 334782052532928');
    assert.deepEqual(solutions, [-1314222, 1447374]);
  });
  
  it('121', () => {
    const solutions = solveEquation('-333 * x^2 + 133632567 * x + 1853276542210116');
    assert.deepEqual(solutions, [-2166977, 2568276]);
  });
  
  it('122', () => {
    const solutions = solveEquation('451 * x^2 - 2128778179 * x + 731075580290154');
    assert.deepEqual(solutions, [372882, 4347247]);
  });
  
  it('123', () => {
    const solutions = solveEquation('-309 * x^2 + 2386670268 * x - 4608313561362735');
    assert.deepEqual(solutions, [3833007, 3890845]);
  });
  
  it('124', () => {
    const solutions = solveEquation('409 * x^2 + 790477981 * x - 729821764894260');
    assert.deepEqual(solutions, [-2615065, 682356]);
  });
  
  it('125', () => {
    const solutions = solveEquation('192 * x^2 + 1109023872 * x + 1481163124164096');
    assert.deepEqual(solutions, [-3679684, -2096482]);
  });
  
  it('126', () => {
    const solutions = solveEquation('-429 * x^2 + 3594452862 * x - 7359554681898705');
    assert.deepEqual(solutions, [3560513, 4818165]);
  });
  
  it('127', () => {
    const solutions = solveEquation('-497 * x^2 - 353587171 * x + 8284951553019330');
    assert.deepEqual(solutions, [-4454070, 3742627]);
  });
  
  it('128', () => {
    const solutions = solveEquation('364 * x^2 + 277280640 * x - 965163405417484');
    assert.deepEqual(solutions, [-2053189, 1291429]);
  });
  
  it('129', () => {
    const solutions = solveEquation('498 * x^2 + 2065269246 * x + 2086113675990756');
    assert.deepEqual(solutions, [-2406253, -1740874]);
  });
  
  it('130', () => {
    const solutions = solveEquation('-174 * x^2 - 725626110 * x + 70026168794604');
    assert.deepEqual(solutions, [-4264634, 94369]);
  });
  
  it('131', () => {
    const solutions = solveEquation('154 * x^2 + 499478826 * x + 123024946035992');
    assert.deepEqual(solutions, [-2974828, -268541]);
  });
  
  it('132', () => {
    const solutions = solveEquation('203 * x^2 + 791289940 * x - 532663340884983');
    assert.deepEqual(solutions, [-4483259, 585279]);
  });
  
  it('133', () => {
    const solutions = solveEquation('-420 * x^2 - 1035973680 * x + 2897564269120500');
    assert.deepEqual(solutions, [-4135025, 1668421]);
  });
  
  it('134', () => {
    const solutions = solveEquation('161 * x^2 + 415719710 * x - 1425721883742975');
    assert.deepEqual(solutions, [-4534855, 1952745]);
  });
  
  it('135', () => {
    const solutions = solveEquation('29 * x^2 - 125745537 * x - 17206710154100');
    assert.deepEqual(solutions, [-132772, 4468825]);
  });
  
  it('136', () => {
    const solutions = solveEquation('-295 * x^2 - 2028250080 * x - 3417718882128260');
    assert.deepEqual(solutions, [-3919766, -2955658]);
  });
  
  it('137', () => {
    const solutions = solveEquation('423 * x^2 + 975624966 * x - 166252361598369');
    assert.deepEqual(solutions, [-2465833, 159391]);
  });
  
  it('138', () => {
    const solutions = solveEquation('-111 * x^2 + 391717779 * x - 94067064641910');
    assert.deepEqual(solutions, [259174, 3269815]);
  });
  
  it('139', () => {
    const solutions = solveEquation('-476 * x^2 - 2140714324 * x - 2405178343313480');
    assert.deepEqual(solutions, [-2308054, -2189245]);
  });
  
  it('140', () => {
    const solutions = solveEquation('385 * x^2 - 1016269100 * x + 267401923798240');
    assert.deepEqual(solutions, [296404, 2343256]);
  });
  
  it('141', () => {
    const solutions = solveEquation('492 * x^2 - 2556253404 * x + 1965826305674184');
    assert.deepEqual(solutions, [938578, 4257059]);
  });
  
  it('142', () => {
    const solutions = solveEquation('-270 * x^2 - 1310224410 * x - 1243725726524400');
    assert.deepEqual(solutions, [-3558040, -1294643]);
  });
  
  it('143', () => {
    const solutions = solveEquation('91 * x^2 + 449417150 * x + 518027799265704');
    assert.deepEqual(solutions, [-3105684, -1832966]);
  });
  
  it('144', () => {
    const solutions = solveEquation('-345 * x^2 + 847238925 * x + 2004001263594270');
    assert.deepEqual(solutions, [-1477001, 3932766]);
  });
  
  it('145', () => {
    const solutions = solveEquation('11 * x^2 - 3157341 * x - 157818102600510');
    assert.deepEqual(solutions, [-3646959, 3933990]);
  });
  
  it('146', () => {
    const solutions = solveEquation('-191 * x^2 - 1565910635 * x - 3121319959906844');
    assert.deepEqual(solutions, [-4778801, -3419684]);
  });
  
  it('147', () => {
    const solutions = solveEquation('243 * x^2 + 1076720607 * x + 1097493853228542');
    assert.deepEqual(solutions, [-2841487, -1589462]);
  });
  
  it('148', () => {
    const solutions = solveEquation('-489 * x^2 - 1999623201 * x + 1166458895779254');
    assert.deepEqual(solutions, [-4606987, 517778]);
  });
  
  it('149', () => {
    const solutions = solveEquation('320 * x^2 + 1590515200 * x + 481652997529280');
    assert.deepEqual(solutions, [-4646419, -323941]);
  });
  
  it('150', () => {
    const solutions = solveEquation('212 * x^2 - 883388100 * x + 905051914883872');
    assert.deepEqual(solutions, [1815688, 2351237]);
  });
  
  it('151', () => {
    const solutions = solveEquation('-465 * x^2 - 1338465765 * x - 885736755624750');
    assert.deepEqual(solutions, [-1847275, -1031146]);
  });
  
  it('152', () => {
    const solutions = solveEquation('-408 * x^2 + 3618895536 * x - 8023483803153336');
    assert.deepEqual(solutions, [4379039, 4490803]);
  });
  
  it('153', () => {
    const solutions = solveEquation('-375 * x^2 + 1510051125 * x + 447292882417500');
    assert.deepEqual(solutions, [-277137, 4303940]);
  });
  
  it('154', () => {
    const solutions = solveEquation('419 * x^2 + 720305833 * x - 744177550961586');
    assert.deepEqual(solutions, [-2445401, 726294]);
  });
  
  it('155', () => {
    const solutions = solveEquation('-385 * x^2 - 381205055 * x + 3123536949432900');
    assert.deepEqual(solutions, [-3386123, 2395980]);
  });
  
  it('156', () => {
    const solutions = solveEquation('284 * x^2 + 1377239256 * x + 932005951652512');
    assert.deepEqual(solutions, [-4036406, -813028]);
  });
  
  it('157', () => {
    const solutions = solveEquation('-124 * x^2 - 538722464 * x - 580120990870212');
    assert.deepEqual(solutions, [-2373149, -1971387]);
  });
  
  it('158', () => {
    const solutions = solveEquation('499 * x^2 - 9276410 * x - 2577397049190425');
    assert.deepEqual(solutions, [-2263415, 2282005]);
  });
  
  it('159', () => {
    const solutions = solveEquation('-419 * x^2 - 1360603197 * x + 3406868302421522');
    assert.deepEqual(solutions, [-4904962, 1657699]);
  });
  
  it('160', () => {
    const solutions = solveEquation('-59 * x^2 - 111593308 * x + 147243798492276');
    assert.deepEqual(solutions, [-2786906, 895494]);
  });
  
  it('161', () => {
    const solutions = solveEquation('48 * x^2 + 3836304 * x - 428433958572384');
    assert.deepEqual(solutions, [-3027821, 2947898]);
  });
  
  it('162', () => {
    const solutions = solveEquation('-84 * x^2 - 59519628 * x + 626128264467552');
    assert.deepEqual(solutions, [-3107359, 2398792]);
  });
  
  it('163', () => {
    const solutions = solveEquation('-194 * x^2 - 667460880 * x - 573068620826656');
    assert.deepEqual(solutions, [-1793284, -1647236]);
  });
  
  it('164', () => {
    const solutions = solveEquation('189 * x^2 - 875117628 * x + 603066976000839');
    assert.deepEqual(solutions, [842381, 3787871]);
  });
  
  it('165', () => {
    const solutions = solveEquation('-38 * x^2 - 20827838 * x + 8352406422000');
    assert.deepEqual(solutions, [-817101, 269000]);
  });
  
  it('166', () => {
    const solutions = solveEquation('169 * x^2 - 567252387 * x + 382448696467968');
    assert.deepEqual(solutions, [934251, 2422272]);
  });
  
  it('167', () => {
    const solutions = solveEquation('-53 * x^2 - 25268333 * x + 1000021170936820');
    assert.deepEqual(solutions, [-4588685, 4111924]);
  });
  
  it('168', () => {
    const solutions = solveEquation('232 * x^2 - 867658424 * x + 772682780178192');
    assert.deepEqual(solutions, [1462281, 2277626]);
  });
  
  it('169', () => {
    const solutions = solveEquation('69 * x^2 - 35905047 * x - 103846101451416');
    assert.deepEqual(solutions, [-993896, 1514259]);
  });
  
  it('170', () => {
    const solutions = solveEquation('-185 * x^2 + 648410755 * x + 450759719339730');
    assert.deepEqual(solutions, [-594379, 4099302]);
  });
  
  it('171', () => {
    const solutions = solveEquation('-129 * x^2 - 492171120 * x - 193886241619191');
    assert.deepEqual(solutions, [-3369179, -446101]);
  });
  
  it('172', () => {
    const solutions = solveEquation('161 * x^2 - 982018051 * x + 1463150162884704');
    assert.deepEqual(solutions, [2588163, 3511328]);
  });
  
  it('173', () => {
    const solutions = solveEquation('-467 * x^2 - 3170083329 * x - 5311340043760774');
    assert.deepEqual(solutions, [-3776914, -3011273]);
  });
  
  it('174', () => {
    const solutions = solveEquation('27 * x^2 + 96190308 * x - 109602053776215');
    assert.deepEqual(solutions, [-4470609, 908005]);
  });
  
  it('175', () => {
    const solutions = solveEquation('-178 * x^2 + 653158540 * x + 540481161618918');
    assert.deepEqual(solutions, [-695619, 4365049]);
  });
  
  it('176', () => {
    const solutions = solveEquation('111 * x^2 + 268540857 * x - 605853786193560');
    assert.deepEqual(solutions, [-3840495, 1421208]);
  });
  
  it('177', () => {
    const solutions = solveEquation('-441 * x^2 + 2114697753 * x - 2506471329970062');
    assert.deepEqual(solutions, [2142751, 2652482]);
  });
  
  it('178', () => {
    const solutions = solveEquation('-483 * x^2 + 1773119565 * x - 1598427103205772');
    assert.deepEqual(solutions, [1591011, 2080044]);
  });
  
  it('179', () => {
    const solutions = solveEquation('-138 * x^2 - 763808886 * x - 935785264360848');
    assert.deepEqual(solutions, [-3704216, -1830631]);
  });
  
  it('180', () => {
    const solutions = solveEquation('-236 * x^2 + 1307204944 * x - 1695048970954500');
    assert.deepEqual(solutions, [2071125, 3467879]);
  });
  
  it('181', () => {
    const solutions = solveEquation('358 * x^2 - 2489631524 * x + 3871932864221136');
    assert.deepEqual(solutions, [2347962, 4606316]);
  });
  
  it('182', () => {
    const solutions = solveEquation('-464 * x^2 + 626846832 * x + 392302300190432');
    assert.deepEqual(solutions, [-465463, 1816426]);
  });
  
  it('183', () => {
    const solutions = solveEquation('135 * x^2 - 189957825 * x - 1191078626098140');
    assert.deepEqual(solutions, [-2348957, 3756052]);
  });
  
  it('184', () => {
    const solutions = solveEquation('-109 * x^2 + 378455630 * x + 12169779474384');
    assert.deepEqual(solutions, [-31864, 3503934]);
  });
  
  it('185', () => {
    const solutions = solveEquation('-175 * x^2 - 397148325 * x + 709028410683600');
    assert.deepEqual(solutions, [-3445371, 1175952]);
  });
  
  it('186', () => {
    const solutions = solveEquation('143 * x^2 + 139774349 * x - 1070088105988044');
    assert.deepEqual(solutions, [-3267567, 2290124]);
  });
  
  it('187', () => {
    const solutions = solveEquation('134 * x^2 - 1116225494 * x + 2324226805240340');
    assert.deepEqual(solutions, [4115831, 4214210]);
  });
  
  it('188', () => {
    const solutions = solveEquation('50 * x^2 + 230029650 * x - 26481471484500');
    assert.deepEqual(solutions, [-4712970, 112377]);
  });
  
  it('189', () => {
    const solutions = solveEquation('43 * x^2 + 205832228 * x + 44779345290720');
    assert.deepEqual(solutions, [-4558340, -228456]);
  });
  
  it('190', () => {
    const solutions = solveEquation('-332 * x^2 - 1413317360 * x - 267227420896772');
    assert.deepEqual(solutions, [-4058663, -198317]);
  });
  
  it('191', () => {
    const solutions = solveEquation('18 * x^2 - 166433796 * x + 384529439704050');
    assert.deepEqual(solutions, [4518897, 4727425]);
  });
  
  it('192', () => {
    const solutions = solveEquation('-245 * x^2 + 455487095 * x - 103772642688050');
    assert.deepEqual(solutions, [265841, 1593290]);
  });
  
  it('193', () => {
    const solutions = solveEquation('52 * x^2 - 108516772 * x - 167045828103440');
    assert.deepEqual(solutions, [-1030495, 3117356]);
  });
  
  it('194', () => {
    const solutions = solveEquation('-157 * x^2 + 778069549 * x - 963998893295220');
    assert.deepEqual(solutions, [2474877, 2480980]);
  });
  
  it('195', () => {
    const solutions = solveEquation('401 * x^2 - 1682176554 * x + 1086486869709360');
    assert.deepEqual(solutions, [797490, 3397464]);
  });
  
  it('196', () => {
    const solutions = solveEquation('479 * x^2 + 301133888 * x - 5544914841268791');
    assert.deepEqual(solutions, [-3731181, 3102509]);
  });
  
  it('197', () => {
    const solutions = solveEquation('-271 * x^2 + 1345872449 * x - 1413636123103908');
    assert.deepEqual(solutions, [1508628, 3457691]);
  });
  
  it('198', () => {
    const solutions = solveEquation('264 * x^2 + 10632072 * x - 921283858117392');
    assert.deepEqual(solutions, [-1888322, 1848049]);
  });
  
  it('199', () => {
    const solutions = solveEquation('-464 * x^2 + 2224458688 * x - 998668448399424');
    assert.deepEqual(solutions, [501386, 4292706]);
  });
  
  it('200', () => {
    const solutions = solveEquation('-99 * x^2 - 731003031 * x - 1209142706447412');
    assert.deepEqual(solutions, [-4882236, -2501633]);
  });
});
