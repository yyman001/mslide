/**
 * Created by Administrator on 2016/9/18.
 */


$.fn.mslide = function(options) {
	// iterate and reformat each matched element

	var def = {
		"titOnClassName":null,
		"titCell":null,
		"autoPlay":!1,
		"mainCell":null,
		"vis":1,
		"prevCell":null,
		"nextCell":null,
		"scroll":1
	};
	console.log(def);


	return this.each(function() {
		var $this = $(this);

		if(options){
			def = $.extend(def,options);
		}

		//移动容器
		var $mainCell = $this.find(def.mainCell);
		//列表
		var $items = $mainCell.children();
		//列表长度
		var $itemsLen = $items.length;
		//列表项的宽度
		var $itemWidth = $items.outerWidth(true);

		//设置容器宽度
		$mainCell.width($itemsLen * $itemWidth);

		//创建移动对象
		var _$aniMain = $('<div class="aniMain">').css({"position":"absolute","top":"0","left":0});

		//插入移动容器
		$mainCell.wrap(_$aniMain);

		var $aniMain = $this.find('.aniMain');

		console.log($aniMain);
		//索引[活动索引]
		var index = 0;

		//记录移动计算距离索引
		var s_len = 0;

		var _scroll = 0;

		//左边滚动
		$(def.prevCell).on('click',function(){
			var _scroll = getScroll('left');
			console.log('left:', _scroll);
			$aniMain.animate({"left": _scroll});
			return false;
		});

		//右边滚动
		$(def.nextCell).on('click',function(){
			var _scroll = getScroll('right');
			console.log('right:',_scroll);
			console.log('=============================')
//                        console.log($aniMain[0]);
//                        console.log($aniMain.css("left"));
//                        console.log(_scroll);
//                        $(".block").animate({left: '+50px'}, "slow");

			$aniMain.animate({left: -_scroll + 'px'});

			return false;
		});

		//滚动code
		function getScroll(arrow){
			console.log('=============================')
			console.log('前:index:',index);
			//应该滚动距离

//                        s_len  = $itemsLen - def.vis;
			//s_len  = $itemsLen;
			console.log('总步数:',$itemsLen);
			console.log('移动步数:',def.vis);
			console.log('应走步数:',$itemsLen - def.vis); //2

			if($itemsLen - index > def.vis){

				_scroll += $itemWidth * def.vis;
				index+=def.vis;
				console.log(_scroll);
				console.log('已走的步数:',index);

			}else if($itemsLen - index > 0){

				_scroll+= $itemWidth * ($itemsLen - index);
				index+=($itemsLen - index);
			}




//                        if( s_len > def.vis){ //滚动指定 vis 步数
//
//
//                            _scroll = $itemWidth * ($itemsLen - def.vis);
//                            console.log('应走的距离:',_scroll);
//                            index+=def.vis; //记录走的步数
//                            console.log('已走的步数:',index);
//                            /*if(arrow === 'left'){
//                                index-=def.vis;
//                            }else if(arrow === 'right'){
//                                index+=def.vis;
//                            }*/
//
//
//                            console.log('>>vis>>:',_scroll);
//
//                        }
//                        else if(s_len > 0){  //滚动 小于vis的步数
//
//                            _scroll = $itemWidth * ($itemsLen - def.vis);
//                            index+=def.vis;
////                            _scroll = s_len * $itemWidth;
////                            index+=def.vis;
//                            /*if(arrow === 'left'){
//                                index-=def.vis;
//                            }else if(arrow === 'right'){
//                                index+=def.vis;
//                            }*/
//
//                            console.log('>> 0 >>:',_scroll);
//                        }

			console.log('后:index:',index);

			return _scroll;
		}
		//console.log(def);

	});
};