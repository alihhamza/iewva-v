<template>
  <a-layout-content :style="{ margin: '73px 16px 0', overflow: 'initial' }">
    <a-result title="Welcome to profile page. We have done all the operations!">
      <template #icon>
        <smile-outlined/>
      </template>
    </a-result>
  </a-layout-content>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

import {SmileOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    SmileOutlined
  }
})
</script>