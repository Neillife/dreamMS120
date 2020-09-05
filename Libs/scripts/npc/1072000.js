/* Warrior Job Instructor
	Warrior 2nd Job Advancement
	Victoria Road : West Rocky Mountain IV (102020300)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100004) == 1) {
	    cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B");
	    status = 3;
	} else {
	    if (cm.getQuestStatus(100004) == 2) {
		cm.sendOk("You're truly a hero!");
		cm.safeDispose();
	    } else if (cm.getQuestStatus(100003) >= 1) {
		cm.completeQuest(100003);
		if (cm.getQuestStatus(100003) == 2) {
		    cm.sendNext("���A�A�O #b�Z�N�нm#k ���ШӪ��ܡH");
		}
	    } else {
		cm.sendOk("I can show you the way once your ready for it.");
		cm.safeDispose();
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("�ҥH�A�n�ҩ��A����O�ܡH �ܦn...")
    } else if (status == 2) {
	cm.askAcceptDecline("�ڥi�H���A�@�����|�A�ЧA�ⴤ�C");
    } else if (status == 3) {
	cm.startQuest(100004);
	cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B")
    } else if (status == 4) {
	cm.gainItem(4031008, -1);
	cm.warp(108000300, 0);
	cm.dispose();
    }
}	
