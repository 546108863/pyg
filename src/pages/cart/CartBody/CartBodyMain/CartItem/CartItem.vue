<template>
  <div class="item-main">
    <div class="item-form clearfix">
      <input
        type="checkbox"
        class="cell"
        :checked="item.cartIsChecked"
        @change="changeChecked($event, item)"
      />
      <div class="item-info cell">
        <a class="item-img" href="">
          <img
            src="https://img13.360buyimg.com/n5/s54x54_jfs/t1/178646/26/32669/19117/63da392eFdc5e359b/e171b25b089ad579.jpg"
            alt=""
          />
        </a>
        <div class="item-info-msg">
          <div class="item-info-name">
            <span>{{ shopCartInfo.skuName }}</span>
          </div>
          <div class="item-info-ser">
            <img src="" alt="" />
            <span>购买礼品包装</span>
          </div>
        </div>
      </div>
      <div class="item-props cell">
        <div v-for="(item, index) in item.skuProperty" :key="index">
          <span>{{ item }}</span>
        </div>
      </div>
      <div class="item-price cell">
        <span>￥{{ item.skuPrice }}</span>
      </div>
      <div class="item-quantity cell">
        <button @click="skuNumChange('reduceSkuNum', item, $event)">-</button>
        <input
          type="text"
          autocomplete="off"
          :value="item.skuNum"
          @change="skuNumChange('changeSkuNum', item, $event)"
        />
        <button @click="skuNumChange('addSkuNum', item, $event)">+</button>
      </div>
      <div class="item-sum cell">
        <span>￥{{ item.skuPrice * item.skuNum }}</span>
      </div>
      <div class="item-operation cell">
        <button @click="deleteItem(item, index, $event)">删除</button>
        <button>移到我的关注</button>
      </div>
    </div>
    <div class="item-gift">
      <div>
        <span>[赠品]圣迪威（Sendio）MacBook13.3寸屏幕保...</span>
        <span>X1</span>
      </div>
      <div>
        <span>[赠品]圣迪威（Sendio）MacBook13.3寸清洁套...</span>
        <span>X1</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import debounce from '@/utils/deBounce';

export default {
  name: "CartItem",
  data() {
    return {
    }
  },
  methods: {
    dis:debounce(function(){this.$store.dispatch("cart/changeSkuNum")},300),
    skuNumChange(type, sku, e, index) {
      this.skuNumChangeFlag = false;
      let num = e.target.value;
      switch (type) {
        case "addSkuNum":
          sku.skuNum++;
          break;
        case "reduceSkuNum":
          if (sku.skuNum <= 1) {
            if (confirm("是否删除该商品")) {
              this.deleteItem(sku, index);
            }
          } else {
            sku.skuNum--;
          }
          break;
        case "changeSkuNum":
          if (!isNaN(num) && num >= 0 && num != "") {
            e.target.value = parseInt(e.target.value);
            sku.skuNum = parseInt(num);
          } else {
            e.target.value = sku.skuNum;
          }
          break;
        default:
          break;
      }
      this.dis();
    },
    deleteItem(skuInfo, index) {
      this.$store.dispatch("cart/deleteItem", index);
    },
    changeChecked(e, item) {
      let checked = e.target.checked ? 1 : 0;
      item.cartIsChecked = checked;
      this.$store.dispatch("cart/changeChecked");
      this.watchChecked();
    },
    // 每次点击单项商品选择按钮时判断其它商品的勾选状态，从而决定全选按钮是否勾上
    watchChecked() {
      let isAllChecked = true;
      this.shopCartInfo.shopCartList.forEach((item) => {
        if (!item.cartIsChecked) {
          isAllChecked = false;
        }
      });
      if(this.shopCartInfo.isAllChecked != isAllChecked) {
        this.$store.commit('cart/CHANGEALLCHECKED',isAllChecked);
      }
    },
  },
  computed:{
    ...mapState('cart',['shopCartInfo'])
  },
  props:['item'],
  mounted() {
  },
};
</script>

<style lang="less" scoped>
 .item-main {
          border: solid 1px #eee;
          padding-bottom: 10px;
          margin-top: -1px;

          .item-form {
            padding-bottom: 10px;

            font-size: 12px;

            input[type="checkbox"] {
              margin-left: 2px;
            }

            .item-info {
              margin-left: 10px;

              .item-img {
                width: 82px;
                height: 82px;
                float: left;
                border: solid 1px #eee;

                img {
                  width: 100%;
                  height: 100%;
                }
              }

              .item-info-msg {
                width: 218px;
                margin-left: 10px;
                float: left;

                .item-info-name {
                  float: left;
                }

                .item-info-ser {
                  float: left;
                }
              }
            }

            .item-props {
              width: 158px;
              margin-left: 44px;
              div {
                margin-bottom: 5px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }

            .item-price {
              margin-left: 82px;
              font-size: 14px;
            }

            .item-quantity {
              width: 98px;
              margin-left: 86px;

              button {
                float: left;
                height: 28px;
                width: 28px;
                background: none;
                border: solid 1px #eee;
              }

              input {
                float: left;
                width: 40px;
                height: 26px;
                border: none;
                border-top: solid 1px #eee;
                border-bottom: solid 1px #eee;
                text-align: center;
              }
              .ban {
                cursor: not-allowed;
              }
            }

            .item-sum {
              width: 100px;
              margin-left: 86px;
              font-size: 14px;
              font-weight: 600;
            }

            .item-operation {
              margin-left: 60px;

              button {
                display: block;
              }
            }
          }

          .item-gift {
            margin-left: 25px;
            font-size: 12px;
            color: #999999;

            div:nth-child(n + 2) {
              margin-top: 5px;
            }
          }
  }
</style>
