importPackage(Packages.Apple.console.groups.setting); 

var status = -1;
var GachItem = new Array(
				[4030000,10000,true],
				[4030001,100,true]
				);
				//���~ID,���v,�O�_�W�s
var itemList = new Array(
	1482052, 
	1482010, 
	1492011, 
	1492012, 
	1482013, 
	1492013
);

var NpcName = "���s��J��";
var NpcItems = 5220000;
var All_eq = 850; //�Ҧ��˳ƾ��v
var Vip_eq = 20; //�S��˳ƾ��v
var Rare_eq = 1; //�}���˳ƾ��v
var Scrolls = 3; //���b�ƶq
var EqJob = 500;

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
	}
    if (status == 0) {
		if (cm.getPlayer().getLevel() < 30) {
			cm.sendOk("�A�ثe���ŵL�k�ϥθӥ\��");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().isAdmin()) isGm = -1; else isGm = -2;
		if (cm.haveItem(NpcItems, 1)) {
			var text  = "[#b#p" +cm.getNpc()+"##k]�G\r\n�z���W�� #b#t"+NpcItems+"##i"+NpcItems+"##k �i�H�i����J�C\r\n\r\n";
			    text += "#L0##e#d�A�T�w�n�ϥζܡH#l\r\n\r\n";
				text += "\r\n#r�ССССССССССССССССССССССС�#k\r\n";
				text += Gachapon.SearchConsole(EqJob, isGm).left;
			cm.sendYesNo(text);
		} else {
			cm.sendOk("���n�N��!�z�S��#b#t"+NpcItems+"##i"+NpcItems+"##k�C");
			cm.safeDispose();
		}
	} else if (status == 1) {
		var items = Gachapon.lottery(EqJob);
		if (selection == 0) {
			if (items != null) {
				item = cm.gainGachaponItem(items.left, 1, false, 2, items.right >= 800000 ? "" : NpcName);
				//�ˬd�I�]�O�_��
				if (item != -1) {
					cm.gainItem(NpcItems, -1);
					cm.sendOk("#e�z�w��o #b#i" + item + ":#" + (cm.getPlayer().isAdmin() ? "  ���˳ƾ��v: " + (items.right/1000000)*100 + "%" : "  #t" + item + ":#"));
					cm.dispose();
				} else {
					cm.sendOk("#e�ˬd�@�U#b�I�]#r�O�_�w��#k");
					cm.dispose();
				}
				cm.safeDispose();
				//�ˬd�I�]�O�_��
			} else {
				var Scroll = cm.Scroll();
				if (Scroll != -2) {
					cm.sendOk("#e�ܥi���A�èS�������C\r\n�N�ذe�w���� #b#i" + Scroll + ":##t" + Scroll + "# "+Scrolls+" �i");
					cm.gainItem(NpcItems, -1);
					cm.gainItem(Scroll,Scrolls);
					cm.dispose();
				} else {
					cm.sendOk("#e�Ц^���޲z�����~�N�X");
					cm.dispose();
				}
			}
			cm.safeDispose();
		} else {
			cm.sendOk(Gachapon.SearchConsole(EqJob,selection).right);
			status = -1;
			//cm.dispose();
		}
    }
}