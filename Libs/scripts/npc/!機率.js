var status = -1;
var itemList = new Array(2370006,2370007,2370008,2370009,2370010,2370011,2370012);//孫子兵法經驗
var jobName = new Array(
"通用","劍士","法師","弓箭手","盜賊","海盜","狂郎勇士","魔龍導","影武者"

);//孫子兵法經驗

//覆蓋上面
itemList_ = new Array(2290248,2290249,2290250,2290251,2290252,2290253,2290254,2290255,2290256,2290257,2290258,2290259,2290260,2290261,2290262,2290263,2290264,2290265,2290266,2290267,2290268,2290269,2290270,2290271,2290272,2290273,2290274);

itemList1 = new Array(
2290000	,//	裝有熔岩的瓶子
2290001	,//	黑色雲霧製作器
2290002	,//	堅忍意志
2290003	,//	[技能書]楓葉祝福
2290004	,//	[技能書]魔力無限
2290005	,//	[技能書]龍魂之箭
2290006	,//	[技能書]挑釁
2290007	,//	[技能書]進階鬥氣
2290008	,//	[技能書]屬性強化
2290009	,//	[技能書]天使之箭
2290010	,//	[技能書]三飛閃
2290011	,//	古代冰石的粉末
2290012	,//	[技能書]究極突刺
2290013	,//	[技能書]終極之矛
2290014	,//	[技能書]防禦戰術
2290015	,//	[技能書]極冰暴風
2290016	,//	[技能書]宙斯之盾
2290017	,//	[技能書]肥肥的弱點
2290018	,//	[技能書]木妖的弱點
2290019	,//	[技能書]綠水靈的弱點
2290020	,//	
2290021	,//	
2290022	,//	
2290023	,//	
2290024	,//	
2290025	,//	
2290026	,//	[技能書]火輪舞
2290027	,//	[技能書]魔法激發
2290028	,//	[技能書]龍神之怒 
2290029	,//	[技能書]靈魂之石
2290030	,//	[技能書] 絕殺刃
2290031	//	[技能書] 隱• 鎖鏈地獄
);

