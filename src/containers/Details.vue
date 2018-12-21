<template>
	<div>
		<div id="commodityDetail" class="container fluid app-product-container">
			<header>
				<div class="fill-height layout align-center">
					<a class="header-btn" data-stat-id="434a4d17f6cdeefd" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-434a4d17f6cdeefd', '', 'pcpid', '']);"><i @click="back" class="image-icons header-icon icon-back"></i></a>
					<div class="placeholder"></div>
					<a class="header-btn share-btn" data-stat-id="434a4d17f6cdeefd" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-434a4d17f6cdeefd', '', 'pcpid', '']);"><i class="image-icons header-icon icon-share"></i></a>
				</div>
			</header>
			<div class="section section-detail">
				<div class="product_info_product_gallery">
					<div class="swiper-container gallery-view swiper-container-horizontal">

						<!---->

						<!---->
						<mt-swipe :auto="0">
							<mt-swipe-item :key="index" v-for="(item,index) in product.data.goods_share_datas.gallery_view" class="swiper-slide h792 swiper-slide-active"> <img class="img swiper-lazy h792 swiper-lazy-loaded" :src="item.img_url"></mt-swipe-item>

						</mt-swipe>
					</div>
					<div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
					<!---->

				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_activity_tip">
					<!---->
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_product_name">
					<!---->
					<!---->
					<!---->
					<div class="overview overview-goods-name">
						<div class="goods-name ui-flex align-center justify-start fz-xl" v-text="product.data.product_info.name">
							<!---->小米8 青春版</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_product_desc">
					<div class="overview overview-goods-brief">
						<div class="goods-brief fz-xs" v-text='product.data.product_info.product_desc'>潮流镜面渐变色 / 2400万自拍旗舰 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / AI裸妆美颜 / 骁龙660AIE处理器</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_product_price">
					<div class="overview product_info_product_price">
						<div class="goods-price layout align-end justify-start">
							<div class="price cur-price">{{product.data.goods_info[2].price}}
								<!---->
							</div>
							<!---->
							<!---->
							<!---->
						</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_class_parameters">
					<div class="classic-param ui-flex align-center justify-start J_linksign-customize">
						<div v-for="(item,index) in class_parameters" :key="index" class="classic-param-item"><img :src="item.icon">
							<div class="classic-param-item-name fz-xs">{{item.top_title}}</div>
							<div class="classic-param-item-value fz-xxs" v-text="item.value">6.26英寸</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_benefits">
					<div class="border-1px card-box margin-16-32-0">
						<!---->
						<!---->
						<div class="product-section more padding-24-32 border-bottom-1px">
							<div class="ui-flex align-start justify-start J_linksign-customize">
								<div class="title fz-xs" data-stat-id="c36ea3b7a0f11c93" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-c36ea3b7a0f11c93', '', 'pcpid', '']);">促销</div>
								<div class="flex pt1-2x" data-stat-id="2fb519bdad597fb9" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-2fb519bdad597fb9', '', 'pcpid', '']);">
									<div class="ui-flex align-center justify-start act-icon">
										<div class="icon-desc border-1px">赠品</div>
										<div class="icon-title">赠米粉卡，内含100元话费</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="blank_line" style="height: 0.16rem; background: rgb(255, 255, 255);"></div>
			</div>
			<div class="section section-detail">
				<div class="image_w_1080" style="padding-left: 0rem; padding-right: 0rem; background: rgb(255, 255, 255);"><img src="//i8.mifile.cn/v1/a1/68c1e0e1-12c7-abc9-e1c7-686ddaa5435e.webp?w=1080&amp;h=120&amp;bg=F5EEEA" lazy="loaded"></div>
			</div>
			<div class="section section-detail">
				<div class="product_info_choose_version">
					<div class="border-1px card-box margin-16-32-0">
						<div class="product-section more padding-24-32 border-bottom-1px">
							<div class="ui-flex align-center justify-start J_linksign-customize">
								<div class="title fz-xs" data-stat-id="acfc6b0d193ca133" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-acfc6b0d193ca133', '', 'pcpid', '']);">已选</div>
								<div class="flex fz-xs" data-stat-id="8e954ef707e7b352" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-8e954ef707e7b352', '', 'pcpid', '']);">
									<div class="info">小米8 青春版 4GB+64GB 深空灰 x 1</div>
									<!---->
								</div>
							</div>
						</div>
						<div class="product-section more padding-24-32 border-bottom-1px">
							<div class="ui-flex align-center justify-start J_linksign-customize">
								<div class="title fz-xs" data-stat-id="09bbed60ffdc4727" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-09bbed60ffdc4727', '', 'pcpid', '']);">送至</div>
								<div class="flex fz-xs" data-stat-id="f073675bf6233a11" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-f073675bf6233a11', '', 'pcpid', '']);">
									<div class="info"><span class="mr1x">北京市 东城区</span><span class="on"> 有现货</span>
										<!---->
									</div>
								</div>
								<!---->
								<!---->
								<!---->
								<!---->
								<!---->
								<!---->
								<!---->
							</div>
						</div>
						<div class="product-section more padding-16-32 border-bottom-1px">
							<div class="ui-flex align-center justify-start J_linksign-customize service-policy-list">
								<div class="flex service-policy-item" data-stat-id="1f5760c3c41887e9" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-1f5760c3c41887e9', '', 'pcpid', '']);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon"><span class="fsc1">小米自营</span></div>
								<div class="flex service-policy-item" data-stat-id="349877e11d55ac49" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-349877e11d55ac49', '', 'pcpid', '']);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon"><span class="fsc1">小米发货</span></div>
								<div class="flex service-policy-item" data-stat-id="3a1fe436f300b28c" onclick="_msq.push(['trackEvent', '5cffcea8ebad8a30-3a1fe436f300b28c', '', 'pcpid', '']);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg==" class="mr1x img-icon"><span class="fsc1">7天无理由退货</span></div>
								<!---->
								<!---->
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="product_info_comment">
					<div class="comments margin-top-16">
						<div class="comments-gallery swiper-container swiper-container-horizontal">
							<div class="swiper-wrapper">
								<div class="swiper-slide swiper-slide-active">
									<div class="swiper-box border-1px card-box">
										<div class="comment-header layout align-center">
											<div class="avatar-img-box"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/d2a28ecfcebc9d95405dc759d6d0dabc.webp"></div>
											<div class="user-info flex">
												<p class="name fz-xs">张楠</p>
												<p class="comment-date fz-xxs">2018-11-02</p>
											</div>
											<div class="like"><span>2093</span></div>
										</div>
										<div class="comment-content">
											<div class="text fz-xs">非常帅气的解压神器 原谅我的小米5已经不能好好拍照了
											</div>
											<div class="photos">
												<div class="img"><img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/8b560f536377beca489b3357bf2dd628.webp" lazy="loaded"></div>
												<div class="img"><img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/1367310ddba7f7d4d9923074424a150a.webp" lazy="loaded"></div>
												<div class="img"><img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/bcf96ea3ed52c437e10232ec21bd59d9.webp" lazy="loaded"></div>
											</div>
										</div>
										<div class="comment-reply">
											<div class="comment-replay-item official">
												<div class="text fz-xs"><span>官方回复：</span>有此神器温润如玉，如切如磋，如琢如磨~得之，幸之~(✿◡‿◡)感谢您对...</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-next">
									<div class="swiper-box border-1px card-box">
										<div class="comment-header layout align-center">
											<div class="avatar-img-box"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/bf7bf3632b26775c59759d863d617f49.webp"></div>
											<div class="user-info flex">
												<p class="name fz-xs">玉小主</p>
												<p class="comment-date fz-xxs">2018-11-03</p>
											</div>
											<div class="like"><span>362</span></div>
										</div>
										<div class="comment-content">
											<div class="text fz-xs">星期六，早上6点在顺丰大门口堵门，等来了快递员。没等来快递车，一直等到7点...</div>
											<div class="photos">
												<div class="img"><img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/61d877ae4a48ed68783d05831e526eaa.webp" lazy="loaded"></div>
												<div class="img"><img class="lazy" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/52b5f20b15ffd188523150607651b6bc.webp" lazy="loaded"></div>
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
											</div>
										</div>
										<div class="comment-reply">
											<div class="comment-replay-item official">
												<div class="text fz-xs"><span>官方回复：</span>如果有一个人，不辞万里来见你，风雨无阻，他关心你，时时刻刻等候着你~~...</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="swiper-box border-1px card-box">
										<div class="comment-header layout align-center">
											<div class="avatar-img-box"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/0ba82c1c363b41dafcc934ddcdfdf8f2.webp"></div>
											<div class="user-info flex">
												<p class="name fz-xs">宝乐乐</p>
												<p class="comment-date fz-xxs">2018-11-02</p>
											</div>
											<div class="like"><span>200</span></div>
										</div>
										<div class="comment-content">
											<div class="text fz-xs">美！美！美！客服妹子，我要藏头诗，我爱李艳君。</div>
											<div class="photos">
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
											</div>
										</div>
										<div class="comment-reply">
											<div class="comment-replay-item official">
												<div class="text fz-xs"><span>官方回复：</span>我绕武侯筹笔地，爱花瑶草尽堪携。艳山僧别留茶鼎，君县看花柳满堤。一首诗...</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide">
									<div class="swiper-box border-1px card-box">
										<div class="comment-header layout align-center">
											<div class="avatar-img-box"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/5d15e7d647dc89447b6ac8eff36b89bc.webp"></div>
											<div class="user-info flex">
												<p class="name fz-xs">JOJO</p>
												<p class="comment-date fz-xxs">2018-11-03</p>
											</div>
											<div class="like"><span>208</span></div>
										</div>
										<div class="comment-content">
											<div class="text fz-xs">不行不行，我不舍得打开，先占评价，我要当着全家人面前拆盒【捂脸】。打字都在...</div>
											<div class="photos">
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
											</div>
										</div>
										<div class="comment-reply">
											<div class="comment-replay-item official">
												<div class="text fz-xs"><span>官方回复：</span>隔着屏幕已经感受到满满快要溢出的开心呢，感谢您的喜欢，让我们倍感欢喜~...</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide last">
									<div class="swiper-box border-1px card-box">
										<div class="comment-header layout align-center">
											<div class="avatar-img-box"><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/c00e0df6fc7f9bae0ba2c3e8d2b92bd8.webp"></div>
											<div class="user-info flex">
												<p class="name fz-xs">一叶知秋1996</p>
												<p class="comment-date fz-xxs">2018-11-03</p>
											</div>
											<div class="like"><span>76</span></div>
										</div>
										<div class="comment-content">
											<div class="text fz-xs">今天他(Mix3)是主角，简直是太漂亮了，无法用言语来形容他的美，这次的黑...</div>
											<div class="photos">
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
												<div class="img"><img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" lazy="loading"></div>
												<!---->
												<!---->
												<!---->
											</div>
										</div>
										<div class="comment-reply">
											<div class="comment-replay-item official">
												<div class="text fz-xs"><span>官方回复：</span>陛下，您请看，此物之华贵，世间仅有，沉稳大气，祥瑞之气外露，乃帝王之物...</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="javascript:;" class="more-comments fz-m" data-stat-id="44ee633fc0e314fa" @click="toComment"><span>更多评论</span></a>
					</div>
				</div>
			</div>
			<div class="section section-detail">
				<div class="image_w_1080" style="padding-left: 0rem; padding-right: 0rem; background: rgb(255, 255, 255);"><img src="//i8.mifile.cn/v1/a1/d5bda07d-e978-9496-82e8-3c6f1516269c.webp?w=1080&amp;h=2256&amp;bg=242E48" lazy="loaded">
				</div>
				<div class="section section-detail">
					<div class="image_w_1080" style="padding-left: 0rem; padding-right: 0rem; background: rgb(255, 255, 255);"><img src="//i8.mifile.cn/v1/a1/cdd75e25-8f5e-62ba-e363-325c89fb518b.webp?w=1080&amp;h=731&amp;bg=0F1622" lazy="loaded"></div>
				</div>
				<div class="section section-detail">
					<div class="image_w_1080" style="padding-left: 0rem; padding-right: 0rem; background: rgb(255, 255, 255);"><img src="//i8.mifile.cn/v1/a1/cdd75e25-8f5e-62ba-e363-325c89fb518b.webp?w=1080&amp;h=731&amp;bg=0F1622" lazy="loaded"></div>
				</div>
			</div>
		</div>
		<div class="pop pop-product" style="display:none">
			<div class="close"><i @click="close" class="image-icons icon-close"></i></div>
			<div class="pro-info layout row align-center justify-space-around">
				<div class="product-img border-1px"><img src="//i8.mifile.cn/a1/pms_1540429613.4617799.jpg"></div>
				<div class="product-desc flex layout column justify-start">
					<div class="product-price layout align-end">
						<div class="price cur-price">3299</div>
						<!---->
					</div>
					<!---->
					<div class="name">小米MIX 3 全网通版 6GB+128GB 黑色</div>
				</div>
			</div>

			<div class="max5">
				<div class="border-top-1px mt2x">
					<div class="option-title pt32">版本<span style="display: none;">请选择： 版本</span></div>
					<div class="options-group align-center justify-start layout wrap">
						<div @click="preference" class="preference1 option-item border-1px align-center justify-center ui-flex cos line justify-space-between">
							<!---->
							<p>6GB+128GB</p>
							<p>3299元</p>
						</div>
						<div class="option-item border-1px align-center justify-center ui-flex cos line justify-space-between">
							<!---->
							<p>8GB+128GB</p>
							<p>3599元</p>
						</div>
						<div class="option-item border-1px align-center justify-center ui-flex cos line justify-space-between">
							<!---->
							<p>8GB+256GB</p>
							<p>3999元</p>
						</div>
					</div>
				</div>

				<div class="border-top-1px mt2x">
					<div class="option-title pt32">颜色<span style="display: none;">请选择： 颜色</span></div>
					<div class="options-group align-center justify-start layout wrap">
						<div class="option-item border-1px align-center justify-center ui-flex cos">
							<!---->
							<p>黑色</p>
							<!---->
						</div>
					</div>
				</div>
				<div class="border-top-1px pd32 layout align-center justify-space-between">
					<div class="option-title">购买数量</div>
					<div class="xm-input-number">
						<div class="input-sub"><i class="image-icons icon-line"></i></div>
						<div class="input-num"><span>1</span></div>
						<div class="input-add"><i class="image-icons icon-cross"></i></div>
					</div>
				</div>
				<!---->
				<div class="ywb">
					<div class="border-top-1px pd32">
						<div class="option-title">延长保修
							<a href="https://api.jr.mi.com/activity/accidentIns/?from=mishop&amp;insuranceSku=22033" class="service-url"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII="></a>
							<!---->
						</div>
						<div class="options-group">
							<div class="layout wrap align-center justify-start">
								<div class="option-item border-1px w49 ui-flex justify-space-between">
									<div class="discount-tips">20</div>
									<p>延长保修服务</p>
									<p>79元</p>
								</div>
							</div>
						</div>
						<!---->
					</div>
				</div>
				<div class="ywb">
					<div class="border-top-1px pd32">
						<div class="option-title">意外保护
							<a href="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/aaeb2870d32f.html" class="service-url"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhFNUZBNEJBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhFNUZBNENBNjg2MTFFN0JGODNEMTFGMzE1NTJDREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNEE0ODY5NEE2NzUxMUU3QkY4M0QxMUYzMTU1MkNERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOEU1RkE0QUE2ODYxMUU3QkY4M0QxMUYzMTU1MkNERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqoKySAAAALWSURBVHjatJfPS1RRFMef9002Q9BiRlPIzE2TusgWQZQFFS364aJwUZBEYW3atAv6S1y0K3chSEUbqQaSQoqKirJGwppxMaZvIaSTaPo98L1xebxf900d+KDMu/d+7zn33PPOa3KSmQuKYA/YBQogy2d1sAgqoAy+gvW4BZtinufAEXAIzINpMAsWwIoxpgV0gW7QBl6ASWOMlfB+MEAPnoGfCaMjmzjBCD0C7xLOcxQ4D24xrGlN5t7mWirOYxkwBJrBPfDbacy2gcvgFxgFf8KEz4F2cCckQeQ8DzLJJMHyoAo8JtZUSGIOM0fGzR+19YHDFA3ytAPcBL0UzfH37UyoXibYZ7BmzNsAH8EZel4zhWWRq+AuM9Zv4tkNjpNMnQAl8IZCeW6gwCiWffPXed0ugFeyMS18nLt5GXJWQ/RKbAS8Z3g9eiAh7qF4F6/Smm+NJa6xA3xT9Fru6ZMQ0TzP1KFANWTclO9YguwptVzF+zbP6uNELOqFJI82z7fZIFukVjFD4emYBccSXJ2dxv9zEeNEa6/ihO8N3tcO5onDxKpGjP0hmuJxq0U5DLJ9YJAZX2WhiDIJdUuGb5l6StFBFhTt6WjUi4Emz7OZBjw9Zog+5r1ObIreZi1Fc8aZ2orK3LpipWpNkUy6ZJYs54rWgmJC7E4Z7nKKOaI15zLcB8Bri8mSIDOs00uWwqekxit2GG0s8DbCcfc1yAqs1V9cvraaWeQ/WZyx3qxnITzASM3olmSSjVrSVuc0uE5sWqFuav3thSR0D8Altiv/2raCi+ChLjBmB1Jjh9gP3vIIwmwL29wy/8b15FfYCJSSNHvSjaz+r2bP9Q0ULz+ATvZIlRTXxTzTa3zz3TdFg4S1uLwzl9kjtfMYli0a+rPgpFFON9J8whxlu1JjwZhlJ2F+whTYa/Xwmknv9jztJ0zQR1uRIcwbtXqFd7nCYpToo21TgAEAWy6shL93DD4AAAAASUVORK5CYII="></a>
							<!---->
						</div>
						<div class="options-group">
							<div class="layout wrap align-center justify-start">
								<div class="option-item border-1px w49 ui-flex justify-space-between">
									<div class="discount-tips">60</div>
									<p>意外保障服务</p>
									<p>239元</p>
								</div>
								<div class="option-item border-1px w49 ui-flex justify-space-between">
									<div class="discount-tips">32</div>
									<p>碎屏保障服务</p>
									<p>127元</p>
								</div>
							</div>
						</div>
						<!---->
					</div>
				</div>
			</div>

			<div class="btn-bottom">
				<div class="action-box flex">
					<a class="buy-btn">立即预约</a>
				</div>
			</div>
		</div>

		<footer>
			<div class="fill-height layout align-center bgw">
				<a href="/" class="footer-btn router-link-active" onclick="window._msq &amp;&amp; window._msq.push(['trackEvent', 'product-detail-home-btn', '/product/view'])"><i class="image-icons footer-icon icon-home"></i><span>首页</span></a>
				<a onclick="window._msq &amp;&amp; window._msq.push(['trackEvent', 'product-detail-cart-btn', '/product/view'])" class="footer-btn"><i class="image-icons footer-icon icon-cart"></i><span>购物车</span>
					<!---->
				</a>
				<div class="action-box flex">
					<a @click="buybtn" class="btn buy-btn">立即预约</a>
				</div>
			</div>
			<div class="safe-area-inset" style="background: transparent;"></div>
		</footer>
	</div>

