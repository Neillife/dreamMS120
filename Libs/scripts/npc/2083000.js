var status = -1;



function start() {
    cm.sendSimple("�A���i��[�J�������D���s����?" +
        "#k\r\n#L0#�ڭn�[�J������#b(��5E�����R#i4001086##t4001086#)" +
        "#k\r\n#L1#�ڤw�g�[�J������#b(���W�֦�#i4001086##t4001086#)" +
        "");
}

function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getMeso() < 500000000 || cm.haveItem(4001086,1)) {
                cm.sendOk("�A���W�� ���� ����,�L�k�[�J������ \r\n�Ϊ̤w�g�[�J�������F.");
                cm.dispose();
                return;
            } else {
                cm.gainItem(4001086,1);
                cm.gainMeso(-500000000);
                cm.dispose();
                return;
            }
        case 1:
            if (cm.haveItem(4001086,1)) {
                cm.warp(240050400);
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�èS���[�J���������H�x.");
                cm.dispose();
                return;
            }
    }
}