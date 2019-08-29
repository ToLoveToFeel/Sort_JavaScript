
function main(){
    var y = [ 0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.9, 5.0 ];
    var str = '';
    str += '排序方法：归并排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    MergeSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

//合
function Merge(list2, list, left, middle, right) {
    //list为合并后的目标数组，将有序的序列 list2[s..m] 和 list2[m+1..t]归并为有序的序列 list[s..t]
    var i, j, k;
    for (i = left, j = middle + 1, k = left; (i <= middle) && (j <= right); k++) {
		if (list2[i] <= list2[j]) {
			list[k] = list2[i++];
		}
		else {
			list[k] = list2[j++];
		}
	}
	if (i <= middle) {
		for (; i <= middle;) {
			list[k++] = list2[i++];
		}
	}
	if (j <= right) {
		for (; j <= right;) {
			list[k++] = list2[j++];
		}
	}
}

//分
function Msort(list2, list, start, end) {
    //将 list2[s..t] 通过 list3[] 归并排序为 list[s..t]
    var list3 = new Array(list2.length);
    if (start == end) {
		list[start] = list2[start];
	}
	else {
		var middle = parseInt((start + end) / 2);
		Msort(list2, list3, start, middle);		//体现了分久必合的思想
		Msort(list2, list3, middle + 1, end);
		Merge(list3, list, start, middle, end);
	}
}

function MergeSort(list) {
    var size = list.length - 1;
    Msort(list, list, 1, size);
}

