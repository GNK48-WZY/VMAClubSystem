<template>
  <div class="login-warp fit">
    <q-intersection
      transition="scale"
      once
      class="login-container vertical-middle absolute-center text-primary"
    >
      <q-card class="text-primary">
        <q-card-section>
          <div class="text-h6">{{ t('login.title') }}</div>
        </q-card-section>

        <q-tabs v-model="tab" align="justify">
          <q-tab :label="t('login.types.login')" icon="login" name="login" />
          <q-tab :label="t('login.types.register')" icon="person_add" name="register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <q-form @submit.prevent="submit(0)" class="q-gutter-md">
              <q-input
                filled
                v-model="form.login.email"
                lazy-rules
                :placeholder="t('login.forms.email')"
                :rules="[val => checkInput(val, 'login.forms.email')]"
                suffix="@vma.edu.cn"
              >
                <template v-slot:before>
                  <q-icon name="mail" />
                </template>
              </q-input>
              <q-input
                v-model="form.login.password"
                filled
                lazy-rules
                :placeholder="t('login.forms.password')"
                :rules="[val => checkInput(val, 'login.forms.password')]"
                :type="showPwd ? 'password' : 'text'"
              >
                <template v-slot:before>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="showPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="showPwd = !showPwd"
                  />
                </template>
              </q-input>
              <q-btn :label="t('login.types.login')" type="submit" :disable="submitWait" />
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="register">
            <q-form @submit.prevent="submit(1)" class="q-gutter-md">
              <q-input
                filled
                v-model="form.register.id"
                lazy-rules
                :placeholder="t('login.forms.id')"
                type="number"
                :rules="[val => checkInput(val, 'login.forms.id')]"
              >
                <template v-slot:before>
                  <q-icon name="badge" />
                </template>
              </q-input>
              <q-input
                filled
                v-model="form.register.name"
                lazy-rules
                :placeholder="t('login.forms.name')"
                :rules="[val => checkInput(val, 'login.forms.name')]"
              >
                <template v-slot:before>
                  <q-icon name="face" />
                </template>
              </q-input>
              <q-input
                filled
                v-model="form.register.email"
                lazy-rules
                :placeholder="t('login.forms.email')"
                :rules="[val => checkInput(val, 'login.forms.email')]"
                suffix="@vma.edu.cn"
              >
                <template v-slot:before>
                  <q-icon name="mail" />
                </template>
              </q-input>
              <q-input
                v-model="form.register.password"
                filled
                lazy-rules
                :placeholder="t('login.forms.password')"
                :rules="[val => checkInput(val, 'login.forms.password')]"
                :type="showPwd ? 'password' : 'text'"
              >
                <template v-slot:before>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="showPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="showPwd = !showPwd"
                  />
                </template>
              </q-input>
              <q-toggle v-model="form.register.accept" :label="t('login.forms.accept')" />
              <q-btn
                :label="t('login.types.register')"
                type="submit"
                :disable="!form.register.accept || submitWait"
              />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
        <q-btn label="测试登录" @click="mockLogin" />
      </q-card>
      <q-btn
        :label="t('login.back')"
        class="backBtn"
        rounded
        outline
        icon="arrow_back"
        @click="back"
      />
    </q-intersection>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const { t } = useI18n();
    const tab = ref('login');
    const showPwd = ref(true);
    const submitWait = ref(false);
    const form = reactive({
      login: {
        email: '',
        password: '',
      },
      register: {
        accept: false,
        name: '',
        id: 0,
        email: '',
        password: '',
      },
    });

    const checkInput = async (val, name) => (val && val.length > 0) || t('login.plzInp') + t(name);

    async function back() {
      if (window.history.length > 0) {
        router.go(-1);
      } else {
        router.push({ name: 'Index' });
      }
    }
    async function success() {
      router.push(route.query.redirect ?? { name: 'ClubCenter' });
    }
    async function mockLogin() {
      await store.dispatch('user/mockLogin').then(() => {
        success();
      });
    }
    async function submit(type) {
      if (submitWait.value) return;
      const data = type ? form.register : form.login;
      const action = type ? 'user/register' : 'user/login';
      submitWait.value = true;
      await store.dispatch(action, data)
        .then(() => {
          success();
        })
        .finally(() => {
          submitWait.value = false;
        });
    }
    return {
      t,
      tab,
      showPwd,
      submitWait,
      form,
      checkInput,
      back,
      mockLogin,
      submit,
    };
  },
});
</script>
<style lang="scss" scoped>
.login-warp {
  .login-container {
    width: 600px;
    max-width: 90%;
    max-height: 90%;
    .backBtn {
      left: 50%;
      top: 40px;
      transform: translate(-50%, 0);
    }
  }
}
</style>
