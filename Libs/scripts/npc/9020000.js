/* ===========================================================
			����(cm.sendSimple\cm.itemQuantity(5420008))
	�}������: 		NPC
	�Ҧb�a��:		�o�󳣥�
	�}���W�r:		�o�󳣥��ն����� - �ԧJ�̴�
=============================================================
�s�@�ɶ��G2010�~8��6�� 11:38:22
�s�@�H���G����]��~�}��½Ķ�^
=============================================================
*/

var status = 0;
var minLevel = 21;
var maxLevel = 200;
var minPlayers = 1;
var maxPlayers = 6;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("#e<�ն����ȡG�ն��D�ԥ���>#n\r\n�A�Q�M�����̤@�_�V�O�A�������ȶܡH�o�̭����ܦh�p�G���P�ߨ�O�N�L�k�ѨM����ê�K�K�p�G�Q�D�Ԫ��ܡA����#b���ݲն�������#k�өM�ڻ��ܡC\r\n#b#L0#�ڷQ����ն����ȡC#l\r\n#L1#�ڷQ�M��@�_�C���������C#l\r\n#L2#�ڷQť�@�U�����C#l")
		}else if (status == 1){
			if (selection == 0){//��P�ն����@�_�i�J�ն��V�m���C
			cm.sendNext("�A�ǳƦn�F�ܡH�T�w�i�J�ն��V�m���H")
			}else if (selection == 1){
					cm.sendOk("�ثe���\��|���}��C")
					cm.dispose();
			}else if (selection == 2){
						cm.sendNext("�ڥ��b���ݫi�����_�I�a�C�Фj�a�Φۤv���O�q�M���z�A�@�_�}�����D�A���h�j�j��#r#o9300003##k�I�q�L�u����M���T���׼Ʀr�۵����q���ҡv�M�u�q�q���T���צ�m�v���ݵ��� �A#o9300003#�N�|�X�{�C\r\n - #e����ɶ�#n�G30�H��\r\n - #e�ѥ[�H��#n�G4�H\r\n - #e��o���~#n�G #i1072369:# #t1072369# #b(����#o9300003#)#k\r\n                    �U�خ��ӡB��L�B�˳ƪ��~\r\n")
							cm.dispose();
			}//selection
		}else if (status == 2){
			if (cm.getParty() == null) { // no party
				cm.sendOk("�̭����@�ɫܦM�I�A����@�ӤH��W�i��C\r\n#b�]�вն���A�M�ڽ͸ܡC�^");
				cm.dispose();
                                return;
			}
			if (!cm.isLeader()) { // not party leader
				cm.sendSimple("�ЧA���ն����M�����ܡC");
				cm.dispose();
                        }
			else {
				// check if all party members are within 21-200 range, etc.
				var party = cm.getParty().getMembers();
				var mapId = cm.getChar().getMapId();
				var next = true;
				var levelValid = 0;
				var inMap = 0;
				// Temp removal for testing
				for (var i = 0; i < party.size(); i++) {
					if ((party.get(i).getLevel() >= minLevel) && (party.get(i).getLevel() <= maxLevel)) {
						levelValid += 1;
					}
					if (party.get(i).getMapid() == mapId) {
						inMap += 1;
					}
				}
				if (party.size() < minPlayers || party.size() > maxPlayers) 
					next = false;
				else if (levelValid < minPlayers || inMap < minPlayers) {
						next = false;
				}
				if (next) {
					// Kick it into action.  Lakelis says nothing here, just warps you in.
					var em = cm.getEventManager("KerningPQ");
					if (em == null) {
						cm.sendOk("#r���~�G#k���ƥ��S�����T�}��A�Ϊ̨t�ο��~�A���pô�޲z���C");
					}
					else {
						// Begin the PQ.
						em.startInstance(cm.getParty(),cm.getChar().getMap());
						// Remove pass/coupons
						party = cm.getChar().getEventInstance().getPlayers();
						cm.removeFromParty(4001008, party);
						cm.removeFromParty(4001007, party);
					}
					cm.dispose();
				}
				else {
					cm.sendOk("�нT�{�z���ն��G#b\r\n\r\n�ն������S���F�� "+minPlayers+" �W�C\r\n�ն������� " + levelValid.toString() + " �H���b���ƥ������Žd��C\r\n�ն������� " + inMap.toString() + " �H���b�o�󳣥��C\r\n\r\n�]#r�p�G���M���~, ���s�U�u,�A�n�� �Ϊ̽Э��s�ն��C#k#b�^");
					cm.dispose();
				}
			}//�i�J�����A�]�A�P�_�ն�	
		}//status
	}
}
					
