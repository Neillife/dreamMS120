var eff = "#fEffect/CharacterEff/1051296/1/0#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//����1
var icon = "#fUI/UIWindow.img/icon/WorldUI/BtQ/normal/0#";
importPackage(Packages.client);
importPackage(Packages.tools);

var status = -1;

var Msg = Array("�q��s���G", "�m�@�@�W�G", "��@�@���G", "�I�ڪ��B�G", "��ܨ���G");
var NTMsg = Array(Msg.length), allname = Array();
var sel, InputList, code = "";
//
var ShowText = Array("#e#b�п�J�ثe�C���K�X:","#e#d�п�J�s���K�X:","#e#r���F�T�O�w���ЦA����J�K�X:"), Password = Array(), updatePasswordHash = false, CheckArray = false, ChangePassword = false;

function start() {
	var map = Java.type("client.MapleClient");
	var formal = cm.getClient().getFacebook_id().split(",")[1] == "1" ? "#b�{�Ҧ��\#r" : "#r�|���{��";
	var Stored = getDataInfo() == "�|�����٧U����" ? "#r�d�L����" : "#b�̫���#r";
	var text = "#d��e���H���p�U�G#r(�ثe�H�U�C���O�����[�ݨëD�\��)#d\r\n";
	text += "====================================\r\n#b"
	text += "#L0#" + eff + " �٧U�ֹ�G #r" + format(" ", 20, getDataInfo().toString()) + "#b #r#e�i"+Stored+"�j#b#n#l\r\n";
	text += "#L1#" + eff + " �٧U���B�G #r" + format(" ", 20, "��� " + getMonthNT(cm.getClient().getAccountName()).toString() + " | �`�p " +getSumNT(cm.getClient().getAccountName()).toString()) + "#b #e#r�i�R���٧U�j#b#n#l\r\n";
	text += "#L2#" + eff + " �C���㸹�G #r" + format(" ", 20, cm.getClient().getAccountName()) + "#b #e#r�i�ק�K�X�j#b#n#l\r\n";
	text += "#L3#" + eff + " �C���W�r�G #r" + format(" ", 20, cm.getPlayer().getName()) + "#b #e#r�i�ܧ�W�r�j#b#n#l\r\n";
	//text += "#L1#" + eff + "\t���_�l�B�G #r" + format(" ", 15, cm.getRMB().toString()) + "#b #e#r�i�R�ȡj#n#l\r\n";
	//text += "#L2#" + eff + "\t#b�֭p�R�ȡG #r" + format(" ", 15, cm.getTotalRMB().toString()) + "#b #e#r�i§�]�j#b#n#l\r\n";
	text += "#L4#" + eff + " �C��CASH�G #r" + format(" ", 20, cm.getPlayer().getCSPoints(1).toString()) + "#b #e#r�i�I�����~�j#b#n#l\r\n";
	text += "#L5#" + eff + " �����I�ơG #r" + format(" ", 20, cm.getPlayer().getCSPoints(2).toString()) + "#b #e#r�i�I�����~�j#b#n#l\r\n";
	text += "#L6#" + eff + " Facebook�G #r" + format(" ", 20, cm.getClient().getFacebook_id().split(",")[0]) + "#b #r#e�i"+formal+"�j#b#n#l\r\n";
	text += "\r\n\t\t\t\t#L99#"+ "#b" + ttt + "��^�W�@��";
	cm.sendSimple(text);
}

function action(mode, type, selection) {
	if (sel == null)
		sel = selection;
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
	if (sel == 0) {//�٧U�ֹ�
		if (status == 0) {
			if (type == 3) { //3 = sendGetText, 4 = sendGetNumber
				if (InputList == 0 && cm.getText().length == 16 || InputList > 0 && cm.getText() != "")
					NTMsg.splice(InputList, 1, cm.getText());
				else
					cm.getPlayer().dropMessage(5, "[�٧U�ֹ�]��J�����~, �ЦA��J�@��.")
			} else if (InputList == 4){
					NTMsg.splice(InputList, 1, allname[selection]);
			}
			//��r�B�z
			var text = "#e�п�J����٧U�t�ΩM���T:\r\n\r\n";
			var Check = 0;
			for (var ret in Msg) {
				var RecNT = NTMsg.indexOf(NTMsg[ret])==-1 ? "�|����J" : NTMsg[ret].toString();
				if (RecNT != "�|����J")
					Check += 1;
				text += "#L" + ret + "##k" + Msg[ret] + " #b#n" + format(" ", 20, RecNT) + "#e#r�i�ק�j#k" + "#l#k\r\n\r\n";
			}
			if (Check == 5)
				text += "#L99##b������J"
			cm.sendOk(text);
		} else if (status == 1) {
			InputList = selection;
			if (selection == 99) {
				for (var i = 0; i < 5 ; i++)
					code += Math.floor(Math.random() * 10);
				cm.sendGetText("#b�п�J���ҽX�G#r#e" + code);
				status = 1;
			} else {
				if (selection < 4)
					cm.sendGetText(Msg[selection]);
				else {
					var text = Msg[selection] + "\r\n";
					for (var ret in getName()) {
						allname.push(getName()[ret])
						text += "#L" + ret + "#" + getName()[ret] + "#l�@";
					}
					cm.sendOk(text);
				}
				status = -1;
			}
		} else if (status == 2) {
			if (code == cm.getText()) {
				NewPayNT(NTMsg[0],NTMsg[1],NTMsg[2],NTMsg[3],NTMsg[4]);
				cm.sendOk("#e#b�����e�X�Хh��޲z���i��ֹ�");
			} else {
				cm.sendOk("#e#r���ҽX��J���~");
			}
			cm.dispose();
		}
	} else if (sel == 2) {
		if (type == 3) {
			Password.push(cm.getText());
			var password = Password[0];
			var info = getPassword(cm.getClient().getAccountName());
			var passhash = info['password'];
			var salt = info['salt'];
			if (Password.length == 1) {
				CheckArray = true;
				if (LoginCrypto.checkSaltedSha512Hash(passhash, password, salt)) {
					updatePasswordHash = true;					
				}
			} else if (Password.length == 3) {
				CheckArray = true
				if (Password[1] == Password[2]) {
					updatePasswordHash = true;
					ChangePassword = true;
				}
			}
		}
		if (CheckArray && !updatePasswordHash) {
			cm.sendOk("#e#r�K�X��J���~, �Э��s��J.");
			cm.dispose();
		} else {
			if (ChangePassword) {
				UpdatePassword(Password[1], cm.getClient().getAccountName());
				FileoutputUtil.log("logs/data/�ק�K�X.txt", "MAC �a�} : " + cm.getClient().getLoginMacs() + " IP �a�} : " + cm.getClient().getSession().remoteAddress().toString().split(":")[0] + " �b���G�@" + cm.getClient().getAccountName() + " �K�X�G" + Password[1]);               
				cm.sendOk("#e#b�K�X�w�ק粒��");
				cm.dispose();
			} else {
				CheckArray = false, updatePasswordHash = false;
				cm.sendGetText(ShowText[Password.length]);
				status = -1;
			}
		}
	} else if (sel == 99) {
		cm.dispose();
		cm.openNpc(9900007, "home_chr");
	} else {
		cm.dispose();
		cm.openNpc(9900007, "�b��_chr");
	}
}

