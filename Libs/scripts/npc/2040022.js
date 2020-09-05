/* Sarah
	Ludibrium : Tara and Sarah's House (220000303)
	
	Refining NPC: 
 * Gloves - All classes, 30-50, stimulator (4130000) available on upgrades
 * Price is 90% of locations on same items
 */

var status = -1;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var stimulator = false;
var stimID = 4130000;

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 1 && mode == 0) {
	cm.sendNext("�ݭn���ɭԥi�H�ӧ�ڡC");
	cm.dispose();
	return;
    }
    if (mode == 1) {
	status++;
    } else {
	cm.dispose();
	return;
    }

    if (status == 0) {
	var selStr = "�١A�ڬO#p2040020# ���ѥi�H���A���I����H�H#b"
	var options = new Array("����O�ʤƾ�?","���@���C�h��M","���@���}�b���M","���@���k�v��M","���@���s���M",
	    "���@���C�h��M�ϥζʤƾ�","���@���}�b���M�ϥζʤƾ�","���@���k�v��M�ϥζʤƾ�","���@���s���M�ϥζʤƾ�");
	for (var i = 0; i < options.length; i++){
	    selStr += "\r\n#L" + i + "# " + options[i] + "#l";
	}
			
	cm.sendSimple(selStr);
    } else if (status == 1 && mode == 1) {
	selectedType = selection;
	if (selectedType > 4)
	    stimulator = true;
	else
	    stimulator = false;
	if (selectedType == 0) { //What's a stim?
	    cm.sendNext("�ʤƾ��O�@�دS���Ĥ��A�ڥi�H�[�J��ЫجY�Ƕ��ت��i�{�C�������έp���A�N�n���q�@�өǪ��U���C�M�ӡA���i�঳�S���ܤơA�ӥB�]���i�ର���C�󥭧������C�٦��S���o����󶵥بϥΨ�E���ɭԡA�ҥH�Щ�������ܦ�10�H�����|�C");
	    cm.safeDispose();
	}
	else if (selectedType == 1){ //warrior glove
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var items = new Array ("#t1082007##k - �C�h ����. 30#b","#t1082008##k - �C�h ����. 35#b","#t1082023##k - �C�h ����. 40#b","#t1082009##k - �C�h ����. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 2){ //bowman glove
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var items = new Array ("#t1082048##k - �}�b�� ����. 30#b","#t1082068##k - �}�b�� ����. 35#b","#t1082071##k - �}�b�� ����. 40#b","#t1082084##k - �}�b�� ����. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 3){ //magician glove
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var items = new Array ("#t1082051##k - �k�v ����. 30#b","#t1082054##k - �k�v ����. 35#b","#t1082062##k - �k�v ����. 40#b","#t1082081##k - �k�v ����. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 4){ //thief glove
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var gloves = new Array ("#t1082042##k - �s�� ����. 30#b","#t1082046##k - �s�� ����. 35#b","#t1082075##k - �s�� ����. 40#b","#t1082065##k - �s�� ����. 50#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 5){ //warrior glove w/ Stim
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var crystals = new Array ("#t1082005##k - �C�h ����. 30#b","#t1082006##k - �C�h ����. 30#b","#t1082035##k - �C�h ����. 35#b","#t1082036##k - �C�h ����. 35#b",
	    "#t1082024##k - �C�h ����. 40#b","#t1082025##k - �C�h ����. 40#b","#t1082010##k - �C�h ����. 50#b","#t1082011##k - �C�h ����. 50#b");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 6){ //bowman glove w/ stim
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var crystals = new Array ("#t1082049##k - �}�b�� ����. 30#b","#t1082050##k - �}�b�� ����. 30#b","#t1082069##k - �}�b�� ����. 35#b","#t1082070##k - �}�b�� ����. 35#b","#t1082072##k - �}�b�� ����. 40#b","#t1082073##k - �}�b�� ����. 40#b","#t1082085##k - �}�b�� ����. 50#b","#t1082083##k - �}�b�� ����. 50#b");
	    for (var i = 0; i < crystals.length; i++){
		selStr += "\r\n#L" + i + "# " + crystals[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 7){ //magician glove w/ stim
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var items = new Array ("#t1082052##k - �k�v ����. 30#b","#t1082053##k - �k�v ����. 30#b","#t1082055##k - �k�v ����. 35#b","#t1082056##k - �k�v ����. 35#b",
	    "#t1082063##k - �k�v ����. 40#b","#t1082064##k - �k�v ����. 40#b","#t1082082##k - �k�v ����. 50#b","#t1082080##k - �k�v ����. 50#b");
	    for (var i = 0; i < items.length; i++){
		selStr += "\r\n#L" + i + "# " + items[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
	else if (selectedType == 8){ //thief glove w/ stim
	    var selStr = "�ܦn�A����A�Q�����@�ӡH�H#b";
	    var gloves = new Array ("#t1082043##k - �s�� ����. 30#b","#t1082044##k - �s�� ����. 30#b","#t1082047##k - �s�� ����. 35#b","#t1082045##k - �s�� ����. 35#b","#t1082076##k - �s�� ����. 40#b",
	    "#t1082074##k - �s�� ����. 40#b","#t1082067##k - �s�� ����. 50#b","#t1082066##k - �s�� ����. 50#b");
	    for (var i = 0; i < gloves.length; i++){
		selStr += "\r\n#L" + i + "# " + gloves[i] + "#l";
	    }
	    cm.sendSimple(selStr);
	}
    } else if (status == 2) {
	selectedItem = selection;
	if (selectedType == 1){ //warrior glove
	    var itemSet = new Array(1082007,1082008,1082023,1082009);
	    var matSet = new Array(new Array(4011000,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4000021,4011001,4003000),new Array(4011001,4021007,4000030,4003000));
	    var matQtySet = new Array(new Array(3,2,15),new Array(30,4,15),new Array(50,5,40),new Array(3,2,30,45));
	    var costSet = new Array(18000,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 2){ //bowman glove
	    var itemSet = new Array(1082048,1082068,1082071,1082084);
	    var matSet = new Array(new Array(4000021,4011006,4021001),new Array(4011000,4011001,4000021,4003000),new Array(4011001,4021000,4021002,4000021,4003000),new Array(4011004,4011006,4021002,4000030,4003000));
	    var matQtySet = new Array(new Array(50,2,1),new Array(1,3,60,15),new Array(3,1,3,80,25),new Array(3,1,2,40,35));
	    var costSet = new Array(18000,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 3){ //magician glove
	    var itemSet = new Array(1082051,1082054,1082062,1082081);
	    var matSet = new Array(new Array(4000021,4021006,4021000),new Array(4000021,4011006,4011001,4021000),new Array(4000021,4021000,4021006,4003000),new Array(4021000,4011006,4000030,4003000));
	    var matQtySet = new Array(new Array(60,1,2),new Array(70,1,3,2),new Array(80,3,3,30),new Array(3,2,35,40));
	    var costSet = new Array(22500,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 4){ //thief glove
	    var itemSet = new Array(1082042,1082046,1082075,1082065);
	    var matSet = new Array(new Array(4011001,4000021,4003000),new Array(4011001,4011000,4000021,4003000),new Array(4021000,4000101,4000021,4003000),new Array(4021005,4021008,4000030,4003000));
	    var matQtySet = new Array(new Array(2,50,10),new Array(3,1,60,15),new Array(3,100,80,30),new Array(3,1,40,30));
	    var costSet = new Array(22500,27000,36000,45000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 5){ //warrior glove w/stim
	    var itemSet = new Array(1082005,1082006,1082035,1082036,1082024,1082025,1082010,1082011);
	    var matSet = new Array(new Array(1082007,4011001),new Array(1082007,4011005),new Array(1082008,4021006),new Array(1082008,4021008),new Array(1082023,4011003),new Array(1082023,4021008),
	    new Array(1082009,4011002),new Array(1082009,4011006));
	    var matQtySet = new Array (new Array(1,1),new Array(1,2),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,4));
	    var costSet = new Array (18000,22500,27000,36000,40500,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 6){ //bowman glove w/stim
	    var itemSet = new Array (1082049,1082050,1082069,1082070,1082072,1082073,1082085,1082083);
	    var matSet = new Array(new Array(1082048,4021003),new Array(1082048,4021008),new Array(1082068,4011002),new Array(1082068,4011006),new Array(1082071,4011006),new Array(1082071,4021008),new Array(1082084,4011000,4021000),new Array(1082084,4011006,4021008));
	    var matQtySet = new Array (new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,1,5),new Array(1,2,2));
	    var costSet = new Array (13500,18000,19800,22500,27000,36000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 7){ //magician glove w/ stim
	    var itemSet = new Array(1082052,1082053,1082055,1082056,1082063,1082064,1082082,1082080);
	    var matSet = new Array(new Array(1082051,4021005),new Array(1082051,4021008),new Array(1082054,4021005),new Array(1082054,4021008),new Array(1082062,4021002),new Array(1082062,4021008),
	    new Array(1082081,4021002),new Array(1082081,4021008));
	    var matQtySet = new Array(new Array(1,3),new Array(1,1),new Array(1,3),new Array(1,1),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,3));
	    var costSet = new Array (31500,36000,36000,40500,40500,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
	else if (selectedType == 8){ //thief glove w/ stim
	    var itemSet = new Array(1082043,1082044,1082047,1082045,1082076,1082074,1082067,1082066);
	    var matSet = new Array(new Array(1082042,4011004),new Array(1082042,4011006),new Array(1082046,4011005),new Array(1082046,4011006),new Array(1082075,4011006),new Array(1082075,4021008),new Array(1082065,4021000),new Array(1082065,4011006,4021008));
	    var matQtySet = new Array(new Array(1,2),new Array(1,1),new Array(1,3),new Array(1,2),new Array(1,4),new Array(1,2),new Array(1,5),new Array(1,2,1));
	    var costSet = new Array (13500,18000,19800,22500,36000,45000,49500,54000);
	    item = itemSet[selectedItem];
	    mats = matSet[selectedItem];
	    matQty = matQtySet[selectedItem];
	    cost = costSet[selectedItem];
	}
		
	var prompt = "�A�Q�n���@�� #t" + item + "#? �b�o�ر��p�U�A���F�n���X�n�~�誺�˳ơC�нT�O�z���Ŷ��b�z���˳���I#b";

	if(stimulator)
	    prompt += "\r\n#i"+stimID+"# 1 #t" + stimID + "#";

	if (mats instanceof Array){
	    for(var i = 0; i < mats.length; i++){
		prompt += "\r\n#i"+mats[i]+"# " + matQty[i] + " #t" + mats[i] + "#";
	    }
	}
	else {
	    prompt += "\r\n#i"+mats+"# " + matQty + " #t" + mats + "#";
	}
		
	if (cost > 0)
	    prompt += "\r\n#i4031138# " + cost + " ����";
		
	cm.sendYesNo(prompt);
    } else if (status == 3) {
	var complete = true;
		
	if (cm.getMeso() < cost) {
	    cm.sendOk("�ڥu���������C");
	} else {
	    if (mats instanceof Array) {
		for (var i = 0; complete && i < mats.length; i++) {
		    if (matQty[i] == 1)	{
			complete = cm.haveItem(mats[i]);
		    } else {
			complete = cm.haveItem(mats[i], matQty[i]);
		    }
		}
	    } else {
		complete = cm.haveItem(mats, matQty);
	    }
	}
			
	if (stimulator){ //check for stimulator
	    if (!cm.haveItem(stimID)) {
		complete = false;
	    }
	}
			
	if (!complete)
	    cm.sendOk("�ѩ�A�S�����������ơA�ҥH�ڤ��������F�C");
	else {
	    if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
		    cm.gainItem(mats[i], -matQty[i]);
		}
	    }
	    else
		cm.gainItem(mats, -matQty);
					
	    cm.gainMeso(-cost);
	    if (stimulator){ //check for stimulator
		cm.gainItem(stimID, -1);
		var deleted = Math.floor(Math.random() * 10);
		if (deleted != 0) {
		    cm.gainItem(item, 1, true);
		    cm.sendOk("�����C���ݧA����M�A�K�o�A�Ϥ�M�a��.");
		} else {
		    cm.sendOk("�������O�A�ʤƾ�...��Ĳ�A����M�C�ګܩ�p�O�ڪ�����.....");
		}
	    } else { //just give basic item
		cm.gainItem(item, 1);
		cm.sendOk("�����C���ݧA����M�A�K�o�A�Ϥ�M�a��.");
	    }
	}
	cm.safeDispose();
    }
}