/**
*�V�u�ʦ��A�s�@�C
*�s�@��:baby_0402_85@yahoo.com.tw 
*/

importPackage(java.lang);
var th = -1;
var order = [-1,-1];
var MesosUI = "#fUI/UIWindow.img/QuestIcon/7/0#";
var SelectUI = "#fUI/UIWindow.img/QuestIcon/3/0#";
var MapleLeaf = 4001126;/*�ܼ�*/
var P = 10000;/*�ܼ�*/
var Receive = true;
/**************---
�Y��
����
�ܭ�
�޵P
�Z��
�ë�
�����
�ë�
��{
�k��
��{
�k��
*/
var equipList = [
['�Y��',//[ID,�ƶq,����,�ɯ�]
	[1002508,50,10,null],
	[1002509,100,20,1002508],
	[1002510,120,30,1002509],
	[1002511,150,50,1002510],
	[1002758,200,70,1002511],
],
['����',
	[1032040,50,20,null],
	[1032041,75,40,1032040],
	[1032042,100,70,1032041],
],
['�ܭ�',
	[1102166,70,20,null],
	[1102167,100,40,1102166],
	[1102168,130,60,1102167],
	[1102071,160,70,1102168],
	[1102198,200,90,1102071],
],
['�޵P',
	[1092030,150,10,null],
	[1092045,500,20,1092030],
	[1092046,500,20,1092030],
	[1092047,500,20,1092030],
	/*[1092057,500,100,1092045],
	[1092058,500,100,1092046],
	[1092059,500,100,1092057],*/
]
/*
],['�Z��',
1302142,1312056,1322084,1402085,1412055,1422057,1432075,1442104,1372071,1382093,1452100,1462085,1332114,1472111,1482073,1492073
],['�ë�',
1302081,1312037,1322060,1402046,1412033,1422037,1432047,1442063,1372044,1382057,1452057,1462050,1332074,1472068,1482023,1492023
]*/
];

var ItemID, ItemNum, Meso, upgrade, DisLv, Mesos;

function start() {
    action(1, 0, 0);
}

function action(m, type, s) {
    if (m == -1) {
		cm.sendOk("�U���b�Ӽ�~~");
        cm.dispose();
    } else {
        if (m == 0 && th == -1) {
            cm.dispose();
            return;
        }
        if (m == 1)
            th++;
		else
            th--;
	}
	var sel = -1;
	if (th <= sel++) {
		cm.dispose();
    } else if (th == sel++) {
		/**
		equipList[�`�C��][�����C��<0 ���W��>][���~]
		*/
		var ret  = SelectUI + "\t\t\t\t\t#b#e�i�˷R���G#h #�j #n#b";
			ret += "\t\t\t\t\t\t#e�U�C���U��#r�˳�#b/#r�Z��#b�s�@�i��";
		for (var loop = 0 ; loop < equipList.length; loop ++) {
			if (loop%2 == 0)
				ret += "\r\n"
			ret += "#L" + loop + "##d#e" + equipList[loop][0] + "#v" + equipList[loop][equipList[loop].length-1] + ":##n#l\t";
		}
		cm.sendSimple(ret);
	} else if (th == sel++) {
		order[0] = s;/**�O�� equipList[s]*/
		lol = order[0];
		var ret  = SelectUI + "\t\t\t#e#b�z�ثe�� #i"+MapleLeaf+"# ��#k�i#c"+MapleLeaf+"#�j#b��#n";
		for (var loop = 0 ; loop < equipList[order[0]].length-1; loop++) {
			if (loop%2 == 0)
				ret += "\r\n"
			ItemID = equipList[lol][loop+1][0];//���~ID
			DisLv = "Lv " + cm.Display(ItemID);//����LV
			Meso = equipList[lol][loop+1][2];//�s�@�O
			var Image = " #i" + ItemID + ":#";
			ret += "#d#L"+loop+"#"+DisLv+Image+"#r[�O��"+Meso+"�U]#n";
		}
		cm.sendSimple(ret);
	} else if (th == sel++) {
		order[1] = s;/**�O�� equipList[?][s]*/
		ItemID = equipList[order[0]][order[1]+1][0];//���~ID
		ItemNum = equipList[order[0]][order[1]+1][1];//���~ID
		Meso = equipList[order[0]][order[1]+1][2];//���~ID
		upgrade = equipList[order[0]][order[1]+1][3];//�O�_���ɯŪ��~
		DisLv = "Lv " + cm.Display(ItemID);//����LV
		Mesos = cm.getPlayer().getMeso();//�ثe����
		var ret = "#b#e�нT�{�A�ҿ�����D��O�_��:#n\r\n";
			ret += "\t#d "+DisLv+" #i"+ItemID+":##k�i#t"+ItemID+"#�j\r\n\r\n";
			ret += "#b#e�U�C�һݧ���:#n#r\r\n";
			if (upgrade != null)
				ret += "\t#i"+upgrade+":# Lv " + cm.Display(upgrade)+"\r\n";
			ret += "\t#i"+MapleLeaf+"# "+ItemNum+"�� ����\r\n";
			ret += "\t#i4031138# "+Meso+"�U Meso\r\n";
			ret += "\r\n#e#g#k���G#d���~�����b�I���i#r�O#d�j#g";
			cm.sendYesNo(ret);
	} else if (th == sel++) {
		if(!cm.haveItem(MapleLeaf, ItemNum))
			Receive = false;
		if(!cm.getMeso() >= Meso * P)
			Receive = false;
		if (upgrade != null && !cm.haveItem(upgrade, 1))
			Receive = false;
		
		if (Receive){
			cm.gainMeso(-Meso * P);
			cm.gainItem(MapleLeaf,-ItemNum);
			if (upgrade != null)
				cm.gainItem(upgrade,-1);
			cm.gainItem(ItemID,1);
			cm.sendOk("#e���}�i I �j�D�����ˬd�S������\r\n#r"+DisLv+"#i"+ItemID+":##k�i#t"+ItemID+"#�j");
			cm.dispose();
		} else {
			cm.sendOk("#e�z�����Ʃ|�������Цb�T�{�@��");
			cm.dispose();
		}			
	}
}





