function NewPayNT(Order,Name,Phone,PayNT,Player) {
	var conn = cm.getConnection();
    var sug = conn.prepareStatement("INSERT INTO accounts_PayNT (`Order`, `Account`, `Name`, `Phone`, `PayNT`, `Player`) VALUES (?, ?, ?, ?, ?, ?)");
	sug.setString(1, Order);
    sug.setString(2, cm.getClient().getAccountName());
	sug.setString(3, Name);
	sug.setString(4, Phone);
	sug.setString(5, PayNT);
	sug.setString(6, Player);
    sug.executeUpdate();
    sug.close();
	conn.close();
}

function getName() {
	var conn = cm.getConnection();
	var	ps = conn.prepareStatement("select name from characters where accountid = ?");
	ps.setString(1, cm.getClient().getAccID());
	var rs = ps.executeQuery();
	var all = Array();
	while (rs.next()) {
		all.push(rs.getString("name"))
	}
	rs.close();
	ps.close();
	conn.close();
	return all;
}

function getDataInfo() {
	var conn = cm.getConnection();
	var	ps = conn.prepareStatement("select * from accounts_PayNT where account = ?");
	ps.setString(1, cm.getClient().getAccountName());
	var rs = ps.executeQuery();
	var info = "�|�����٧U����";
	while (rs.next()) {
		info = rs.getString("time").split(".")[0];
	}
	rs.close();
	ps.close();
	conn.close();
	return info;
}
//�������٧U�H��
function getMonthNT(acc) {
	var conn = cm.getConnection();
	var	ps = conn.prepareStatement("select * from accounts_PayNT Pay, accounts a where a.name = Pay.Account and Pay.Valid = 1 and MONTH(Time) = MONTH(current_timestamp) and a.name = '" + acc + "'");
	var rs = ps.executeQuery();
	var m = 0;
	while (rs.next()) {
		m += parseInt(rs.getString("Pay.PayNT"));
	}
	rs.close();
	ps.close();
	conn.close();
	return m;
}
//����`�p�٧U�H��
function getSumNT(acc) {
	var conn = cm.getConnection();
	var	ps = conn.prepareStatement("select * from accounts WHERE name = '" + acc + "'");
	var rs = ps.executeQuery();
	var m = 0;
	if (rs.next()) {
		m += parseInt(rs.getString("PayNT"));
	}
	rs.close();
	ps.close();
	conn.close();
	return m;
}
//����ثe�K�X
function getPassword(account) {
	var conn = cm.getConnection();
	var	ps = conn.prepareStatement("select * from accounts WHERE name = '" + account + "'");
	var rs = ps.executeQuery();
	var password, salt;
	if (rs.next()) {
		password = rs.getString("password");
		salt = rs.getString("salt");
	}
	rs.close();
	ps.close();
	conn.close();
	var info = new Array();
	info['password'] = password;
	info['salt'] = salt;
	return info;
}
//�ק�K�X
function UpdatePassword(password, accId) {
	var conn = cm.getConnection();
	var ps = conn.prepareStatement("UPDATE `accounts` SET `password` = ?, `salt` = ? WHERE name = ?");
	var newSalt = LoginCrypto.makeSalt();
	ps.setString(1, LoginCrypto.makeSaltedSha512Hash(password, newSalt));
	ps.setString(2, newSalt);
	ps.setString(3, accId);
    ps.executeUpdate();
    ps.close();
	conn.close();
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
    