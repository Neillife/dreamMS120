/*
NPC Name: 		Mark of the Squad
Map(s): 		Entrance to Horned Tail's Cave
Description: 		Horntail Battle starter
 */
var status = -1;

function start() {
	if (cm.getPlayer().getLevel() < 80) {
		cm.sendOk("�n���ŹF�� 80 �H�W�~�i�i��D��.");
		cm.dispose();
		return;
	}
	if (cm.getPlayer().getClient().getChannel() != 4) {
	//	cm.sendOk("Horntail may only be attempted on channel 4");
	//	cm.dispose();
	//	return;
	}
	var em = cm.getEventManager("HorntailBattle");

	if (em == null) {
		cm.sendOk("���ʥ��}�l�A�лPGM�pô�C");
		cm.dispose();
		return;
	}
	var prop = em.getProperty("state");

	if (prop == null || prop.equals("0")) {
		var squadAvailability = cm.getSquadAvailability("Horntail");
		if (squadAvailability == -1) {
			status = 0;
		cm.sendYesNo("�A�����즨���������������ܡH");

		} else if (squadAvailability == 1) {
			// -1 = Cancelled, 0 = not, 1 = true
			var type = cm.isSquadLeader("Horntail");
			if (type == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
				cm.dispose();
			} else if (type == 0) {
				var memberType = cm.isSquadMember("Horntail");
				if (memberType == 2) {
			cm.sendOk("�A�Q�T��F.");
					cm.dispose();
				} else if (memberType == 1) {
					status = 5;
			cm.sendSimple("�A�Q������? \r\n#b#L0#�T�{������������#l \r\n#b#L1#�[�J������#l \r\n#b#L2#�h�X������#l");
				} else if (memberType == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
					cm.dispose();
				} else {
					status = 5;
			cm.sendSimple("�A�Q������? \r\n#b#L0#�T�{������������#l \r\n#b#L1#�[�J������#l \r\n#b#L2#�h�X������#l");
				}
			} else { // Is leader
				status = 10;
		    cm.sendSimple("�A�Q������? \r\n#b#L0#�T�{������������#l \r\n#b#L1#�R��������������#l \r\n#b#L2#�s������C��#l \r\n#r#L3#�i�J�a��#l");
				// TODO viewing!
			}
		} else {
			var props = em.getProperty("leader");
			if (props != null && props.equals("true")) {
				var eim = cm.getDisconnected("HorntailBattle");
				if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
					cm.safeDispose();
				} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
					status = 1;
				}
			} else {
				cm.sendOk("�A�������w�g���}�F�԰��A�ҥH�A����^�h��.");
				cm.safeDispose();
			}
		}
	} else {
		var props = em.getProperty("leader");
		if (props != null && props.equals("true")) {
			var eim = cm.getDisconnected("HorntailBattle");
			if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
				status = 1;
			}
		} else {
				cm.sendOk("�A�������w�g���}�F�԰��A�ҥH�A����^�h��.");
			cm.safeDispose();
		}
	}
}

function action(mode, type, selection) {
	switch (status) {
	case 0:
		if (mode == 1) {
			if (cm.registerSquad("Horntail", 5, " �w�Q�R�W�������C �p�G�A�Q�[�J�A�Цb�ɶ��q�����U������.")) {
				cm.sendOk("�A�Q�R�W���������������C �b���U�Ӫ�5�������A�z�i�H�K�[������������.");
			} else {
				cm.sendOk("�K�[�A������ɥX��.");
			}
		}
		cm.dispose();
		break;
	case 1:
		if (!cm.reAdd("HorntailBattle", "Horntail")) {
			cm.sendOk("���~... �Цb�դ@��.");
		}
		cm.safeDispose();
		break;
	case 5:
		if (selection == 0) {
			if (!cm.getSquadList("Horntail", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
			}
		} else if (selection == 1) { // join
			var ba = cm.addMember("Horntail", true);
			if (ba == 2) {
		    cm.sendOk("����ثe�w���A�еy��A��.");
			} else if (ba == 1) {
		    cm.sendOk("�z�w���\�[�J������");
			} else {
		    cm.sendOk("�A�w�g�O���������@�����F�C");
			}
		} else { // withdraw
			var baa = cm.addMember("Horntail", false);
			if (baa == 1) {
		    cm.sendOk("�A�w�g���\�h�X����F");
			} else {
		    cm.sendOk("�A���O����@����.");
			}
		}
		cm.dispose();
		break;
	case 10:
		if (mode == 1) {
			if (selection == 0) {
				if (!cm.getSquadList("Horntail", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
				}
				cm.dispose();
			} else if (selection == 1) {
				status = 11;
				if (!cm.getSquadList("Horntail", 1)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
					cm.dispose();
				}
			} else if (selection == 2) {
				status = 12;
				if (!cm.getSquadList("Horntail", 2)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
					cm.dispose();
				}
			} else if (selection == 3) { // get insode
				if (cm.getSquad("Horntail") != null) {
					var dd = cm.getEventManager("HorntailBattle");
					dd.startInstance(cm.getSquad("Horntail"), cm.getMap());
				} else {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
				}
				cm.dispose();
			}
		} else {
			cm.dispose();
		}
		break;
	case 11:
		cm.banMember("Horntail", selection);
		cm.dispose();
		break;
	case 12:
		if (selection != -1) {
			cm.acceptMember("Horntail", selection);
		}
		cm.dispose();
		break;
	default:
		cm.dispose();
		break;
	}
}
