<template>
  <div class="warning-list">
    <div v-for="(item, index) in lists" :key="index" class="flex-column item">
      <div class="flex-between flex-left title-box" @click="changeShow(index)">
        <span class="title">
          <span>{{ item.name }}</span>
          <img
            :src="require(`../../../assets/image/detail/tag-${item.icon}.png`)"
            class="color-icon"
          /> </span
        ><span>
          <span class="time"> {{ item.time }}</span>
          <img
            :src="require(`../../../assets/image/detail/top-arrow.png`)"
            class="arrow"
            :class="{ down: !item.show }"
          />
        </span>
      </div>
      <span v-show="item.show">
        <div class="textBox">
          <div
            class="flex-column"
            v-for="(item2, index2) in columns"
            :key="index2"
          >
            <span class="flex-between">
              <span class="flex-base subtext">
                <img
                  :src="
                    require(`../../../assets/image/detail/${item2.icon}.png`)
                  "
                  class="text-icon"
                />
                <span class="label" style="margin-left: 19px">{{
                  item2.label
                }}</span>
                <span class="flex-1" :class="item2.class">
                  {{ item[item2.valueKey] }}</span
                >
              </span>
            </span>
          </div>
        </div>
        <div class="subTextBox">
          <div
            class="flex-column"
            v-for="(item2, index2) in subColumns"
            :key="index2"
          >
            <span class="flex-between subtext">
              <span class="flex-base">
                <span class="label">{{ item2.label }}</span>
                <span class="flex-1" :class="item2.class">
                  {{ item[item2.valueKey] }}</span
                >
              </span>
            </span>
          </div>
        </div>
      </span>
      <span class="flex-right">
        <van-button plain type="info" size="small" class="btn" color="#0082A5">
          关联信息
        </van-button>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Button } from "vant";
