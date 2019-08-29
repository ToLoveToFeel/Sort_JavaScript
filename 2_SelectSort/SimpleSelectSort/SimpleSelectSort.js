
function main(){
    var y = [0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.0, 5.9 ];      //第一项为哨兵项，不参与排序
    var str = '';
    str += '排序方法：简单选择排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    SimpleSelectSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function SimpleSelectSort(list) {
    var size = list.length;
    var i, j;
    var min;

    for (i = 1; i < size; i++) {
		min = i;
		for (j = i + 1; j <= size; j++) {
			if (list[j] < list[min]) {
				min = j;
			}
		}
		if (min != i) {
			list[0] = list[i];
			list[i] = list[min];
			list[min] = list[0];
		}
	}
}