</template>
<script type="text/javascript">
	import axios from "axios";
	import detail from "../assets/detail.json";
	import 'mint-ui/lib/style.css'

	import $ from "jquery"
	window.$ = $

	export default {
		data() {
			return {
				//拿到页面id
				id: this.$route.params.id,
				product: '',
				//6.26英寸list
				class_parameters: '',
			}
		},
		
		mounted() {
			this.product = detail;
			this.class_parameters = this.product.data.goods_info[2].class_parameters.list;
			this.loadMore();
		},
		methods: {
			loadMore() {
				 var self = this;
				   axios
				       .get("http://47.107.156.61/commodity/detail/?pid="+self.id)
				       .then(function(response) {
				           console.log(response);
				           
				       })
				       .catch(function(error) {
				           console.log(error);
				       });

				//          console.log(this.product.data.goods_share_datas.gallery_view)
			},
			// 返回
			back() {
				this.$router.history.go(-1);
			},
			buybtn() {
				$('.pop').css("display", 'block');
			},
			close() {
				$('.pop').css("display", 'none');
			},
			preference() {
				$('.preference1').removeClass("on");
				$('.preference1').addClass("on");

			},
			toComment(){
				this.$router.push({name:"comment"});
			}
		}

	}
</script>
<style scoped>
	.ui-mask {
		z-index: 1000
	}
	
	.border-1px.card-box {
		background-color: #fafafa;
		border-radius: .16rem;
		overflow: hidden
	}
	
	.border-1px.card-box:before {
		border-color: #e5e5e5;
		border-radius: 2.56px;
		border-radius: .16rem
	}
	
	.comments-gallery {
		width: 7.2rem;
		height: 4.7rem;
		text-align: left
	}
	
	.comments-gallery .swiper-slide {
		width: 5.9rem;
		margin-left: .32rem
	}
	
	.comments-gallery .swiper-slide.last {
		width: 6.22rem
	}
	
	.comments-gallery .swiper-box {
		width: 5.9rem;
		height: 4.7rem;
		box-sizing: border-box;
		padding: .32rem
	}
	
	.comments-gallery .swiper-box.one {
		width: 6.56rem
	}
	
	.comments-gallery .swiper-box.auto-height {
		height: auto
	}
	
	.comment-header .avatar-img-box {
		margin-right: .24rem;
		width: .64rem;
		height: .64rem;
		overflow: hidden;
		border-radius: 100%
	}
	
	.comment-header .avatar-img-box img {
		width: 100%
	}
	
	.comment-header .name {
		color: rgba(0, 0, 0, .87)
	}
	
	.comment-header .comment-date {
		margin-top: .05rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.comment-header .like {
		padding-left: .4rem;
		background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAApCAYAAABDV7v1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ0NUY5NzNGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ0NUY5NzRGRTVCMTFFN0ExRUNCNDEyMEVGQjUzQjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RDQ1Rjk3MUZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RDQ1Rjk3MkZFNUIxMUU3QTFFQ0I0MTIwRUZCNTNCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsLgqlwAAAKCSURBVHja1JjbS1RBHMfPbltQQTcD7UKWpCjeipWiRJOih66iIj7YX9CbCAo+GPRob0HBQmqPUQ89STcoVsouVkQQGASaIIjIpoRKF3b9DsyJr8Mc19bZc2Z/8IH5zRnOfM/Mb34zZ0KxWMwxaNtAF2gBRWARfAb3wF2wlOmLIwZF7gKvQQnVbQL1EvEBbeBdJi8PGxTaq4hU7SB4DmqCFnqFyh9BNTgNHlL9VjCQSb+mhO4DeeR3yNh8AZqlONcqwYmghFZReRYMK8+vK340KKHHqDyqef5dWfF7ghLalEaoyC6b19OvCaFH5cJx7a2mTZniJ4IQeo3KIsG/0rS5oAkFX4WeB5fJfwDmNe3aFP+Tn0L3g34Qkn4S3NC0Ow6OkD8DvvolNB88AgVUNwi+aNr2KL7YAFJ+CK2TC6aC6iZBp6ZtLbik1N3J5ha6HTSCJyAOCunZD3DRIzavUmhw+kqtgSQtziqR356Cs/Siv+An+Rvk8U1n43JBjXk8n1/HGgjJ3HsS3BIjekaTnHcSOpG/wU2ZP8dW6awPfDOQAqOR/4xT0el9cBtMraH9BCjOQFiBPNCUuiEa0Qw32w4Zg64VO/7YNBgioYl0oznnBGf5fL4NO/ZaLZWHbRV6ABzKBaGnqLwA3tsqtJ7KL0Vut1VoA0+76b9QU7YXHM4FoRyfS+6Fhe1C38jt2kqhvJDi2bgpMbUbleWCUJ72X/xHG7Z42kf50sLmEY1n46bEhO0G5Wr+tFFoHZ2H/6gXGTYJPUflD/IwYp1Qcaxr94pPG4RulFP+GGzxik/3j5Mt3Q1Gygfxs14jmrQsRXWr8ekKfWaBOCFsBLQ6K+/7/9myAAMA/8t6rPtyX9AAAAAASUVORK5CYII=) no-repeat 0 top;
		background-size: auto 80%;
		height: .36rem;
		line-height: .36rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.comment-content {
		text-align: justify
	}
	
	.comment-content .text {
		margin: .12rem 0;
		line-height: 1.5em;
		height: 3em;
		overflow: hidden;
		position: relative;
		color: rgba(0, 0, 0, .87)
	}
	
	.comment-content .photos {
		margin-bottom: .12rem
	}
	
	.comment-content .photos .img {
		display: inline-block;
		width: 1.646rem;
		height: 1.26rem;
		margin: 0 .16rem 0 0;
		border-radius: .16rem;
		overflow: hidden;
		position: relative
	}
	
	.comment-content .photos .img:last-child {
		margin-right: 0
	}
	
	.comment-content .photos .img img {
		width: 100%;
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%)
	}
	
	.comment-reply {
		text-align: justify
	}
	
	.comment-reply .comment-replay-item {
		overflow: hidden;
		padding: .05rem 0
	}
	
	.comment-reply .comment-replay-item .text {
		line-height: 1.5em;
		text-align: left
	}
	
	.comment-reply .comment-replay-item.official span {
		color: #ff6700
	}
	
	.comment-album {
		background: #000;
		width: 7.2rem;
		height: 100%
	}
	
	.comment-album img {
		display: block;
		max-width: 100%
	}
	
	.comment-album span {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate3d(-50%, -50%, 0);
		-webkit-transform: translate3d(-50%, -50%, 0);
		text-align: center
	}
	
	.comment-album-process {
		position: absolute;
		top: .5rem;
		left: 0;
		right: 0;
		color: #fff;
		text-align: center;
		z-index: 100;
		font-size: .24rem
	}
	
	.swiper-wrapper {
		padding-right: .32rem
	}
	
	@media (-webkit-min-device-pixel-ratio:2),
	(min-resolution:2dppx) {
		.border-1px.card-box:before {
			border-radius: 5.12px;
			border-radius: .32rem
		}
	}
	
	@media (-webkit-min-device-pixel-ratio:3),
	(min-resolution:3dppx) {
		.border-1px.card-box:before {
			border-radius: 7.68px;
			border-radius: .48rem
		}
	}
	
	.pb10 {
		padding-bottom: .1rem
	}
	
	footer {
		padding: 0 .16rem .16rem;
		background: transparent;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100
	}
	
	footer .bgw {
		background-color: hsla(0, 0%, 100%, .96) !important;
		width: 100%;
		height: 1.04rem;
		border: 1px solid #e5e5e5;
		border-radius: .16rem;
		overflow: hidden;
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12)
	}
	
	footer .footer-btn {
		position: relative;
		display: block;
		text-decoration: none;
		width: auto;
		margin-left: .5rem;
		color: rgba(0, 0, 0, .54)
	}
	
	footer .footer-btn span {
		color: rgba(0, 0, 0, .54)
	}
	
	footer .footer-btn .bubble {
		position: absolute;
		min-width: .28rem;
		line-height: .28rem;
		height: .28rem;
		box-sizing: border-box;
		padding: 0 .05rem;
		font-size: .18rem;
		overflow: hidden;
		text-align: center;
		border-radius: .28rem;
		background: #ed4d41;
		color: #fff;
		top: 0;
		left: 50%;
		-webkit-transform: translate3d(.1rem, -20%, 0);
		transform: translate3d(.1rem, -20%, 0);
		font-style: normal
	}
	
	footer .footer-icon {
		display: block;
		width: .4rem;
		height: .4rem;
		margin: 0 auto .04rem
	}
	
	footer .footer-icon.icon-home {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAk1BMVEUAAABxcXFxcXFwcHBxcXFwcHBvb29wcHBwcHBxcXFvb29wcHBubm5vb29vb29wcHBwcHBvb29wcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBycnJwcHBwcHBwcHBvb29wcHBwcHBwcHBwcHBvb29vb29wcHBwcHBwcHBubm5wcHB0dHRycnJ2dnY0KzjsAAAALnRSTlMAAgn0mv6+6cEcQdIlEg36rTcy5E0g7tXFu6GPhmwG3Kl4KbSTc1xXR8p/Zyxhwd65kwAAAr1JREFUSMftlumSojAUhYEYQemwg7K4r63dOXn/p5ubbqoVcByw5tfUnNLKMfB5b05AMZ7JJBkv6gt8mRZhKF6ta552uxMNr7DLi82YfVmSHcyKEYeU4CMxkKaQ0wDgQcCBIKXPg2KO5hJ+6XmlD8wjmhrAJjOAHUzyBwbMEjK92U8bsI9kyR+1/yTfc4s2utpZW/066y42NN2H9fb8e521aP0A9l6X7sY8WeuYU/I/q0h16OvJn0OPHGIbZcgK3YwTPQXrBfr6qmrFcPHrGJ6wxxjIrmQ7R64ZEB/JPo15lZB9tPWrJ6FTzGUrZq1m6LzUaXRRipnY4JZpdx8Coin0B/jHGMDIexaJNwIw/ujWnboAr9oxt0JfVhxwp2Qb7EnHvLifNWu8ed5Ch34iez/HwFdJh/1d6D9VaLAqH9wNW81sF0VQHKL25oRzDr+y9Kx+i4Jzjl2zrneJfamUb+8nrRTCjE4vxPfp2xwadqxGsAWX0me+lMjTZuepDQ7k2682XAl7xyTB5q3nEuD54XQNGGRgNXp6s8EYl25IPTsK7BhmTThh8EtB1jqQu7Zg6W5iqLEwxE6tTsb0vjJFVChemN/7VHE1pkunAb+Lc6x2QocaGm347V3Z0zrPj5VahS14NjHCxbaeaMNRTF9eeyuQWdKC3cntTuzAYSznXl3ZXEvWhfWBmm7D25mMoxpOXRVPH8G1OrC1VrysL+wDV3oJfWEajxzs+uWTGHxjmENgXZoVyfa8t7lyqHB/mEzqKIDZDFCz0BgEk9JRBiklWEDJDYPJLqdVPs/LxKNPA2HtTTERehgM179fNToY1jjJ6A939R/+B+EeegyPlz2fD9MujLkwrR7yjCiTswYc2TJz8nEf5e++dMQ9vByBS9VHUknOW08BaQDZV/rfuamwGvXVJu2EOETdu3yAjL+gX1S9Wc5duViwAAAAAElFTkSuQmCC)
	}
	
	footer .footer-icon.icon-cart {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABHCAYAAACgTtGvAAADTUlEQVR4AWIsKCiYx8AAaNcegGu7ojCO56K2Gw3q3mZUa1Tbtjmobbsdq+2zbQ2fNYr5/GLbyf/5vRWdc7Ku9t3fzG8Qnnx373WyT5L0PPwYKb0Yh5eQUPGLkpx9fALGr/855hY1Dr1wk3MTsaiXEIBvCD9CJmS33sDkQOYyW9TAZNsV5ayoQnTj8GTYogamA0WwK8rDnDod59qidAb6nShFD/riTCtW4QG3RWV7KOo/JMOPeMtxuBFz8BOSgnCS3AS+832KNU5f7UJ0uVxRr6AcJuRdp0V1I99lUYuRDF+cOAaPohoyV8ui3Az005AMU9KJmXgJMr2iKA8D3bwsh0zWwKLsQE9xVpQ9HIdGW1QJ2uQXTZCictwU1YOCBFhRl0ImWxbldqCfhhTDV9Ru1MqivMypkOErKmvgWc8O9DScPHAXiaLs087BB7mXorajRWlF3YlS9GlDKe5U2Haet14vcpWK+i+MR6Bk/KdQVA9yRVGe59SpSEWsxQe3kS96MdpEUfpHmSg+htmNlxVWVC72JgiiMtBXQMTBY5jYyTk4Q84n8SjY/oogVpNKUTvQKFeULcrZqspAvEfuig6UaBd1ClINW1F56NYoSiZk4hnvyKLsQD8NybYoj2c8jaJKUSu/mWkP60RRnpNr8IpqwA6torLlnQ9pZg1yWZS988nrzlYvyoDtdxLS5c+mWZQpTzsvgS+cW68KECvKpDOeLEpx+4VM+fOUdlEm3PlkUbkgukXlGjDQLx647fSLyorzojJwoUJRxv4r0NG4H4vEHa8bSzEgQYwmtSgTJ++XgbjMDJSrrSiRbJiQTnwLEp6ilsGEfIwCEKWtJ/IXTsbbOAPxlG7k4xdMAglfUX34GjA3fsRGbFG2KFuUjS3KFmWLskXZonx4FPOwGfPxGHyIRoJ4GUuxGdNxu4cvol7Sf3gRB3IF7sX9eAZ9EX6cMg93iOt5FL/ik2itqJdBSYPmKbyOSOYLUZI8BN8VvaKGzytQiN71RKuo872/Xz3HIUXnevSLKsdwKUOk0oYGnevRL2oyhstUKETveqJV1N9Yg8GyDn9EYZjnY7DMxYRoFdWBW/AdStCFEnyPm9GKSKYW1+Ef7EQX8vE+HkEPHKUfkZb5KCDSBwMAAAAASUVORK5CYII=)
	}
	
	footer .action-box {
		margin-right: .32rem;
		margin-left: .4rem;
		text-align: right
	}
	
	footer .action-box .buy-btn {
		display: inline-block;
		width: auto;
		max-width: 4rem;
		overflow: hidden;
		padding: 0 .48rem;
		height: .64rem;
		line-height: .64rem;
		border-radius: .32rem
	}
	
	footer .action-box .buy-now-disable {
		background-color: #919191 !important
	}
	
	.app-product-view-page .more:after {
		width: 2.88px;
		width: .18rem;
		height: 2.88px;
		height: .18rem;
		border-color: hsla(0, 0%, 64%, .8)
	}
	
	.border-1px.card-box {
		background-color: #fafafa;
		border-radius: .16rem;
		overflow: hidden
	}
	
	.border-1px.card-box:before {
		border-color: #e5e5e5;
		border-radius: 2.56px;
		border-radius: .16rem
	}
	
	.margin-top-16 {
		margin-top: .16rem
	}
	
	.margin-0-32 {
		margin: 0 .32rem
	}
	
	.margin-16-32 {
		margin: .16rem .32rem
	}
	
	.margin-16-32-0 {
		margin: .16rem .32rem 0
	}
	
	.margin-16-32-32-32 {
		margin: .16rem .32rem .32rem
	}
	
	.padding-16-32 {
		padding: .16rem .32rem !important
	}
	
	.padding-24-32 {
		padding: .24rem .32rem !important
	}
	
	.line-height-10x {
		line-height: .8rem
	}
	
	.mb2x {
		margin-bottom: .16rem
	}
	
	.mr1x {
		margin-right: .08rem
	}
	
	.mr2x {
		margin-right: .16rem
	}
	
	.max5 {
		overflow-y: scroll;
		max-height: 100%;
		padding-bottom: 1.3rem
	}
	
	header {
		height: 50px;
		background: transparent;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10
	}
	
	header .header-btn {
		display: block;
		width: .6rem;
		height: .6rem;
		margin: 0 .2rem;
		color: #ddd;
		background: rgba(0, 0, 0, .6);
		border-radius: 50%
	}
	
	header .header-icon {
		width: .6rem;
		height: .6rem;
		-webkit-transform: scale(.6);
		transform: scale(.6)
	}
	
	header .header-icon.icon-back {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABtElEQVR4Ae2btVYYQBBF4+6eNHHtYk1ccGtx9++AHqdFO6TFpcKdFpcKhwYfBtdZXOftOfcH7urIniIiYAASIAiCIAiCjp8gAEEQBEFnmTCmgnGDoPV40/LoYv5C0DKhtH4UQ9A8PrTxiCKCoEBBTjzOIHnlJBLhFgsV5KTimifyFeRk4h1E5CfIScdDkchLkJPNnNYuKFiQk8dc0h1qyGdOmSBHlSA/g5yr2oNVN0FOLXNLdzQvb6tG5pH2dIenIKeZeaI7HySHDx2CHFWCXAQ5rcwz7RlFT8PKea095eouyOll3mvPSXsLckaYD9qT9q6CnH7mk/aqhrtBzlftZR9JzjjzXXtdzJfkYam5cHiXcSR52GmvrMYxtRuIGWN+ofQMQZtyj3HCFtvdIW0BQeZrfgLX/DIehofiFwgyhxp9CDUQrG4LD6Q7dpcwewVBSLkiab+XeKHss/MXdwMKh5sf3DXMDQgyNy+UonlBloT2FzRQ7Qzvw27BQxMn2oDRSJ4CQfiKsCefWeIgaPOVFAlB+FC343dSN75krucsE85UMu4HegYBCIIgCIIgCIIgCIIgMAMUpMidp52UUAAAAABJRU5ErkJggg==)
	}
	
	header .header-icon.icon-share {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAACm0lEQVRoBe3BT2jWdRwA4M/7vvaOLawORdA6iF6iokNZIkEWRJGJKM46GIanBhoeougfRPQHUogRHQo8VKzVkuEsRpcwKBChk7KEjOaWxRqDyDR633dzTxASe3+87vdeft+X4H2eiK6urv89FQMOm9HQMO0zO1Sic2x0Wtake6Iz7NTQSt2OSM9GDVdStyHSUnHaSiaVIyUD8myPlByW59NIyYw8ZyMlDXnqkZIleeqRknPyTEUqrvKMC/KMRBoe9YN2bIviucWX2nNKOYrlOkMWtKdmfRRJxaB5WT+a00rN9iiS+52Udd6zqtb4RtYp66M41hiTdckhN8ZlHjZsSkPdlBHblKMorvaGv2V9685IT8luv8qa8Xh0gg1OyPrLK3qjKKp2OeKchgXTRmxWin+5yUeWZI24OYpjk59kHbdWjxddkPWde6NIdlrQyrwpWbP2KEWR3KGmPXVvWR1F87X2jFsXxXO7dkx6MNLwnDx/2KsSqfhQnulIyVF5FiMlo/IsRkrelOdspOQhec57WiVSscqMfCfdF6nYrT2f6I80fKw9F72gGsVTNayVX7zkd83O2Bwp2GXKcos+cEOE673vkmZfWBfFU/GAVw0b856n9Md/3OW4ZjWv64vOUfKk3zT72WPRSa7xtgXNjrktOsmtvtJswZBro5MMmNFszh6luMxqT3jXEWOGDOiN4unzmppmJ9wdYZWX/Wm5efuVo3jW+lyzJYcc08qEvkjBI85oz4RSpKDqeRe1Y1+kot+IfHN6Ih2bfC/P1kjJO/IcjJQclWc0UjImz2ikZEieA5GSAXm2REp6zVvJrGqkZb+VDEZqyiZcybhSpKfPhFbG9UZnKNlnznKzBpWik/TY6qBRow7YohpdXV0d9A/qIDTTrnD0UAAAAABJRU5ErkJggg==)
	}
	
	header .placeholder {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1
	}
	
	.container .gallery-view {
		background: #ccc;
		width: 100%;
		height: 7.92rem
	}
	
	.container .gallery-view .h792 {
		height: 7.92rem
	}
	
	.container .gallery-view .img {
		display: block;
		width: auto;
		height: 100%;
		max-width: 100%;
		max-height: 100%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		position: absolute;
		left: 50%;
		top: 50%
	}
	
	.container .gallery-view .product-tag-top {
		position: absolute;
		bottom: .32rem;
		right: .2rem;
		width: 1rem;
		height: 1rem;
		z-index: 100
	}
	
	.container .gallery-view .product-tag-top img {
		display: block;
		width: 100%;
		height: 100%
	}
	
	.container .top-banner {
		width: 100%
	}
	
	.container .top-banner a {
		display: block;
		font-size: 0
	}
	
	.container .top-banner img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.container .top-overview {
		width: 7.2rem;
		background-color: #f56600;
		color: #fff;
		padding: 0 .32rem;
		line-height: .8rem
	}
	
	.container .top-overview .top-left {
		min-width: 1rem;
		text-align: left
	}
	
	.container .top-overview .top-left>div {
		display: inline-block
	}
	
	.container .top-overview .top-left .price {
		margin-left: .2rem
	}
	
	.container .top-overview .top-right {
		text-align: right
	}
	
	.container .top-overview .top-right .day,
	.container .top-overview .top-right .spe,
	.container .top-overview .top-right .text {
		margin: 0 .05rem
	}
	
	.container .overview {
		background: #fff;
		text-align: left;
		padding: .32rem
	}
	
	.container .overview.overview-goods-name {
		padding: .32rem .32rem 0
	}
	
	.container .overview.overview-goods-brief {
		padding: 0 .32rem
	}
	
	.container .overview.product_info_product_price {
		padding: 0 .32rem .32rem
	}
	
	.container .overview .goods-name {
		line-height: 1.5em
	}
	
	.container .overview .goods-name img {
		height: .42rem;
		width: auto;
		line-height: .36rem;
		margin-right: .1rem
	}
	
	.container .overview .goods-brief {
		line-height: 1.5em;
		word-break: break-all;
		color: rgba(0, 0, 0, .54)
	}
	
	.container .overview .goods-price {
		padding: .2rem 0 0
	}
	
	.container .overview .goods-price .cur-price {
		color: #ff6700;
		font-size: .48rem
	}
	
	.container .overview .goods-price .cur-price span {
		font-size: .6em
	}
	
	.container .overview .goods-price .origin-price {
		margin-left: .16rem;
		color: rgba(0, 0, 0, .54);
		font-size: .24rem;
		text-decoration: line-through
	}
	
	.container .overview .goods-price .price-tips {
		margin-left: .24rem;
		padding-bottom: .1em
	}
	
	.container .overview .goods-price .price-tips span {
		display: inline-block;
		line-height: 1em;
		padding: .2em;
		color: #fff;
		background: #ff6700;
		border-radius: 2px
	}
	
	.container .overview .goods-price .seckill-foreshow {
		background: #ff6700 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAdCAYAAABFRCf7AAABW0lEQVR4AaXVAUQDYRiH8W2bxdgWmwYqZEAMDApISCABTAAAZQoYUlIQFEdSwAiSKGFSmUImMCEDJFAk2WrtbusZHeezzu57//wAHhvb+/l01+l0RnADAxGfdETGcY/uzhGXBhMowfyzhYAkmMIl7L1jVhIcximcqyGhG4yiCBPOGbrBGAyoszChE0ziEG2oe0TQa3AAm2ii19a9BiMo4Ae91kDWa3ANTfy3F6T7DQaRRwNus3CNbezAwD4OMOcMhrCAD0j25AwuQRp8Q64b9COHT0j2jRUEutEZPEOyOjYQtr96VRrEsh20o/M4wQVKuEIZFdThNhO7CPf78wogjxZ6rYU9DHr5E4SwCsvlE8Z1Lvwt1Fk4QlTnQk3iC+rOMKp7R4tQd4wh3WBSuVBtlJGSvEcFOHeHjCQYQwX2HpCWvutTeEUbVYxJg34swkQN0/D7pCOShYGMbvAXmg5VYXr1EjIAAAAASUVORK5CYII=) no-repeat .16rem 50%;
		background-size: .14rem .2rem;
		margin-left: .2rem;
		border-radius: .04rem;
		line-height: .32rem;
		padding: 0 .16rem 0 .4rem;
		color: #fff
	}
	
	.container .overview .goods-price .seckill-foreshow .seckill-foreshow-countdown {
		display: inline-block;
		margin-left: .1rem
	}
	
	.container .overview .goods-price .seckill-foreshow .seckill-foreshow-countdown .spe {
		margin: 0 .05rem
	}
	
	.container .overview .exclusive-goods-price .price-tag {
		position: relative;
		bottom: .05rem;
		display: inline-block;
		width: 1.92rem;
		height: .32rem;
		margin-left: .16rem;
		background: url(/static/img/price_tag.1e420bad4b.png) no-repeat 50%;
		background-size: 100% auto
	}
	
	.container .overview .exclusive-goods-price .price-tag .price {
		padding-left: .86rem;
		height: .32rem;
		line-height: .32rem;
		text-align: center;
		color: #e53935;
		font-size: .24rem
	}
	
	.container .overview .exclusive-goods-price .price-tag .price:before {
		position: relative;
		font-size: 3.84px;
		font-size: .24rem
	}
	
	.container .classic-param {
		padding: 0 0 .16rem;
		text-align: center;
		overflow-x: auto
	}
	
	.container .classic-param .classic-param-item {
		min-width: 1.68rem;
		padding: 0 .08rem
	}
	
	.container .classic-param .classic-param-item img {
		display: block;
		margin: 0 auto;
		width: .4rem;
		height: .4rem
	}
	
	.container .classic-param .classic-param-item-name {
		padding: .08rem 0
	}
	
	.container .classic-param .classic-param-item-value {
		color: #676767;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.container .product-section {
		position: relative;
		padding: 0 .32rem;
		text-align: left
	}
	
	.container .product-section .max-width-54 {
		width: 4.8rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.container .product-section .act-icon {
		position: relative;
		padding-right: 10%;
		white-space: nowrap;
		margin-top: .16rem
	}
	
	.container .product-section .act-icon:first-child {
		margin-top: 0
	}
	
	.container .product-section .act-icon .icon-desc {
		color: #f56600;
		border-radius: 1px;
		padding: .03rem .05rem .01rem;
		margin: 0 0 .01rem;
		font-size: .16rem
	}
	
	.container .product-section .act-icon .icon-desc:before {
		border-color: #f56600
	}
	
	.container .product-section .act-icon .icon-title {
		margin-left: .08rem;
		font-size: .24rem;
		color: rgba(0, 0, 0, .87);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.container .product-section .title {
		color: rgba(0, 0, 0, .54);
		margin-right: .3rem;
		min-width: .5rem
	}
	
	.container .product-section.border-bottom-1px:before {
		border-color: #e5e5e5
	}
	
	.container .product-section:last-child:before {
		border: none
	}
	
	.container .product-section .img-icon {
		height: .2rem;
		width: auto
	}
	
	.container .product-section .fsc1 {
		font-size: .2rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.container .product-section .service-policy-list {
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap
	}
	
	.container .product-section .service-policy-item {
		font-size: .24rem;
		line-height: .4rem;
		margin-right: .2rem;
		-webkit-box-flex: 0;
		-webkit-flex: 0 1 auto;
		flex: 0 1 auto
	}
	
	.container .product-section .coupon-item {
		color: #f66;
		background: #fff;
		position: relative;
		height: .27rem;
		max-width: 2.2rem
	}
	
	.container .product-section .coupon-item:after,
	.container .product-section .coupon-item:before {
		border-color: #f56667
	}
	
	.container .product-section .coupon-item span {
		display: block;
		max-width: 2.2rem;
		height: .27rem;
		font-size: .18rem;
		line-height: .18rem;
		padding: .06rem .08rem .03rem;
		white-space: nowrap;
		overflow-x: hidden;
		overflow-y: visible;
		text-overflow: ellipsis
	}
	
	.container .product-section .before {
		width: .05rem;
		height: .27rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAA2CAYAAAALdIPbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YzVjMjUyNS1mNTEzLTRkOGQtOTkwYi00OTE3NWJlYWFkNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0NkFEMDRFN0JGMTFFN0FBOTA4RTY1RkI0OTZGMTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0NkFEMDNFN0JGMTFFN0FBOTA4RTY1RkI0OTZGMTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQUJBREVGNEU3QkQxMUU3QjdFRkJGQURCQ0Q5QkQzMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQUJBREVGNUU3QkQxMUU3QjdFRkJGQURCQ0Q5QkQzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjoW7hoAAACRSURBVHjaYvyalv6fAQdgARFcM2cwIgsyMjIiJNHB//8Qw5hAxLf0jIlArIGuCCQpBMR3gfgiUIE8VmOADisH4g4QG4aZkNTMBuJUdGNxAmTJFCCeg+JPoD2CQIfEAtnNQKyOrvMdECsDsT4wMB6gmAsKPmQX4nItdgeNhtBoCI2G0GgIDWAIsUBDCGslABBgAEK0HVu3haQOAAAAAElFTkSuQmCC) no-repeat;
		background-size: cover;
		z-index: 10
	}
	
	.container .product-section .after {
		width: .05rem;
		height: .27rem;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAA2CAYAAADktujlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YzVjMjUyNS1mNTEzLTRkOGQtOTkwYi00OTE3NWJlYWFkNjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0NkFEMDhFN0JGMTFFN0FBOTA4RTY1RkI0OTZGMTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0NkFEMDdFN0JGMTFFN0FBOTA4RTY1RkI0OTZGMTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQUJBREVGNEU3QkQxMUU3QjdFRkJGQURCQ0Q5QkQzMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQUJBREVGNUU3QkQxMUU3QjdFRkJGQURCQ0Q5QkQzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtoTJNYAAAB8SURBVHjaYvyalv6fAR/4//8/HIMUs4AY2AALMudbeoYGkMoEsZmQBNWB1EUgvgvEwsg6QCrLuGbOmIRuVCwQq8I4TLhciSyxGKoLw1XTgfgS0BEg9y+G6wBaehNI6QOxMhC/Q/Exss9xWj7q81Gfj/p8BPgcaiYGAAgwAMIWyOk8krd+AAAAAElFTkSuQmCC) no-repeat;
		background-size: cover;
		z-index: 10
	}
	
	.container .product-section .info {
		color: rgba(0, 0, 0, .87)
	}
	
	.container .product-section .info .on {
		color: #f56600
	}
	
	.container .product-section .info .gray {
		color: rgba(0, 0, 0, .54)
	}
	
	.container .product_info_rank .tab-header {
		height: .8rem
	}
	
	.container .product_info_rank .border-bottom-1px:before {
		border-color: #e5e5e5
	}
	
	.container .product_info_rank .tab-header-inner {
		height: .8rem
	}
	
	.container .product_info_rank .tab-header-inner .flex {
		display: block;
		font-size: .26rem;
		width: 100%;
		border-right: 1px solid #e5e5e5
	}
	
	.container .product_info_rank .tab-header-inner .flex.on {
		color: #ff6700
	}
	
	.container .product_info_rank .tab-header-inner .flex:last-child {
		border-right: none
	}
	
	.container .product_info_rank .tab-view {
		padding: .32rem 0;
		overflow-x: auto
	}
	
	.container .product_info_rank .tab-view .product-item {
		display: block;
		width: 1.8rem;
		padding-right: .16rem;
		text-align: center
	}
	
	.container .product_info_rank .tab-view .product-item:first-child {
		width: 2.28rem;
		padding-left: .32rem
	}
	
	.container .product_info_rank .tab-view .product-item:last-child {
		width: 1.96rem;
		padding-right: .32rem
	}
	
	.container .product_info_rank .tab-view .product-img {
		width: 1.64rem;
		height: 1.64rem;
		border-radius: .16rem;
		overflow: hidden
	}
	
	.container .product_info_rank .tab-view .product-img:before {
		border-radius: 2.56px;
		border-radius: .16rem
	}
	
	.container .product_info_rank .tab-view .product-img img {
		display: block;
		width: 100%
	}
	
	.container .product_info_rank .tab-view .product-name {
		font-size: .24rem;
		line-height: 1.5em;
		margin-top: .2rem;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.container .product_info_rank .tab-view .product-price {
		font-size: .2rem;
		display: inline-block;
		color: #ff6700
	}
	
	.container .product_info_rank .tab-view .product-rank-tab .product-item:first-child .product-img::after {
		content: "1";
		position: absolute;
		top: 0;
		left: 0;
		width: 5.12px;
		width: .32rem;
		height: 5.12px;
		height: .32rem;
		line-height: 5.12px;
		line-height: .32rem;
		border-bottom-right-radius: 2.56px;
		border-bottom-right-radius: .16rem;
		text-align: center;
		color: #fff;
		background: #f1ba33
	}
	
	.container .product_info_rank .tab-view .product-rank-tab .product-item:nth-child(2) .product-img:after {
		content: "2";
		position: absolute;
		top: 0;
		left: 0;
		width: 5.12px;
		width: .32rem;
		height: 5.12px;
		height: .32rem;
		line-height: 5.12px;
		line-height: .32rem;
		border-bottom-right-radius: 2.56px;
		border-bottom-right-radius: .16rem;
		text-align: center;
		color: #fff;
		background: #c8c7ca
	}
	
	.container .product_info_rank .tab-view .product-rank-tab .product-item:nth-child(3) .product-img:after {
		content: "3";
		position: absolute;
		top: 0;
		left: 0;
		width: 5.12px;
		width: .32rem;
		height: 5.12px;
		height: .32rem;
		line-height: 5.12px;
		line-height: .32rem;
		border-bottom-right-radius: 2.56px;
		border-bottom-right-radius: .16rem;
		text-align: center;
		color: #fff;
		background: #dcbea7
	}
	
	.container .more-comments {
		margin-top: .32rem;
		margin-bottom: .5rem;
		color: #4e72a5;
		display: block
	}
	
	.container .more-comments span {
		position: relative
	}
	
	.container .more-comments span:after {
		content: "\25BA";
		font-size: 3.2px;
		font-size: .2rem;
		vertical-align: middle;
		display: inline-block;
		-webkit-transform: scale(.8, 1.5);
		transform: scale(.8, 1.5);
		font-family: Times New Roman
	}
	
	.container .more-comments img {
		margin-left: .06rem;
		height: .14rem;
		width: auto
	}
	
	.pop-detail .max5 {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding-bottom: 0;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch
	}
	
	.pop-detail .max5::-webkit-scrollbar {
		display: none
	}
	
	.pop-product .max5 {
		max-height: 6rem;
		padding-bottom: 0
	}
	
	.pop {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 7.2rem;
		background-color: #fff;
		color: #000;
		padding: 0 .32rem 1.27rem;
		height: 9.92rem;
		border-top-left-radius: .16rem;
		border-top-right-radius: .16rem;
		z-index: 1100;
		text-align: left,
	}
	
	.pop.pop-fill-height {
		top: 0;
		height: auto;
		border-radius: 0
	}
	
	.pop .border-top-1px:before {
		border-color: #f4f4f4
	}
	
	.pop .close {
		position: absolute;
		top: .18rem;
		right: .18rem;
		width: .6rem;
		height: .6rem;
		z-index: 111
	}
	
	.pop .close .icon-close {
		width: .32rem;
		height: .32rem;
		margin: .14rem 0 0 .14rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAC80lEQVR4Ae3btZYUQRTGcdwi3F1D3P1FyIjQmDfANcQtwyXC3d3dnVlStPmCWpf5j1T1rXM6+Hbcfqe0b2+zJEmyKBlCBsEhMoh169aNUg4rr9zluFh/oL57W2WD8kS5osxFEHriIOWXktTJ7AgR2ik3laRO5hCITUrSSGZFhNBeudPI7/hAIE4rScwYriXcauI3/CEQ85UkSgzXEppCcDlKB8v9AGNmLGNCnXxX+iAI96YHAcY0QwhtlBsAYSiYNeLEcAjXikJwIR9y2DIGRKhQhvEFVWQYDuF6nu+VU4bjlSX40EMcIwhCa4DwXRlS9r0GHzPMjAmD6XsW8yUOAIypKSN8UwZ5332CdcY/ZbIHhFbK1Tyf/ZUjlAgBMf5yDIxwGSAMDns8wnUTgDGpDAgtlUugOwxJ7cAMxJhcIsJljhAegk+trmV4agk5ZaiZQ3VuauUYHAEtm81AwG7yh2BgBDcwGoLgs4nDmNDE61s4BLROMAsBMX4r4xtBuMDXCeEhvGPoenOA8FkZEF1dA2IMcs89DxAGxlfg4QPoO+Vsnud8qQSLE4JPrXzZHDMEXHTxKTJmCNhN+OwQM4TD2AYQnitt7FfD/beKt8qI+CB48cXVHXCmxw/BEUwcEA6B0JYjpNcyLCA8tFBrTRvhh9LNPf9Imhg+EW4ChOoKFMeYYR+Cl+ZdLZKXF323jLQQhvJaa5iWEXqKzCnD+N4kXMswgGCjZYSaHSqU4UW+/5EQ64xQU2Tx+4ZAs0npAyOfIktFP+pzzPB5Ch9HgPG56CoW4Q5AAAOjHYxCv0QH5TY/XcdPfEytBbUECwi+VqBFjQn+EcKvMzCCh6q0KQx+ljtcMRrGmAUgQEsAu8iYMejAyHeR9jFmAwh8UCXndWD0X14cSyCWAARQhjONcYNAHG/qTBXTCLyQ9JdALCMIkWM8IBCdlNd1XvgJjAlWMfaS2aOxF3dVVrhReKXSE3yoZYzFbn+yW5mW/Uu0SwaRQWQQOP8BKPAB6NT57AgAAAAASUVORK5CYII=)
	}
	
	.pop .h1 {
		color: rgba(0, 0, 0, .87);
		font-size: .32rem;
		text-align: center;
		padding: .32rem 0
	}
	
	.pop .h1 .sub {
		margin-top: .05rem;
		font-size: .24rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.pop .h2 {
		font-size: .24rem;
		color: rgba(0, 0, 0, .54);
		margin-top: .16rem
	}
	
	.pop .border-bottom-1px:before {
		border-color: #f4f4f4
	}
	
	.pop .act-icon {
		position: relative;
		padding-right: 10%;
		white-space: nowrap;
		margin-top: .16rem
	}
	
	.pop .act-icon:first-child {
		margin-top: 0
	}
	
	.pop .act-icon .icon-desc {
		color: #f56600;
		border-radius: 1px;
		padding: .03rem .05rem .01rem;
		margin: 0 0 .01rem;
		font-size: .16rem
	}
	
	.pop .act-icon .icon-desc:before {
		border-color: #f56600
	}
	
	.pop .act-icon .icon-title {
		margin-left: .08rem;
		font-size: .24rem;
		color: rgba(0, 0, 0, .87);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.pop .pro-info {
		padding: .64rem 0 .2rem
	}
	
	.pop .pro-info .product-img {
		position: relative;
		width: 2rem;
		height: 2rem;
		text-align: center;
		background: #fff
	}
	
	.pop .pro-info .product-img:before {
		border-color: #e5e5e5
	}
	
	.pop .pro-info .product-img img {
		height: 100%;
		width: auto;
		margin: 0 auto
	}
	
	.pop .pro-info .product-desc {
		position: relative;
		width: 4.5rem;
		margin: .32rem .16rem;
		text-align: left
	}
	
	.pop .pro-info .product-desc .cur-price {
		color: #ff6700;
		font-size: .48rem
	}
	
	.pop .pro-info .product-desc .origin-price {
		margin-left: .16rem;
		color: rgba(0, 0, 0, .54);
		font-size: .24rem;
		text-decoration: line-through
	}
	
	.pop .pro-info .product-desc .name {
		font-size: .28rem;
		color: rgba(0, 0, 0, .87);
		line-height: .4rem;
		margin-top: .5em
	}
	
	.pop .pro-info .price-tag {
		position: relative;
		width: 1.92rem;
		height: .32rem;
		background: url(/static/img/price_tag.1e420bad4b.png) no-repeat 50%;
		background-size: 100% auto;
		margin-top: .16rem;
		text-align: center
	}
	
	.pop .pro-info .price-tag .price {
		padding-left: .86rem;
		height: .32rem;
		line-height: .32rem;
		text-align: center;
		color: #e53935;
		font-size: .24rem
	}
	
	.pop .pro-info .price-tag .price:before {
		position: relative;
		font-size: 3.84px;
		font-size: .24rem
	}
	
	.pop .option-title {
		position: relative;
		padding-top: .32rem;
		padding-bottom: .16rem;
		line-height: .24rem;
		font-size: .24rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.pop .option-title span {
		color: #f56600;
		margin-left: .6em
	}
	
	.pop .options-group {
		padding-bottom: .32rem
	}
	
	.pop .options-group .option-item {
		height: .72rem;
		line-height: .72rem;
		min-width: 1.45rem;
		box-sizing: border-box;
		padding: 0 .08rem;
		text-align: center;
		margin: .16rem 0 0 .16rem;
		overflow: visible;
		border: 1px solid transparent
	}
	
	.pop .options-group .option-item:before {
		border-color: rgba(0, 0, 0, .15);
		border-radius: 2px
	}
	
	.pop .options-group .option-item.on {
		color: #f56600
	}
	
	.pop .options-group .option-item.on:before {
		border-color: #f56600
	}
	
	.pop .options-group .option-item.cos:before {
		border-style: dashed
	}
	
	.pop .options-group .option-item.line {
		margin-left: 0;
		width: 100%;
		padding: .24rem .32rem !important
	}
	
	.pop .options-agree {
		margin-top: .16rem;
		line-height: .4rem;
		text-align: left
	}
	
	.pop .options-agree .org {
		color: #f56600;
		vertical-align: middle
	}
	
	.pop .options-agree .text {
		margin-right: .5em
	}
	
	.pop .options-agree .choose {
		display: inline-block;
		width: .28rem;
		height: .28rem;
		margin-right: .2rem;
		vertical-align: middle
	}
	
	.pop .options-agree .choose.unchecked {
		background: url("//s1.mi.com/m/images/m/check_normal.png") 0 50% no-repeat;
		background-size: cover
	}
	
	.pop .options-agree .choose.checked {
		background: url("//s1.mi.com/m/images/m/check_press.png") 0 50% no-repeat;
		background-size: cover
	}
	
	.pop .batch-img {
		width: 1rem;
		height: 1rem;
		box-sizing: border-box;
		text-align: center
	}
	
	.pop .batch-img img {
		height: 100%;
		width: auto;
		margin: 0 auto
	}
	
	.pop .batch-img:before {
		border-color: #f4f4f4
	}
	
	.pop .batch-product {
		padding: .16rem 0
	}
	
	.pop .pd32 {
		padding: .32rem 0
	}
	
	.pop .xm-input-number {
		display: inline-block;
		border: 1px solid #eee
	}
	
	.pop .xm-input-number .image-icons {
		opacity: .3;
		width: .6rem;
		height: .6rem;
		background-size: .3rem .3rem
	}
	
	.pop .xm-input-number .icon-cross {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAc0lEQVR4AWJIS0ujBBsD8W0oNga0YwcYAMMwGIV3ve3kW88x3R3GZAlDYJTgLx4eBfVBkFT+qkKaZ1+7EvIkyK2EWA4IECA/AQECZPW6Z6J6GBYlImNmgVwB2eIhRJxhYGqAABkMCBAgLOEtQY46ZIJDzQtkpFzgLwrvWQAAAABJRU5ErkJggg==)
	}
	
	.pop .xm-input-number .icon-line {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAT0lEQVR4Ae3TgQXAAAxE0azXDpLJKx3jmoOO0IR+fA7w4ELSioAAAQIECBAgn0My8+iq01BlQwwjXswWyG3I6TGIuGz47WuAAAECBAgQIA8XIA86877kLgAAAABJRU5ErkJggg==)
	}
	
	.pop .xm-input-number .input-add,
	.pop .xm-input-number .input-sub {
		display: inline-block;
		width: .6rem;
		height: .6rem;
		position: relative;
		vertical-align: middle;
		background-color: #fafafa;
		text-align: center
	}
	
	.pop .xm-input-number .input-add.active,
	.pop .xm-input-number .input-sub.active {
		background-color: #f4f4f4
	}
	
	.pop .xm-input-number .input-add.active .image-icons,
	.pop .xm-input-number .input-sub.active .image-icons {
		opacity: 1
	}
	
	.pop .xm-input-number .input-num {
		display: inline-block;
		vertical-align: middle;
		min-width: .6rem;
		padding: 0 .12rem;
		line-height: .6rem;
		text-align: center;
		font-size: .32rem
	}
	
	.pop .service-url {
		display: inline-block;
		width: .28rem;
		height: .28rem;
		margin-left: .1rem;
		vertical-align: middle
	}
	
	.pop .service-url img {
		width: 100%;
		height: auto
	}
	
	.pop .btn-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff
	}
	
	.pop .btn-bottom .action-box {
		height: 1.04rem;
		padding: .2rem .3rem
	}
	
	.pop .btn-bottom .action-box .buy-btn {
		height: .64rem;
		line-height: .64rem;
		border-radius: .4rem;
		background: #ff6700;
		color: #fff;
		display: block;
		text-align: center;
		width: 100%;
		font-size: .28rem
	}
	
	.pop .btn-bottom .action-box .buy-now-disable {
		background: #919191 !important
	}
	
	.pop .part-img {
		width: 2.4rem;
		height: 2.4rem;
		text-align: center;
		background: #fff
	}
	
	.pop .part-img img {
		width: auto;
		height: 100%;
		margin: 0 auto
	}
	
	.pop .part-info {
		box-sizing: border-box
	}
	
	.pop .part-info .part-info-name {
		font-size: .28rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.pop .part-info .part-info-desc {
		font-size: .24rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.pop .part-info .part-info-top {
		display: block
	}
	
	.pop .part-info .part-info-bottom .price {
		display: inline-block;
		font-size: .36rem;
		color: #f56600;
		margin-left: .25rem;
		position: relative
	}
	
	.pop .part-info .part-info-bottom .part-out {
		display: inline-block;
		margin-left: .08rem;
		font-size: .32rem;
		line-height: .36rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.pop .part-info .part-info-bottom .xm-input-number {
		border: none
	}
	
	.pop .part-info .part-info-bottom .xm-input-number .image-icons {
		opacity: 1;
		background-size: cover
	}
	
	.pop .part-info .part-info-bottom .input-add .icon-cross {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaBAMAAADKhlwxAAAAJ1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAQd8xuAAAADXRSTlMAAiE8SU0IP0v/Ij1KBMpQHgAAAHdJREFUeAFiYBAyCSUOOCsyMLCVhhILwhMYxEOJB4UMqiSoDmIwJUF1MEMrgP06tAEAhKEg2iEhgcEQ3RaNvABJxX39TFVzQI/oZGo11Wr1zKV+ptV5rqS+v1Kt9pOof2q1GhVjYzXKSpdVNCz02JPaQ6Ti0wsZAImCXOaXmeneAAAAAElFTkSuQmCC)
	}
	
	.pop .part-info .part-info-bottom .input-add.active .icon-cross {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAANlBMVEX5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb5Wwb////5Wwb5Wwb5Wwb5WwbYVuk7AAAAEnRSTlMABm7H8/8bz9AHbfn4/9Fvy/Su0Q8gAAAAhklEQVR4Ae3ZtQGEQAAF0b9uaP/N3qWnEc5MAS+BdUnGOh8WzTtrJCmmsEIpSiaFVcpFNaxUlQsr5dTCSnUKqwUNDQ0NvVjQ0ND9M2hoaOhj0P3foN+65B8CDQ0NzdYderWgoaGhoaFbWCm/5lOmDStlVXJYpaGs9didoySZcZrDos3TaKQHzBylU33tPTsAAAAASUVORK5CYII=)
	}
	
	.pop .part-info .part-info-bottom .input-sub .icon-line {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAQlBMVEXc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nz5Wwbc3Nzc3Nzc3Nzc3Nzc3NzFJwsxAAAAFnRSTlMABm7H8/8bz9AHbfkSb3f4/3YR0cv0LYLFpQAAAJZJREFUeAHt2bWBQ0EAA1EtzGeG/lu9Co7sNWsKeJEySQoxZYqWUwySVNXcoLqSQs1Nalp10MdBRRtiD50SjCreBEk9DCreALMA3SDAtGnTpk2bNm3atGnTpt+QXn7M9OW0x2fatGnTpk2bNm3atGnTtzsF842uzBWSIvRxU9G22ENU23CT9vZWZ3dTSVIYj5OinccYpC/m5hzwMDfhbwAAAABJRU5ErkJggg==)
	}
	
	.pop .address-item {
		text-align: left;
		padding: .16rem 0
	}
	
	.pop .address-item.active .address-item-line1,
	.pop .address-item.active .address-item-line2,
	.pop .address-item.active i {
		color: #f56600
	}
	
	.pop .address-item-line1 {
		font-size: .28rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.pop .address-item-line1 .image-icons {
		width: .28rem;
		height: .28rem;
		margin-right: .16rem
	}
	
	.pop .address-item-line1 .image-icons.icon-location {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAlCAYAAABReInxAAABgElEQVR4Ab3WA49dQQBH8Znatm0bYRk2fHHtxnhho9rG2vbu/wvuWXtmLk/yi3M5MgFZHMcDfEI9eofV4xMe4BgsYjcbN1EOBSrHzTg33oofUEw/sAVBnUU7lFA7TsPZefRAKenGWddnbIdS1j7d552Fn1BGvmEWRrsBZew6BrOBQ78Tj7EX8zAfe/EQnZBHGSzMMcijEjswUztRA3kcgXkQ8GZb4WsHuiCHezCfIIdHCO0J5PAepgFy2IvQ9kMOtTDdkMM8hDY34Pfkf8P6vD/pJ8jhMUJ7GjJo7qc0LXYG/J67MEdSmPi7Aif+IRiLMsijG4+xB/OxAHvxGN2QRwksBrsOZewqRpuFb1BGvsBiQpvRBqWsAeswbScyOGIcgrMClJIb8GbxGkqoiOBWoh6KqQyLEKmT6Iv533YjVnehiG4hdnPwBQr0EhaJWocWyKMKS5FKlyGHHhxCqr2AZlBA6s3DbwgA8BoWmbQVHRCEOqxApl2H0IcTyKUi7iBy/alAlLPFAtbIAAAAAElFTkSuQmCC);
		background-size: contain
	}
	
	.pop .address-item-line1 .address-item-name {
		margin-right: .1rem
	}
	
	.pop .address-item-line2 {
		font-size: .24rem;
		color: rgba(0, 0, 0, .54);
		padding-left: .44rem
	}
	
	.pop .coupon-item {
		width: 6.56rem;
		box-sizing: border-box;
		margin-top: .16rem
	}
	
	.pop .coupon-item.l20 .coupon-left {
		background: url(/static/img/20.d41ffacbb6.png) no-repeat;
		background-size: cover
	}
	
	.pop .coupon-item.l20 .coupon-right {
		border-color: #f2c347
	}
	
	.pop .coupon-item.l50 .coupon-left {
		background: url(/static/img/50.a69df7bbca.png) no-repeat;
		background-size: cover
	}
	
	.pop .coupon-item.l50 .coupon-right {
		border-color: #f99858
	}
	
	.pop .coupon-item.g50 .coupon-left {
		background: url(/static/img/100.e71e8c5cff.png) no-repeat;
		background-size: cover
	}
	
	.pop .coupon-item.g50 .coupon-right {
		border-color: #fe746a
	}
	
	.pop .coupon-left {
		width: 1.88rem;
		height: 1.8rem;
		text-align: center;
		line-height: 1.8rem;
		position: relative
	}
	
	.pop .coupon-left .money,
	.pop .coupon-left .price {
		color: #fff;
		font-size: .48rem;
		display: inline-block
	}
	
	.pop .coupon-left .yiling {
		position: absolute;
		bottom: .2rem;
		left: .6rem;
		color: #fff;
		font-size: .24rem;
		line-height: .24rem
	}
	
	.pop .coupon-right {
		width: 4.680000000000001rem;
		box-sizing: border-box;
		height: 1.8rem;
		border: 1px solid #f56600;
		padding: .16rem 0 .16rem .16rem;
		text-align: left;
		font-size: .28rem
	}
	
	.pop .coupon-right .cname {
		color: rgba(0, 0, 0, .87)
	}
	
	.pop .coupon-right .cinfo,
	.pop .coupon-right .ctime {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: rgba(0, 0, 0, .54)
	}
	
	.pop .active-box {
		width: 100%;
		margin: .32rem 0
	}
	
	.pop .active-title {
		padding: .1rem .2rem;
		text-align: center;
		display: inline-block
	}
	
	.pop .active-main {
		margin-top: .2rem
	}
	
	.pop .exclusive-tips-item {
		padding-bottom: .32rem
	}
	
	.pop .exclusive-tips-item .s-title {
		padding-bottom: .16rem;
		color: rgba(0, 0, 0, .87);
		font-size: .32rem
	}
	
	.pop .exclusive-tips-item .info {
		color: rgba(0, 0, 0, .54);
		font-size: .24rem;
		line-height: 1.5em
	}
	
	.pop .exclusive-tips-item .act-end-time {
		color: #ff6700;
		font-size: .24rem
	}
	
	.pop .service-item {
		margin: .48rem 0;
		position: relative
	}
	
	.pop .service-item.more {
		padding-right: .4rem
	}
	
	.pop .service-item .service-icon {
		width: .6rem;
		height: .6rem;
		margin-right: .32rem
	}
	
	.pop .service-item .service-icon img {
		width: 100%
	}
	
	.pop .service-item .service-icon.icon-size-xs {
		width: .32rem;
		height: .32rem
	}
	
	.pop .service-item .service-desc {
		margin-top: .08rem;
		color: rgba(0, 0, 0, .54)
	}
	
	.pop .parameters-table {
		padding: 0
	}
	
	.pop .parameters-table .parameters-table-row {
		margin: .48rem 0
	}
	
	.pop .parameters-table .parameters-table-name {
		color: rgba(0, 0, 0, .54);
		width: 3.04rem;
		margin-right: .16rem;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.pop .parameters-table .parameters-table-value {
		width: 100%;
		word-break: keep-all;
		overflow: hidden;
		text-overflow: ellipsis
	}
	
	.pop .ywb .options-group {
		padding-bottom: 0
	}
	
	.pop .ywb .options-group .option-item {
		position: relative;
		min-width: auto;
		width: 3.2rem;
		text-align: left;
		padding: 0 .16rem
	}
	
	.pop .ywb .options-group .option-item:nth-child(odd) {
		margin-left: 0
	}
	
	.pop .ywb .options-group .option-item.on .discount-tips {
		background: #ff6700
	}
	
	.pop .ywb .options-group .discount-tips {
		position: absolute;
		top: 0;
		right: 1em;
		padding: 0 .12rem;
		line-height: 1.4em;
		border-radius: 1.4em;
		margin-top: -.7em;
		color: #fff;
		background: #999
	}
	
	.description-view .tab-header {
		height: .88rem
	}
	
	.description-view .border-bottom-1px:before {
		border-color: #f4f4f4
	}
	
	.description-view .tab-header-inner {
		height: .88rem;
		background: #fff;
		will-change: scroll-position
	}
	
	.description-view .tab-header-inner.tab-header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99
	}
	
	.description-view .tab-header-inner .flex {
		display: block;
		font-size: .26rem;
		width: 100%;
		border-right: 1px solid #f4f4f4
	}
	
	.description-view .tab-header-inner .flex.on {
		color: #ff6700
	}
	
	.description-view .tab-header-inner .flex:last-child {
		border-right: none
	}
	
	.description-view .tab-view {
		background: #fff
	}
	
	.description-view .tab-view img {
		display: block;
		width: 100%;
		vertical-align: middle
	}
	
	.description-view .tab-view section {
		overflow: hidden
	}
	
	.description-view .tab-view .title {
		margin: .24rem .3rem;
		font-size: .24rem;
		color: #333;
		text-align: left
	}
	
	.description-view .tab-view .content {
		margin: .24rem .3rem;
		line-height: 1.5em;
		color: #b0b0b0;
		text-align: left
	}
	
	.description-view .show-all-desc {
		display: block;
		background: #fff;
		line-height: .88rem;
		font-size: .26rem;
		color: #ff6700
	}
	
	.section-box {
		background: #fafafa;
		text-align: left
	}
	
	.section-box .title {
		padding: .64rem .32rem 0;
		color: rgba(0, 0, 0, .84)
	}
	
	.section-box .section-item {
		margin-top: .32rem;
		margin-left: .32rem;
		display: inline-block
	}
	
	.section-box .section-img {
		width: 3.1rem;
		height: 3.1rem
	}
	
	.section-box .section-img img {
		height: 100%;
		width: auto;
		border-radius: .16rem
	}
	
	.section-box .section-name {
		padding: .32rem 0 .16rem;
		max-width: 3rem
	}
	
	.section-box .section-name.w280 span {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: rgba(0, 0, 0, .84);
		display: block;
		width: 2.8rem
	}
	
	.section-box .parts-add {
		width: .4rem;
		height: .4rem;
		background: url(/static/img/partsadd.880761bdc3.png);
		background-size: cover
	}
	
	.section-box .section-price {
		color: #ff6700
	}
	
	.section-box .section-price em {
		font-style: normal;
		margin-left: .1rem
	}
	
	.xe-dialog-box {
		width: 6.5rem;
		background: #fff;
		border-radius: .1rem;
		overflow: hidden;
		position: relative
	}
	
	.xe-dialog-box .close {
		position: absolute;
		top: .1rem;
		right: .1rem;
		width: .5rem;
		height: .5rem
	}
	
	.xe-dialog-box .close .icon-close {
		width: .4rem;
		height: .4rem;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAElBMVEX///8AAAAAAAAAAAAAAAAAAABknMCaAAAABnRSTlMACjtETRQroqC5AAAAnUlEQVR4Ae3UAQZCQRQF0FcrSK3kUxuot4DQ/tcS/wL/0ykjYB7QcI+a3tya84+Zcz755HBdeFLHfmyCl77vpV4+HyQYavN5TwlKFFCyghIGlLSgxAElLygAoAiCQgCKISgIoJW6AVqpDgSKUNWr+1nDkr+Tf53vyTfu/85b4H3yZg7suF+L351fsLvAreJ++r3p3JluX/f49zNnzhulRTHP0ynHJwAAAABJRU5ErkJggg==)
	}
	
	.xe-dialog-content {
		padding: 0 .3rem
	}
	
	.xe-dialog-content.xe-dialog-content-left {
		text-align: left
	}
	
	.xe-dialog-content .xe-dialog-title {
		text-align: center;
		margin-top: .4rem;
		line-height: 1em
	}
	
	.xe-dialog-content .xe-dialog-text {
		margin: .4rem;
		line-height: 1.5em;
		color: #676767
	}
	
	.share-title {
		color: rgba(0, 0, 0, .87);
		font-size: .32rem;
		text-align: center;
		padding: .24rem 0
	}
	
	.share-btn {
		height: .84rem;
		line-height: .84rem;
		font-size: .32rem;
		color: rgba(0, 0, 0, .87)
	}
	
	.pop2 {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 7.2rem;
		background-color: #fff;
		z-index: 110
	}
	
	.blank_line {
		width: 100%;
		background: #fff
	}
	
	.image_w_1080 {
		width: 7.2rem
	}
	
	.image_w_1080.border-radius-25 img {
		border-radius: .16rem;
		overflow: hidden
	}
	
	.image_w_1080 img {
		display: block;
		width: 100%;
		height: auto
	}
	
	.show_more {
		line-height: .32rem;
		color: #4e72a5
	}
	
	.show_more span:after {
		content: "\25BA";
		font-size: 3.2px;
		font-size: .2rem;
		vertical-align: middle;
		display: inline-block;
		-webkit-transform: scale(.8, 1.5);
		transform: scale(.8, 1.5);
		font-family: Times New Roman
	}
	
	.text_view_html {
		color: rgba(0, 0, 0, .84);
		line-height: .5rem;
		text-align: justify
	}
	
	.title_view {
		color: rgba(0, 0, 0, .84);
		text-align: left
	}
	
	.animation-show {
		-webkit-animation: isshow-data-v-ccdb1440 .5s ease-out;
		animation: isshow-data-v-ccdb1440 .5s ease-out
	}
	
	.bottomOut-enter-active,
	.bottomOut-leave-active {
		-webkit-transition: -webkit-transform .3s ease-out;
		transition: -webkit-transform .3s ease-out;
		transition: transform .3s ease-out;
		transition: transform .3s ease-out, -webkit-transform .3s ease-out
	}
	
	.bottomOut-enter,
	.bottomOut-leave-to {
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0)
	}
	
	.bottomOut-active {
		-webkit-transform: translateZ(0);
		transform: translateZ(0)
	}
	
	.bd-color-fe {
		height: 1px
	}
	
	.bd-color-fe:before {
		border-color: #f4f4f4
	}
	
	@media (-webkit-min-device-pixel-ratio:2),
	(min-resolution:2dppx) {
		.border-1px.card-box:before,
		.container .product_info_rank .tab-view .product-img:before {
			border-radius: 5.12px;
			border-radius: .32rem
		}
	}
	
	@media (-webkit-min-device-pixel-ratio:3),
	(min-resolution:3dppx) {
		.border-1px.card-box:before,
		.container .product_info_rank .tab-view .product-img:before {
			border-radius: 7.68px;
			border-radius: .48rem
		}
	}
	
	@-webkit-keyframes isshow {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 10%, 0);
			transform: translate3d(0, 10%, 0)
		}
		60% {
			opacity: .6;
			-webkit-transform: translate3d(0, 10%, 0);
			transform: translate3d(0, 10%, 0)
		}
		to {
			opacity: 1;
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}
	
	@keyframes isshow-data-v-ccdb1440 {
		0% {
			opacity: 0;
			-webkit-transform: translate3d(0, 10%, 0);
			transform: translate3d(0, 10%, 0)
		}
		60% {
			opacity: .6;
			-webkit-transform: translate3d(0, 10%, 0);
			transform: translate3d(0, 10%, 0)
		}
		to {
			opacity: 1;
			-webkit-transform: translateZ(0);
			transform: translateZ(0)
		}
	}
</style>