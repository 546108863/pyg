<template>
  <div class="itemInfo_wrap fr">
    <div class="sku_name">
      Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机
    </div>
    <div class="news">
      推荐选择下方[移动优惠购],手机套餐齐搞定,不用换号,每月还有花费返
    </div>
    <div class="summary">
      <dl class="summary_price">
        <dt>价格</dt>
        <dd>
          <i class="price">￥{{ sumPrice }} </i>

          <a href="#">降价通知</a>

          <div class="remark">累计评价612188</div>
        </dd>
      </dl>
      <dl class="summary_promotion">
        <dt>促销</dt>
        <dd>
          <em>加购价</em>
          满999.00另加20.00元，或满1999.00另加30.00元，或满2999.00另加40.00元，即可在购物车换
          购热销商品 详情 》
        </dd>
      </dl>
      <dl class="summary_support">
        <dt>支持</dt>
        <dd>以旧换新，闲置手机回收 4G套餐超值抢 礼品购</dd>
      </dl>
      <dl class="choose_color">
        <dt>{{ skuDetail.skuProperty[0].pTitle }}</dt>
        <dd>
          <button
            :class="item.isChecked ? 'current' : ''"
            v-for="(item, index) in skuDetail.skuProperty[0].pValue"
            :key="index"
            @click="chooseColor(item, skuDetail.skuProperty[0].pValue)"
          >
            {{ item.pName }}
          </button>
        </dd>
      </dl>
      <dl class="choose_version">
        <dt>{{ skuDetail.skuProperty[1].pTitle }}</dt>
        <dd>
          <button
            :class="item.isChecked ? 'current' : ''"
            v-for="(item, index) in skuDetail.skuProperty[1].pValue"
            :key="index"
            @click="chooseVersion(item, skuDetail.skuProperty[1].pValue)"
          >
            {{ item.pName }}
          </button>
        </dd>
      </dl>
      <dl class="choose_type">
        <dt>{{ skuDetail.skuProperty[2].pTitle }}</dt>
        <dd>
          <button
            :class="item.isChecked ? 'current' : ''"
            v-for="(item, index) in skuDetail.skuProperty[2].pValue"
            :key="index"
            @click="buyMethod(item, skuDetail.skuProperty[2].pValue)"
          >
            {{ item.pName }}
          </button>
        </dd>
      </dl>
      <div class="choose_btns">
        <div class="choose_amount">
          <input type="text" v-model="skuNum" />
          <button
            class="add"
            @click="skuNum++"
            :class="skuNum == 200 ? 'ban' : ''"
          >
            +
          </button>
          <button
            class="reduce"
            @click="skuNum = --skuNum < 1 ? 1 : skuNum--"
            :class="skuNum == 1 ? 'ban' : ''"
          >
            -
          </button>
        </div>
        <button class="addcar" @click="toCart">加入购物车</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemInfoWrap",
  data() {
    return {
      skuNum: 1,
      skuDetail: {
        skuId: 1,
        skuName: "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
        skuProperty: [
          {
            pTitle: "选择颜色",
            pValue: [
              { pName: "玫瑰金", isChecked: 1, pPrice: 0 },
              { pName: "白色", isChecked: 0, pPrice: 0 },
              { pName: "黑色", isChecked: 0, pPrice: 0 },
              { pName: "银灰色", isChecked: 0, pPrice: 0 },
            ],
          },
          {
            pTitle: "选择版本",
            pValue: [
              { pName: "128GB", isChecked: 1, pPrice: 5299.0 },
              { pName: "256GB", isChecked: 0, pPrice: 6099.0 },
              { pName: "512GB", isChecked: 0, pPrice: 7099.0 },
              { pName: "1TB", isChecked: 0, pPrice: 8299.0 },
            ],
          },
          {
            pTitle: "购买方式",
            pValue: [
              { pName: "官方标配", isChecked: 1, pPrice: 0 },
              { pName: "移动优惠购", isChecked: 0, pPrice: -1000 },
              { pName: "电信优惠购", isChecked: 0, pPrice: -1000 },
            ],
          },
        ],
      },
      itemInfo: {
        itemId: 1,
        itemImgUrl: require("../../../images/upload/s3.png"),
        itemName: "Apple iPhone 6s（A1700）64G玫瑰金色 移动通信电信4G手机",
        itemProperty: { pColor: "", pSize: "" },
      },
      sumPrice: 0,
      price: 0,
    };
  },
  methods: {
    toCart() {
      sessionStorage.setItem("itemInfo", JSON.stringify(this.itemInfo));
      this.$store.dispatch("shopDetail/addShopCart", {
        skuId: this.skuDetail.skuId,
        skuName: this.skuDetail.skuName,
        skuNum: this.skuNum,
        skuPrice: this.sumPrice,
        skuProperty: {
          skuColor: this.itemInfo.itemProperty.pColor,
          skuSize: this.itemInfo.itemProperty.pSize,
        },
      });
      this.$router.push({
        path: "/cartaccess",
        query: { skuNum: this.skuNum },
      });
    },
    chooseColor(property, propertyList) {
      propertyList.forEach((element) => {
        element.isChecked = 0;
      });
      property.isChecked = 1;
      this.itemInfo.itemProperty.pColor = property.pName;
    },
    chooseVersion(property, propertyList) {
      propertyList.forEach((element) => {
        element.isChecked = 0;
      });
      property.isChecked = 1;
      this.itemInfo.itemProperty.pSize = property.pName;
    },
    buyMethod(property, propertyList) {
      propertyList.forEach((element) => {
        element.isChecked = 0;
      });
      property.isChecked = 1;
    },
  },
  watch: {
    skuNum: {
      handler(newValue, oldValue) {
        if (isNaN(newValue * 1)) {
          this.skuNum = parseInt(oldValue);
        } else {
          this.skuNum = parseInt(newValue) > 200 ? 200 : parseInt(newValue);
        }
        if (isNaN(this.skuNum)) {
          this.skuNum = 1;
        }
      },
    },
    skuDetail: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.price = 0;
        newValue.skuProperty.forEach((element) => {
          element.pValue.forEach((element) => {
            if (element.isChecked) {
              this.price += element.pPrice;
            }
          });
        });
        this.sumPrice = this.price;
      },
    },
  },
  mounted() {
    this.itemInfo.itemProperty.pColor =
      this.skuDetail.skuProperty[0].pValue[0].pName;
    this.itemInfo.itemProperty.pSize =
      this.skuDetail.skuProperty[1].pValue[0].pName;
  },
};
</script>

