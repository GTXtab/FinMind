import type { Metadata } from "next";
import { SignIn } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

type ISignInPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: ISignInPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "SignIn",
  });

  return {
    title: t("title"),
    description: t("submit"),
  };
}

export default async function SignInPage(props: ISignInPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <section className="relative flex items-center pl-25 min-h-screen w-full bg-cover bg-center bg-[url('/back.png')]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <label className="relative p-4 rounded-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-500 before:animate-pulse">
        <SignIn path={getI18nPath("/sign-in", locale)} />
      </label>
    </section>
  );
}
