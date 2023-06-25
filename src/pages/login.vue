<script setup>
import { VForm } from 'vuetify/components/VForm'
// import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { reactive } from 'vue'
import { phoneValidator, requiredValidator } from "@/validator"

const authThemeImg = useGenerateImageVariant(authV2LoginIllustrationLight, authV2LoginIllustrationDark, authV2LoginIllustrationBorderedLight, authV2LoginIllustrationBorderedDark, true)
const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)
const isPasswordVisible = ref(false)
const refVForm = ref()
const phone = ref()
const password = ref('admin')
const rememberMe = ref(false)
const data = reactive({
  phone: '',
  code: '',
  msg: '获取验证码'
})
</script>

<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol lg="8" class="d-none d-lg-flex">
      <div class="position-relative bg-background rounded-lg w-100 ma-8 me-0">
        <div class="d-flex align-center justify-center w-100 h-100">
          <VImg max-width="505" :src="authThemeImg" class="auth-illustration mt-16 mb-2" />
        </div>

        <VImg :src="authThemeMask" class="auth-footer-mask" />
      </div>
    </VCol>

    <VCol cols="12" lg="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <VNodeRenderer :nodes="themeConfig.app.logo" class="mb-6" />

          <h5 class="text-h5 mb-1">
            Welcome to <span class="text-capitalize"> {{ themeConfig.app.title }} </span>!
          </h5>

        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit="() => { }">
            <VRow>
              <!-- 手机号码 -->
              <VCol cols="12">
                <v-row no-gutters>
                  <v-col cols="12" md="2" class="d-flex align-items-center">
                    <label for="data.phone" class="v-label text-body-2 text-high-emphasis">手机号码：</label>
                  </v-col>
                  <v-col cols="12" md="10">
                    <AppTextField id="data.phone" v-model="data.phone" placeholder="请输入手机号码" persistent-placeholder :rules="[requiredValidator]" />
                  </v-col>
                </v-row>
              </VCol>
              <!-- 验证码 -->
              <v-col cols="12">
                <v-row no-gutters>
                  <v-col cols="12" md="2" class="d-flex align-items-center">
                    <label for="data.code" class="v-label text-body-2 text-high-emphasis">验证码：</label>
                  </v-col>
                  <v-col cols="12" md="10">
                    <div class="d-flex">
                      <AppTextField v-model="data.code" placeholder="请输入验证码" persistent-placeholder class="mr-2" />
                      <v-btn>{{ data.msg }}</v-btn>
                    </div>
                  </v-col>
                </v-row>
                <div class="mt-4">
                  <VBtn block type="submit">登录</VBtn>
                </div>
              </v-col>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