<style>
.itemInfo_wrap {
  width: 718px;
}
.sku_name {
  height: 30px;
  font-size: 16px;
  font-weight: 700;
}
.news {
  height: 32px;
  color: #e12228;
}
.summary dl {
  overflow: hidden;
}
.summary dt,
.summary dd {
  float: left;
}
.summary dt {
  width: 70px;
  padding-left: 10px;
  margin-right: 10px;
  line-height: 36px;
}
.summary_price,
.summary_promotion {
  position: relative;
  padding: 10px 0;
  background-color: #fee9eb;
}
.price {
  font-size: 24px;
  color: #e12228;
}
.summary_price a {
  color: #c81623;
}
.remark {
  position: absolute;
  right: 10px;
  top: 20px;
}
.summary_promotion {
  padding-top: 0;
}
.summary_promotion dd {
  width: 450px;
  line-height: 36px;
}
.summary_promotion em {
  display: inline-block;
  width: 40px;
  height: 22px;
  background-color: #c81623;
  text-align: center;
  line-height: 22px;
  color: #fff;
}
.summary_support dd {
  line-height: 36px;
}
.choose_color button {
  display: inline-block;
  width: 80px;
  height: 41px;
  background-color: #f7f7f7;
  border: 1px solid #ededed;
  text-align: center;
  line-height: 41px;
}
.summary .current {
  border-color: #c81623;
}
.choose_version {
  margin: 10px 0;
}
.choose_version button,
.choose_type button {
  display: inline-block;
  height: 32px;
  padding: 0 12px;
  background-color: #f7f7f7;
  border: 1px solid #ededed;
  text-align: center;
  line-height: 32px;
}
.choose_btns {
  margin-top: 20px;
}
.choose_amount {
  position: relative;
  float: left;
  width: 49px;
  height: 46px;
  background-color: pink;
}
.choose_amount input {
  width: 33px;
  height: 44px;
  border: 1px solid #ccc;
  text-align: center;
}
.add,
.reduce {
  position: absolute;
  right: 0;
  width: 15px;
  height: 23px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  text-align: center;
  line-height: 22px;
}
.add {
  top: 0;
}
.reduce {
  bottom: 0;
}
.ban {
  color: #666;
  /*禁止鼠标样式*/
  cursor: not-allowed; /* pointer  小手  move  移动  */
}
.addcar {
  float: left;
  width: 142px;
  height: 46px;
  background-color: #c81623;
  text-align: center;
  line-height: 46px;
  font-size: 18px;
  color: #fff;
  margin-left: 10px;
  font-weight: 700;
}
</style>
