function start() {
    cm.sendYesNo("�z�i�H�ϥ�#b�{ģ������#k�^��{��@�ɡC�A�T�w�n�^�h�ܡH");
}

function action(mode, type, selection) {
    if (mode == 1) {
	var map = cm.getMapId();
	var tomap;

	if (map == 108010101) {
	    tomap = 100000201;
	} else if (map == 108010201) {
	    tomap = 101000003;
	} else if (map == 108010301) {
	    tomap = 102000003;
	} else if (map == 108010401) {
	    tomap = 103000003;
	} else if (map == 108010501) {
	    tomap = 120000101;
	}
	cm.warp(tomap);
    }
    cm.dispose();
}
