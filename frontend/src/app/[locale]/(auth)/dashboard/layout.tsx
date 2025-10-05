import { setRequestLocale } from "next-intl/server";
import { BaseTemplate } from "@/templates/base-template";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <BaseTemplate>
      {props.children}
    </BaseTemplate>
  );
}
