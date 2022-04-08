<template>
  <div class="card" @click="handleClick">
    <el-card>
      <img class="cover" :src="video.cover" :alt="video.title"/>
      <div class="title">{{ video.title }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export interface VideoInfo {
  cover: string
  title: string
  bv?: string
  link?: string
}

export default defineComponent({
  props: {
    video: Object as PropType<VideoInfo>
  },
  setup(props) {
    const video = props.video
    const handleClick = () => {
      let url: string

      if (video?.link) {
        url = video.link
      } else {
        url = "https://www.bilibili.com/video/" + video.bv
      }

      window.open(url, "_blank")
    }
    return { video, handleClick }
  }
})


</script>

<style scoped>
.card:hover {
  cursor: pointer;
}

.title {
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.cover {
  min-height: 120px;
}
</style>