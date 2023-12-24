<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts" setup>
  import { ConfigProvider } from 'ant-design-vue'
  import { AppProvider } from '/@/components/Application'
  import { useTitle } from '/@/hooks/web/useTitle'
  import { useLocale } from '/@/locales/useLocale'
  import { ref, onMounted } from 'vue'

  import { useI18n } from '/@/hooks/web/useI18n'
  import { useMessage } from '/@/hooks/web/useMessage'

  import { useUserStore } from '/@/store/modules/user'
  import { useDesign } from '/@/hooks/web/useDesign'

  import 'dayjs/locale/zh-cn'
  // support Multi-language
  const { getAntdLocale } = useLocale()
  const userStore = useUserStore()
  const loading = ref(false)
  const { t } = useI18n()
  const { createErrorModal } = useMessage()
  const { prefixCls } = useDesign('login')

  /** 手动登录 */

  handleLogin()
  // Listening to page changes and dynamically changing site titles
  useTitle()

  async function handleLogin() {
    try {
      loading.value = true
      await userStore.login({
        password: '123456',
        username: 'vben',
        mode: 'none', //不要默认的错误提示
      })
      // if (userInfo) {
      //   notification.success({
      //     message: t('sys.login.loginSuccessTitle'),
      //     description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
      //     duration: 3,
      //   })
      // }
    } catch (error) {
      createErrorModal({
        title: t('sys.api.errorTip'),
        content: (error as unknown as Error).message || t('sys.api.networkExceptionMsg'),
        getContainer: () => document.body.querySelector(`.${prefixCls}`) || document.body,
      })
    } finally {
      loading.value = false
    }
  }
  onMounted(() => {})
</script>