GachItem = new Array(
[
[2290096, 100, true],//	[技能書]楓葉祝福 20
[2290125, 4, true]//	[技能書]楓葉祝福 30
],
[
[2290000, 10, true],//	[技能書]絕對引力 20
[2290001, 10, true],//	[技能書]絕對引力 30
[2290002, 10, true],//	[技能書]武神防禦 20
[2290003, 10, true],//	[技能書]武神防禦 30
[2290004, 10, true],//	[技能書]究極突刺 20
[2290005, 10, true],//	[技能書]究極突刺 30
[2290006, 10, true],//	[技能書]格擋 20
[2290007, 10, true],//	[技能書]格擋 30
[2290008, 10, true],//	[技能書]進階鬥氣 20
[2290009, 10, true],//	[技能書]進階鬥氣 30
[2290010, 10, true],//	[技能書]無雙劍舞 20
[2290011, 10, true],//	[技能書]無雙劍舞 30
[2290012, 1, true],//	[技能書]騎士衝擊波 20
[2290013, 10, true],//	[技能書]騎士衝擊波 30
[2290014, 10, true],//	[技能書]究極神盾 20
[2290015, 10, true],//	[技能書]究極神盾 30
[2290016, 10, true],//	[技能書]鬥氣爆發 20
[2290017, 10, true],//	[技能書]鬥氣爆發 30
[2290018, 10, true],//	[技能書]聖靈之劍 20
[2290019, 10, true],//	[技能書]聖靈之棍 20
[2290020, 10, true],//	[技能書]鬼神之擊 20
[2290021, 10, true],//	[技能書]鬼神之擊 30
[2290022, 10, true],//	[技能書]黑暗力量 20
[2290023, 10, true],//	[技能書]黑暗力量 30
],
[
2290024	,//	[技能書]魔法反射 20
2290025	,//	[技能書]魔法反射 30
2290026	,//	[技能書]核爆術 20
2290027	,//	[技能書]核爆術 30
2290028	,//	[技能書]魔力無限 20
2290029	,//	[技能書]魔力無限 30
2290030	,//	[技能書]劇毒麻痺 20
2290031	,//	[技能書]劇毒麻痺 30
2290032	,//	[技能書]閃電連擊 20
2290033	,//	[技能書]閃電連擊 30
2290034	,//	[技能書]聖盾護鎧 20
2290035	,//	[技能書]聖盾護鎧 30
2290036	,//	[技能書]炎靈地獄 20
2290037	,//	[技能書]炎靈地獄 30
2290038	,//	[技能書]召喚冰魔 20
2290039	,//	[技能書]召喚冰魔 30
2290040	,//	[技能書]火流星 20
2290041	,//	[技能書]火流星 30
2290042	,//	[技能書]寒冰地獄 20
2290043	,//	[技能書]寒冰地獄 30
2290044	,//	[技能書]召喚火炎神 20
2290045	,//	[技能書]召喚火炎神 30
2290046	,//	[技能書]暴風雪 20
2290047	,//	[技能書]暴風雪 30
2290048	,//	[技能書]天怒 20
2290049	,//	[技能書]天怒 30
2290050	,//	[技能書]天使之箭 20
2290051	,//	[技能書]天使之箭 30
],
[
2290052	,//	[技能書]會心之眼 20
2290053	,//	[技能書]會心之眼 30
2290054	,//	[技能書]龍魂之箭 20
2290055	,//	[技能書]龍魂之箭 30
2290056	,//	[技能書]弓術精通 20
2290057	,//	[技能書]弓術精通 30
2290058	,//	[技能書]牽制射擊 20
2290059	,//	[技能書]牽制射擊 30
2290060	,//	[技能書]暴風神射 20
2290061	,//	[技能書]暴風神射 30
2290062	,//	[技能書]召喚鳳凰 20
2290063	,//	[技能書]召喚鳳凰 30
2290064	,//	[技能書]念力集中 20
2290065	,//	[技能書]念力集中 30
2290066	,//	[技能書]弩術精通 20
2290067	,//	[技能書]弩術精通 30
2290068	,//	[技能書]黑暗狙擊 20
2290069	,//	[技能書]黑暗狙擊 30
2290070	,//	[技能書]光速神弩 20
2290071	,//	[技能書]光速神弩 30
2290072	,//	[技能書]召喚銀隼 20
2290073	,//	[技能書]召喚銀隼 30
2290074	,//	[技能書]必殺狙擊 20
2290075	,//	[技能書]必殺狙擊 30
2290076	,//	[技能書]瞬身迴避 20
2290077	,//	[技能書]瞬身迴避 30
2290078	,//	[技能書]飛毒殺 20
2290079	,//	[技能書]飛毒殺 30
2290080	,//	[技能書]挑釁 20
2290081	,//	[技能書]挑釁 30
2290082	,//	[技能書]忍影瞬殺 20
2290083	,//	[技能書]忍影瞬殺 30
2290084	,//	[技能書]三飛閃 20
2290085	,//	[技能書]三飛閃 30
2290086	,//	[技能書]忍術風影 20
2290087	,//	[技能書]忍術風影 30
2290088	,//	[技能書]無形鏢 20
2290089	,//	[技能書]無形鏢 30
2290090	,//	[技能書]瞬步連擊 20
2290091	,//	[技能書]瞬步連擊 30
2290092	,//	[技能書]致命暗殺 20
2290093	,//	[技能書]致命暗殺 30
2290094	,//	[技能書]煙霧彈 20
2290095	,//	[技能書]煙霧彈 30
],
[
2290097	,//	[技能書]魔龍降臨 20
2290098	,//	[技能書]魔龍降臨 30
2290099	,//	[技能書]元氣彈 20
2290100	,//	[技能書]元氣彈 30
2290101	,//	[技能書]鬥神降世 20
2290102	,//	[技能書]閃．爆破 20
2290103	,//	[技能書]閃．爆破 30
2290104	,//	[技能書]閃．索命 20
2290105	,//	[技能書]閃．索命 30
2290106	,//	[技能書]閃．連殺 20
2290107	,//	[技能書]閃．連殺 30
2290108	,//	[技能書]最終極速 20
2290109	,//	[技能書]最終極速30 30
2290110	,//	[技能書]時間置換 20
2290111	,//	[技能書]時間置換 30
2290112	,//	[技能書]瞬•冰火連擊 20
2290113	,//	[技能書]瞬•冰火連擊 30
2290114	,//	[技能書]砲台章魚王 20
2290115	,//	[技能書]海鷗特戰隊 20
2290116	,//	[技能書]海鷗特戰隊 30
2290117	,//	[技能書]瞬•迅雷 20
2290118	,//	[技能書]瞬•迅雷 30
2290119	,//	[技能書]海盜加農炮 20
2290120	,//	[技能書]海盜加農炮 30
2290121	,//	[技能書]海盜魚雷 20
2290122	,//	[技能書]海盜魚雷 30
2290123	,//	[技能書]心靈控制 20
2290124	,//	[技能書]精準砲擊 20
],
[
2290126	,//	[技能書]終極攻擊 20
2290127	,//	[技能書]終極攻擊 30
2290128	,//	[技能書]攻擊戰術 20
2290129	,//	[技能書]攻擊戰術 30
2290130	,//	[技能書]靈魂戰鬥 20
2290131	,//	[技能書]靈魂戰鬥 30
2290132	,//	[技能書]終極之矛 20
2290133	,//	[技能書]終極之矛 30
2290134	,//	[技能書]防禦戰術 20
2290135	,//	[技能書]防禦戰術 30
2290136	,//	[技能書]極冰暴風 20
2290137	,//	[技能書]極冰暴風 30
2290138	,//	[技能書]宙斯之盾 20
2290139	,//	[技能書]宙斯之盾 30
],
[
2290140	,//	[技能書]四連殺20
2290141	,//	[技能書]四連殺30
2290142	,//	[技能書]火輪舞20
2290143	,//	[技能書]火輪舞30
2290144	,//	[技能書]魔法激發20
2290145	,//	[技能書]魔法激發30
2290146	,//	[技能書]烈焰爆擊20
2290147	,//	[技能書]烈焰爆擊30
2290148	,//	[技能書]龍神之怒20
2290149	,//	[技能書]龍神之怒30
2290150	,//	[技能書]靈魂之石20
2290151	,//	[技能書]龍神的祝福20
2290152	,//	[技能書]龍神的祝福30
],
[
2290153	,//	[技能書]狂刃風暴20
2290154	,//	[技能書] 雙刃旋 20
2290155	,//	[技能書] 替身術 30
2290156	,//	[技能書] 翔飛落葉斬 20
2290157	,//	[技能書] 飛毒殺-改 30
2290158	,//	[技能書] 怪物大爆炸 30
2290159	,//	[技能書] 穢土轉生 30
2290160	,//	[技能書] 幻影替身 30
2290161	//	[技能書] 荊棘特效 30
]
);


