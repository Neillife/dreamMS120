var status = -1;



function start() {
    cm.sendSimple("�A�n�A�A�Q�n���ά~�崼�˶�?" +
        "#k\r\n#L0#�� 100 GASH���ά~�� XX ���O#b#i1112915##t1112915##k����" +
        "");
}

function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getPlayer().getCSPoints(1) > 99) {//cm.getPlayer().getPoints() <= �ƶq
                cm.getPlayer().modifyCSPoints(1,-100);//cm.getPlayer().modifyCSPoints(1,-�����ƶq)
                cm.gainItemPeriod(1112915, 1, 2, "���˯���"); //cm.gainItemPeriod(�˳ƥN�X, �ƶq, �Ѽ�, "���˯���")
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� GASH ����,�L�k���δ���.");
                cm.dispose();
                return;
            }
    }
}