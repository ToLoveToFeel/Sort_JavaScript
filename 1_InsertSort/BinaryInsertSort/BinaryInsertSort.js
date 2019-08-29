
function main(){
    var y = [0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.0, 5.9 ];      //第一项为哨兵项，不参与排序
	var str = '';
	str += '排序方法：二分插入排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    BinaryInsertSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function BinaryInsertSort(list) {
    var size = list.length - 1;
    var i = 0, j = 0;
    var high, low, middle;

    for (i = 2; i <= size; i++) {
		list[0] = list[i];
		high = i - 1;
		low = 1;
		while (low <= high) {
			middle = parseInt((high + low) / 2);
			if (list[0] > list[middle]) {
				low = middle + 1;
			}
			else {
				high = middle - 1;
			}
		}
		for (j = i - 1; j >= high + 1; j--) {
			list[j + 1] = list[j];
		}
		list[high + 1] = list[0];
	}
}




