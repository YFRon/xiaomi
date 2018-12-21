<template>
	<div>
		<div class="nologin">
			<a class="box-flex align-center justify-space-between" data-stat-id="048cb8372086afea" onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-048cb8372086afea', '', 'pcpid', '']);"><span class="flex">登录后享受更多优惠</span><em class="flex" @click="toSignIn">去登录</em></a>
		</div>
		<div class="noitems">
			<a href="/" class="router-link-active" data-stat-id="4e4dee2019aeff31" onclick="_msq.push(['trackEvent', 'df5f1a9f995c0818-4e4dee2019aeff31', '/', 'pcpid', '']);"><span>购物车还是空的</span><em>去逛逛</em></a>
		</div>

		<div class="cart-list">
			<ol>
				<!--<li class="item">
					<div class="ui-flex align-center justify-center">
						<div class="choose flex unchecked" @click="isChecked($event)"></div>
						<a href="javascript:;" class="imgProduct flex" data-stat-id="a97964cd1efad1ee"><img src="//i1.mifile.cn/a1/pms_1497672764.01987286!180x1800.jpg" lazy="loaded"></a>
						<div class="info flex">
							<p class="name"><span class="ico ico_bargain" style="display: none;">加价购</span><span class="ico ico_gift" style="display: none;">赠品</span><span class="ico ico_seckill" style="display: none;">秒</span><span class="ico ico_special" style="display: none;">惠</span><span class="ico ico_ernie" style="display: none;">奖</span><span class="ico ico_giftcard" style="display: none;">礼</span><span class="ico ico_presales" style="display: none;">预售</span><span class="ico ico_presales" style="display: none;">F码</span><span class="ico ico_youpin" style="display: none;">有品</span><span class="flex">小米学院休闲双肩包 黑色</span></p>
							<div class="price-without"><span>售价：</span><span>69元</span>
							</div>
							<div class="num">
								<div class="xm-input-number">
									<div class="input-sub"><i class="image-icons icon-line"></i></div>
									<div class="input-num"><span>1</span></div>
									<div class="input-add active"><i class="image-icons icon-cross"></i></div>
								</div>
								<div class="delete"><i class="image-icons icon-delete"></i></div>
							</div>
						</div>
					</div>
					<div class="append flex">
					</div>
				</li>
				<li class="item">
					<div class="ui-flex align-center justify-center">
						<div class="choose flex unchecked" @click="isChecked"></div>
						<a href="javascript:;" class="imgProduct flex" data-stat-id="5e7405fecd724b12"><img src="//i1.mifile.cn/a1/pms_1536833428.43292402!180x1800.jpg" lazy="loaded"></a>
						<div class="info flex">
							<p class="name"><span class="ico ico_bargain" style="display: none;">加价购</span><span class="ico ico_gift" style="display: none;">赠品</span><span class="ico ico_seckill" style="display: none;">秒</span><span class="ico ico_special" style="display: none;">惠</span><span class="ico ico_ernie" style="display: none;">奖</span><span class="ico ico_giftcard" style="display: none;">礼</span><span class="ico ico_presales" style="display: none;">预售</span><span class="ico ico_presales" style="display: none;">F码</span><span class="ico ico_youpin" style="display: none;">有品</span><span class="flex">小米手环3 NFC版 黑色</span></p>
							<div class="price-without"><span>售价：</span><span>199元</span>
							</div>
							<div class="num">
								<div class="xm-input-number">
									<div class="input-sub"><i class="image-icons icon-line"></i></div>
									<div class="input-num"><span>1</span></div>
									<div class="input-add active"><i class="image-icons icon-cross"></i></div>
								</div>
								<div class="delete"><i class="image-icons icon-delete"></i></div>
							</div>
						</div>
					</div>
					<div class="append flex">
					</div>
				</li>-->
			</ol>
			<div class="point-box">
				<div class="point" style="display: none;"><span class="act act_special">包邮</span><span></span></div>
				<div class="point">
					<p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
				</div>
			</div>
			<div class="ui-line"></div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			isChecked(e) {
				if(e.target.classList.contains('checked') == true) {
					e.target.classList.remove('checked');
					e.target.classList.add('unchecked');
				} else if(e.target.classList.contains('unchecked') == true) {
					e.target.classList.remove('unchecked');
					e.target.classList.add('checked');
				}
			},
			toSignIn(){
				this.$router.push({name:"reg"})
			}
		},
		computed: {
			//			goodsList(){
			//				return this.$store.getters.getGoodsList;
			//			}
		}
	}
</script>
