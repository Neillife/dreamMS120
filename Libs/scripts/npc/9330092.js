var status = -1;



function start() {
    cm.sendSimple("�A�n�A�Ьd�ݭI�] ���F�Q�Y���|�z�A!" +
        "#k\r\n#L0#�� 500 GASH �ʶR1�Ӥ�K��#b#i4001157##t4001157##k" +
		"#k\r\n#L1#�� 5000 GASH �ʶR10�Ӥ�K��#b#i4001157##t4001157##k" +
		"#k\r\n#L2#�� 1�Ӥ�K�� �ʶR500 GASH" +
		"#k\r\n#L3#�� 10�Ӥ�K�� �ʶR5000 GASH" +
        "");
}

function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1) > 499) {//cm.getPlayer().getPoints() <= �ƶq
                cm.getPlayer().modifyCSPoints(1,-500);//cm.getPlayer().modifyCSPoints(1,-�����ƶq)
                cm.gainItemPeriod(4001157, 1, 0,"" ); //cm.gainItemPeriod(�˳ƥN�X, �ƶq, �Ѽ�, "���˯���")
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� GASH ����,�L�k�ʶR.");
                cm.dispose();
                return;
            }
			case 1:
            if (cm.getPlayer().getCSPoints(1) > 4990) {//cm.getPlayer().getPoints() <= �ƶq
                cm.getPlayer().modifyCSPoints(1,-5000);//cm.getPlayer().modifyCSPoints(1,-�����ƶq)
                cm.gainItemPeriod(4001157, 10, 0,"" ); //cm.gainItemPeriod(�˳ƥN�X, �ƶq, �Ѽ�, "���˯���")
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� GASH ����,�L�k�ʶR.");
                cm.dispose();
                return;
            }
			case 2:
            if (cm.getPlayer().haveItem(4001157, 1)) {//cm.getPlayer().getPoints() <= �ƶq
			    cm.gainItemPeriod(4001157, -1, 0,"" ); //cm.gainItemPeriod(�˳ƥN�X, �ƶq, �Ѽ�, "���˯���")
                cm.getPlayer().modifyCSPoints(1,500);//cm.getPlayer().modifyCSPoints(1,-�����ƶq)
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� ��K�� ����,�L�k�ʶR.");
                cm.dispose();
                return;
            }
			case 3:
            if (cm.getPlayer().haveItem(4001157, 10)) {//cm.getPlayer().getPoints() <= �ƶq
			    cm.gainItemPeriod(4001157, -10, 0,"" ); //cm.gainItemPeriod(�˳ƥN�X, �ƶq, �Ѽ�, "���˯���")
                cm.getPlayer().modifyCSPoints(1,5000);//cm.getPlayer().modifyCSPoints(1,-�����ƶq)
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� ��K�� ����,�L�k�ʶR.");
                cm.dispose();
                return;
            }
	}
}	