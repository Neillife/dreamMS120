/*
	Thief Job Instructor - Thief's Construction Site (108000400)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
	if (cm.haveItem(4031013, 30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100010);
	    cm.startQuest(100011);
	    cm.sendOk("�w�g�o��F#b#t4031013#30��#k�C�F�`�ڡC��A�������A#r�F�J�|#k�]�P�쥨�j���߮��C�����n������{���C�A���O�q�٫ܮz");
	} else {
	    cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B")
	    cm.safeDispose();
	}
    } else if (status == 1) {
	cm.warp(103000003, 0);
	cm.gainItem(4031012, 1);
	cm.dispose();
    }
}	
