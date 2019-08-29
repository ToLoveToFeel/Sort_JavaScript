
function main(){
    var y = [0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.0, 5.9 ];      //第一项为哨兵项，不参与排序
    var a = [5, 3, 1];
    var str = '';
    str += '排序方法：希尔排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    for (var i = 0; i < a.length; i++) {
        ShellSort(y, a[i]);
    }

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function ShellSort(list, d) {
    var size = list.length - 1;
    var i, j;

    for (i = d + 1; i <= size; i++) {
		if (list[i] < list[i - d]) {
			list[0] = list[i];
			list[i] = list[i - d];
			for (j = i - 2*d; (j > 0) && (list[0] < list[j]); j = j - d) {
				list[j + d] = list[j];
			}
			list[j + d] = list[0];
		}
	}
}



