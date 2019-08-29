
function main(){
    var y = [ 0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.9, 5.0 ];      //第一项为哨兵项，不参与排序
    var str = '';
    str += '排序方法：堆排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    HeapSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function HeapAdjust(list, m, n) {
    var i;
    list[0] = list[m];
	for (i = 2 * m; i <= n; i *= 2) {
		if (i < n && list[i] < list[i + 1]) {		//选择左右孩子最大的一个
			i++;
		}
		if (list[0] > list[i]) {
			break;
		}
		list[m] = list[i];
		m = i;
	}
	list[m] = list[0];
}

function HeapSort(list) {
    var size = list.length;
    var i;

    for (i = parseInt(size / 2); i > 0; i--) {		//建堆
		HeapAdjust(list, i, size);
	}
	for (i = size; i > 1; i--) {			//排序
		list[0] = list[i];
		list[i] = list[1];
		list[1] = list[0];
		HeapAdjust(list, 1, i - 1);
	}
}



