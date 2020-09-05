var status = -1;
var minLevel = 51; // 35
var maxLevel = 70; // 65

var minPartySize = 6;
var maxPartySize = 6;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	    return;
	}
	status--;
    }
	if (cm.getMapId() == 920010000) { //inside orbis pq
		cm.sendOk("�ڭ̥����@�ϥL �ݭn20�Ӷ����H��");
		cm.dispose();
		return;
	}
    if (status == 0) {
	for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("�A�����S���F��n�D...:\r\n\r\n#r�n�D: " + minPartySize + " ���a����, �C�ӤH�����ť����b " + minLevel + " �� ���� " + maxLevel + ".#b\r\n#L0#�ڭn��40�Ӥk�������l�I���k�����N#l");
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("�p�G�A�Q�����ȡA�� #b����#k ��ڽ�.#b\r\n#L0#�ڭn��40�Ӥk�������l�I���k�����N#l");
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("OrbisPQ");
		if (em == null) {
		    cm.sendSimple("�䤣��}�����p��GM#b\r\n#L0#�ڭn��40�Ӥk�������l�I���k�����N#l");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("��L����w�g�b�̭��� #r�ն����ȤF#k �й��մ��W�D�Ϊ̵���L������C#b\r\n#L0#�ڭn��40�Ӥk�������l�I���k�����N#l");
		    }
		}
	    } else {
		cm.sendSimple("�A��������S���F��n�D...:\r\n\r\n#r�n�D: " + minPartySize + " ���a����, �C�ӤH�����ť����b " + minLevel + " �� ���� " + maxLevel + ".#b\r\n#L0#�ڭn��40�Ӥk�������l�I���k�����N#l");
	    }
	}
    } else { //broken glass
	if (!cm.canHold(1082232,1)) {
	    cm.sendOk("���n�F�C");
	} else if (cm.haveItem(4001158,40)) {
	    cm.gainItem(1082232, 1, true);
	    cm.gainItem(4001158, -40, true); 
	} else {
	    cm.sendOk("�A�S��40�� #t4001158#.");
	}
	cm.dispose();

    }
}