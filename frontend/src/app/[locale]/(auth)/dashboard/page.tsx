import Card from '@/components/card';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

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
    <div className="py-5 [&_p]:my-6">
      <Card />
    </div>
  );
}
