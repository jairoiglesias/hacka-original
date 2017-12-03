//testeextensao
(function($) {
	
    // var self = $.extensaoteste = new function(){};
	
    // $.extend(self, {
 
    // 	extensaoTesteBackgrounds : [
    // 		'https://image.ibb.co/nxZNsw/Whats_App_Image_2017_12_02_at_14_41_32.jpg'
    // 	],

    //     extensaoTesteImgs : [

    //         'https://image.ibb.co/emuNsw/foto5.jpg',
    //         'https://preview.ibb.co/d86rkG/foto6.jpg',
    //         'https://image.ibb.co/mzYtzb/foto7.jpg',
    //         'https://image.ibb.co/fyfvCw/foto8.jpg' ,
    //         'https://preview.ibb.co/mo345G/foto9.jpg',
    //         'https://image.ibb.co/f8mP5G/foto10.jpg',
    //         'https://preview.ibb.co/jQi45G/foto11.jpg',
    //         'https://preview.ibb.co/imx8Xw/foto12.jpg',
    //         'https://preview.ibb.co/gaY45G/foto13.jpg',
    //         'https://image.ibb.co/csYRKb/foto14.jpg',
    //         'https://image.ibb.co/hHPBkG/foto15.jpg',
    //         'https://image.ibb.co/cHKYzb/foto16.jpg',
    //         'https://image.ibb.co/jzLvCw/foto17.jpg',
    //         'https://image.ibb.co/emuNsw/foto5.jpg',
    //         'https://preview.ibb.co/d86rkG/foto6.jpg',
    //         'https://image.ibb.co/mzYtzb/foto7.jpg',
    //         'https://image.ibb.co/fyfvCw/foto8.jpg',
    //         'https://preview.ibb.co/mo345G/foto9.jpg',
    //         'https://image.ibb.co/f8mP5G/foto10.jpg',
    //         'https://preview.ibb.co/jQi45G/foto11.jpg',
    //         'https://preview.ibb.co/imx8Xw/foto12.jpg',
    //         'https://preview.ibb.co/gaY45G/foto13.jpg',
    //         'https://image.ibb.co/csYRKb/foto14.jpg',
    //         'https://image.ibb.co/hHPBkG/foto15.jpg',
    //         'https://image.ibb.co/cHKYzb/foto16.jpg',
    //         'https://image.ibb.co/jzLvCw/foto17.jpg',
    //         'https://image.ibb.co/emuNsw/foto5.jpg',
    //         'https://preview.ibb.co/d86rkG/foto6.jpg',
    //         'https://image.ibb.co/mzYtzb/foto7.jpg',
    //         'https://image.ibb.co/fyfvCw/foto8.jpg',
    //         'https://preview.ibb.co/mo345G/foto9.jpg',
    //         'https://image.ibb.co/f8mP5G/foto10.jpg',
    //         'https://preview.ibb.co/jQi45G/foto11.jpg',
    //         'https://preview.ibb.co/imx8Xw/foto12.jpg',
    //         'https://preview.ibb.co/gaY45G/foto13.jpg',
    //         'https://image.ibb.co/csYRKb/foto14.jpg',
    //         'https://image.ibb.co/hHPBkG/foto15.jpg',
    //         'https://image.ibb.co/cHKYzb/foto16.jpg',
    //         'https://image.ibb.co/jzLvCw/foto17.jpg',
    //         'https://image.ibb.co/emuNsw/foto5.jpg',
    //         'https://preview.ibb.co/d86rkG/foto6.jpg',
    //         'https://image.ibb.co/mzYtzb/foto7.jpg',
    //         'https://image.ibb.co/fyfvCw/foto8.jpg',
            
    //     ],

    //     handleImages : function (lstImgs, time)
    //     {
    //         $.each($('img'), function(i,item) { 
    //             //Skip if image is already replaced
    //             if($.inArray($(item).attr('src'), lstImgs) == -1)
    //             {
	// 				var h = $(item).height();
	// 				var w = $(item).width();
					
	// 				//If image loaded
	// 				if(h > 0 && w > 0)
	// 				{
	// 					//Replace
	// 					$(item).css('width', w + 'px').css('height', h + 'px');
	// 					$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
	// 				}
	// 				else
	// 				{
	// 					//Replace when loaded
	// 					$(item).load(function(){
	// 						//Prevent 'infinite' loop
	// 						if($.inArray($(item).attr('src'), lstImgs) == -1)
	// 						{
	// 							var h = $(item).height();
	// 							var w = $(item).width();
	// 							$(item).css('width', w + 'px').css('height', h + 'px');
	// 							$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
	// 						}
	// 					});
	// 				}
	// 			}
    //         });

    //         //Keep replacing
    //         // if (time > 0) {
    //         //     setTimeout(function () { self.handleImages(lstImgs, time); }, time);
    //         // }
    //     },

    //     handleLogo : function (bgImgs, time)
    //     {
	// 		$backgroundImages = $(
    //         	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
    //         	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
    //         	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
    //         	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
    //         	)
    //         	.filter(function() {
    //         		backgroundImg = $(this).css('background-image');
    //         		return backgroundImg && backgroundImg != 'none';
    //         	}
    //         );

    //         $backgroundImages.each(function(i, item) {
    //         	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
    //         	$(item).css('background-position', '0 0');
    //         	$(item).css('background-repeat', 'no-repeat');
    //         	$(item).css('background-size', 'contain');
    //         });
    //     }
    // });

    
    $(function(){

        setInterval(function(){
            
            console.log(chrome.extension.getURL())
            
            chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
                function(tabs){
                    alert(tabs[0].url);
                }
            );

            console.log('Analisando pagina atual ...')

        }, 500)

    });



})(jQuery);
