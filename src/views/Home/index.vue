<template>
  <div class="home">
    首页
    <good-project></good-project>
  </div>
</template>

<script>
import GoodProject from '@/views/Home/GoodProject/GoodProject'
export default {
  name: 'home',
  components:{
    GoodProject
  }
}
</script>
