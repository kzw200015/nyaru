# 点上瘾了

<VoiceButton :voices="voices"></VoiceButton>

**如果有更多，或者有更好质量，杂音更少的音源，请务必联系我，从一堆录播里剪辑出来真的很费精力，急需帮忙**

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {
      voices: [
        {
          name: "PonPon",
          src: "/voice/ponpon.mp3"
        },
        {
          name: "花Q-1",
          src: "/voice/花Q-1.mp3"
        },
        {
          name: "花Q-2",
          src: "/voice/花Q-2.mp3"
        },
        {
          name: "谢谢大傻喵",
          src: "/voice/谢谢大傻喵.mp3"
        },
        {
          name: "Baka",
          src: "/voice/baka.mp3"
        },
        {
          name: "悲鳴",
          src: "/voice/悲鳴.mp3"
        },
        {
          name: "防空警报",
          src: "/voice/防空警报.mp3"
        },
        {
          name: "mooo",
          src: "/voice/mooo.mp3"
        },
        {
          name: "にまますら",
          src: "/voice/にまますら.mp3"
        }
      ]
    }
  }
})
</script>