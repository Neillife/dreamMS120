importPackage(Packages.Apple.console.groups.setting); 

var status = -1;
var itemList = new Array(1302026, 1302032, 1302037, 1302081, 1302086, 1302173, 1302174, 1302146, 1302145, 1302144, 1302143, 1302217, 1302218, 1302219, 1302220, 1302221, 1302223, 1302248, 1322060, 1322061, 1322086, 1322087, 1322088, 1322107, 1322108, 1322181, 1312037, 1312038, 1312072, 1312073, 1312135, 1312058, 1312059, 1312060, 1402046, 1402047, 1402111, 1402112, 1402172, 1402086, 1402087, 1402088, 1412033, 1412034, 1412071, 1412072, 1412122, 1412058, 1412059, 1412060, 1422037, 1422038, 1422073, 1422074, 1422124, 1422059, 1422060, 1422061, 1432047, 1432049, 1432150, 1432077, 1432078, 1432079, 1442063, 1442067, 1442136, 1442137, 1442202, 1442107, 1442108, 1442109, 1542012, 1542013, 1542033, 1542034, 1542060);

var NpcName = "��y��J��";
var NpcItems = 5220000;
var All_eq = 850; //�Ҧ��˳ƾ��v
var Vip_eq = 20; //�S��˳ƾ��v
var Rare_eq = 1; //�}���˳ƾ��v
var Scrolls = 3; //���b�ƶq
var EqJob = 100;

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
				text += Gachapon_copy.SearchConsole(EqJob, isGm).left;
			cm.sendYesNo(text);
		} else {
			cm.sendOk("���n�N��!�z�S��#b#t"+NpcItems+"##i"+NpcItems+"##k�C");
			cm.safeDispose();
		}
	} else if (status == 1) {
		var items = Gachapon_copy.lottery(EqJob);
		if (selection == 0) {
			if (items != null) {
				item = cm.gainGachaponItem(items.left.left, 1, items.left.right <= 5, 1, items.left.right > 30 ? "" : NpcName);
				//�ˬd�I�]�O�_��
				if (item != -1) {
					cm.gainItem(NpcItems, -1);
					cm.sendOk("#e�z�w��o #b#i" + item + ":#" + (cm.getPlayer().isAdmin() ? "  ���˳ƾ��v: " + (items.left.right/items.right) + "  \r\n�˳��v��: " + items.left.right : "  #t" + item + ":#"));
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