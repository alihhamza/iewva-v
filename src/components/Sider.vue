<template>
  <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :style="{ marginTop: '60px', overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff' }"
  >
    <a-menu v-model:selectedKeys="selectedSideMenu" mode="inline">
      <a-menu-item-group title="General">
        <a-menu-item key="dashboard">
          <router-link :to="{name: 'Home'}">
            <bar-chart-outlined/>
            <span class="nav-text">Dashboard</span>
          </router-link>
        </a-menu-item>
      </a-menu-item-group>
      <a-menu-item-group title="Administrator">
        <a-menu-item key="module">
          <box-plot-outlined/>
          <span class="nav-text">Module</span>
        </a-menu-item>
        <a-sub-menu key="user-management">
          <template #title>
              <span>
                <team-outlined/>
                <span class="nav-text">
                  User Management
                </span>
              </span>
          </template>
          <a-menu-item key="permission">
            <safety-certificate-outlined/>
            <span class="nav-text">Permission</span>
          </a-menu-item>
          <a-menu-item key="role">
            <appstore-outlined/>
            <span class="nav-text">Role</span>
          </a-menu-item>
          <a-menu-item key="user">
            <team-outlined/>
            <span class="nav-text">User</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu-item-group>
      <a-menu-item-group title="Personal">
        <a-menu-item key="profile">
          <router-link :to="{name: 'Profile'}">
            <user-outlined/>
            <span class="nav-text">Profile Settings</span>
          </router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {
  BarChartOutlined,
  BoxPlotOutlined,
  SafetyCertificateOutlined,
  AppstoreOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons-vue";

export default defineComponent({
  components: {
    BarChartOutlined,
    BoxPlotOutlined,
    SafetyCertificateOutlined,
    AppstoreOutlined,
    TeamOutlined,
    UserOutlined
  },
  setup() {
    let contentMarginLeft = ref();

    const onCollapse = (collapsed: boolean, type: string) => {
      // console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      if (broken) {
        contentMarginLeft.value = '16px';
      } else {
        contentMarginLeft.value = '200px';
      }
      // console.log('breakpoint', broken);
    };

    return {
      selectedSideMenu: ref<string[]>(['dashboard']),
      onCollapse,
      onBreakpoint,
      contentMarginLeft
    };
  }
})
</script>

<style scoped>

</style>