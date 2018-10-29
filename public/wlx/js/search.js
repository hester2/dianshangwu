$(function(){
    mui('.my-footer').on('tap','a',function(){
        window.top.location.href=this.href;
      });

	$('#searchBtn').on('click',function(){

		var keyword = $('#keyword').val();

		if(!keyword){

			alert('请输入关键字');

			return;

		}

		if(localStorage.getItem('keywords')){
			// localStorage.getItem("name") //caibin,读取保存在localStorage对象里名为name的变量的值
			var keywords = JSON.parse(localStorage.getItem('keywords'));

			keywords.unshift(keyword);

			localStorage.setItem('keywords',JSON.stringify(keywords));
            // localStorage.setItem("name","caibin") //存储名字为name值为caibin的变量
		}else{

			localStorage.setItem('keywords',JSON.stringify([keyword]));
			// JSON.stringify()【从一个对象中解析出字符串】
		} 

		location.href = "search-list.html?key="+keyword;


	});


	if(localStorage.getItem('keywords')){
		// JSON.parse 获取后台传过来的数据  字符串解析出json对象 转化为json对象数据格式
		var keywords = JSON.parse(localStorage.getItem('keywords'));
        
		$('#historySearch').html(template('historySearchTpl',{data:keywords}));
		//    console.log(template('historySearchTpl',{data:keywords}));
		// 用模板渲染html代码出来
	}

	$('#clearHistory').on('tap',function(){

		localStorage.removeItem('keywords');

		$('#historySearch').html('');

	})

});