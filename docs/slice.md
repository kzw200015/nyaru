# 来看看可爱的猫雷吧
<br>
<Videos :videos="videos"></Videos>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {
      videos: [
        {
          cover: "/cover/【猫雷】【CS：GO】你在看我对吧！.jpg",
          title: "【猫雷】【CS：GO】你在看我对吧！",
          bv: "BV14L4y1T73B"
        },
        {
          cover: "/cover/一分钟带你了解V吧小公主猫雷.jpg",
          title: "一分钟带你了解V吧小公主猫雷",
          bv: "BV1GR4y137n4"
        },
        {
          cover: "/cover/中文水平被家乡路人爆鲨的猫雷.jpg",
          title: "中文水平被家乡路人爆鲨的猫雷",
          bv: "BV1hb4y117F8"
        },
        {
          cover: "/cover/【猫雷】猫雷的dalailai真好看.jpg",
          title: "【猫雷】猫雷的dalailai真好看",
          bv: "BV1rS4y1U7cU"
        },
        {
          cover: "/cover/【猫雷】日本主播直言DOTA2抄袭LOL！得知真相后光速道歉并为萧瑟前辈鼓劲.jpg",
          title: "【猫雷】日本主播直言DOTA2抄袭LOL！得知真相后光速道歉并为萧瑟前辈鼓劲",
          bv: "BV1D44y1A74p"
        }]
    }
  }
})
</script>