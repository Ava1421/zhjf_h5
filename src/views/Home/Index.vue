<template>
  <div class="home-page">
    <div class="search-btn">
      <van-search
        v-model="value"
        shape="round"
        background="#ffffff00"
        placeholder="请输入企业名称"
        input-align="center"
      >
        <template #left-icon>
          <img src="../../assets/sousuo.png" class="sousuo" />
        </template>
      </van-search>
    </div>
    <div class="box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in 5" :key="index">
          <div class="risk-dynamics-list">
            <img :src="require(`../../assets/banner.png`)" class="banner" />
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="box flex-between little-title">
      <img src="../../assets/little-title.png" />
      <span>灏园之隐藏内容 </span>
      <span
        >近30天逾期<span class="red-text">21.15</span>万元，逾期<span
          class="red-text"
          >25</span
        >天</span
      >
    </div>
    <div class="box tabs">
      <span
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex-column flex-center"
        @click="go(tab)"
      >
        <img :src="require(`../../assets/image/tab/tab${index + 1}.png`)" />
        {{ tab.name }}</span
      >
    </div>
    <div class="box list">
      <div class="title flex-between">
        <span>授信到期日提示</span>
        <img
          :src="require(`../../assets/image/list/right-arrow.png`)"
          class="arrow"
        />
      </div>
      <div v-for="(item, index) in lists" :key="index" class="flex-box item">
        <img :src="require(`../../assets/image/list/item-icon.png`)" />
        <div class="flex-column border">
          <span class="flex-left">{{ item.name }}</span>
          <span class="flex-between subtext">
            <span>
              <span class="grey-text">产品类型：</span>
              <span class="border-yellow">{{ item.proj }}</span>
            </span>
            <span
              ><span class="grey-text">到期时间：</span>{{ item.time }}</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Swipe, SwipeItem } from "vant";
/* eslint-disable */
export default {
  name: "HomePage",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Search.name]: Search,
  },
  data() {
    return {
      value: "",
      tabs: [
        { name: "客户信息查询", url: "/home/detail" },
        { name: "预警信息查询", url: "/home/detail" },
        { name: "预警客户处置", url: "/home/detail" },
        { name: "资金流向监控", url: "/home/detail" },
        { name: "集团关联查询", url: "/home/detail" },
        { name: "预警流程监控", url: "/home/detail" },
        { name: "客户信息补录", url: "/home/detail" },
        { name: "人员机构管理", url: "/home/detail" },
        { name: "更多", url: "/home/detail" },
      ],
      lists: [
        {
          name: "隐藏字段内容省略",
          proj: "信用证下承兑汇票",
          time: "2025-04-21",
        },
        { name: "隐藏字段内容省略", proj: "开出信用证", time: "2025-04-21" },
        {
          name: "隐藏字段内容省略2",
          proj: "信用证下承兑",
          time: "2025-04-21",
        },
        { name: "隐藏字段内容省略3", proj: "开出信用证1", time: "2025-04-21" },
      ],
    };
  },

  methods: {
    go(item) {
      this.$router.push(item.url);
    },
  },
  mounted() {
    // 确保在组件挂载后访问数据
    console.log(this.$route);
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  .box {
    background: #fff;
    margin-bottom: 8px;
  }
  .little-title {
    align-items: center;
    padding: 0 16px;
    img {
      width: 63.46px;
      height: 38.46px;
    }
  }
  .list {
    padding-bottom: 20px;
    .arrow {
      width: 12px;
      height: 12px;
    }
    .item {
      padding: 0 12px;
      margin-bottom: 12px;
      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
        margin-bottom: -2px;
      }

      .border {
        width: 100%;
        border-bottom: 1px dotted #5c5c5c5b;
      }
      .subtext {
        padding: 12px 0;
      }
      .border-yellow {
        border: 1px solid #f3944e;
        border-radius: 30px;
        padding: 2px 7px;
      }
    }
  }
}
.title {
  font-size: 14px;
  font-weight: bold;
  position: relative;
  padding: 0 12px;
  margin: 12px 0;
  border-bottom: 1px solid #00000010;
  height: 40px;
  align-items: center;
}

.title::before {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  width: 4px;
  height: 100%;
  background: #418dda;
}
.tabs {
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12px;
  padding: 5px 0;
  img {
    width: 26px;
    margin-bottom: 4px;
  }
}

.tabs a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

.content {
  margin-top: 20px;
}

.module {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
}

.clickable-module {
  display: block;
  text-align: center;
  color: #42b983;
  cursor: pointer;
}

.clickable-module:hover {
  text-decoration: underline;
}
.sousuo {
  width: 14px;
  height: 14px;
  margin-bottom: -2px;
}
/deep/.van-search .van-cell {
  padding: 0;
  justify-content: center;
}
/deep/.van-field__value {
  flex: unset;
}
.search-btn {
  background: url("../../assets/head-bg.png") no-repeat;
  background-size: 100% 55px;
  position: sticky;
  top: 0;
}
</style>
