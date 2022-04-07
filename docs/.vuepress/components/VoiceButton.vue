<template>
  <div class="container">
    <div v-for="(voice, index) in voices" :key="index">
      <el-button @click="handleClick(voice.src)" type="primary">
        {{ voice.name }}
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export interface Voice {
  name: string
  src: string
}

export default defineComponent({
  props: {
    voices: Object as PropType<Voice[]>
  },
  setup(props) {
    return {
      props,
      handleClick: (src: string) => {
        const audio = new Audio();
        audio.src = src;
        audio.play();
      }
    }
  }
})
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: center;
  grid-gap: 20px;
}
</style>