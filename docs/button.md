# 点上瘾了
<br>
<VoiceButton :buttons="buttons"></VoiceButton>

<script>
export default {
    data(){
        return {
            buttons:[{
                title:"PonPon!",
                voice:"/voice/ponpon.mp3"
            },
            {
                title:"花Q!",
                voice:"/voice/花Q.mp3"
            }]
        }
    }
};
</script>