/* Aura
 * 
 * Adobis's Mission I: Unknown Dead Mine (280010000)
 * 
 * Zakum PQ NPC (the one and only)
 */

var status = -1;
var selectedType;
var scrolls;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	cm.sendSimple("�٦������ժ��a���?#b#l\r\n#L1#����۪����q���ӤF#l\r\n#L2#�Q�����ȱq�o�̥X�h!#l");
    } else if (status == 1) {
	selectedType = selection;
	if (selection == 0) {
	    cm.sendNext("To reveal the power of Zakum, you'll have to recreate its core. Hidden somewhere in this dungeon is a \"Fire Ore\" which is one of the necessary materials for that core. Find it, and bring it to me.\r\n\r\nOh, and could you do me a favour? There's also a number of Paper Documents lying under rocks around here. If you can get 30 of them, I can reward you for your efforts.")
	    cm.safeDispose();
	} else if (selection == 1) {
	    if (!cm.haveItem(4001018)) { //documents
		cm.sendNext("�нT�w���W��#b���۪����q")
		cm.safeDispose();
	    } else {
		if (!cm.haveItem(4001015, 30)) { //documents
		    cm.sendYesNo("#b���۪����q 1��#k���M�w�g���ӤF�A���O�o�S��#b�^�a���b���D�@!�����̦����������F��N�O�o�Ƕ�?");
		    scrolls = false;
		} else {
		    cm.sendYesNo("#b���۪����q 1��#k���M�w�g���ӤF�A���O�o�S��#b�^�a���b���D�@!�����̦����������F��N�O�o�Ƕ�?");
		    scrolls = true;
		}
	    }
	} else if (selection == 2) {
	    cm.sendYesNo("�A�T�w�n���}�H �p�G�A�O�����A�A�������]�N�Q�ǰe�X�h�C")
	}
    } else if (status == 2) {
	var eim = cm.getEventInstance();
	if (selectedType == 1) {
				
	    cm.gainItem(4001018, -1);
	    if (scrolls) {
		cm.gainItem(4001015, -30);
	    }
	    //give items/exp
	    cm.givePartyItems(4031061, 1);
	    if (scrolls) {
		cm.givePartyItems(2030007, 5);
		cm.givePartyExp(20000);
	    } else {
		cm.givePartyExp(12000);
	    }
				
	    //clear PQ

	    if (eim != null) {
	    	eim.finishPQ();
	    }
	    cm.dispose();
	} else if (selectedType == 2) {
	if (eim != null) {
	    if (cm.isLeader())
		eim.disbandParty();
	    else
		eim.leftParty(cm.getChar());
	} else {
		cm.warp(280090000, 0);
	}
	    cm.dispose();
	}
    }
}