Vue.use(Button);
/* eslint-disable */
export default {
  name: "Detail",

  data() {
    return {
      columns: [
        { label: "客户名称：", valueKey: "key1", icon: "icon1" },
        {
          label: "信号描述：",
          valueKey: "key2",
          icon: "icon2",
          class: "grey-text",
        },
        { label: "详情简述：", valueKey: "key3", icon: "icon3" },
        { label: "客户阶段：", valueKey: "key4", icon: "icon4" },
      ],
      subColumns: [
        {
          label: "一级主题：",
          valueKey: "subKey1",
          icon: "",
          class: "border-yellow",
        },
        {
          label: "二级主题：",
          valueKey: "subKey2",
          icon: "",
          class: "border-yellow",
        },
        { label: "二级主题：", valueKey: "subKey3", icon: "" },
        { label: "客户级别：", valueKey: "subKey4", icon: "" },
        { label: "信号状态：", valueKey: "subKey5", icon: "" },
        { label: "处置阶段：", valueKey: "subKey6", icon: "" },
        { label: "信号来源：", valueKey: "subKey7", icon: "" },
        { label: "所属机构：", valueKey: "subKey8", icon: "" },
        { label: "网点名称：", valueKey: "subKey9", icon: "" },
        { label: "客户经理：", valueKey: "subKey10", icon: "" },
        { label: "客户标签：", valueKey: "subKey11", icon: "" },
        { label: "所属行业：", valueKey: "subKey12", icon: "" },
        { label: "企业性质：", valueKey: "subKey13", icon: "" },
      ],
      lists: [
        {
          name: "预警信号等级",
          icon: "hong",
          time: "2025/04/21",
          key1: "黑龙江省XXXXX能源有限公司",
          key2: "关联方 (隐性关联) “宁波隐藏的信息中有限公司”的客户简称“宁波能源隐藏信息的有提示存在客户实际控制人及高管授信期隐藏的重大变更、多发控股等非正常的重大人事调整的可能",
          key3: "宁波某某某宁波能源隐藏信息公司高级管理人员辞职的公共",
          key4: "已批",
          subKey1: "外部舆情",
          subKey2: "管理风险（公告）",
          subKey3: "存在高层人员变动的可能",
          subKey4: "",
          subKey5: "信号新增",
          subKey6: "信号新增",
          subKey7: "",
          subKey8: "",
          subKey9: "",
          subKey10: "",
          subKey11: "大公司客户",
          subKe12: "D44电力、热力生产和供应业",
          subKey13: "内资-其他有限公司",
        },
        {
          name: "预警信号等级",
          icon: "hong",
          time: "2025/04/21",
          key1: "黑龙江省XXXXX能源有限公司",
          key2: "关联方 (隐性关联) “宁波隐藏的信息中有限公司”的客户简称“宁波能源隐藏信息的有提示存在客户实际控制人及高管授信期隐藏的重大变更、多发控股等非正常的重大人事调整的可能",
          key3: "宁波某某某宁波能源隐藏信息公司高级管理人员辞职的公共",
          key4: "已批",
          subKey1: "外部舆情",
          subKey2: "管理风险（公告）",
          subKey3: "存在高层人员变动的可能",
          subKey4: "",
          subKey5: "信号新增",
          subKey6: "信号新增",
          subKey7: "",
          subKey8: "",
          subKey9: "",
          subKey10: "",
          subKey11: "大公司客户",
          subKe12: "D44电力、热力生产和供应业",
          subKey13: "内资-其他有限公司",
        },
        {
          name: "预警信号等级",
          icon: "cheng",
          time: "2025/04/21",
          key1: "黑龙江省XXXXX能源有限公司",
          key2: "关联方 (隐性关联) “宁波隐藏的信息中有限公司”的客户简称“宁波能源隐藏信息的有提示存在客户实际控制人及高管授信期隐藏的重大变更、多发控股等非正常的重大人事调整的可能",
          key3: "宁波某某某宁波能源隐藏信息公司高级管理人员辞职的公共",
          key4: "已批",
          subKey1: "外部舆情",
          subKey2: "管理风险（公告）",
          subKey3: "存在高层人员变动的可能",
          subKey4: "",
          subKey5: "信号新增",
          subKey6: "信号新增",
          subKey7: "",
          subKey8: "",
          subKey9: "",
          subKey10: "",
          subKey11: "大公司客户",
          subKe12: "D44电力、热力生产和供应业",
          subKey13: "内资-其他有限公司",
        },
        {
          name: "预警信号等级",
          icon: "cheng",
          time: "2025/04/21",
          key1: "黑龙江省XXXXX能源有限公司",
          key2: "关联方 (隐性关联) “宁波隐藏的信息中有限公司”的客户简称“宁波能源隐藏信息的有提示存在客户实际控制人及高管授信期隐藏的重大变更、多发控股等非正常的重大人事调整的可能",
          key3: "宁波某某某宁波能源隐藏信息公司高级管理人员辞职的公共",
          key4: "已批",
          subKey1: "外部舆情",
          subKey2: "管理风险（公告）",
          subKey3: "存在高层人员变动的可能",
          subKey4: "",
          subKey5: "信号新增",
          subKey6: "信号新增",
          subKey7: "",
          subKey8: "",
          subKey9: "",
          subKey10: "",
          subKey11: "大公司客户",
          subKe12: "D44电力、热力生产和供应业",
          subKey13: "内资-其他有限公司",
        },
      ],
    };
  },
  methods: {
    changeShow(index) {
      console.log(index, this.lists[index].show);
      this.lists[index].show = !this.lists[index].show;
      this.$forceUpdate();
    },
  },
  created() {
    this.lists.map((item) => {
      item.show = false;
    });
    console.log(this.lists);
    this.lists[0].show = true;
  },
};
</script>

<style scoped>
.warning-list {
  height: 100vh;
  font-size: 13px;
  padding-bottom: 20px;
  .color-icon {
    width: 16px;
    height: 16px;
    margin-bottom: -2px;
    margin-left: 6px;
  }
  .time {
    color: #707070;
  }
  .arrow {
    width: 12px;
    height: 12px;
    margin-left: 14px;
  }
  .down {
    transform: rotate(180deg);
  }
  .item {
    margin-bottom: 10px;
    background: #fff;

    .border {
      width: 100%;
      border-bottom: 1px dotted #5c5c5c5b;
    }
    .subtext {
      position: relative;
      padding: 5px 0;
    }
    .border-yellow {
      border: 1px solid #f3944e;
      border-radius: 30px;
      padding: 0px 7px;
    }
  }
}
.text-icon {
  width: 14px;
  height: 14px;
  position: absolute;
  top: 7px;
}
.title-box {
  padding: 0 12px;
  height: 40px;
  border-bottom: 1px dashed #00000010;
}
.title {
  font-size: 14px;
  position: relative;

  align-items: center;
  img {
    width: 16px;
    height: 16px;
  }
}
.label {
  color: #787878;
  width: 68px;
  display: inline-block;
}
.textBox {
  padding: 4px 12px;
}
.subTextBox {
  padding: 4px 32px;
  background: #f7f5f5;
  color: #515151;
}
.btn {
  margin: 6px 12px;
  padding: 0 22px;
  letter-spacing: 0.7px;
  border-radius: 3px;
}
</style>
