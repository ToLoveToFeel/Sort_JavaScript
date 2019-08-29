
function main(){
    var y = [ 0.0, 6.0, 2.2, 7.2, 4.0, 9.0, 0.8, 5.9, 5.0 ];      //第一项为哨兵项，不参与排序
    var str = '';
    str += '排序方法：冒泡排序\n'
    str += 'Before Sort:\n' + y.slice(1, y.length).join('  ');

    BubbleSort(y);

    str += '\nAfter Sort:\n' + y.slice(1, y.length).join('  ');

    alert(str);
}

function BubbleSort(list) {
    var size = list.length;
    var change_flag = 1;        //如果没发生交换说明已经排序完成，不需要继续运行，1代表发生变化

    for (var i = size; (i > 1) && (1 == change_flag); i--) {		//n-1趟排序
		change_flag = 0;
		for (var j = 1; j < i; j++) {		//第i趟需要比较n-i-1次
			if (list[j] > list[j + 1]) {
				list[0] = list[j];
				list[j] = list[j + 1];
				list[j + 1] = list[0];
				change_flag = 1;	//发生交换
			}
		}
	}
}