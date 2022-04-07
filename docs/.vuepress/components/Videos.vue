<template>
  <div class="container">
    <VideoCard v-for="(video, index) in videos" :key="index" :video="video"></VideoCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import VideoCard, { VideoInfo } from "./VideoCard.vue"

export default defineComponent({
  props: {
    videos: Object as PropType<VideoInfo[]>
  },
  components: { VideoCard },
  setup(props) {
    return props.videos
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 230px);
  justify-content: center;
  grid-gap: 20px;
}
</style>
