import { createI18n } from 'vue-i18n';
import enUS from '@/assets/i18n/en-US.json';
import zhCN from '@/assets/i18n/zh-CN.json';

type MessageSchema = typeof enUS;

const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN'>({
  globalInjection: true,
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
});

export default i18n;
