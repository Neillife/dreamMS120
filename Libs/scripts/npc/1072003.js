/* Thief Job Instructor
	Thief 2nd Job Advancement
	Victoria Road : Construction Site North of Kerning City (102040000)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0 && cm.getQuestStatus(100010) == 1) {
	status = 3;
    }
    if (status == 0) {
	if (cm.getQuestStatus(6141) == 1) {
	    var ddz = cm.getEventManager("DLPracticeField");
	    if (ddz == null) {
		cm.sendOk("Unknown error occured");
		cm.safeDispose();
	    } else {
		ddz.startInstance(cm.getPlayer());
		cm.dispose();
	    }
	} else if (cm.getQuestStatus(100010) == 2) {
	    cm.sendOk("You're truly a hero!");
	    cm.safeDispose();
	} else if (cm.getQuestStatus(100009) >= 1) {
	    cm.completeQuest(100009);

	    if (cm.getQuestStatus(100009) == 2) {
		cm.sendNext("���A�A�O #b�F�J�|#k ���ШӪ��ܡH");
	    }
	} else {
	    cm.sendOk("I can show you the way once your ready for it.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.sendNextPrev("�ҥH�A�n�ҩ��A����O�ܡH �ܦn...")
    } else if (status == 2) {
	cm.askAcceptDecline("�ڥi�H���A�@�����|�A�ЧA�ⴤ�C");
    } else if (status == 3) {
	cm.startQuest(100010);
	cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B")
    } else if (status == 4) {
	cm.gainItem(4031011, -1);
	cm.warp(108000400, 0);
	cm.dispose();
    }
}	
