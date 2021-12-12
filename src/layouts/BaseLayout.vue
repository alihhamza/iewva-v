<template>
  <a-layout id="components-layout-demo-fixed" class="site-layout-background" style="min-height: 100vh">
    <router-view/>
    <a-layout-footer :style="{ textAlign: 'center' }">
      IEWVA ©2022
    </a-layout-footer>
  </a-layout>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
//
});
</script>
