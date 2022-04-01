<template>
  <div class="container">
    <VideoCard
      v-for="(video, index) in videos"
      :key="index"
      :cover="video.cover"
      :title="video.title"
      :bv="video.bv"
    ></VideoCard>
  </div>
</template>

<script>
import VideoCard from "./VideoCard.vue";

export default {
  name: "Slice",
  components: {
    VideoCard,
  },
  props: {
    videos: Array,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  justify-content: center;
  grid-gap: 20px;
}
</style>