var wxshareConf = {
	'appId':'wx80839de5b232cf04',
	'appSecret':'c3e65b9428ede1687e65f45562aa12ab'
};

var wxGetToken = function (callback) {
	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += wxshareConf.appId;
	url += "&secret=";
	url += wxshareConf.appSecret;

	GlobalSocket.createGet(url, function (result) {
		callback && callback(result);

		alert(JSON.stringify(result));
	})
};

var wxPostToken = function (callback) {
	var url = 'https://api.weixin.qq.com/cgi-bin/token';
	url += "?grant_type=client_credential";
	url += "&appid=";
	url += wxshareConf.appId;
	url += "&secret=";
	url += wxshareConf.appSecret;

	console.log(url);

	GlobalSocket.CreateAjaxPost(url, {}, function (result) {
		callback && callback(result);

		console.log(JSON.stringify(result));
	})
};

var wxPostLocalHost = function (callback) {
	var url = (location.href.split('#')[0]);
	var eURL = encodeURIComponent(url);
	var dURL = decodeURIComponent(url);

	var pUrl = 'http://yangmengmeng.com:13000';

	var data = {};
	data.url = encodeURIComponent(url);

	$.post(pUrl, data, function(data,status){
		callback && callback(data);
	});
};

var wxGetLocalHost = function (callback) {
    var url = (location.href.split('#')[0]);
    var eURL = encodeURIComponent(url);
    var dURL = decodeURIComponent(url);

    //var pUrl = 'http://localhost:13000?' + url;
    var pUrl = 'http://www.yangmengmeng.com:13000?' + url;

    $.get(pUrl, function(data){
        callback && callback(data);
    });
};

var wxAjaxGetLocalHost = function (callback) {
    var link = location.href;
    $.ajax({
        url:"http://www.yangmengmeng.com:11000",//后台给你提供的接口
        type:"GET",
        data:{"url":link},
        async:true,
        dataType:"json",
        success:function (data){
            callback(data);
        },
        error:function (error){
            alert(JSON.stringify(error));
        }
    });
};

wx.ready(function () {
	wx.onMenuShareAppMessage({
		title: '叽里呱啦',
		desc: '致想长大的小孩，不想老的大人，妈妈类型大测试，快来测试吧！',
		link: location.href,
		imgUrl: 'http://www.yangmengmeng.com/wxShare.jpg',
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//alert('用户点击发送给朋友');
		},
		success: function (res) {
			//alert('已分享');
		},
		cancel: function (res) {
			//alert('已取消');
		},
		fail: function (res) {
			//alert(JSON.stringify(res));
		}
	});

	wx.onMenuShareTimeline({
		title: '叽里呱啦——快来测试一下你是什么类型的妈妈吧！',
		link: location.href,
		imgUrl: 'http://www.yangmengmeng.com/wxShare.jpg',
		trigger: function (res) {
			// 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
			//alert('用户点击发送给朋友圈');
		},
		success: function (res) {
			//alert('已分享');
		},
		cancel: function (res) {
			//alert('已取消');
		},
		fail: function (res) {
			//alert(JSON.stringify(res));
		}
	});

	wx.error(function(res){

		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		//alert("微信验证失败");
	});
});

