/* Arec
	Thief 3rd job advancement
	El Nath: Chief's Residence (211000001)

	Custom Quest 100100, 100102
	�s��
*/

var status = -1;
var job;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    cm.sendOk("Make up your mind and visit me again.");
	    cm.safeDispose();
	    return;
	}
	status--;
    }

    if (status == 0) {
	if (!(cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432)) {
	    cm.sendOk("�A�n�I��ڦ�����Ʊ���");
	    cm.safeDispose();
	    return;
	}
	if ((cm.getJob() == 410 || cm.getJob() == 420 || cm.getJob() == 432) && cm.getPlayerStat("LVL") >= 70 && (cm.getJob() == 432 || cm.getPlayerStat("RSP") <= (cm.getPlayerStat("LVL") - 70) * 3)) {
	    if (cm.getQuestStatus(100100) == 1){ //�}�l
		cm.warp(100000201);
		cm.sendOk("�^�h��#b�F�J�|#k. �L�|���U�A.");
		cm.dispose();
            } else if (cm.getQuestStatus(100101) == 2 && cm.haveItem(4031057)) { //����
                cm.sendNext("����...�ݼˤl���Q����#b�F�J�|#k���A�����ȤF�C�ڴN�۫H�A������C���A���ӨS���ѰO�٦��ĤG���q������a�H�b�i��ĤG���q�����礧�e�A���ⶵ��浹�ڧa�C");
            } else if (cm.getQuestStatus(100102) == 1) { //�}�l
		cm.warp(211040401, 0);
                cm.sendOk("�b#b��Ǵ��q - �B�쳷��#k�����#r���t�����Y#k�A�B�o�{�̭������t���Y");
                cm.dispose();
	    } else {
		cm.sendYesNo("\r�A�n�I��ڦ�����Ʊ��ܡH�@...�A�Q�i��T��A������j��#b�s��#k�ƶܡH��M�Χڪ��O�q�i�H���A��j�A���O�b�o���e�ڥ����F�ѧA�I�X�F�h�֪��V�O�C��{�b����ӧ�ڪ��~���H�ܦh�A�ӯ������ҩ��ۤv�T��ܱj�j���i�̫o�S���X��...���ˡH�N��ܧx���A�]�n�ոլݶܡH");
	    }
	} else {
	    cm.sendOk("���a���ŹF�� 70 ��, �åB�ⵥ�� 70 �ūe�Ҧ��ޯ��I���t��");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	if(cm.getPlayer().getJob() % 10 != 0 && cm.getPlayer().subcategory != 1){
	    cm.dispose();
	}
	if (cm.getQuestStatus(100102) == 2) { //����
	    cm.changeJob(cm.getPlayer().getJob() + 1);
	    cm.sendOk("�A�ܱo��[�j�j�F!");
	    cm.dispose();
	} else if (cm.getQuestStatus(100101) == 2) { //����
	    if(cm.haveItem(4031057)){
		cm.sendNext("�n�I�u�ѤU�ĤG���q�����դF�C�p�G������Q�q�L�o�Ӵ��աA�A�N�i�H������i�r���k�v�C�b#b��Ǵ��q - �B�쳷��#k���t�a�̡A�������t�����Y�A�ǻ��Y���H�ѩ^�t�ۤ@�˯S�����~�A�N�i�H���ը��H�����z�A�A�N�h�ݬݧa�I");
	    } else {
		cm.sendOk("�A�S��#b�O�q����#k");
		cm.dispose();
	    }
	} else {
	    cm.sendAcceptDecline("���O���٥i�H���A��j�A�A�Q�n�����D�Զ�?");
	}
    } else if (status == 2) {
		if (cm.getQuestStatus(100101) == 2) { //����
			if(cm.haveItem(4031057)){
			cm.startQuest(100102);
			cm.gainItem(4031057,-1);
			cm.sendNext("��X�S���~�����t�����Y��A���T�ø����a�^���t�۪����D�C�p�G�A�^�������׬O���T���A����t�۴N�|���A#b���z����#k�C�⨺�Ӷ��害�ӵ��ڡA�ڴN�|�{�P�A�A�åB��A���ɬ���j���k�v�C�[�o�a�I");
			cm.dispose();
			} else {
			cm.sendOk("�A�S��#b�O�q����#k");
			cm.dispose();
			}
		} else {
			cm.startQuest(100100);
			cm.sendOk("�{�b�A�^�h��#b�F�J�|#k. �L�|���U�A.");
			cm.dispose();
		}

    }
}
