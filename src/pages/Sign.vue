<template>
  <div class="sign-warp">
    <!-- <q-intersection
      transition="scale"
      once
      class="sign-container vertical-middle absolute-center text-primary"
    >
      <q-card class="text-primary">
        <q-card-section>
          <div class="text-h6">{{ t('sign.title') }}</div>
        </q-card-section>

        <q-tabs v-model="tab" align="justify">
          <q-tab :label="t('sign.types.login')" icon="login" name="signIn" />
          <q-tab :label="t('sign.types.register')" icon="person_add" name="register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="signIn">
            <q-form @submit.prevent="submit(0)" class="q-gutter-md">
              <q-input
                filled
                v-model="form.signIn.email"
                lazy-rules
                :placeholder="t('sign.forms.email')"
                :rules="[val => checkInput(val, 'sign.forms.email')]"
                suffix="@vma.edu.cn"
              >
                <template v-slot:before>
                  <q-icon name="mail" />
                </template>
              </q-input>
              <q-input
                v-model="form.signIn.password"
                filled
                lazy-rules
                :placeholder="t('sign.forms.password')"
                :rules="[val => checkInput(val, 'sign.forms.password')]"
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
              <q-btn :label="t('sign.types.login')" type="submit" :disable="submitWait" />
            </q-form>
          </q-tab-panel>

          <q-tab-panel name="register">
            <q-form @submit.prevent="submit(1)" class="q-gutter-md">
              <q-input
                filled
                v-model="form.register.id"
                lazy-rules
                :placeholder="t('sign.forms.id')"
                type="number"
                :rules="[val => checkInput(val, 'sign.forms.id')]"
              >
                <template v-slot:before>
                  <q-icon name="badge" />
                </template>
              </q-input>
              <q-input
                filled
                v-model="form.register.name"
                lazy-rules
                :placeholder="t('sign.forms.name')"
                :rules="[val => checkInput(val, 'sign.forms.name')]"
              >
                <template v-slot:before>
                  <q-icon name="face" />
                </template>
              </q-input>
              <q-input
                filled
                v-model="form.register.email"
                lazy-rules
                :placeholder="t('sign.forms.email')"
                :rules="[val => checkInput(val, 'sign.forms.email')]"
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
                :placeholder="t('sign.forms.password')"
                :rules="[val => checkInput(val, 'sign.forms.password')]"
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
              <q-toggle v-model="form.register.accept" :label="t('sign.forms.accept')" />
              <q-btn
                :label="t('sign.types.register')"
                type="submit"
                :disable="!form.register.accept || submitWait"
              />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
        <q-btn label="测试登录" @click="mockSignIn" />
      </q-card>
      <q-btn
        :label="t('sign.back')"
        class="backBtn"
        rounded
        outline
        icon="arrow_back"
        @click="back"
      />
    </q-intersection>-->
    <q-card class="sign-container vertical-middle absolute-center q-pa-xl" flat bordered>
      <q-card-section class="column q-my-md">
        <img
          class="col self-center q-mb-md"
          src="https://cdn.quasar.dev/img/layout-gallery/logo-google.svg"
        />
        <div class="text-h5 col self-center q-my-xs">{{ t('sign.title') }}</div>
        <div class="text-h6 col self-center">{{ t('sign.subtitle') }}</div>
      </q-card-section>

      <q-form @submit.prevent="submit(0)" class="q-gutter-md">
        <q-input
          outlined
          v-model="form.signIn.email"
          lazy-rules
          :label="t('sign.forms.email')"
          :rules="[val => checkInput(val, 'sign.forms.email')]"
        />
        <q-input
          v-model="form.signIn.password"
          outlined
          lazy-rules
          :label="t('sign.forms.password')"
          :rules="[val => checkInput(val, 'sign.forms.password')]"
          :type="showPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="showPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPwd = !showPwd"
            />
          </template>
        </q-input>
        <q-card-actions class="q-mb-md">
          <q-btn :label="t('sign.types.register')" flat color="primary" />
          <q-btn :label="t('sign.forget')" flat color="primary" />
          <q-space />
          <q-btn
            :label="t('sign.types.login')"
            type="submit"
            :disable="submitWait"
            unelevated
            color="primary"
            style="width:100px"
          />
        </q-card-actions>
      </q-form>
      <div class="extra row justify-between">
        <div>
          <q-btn label="测试登录" @click="mockSignIn" />
          <LanguageSwitcher />
        </div>
        <div>
          <q-btn flat size="sm" :label="t('user.policy')" class="col" />
          <q-btn flat size="sm" :label="t('user.service')" class="col" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from 'components/LanguageSwitcher';

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const { t } = useI18n();
    const tab = ref('signIn');
    const showPwd = ref(true);
    const submitWait = ref(false);
    const form = reactive({
      signIn: {
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

    const checkInput = async (val, name) => (val && val.length > 0) || t('sign.plzInp') + t(name);

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
    async function mockSignIn() {
      store.dispatch('user/mockSignIn').then(() => success());
    }
    async function submit(type) {
      if (submitWait.value) return;
      const data = type ? form.register : form.signIn;
      const action = type ? 'user/register' : 'user/signIn';
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
      mockSignIn,
      submit,
    };
  },
  components: {
    LanguageSwitcher,
  },
});
</script>
<style lang="scss" scoped>
.sign-warp {
  width: 100%;
  height: 100%;
  @media (max-width: $breakpoint-xs-max) {
    .sign-container {
      height: 100%;
      width: 100% !important;
      .extra {
        bottom: 10px !important;
      }
    }
  }

  .sign-container {
    width: 448px;
    .extra {
      bottom: -60px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
}
</style>
