
<template>
  <div :class="{'minbutton':type=='min'}"></div>
</template>
<script>
export default {
  name: "HButton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default:'',
    },
    // 是否为圆角
    round: {
      type: Boolean,
      default:false,
    },
    // 按钮的大小
    size: {
      type: String,
      default: "",
    },

    // 
  },
};
</script>
<style lang="scss" scoped>
.minbutton {
  width: 120px;
  height: 38px;
  background: red;
  
}
</style>
