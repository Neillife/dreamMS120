var status = 0;

function start() {
    status = -0
	
	
	
	;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        ispose();
    } else 
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
           cm.sendSimple("#e#h #  #b�z�n�A�ڬO�I���W�����HNPC#i5021018#�I\r\n#r�i��ew!!�j #k�C�I���@�������Х��ǳƦn�W�@��:\r\n#i5021007##k- ���X�����Ͷ��t��#b�i�W�����H�j#i1022190#\r\n#i5021007##k- �åB���ɯŨ��\r\n#r#i5021007##k- �I���H�Τɯű���p�U\r\n#L1#2��#i4001157# �I��#i1022190#�i�W�����HI �j\r\n#L2##b5��#i4001157#�ɯ�#i1022191#�i�W�����HII�j\r\n#L3##b15��#i4001157#�ɯ�#i1022192#�i�W�����HIII�j\r\n#L4##b20��#i4001157#�ɯ�#i1022193#�iı���W�����H�j\r\n#L5##b15��#i4001157#�ɯ�#i1022215#�i�u�W�����H�j");
        } else if (status == 1) {
            if (!cm.canHold(1022190)) {
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
                    cm.gainItem(1022190, 1);
                    cm.sendOk("#i1022190#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 2:
                    if (!cm.getPlayer().haveItem(4001157, 5)) {
                        cm.sendOk("#i4001157##r�֩�5�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1022190, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1022190#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -5);
                    cm.gainItem(1022190, -1);
                    cm.gainItem(1022191, 1);
                    cm.sendOk("#i1022191#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 3:
                    if (!cm.getPlayer().haveItem(4001157, 15)) {
                        cm.sendOk("#i4001157##r�֩�15�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1022191, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1022191#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -15);
                    cm.gainItem(1022191, -1);
                    cm.gainItem(1022192, 1);
                    cm.sendOk("#i1022192#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 4:
                    if (!cm.getPlayer().haveItem(4001157, 20)) {
                        cm.sendOk("#i4001157##r�֩�20�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1022192, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1022192#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -20);
                    cm.gainItem(1022192, -1);
                    cm.gainItem(1022193, 1);
                    cm.sendOk("#i1022193#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;
                case 5:
                    if (!cm.getPlayer().haveItem(4001157, 15)) {
                        cm.sendOk("#i4001157##r�֩�15�ӵL�k���I�C");
                        cm.dispose();
                        return;
                    } else if (!cm.getPlayer().haveItem(1022193, 1)) {//���T�w ��ɵL�}��
                        cm.sendOk("�z���W�S��#i1022193#�C");
                        cm.dispose();
                        return;
                    }
                    cm.gainItem(4001157, -15);
                    cm.gainItem(1022193, -1);
                    cm.gainItem(1022215, 1);
                    cm.sendOk("#i1022215#�w�g���z���I�]�o�C");//���T�w ��ɵL�}��
                    cm.dispose();
                    break;

               } 
        }
    }
}	