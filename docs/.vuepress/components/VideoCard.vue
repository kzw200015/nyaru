<template>
  <div class="card" @click="handleClick">
    <el-card class="box-card">
      <img :src="cover" :alt="title" />
      <div>
        <span>{{ title }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    cover: String,
    title: String,
    bv: String,
  },
  methods: {
    handleClick() {
      window.open("https://www.bilibili.com/video/" + this.bv, "_blank");
    },
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>