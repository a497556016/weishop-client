app.controller('RoleManaCtrl',['$scope',function($scope){
	$('.table').bootstrapTable({
		toolbar : '#toolbar',
		striped : true,
		pagination : true,
		search : true,
		searchAlign : 'left',
		showFooter : true,
		showColumns : true,
		showRefresh : true,
		showPaginationSwitch : true,
		singleSelect : false,
		sidePagination : 'client',
		pageSize : 10,
		selectItemName : 'checked',
		idField : 'id',
		columns: [{
	        field: 'checked',
	        checkbox : true
	    },{
	        field: 'id',
	        title: 'ID',
	        footerFormatter : function(data){
	        	return '总计';
	        }
	    }, {
	        field: 'name',
	        title: '名称'
	    }, {
	        field: 'price',
	        title: '价格',
	        footerFormatter : function(data){
	        	var total = 0;
	        	for(var i in data){
	        		total += data[i].price;
	        	}
	        	return total;
	        }
	    }],
	    data: [{
	        id: 1,
	        name: 'Item 1',
	        price: 1
	    }, {
	        id: 2,
	        name: 'Item 2',
	        price: 2
	    }]
	});
}]);