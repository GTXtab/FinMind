import { routing } from '../libs/I18nRouting';

export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  if (
    process.env.VERCEL_ENV === 'production'
    && process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
};

export const getI18nPath = (url: string, locale: string) => {
  if (locale === routing.defaultLocale) {
    return url;
  }

  return `/${locale}${url}`;
};

export const isServer = () => {
  return typeof window === 'undefined';
};


export function formatBalanceSelective(balance: number): string | number {
  if (balance >= 1000000000 && balance % 1000000000 === 0) {
    return (balance / 1000000000) + 'b';
  }

  if (balance >= 1000000 && balance % 1000000 === 0) {
    return (balance / 1000000) + 'm';
  }

  if (balance >= 1000 && balance % 1000 === 0) {
    return (balance / 1000) + 'k';
  }

  return balance.toLocaleString('en-US');
}