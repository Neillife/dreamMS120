var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e#h #  #b�z�n�A�ڬO�I�����ܦ���NPC#i5021018#�I\r\n#r�i��ew!!�j #k�C�I���@�������Х��ǳƦn�W�@��:\r\n#i5021007##k- ���X�����Ͷ��t��#b�i���ܦ����j#i1032205#\r\n#i5021007##k- �åB���ɯŨ��\r\n#r#i5021007##k- �I���H�Τɯű���p�U\r\n#L1#2��#i4001157# �I��#i1032205#�i���ܦ��� �j\r\n#L2##b15��#i4001157#�ɯ�#i1032206#�i���ܦ��� - �Ĥ@���q�j\r\n#L3##b10��#i4001157#�ɯ�#i1032207#�i���ܦ��� - �ĤG���q�j\r\n#L4##b10��#i4001157#�ɯ�#i1032208#�i���ܦ��� - �ĤT���q�j\r\n#L5##b15��#i4001157#�ɯ�#i1032209#�i���ܦ��� - �ĥ|���q�j\r\n#L6##b70��#i4001157#�ɯ�#i1032219#�i���ܦ��� - �̲׶��q�j");
        } else if (status == 1) {
            if (!cm.canHold(1032205)) {
                cm.sendOk("�z���I�]�Ŷ������C");//�쪩�L
                cm.dispose();
                return;
            }
            switch (selection) {
                case 1:
                    if (!cm.getPlayer().haveItem(4001157, 2)) {
                        cm.sendOk("#i4001157##r�֩�2�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -2);
                    cm.gainItem(1032205, 1);
                    cm.sendOk("#i1032205#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 2:
                    if (!cm.getPlayer().haveItem(4001157, 15)) {
                        cm.sendOk("#i4001157##r�֩�15�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032205, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1032205#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -15);
                    cm.gainItem(1032205, -1);
                    cm.gainItem(1032206, 1);
                    cm.sendOk("#i1032206#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 3:
                    if (!cm.getPlayer().haveItem(4001157, 10)) {
                        cm.sendOk("#i4001157##r�֩�10�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032206, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1032206#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -10);
                    cm.gainItem(1032206, -1);
                    cm.gainItem(1032207, 1);
                    cm.sendOk("#i1032207#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 4:
                    if (!cm.getPlayer().haveItem(4001157, 10)) {
                        cm.sendOk("#i4001157##r�֩�10�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032207, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1032207#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -10);
                    cm.gainItem(1032207, -1);
                    cm.gainItem(1032208, 1);
                    cm.sendOk("#i1032208#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 5:
                    if (!cm.getPlayer().haveItem(4001157, 15)) {
                        cm.sendOk("#i4001157##r�֩�15�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032208, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1032208#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -15);
                    cm.gainItem(1032208, -1);
                    cm.gainItem(1032209, 1);
                    cm.sendOk("#i1032209#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 6:
                    if (!cm.getPlayer().haveItem(4001157, 70)) {
                        cm.sendOk("#i4001157##r�֩�70�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1032209, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1032209#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -70);
                    cm.gainItem(1032209, -1);
                    cm.gainItem(1032219, 1);
                    cm.sendOk("#i1032219#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
            }
        }
    }
}	