# 点上瘾了
<br>
<VoiceButton :voices="voices"></VoiceButton>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {
      voices: [
        {
          name: "PonPon!",
          src: "/voice/ponpon.mp3"
        },
        {
          name: "花Q!",
          src: "/voice/花Q.mp3"
        }
      ]
    }
  }
})
</script>