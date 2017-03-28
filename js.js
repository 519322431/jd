window.onload=function(){
	var songzhi=document.getElementById('songzhi')
	var chengshi=document.getElementById('chengshi')
	var xzlis=chengshi.getElementsByTagName('li')
	var chengshi2=document.getElementById('chengshi2')
	var jiantou=document.getElementById('jiantou')
	var beijing=document.getElementById('beijing')
	var arr=['北京','上海','天津','重庆','河北','山西','河南','辽宁','吉林','黑龙江','内蒙古','江苏','山东','安徽','浙江','福建','湖北','湖南','广东','广西','江西','四川','海南','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门','钓鱼岛','海外']
	songzhi.onmouseover=function(){
		chengshi.className="xianshi";
		songzhi.className='songzhi2';
		jiantou.className='jiantou';
	}
	songzhi.onmouseout=function(){
		chengshi.className='chengshi';
		songzhi.className='songzhi';
		jiantou.className='jiantou1';
	};
	chengshi.onclick=function(){
		chengshi.className='chengshi';
		beijing.id='chengshi'
	};
	for (var i = 0; i < xzlis.length; i++) {
		xzlis[i].onclick=function(){			
			for (var i = 0; i < xzlis.length; i++) {
				if (xzlis[i]==this) {
					xzlis[i].className='dianji';
					chengshi2.innerHTML='<span>'+arr[i]+'</span>';
				}else{
					xzlis[i].className='chengshi1';
				};
			};
		};
	};
	//城市选择
	var wangzhan=document.getElementById('wangzhan')
	var daohang=document.getElementById('daohang');
	var daohang1=document.getElementById('daohang1');
	var jiantou2=document.getElementById('jiantou2');
	wangzhan.onmouseover=function(){
		daohang.id='daohang3';
		daohang1.id='daohang2';
		jiantou2.className='jiantou3'
	};
	wangzhan.onmouseout=function(){
		daohang1.id='daohang1';
		daohang.id='daohang';
		jiantou2.className='jiantou4';
	};
	//客户服务
	var keh=document.getElementById('keh');
	var kehu1=document.getElementById('kehu1')
	var kehu=document.getElementById('kehu')
	var jiantou5=document.getElementById('jiantou5')
	keh.onmouseover=function(){
		kehu1.id='kehu2';
		kehu.id='kehu3';
		jiantou5.className='jiantou6';
	};
	keh.onmouseout=function(){
		kehu1.id='kehu1';
		kehu.id='kehu';
		jiantou5.className='jiantou7';
	};
	//关注京东
	var guanzhu=document.getElementById('guanzhu');
	var guanzhu1=document.getElementById('guanzhu1');
	var guanzhu2=document.getElementById('guanzhu2');
	var jiantou8=document.getElementById('jiantou8')
	guanzhu.onmouseover=function(){
		guanzhu2.id='guanzhu5';
		jiantou8.className='jiantou9';	
		guanzhu1.id='guanzhu6'
	};
	guanzhu.onmouseout=function(){
		guanzhu2.id='guanzhu2';
		jiantou8.className='jiantou10';
		guanzhu1.id='guanzhu1';
	};
	//手机京东
	var shouji=document.getElementById('shouji');
	var shouji1=document.getElementById('shouji1');
	var shouji2=document.getElementById('shouji2');
	var huishouji=document.getElementById('huishouji');
	var hongshouji=document.getElementById('hongshouji');
	var jiantou11=document.getElementById('jiantou11');
	shouji.onmouseover=function(){
		shouji1.id='shouji3';
		shouji2.id='shouji4';
		jiantou11.className='jiantou12';
		huishouji.style.display='none';
		hongshouji.style.display='block';
	};
	shouji.onmouseout=function(){
		shouji1.id='shouji1';
		shouji2.id='shouji2';
		jiantou11.className='jiantou13';
		hongshouji.style.display='none';
		huishouji.style.display='block';
	};
	//我的京东
	var jingdong=document.getElementById('jingdong');
	var jingdong1=document.getElementById('jingdong1');
	var jingdong2=document.getElementById('jingdong2');
	var jiantou14=document.getElementById('jiantou14');
	jingdong.onmouseover=function(){
		jingdong1.id='jingdong3';
		jingdong2.id='jingdong4';
		jiantou14.className='jiantou12'
	};
	jingdong.onmouseout=function(){
		jingdong1.id='jingdong1';
		jingdong2.id='jingdong2';
		jiantou14.className='jiantou13';
	};

	//腊八礼到
	var datu=document.getElementById('datu');
	var datu4=document.getElementById('datu4');
	var datu5=document.getElementById('datu5');
	var time1=null,v=1;
	datu4.onmouseover=function(){
		datu4.style.display='none';
		datu5.style.display='block';
	};
	datu5.onmouseout=function(){
		datu4.style.display='block';
		datu5.style.display='none';
	};
	datu5.onclick=function(){
		time1=setInterval(function(){
			v-=0.02;
			if (v<=0) {
				datu.style.display='none';
				clearInterval(time1);
			};
			datu.style.opacity=v;
		},10)
	};
	//搜索框
	var sousuo=document.getElementById('sousuo');
	sousuo.onfocus=function(){
		if (sousuo.value=='新年换新装') {
			sousuo.value='';
		};
	};
	sousuo.onblur=function(){
		if (sousuo.value=='') {
			sousuo.value='新年换新装';
		};
	};
	//购物车
	var gouwuche=document.getElementById('gouwuche');
	var gouwuche4=document.getElementById('gouwuche4');
	gouwuche.onmouseover=function(){
		gouwuche.id='gouwuche6';
		gouwuche4.style.display='block';
	};
	gouwuche.onmouseout=function(){
		gouwuche.id='gouwuche';
		gouwuche4.style.display='none';
	};
	//大图滚动
	var gungdong=document.getElementById('gungdong');
	var gundong1=document.getElementById('gundong1');
	var gundong2=document.getElementById('gundong2');
	var gundong3=document.getElementById('gundong3');
	var gundong4=document.getElementById('gundong4');
	var img=gundong1.getElementsByTagName('img');
	var lis=gundong2.getElementsByTagName('li');
	var x=0,time1=null,time2=null;//x是图片跟数字的下标
	function move1(){
	for (var i = 0; i < lis.length; i++) {
		clearInterval(time2);
				lis[i].className='';
				img[i].style.opacity=0;
			};
			lis[x].className='sec';
			var op=0.1;//透明度变化
			time2=setInterval(function(){
				op+=0.02;
				if (op>=1) {
					op=1;
			clearInterval(time2);
			};
		img[x].style.opacity=op;
	},30)
}
	function run(){
		x++;
		if (x>=img.length) {
			x=0;
		};
		move1();
	}
	time1=setInterval(run,5000);
	gundong3.onclick=function(){
		clearInterval(time1);
		x--;
		if (x<0) {
			x=img.length-1;
		};
		move1();
		time1=setInterval(run,2000);
	};	
	gundong4.onclick=function(){
		clearInterval(time1);
		run();
		time1=setInterval(run,2000);
	};
	for (var i = 0; i < lis.length; i++) {
		lis[i].onmouseover=function(){
			clearInterval(time1);
			for (var i = 0; i < lis.length; i++) {
				if (lis[i]==this) {
					x=i;
					move1();
				};
			};
			time1=setInterval(run,2000);
		}
		lis[i].onmouseout=function(){
		clearInterval(time1);
		move1();
		time1=setInterval(run,2000);
		};
		
	};
	gungdong.onmouseover=function(){
		gundong3.style.display='block';
		gundong4.style.display='block';
	};
	gungdong.onmouseout=function(){
		gundong3.style.display='';
		gundong4.style.display='';
	};
	// function dingwei(obj){
	// 	if (document.body.scrollTop>=261) {
	// 		obj.style.position='fixed';
	// 		obj.style.top=0
	// 	}else{
	// 		obj.style.position='absolute';
	// 		obj.style.top='';
	// 	}
	// }
	//家用电器
	var dianqi=document.getElementById('dianqi');
	var dianqi1=document.getElementById('dianqi1');
	var dianqi3=document.getElementById('dianqi3');
	var dianqi4=document.getElementById('dianqi4');
	var dianqi9=dianqi4.getElementsByClassName('dianqi9');
	var dianqi6=dianqi4.getElementsByClassName('dianqi6');
	var dianqi5=dianqi4.getElementsByClassName('dianqi5');
	dianqi.onmouseover=function(){
		dianqi3.style.display='block';
		dianqi.style.background='#F7F7F7';
		dianqi1.style.color='#B61D1D';
	};
	dianqi.onmouseout=function(){
		dianqi3.style.display='none';
		dianqi.style.background='';
		dianqi1.style.color='';
	};
	// document.onmousewheel=function(){
	// 	dingwei('dianqi3')
	// };

	//手机、数码、京东通信
	var shuma=document.getElementById('shuma');
	var shuma1=document.getElementById('shuma1');
	var shuma3=document.getElementById('shuma3');
	var shuma4=document.getElementById('shuma4');
	shuma.onmouseover=function(){
		shuma3.style.display='block';
		shuma.style.background='#F7F7F7';
		shuma1.style.color='#B61D1D';
	};
	shuma.onmouseout=function(){
		shuma3.style.display='none';
		shuma.style.background='';
		shuma1.style.color='';
	};
	// if (document.body.scrollTop>=261) {
	// 	shuma3.style.position='fixed';
	// 	shuma3.style.top=63+'px'
	// }else{
	// 	shuma3.style.position='absolute';
	// 	shuma3.style.top='';
	// };
	//电脑、办公
	var diannao=document.getElementById('diannao');
	var diannao1=document.getElementById('diannao1');
	var diannao3=document.getElementById('diannao3');
	var diannao4=document.getElementById('diannao4');
	diannao.onmouseover=function(){
		diannao3.style.display='block';
		diannao.style.background='#F7F7F7';
		diannao1.style.color='#B61D1D';
	};
	diannao.onmouseout=function(){
		diannao3.style.display='none';
		diannao.style.background='';
		diannao1.style.color='';
	};
	//家具、家装、家居、厨具
	var jiaju=document.getElementById('jiaju');
	var jiaju1=document.getElementById('jiaju1');
	var jiaju3=document.getElementById('jiaju3');
	var jiaju4=document.getElementById('jiaju4');
	jiaju.onmouseover=function(){
		jiaju3.style.display='block';
		jiaju.style.background='#F7F7F7';
		jiaju1.style.color='#B61D1D';
	};
	jiaju.onmouseout=function(){
		jiaju3.style.display='none';
		jiaju.style.background='';
		jiaju1.style.color='';
	};
	// if (document.body.scrollTop>=261) {
	// 	jiaju3.style.position='fixed';
	// 	jiaju3.style.top=125+'px'
	// }else{
	// 	jiaju3.style.position='absolute';
	// 	jiaju3.style.top='';
	// };
	//男装、女装、内衣、珠宝
	var nanz=document.getElementById('nanz');
	var nanz1=document.getElementById('nanz1');
	var nanz3=document.getElementById('nanz3');
	var nanz4=document.getElementById('nanz4');
	nanz.onmouseover=function(){
		nanz3.style.display='block';
		nanz.style.background='#F7F7F7';
		nanz1.style.color='#B61D1D';
	};
	nanz.onmouseout=function(){
		nanz3.style.display='none';
		nanz.style.background='';
		nanz1.style.color='';
	};
	// if (document.body.scrollTop>=261) {
	// 	nanz3.style.position='fixed';
	// 	nanz3.style.top=156+'px'
	// }else{
	// 	nanz3.style.position='absolute';
	// 	nanz3.style.top='';
	// };
	//个护化妆、清洁用品
	var gehu=document.getElementById('gehu');
	var gehu1=document.getElementById('gehu1');
	var gehu3=document.getElementById('gehu3');
	var gehu4=document.getElementById('gehu4');
	gehu.onmouseover=function(){
		gehu3.style.display='block';
		gehu.style.background='#F7F7F7';
		gehu1.style.color='#B61D1D';
	};
	gehu.onmouseout=function(){
		gehu3.style.display='none';
		gehu.style.background='';
		gehu1.style.color='';
	};
	// if (document.body.scrollTop>=261) {
	// 	gehu3.style.position='fixed';
	// 	gehu3.style.top=187+'px'
	// }else {
	// 	gehu3.style.position='absolute';
	// 	gehu3.style.top='';
	// };
	//鞋靴、箱包、钟表、奢侈品
	var xie=document.getElementById('xie');
	var xie1=document.getElementById('xie1');
	var xie3=document.getElementById('xie3');
	var xie4=document.getElementById('xie4');
	xie.onmouseover=function(){
		xie3.style.display='block';
		xie.style.background='#F7F7F7';
		xie1.style.color='#B61D1D';
	};
	xie.onmouseout=function(){
		xie3.style.display='none';
		xie.style.background='';
		xie1.style.color='';
	};
	//运动户外
	var yundong=document.getElementById('yundong');
	var yundong1=document.getElementById('yundong1');
	var yundong3=document.getElementById('yundong3');
	var yundong4=document.getElementById('yundong4');
	yundong.onmouseover=function(){
		yundong3.style.display='block';
		yundong.style.background='#F7F7F7';
		yundong1.style.color='#B61D1D';
	};
	yundong.onmouseout=function(){
		yundong3.style.display='none';
		yundong.style.background='';
		yundong1.style.color='';
	};
	//汽车、汽车用品
	var qiche=document.getElementById('qiche');
	var qiche1=document.getElementById('qiche1');
	var qiche3=document.getElementById('qiche3');
	var qiche4=document.getElementById('qiche4');
	qiche.onmouseover=function(){
		qiche3.style.display='block';
		qiche.style.background='#F7F7F7';
		qiche1.style.color='#B61D1D';
	};
	qiche.onmouseout=function(){
		qiche3.style.display='none';
		qiche.style.background='';
		qiche1.style.color='';
	};
	//母婴、玩具乐器
	var ying=document.getElementById('ying');
	var ying1=document.getElementById('ying1');
	var ying3=document.getElementById('ying3');
	var ying4=document.getElementById('ying4');
	ying.onmouseover=function(){
		ying3.style.display='block';
		ying.style.background='#F7F7F7';
		ying1.style.color='#B61D1D';
	};
	ying.onmouseout=function(){
		ying3.style.display='none';
		ying.style.background='';
		ying1.style.color='';
	};
	//食品、生鲜、酒类、特产
	var shipin=document.getElementById('shipin');
	var shipin1=document.getElementById('shipin1');
	var shipin3=document.getElementById('shipin3');
	var shipin4=document.getElementById('shipin4');
	shipin.onmouseover=function(){
		shipin3.style.display='block';
		shipin.style.background='#F7F7F7';
		shipin1.style.color='#B61D1D';
	};
	shipin.onmouseout=function(){
		shipin3.style.display='none';
		shipin.style.background='';
		shipin1.style.color='';
	};
	//营养保健
	var yingyang=document.getElementById('yingyang');
	var yingyang1=document.getElementById('yingyang1');
	var yingyang3=document.getElementById('yingyang3');
	var yingyang4=document.getElementById('yingyang4');
	yingyang.onmouseover=function(){
		yingyang3.style.display='block';
		yingyang.style.background='#F7F7F7';
		yingyang1.style.color='#B61D1D';
	};
	yingyang.onmouseout=function(){
		yingyang3.style.display='none';
		yingyang.style.background='';
		yingyang1.style.color='';
	};
	//图书、音像、电子书
	var shu=document.getElementById('shu');
	var shu1=document.getElementById('shu1');
	var shu3=document.getElementById('shu3');
	var shu4=document.getElementById('shu4');
	shu.onmouseover=function(){
		shu3.style.display='block';
		shu.style.background='#F7F7F7';
		shu1.style.color='#B61D1D';
	};
	shu.onmouseout=function(){
		shu3.style.display='none';
		shu.style.background='';
		shu1.style.color='';
	};
	//彩票、旅行、充值、票务
	var caipiao=document.getElementById('caipiao');
	var caipiao1=document.getElementById('caipiao1');
	var caipiao3=document.getElementById('caipiao3');
	var caipiao4=document.getElementById('caipiao4');
	caipiao.onmouseover=function(){
		caipiao3.style.display='block';
		caipiao.style.background='#F7F7F7';
		caipiao1.style.color='#B61D1D';
	};
	caipiao.onmouseout=function(){
		caipiao3.style.display='none';
		caipiao.style.background='';
		caipiao1.style.color='';
	};
	//理财、众筹、白条、保险
	var licai=document.getElementById('licai');
	var licai1=document.getElementById('licai1');
	var licai3=document.getElementById('licai3');
	var licai4=document.getElementById('licai4');
	licai.onmouseover=function(){
		licai3.style.display='block';
		licai.style.background='#F7F7F7';
		licai1.style.color='#B61D1D';
	};
	licai.onmouseout=function(){
		licai3.style.display='none';
		licai.style.background='';
		licai1.style.color='';
	};
	// window.onscroll=function(){
	// 	dingwei('licai3')
	// }
	//生活服务
	/*tab切换封装函数*/
function tabfengzhuang(aa,bb,cc,dd){
	for (var i = 0; i < aa.length; i++) {
		aa[i].onmouseover=function (){
			//通过遍历 匹配 判断找出当前点击的对象
			for (var v = 0; v < aa.length; v++) {
				if (this==aa[v]) {
					aa[v].id=cc;
					bb[v].id=dd;
				} else{
					aa[v].id='';
					bb[v].id='';
				};
			};
		}
	};
}
/*tab切换封装函数end*/



/* 获取类名 */
function byclass(classn){//全局获取
	var tags=document.all ? document.all : document.getElementsByTagName('*');
	var arr=[];
	for (var i = 0; i < tags.length; i++) {
		if (tags[i].className.indexOf(classn)!=-1) {
			arr.push(tags[i]);
		}
	};
	return arr;
}
/* 获取类名end */

/*生活服务tab切换*/
function shfwqiehuan(){
	var shenghuoul1=document.getElementById('shenghuoul1');
	var lis1=shenghuoul1.getElementsByTagName('li');
	var pxian=shenghuoul1.getElementsByTagName('p');//红线
	var time1=null,time2=null,time3=null,time4=null,t1=0,x=0,t2=0;//t1指ul1的高度,x判断;


	var hfqiehuan=byclass('hfqiehuan-a');
	var hfqiehuanb=byclass('hfqiehuan-b');
	var hfqiehuanc=byclass('hfqiehuan-c');
	var hfqiehuand=byclass('hfqiehuan-d');
	var fwbeijing=byclass('fw-beijing');
	var fwbeijingb=byclass('fw-beijingb');
	var fwbeijingc=byclass('fw-beijingc');
	var fwbeijingd=byclass('fw-beijingd');
	var fwhuafei=byclass('fw-huafei');

	var fwguanbi=byclass('fwguanbi');

	for (var i = 0; i < lis1.length; i++) {
		lis1[i].onmouseover=function(ev){
			var Event=ev||event;
			var from=Event.fromElement||Event.relatedTarget;
			while(from){
				if (this==from) {
					return false;
				};
				from=from.parentNode;
			}
			//cshenghuou.style.display='block';
			/*话费,机票，电影票切换*/
			if (fwhuafei[0].style.top==40+'px'||fwhuafei[1].style.top==40+'px'||fwhuafei[2].style.top==40+'px'||fwhuafei[3].style.top==40+'px') {
				for (var v = 0; v < lis1.length; v++) {
					if (this==lis1[v]) {
						//lis1[v].id='';
						fwhuafei[v].id='fwhuafei-show';
					} else{
						//lis1[v].id='';
						fwhuafei[v].id='';
					};
					pxian[v].style.display='none';
					if (lis1[v]==this&&t1==-44) {
						//alert('a')
						pxian[v].style.display='block';
					};
				};
				return false;
			};
			
			/*话费,机票，电影票切换end*/
			for (var i = 0; i < lis1.length; i++) {
				if (lis1[i]==this) {
					x=i;
				}
			}
			for (var i = 0; i < lis1.length; i++) {
				pxian[i].style.display='none';
				if (lis1[i]==this&&t1==-44) {
					
					pxian[i].style.display='block';
				};
			}
			// if (t1==-44) {		//判断第二次onmouseover 时的高度，如果达到目标，则不执行运动
			// 	return false;
			// }xian
			t1=0;
			clearInterval(time1);
			time1=setInterval(function(){
				t1--;
				if (t1<=-44) {
					clearInterval(time1);
					t1=-44;
				}
				for (var i = 0; i < lis1.length; i++) {
					lis1[i].style.top=t1+'px';
				}
			},1);
			/*从下往 上运动效果*/
			var step=0;
			var start=214;
			var everystep=(40-214)/10;
			clearInterval(time2);
			time2=setInterval(function(){
				//t2--;
				step++
				if (step>=10) {
					clearInterval(time2);
					step=0;
				}
				start+=everystep;
				for (var i = 0; i < fwhuafei.length; i++) {
					
					fwhuafei[i].style.top=start+'px';
				}
			},10);
			/*从下往 上运动效果end*/

			for (var i = 0; i < fwguanbi.length; i++) {
				fwguanbi[i].onclick=function(){
					for (var i = 0; i < pxian.length; i++) {
						pxian[i].style.display='none';
					}
					var step=0;
					var everystep=(214-40)/10;
					var start=40;
					clearInterval(time3);
					time3=setInterval(function(){
						step++;
						if (step>=10) {
							clearInterval(time3);
							step=0;
						}
						start+=everystep;
						for (var i = 0; i < fwhuafei.length; i++) {
							fwhuafei[i].style.top=start+'px';
						}
					},10);
					t2=-44;
					clearInterval(time4);
					time4=setInterval(function(){
						t2++;
						if (t2>=0) {
							clearInterval(time4);
							t2=0;
						}
						for (var i = 0; i < lis1.length; i++) {
							lis1[i].style.top=t2+'px';
						}
					},1);
				}
			}
		}
		lis1[i].onmouseout=function(ev){
			var Event=ev||event;
			var to=Event.toElement||Event.relatedTarget;
			while(to){
				if (this==to) {
					return false;
				};
				to=to.parentNode;
			}
			//var Event=ev||window.event;
			// if (Event.stopPropagation) {
			// 	Event.stopPropagation();
			// }else{
			// 	Event.cancelBubble=true;
			// };

			// for (var i = 0; i < lis1.length; i++) {

			// 	lis1[i].style.top=-44+'px';
			// };
		}
	}
	/*话费,机票，电影票下边内容切换*/

	tabfengzhuang(fwbeijing,hfqiehuan,'fw-bj','hfqiehuana-show');
	tabfengzhuang(fwbeijingb,hfqiehuanb,'fw-bj','hfqiehuanb-show');
	tabfengzhuang(fwbeijingc,hfqiehuanc,'fw-bj','hfqiehuanc-show');
	tabfengzhuang(fwbeijingd,hfqiehuand,'fw-bj','hfqiehuand-show');
}
shfwqiehuan();
/*生活服务tab切换end*/

//大图滚动
var out=document.getElementById('out');
	var ceng=document.getElementById('ceng');
	var inner=document.getElementById('inner');
	var con1=document.getElementById('con1');
	var bton=document.getElementById('bton');
	var bton1=document.getElementById('bton1');
	var imgs=con1.getElementsByTagName('img')[0];
	var time1=null,time2=null;
	out.onmouseover=function(){
		bton.style.display='block';
		bton1.style.display='block';
	}
	out.onmouseout=function(){
		bton.style.display='';
		bton1.style.display='';
	}
	bton1.onclick=function(){
		clearInterval(time1)
		time1=setInterval(function(){
			ceng.scrollLeft+=10;
			if (ceng.scrollLeft%(1000)==0) {
				clearInterval(time1)
			}else if (ceng.scrollLeft>=4031) {
				ceng.scrollLeft=0	
			};
		},1)		
	};
	bton.onclick=function(){
		clearInterval(time2)
		time2=setInterval(function(){
			ceng.scrollLeft-=10;
			if (ceng.scrollLeft%(1000)==0) {
				clearInterval(time2)
			}else if (ceng.scrollLeft<=0) {
				ceng.scrollLeft=4031;
			};
		},1);
	};
	//换一批
	var cai2=document.getElementById('cai2');
	var cai3=document.getElementById('cai3');
	var huan=document.getElementById('huan');
	var huan1=document.getElementById('huan1');
	var lou1F=document.getElementById('1F');
	var lou2F=document.getElementById('2F');
	var lou3F=document.getElementById('3F');
	var lou4F=document.getElementById('4F');
	var lou5F=document.getElementById('5F');
	var lou6F=document.getElementById('6F');
	var lou7F=document.getElementById('7F');
	var lou8F=document.getElementById('8F');
	var lou9F=document.getElementById('9F');
	var lou10F=document.getElementById('10F');
	var lou11F=document.getElementById('11F');
	var lou=document.getElementById('lou');
	var loulis=lou.getElementsByTagName('li;');
	var s1F=document.getElementsByClassName('1F');
	var s1Fz=document.getElementsByClassName('1F-z');
	huan.onmouseover=function(){
		cai2.style.display='none';
		cai3.style.display='block';
		huan1.style.color='#C81623'
	};
	huan.onmouseout=function(){
		cai2.style.display='block';
		cai3.style.display='none';
		huan1.style.color=''
	};
	lou1F.onclick=function(){
		lou1F.innerHTML='服饰'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>1804) {
			time1=setInterval(function(){
				l-=10;
				if (l<=1804) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<1804) {
			time1=setInterval(function(){
				l+=10;
				if (l>=1804) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}
	}
	lou2F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='美妆'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>2553) {
			time1=setInterval(function(){
				l-=10;
				if (l<=2553) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<2553) {
			time1=setInterval(function(){
				l+=10;
				if (l>=2553) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou3F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='手机'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>3312) {
			time1=setInterval(function(){
				l-=10;
				if (l<=3312) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<3312) {
			time1=setInterval(function(){
				l+=10;
				if (l>=3312) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou4F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='家电'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>3907) {
			time1=setInterval(function(){
				l-=10;
				if (l<=3907) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<3907) {
			time1=setInterval(function(){
				l+=10;
				if (l>=3907) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou5F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='数码'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>4507) {
			time1=setInterval(function(){
				l-=10;
				if (l<=4507) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<4507) {
			time1=setInterval(function(){
				l+=10;
				if (l>=4507) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou6F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='运动'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>5109) {
			time1=setInterval(function(){
				l-=10;
				if (l<=5109) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<5109) {
			time1=setInterval(function(){
				l+=10;
				if (l>=5109) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou7F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='居家'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>5709) {
			time1=setInterval(function(){
				l-=10;
				if (l<=5709) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<5709) {
			time1=setInterval(function(){
				l+=10;
				if (l>=5709) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou8F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='母婴'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>6306) {
			time1=setInterval(function(){
				l-=10;
				if (l<=6306) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<6306) {
			time1=setInterval(function(){
				l+=10;
				if (l>=6306) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou9F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='食品'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>6901) {
			time1=setInterval(function(){
				l-=10;
				if (l<=6901) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<6901) {
			time1=setInterval(function(){
				l+=10;
				if (l>=6901) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou10F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='图书'
		lou11F.innerHTML='11F'
		var time1=null;
		var l=document.body.scrollTop
		if (l>7505) {
			time1=setInterval(function(){
				l-=10;
				if (l<=7505) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<7505) {
			time1=setInterval(function(){
				l+=10;
				if (l>=7505) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou11F.onclick=function(){
		lou1F.innerHTML='1F'
		lou2F.innerHTML='2F'
		lou3F.innerHTML='3F'
		lou4F.innerHTML='4F'
		lou5F.innerHTML='5F'
		lou6F.innerHTML='6F'
		lou7F.innerHTML='7F'
		lou8F.innerHTML='8F'
		lou9F.innerHTML='9F'
		lou10F.innerHTML='10F'
		lou11F.innerHTML='服务'
		var time1=null;
		var l=document.body.scrollTop
		if (l>8105) {
			time1=setInterval(function(){
				l-=10;
				if (l<=8105) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
		}else if (l<8105) {
			time1=setInterval(function(){
				l+=10;
				if (l>=8105) {
					clearInterval(time1)
				};
				document.body.scrollTop=l
			},1)
			document.body.scrollTop=l
		}
	}
	lou1F.onmouseover=function(){
		lou1F.innerHTML='服饰'
	}
	lou1F.onmouseout=function(){
		lou1F.innerHTML='1F'
	}
	lou2F.onmouseover=function(){
		lou2F.innerHTML='美妆'
	}
	lou2F.onmouseout=function(){
		lou2F.innerHTML='2F'
	}
	lou3F.onmouseover=function(){
		lou3F.innerHTML='手机'
	}
	lou3F.onmouseout=function(){
		lou3F.innerHTML='3F'
	}
	lou4F.onmouseover=function(){
		lou4F.innerHTML='家电'
	}
	lou4F.onmouseout=function(){
		lou4F.innerHTML='4F'
	}
	lou5F.onmouseover=function(){
		lou5F.innerHTML='数码'
	}
	lou5F.onmouseout=function(){
		lou5F.innerHTML='5F'
	}
	lou6F.onmouseover=function(){
		lou6F.innerHTML='运动'
	}
	lou6F.onmouseout=function(){
		lou6F.innerHTML='6F'
	}
	lou7F.onmouseover=function(){
		lou7F.innerHTML='居家'
	}
	lou7F.onmouseout=function(){
		lou7F.innerHTML='7F'
	}
	lou8F.onmouseover=function(){
		lou8F.innerHTML='母婴'
	}
	lou8F.onmouseout=function(){
		lou8F.innerHTML='8F'
	}
	lou9F.onmouseover=function(){
		lou9F.innerHTML='食品'
	}
	lou9F.onmouseout=function(){
		lou9F.innerHTML='9F'
	}
	lou10F.onmouseover=function(){
		lou10F.innerHTML='图书'
	}
	lou10F.onmouseout=function(){
		lou10F.innerHTML='10F'
	}
	lou11F.onmouseover=function(){
		lou11F.innerHTML='服务'
	}
	lou11F.onmouseout=function(){
		lou11F.innerHTML='11F'
	}
	//楼层导航
	window.onscroll=function(){
			if (document.body.scrollTop>=1121) {
			lou.style.display='block';
		}else{
			lou.style.display='none';
		}
	};
	for (var i = 0; i < loulis.length; i++) {
		loulis[i].onmouseover=function(){
			for (var i = 0; i < loulis.length; i++) {
				if (loulis[i]==this) {
					loulis[i].className='lou1';
					s1F[i].style.display='none';
					s1Fz[i].style.display='block';
				}else{
					loulis[i].className='block';
					s1Fz[i].style.display='none';
				}
			};
		}
	};
	//1楼tab切换
function qiehuan(a,b,c,d){
	var yilouhead=document.getElementById(a);
	var yilouheads=yilouhead.getElementsByTagName('li');
	var yiloubody=document.getElementById(b);
	var yiloubodys=document.getElementsByClassName(c);
	for (var i = 0; i < yilouheads.length; i++) {
		yilouheads[i].onmouseover=function(){
			for (var i = 0; i < yilouheads.length; i++) {
				if (yilouheads[i]==this) {
					yilouheads[i].className=d;
					yiloubodys[i].style.display='block';
				}else{
					yilouheads[i].className='';
					yiloubodys[i].style.display='none';
				}

			};
		}
	};
}
	//一楼大图滚动

function gundong(a,b,c,d,e,f){
	var yilouinner=document.getElementById(a);
	var yilououter=document.getElementById(b);
	var yiloucon=document.getElementById(c);
	var yilounum=document.getElementById(d);
	var yilouleft=document.getElementById(e);
	var yilouright=document.getElementById(f);
	var imgs=yiloucon.getElementsByTagName('img');
	var yiloulis=yilounum.getElementsByTagName('li');
	var x=0,timer1=null,timer2=null,v=1;//x数字下表
	//v指图片
	var firstImg=yiloucon.children[0].cloneNode(true);
	var lastImg=yiloucon.children[imgs.length-1].cloneNode(true);
	yiloucon.appendChild(firstImg);
	yiloucon.insertBefore(lastImg,yiloucon.children[0]);
	yilouinner.scrollLeft=imgs[0].offsetWidth;//起始位置
	function move(obj,obj1){//图片滚动函数
		clearInterval(timer2);
		var start=obj1.scrollLeft;//起始位置
		var end=imgs[0].offsetWidth*v;//结束位置
		var step=0;//起始步数
		var stepmax=20;//最大步数
		var everystep=(end-start)/20;//每步所走的距离
		for (var i = 0; i < obj.length; i++) {//去掉所有数字的样式
			obj[i].className='';

		};
		obj[x].className='select';//当前显示数字的样式
		timer2=setInterval(function (){
			step++;
			if (step==stepmax) {
				step=0;
				clearInterval(timer2);
			};
			start+=everystep;
			obj1.scrollLeft=start;
		},15)
	}
	// 第一步：自动走
	function automove(obj2){
		clearInterval(timer1);
		timer1=setInterval(function (){//每2秒换一张图片
			x++;
			if (x>=yiloulis.length) {
				x=0;
			};
			v++;
			if (v>=imgs.length) {
				v=2;
				obj2.scrollLeft=imgs[0].offsetWidth;

			};
			move(yiloulis,yilouinner);
		},2000)
	}
	automove(yilouinner);//进入页面自动执行
	// 第二步：点击左边
	yilouleft.onclick=function (){
		clearInterval(timer1);
		x--;
		if (x<0) {
			x=yiloulis.length-1;
		};
		v--;
		if (v<0) {
			v=imgs.length-3;
			yilouinner.scrollLeft=imgs[0].offsetWidth*(v+1);
		};
		move(yiloulis,yilouinner);
		automove(yiloulis);//控制完两秒又继续走
	}
	// 第三步：点击右边
	yilouright.onclick=function (){
		clearInterval(timer1);
		x++;
		if (x>=yiloulis.length) {
			x=0;
		};
		v++;
		if (v>=imgs.length) {
			yilouinner.scrollLeft=imgs[0].offsetWidth;
			v=2;
		};
		move(yiloulis,yilouinner);
		automove(yiloulis);//控制完两秒又继续走
	}
	// 第四步：点击数字
	for (var i = 0; i < yiloulis.length; i++) {
		yiloulis[i].onclick=function (){
			clearInterval(timer1);
			for (var i = 0; i < yiloulis.length; i++) {
				if (yiloulis[i]==this) {
					x=i;
					v=x+1;
					move(yiloulis,yilouinner);
					automove(yiloulis);//控制完两秒又继续走
				};
			};
		}
	};
	yilououter.onmouseover=function(){
		yilouleft.style.display='block';
		yilouright.style.display='block';
	};
	yilououter.onmouseout=function(){
		yilouleft.style.display='';
		yilouright.style.display='';
	};
};
qiehuan('yilouhead','yiloubody','yiloubodys','yilouhead1')
gundong('yilouinner','yilououter','yiloucon','yilounum','yilouleft','yilouright')
// //2F
// 	//二楼大图滚动
function liagundong(a,b,c,d,e,f){
	var erlouinner=document.getElementById(a);
	var erlououter=document.getElementById(b);
	var erloucon=document.getElementById(c);
	var erlounum=document.getElementById(d);
	var erlouleft=document.getElementById(e);
	var erlouright=document.getElementById(f);
	var erlouimgs=erloucon.getElementsByTagName('img');
	var erloulis=erlounum.getElementsByTagName('li');
	var x=0,timer1=null,timer2=null,v=1;//x数字下表
	//v指图片
	var firstImg=erloucon.children[0].cloneNode(true);
	var lastImg=erloucon.children[erlouimgs.length-1].cloneNode(true);
	erloucon.appendChild(firstImg);
	erloucon.insertBefore(lastImg,erloucon.children[0]);
	erlouinner.scrollLeft=erlouimgs[0].offsetWidth;//起始位置
	function move2(){//图片滚动函数
		clearInterval(timer2);
		var start=erlouinner.scrollLeft;//起始位置
		var end=erlouimgs[0].offsetWidth*v;//结束位置
		var step=0;//起始步数
		var stepmax=20;//最大步数
		var everystep=(end-start)/20;//每步所走的距离
		for (var i = 0; i < erloulis.length; i++) {//去掉所有数字的样式
			erloulis[i].className='';
		};
		erloulis[x].className='erlouselect';//当前显示数字的样式
		timer2=setInterval(function (){
			step++;
			if (step==stepmax) {
				step=0;
				clearInterval(timer2);
			};
			start+=everystep;
			erlouinner.scrollLeft=start;
			// erlouinner.scrollLeft=Tween.Bounce.easeOut(step,start,end-start,stepmax);
		},15)
	}
	// 第一步：自动走
	function automove2(){
		clearInterval(timer1);
		timer1=setInterval(function (){//每2秒换一张图片
			x++;
			if (x>=erloulis.length) {
				x=0;
			};
			v++;
			if (v>=erlouimgs.length) {
				v=2;
				erlouinner.scrollLeft=erlouimgs[0].offsetWidth;
			};
			move2();
		},2000)
	}
	automove2();//进入页面自动执行
	// 第二步：点击左边
	erlouleft.onclick=function (){
		clearInterval(timer1);
		x--;
		if (x<0) {
			x=erloulis.length-1;
		};
		v--;
		if (v<0) {
			v=erlouimgs.length-3;
			erlouinner.scrollLeft=erlouimgs[0].offsetWidth*(v+1);
		};
		move2();
		automove2();//控制完两秒又继续走
	}
	// 第三步：点击右边
	erlouright.onclick=function (){
		clearInterval(timer1);
		x++;
		if (x>=erloulis.length) {
			x=0;
		};
		v++;
		if (v>=erlouimgs.length) {
			erlouinner.scrollLeft=erlouimgs[0].offsetWidth;
			v=2;
		};
		move2();
		automove2();//控制完两秒又继续走
	}
	// 第四步：点击数字
	for (var i = 0; i < erloulis.length; i++) {
		erloulis[i].onclick=function (){
			clearInterval(timer1);
			for (var i = 0; i < erloulis.length; i++) {
				if (erloulis[i]==this) {
					x=i;
					v=i+1;
					move2();
					automove2();//控制完两秒又继续走
				};
			};
		}
	};
	erlououter.onmouseover=function(){
		erlouleft.style.display='block';
		erlouright.style.display='block';
	};
	erlououter.onmouseout=function(){
		erlouleft.style.display='';
		erlouright.style.display='';
	};
}	
liagundong('erlouinner','erlououter','erloucon','erlounum','erlouleft','erlouright')
qiehuan('erlouhead','erloubody','erloubodys','erlouhead1')
qiehuan('sanlouhead','sanloubody','sanloubodys','sanlouhead1')
gundong('sanlouinner','sanlououter','sanloucon','sanlounum','sanlouleft','sanlouright')
qiehuan('silouhead','siloubody','siloubodys','silouhead1')
gundong('silouinner','silououter','siloucon','silounum','silouleft','silouright')
qiehuan('wulouhead','wuloubody','wuloubodys','wulouhead1')
gundong('wulouinner','wulououter','wuloucon','wulounum','wulouleft','wulouright')
qiehuan('liulouhead','liuloubody','liuloubodys','liulouhead1')
gundong('liulouinner','liulououter','liuloucon','liulounum','liulouleft','liulouright')
qiehuan('qilouhead','qiloubody','qiloubodys','qilouhead1')
gundong('qilouinner','qilououter','qiloucon','qilounum','qilouleft','qilouright')
qiehuan('balouhead','baloubody','baloubodys','balouhead1')
gundong('balouinner','balououter','baloucon','balounum','balouleft','balouright')
qiehuan('jiulouhead','jiuloubody','jiuloubodys','jiulouhead1')
gundong('jiulouinner','jiulououter','jiuloucon','jiulounum','jiulouleft','jiulouright')
qiehuan('shilouhead','shiloubody','shiloubodys','shilouhead1')
gundong('shilouinner','shilououter','shiloucon','shilounum','shilouleft','shilouright')
gundong('shiyilouinner','shiyilououter','shiyiloucon','shiyilounum','shiyilouleft','shiyilouright')
gundong('shiyilouinner1','shiyilououter1','shiyiloucon1','shiyilounum1','shiyilouleft1','shiyilouright1')
//天天低价
var tiantianout=document.getElementById('tiantianout');
	var tiantian=document.getElementById('tiantian');
	var button=document.getElementsByTagName('button');
	var tiantiancon=document.getElementById('tiantiancon');
	var tiantiandivs=tiantiancon.getElementsByTagName('div')[0];
	var tiantiancon4=document.getElementById('tiantiancon4')
	var time1=null;time2=null;
	tiantiancon4.innerHTML=tiantiancon.innerHTML;
	function tiantianclear() {
		clearInterval(time1);
		clearTimeout(time2);
	}
	function tiantianrun(){
		tiantianclear();
		time1=setInterval(function(){
			tiantianout.scrollTop++;
			if (tiantianout.scrollTop>=tiantiancon.offsetHeight) {
				tiantianout.scrollTop=0;
			}
			if (tiantianout.scrollTop%(tiantiandivs.offsetHeight+35)==0) {
				tiantianclear();
				time2=setTimeout(function(){
					time1=setInterval(tiantianrun,10);
				},1000)
			};
		},10)
	};
	tiantianrun();
	//侧边拦
}