<template>
  <el-space wrap>
    <div v-for="(voice, index) in voices" :key="index">
      <el-button size="large" @click="handleClick(voice.src)" type="primary">
        {{ voice.name }}
      </el-button>
    </div>
  </el-space>
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