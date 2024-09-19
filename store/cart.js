import {
	defineStore
} from "pinia"
const useCartStore = defineStore("cart", {
	state() {
		return {
			cartData: [{
					// 自定义属性
					buyNum: 5, // 购买商品的数量
					isCheck: false, // 在购物车中是否选中该商品
					subListIdx: 0, // 规格的默认下标
					// -----
					"id": "10096",
					"ahead": "提前5小时预定",
					"goodsId": "1064",
					"twoId": "10095",
					"mainId": "10094",
					"sku": "n0301",
					"spec": "1磅",
					"edible": "2-3人食",
					"name": "蓝莓轻乳拿破仑",
					"french": "Napoléon aux myrtilles",
					"price": "198.00",
					"amount": "198.00",
					"size": "16cm*10cm*5cm",
					"brief": "精选蓝莓的清爽可口/芝士的香浓/优质奶油的醇厚\r\n起酥皮的香脆可口/内层轻乳芝士的松软\r\n层层美味/回味无穷",
					"frenchBrief": "Myrtilles fraiches, bio, feuilletage au goût de beurre frais, marmelade de myrtilles, crème chantilly, et tout celà dans le plaisir du palais .",
					"imgNum": "4",
					"imgFolder": "goods/lanmeiqingrunapolun/N0301",
					"ossImg": "goods/lanmeiqingrunapolun/N0301/list/1.jpg",
					"mainImg": "20160328/1063/list_1063_1.jpg",
					"cityId": "110",
					"status": "1",
					"forSale": "1",
					"sendStartDate": "2024-05-12",
					"sendEndDate": "2099-12-31",
					"sendStartTime": "10:00:00",
					"sendEndTime": "22:00:00",
					"sendSpace": "0",
					"sendInterval": "0",
					"advanceDays": "31",
					"cutTime": "22:00:00",
					"brandId": "82",
					"brandName": "mcake",
					"cateId": "1",
					"cateName": "蛋糕",
					"tag": "",
					"tagId": "1",
					"tagName": "金牌",
					"tagImg": "promotionTag/2014082817421010303.png",
					"wapDesc": "https://static.mcake.com/goods/lanmeiqingrunapolun/desc_v2/wap.jpg",
					"shopDesc": "https://static.mcake.com/goods/lanmeiqingrunapolun/desc_v2/pc.jpg",
					"appletDesc": [
						"https://static.mcake.com//uploads/2024/05/24/82ffda000edd57d76326754be615795e3caae0c9.jpg",
						"https://static.mcake.com//uploads/2024/05/24/6333bf257cdfee59c2d4388f4ea643ae480a3eb6.jpg",
						"https://static.mcake.com//uploads/2024/05/24/1e210384b36a7c083a3122e320f69461eeede51c.jpg",
						"https://static.mcake.com//uploads/2024/05/24/dc16c6ec66713d82888e6e09718a9f3d378183ca.jpg",
						"https://static.mcake.com//uploads/2024/05/24/363c1b0f4fb12a80830e413e05e24a4883c930c8.jpg",
						"https://static.mcake.com//uploads/2024/05/24/0983177ee3a6d79c8dca42b6e87eeebde72fa67f.jpg",
						"https://static.mcake.com//uploads/2024/05/24/9428d02bdc278e039cc57d48ab8e0edfc114578f.jpg",
						"https://static.mcake.com//uploads/2024/05/24/23c865f7fae4c38685316394269124c002ba6efd.jpg"
					],
					"wapBanner": "",
					"shopBanner": "https://mcake-oss.oss-cn-hangzhou.aliyuncs.com/file/ce490dd2cb59b3c2/70ee47ca57489b0c.jpg",
					"goodsTips": "蛋糕若不及时食用，请放置0-10℃冷藏。",
					"sceneImg": "https://static.mcake.com//uploads/2024/04/03/179b591e17ff851defe8d9dd8cd0782b89e6f02c.jpg",
					"pcListImg": "https://static.mcake.com//uploads/2024/05/10/30743c70d2a80129191e74c53c273fc6cf535e9d.jpg",
					"saleTotal": "10261962",
					"weight": "454g",
					"img": "https://static.mcake.com//uploads/2024/05/10/39db21203b92c9d2111b6b2fb7612e1ac3498dbc.png",
					"pic": {
						"url": "https://static.mcake.com/goods/lanmeiqingrunapolun/N0301",
						"list": [{
								"b": "/big/1.jpg",
								"m": "/middle/1.jpg",
								"s": "/small/1.jpg"
							},
							{
								"b": "/big/2.jpg",
								"m": "/middle/2.jpg",
								"s": "/small/2.jpg"
							},
							{
								"b": "/big/3.jpg",
								"m": "/middle/3.jpg",
								"s": "/small/3.jpg"
							},
							{
								"b": "/big/4.jpg",
								"m": "/middle/4.jpg",
								"s": "/small/4.jpg"
							}
						]
					},
					"pcImg": [
						"https://static.mcake.com//uploads/2024/05/24/82ffda000edd57d76326754be615795e3caae0c9.jpg",
						"https://static.mcake.com//uploads/2024/05/24/6333bf257cdfee59c2d4388f4ea643ae480a3eb6.jpg",
						"https://static.mcake.com//uploads/2024/05/24/1e210384b36a7c083a3122e320f69461eeede51c.jpg",
						"https://static.mcake.com//uploads/2024/05/24/dc16c6ec66713d82888e6e09718a9f3d378183ca.jpg",
						"https://static.mcake.com//uploads/2024/05/24/363c1b0f4fb12a80830e413e05e24a4883c930c8.jpg",
						"https://static.mcake.com//uploads/2024/05/24/0983177ee3a6d79c8dca42b6e87eeebde72fa67f.jpg",
						"https://static.mcake.com//uploads/2024/05/24/9428d02bdc278e039cc57d48ab8e0edfc114578f.jpg",
						"https://static.mcake.com//uploads/2024/05/24/23c865f7fae4c38685316394269124c002ba6efd.jpg"
					],
					"bannerList": [
						"https://static.mcake.com//uploads/2024/04/03/76676027162d46b7f0079c0ef2a486d650f33c1b.jpg",
						"https://static.mcake.com//uploads/2024/04/03/22003d0423ec17debd742cc967c1af87cd8c82b7.jpg",
						"https://static.mcake.com//uploads/2024/04/03/a2ba54a4de8dced9c1d8dc0f712c57b6c9feba7e.jpg"
					],
					"list": [{
							"id": "10096",
							"goodsId": "1064",
							"twoId": "10095",
							"mainId": "10094",
							"sku": "n0301",
							"ahead": "提前5小时预定",
							"edible": "2-3人食",
							"name": "蓝莓轻乳拿破仑",
							"french": "Napoléon aux myrtilles",
							"spec": "1磅",
							"price": "198.00",
							"amount": "198.00",
							"main": "1",
							"size": "16cm*10cm*5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "454g",
							"img": "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含5套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 5,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "5",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "1磅(454g)，适合2-3人食，含5套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "10097",
							"goodsId": "1065",
							"twoId": "10095",
							"mainId": "10094",
							"sku": "n0302",
							"ahead": "提前5小时预定",
							"edible": "4-7人食",
							"name": "蓝莓轻乳拿破仑",
							"french": "Napoléon aux myrtilles",
							"spec": "2磅",
							"price": "298.00",
							"amount": "298.00",
							"main": "0",
							"size": "23cm*14cm*5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "908g",
							"img": "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含10套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 10,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "10",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "2磅(908g)，适合4-7人食，含10套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "10098",
							"goodsId": "1066",
							"twoId": "10095",
							"mainId": "10094",
							"sku": "n0303",
							"ahead": "提前5小时预定",
							"edible": "8-12人食",
							"name": "蓝莓轻乳拿破仑",
							"french": "Napoléon aux myrtilles",
							"spec": "3磅",
							"price": "428.00",
							"amount": "428.00",
							"main": "0",
							"size": "28cm*18cm*5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "1.36kg",
							"img": "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含15套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 15,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "15",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "3磅(1.36kg)，适合8-12人食，含15套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "10099",
							"goodsId": "1067",
							"twoId": "10095",
							"mainId": "10094",
							"sku": "n0305",
							"ahead": "提前5小时预定",
							"edible": "12-20人食",
							"name": "蓝莓轻乳拿破仑",
							"french": "Napoléon aux myrtilles",
							"spec": "5磅",
							"price": "728.00",
							"amount": "728.00",
							"main": "0",
							"size": "36cm*22cm*5.5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "2.27kg",
							"img": "https://static.mcake.com/new_goods/lanmeiqingrunapolun/N0301/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含20套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 20,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "20",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "5磅(2.27kg)，适合12-20人食，含20套餐具，1支生日蜡烛，1个生日帽"
						}
					],
					"fittings": [{
							"id": "53",
							"name": "生日蜡烛",
							"uid": "5",
							"unit": "支",
							"num": "1",
							"sale": "0",
							"price": "0.00",
							"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
							"give": "0",
							"buy": "0"
						},
						{
							"id": "51",
							"name": "餐具",
							"uid": "1",
							"unit": "套",
							"num": "5",
							"sale": "0",
							"price": "0.00",
							"img": "",
							"give": "1",
							"buy": "1"
						},
						{
							"id": "67",
							"name": "生日帽",
							"uid": "3",
							"unit": "个",
							"num": "1",
							"sale": "0",
							"price": "0.00",
							"img": "",
							"give": "1",
							"buy": "1"
						}
					],
					"birthday_hat": "1个生日帽",
					"candle": "1支生日蜡烛",
					"tableware": "含5套餐具",
					"birthdayHatNum": 1,
					"candleNum": 1,
					"tablewareNum": 5,
					"describe": "1磅(454g)，适合2-3人食，含5套餐具，1支生日蜡烛，1个生日帽",
					"tags": [{
							"id": "40",
							"name": "水果",
							"style": "kw_01"
						},
						{
							"id": "36",
							"name": "芝士",
							"style": "kw_06"
						},
						{
							"id": "34",
							"name": "奶油",
							"style": "kw_05"
						},
						{
							"id": "33",
							"name": "拿破仑",
							"style": "kw_03"
						}
					],
					"mater": [{
							"id": "75",
							"name": "新西兰奶油奶酪",
							"img": "https://img.mcake.com/goods/mater/2015073015430916727.jpg"
						},
						{
							"id": "36",
							"name": "新西兰黄油",
							"img": "https://img.mcake.com/goods/mater/2014081311051082745.jpg"
						},
						{
							"id": "26",
							"name": "臻选蓝莓",
							"img": "https://img.mcake.com/goods/mater/2017122917392365016.jpg"
						},
						{
							"id": "17",
							"name": "法国奶油",
							"img": "https://img.mcake.com/goods/mater/2014081310573865350.jpg"
						}
					],
					"basic": [{
							"id": "219",
							"type": "6",
							"french": "Flavor",
							"chinese": "口味",
							"title": "Flavor 口味",
							"value": "水果/芝士"
						},
						{
							"id": "387",
							"type": "4",
							"french": "Base",
							"chinese": "口味基底",
							"title": "Base 口味基底",
							"value": "Whipping Cream"
						},
						{
							"id": "299",
							"type": "5",
							"french": "Texture",
							"chinese": "口感",
							"title": "Texture 口感",
							"value": "酥脆浓郁"
						},
						{
							"id": "159",
							"type": "3",
							"french": "Sweetness",
							"chinese": "甜味指数",
							"title": "Sweetness 甜味指数",
							"value": "1"
						}
					],
					"banner": [
						"https://static.mcake.com/goods/lanmeiqingrunapolun/N0301/middle/1.jpg",
						"https://static.mcake.com/goods/lanmeiqingrunapolun/N0301/middle/2.jpg",
						"https://static.mcake.com/goods/lanmeiqingrunapolun/N0301/middle/3.jpg",
						"https://static.mcake.com/goods/lanmeiqingrunapolun/N0301/middle/4.jpg"
					],
					"isBlessing": true,
					"express": 0,
					"showImg": "",
					"ruleImg": ""
				},
				{
					// 自定义属性
					buyNum: 1,
					isCheck: true,
					subListIdx: 0,
					"id": "18464",
					"ahead": "提前5小时预定",
					"goodsId": "7122",
					"twoId": "18463",
					"mainId": "18462",
					"sku": "C9001",
					"spec": "1磅",
					"edible": "2-3人食",
					"name": "榛子奶油",
					"french": "Crème de noisette",
					"price": "198.00",
					"amount": "198.00",
					"size": "14cm*6.5cm",
					"brief": "土耳其榛子与法国铁塔奶油赴千里而来，焦糖榛子坚果原香和轻盈浓郁奶香结合，极致的坚脆与柔软，齿间碰撞，回味悠长。",
					"frenchBrief": "Les noisettes turques et la crème Elle & Vire de France se sont rencontrées après un long voyage. Elles se marient harmonieusement, mêlant les arômes authentiques et délicats des noisettes caramélisées à la légèreté et à la richesse de la crème. Le résultat est une combinaison ultime de croquant et de douceur, une collision de saveurs qui se prolonge en bouche.",
					"imgNum": "4",
					"imgFolder": "new_goods/zhenzinaiyou",
					"ossImg": "new_goods/zhenzinaiyou/list/1.jpg",
					"mainImg": null,
					"cityId": "110",
					"status": "1",
					"forSale": "1",
					"sendStartDate": "2024-05-12",
					"sendEndDate": "2099-12-31",
					"sendStartTime": "10:00:00",
					"sendEndTime": "22:00:00",
					"sendSpace": "0",
					"sendInterval": "0",
					"advanceDays": "31",
					"cutTime": "15:00:00",
					"brandId": "82",
					"brandName": "mcake",
					"cateId": "1",
					"cateName": "蛋糕",
					"tag": "",
					"tagId": "3",
					"tagName": "",
					"tagImg": "promotionTag/2014082817213389740.png",
					"wapDesc": "https://static.mcake.com/new_goods/zhenzinaiyou/desc/wap.jpg",
					"shopDesc": "https://static.mcake.com/new_goods/zhenzinaiyou/desc/pc.jpg",
					"appletDesc": [
						"https://static.mcake.com//uploads/2024/06/07/cee413c9c5fcf9c64890099571f2c44615aa04e0.jpg",
						"https://static.mcake.com//uploads/2024/07/11/b50bffa5e3c053eefb5de7e7e930b3d05ff4eaf9.jpg",
						"https://static.mcake.com//uploads/2024/06/07/ef9e0b4af4d28edaf4d3d54d33065fe9a59d3949.jpg",
						"https://static.mcake.com//uploads/2024/06/07/12db046711fba26c5d1d5be721b5349753f07f87.jpg",
						"https://static.mcake.com//uploads/2024/06/07/0daf569511abc6a3984905148e1b0bb39a211c80.jpg",
						"https://static.mcake.com//uploads/2024/06/07/50bbada8ed3255ddff941d9749eb4212beb44b75.jpg",
						"https://static.mcake.com//uploads/2024/06/07/c1d1a4ce40dac55823420dbee00c539649773930.jpg",
						"https://static.mcake.com//uploads/2024/06/07/a103197477ea11cc419ca7c8ffdc36ada742ffd3.jpg"
					],
					"wapBanner": "",
					"shopBanner": "https://static.mcake.com//uploads/2023/06/14/fcd2d44b1e944ef6a447f7d482a799a882415463.jpg",
					"goodsTips": "蛋糕若不及时食用，请放置0-10℃冷藏。",
					"sceneImg": "https://static.mcake.com//uploads/2024/04/03/522e3124e4be292c11b761141bd0175341c43235.jpg",
					"pcListImg": "https://static.mcake.com//uploads/2024/06/07/dacc8b0366d3437a20a05f60f0c2ead464065215.jpg",
					"saleTotal": "23604",
					"weight": "454g",
					"img": "https://static.mcake.com//uploads/2024/06/07/c707af0e043d097d8f57af9892cf8a7b695a6e81.png",
					"pic": {
						"url": "https://static.mcake.com/new_goods/zhenzinaiyou",
						"list": [{
								"b": "/big/1.jpg",
								"m": "/middle/1.jpg",
								"s": "/small/1.jpg"
							},
							{
								"b": "/big/2.jpg",
								"m": "/middle/2.jpg",
								"s": "/small/2.jpg"
							},
							{
								"b": "/big/3.jpg",
								"m": "/middle/3.jpg",
								"s": "/small/3.jpg"
							},
							{
								"b": "/big/4.jpg",
								"m": "/middle/4.jpg",
								"s": "/small/4.jpg"
							}
						]
					},
					"pcImg": [
						"https://static.mcake.com//uploads/2024/06/07/cee413c9c5fcf9c64890099571f2c44615aa04e0.jpg",
						"https://static.mcake.com//uploads/2024/07/11/b50bffa5e3c053eefb5de7e7e930b3d05ff4eaf9.jpg",
						"https://static.mcake.com//uploads/2024/06/07/ef9e0b4af4d28edaf4d3d54d33065fe9a59d3949.jpg",
						"https://static.mcake.com//uploads/2024/06/07/12db046711fba26c5d1d5be721b5349753f07f87.jpg",
						"https://static.mcake.com//uploads/2024/06/07/0daf569511abc6a3984905148e1b0bb39a211c80.jpg",
						"https://static.mcake.com//uploads/2024/06/07/50bbada8ed3255ddff941d9749eb4212beb44b75.jpg",
						"https://static.mcake.com//uploads/2024/06/07/c1d1a4ce40dac55823420dbee00c539649773930.jpg",
						"https://static.mcake.com//uploads/2024/06/07/a103197477ea11cc419ca7c8ffdc36ada742ffd3.jpg"
					],
					"bannerList": [
						"https://static.mcake.com//uploads/2024/06/07/930976a7385c986108b6a8a108b091211b0867af.jpg",
						"https://static.mcake.com//uploads/2024/04/03/707bfe425df452e52ac843cedd81328df0ac8dfe.jpg"
					],
					"list": [{
							"id": "18464",
							"goodsId": "7122",
							"twoId": "18463",
							"mainId": "18462",
							"sku": "C9001",
							"ahead": "提前5小时预定",
							"edible": "2-3人食",
							"name": "榛子奶油",
							"french": "Crème de noisette",
							"spec": "1磅",
							"price": "198.00",
							"amount": "198.00",
							"main": "1",
							"size": "14cm*6.5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "454g",
							"img": "https://static.mcake.com/new_goods/zhenzinaiyou/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含5套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 5,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "5",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "1磅(454g)，适合2-3人食，含5套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "18465",
							"goodsId": "7123",
							"twoId": "18463",
							"mainId": "18462",
							"sku": "C9002",
							"ahead": "提前5小时预定",
							"edible": "4-7人食",
							"name": "榛子奶油",
							"french": "Crème de noisette",
							"spec": "2磅",
							"price": "298.00",
							"amount": "298.00",
							"main": "0",
							"size": "18cm*7cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "908g",
							"img": "https://static.mcake.com/new_goods/zhenzinaiyou/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含10套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 10,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "10",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "2磅(908g)，适合4-7人食，含10套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "18466",
							"goodsId": "7124",
							"twoId": "18463",
							"mainId": "18462",
							"sku": "C9003",
							"ahead": "提前5小时预定",
							"edible": "8-12人食",
							"name": "榛子奶油",
							"french": "Crème de noisette",
							"spec": "3磅",
							"price": "428.00",
							"amount": "428.00",
							"main": "0",
							"size": "22cm*7.5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "1.36kg",
							"img": "https://static.mcake.com/new_goods/zhenzinaiyou/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含15套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 15,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "15",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "3磅(1.36kg)，适合8-12人食，含15套餐具，1支生日蜡烛，1个生日帽"
						},
						{
							"id": "18467",
							"goodsId": "7125",
							"twoId": "18463",
							"mainId": "18462",
							"sku": "C9005",
							"ahead": "提前5小时预定",
							"edible": "12-20人食",
							"name": "榛子奶油",
							"french": "Crème de noisette",
							"spec": "5磅",
							"price": "728.00",
							"amount": "728.00",
							"main": "0",
							"size": "28cm*7.5cm",
							"cateId": "1",
							"cityId": "110",
							"weight": "2.27kg",
							"img": "https://static.mcake.com/new_goods/zhenzinaiyou/list/1.jpg",
							"birthday_hat": "1个生日帽",
							"candle": "1支生日蜡烛",
							"tableware": "含20套餐具",
							"birthdayHatNum": 1,
							"candleNum": 1,
							"tablewareNum": 20,
							"fittings": [{
									"id": "53",
									"name": "生日蜡烛",
									"uid": "5",
									"unit": "支",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
									"give": "0",
									"buy": "0"
								},
								{
									"id": "51",
									"name": "餐具",
									"uid": "1",
									"unit": "套",
									"num": "20",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								},
								{
									"id": "67",
									"name": "生日帽",
									"uid": "3",
									"unit": "个",
									"num": "1",
									"sale": "0",
									"price": "0.00",
									"img": "",
									"give": "1",
									"buy": "1"
								}
							],
							"describe": "5磅(2.27kg)，适合12-20人食，含20套餐具，1支生日蜡烛，1个生日帽"
						}
					],
					"fittings": [{
							"id": "53",
							"name": "生日蜡烛",
							"uid": "5",
							"unit": "支",
							"num": "1",
							"sale": "0",
							"price": "0.00",
							"img": "https://img.mcake.com/system/fittings/20170927/2017092713240766438.jpg",
							"give": "0",
							"buy": "0"
						},
						{
							"id": "51",
							"name": "餐具",
							"uid": "1",
							"unit": "套",
							"num": "5",
							"sale": "0",
							"price": "0.00",
							"img": "",
							"give": "1",
							"buy": "1"
						},
						{
							"id": "67",
							"name": "生日帽",
							"uid": "3",
							"unit": "个",
							"num": "1",
							"sale": "0",
							"price": "0.00",
							"img": "",
							"give": "1",
							"buy": "1"
						}
					],
					"birthday_hat": "1个生日帽",
					"candle": "1支生日蜡烛",
					"tableware": "含5套餐具",
					"birthdayHatNum": 1,
					"candleNum": 1,
					"tablewareNum": 5,
					"describe": "1磅(454g)，适合2-3人食，含5套餐具，1支生日蜡烛，1个生日帽",
					"tags": [{
							"id": "39",
							"name": "坚果",
							"style": "kw_02"
						},
						{
							"id": "34",
							"name": "奶油",
							"style": "kw_05"
						}
					],
					"mater": [{
							"id": "480",
							"name": "法国铁塔淡奶油",
							"img": "https://img.mcake.com/goods/mater/2022061011183495086.jpg"
						},
						{
							"id": "14",
							"name": "土耳其榛子",
							"img": "https://img.mcake.com/goods/mater/2014081214260632874.jpg"
						}
					],
					"basic": [{
							"id": "668",
							"type": "6",
							"french": "Flavor",
							"chinese": "口味",
							"title": "Flavor 口味",
							"value": "榛子/奶油"
						},
						{
							"id": "540",
							"type": "4",
							"french": "Base",
							"chinese": "口味基底",
							"title": "Base 口味基底",
							"value": "Cream"
						},
						{
							"id": "667",
							"type": "5",
							"french": "Texture",
							"chinese": "口感",
							"title": "Texture 口感",
							"value": "轻盈松软"
						},
						{
							"id": "159",
							"type": "3",
							"french": "Sweetness",
							"chinese": "甜味指数",
							"title": "Sweetness 甜味指数",
							"value": "1"
						}
					],
					"banner": [
						"https://static.mcake.com/new_goods/zhenzinaiyou/middle/1.jpg",
						"https://static.mcake.com/new_goods/zhenzinaiyou/middle/2.jpg",
						"https://static.mcake.com/new_goods/zhenzinaiyou/middle/3.jpg",
						"https://static.mcake.com/new_goods/zhenzinaiyou/middle/4.jpg"
					],
					"isBlessing": true,
					"express": 0,
					"showImg": "",
					"ruleImg": ""
				}
			]
		}
	},
	actions: {
		// 点击单个商品更改选中状态
		changeCheckState(idx) {
			this.cartData[idx].isCheck = !this.cartData[idx].isCheck
		},
		// 点击全选按钮触发每项商品的选中状态
		changeEveryCheckState(val) {
			this.cartData.forEach(item => item.isCheck = val)
		},
		// 添加购买商品数量
		addBuyNum(idx, val) {
			this.cartData[idx].buyNum = val
		},
		// 修改选中商品的规格
		changeSpec(idx, listIdx) {
			this.cartData[idx].subListIdx = listIdx
			console.log(idx, listIdx);
		},
		// 添加新数据至购物车
		addToCart(detail, selectDetail, buyNum) {
			console.log(detail, selectDetail);
			// 即将加入购物车的商品id
			let addId = detail.id
			// 即将加入购物车的商品规格
			let addSpec = selectDetail[0].spec
			// 查找加入的商品是否已经存在于购物车中
			let isExistIndex = this.cartData.findIndex(item => {
				return item.id === addId && item.list[item.subListIdx].spec === addSpec
			})
			if (isExistIndex !== -1) {
				// 如果即将加入购物车的商品在购物车中已经存在,并且所选规格一致,则只需要添加数量
				this.cartData[isExistIndex].buyNum++
			} else {
				// 如果即将加入购物车的商品不存在于购物车,直接将商品加入购物车
				let index = 0
				for (let i = 0; i < detail.list.length; i++) {
					if (detail.list[i].spec === selectDetail[0].spec) {
						index = i
					}
				}
				this.cartData.push({
					...detail,
					isCheck: false,
					buyNum: buyNum ? buyNum : 1,
					subListIdx: index
				})
			}
		}
	},
	getters: {
		// 全选功能
		checkAll() {
			return this.cartData.every(item => item.isCheck === true)
		},
		// 计算结算价格
		totalPrice() {
			let total = 0
			this.cartData.forEach(item => {
				if (item.isCheck) {
					total += item.buyNum * Number(item.price)
				}
			})
			return total
		}
	}
})
export default useCartStore