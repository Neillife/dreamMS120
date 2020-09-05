/* Dark Lord
	Thief Job Advancement
	Victoria Road : Thieves' Hideout (103000003)

	Custom Quest 100009, 100011
	�s��
*/

var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
	cm.sendOk("You know there is no other choice...");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
 	if (cm.getJob() >= 400 && cm.getJob() <= 434 && cm.getQuestStatus(2351) == 1) {
	    cm.forceCompleteQuest(2351);
	    cm.gainItem(1032076,1); //owl earring
	}
	if (cm.getJob() == 0) {
	    if (cm.getPlayerStat("LVL") >= 10 && cm.getJob() == 0)
		cm.sendNext("�A�n��¾�����@�� #r�s��#k�H");
	    else {
		cm.sendOk("Train a bit more and I can show you the way of the #rThief#k.")
		cm.dispose();
	    }
	} else {
	    if (cm.getPlayerStat("LVL") >= 30 && cm.getJob() == 400) {
		if (cm.getQuestStatus(100009) >= 1) {
		    cm.completeQuest(100011);
		    if (cm.getQuestStatus(100011) == 2) {
			status = 20;
			cm.sendNext("�ڬݨ�A�����F���աA�Q�n�~����¾���I�U�@���I");
		    } else {
			if (!cm.haveItem(4031011)) {
			    cm.gainItem(4031011, 1);
			}
			cm.warp(1020400000,9);
			cm.sendOk("�Хh�� #b�s����¾�Щx#k")
			cm.dispose();
		    }
		} else {
		    status = 10;
		    cm.sendNext("�A�w�g�i�H��¾�F�A�n��¾���I�U�@���C");
		}
	    } else {
		// <>---------------�T����----------------------
		    if (cm.getQuestStatus(100100) == 1) {
			cm.sendOk("�ݰ_�ӧA�Q���j���A�Y�O�n�T�઺�ܡA�Ш�#b�������Ŷ�#k���˧ڪ������A�åB��#b�²�#k�a�^�ӵ���");
			cm.completeQuest(100100);//��������
			cm.startQuest(100101);//�������
			cm.dispose();
		    } else if (cm.getQuestStatus(100101) == 1) {
			if(cm.haveItem(4031059)){ //�²�
			    if(cm.canHold(4031057)){
				cm.sendOk("���i��...���M���˧ڪ������A���^�F#b�²�#k�I�n...�q�L�o�Ӧ���A�i�H�R���ҩ��A����O�C�H�A�ثe���O�q�A�����T��O���|�����D���C���Ӭ��w���A#b�O�q����#k�A���۳o�Ӷ���A�^��R�Ǵ��q��#b�нm#k���̥i�H�i��ĤG���q�����աC���򯬧A���Q�����T��...");
				cm.gainItem(4031059,-1);
				cm.gainItem(4031057,1);//�O�q����
				cm.completeQuest(100101);//��������
			    } else {
				cm.sendOk("�о�z���~��!");
			    }
			} else {
			    cm.warp(105040305);
			    cm.sendOk("�кɧ֨�#b�������Ŷ�#k���˧ڪ������A�åB��#b�²�#k�a�^�ӵ���!");
			}
			cm.dispose();
		    } else if (cm.getQuestStatus(100101) == 2) {
			if(!cm.haveItem(4031057)){
			    cm.sendOk("��#b�O�q����#k�d��F��?�S���Y�A�ڦA���A");
			    cm.gainItem(4031057,1);
			}else{
			    cm.warp(211000001,0);
			    cm.sendOk("����h����ѧa�I");
			}
			cm.dispose();
		// <>---------------�T����----------------------
	    	    } else {
			cm.sendOk("�|�����o��¾����I");
			cm.dispose();
		    }
		// <>---------------------------------------------
	    }
	}
    } else if (status == 1) {
	cm.sendNextPrev("�@����¾�F�N����Ϯ��A�p�G���Q��¾���I�W�@���C");
    } else if (status == 2) {
	cm.sendYesNo("�A�u���n�����@�� #r�s��#k�H");
    } else if (status == 3) {
	if (cm.getJob() == 0) {
	    cm.resetStats(4, 25, 4, 4);
	    cm.expandInventory(1, 4);
	    cm.expandInventory(4, 4);
	    cm.changeJob(400); // THIEF
 	    if (cm.getQuestStatus(2351) == 1) {
		cm.forceCompleteQuest(2351);
		cm.gainItem(1032076,1); //owl earring
	    }
	}
	cm.gainItem(1332063,1);
	cm.gainItem(1472000,1);
	cm.gainItem(2070015, 500);
	cm.sendOk("So be it! Now go, and go with pride.");
	cm.dispose();
    } else if (status == 11) {
	cm.sendNextPrev("�A�i�H��ܧA�n��¾�����@�� #r���#k or #r�L�s#k.");
    } else if (status == 12) {
	cm.askAcceptDecline("���O�ڥ��������էA�A�A�ǳƦn�F�ܡH");
    } else if (status == 13) {
	cm.startQuest(100009);
	cm.gainItem(4031011, 1);
	cm.sendOk("�Хh�� #b�s����¾�Щx#k �L�|���U�A��");
	cm.dispose();
    } else if (status == 21) {
	cm.sendSimple("�A�Q�n��������H#b\r\n#L0#���#l\r\n#L1#�L�s#l#k");
    } else if (status == 22) {
	var jobName;
	if (selection == 0) {
	    jobName = "���";
	    job = 410; // ���
	} else {
	    jobName = "�L�s";
	    job = 420; // �L�s
	}
	cm.sendYesNo("�A�u���n�����@�� #r" + jobName + "#k?");
    } else if (status == 23) {
	cm.changeJob(job);
	cm.gainItem(4031012, -1);
	cm.sendOk("��¾���\�I�Хh�}�ФѤU�a�C");
	cm.dispose();
    }
}	
