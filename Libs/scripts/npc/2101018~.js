var status = -1;
var req = 4001126;
var item = [
 
 [2101120, 100],
 [2330005, 100],
 [2450000, 150],
 [2340000, 800],
 [2070006, 800],
 [2022462, 2000],
 [2022179, 5000],
];

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == 1) {
  status++;
 } else if (mode == 0) {
  status--;
 } else {
  cm.dispose();
  return;
 }
 var i = -1;
 if (status <= i++) {
  cm.dispose();
 } else if (status === i++) {
  var msg = "";
  for (var v = 0; v < item.length; v++) {
   var id = item[v][0];
   var qty = item[v][1];
    msg += "#L"+v+"##v" + item[v][0] + ":##t" + item[v][0] + "#1�� = #b" + item[v][1] + "#d ����#k#l\r\n";
  }
  cm.sendSimple("#r�˷R�����a�z�n�A��K�������I���ϡB#i"+req+"#1�ӡA�i�I�����״I���~�p�U~#k#l\r\n" + msg);
 } else if (status === i++) {
  if (!cm.canHold(item[selection][0])) {
   cm.sendNext("�A���I�]�ˤ��U");
   cm.dispose();
   return;
  } else if (!cm.haveItem(req, item[selection][1])) {
   cm.sendNext("���W�S��#v" + req + "#" + item[selection][1]+"��");
   cm.dispose();
   return;
  }
  cm.gainItem(req, -item[selection][1]);
  cm.gainItem(item[selection][0], 1);
  cm.sendOk("�P�±z�A�ݬݦ��S�������o�C");
  cm.dispose();
 }
}