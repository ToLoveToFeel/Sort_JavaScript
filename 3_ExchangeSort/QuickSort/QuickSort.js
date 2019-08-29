
function main(){
    var y = [ 0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.9, 5.0 ];      //第一项为哨兵项，不参与排序
    var str = '';
    str += '排序方法：快速排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    QuickSort(y, 1, y.length - 1);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function partition(list, low, high) {
    list[0] = list[low];
	while (low < high) {
		while ((low < high) && (list[high] > list[0])) {
			high--;
		}
		if (low < high) {
			list[low] = list[high];
			low++;
		}
		while ((low < high) && (list[low] < list[0])) {
			low++;
		}
		if (low < high) {
			list[high] = list[low];
			high--;
		}
	}
	list[high] = list[0];

	return high;
}

function QuickSort(list, low, high) {
    var t;
    if (low < high) {
		t = partition(list, low, high);
		QuickSort(list, low, t - 1);
		QuickSort(list, t + 1, high);
	}
}
