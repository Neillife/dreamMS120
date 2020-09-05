/* Bowman Job Instructor
	Hunter Job Advancement
	Warning Street : The Road to the Dungeon (106010000)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0 && cm.getQuestStatus(100001) == 1) {
	status = 3;
    }
    if (status == 0) {
	if (cm.getQuestStatus(100001) == 2) {
	    cm.sendOk("You're truly a hero!");
	    cm.dispose();
	} else if (cm.getQuestStatus(100000) >= 1) {
	    cm.completeQuest(100000);
	    if (cm.getQuestStatus(100000) == 2) {
		cm.sendNext("���A�A�O #b���R�R#k ���ШӪ��ܡH");
	    }
	} else {
	    cm.sendOk("I can show you the way once your ready for it.");
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.sendNextPrev("�ҥH�A�n�ҩ��A����O�ܡH �ܦn...")
    } else if (status == 2) {
	cm.askAcceptDecline("�ڥi�H���A�@�����|�A�ЧA�ⴤ�C");
    } else if (status == 3) {
	cm.startQuest(100001);
	cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B")
    } else if (status == 4) {
	cm.gainItem(4031010, -1);
	cm.warp(108000100);
	cm.dispose();
    }
}
