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
    link: String,
  },
  methods: {
    handleClick() {
      let url = "";

      if (this.link) {
        url = this.link;
      } else {
        url = "https://www.bilibili.com/video/" + this.bv;
      }

      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>