/*
	NPC Name: 		Adobis
	Map(s): 		El Nath : Entrance to Zakum Altar
	Description: 		Zakum battle starter
*/
var status = 0;

function action(mode, type, selection) {
	if (cm.getPlayer().getMapId() == 211042200) {
		if (selection < 100) {
			cm.sendSimple("#r#L100#Zakum#l\r\n#L101#Chaos Zakum#l");
		} else {
			if (selection == 100) {
				cm.warp(211042300,0);
			} else if (selection == 101) {
				cm.warp(211042301,0);
			}
			cm.dispose();
		}
		return;
	} else if (cm.getPlayer().getMapId() == 211042401) {
    switch (status) {
	case 0:
		if (cm.getPlayer().getLevel() < 100) {
			cm.sendOk("���Żݭn100���~�i�H�D�Դ��P���].");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 7) {
			cm.sendOk("���P�ݼɪ��]�u���\�b�W�D 7 .");
			cm.dispose();
			return;
		}
	    var em = cm.getEventManager("ChaosZakum");

	    if (em == null) {
		cm.sendOk("���ʥ��}�l�A�лPGM�pô�C");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {

	    var squadAvailability = cm.getSquadAvailability("ChaosZak");
	    if (squadAvailability == -1) {
		status = 1;
		cm.sendYesNo("�A�����즨���������������ܡH");

	    } else if (squadAvailability == 1) {
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("ChaosZak");
		if (type == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("ChaosZak");
		    if (memberType == 2) {
			cm.sendOk("�A�Q�T��F.");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("�A�Q������? \r\n#b#L0#�T�{������������#l \r\n#b#L1#�[�J������#l \r\n#b#L2#�h�X������#l");
		    } else if (memberType == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
			cm.safeDispose();
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
			var eim = cm.getDisconnected("ChaosZakum");
			if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ChaosZakum");
			if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
				status = 2;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("ChaosZak", 5, " �w�Q�R�W�������]�V�P�^�C �p�G�A�Q�[�J�A�Цb�ɶ��q�����U������.")) {
				cm.sendOk("�A�Q�R�W���������������C �b���U�Ӫ�5�������A�z�i�H�K�[������������.");
			} else {
				cm.sendOk("�K�[�A������ɥX��.");
			}
	    	} else {
			cm.sendOk("�p�G�A�Q�����������������A�и�ڻ���.")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ChaosZakum", "ChaosZak")) {
			cm.sendOk("���~... �Цb�դ@��.");
		}
		cm.safeDispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosZak", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ChaosZak", true);
		if (ba == 2) {
		    cm.sendOk("����ثe�w���A�еy��A��.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("�z�w���\�[�J������");
		    cm.safeDispose();
		} else {
		    cm.sendOk("�A�w�g�O���������@�����F�C");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("ChaosZak", false);
		if (baa == 1) {
		    cm.sendOk("�A�w�g���\�h�X����F");
		    cm.safeDispose();
		} else {
		    cm.sendOk("�A���O����@����.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("ChaosZak", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("ChaosZak", 1)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("ChaosZak", 2)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("ChaosZak") != null) {
		    var dd = cm.getEventManager("ChaosZakum");
		    dd.startInstance(cm.getSquad("ChaosZak"), cm.getMap());
		    cm.dispose();
		} else {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("ChaosZak", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ChaosZak", selection);
	    }
	    cm.dispose();
	    break;
    }
	} else {
    switch (status) {
	case 0:
		if (cm.getPlayer().getLevel() < 50) {
			cm.sendOk("���Żݭn�F�� 50 ���A�~�i�H�D�Դݼɪ��].");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 2) {
			cm.sendOk("�ݼɪ��]�u���\�b�W�D 2 �M 3.");
			cm.dispose();
			return;
		}
	    var em = cm.getEventManager("ZakumBattle");

	    if (em == null) {
		cm.sendOk("���ʥ��}�l�A�лPGM�pô�C");
		cm.safeDispose();
		return;
	    }
	var prop = em.getProperty("state");
	if (prop == null || prop.equals("0")) {

	    var squadAvailability = cm.getSquadAvailability("ZAK");
	    if (squadAvailability == -1) {
		status = 1;
		cm.sendYesNo("�A�����즨���������������ܡH");

	    } else if (squadAvailability == 1) {
		// -1 = Cancelled, 0 = not, 1 = true
		var type = cm.isSquadLeader("ZAK");
		if (type == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
		    cm.safeDispose();
		} else if (type == 0) {
		    var memberType = cm.isSquadMember("ZAK");
		    if (memberType == 2) {
			cm.sendOk("�A�Q�T��F.");
			cm.safeDispose();
		    } else if (memberType == 1) {
			status = 5;
			cm.sendSimple("�A�Q������? \r\n#b#L0#�T�{������������#l \r\n#b#L1#�[�J������#l \r\n#b#L2#�h�X������#l");
		    } else if (memberType == -1) {
		    cm.sendOk("����w�g�����A�Э��s���U.");
			cm.safeDispose();
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
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
				status = 2;
			}
	    }
	} else {
			var eim = cm.getDisconnected("ZakumBattle");
			if (eim == null) {
				cm.sendOk("����԰��w�g�}�l�F�C.");
				cm.safeDispose();
			} else {
				cm.sendYesNo("�ڡA�A�^�ӤF�C �A�Q�A���[�J�A������԰�?");
				status = 2;
			}
	}
	    break;
	case 1:
	    	if (mode == 1) {
			if (cm.registerSquad("ZAK", 5, " �w�Q�R�W�������]�V�P�^�C �p�G�A�Q�[�J�A�Цb�ɶ��q�����U������.")) {
				cm.sendOk("�A�Q�R�W���������������C �b���U�Ӫ�5�������A�z�i�H�K�[������������.");
			} else {
				cm.sendOk("�K�[�A������ɥX��.");
			}
	    	} else {
			cm.sendOk("�p�G�A�Q�����������������A�и�ڻ���.")
	    	}
	    cm.safeDispose();
	    break;
	case 2:
		if (!cm.reAdd("ZakumBattle", "ZAK")) {
			cm.sendOk("���~... �Цb�դ@��.");
		}
		cm.safeDispose();
		break;
	case 5:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		    cm.safeDispose();
		} else {
		    cm.dispose();
		}
	    } else if (selection == 1) { // join
		var ba = cm.addMember("ZAK", true);
		if (ba == 2) {
		    cm.sendOk("����ثe�w���A�еy��A��.");
		    cm.safeDispose();
		} else if (ba == 1) {
		    cm.sendOk("�z�w���\�[�J������");
		    cm.safeDispose();
		} else {
		    cm.sendOk("�A�w�g�O���������@�����F�C");
		    cm.safeDispose();
		}
	    } else {// withdraw
		var baa = cm.addMember("ZAK", false);
		if (baa == 1) {
		    cm.sendOk("�A�w�g���\�h�X����F");
		    cm.safeDispose();
		} else {
		    cm.sendOk("�A���O����@����.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 10:
	    if (selection == 0) {
		if (!cm.getSquadList("ZAK", 0)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 1) {
		status = 11;
		if (!cm.getSquadList("ZAK", 1)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 2) {
		status = 12;
		if (!cm.getSquadList("ZAK", 2)) {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		}
		cm.safeDispose();
	    } else if (selection == 3) { // get insode
		if (cm.getSquad("ZAK") != null) {
		    var dd = cm.getEventManager("ZakumBattle");
		    dd.startInstance(cm.getSquad("ZAK"), cm.getMap(),160108);
		    cm.dispose();
		} else {
		    cm.sendOk("�ѩ󥼪����~�A����ШD�w�Q�ڵ�.");
		    cm.safeDispose();
		}
	    }
	    break;
	case 11:
	    cm.banMember("ZAK", selection);
	    cm.dispose();
	    break;
	case 12:
	    if (selection != -1) {
		cm.acceptMember("ZAK", selection);
	    }
	    cm.dispose();
	    break;
    }
	}
}