
function main(){
    var y = [ 0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.9, 5.0 ];      //第一项为哨兵项，不参与排序
    var str = '';
    str += '排序方法：直接插入排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    DirectInsertSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function DirectInsertSort(list) {
    var size = list.length;
    var i, j;
    for (i = 2; i <= size; i++) {
		if (list[i] < list[i - 1]) {
			list[0] = list[i];
			list[i] = list[i - 1];
			for (j = i - 2; list[j] > list[0]; j--) {
				list[j + 1] = list[j];
			}
			list[j + 1] = list[0];
		}
	}
}



