<template>
  <div class="container">
    <div v-for="(button, index) in buttons" :key="index">
      <el-button @click="handleClick(button.voice)" type="primary">
        {{ button.title }}
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VoiceButton",
  props: {
    buttons: Array,
  },
  methods: {
    handleClick(voice) {
      const audio = new Audio();
      audio.src = voice;
      audio.play();
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: center;
  grid-gap: 20px;
}
</style>