function action(mode, type, selection) {
    if (mode == 1) {
		status++;
    } else {
		cm.dispose();
		return ;
    }
    if (status == 0) {
		/*var 機率 = 10;
		//var rand_ = Math.floor(Math.random() * 100);
		//cm.gainRewardItemq(6);
		//cm.gainRewardItemq(80)
		var tessa = "";
		var 測試中獎 =0;
		var 測試共辜 =0;
		for (var q = 0; q < 100; q++) {//次數
			tessa  = cm.gainRewardItemqss(機率);
			if (tessa == "1 stop")
				測試中獎 += 1;
			else
				測試共辜 += 1;
				
		}
		
		var sum中獎1 = 0;
		var sum共辜1 = 0;
		for (var i = 0; i<100; i++){
			var rand_T = Math.floor(Math.random() * 100)+1;
			if (rand_T <= 機率)
				sum中獎1 += 1;
			else 
				sum共辜1 +=1;

		}
		cm.playerMessage(5, "sum中獎:" + 測試中獎 + " sum共辜:" + 測試共辜);
		cm.playerMessage(5, "sum中獎:" + sum中獎1 + " sum共辜:" + sum共辜1);

		cm.dispose();*/
	if (cm.haveItem(5220040, 10001)) {
		var NoText = "";
		for (var q = 0; q < GachItem.length; q++) {
			NoText += "#r#L" + q +"#"+ GachItem[q][0][0] +"#k 職業類型: #b"+jobName[q]+"\r\n";
		}
	} else {
		cm.sendOk("你無法轉淡。");
		cm.safeDispose();
	}
	cm.sendNext(NoText);
    } else if (status == 1) {
		var msg ="";
		for (var v = 0; v < GachItem[selection].length; v++) { // [類型], [技能書, 機率, 上廣播]
			if (v % 2 == 0)
				msg += "\r\n";
				msg += "#v" + GachItem[selection][v][0] + ":##t" + GachItem[selection][v][0] + ":#  ";
		}
		cm.sendYesNo("本機台擁有 #e#r" + GachItem[selection].length+ "#k#n 個\r\n" + msg);
		s = selection;
	} else if (status == 2) {
		var item;
		var gain = false;
		/*for(var i = 0 ; i < GachItem[s].length ; i++){
			var GItem = GachItem[s][i];//
			var RandomI = Math.floor(Math.random() * GItem[1]);
			cm.playerMessage(GachItem[s][i] +" "+RandomI + " " +GItem[0] +" "+GItem[1]);
			if (RandomI == 2) {
				item = cm.gainGachaponItem(GItem[0], 1 , GItem[2]);
				gain = true;
				break;
			}
		}*/
		var i = 24;
		var RandomI = Math.floor(Math.random() * i);// 0 - 24
		
		var TTT = 0;
		for (var a = 0; a < i; a++){
			cm.playerMessage(GachItem[s][a][1]);
		if (GachItem[s][a][2] == RandomI){
			TTT += 1;
			
			
		}
		}
		cm.sendOk("共辜...機率: " + RandomI);
		cm.safeDispose();/*
		if(!gain){
			cm.sendOk("共辜...機率: " + GItem[1]);
		}
		if (item != -1) {
			cm.gainItem(5220040, -1);
			cm.sendOk("您已獲得 #b#t" + item + "##i" + item + "##k");
		} else {
			cm.sendOk("檢查一下背包是否已滿。");
		}
		cm.safeDispose();*/
	}	
}
