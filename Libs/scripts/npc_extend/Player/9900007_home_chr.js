importPackage(Packages.server); 
importPackage(Packages.client); 
importPackage(Packages.Apple.console.groups.setting); 
importPackage(Packages.backup.GUI.Settings); 

var status;
//���Ƴ]�w
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fMap/MapHelper.img/weather/starPlanet2/7#";//"+z+"//����
var zz = "#fEffect/CharacterEff/1082565/2/0#";//
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//�p����
var icon = "#fUI/UIWindow.img/icon/WorldUI/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#";
var tt = "#fEffect/ItemEff/1112811/0/0#";//����
var ttt = tt;
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////����2								[����b�Y]
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//���ƶ�					[���߶�]
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New   				[NEW]
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////����!								[��ĸ�]
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//���Ʒ|��	[�U�Y�V�U]
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//����			[�U�Y�V�U]
var kkk = tt;//																	[���ŹϮ�]

var menuList = Array(
		Array(iconEvent, "#e#r�|���}��#n", 6, false, 9900007, "GM"),
        Array(kkk, "�b���H��", 0, true, 9900007, "�b��_chr"),
		Array(kkk, "#r���~�I��", 6, true, 9900003, "�I��_chr"),
		Array(kkk, "�ɯż��y", 6, true, 9900007, "�ɯ�_chr"),
		Array(kkk, "�d���z�v", 2, true, 9900007, "�z�v_chr"),
		Array(kkk, "�C���Ʀ�", 3, true, 9900007, "�Ʀ�_chr"),
		Array(kkk, "�z�v����", 6, true, 9105006, -1),
		//Array(ttt2, "#e#k���#n", 6, true, 9900007, "���_chr"),
		Array(kkk, "#e#k�~��M��#n", 6, true, 9900007, "�~��_chr"),
		Array(kkk, "#e#k¾�~���#n", 6, true, 1012114, -1),
		Array(kkk, "#e#k�U��ө�#n", 6, true, 9330012, -1),
		Array(kkk, "#e#k�a�϶ǰe#n", 6, true, 9000020, -1),
		Array(kkk, "#e#k21�I���#n", 6, true, 9209001, -1),
		Array(kkk, "#e#k��xx��#n", 6, true, 9330092, -1),
		Array(ttt2, "#e#k�F��xx��#n", 6, true, 9105006, "help"),
		
		//Array(kkk, "#r���v���y", 6, true, 9900007, -80),
		//Array(kkk, "�s��ñ��", 6, true, 9900007, "�s��ñ��"),
		//�޲z���M�� //4001036
		Array(ttt5, "#e#r�����ĳ�Φ^��", 100, true, 9900007, "�^��_chr")
        );

//�m�i����
var feng = "#v4032733#"
var EditItem = Array();

