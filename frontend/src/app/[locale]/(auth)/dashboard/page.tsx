import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import OverView from './overview/page';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'FinMind',
  });

  return {
    title: t('title'),
  };
}

export default async function Dashboard(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <OverView />
    </>
  );
}
