
function main(){
    var y = [ "369", "367", "167", "239", "237", "138", "230", "139" ];
    var slcell = []
    for (var i = 0; i < y.length; i++) {
        slcell.push(new SLCell(y[i], i + 1))
    }
    var list = new SLList(slcell, NUM_OF_NUM, y.length)
	console.log(list);
	
    var str = '';
    str += '排序方法：基数排序\n'
    str += 'Before Sort:\n' + y.join('  ');

    RadixSort(list);

    var p = head;
    str += '\nAfter Sort:\n';
    for (var i = 0; i < list.recnum; i++) {
        str += list.r[p].keys + '  ';
        p = list.r[p].next;
    }

    alert(str);
}

const MAX_NUM_OF_NUM = 0    //关键字项数的最大值,此时整数最多8位
const NUM_OF_NUM = 3	//实际关键字个数
const RADIX = 10	//关键字的基数，此时是十进制整数的基数
const MAX_SPACE = 100

function SLCell(keys, next) {
    this.keys = keys;
    this.next = next;
}

function SLList(r, keysnum, recnum) {
    this.r = r;
    this.keysnum = keysnum;
    this.recnum = recnum;
}

function ord(keys, i) {
    if (i > keys.length) {
        return 0;
    } else {
        return parseInt(keys[i]);
    }
}

function Distribute(R, t, f, r, head) {
    var i;
    for (i = 0; i < RADIX; i++) {
		f[i] = -1;	//链尾指针置为-1
		r[i] = -1;
	}
	for (var p = head; p != -1; p = R[p].next) {
		i = ord(R[p].keys, NUM_OF_NUM - t - 1);		//ord将将记录中的第i个关键字映射到[]
		if (-1 == f[i]) {	//说明关键字为该数字的是第一个
			f[i] = p;
		}
		else {
			R[r[i]].next = p;
		}
		r[i] = p;
	}
}

function Collect(R, f, r, head) {
    var i, t;
    for (i = 0; i < RADIX && -1 == f[i]; ++i) {
		
	}
	head = f[i];		//找到第一个存在的
	t = r[i];
	while (i < RADIX) {
		for (++i; i < RADIX - 1 && -1 == f[i]; ++i) {

		}
		if (i < RADIX && -1 != f[i]) {
			R[t].next = f[i];
			t = r[i];
		}
	}
	R[t].next = -1;

	return head;
}

var head = 0;
function RadixSort(list) {
	list.r[list.recnum - 1].next = -1;
	var f = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	var r = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	for (var i = 0; i < list.keysnum; i++) {
		Distribute(list.r, i, f, r, head);
		head = Collect(list.r, f, r, head);
	}
}

