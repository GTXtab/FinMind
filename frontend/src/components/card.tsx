"use client";

import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type IDashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: IDashboardPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "FinMind",
  });

  return {
    title: t("title"),
  };
}

export default function Card() {
  const t = useTranslations("FinMind");

  return <h1>{t("title")}</h1>;
}
