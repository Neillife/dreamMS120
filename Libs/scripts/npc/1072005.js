/**
	Magician Job Instructor - Magician's Tree Dungeon (108000200)
**/

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
    if (status == 0) {
	if (cm.haveItem(4031013,30)) {
	    cm.removeAll(4031013);
	    cm.completeQuest(100007);
	    cm.startQuest(100008);
	    cm.sendOk("�w�g�o��F#b#t4031013#30��#k�C�F�`�ڡC��A�������A#r�~��#k�]�P�쥨�j���߮��C�����n������{���C�A���O�q�٫ܮz");
	} else {
	    cm.sendOk("�е��� #b30 #t4031013##k. ���A�n�B")
	    cm.dispose();
	}
    } else if (status == 1) {
	cm.gainItem(4031012, 1);
	cm.warp(101020000, 0);
	cm.dispose();
    }
}	
