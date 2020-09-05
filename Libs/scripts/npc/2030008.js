var status;

var mapId = 211042300;

var stage;

var teethmode;



function start() {

    status = -1;

    action(1, 0, 0);

}



function action(mode, type, selection) {

    if (mode == 0 && status == 0) {

        cm.dispose();

        return;

    }

    if (mode == 1) {

        status++;

    } else {

        if (status == 3) {

            cm.sendNext("�p�G�Q���դF�i�H�ӧ�ڡI");

            cm.dispose();

        }



        status--;

        cm.removeAll(4001015);

        cm.removeAll(4001016);

        cm.removeAll(4001018);

    }

    if (status == 0) {

        if (cm.getPlayerStat("LVL") >= 50) {

            if (cm.getQuestStatus(100200) != 2 && cm.getQuestStatus(100200) != 1) {

                cm.startQuest(100200);

                cm.sendOk("�A�Q�D�Դݼɪ��]�����ȶܡH  ��K�K�C��ı�o�A����O�Ӿ�o���ȡC���O�o���e�A�A���������ڵ��A�����ȡC�n�p���I�C");

                cm.dispose();

                return;

            } else if (cm.getQuestStatus(100201) == 1) {

                // if they have gold teeth and the other items, they are good to go

                teethmode = 1;

                cm.sendNext("�A�S���ڻݭn�����~�ܡI");

            } else {

                if (cm.haveItem(4001109)) {

                    cm.sendSimple("�A�Q�D�Ԩ��@���q�H #b\r\n#L0#�o�q�լd (�Ĥ@���q)#l\r\n#L1#�ݼɪ��]�g�c�լd (�ĤG���q)#l\r\n#L2#�ШD���� (�ĤT���q)#l\r\n#L3#�i�h���ݼɪ��]#l\r\n#L4#���L���� (�ݭn���)#l");

					} else {

                    cm.sendSimple("�A�Q�D�Ԩ��@���q�H #b\r\n#L0#�o�q�լd (�Ĥ@���q)#l\r\n#L1#�ݼɪ��]�g�c�լd (�ĤG���q)#l\r\n#L2#�ШD���� (�ĤT���q)#l\r\n#L4#���L���� (�ݭn���)#l");					}

            }

            if (cm.getQuestStatus(100201) == 2) { // They're done the quests

                teethmode = 2;

            }

        } else {

            cm.sendOk("���ӧA�ثe�����p�A�A����i��o�����ȡA��A�ܱj���ɭԡA�A�ӧ�ڧa�I");

            cm.dispose();

        }

    } else if (status == 1) {

        //quest is good to go.

        // if they're working on this quest, he checks for items.

        if (teethmode == 1) {

            // check for items

            if (cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest

                if (cm.canHold(4001017)) {

                    cm.removeAll(4031061);

                    cm.removeAll(4031062);

                    cm.gainItem(4000082, -30);

                    cm.gainItem(4001017, 5);

                    cm.sendNext("�M�Ҧn�F�C �ݨ쥪�䪺���F�ܡH���N�O�q���ݼɪ��]���x�����C ���L�A�ݭn #b#t4001017##k �~��i�J�̭��C���ڬݬݦ��h�֤H��i�J�쨺�Ӯ��ƪ��a��H");

                    cm.completeQuest(100201);

                    cm.completeQuest(100200);

                } else {

                    cm.sendNext("��H�A�T�w�A���������I�]�Ŷ��ܡH�ЦA�ˬd�@�U�C");

                }

                cm.dispose();

            } else { // go get more

                cm.sendNext("�A�٨S���a�ӧڻݭn���F��ܡH");

                cm.dispose();

            }

            return;

        }

        if (selection == 0) { //ZPQ

            if (cm.getParty() == null) { //no party

                cm.sendNext("�A�{�b�٨S���@�Ӳն��A�вն���A�M�ڽ͸ܡC");

                cm.safeDispose();

                return;

            } else if (!cm.isLeader()) { //not party leader

                cm.sendNext("�A���O�ն����A�����A���ն����M�ڽ͸ܡC");

                cm.safeDispose();

                return;

            } else {

                //check each party member, make sure they're above 50 and still in the door map

                //TODO: add zakum variable to characters, check that instead; less hassle

                var party = cm.getParty().getMembers();

                mapId = cm.getMapId();

                var next = true;

                for (var i = 0; i < party.size(); i++) {

                    if ((party.get(i).getLevel() < 50) && (party.get(i).getMapId() != mapId)) {

                        next = false;

                    }

                }

                if (next) {

                    //all requirements met, make an instance and start it up

                    var em = cm.getEventManager("ZakumPQ");

                    if (em == null) {

                        cm.sendOk("�ڤ������A�i�J�o�ӥ������@�ɡA�]���޲z���٨S���ǳƦn�}��C");

                    } else {

			var prop = em.getProperty("started");

			if (prop.equals("false") || prop == null) {

			    em.startInstance(cm.getParty(), cm.getMap());

                        } else {

                            cm.sendOk("�t�@�Ӳն��w�g�}�l�F�լd���ȡA�еy��A�ӡC");

                        }

                    }

                    cm.dispose();

                } else {

                    cm.sendNext("�нT�O�A�Ҧ��ն������F��50�ťH�W�C");

                    cm.dispose();

                }

            }

        } else if (selection == 1) { //Zakum Jump Quest

            stage = 1;

            if (cm.haveItem(4031061) && !cm.haveItem(4031062)) {

                // good to go

                cm.sendYesNo("�A�w�g���\�q�L�F�Ĥ@���q�C�A�٦��ܪ������~���F�ݼɪ��]�����x�C�ҥH�A�A�Q�n�D�ԤU�@�Ӷ��q�F�ܡH");

            } else {

                if (cm.haveItem(4031062)) {

                    cm.sendNext("�A�w�g�o��F#t4031062#�A�ҥH�A���ΦA�D�Ԧ����q�F�C");

                } else {

                    cm.sendNext("�Ч����W�@���q�����ȦA�ӬD�Ԧ����q�C");

                }

                cm.dispose();

            }

        } else if (selection == 2) { //Golden Tooth Collection

            stage = 2;

            if (teethmode == 2 && cm.haveItem(4031061) && cm.haveItem(4031062)) {

                // Already done it once, they want more

                cm.sendYesNo("�p�G�A�Q�o���h��#b���K����#k�A �A�ݭn���� #b30 ���L�ͥᥢ������#k�C �A����h�������n���ڶܡH");

            } else if (cm.haveItem(4031061) && cm.haveItem(4031062)) {

                // check if quest is complete, if so reset it (NOT COMPLETE)

                cm.sendYesNo("�n�a�A �A�w�g�����F���������q�C  �{�b�A �V�O�@�I�ڥi�H���A�o��i�J�ݼɪ��]���x�һݭn�� ���K�����C ���O�A �ڪ������̪��I�k�C  �A���L�@�Ӥ���b�_�I�q�@�ɪ��G�ƶܡH  �@�A��ť���L�̦ͭ��X�������C�ڻݭn�A��� #b30 ���L�ͥᥢ������#k �C�o�˧ڴN�i�H�ۤv�s�y�@�ǰ����C�M��ڥi�H���A����A�Q�n�����~\r\n���ȭn�D�G\r\n#i4000082##b x 30 ��");

            } else {

                cm.sendNext("�Ч����W�@���q�����ȦA�ӬD�Ԧ����q�C");

                cm.dispose();

            }

        } else if (selection == 3) { // Enter the center of Lava, quest

            var dd = cm.getEventManager("FireDemon");

            if (dd != null && cm.haveItem(4001109)) {

                dd.startInstance(cm.getPlayer());

            } else {

                cm.sendOk("�Ȯɤ���i�J�C");

            }

            cm.dispose();

        } else if (selection == 4) {

            if (cm.getQuestStatus(100200) == 2) {

                cm.sendOk("�A�w�g�����F�o�ӥ��ȡA�i�榹�ާ@�C");

                cm.dispose();

            } else {

                cm.sendYesNo("�A�Q���R�ڡH�����A�i�H�ڡI���A�������� #e300,000,000#n �����A�ڴN�i�H���A�������L���ȡC");

                status = 3;

            }

        }

    } else if (status == 2) {

        if (stage == 1) {

            cm.warp(280020000, 0); // Breath of Lava I

            cm.dispose();

        } else if (stage == 2) {

            if (teethmode == 2) {

                if (cm.haveItem(4031061, 1) && cm.haveItem(4031062, 1) && cm.haveItem(4000082, 30)) { // take away items, give eyes of fire, complete quest

                    if (cm.canHold(4001017)) {

                        cm.gainItem(4031061, -1);

                        cm.gainItem(4031062, -1);

                        cm.gainItem(4000082, -30);

                        cm.gainItem(4001017, 5);

                        cm.sendNext("�M�Ҧn�F�C �ݨ쥪�䪺���F�ܡH���N�O�q���ݼɪ��]���x�����C ���L�A�ݭn #b#t4001017##k �~��i�J�̭��C���ڬݬݦ��h�֤H��i�J�쨺�Ӯ��ƪ��a��H");

                        cm.completeQuest(100201);

                        cm.completeQuest(100200);

                    } else {

                        cm.sendNext("�A�n���S���������I�]�Ŷ��A���ˬd�@�U�A�ӡC");

                    }

                    cm.dispose();

                } else {

                    cm.sendNext("�ڤ��{���A�a�ӤF30�� �L�ͥᥢ�������O�K�K�C�Ч��I��ӡA�ڴN�|���A�ݭn���F��C");

                    cm.dispose();

                }

            } else {

                cm.startQuest(100201);

                cm.dispose();

            }

        }

    } else if (status == 4) { //bribe

        if (cm.getPlayer().getMeso() < 300000000) {

            cm.sendNext("�A�S�������������A���ˬd�@�U�A�ӡC");

        } else if (!cm.canHold(4001017, 5)) {

            cm.sendNext("�A�S���������Ŷ��A���ˬd�@�U�A�ӡC");

        } else {

            cm.gainItem(4001017, 5);

            cm.completeQuest(100201);

            cm.completeQuest(100200);

            cm.forceCompleteQuest(7000);

            cm.completeQuest(100203);

            cm.sendOk("�n�F�A���A�����r�֡I");

            cm.gainMeso(-300000000);

        }

        cm.dispose();

    } else {

        cm.dispose();

    }

}