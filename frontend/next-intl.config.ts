import { defineRouting } from 'next-intl/routing';
import { AppConfig } from './src/utils/AppConfig';

export default defineRouting({
  locales: AppConfig.locales,
  defaultLocale: AppConfig.defaultLocale,
  localePrefix: AppConfig.localePrefix,
});