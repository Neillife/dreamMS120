/*  
 
 NPC���v:                �l�Ы_�I�q 	        
 NPC����: 		        ��XNPC
 �s�@�H�G�G�ơB
 */
 
var PreviousPage = new Array(9900007, "home_chr");//�W�@��
var status = -1;
//���ŧI��
var itemList = Array(
		//�P��ƶq�A���~ID �A�ƶq�A�ɶ�
		Array(1, 2022179, 2),//����ī�G
		Array(2, 2101120, 5),//���ǥl��U	
		Array(2, 1032167, 1),//���Ŧ���
		Array(2, 1112143, 1),//���جï]�W�P�٫�     
		Array(2, 1112178, 1),//�ڷQ���������W�P�٫� 
		Array(2, 1112177, 1),//�i�������H�W�P�٫�   
		Array(2, 1112179, 1),//�ճ��t�ϦW�P�٫�     
		Array(2, 1112167, 1),//�W�P�٫��]�쭵���ӡ^ 
		Array(2, 1112168, 1),//�W�P�٫��]�譵�a&�s�^
		Array(12, 1112127, 1, 1),//Welcome Back1��
		Array(12, 1122017, 1, 7) //���F�Y��7��
        );
//BSPQ�I�ƧI��
var ExchangeItems = Array(
		Array(1200, 5062000), //�_�ۤ��
		Array(6000, 2340000), //���֨��b
		Array(5000, 3010574), //�P���{�{���]�ߴȤl
		Array(7000, 3010454), //�R�߶�����
		Array(10000, 3010073), //�֥d���
		Array(10000, 3010453), //���ۼɭ����ߤl��
		Array(20000, 3010690), //�T����y���D��
		Array(20000, 3015121), //�v�Q���R�̴Ȥl
		Array(20000, 3015275) //��Ӷ��@�_����H���Ȥl
		);
//�������ߧI��
var MapleLeafHeart = Array(
		Array(1122024, 1122019, 10),
		Array(1122025, 1122019, 10),
		Array(1122026, 1122019, 10),
		Array(1122027, 1122019, 10),
		Array(1122028, 1122019, 10),
		
		Array(1122029, 1122024, 30),
		Array(1122030, 1122025, 30),
		Array(1122031, 1122026, 30),
		Array(1122032, 1122027, 30),
		Array(1122033, 1122028, 30),
		
		Array(1122034, 1122029, 40),
		Array(1122035, 1122030, 40),
		Array(1122036, 1122031, 40),
		Array(1122037, 1122032, 40),
		Array(1122038, 1122033, 40) 
		);
	//�����I��
var itemaa = Array(
        Array(100, 2101120, 1), //���ǥ]	
		Array(1000, 2101120, 10), 
        Array(150, 2450000, 1), //�y�H
		Array(1500, 2450000, 10), 
		Array(800, 2049401, 1), //���b��O
		Array(8000, 2049401, 10)

);
    //��K���I��
var itembb = Array(
 
        Array(1, 2340000, 2),
        Array(1, 2049401, 1), //���b��O
		Array(2, 2049400, 1), //���Ż��b��O
		Array(10, 1112763, 1),
        Array(10, 1112767, 1),
        Array(10, 1112771, 1),
        Array(10, 1112775, 1),
        Array(20, 1112127, 1), //80�w��
        Array(20, 1112956, 1) //�s���٫�
	
);
//���ܤɶ�
var itemcc = Array(
		Array(1032206, 1032205, 15),
		
		
		
		
		Array(1032207, 1032206, 15),
		
		
		
		
		Array(1032208, 1032207, 10),
		
		
		
		
		Array(1032209, 1032208, 15),
		
		
		
		
		
		
		Array(1032219, 1032209, 50) 
		);
		//�W���ɶ�
var itemdd = Array(
		Array(1022191, 1022190, 5),
		
		
		
		
		Array(1022192, 1022191, 20),
		
		
		
		
		Array(1022193, 1022192, 20),
		
		
		
		
		Array(1022215, 1022193, 20)
		
		
		
		
		);

var seleQuantity = -1, selectedItem = -1, selectedQuantity = -1, selectedTime = -1;
var �����o = "#fUI/UIWindow.img/icon/WorldUI/summary_icon/select#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var ItemId���� = 4310000;
var ItemId���� = 4001126;
var ItemId��K = 4001157;
var ExchangeType;


