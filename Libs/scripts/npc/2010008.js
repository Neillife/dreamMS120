/* guild emblem npc */
var status = 0;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0)
	cm.sendSimple("�A�Q�n������H\r\n#b#L0#�Ы�/��綠�|����#l#k");
    else if (status == 1) {
	sel = selection;
	if (selection == 0) {
	    if (cm.getPlayerStat("GRANK") == 1)
		cm.sendYesNo("���s���y�@�������ݭn #b1,000,000����#k�A�A�T�w�n�~��ܡH");
	    else
		cm.sendOk("���y���|�����ݭn���|���ӧ�ڤ~���A�ЧA�̪����|���ӧ�ڧa~");
	}
				
    } else if (status == 2) {
	if (sel == 0) {
	    cm.genericGuildMessage(17);
	    cm.dispose();
	}
    }
}
