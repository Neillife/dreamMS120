var status = -1;



function start() {
    cm.sendSimple("" +
        "#k\r\n#L0#�ڭn���}" +
        "");
}

function action(mode, type, selection) {
    cm.dispose();

    switch (selection) {
        case 0:
            if (cm.getMeso() > 1) {
                cm.warp(702070400);
                cm.dispose();
                return;
            } else {
                cm.sendOk("�A���W�� ���� ����,�L�k�[�J������.");
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