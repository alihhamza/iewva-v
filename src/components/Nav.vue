<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding:0, background: '#fff'}">
    <div class="logo"/>
    <a-dropdown placement="bottomRight">
      <a class="ant-dropdown-link"
         :style="{ float: 'right', padding: '0 20px', marginRight: '5px', display: 'flex', alignItems: 'center' }"
         @click.prevent>
        <a-avatar size="small">
          <template #icon>
            <user-outlined/>
          </template>
        </a-avatar>
        <a-typography-text type="secondary" style="margin-left: 8px;">Pasha</a-typography-text>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <router-link :to="{name: 'Profile'}">
              <UserOutlined :style="{marginRight: '5px'}"/>
              Profile Settings
            </router-link>
          </a-menu-item>
          <a-menu-divider/>
          <a-menu-item @click='logout'>
            <logout-outlined :style="{marginRight: '5px'}"/>
            Logout
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {store} from "../store";
import router from "../router";

import {UserOutlined, LogoutOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    UserOutlined,
    LogoutOutlined
  },
  methods: {
    logout() {
      store.dispatch('auth/logout').then(() => {
        router.push({name: 'Login'})
      })
    }
  }
})
</script>

<style>
#components-layout-demo-fixed .logo {
  width: 126px;
  height: 31px;
  background: rgba(0, 0, 0, 0.6);
  margin: 16px 37px;
  float: left;
}
</style>