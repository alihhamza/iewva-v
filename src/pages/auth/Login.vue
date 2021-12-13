<template>
  <div style="background: #ececec; padding: 30px; min-height: 90vh; display: grid; place-items: center;">
    <a-card title="Login" :bordered="false" style="width: 300px; margin: auto;">
      <a-form
          layout="horizontal"
          :model="formState"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
      >
        <a-form-item>
          <a-input v-model:value="formState.user" placeholder="Username">
            <template #prefix>
              <UserOutlined style="color: rgba(0, 0, 0, 0.25)"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value="formState.password" type="password" placeholder="Password">
            <template #prefix>
              <LockOutlined style="color: rgba(0, 0, 0, 0.25)"/>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
              type="primary"
              style="width: 100%;"
              html-type="submit"
              :disabled="formState.user === '' || formState.password === ''"
              :loading="formState.loading"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>
<script lang="ts">
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue';
import {defineComponent, reactive} from 'vue';
import type {UnwrapRef} from 'vue';
import {notification} from 'ant-design-vue';

import {store} from "../../store";
import router from "../../router";

interface FormState {
  user: string;
  password: string;
}

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
      loading: false
    });
    const handleFinish: (values) => void = (values) => {
      formState.loading = true
      store.dispatch('auth/login', {
        email: formState.user,
        password: formState.password
      }).then(() => {
        notification['success']({
          message: 'Login Success',
          description: 'You\'re successfully logged in. Now you can perform actions.',
        });
        formState.loading = false
        router.push({name: "Home"});
      }).catch(error => {
        handleFinishFailed(error)
      })
    };
    const handleFinishFailed: (errors) => void = errors => {
      formState.loading = false
      console.log(errors)
      notification['error']({
        message: 'Login Failed',
        description: 'You\'re failed to login. Check your credentials or contact the administrators',
      });
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      notification
    };
  },
});
</script>

