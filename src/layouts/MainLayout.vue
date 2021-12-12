<template>
  <a-layout id="components-layout-demo-fixed" class="site-layout-background">
    <Nav/>
    <Sider @my-event="changeContentMarginLeftValue"/>
    <a-layout :style="{ marginLeft: contentMarginLeft, minHeight: '100vh' }">
      <router-view/>
      <a-layout-footer :style="{ textAlign: 'center' }">
        IEWVA ©2022
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import Sider from "../components/Sider.vue";
import Nav from "../components/Nav.vue";

export default defineComponent({
  components: {
    Sider,
    Nav,
  },
  setup() {
    return {
      contentMarginLeft: ref<string>('200px')
    }
  },
  methods: {
    changeContentMarginLeftValue(value) {
      this.contentMarginLeft.value = value
    }
  }
});
</script>