function start() {
	var text = "�п�ܧI������: #b\r\n"
		//text += "#L5#���#l\r\n";
		text += "#L0#���ŧI��#l\r\n";
		text += "#L11#��K���I��#l\r\n";
		text += "#L10#�����I��#l\r\n";
		text += "#L1#BSPQ�I�ƧI��#l\r\n";
		text += "#L2#�������ߤɯ�#l\r\n";
		text += "#L3#���ܦ����ɯ�#l\r\n";
		text += "#L4#�W�������ɯ�#l\r\n";
		text += "\r\n\t\t\t\t#L999#" + ttt + "��^�U��Npc\r\n";
	cm.sendSimple(text);
}

function action(mode, type, selection) { 
	//java.lang.System.err.printf("mode:%s type:%s selection:%s status:%s\r\n",mode,type,selection,status);
	if (ExchangeType == null)
		ExchangeType = selection;
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
	//��^�U��NPC
	if (selection == 999) {
		cm.dispose();
		cm.openNpc(PreviousPage[0], PreviousPage[1]);
		return;
	}
	//BSPQ�I�ƧI��
	if (ExchangeType == 1) {
		var points = cm.getQuestRecord(150001).getCustomData();
		if (status == 0) {
			var text = "";
			for (var e in ExchangeItems)
				text += "#L" + e + "##v" + ExchangeItems[e][1] + ":##t" + ExchangeItems[e][1] + "# #b(#r�ݭn: #d" + ExchangeItems[e][0] + "#b)\r\n";
			cm.sendOk("#b�I�Ƽƶq: " + points + "\r\n " + text);
		} else if (status == 1) {
			if (points < ExchangeItems[selection][0]) {
				cm.sendOk("�I�Ƥ����ݭn:" + ExchangeItems[selection][0]);
			} else {
				var deduct = ExchangeItems[selection][0];
				cm.getQuestRecord(150001).setCustomData(points-deduct);
				cm.gainItem(ExchangeItems[selection][1], 1);
				cm.sendOk("�I������: #v" + ExchangeItems[selection][1] + "#\r\n�Ѿl�I��: " + cm.getQuestRecord(150001).getCustomData());
			}
			cm.dispose();
		}
	//�������ߧI��
	} else if (ExchangeType == 2) {
		if (status == 0) {
			var text = "�п�ܧI������:\r\n";
				text += "#b\t�Ԥh\t�k�v\t�}�b��\t�s��\t���s"
			for (var e in MapleLeafHeart) {
				if (e%5==0)
					text += "\r\n\r\n";
				text += "#L" + e + "##i" + MapleLeafHeart[e][0] + ":##l";
				if (e%5==4)
					text += " #b#i4001157# x #r" + MapleLeafHeart[e][2]+ "";
			}
			cm.sendOk(text);
		} else if (status == 1) {
			if (cm.haveItem(MapleLeafHeart[selection][1], 1) && cm.haveItem(4001157, MapleLeafHeart[selection][2])) {
				cm.gainItem(4001157, -MapleLeafHeart[selection][2]);
				cm.gainItem(MapleLeafHeart[selection][1], -1);
				cm.gainItem(MapleLeafHeart[selection][0], 1);
				cm.sendOk("���ߦ��\�ɯŦ�: #b#i" + MapleLeafHeart[selection][0] + "##t" + MapleLeafHeart[selection][0] + "#");
				cm.dispose();
			} else {
				var text = "#i" + MapleLeafHeart[selection][0] + ":##b#t" + MapleLeafHeart[selection][0] + ":# #k���ɯũһݭn�����~:\r\n";
				text += "#i" + MapleLeafHeart[selection][1] + ":# + #i4001157# x "+ MapleLeafHeart[selection][2]+"#l";
				cm.sendOk(text);
				status = -1;
			}
		}
	} else if (ExchangeType == 3) { //���ܤɶ�
		if (status == 0) {
			var text = "�п�ܧI������:\r\n";
				
			for (var e in itemcc) {
				if (e%5==0)
					text += "\r\n\r\n";
				text += "#L" + e + "##i" + itemcc[e][0] + ":##l";
				if (e%5==4)
					text += " #b#i4001157# x #r" + itemcc[e][2]+ "";
			}
			cm.sendOk(text);
		} else if (status == 1) {
			if (cm.haveItem(itemcc[selection][1], 1) && cm.haveItem(4001157, itemcc[selection][2])) {
				cm.gainItem(4001157, -itemcc[selection][2]);
				cm.gainItem(itemcc[selection][1], -1);
				cm.gainItem(itemcc[selection][0], 1);
				cm.sendOk("���ߦ��\�ɯŦ�: #b#i" + itemcc[selection][0] + "##t" + itemcc[selection][0] + "#");
				cm.dispose();
			} else {
				var text = "#i" + itemcc[selection][0] + ":##b#t" + itemcc[selection][0] + ":# #k���ɯũһݭn�����~:\r\n";
				text += "#i" + itemcc[selection][1] + ":# + #i4001157# x "+ itemcc[selection][2]+"#l";
				cm.sendOk(text);
				status = -1;
			   }
			}
		} else if (ExchangeType == 4) { //�W���ɶ�
		if (status == 0) {
			var text = "�п�ܧI������:\r\n";
				
			for (var e in itemdd) {
				if (e%5==0)
					text += "\r\n\r\n";
				text += "#L" + e + "##i" + itemdd[e][0] + ":##l";
				if (e%5==4)
					text += " #b#i4001157# x #r" + itemdd[e][2]+ "";
			}
			cm.sendOk(text);
		} else if (status == 1) {
			if (cm.haveItem(itemdd[selection][1], 1) && cm.haveItem(4001157, itemdd[selection][2])) {
				cm.gainItem(4001157, -itemdd[selection][2]);
				cm.gainItem(itemdd[selection][1], -1);
				cm.gainItem(itemdd[selection][0], 1);
				cm.sendOk("���ߦ��\�ɯŦ�: #b#i" + itemdd[selection][0] + "##t" + itemdd[selection][0] + "#");
				cm.dispose();
			} else {
				var text = "#i" + itemdd[selection][0] + ":##b#t" + itemdd[selection][0] + ":# #k���ɯũһݭn�����~:\r\n";
				text += "#i" + itemdd[selection][1] + ":# + #i4001157# x "+ itemdd[selection][2]+"#l";
				cm.sendOk(text);
				status = -1;
			}
		}
	} else if (ExchangeType == 5) {
		var tiem = Array("���","����");
		var text = "";
		for (var t in tiem)
			text += "#L" + t + "#" + tiem[t] + "#l\t";
		cm.sendOk(text);
		cm.dispose();
	//���ŧI��
	} else if (ExchangeType == 0) {
		if (status == 0) {
			���� = cm.itemQuantity(ItemId����);
			var selStr = �����o + "\r\n#r�`�N�ƶ�#k�G�C�g�����y�N�|���w���ܰʳ�C\r\n�w����#v" + ItemId���� + "##b#z" + ItemId���� + "##k: " + cm.itemQuantity(ItemId����) + " ��";
			for (var i = 0; i < itemList.length; i++) {
				selStr += "\r\n#L" + i + "##i" + itemList[i][1] + ":# #b#t" + itemList[i][1] + "# " + (itemList[i][3] == null ? "" : itemList[i][3] + " ��") + "#r x" + itemList[i][2] + "#b �e#d�ݭn #v" + ItemId���� + "#x" + itemList[i][0] + "#b�f#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			var item = itemList[selection];
			if (item != null) {
				//���Żݭn�ƶq
				seleQuantity = item[0];
				//���~
				selectedItem = item[1];
				//�ƶq
				selectedQuantity = item[2];
				//���~�ɶ�
				selectedTime = item[3];
				cm.sendYesNo("�I�� #i" + selectedItem + "#x" + selectedQuantity + " �ݭn #r" + seleQuantity + "�� #v" + ItemId���� + "##k �A�T�w�I����?");
			} else {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
			}
		} else if (status == 2) {
			if (seleQuantity <= 0 || selectedItem <= 0) {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
				return;
			}
			if (cm.itemQuantity(ItemId����) >= seleQuantity) {
				if (cm.canHold(selectedItem, selectedQuantity)) {
					cm.gainItem(ItemId����, -seleQuantity);
					cm.gainItemPeriod(selectedItem, selectedQuantity, (selectedTime == null ? 0: selectedTime));
					cm.sendOk("�I�����\,�ӫ~#i" + selectedItem + ":# #b#t" + selectedItem + "##k�w�e���I�]�C");
				} else {
					cm.sendOk("�I�]�Ҧ���ص��f���@��H�W���Ŷ��~�i�H�i��I���C");
				}

			} else {
				cm.sendOk("#r�A�S�����������šC#k\r\n\r\n�I��#i" + selectedItem + ":# #b#t" + selectedItem + "##k �ݭn #r" + seleQuantity + "�� #i" + ItemId���� + "##k�C");
			}
			status = -1;
	         } 
		   
		} else if (ExchangeType == 10) {  //�����I��
		if (status == 0) {
			���� = cm.itemQuantity(ItemId����);
			var selStr = �����o + "\r\n#r�`�N�ƶ�#k�G�C�g�����y�N�|���w���ܰʳ�C\r\n�w����#v" + ItemId���� + "##b#z" + ItemId���� + "##k: " + cm.itemQuantity(ItemId����) + " ��";
			for (var i = 0; i < itemaa.length; i++) {
				selStr += "\r\n#L" + i + "##i" + itemaa[i][1] + ":# #b#t" + itemaa[i][1] + "# " + (itemaa[i][3] == null ? "" : itemaa[i][3] + " ��") + "#r x" + itemaa[i][2] + "#b �e#d�ݭn #v" + ItemId���� + "#x" + itemaa[i][0] + "#b�f#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			var item = itemaa[selection];
			if (item != null) {
				//���Żݭn�ƶq
				seleQuantity = item[0];
				//���~
				selectedItem = item[1];
				//�ƶq
				selectedQuantity = item[2];
				//���~�ɶ�
				selectedTime = item[3];
				cm.sendYesNo("�I�� #i" + selectedItem + "#x" + selectedQuantity + " �ݭn #r" + seleQuantity + "�� #v" + ItemId���� + "##k �A�T�w�I����?");
			} else {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
			}
		} else if (status == 2) {
			if (seleQuantity <= 0 || selectedItem <= 0) {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
				return;
			}
			if (cm.itemQuantity(ItemId����) >= seleQuantity) {
				if (cm.canHold(selectedItem, selectedQuantity)) {
					cm.gainItem(ItemId����, -seleQuantity);
					cm.gainItemPeriod(selectedItem, selectedQuantity, (selectedTime == null ? 0: selectedTime));
					cm.sendOk("�I�����\,�ӫ~#i" + selectedItem + ":# #b#t" + selectedItem + "##k�w�e���I�]�C");
				} else {
					cm.sendOk("�I�]�Ҧ���ص��f���@��H�W���Ŷ��~�i�H�i��I���C");
				}

			} else {
				cm.sendOk("#r�A�S�������������C#k\r\n\r\n�I��#i" + selectedItem + ":# #b#t" + selectedItem + "##k �ݭn #r" + seleQuantity + "�� #i" + ItemId���� + "##k�C");
			}
			status = -1;
	    }
	} else if (ExchangeType == 11) {  //��K���I��
		if (status == 0) {
			��K = cm.itemQuantity(ItemId��K);
			var selStr = �����o + "\r\n#r�`�N�ƶ�#k�G�C�g�����y�N�|���w���ܰʳ�C\r\n�w����#v" + ItemId��K + "##b#z" + ItemId��K + "##k: " + cm.itemQuantity(ItemId��K) + " ��";
			for (var i = 0; i < itemaa.length; i++) {
				selStr += "\r\n#L" + i + "##i" + itembb[i][1] + ":# #b#t" + itembb[i][1] + "# " + (itembb[i][3] == null ? "" : itembb[i][3] + " ��") + "#r x" + itembb[i][2] + "#b �e#d�ݭn #v" + ItemId��K + "#x" + itembb[i][0] + "#b�f#l";
			}
			cm.sendSimple(selStr);
		} else if (status == 1) {
			var item = itembb[selection];
			if (item != null) {
				//���Żݭn�ƶq
				seleQuantity = item[0];
				//���~
				selectedItem = item[1];
				//�ƶq
				selectedQuantity = item[2];
				//���~�ɶ�
				selectedTime = item[3];
				cm.sendYesNo("�I�� #i" + selectedItem + "#x" + selectedQuantity + " �ݭn #r" + seleQuantity + "�� #v" + ItemId��K + "##k �A�T�w�I����?");
			} else {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
			}
		} else if (status == 2) {
			if (seleQuantity <= 0 || selectedItem <= 0) {
				cm.sendOk("�I���X��,���pô�޲z��...");
				cm.dispose();
				return;
			}
			if (cm.itemQuantity(ItemId��K) >= seleQuantity) {
				if (cm.canHold(selectedItem, selectedQuantity)) {
					cm.gainItem(ItemId��K, -seleQuantity);
					cm.gainItemPeriod(selectedItem, selectedQuantity, (selectedTime == null ? 0: selectedTime));
					cm.sendOk("�I�����\,�ӫ~#i" + selectedItem + ":# #b#t" + selectedItem + "##k�w�e���I�]�C");
				} else {
					cm.sendOk("�I�]�Ҧ���ص��f���@��H�W���Ŷ��~�i�H�i��I���C");
				}

			} else {
				cm.sendOk("#r�A�S����������K���C#k\r\n\r\n�I��#i" + selectedItem + ":# #b#t" + selectedItem + "##k �ݭn #r" + seleQuantity + "�� #i" + ItemId��K + "##k�C");
			}
			status = -1;
	    }
	}
	
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("big5").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}