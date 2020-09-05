var points;

function start() {
    var record = cm.getQuestRecord(150001);
    points = record.getCustomData() == null ? "0" : record.getCustomData();
    cm.sendSimple("�A�n�D��BOSS?\n\r\n\r #b#L3#�d���I��#l#k \r #b#L50##r�I����#l#k \r\n\r\n #b#L0##v03994115##l #L1##v03994116##l #L2##v03994117##l #L28##v03994118##l");
}

function action(mode, type, selection) {
    if (mode == 1) {
		switch (selection) {
			case 0:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestEASY") != null) {
					cm.getDisconnected("BossQuestEASY").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 70) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestEASY");
					if (q == null) {
						cm.sendOk("�o�ͥ��������~");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
					}
					} else {
					cm.sendOk("�������ͥ���70�ťH�W");
					}
				} else {
					cm.sendOk("�ж�����ڹ�ܭ�");
				}
				} else {
					cm.sendOk("�Х��[�J����");
				}
				break;
			case 1:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestMed") != null) {
					cm.getDisconnected("BossQuestMed").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 100) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestMed");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
					}
					} else {
					cm.sendOk("�������ͥ���100�ťH�W");
					}
					} else {
					cm.sendOk("�ж�����ڹ�ܭ�");
					}
				} else {
					cm.sendOk("�Х��[�J����");
				}
				break;
			case 2:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestHARD") != null) {
					cm.getDisconnected("BossQuestHARD").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 120) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestHARD");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
					}
					} else {
					cm.sendOk("�������ͥ���120�ťH�W");
					}
					} else {
					cm.sendOk("�ж�����ڹ�ܭ�");
					}
				} else {
					cm.sendOk("�Х��[�J����");
				}
				break;
			case 28:
				if (cm.getParty() != null) {
				if (cm.getDisconnected("BossQuestHELL") != null) {
					cm.getDisconnected("BossQuestHELL").registerPlayer(cm.getPlayer());
				 } else if (cm.isLeader()) {
					var party = cm.getPlayer().getParty().getMembers();
					var mapId = cm.getPlayer().getMapId();
					var next = true;
					var it = party.iterator();
					while (it.hasNext()) {
					var cPlayer = it.next();
					var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
					if (ccPlayer == null || ccPlayer.getLevel() < 160) {
						next = false;
						break;
					}
					}	
					if (next) {
					var q = cm.getEventManager("BossQuestHELL");
					if (q == null) {
						cm.sendOk("Unknown error occured");
					} else {
						q.startInstance(cm.getParty(), cm.getMap());
					}
					} else {
					cm.sendOk("�������ͥ���160�ťH�W");
					}
					} else {
					cm.sendOk("�ж�����ڹ�ܭ�");
					}
				} else {
					cm.sendOk("�Х��[�J����");
				}
				break;
			case 3:
				cm.sendOk("#b�I�Ƽƶq : " + points);
				break;
			case 50:
				cm.dispose();
				cm.openNpc(9900003, "�I��_chr");
				return;
			/*cm.getQuestRecord(150001).setCustomData(50);
				var text = "";
				for (var e in ExchangeItems)
					text += "#L" + e + "##v" + ExchangeItems[e][1] + "##t" + ExchangeItems[e][1] + "# #b(#r�ݭn: #d" + ExchangeItems[e][0] + "#b)\r\n";
				cm.sendOk("#b�I�Ƽƶq: " + points + "\r\n " + text);*/
			break;
		}
    }
    cm.dispose();
}