//�s�����U
function HelpMessage() {
	var Message = "\t\t\t\t#e#dxx���s�����U����#n\r\n\r\n";
		/*Message += "�������� �X��\r\n";
		Message += "�ʦL����������+10AD = ��������+��������*10\r\n";
		Message += "�d������������+30AD = �ʦL����������+��������*30\r\n";
		Message += "ı������������+40AD = �d������������+��������*40\r\n";
		Message += "�_�ۤ�� �~�L�� �һݭn����j��\r\n";
		Message += "�������� ��o�覡:\r\n";
		Message += "1.���� �ݼɪ��].���.����\r\n";
		Message += "2.�s�WBSPQ  OR  �ֿnñ����y\r\n";
		Message += "3.�S�w���� (�x��D��)\r\n";
		Message += "4.������o (�W�C���v)\r\n";
		Message += "5.�s�W����H (���v�L��)\r\n";
		Message += "��j����o�覡:\r\n";
		Message += "1.�W�[NPC�ʶR\r\n";
		Message += "2.�S�w��o�o�e\r\n";
		Message += "3.BSPQ���ƧI��\r\n";
		Message += "4.�C��T�w��� (�ǷL�ƶq)\r\n";*/
		var HelpList = Array(
			Array("�� �� �� �y","���A�]��10.30.70.100.120.150.180�����B�~���y�]�A�C�ֿn10���]�|�H���ذe�n§�A���A�m�\���дo�C"),
			Array("ñ �� �t ��","�u�n�b�u�W2�p�ɡA�Y�i�����C��ñ��A�C��ñ��Y�i��o���ﭵ�P�C�u�n�F���T�w�ֿnñ��ɤ�A�٦����u�쪺§�]�i�H����C"),
			Array("�z �v �t ��","�u�n�Ӫ��a�b�a�Ϥ��A�I��b��椤���d���z�v�A�Y�i���D�өǪ����������~�A�����a�����n���Q�����Ǫ��C"),
			Array("���ﭵ�P�γ~","�I���檺���~�I���A�U�����~�i�i��I��."),
			Array("xx���γ~","�ɯŦh���˳ơA�I���˳ơA�̷ӨC�Ӷ��Ū����P�A�I�����ƶq�]���ҼW�[�C"),
			Array("�I����o�覡","�Z���D���C�@��������o�I�ơA���Ǥ]�ɦ��H��1~5�I���u�f�Axx���a��m�\������I�ơC"),
			Array("�_�ۤ����o�覡","�ۥѥ��������]���A�����A�椺�C")
		);
		for (var t in HelpList)
			Message += "#e#r"+HelpList[t][0] + ": #n#b" +HelpList[t][1] + "\r\n\r\n";
	return Message;
}

function start() {
	if (cm.getPlayer().getLevel() < 10) {
		cm.sendOk("�A�ثe���ŵL�k�ϥθӥ\��");
		cm.dispose();
		return;
	}
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
        else {
            cm.dispose();
            return;
        }
        if (status == 0) {
			//�򥻸�T
			var message = Array(
					Array(" ���Ѧb�u�G#r" + cm.getOnlineTime() + "#k ����"),
					Array(" ������o�I�ơG#r" + cm.getPlayer().getBossLog("NowDayCs") + "#k �I\r\n"),
					Array(" Cash�G#r" + cm.getPlayer().getCSPoints(1).toString() + "#k �I"),
					Array(" �����I�ơG#r" + cm.getPlayer().getCSPoints(2).toString() + "#k �I\r\n")
					);
            var selStr = "\t\t\t\t#e�w��Ө�#rxx��#k#n\r\n";
			for (var i = 0; i < message.length; i++)
				selStr += (i%2==0? icon + format(" ", 27, message[i].toString()) : message[i]);
			selStr += eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1;
            //�\��C��
			var x = 0;
            for (var i = 0; i < menuList.length; i++) {
				x++;
				//�޲z���\�ತ�L
                if (!menuList[i][3] && !cm.getChar().isGM()) {
					x--;
					continue;
				}
				//�^���\��۰ʸ���
				if (menuList[i][5] == "�^��_chr")
					selStr += "\r\n\r\n";
				else if (!menuList[i][3])
					selStr += "\t\t\t  ";
				//�g�J�\���
				selStr += "#b#L" + i + "#" + menuList[i][0] + " " + menuList[i][1] + "#l";
				if (!menuList[i][3])
					x--;
				if (x % 3 == 0 && menuList[i][5] != "�^��_chr")
					selStr += "\r\n";
            }
            selStr += "\r\n\r\n" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1 + "" + eff1;
			cm.sendSimple(selStr);
		} else if (status == 1) {
			cm.dispose();
			if (menuList[selection][5] == -1)
				cm.openNpc(menuList[selection][4]);
			else if (menuList[selection][5] == "map") {
				if (cm.getPlayer().getMapId() == 749050400) {
					cm.saveLocation("Gachapon");
					cm.warp(749050400,0);
				}
			} else if (menuList[selection][5] == "help") {
				cm.sendGetText(HelpMessage());
				cm.dispose();
			} else
				cm.openNpc(menuList[selection][4], menuList[selection][5]);
			
        }
    }
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("big5").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}