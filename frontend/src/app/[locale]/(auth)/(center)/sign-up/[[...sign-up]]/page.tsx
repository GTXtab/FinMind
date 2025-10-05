import type { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getI18nPath } from "@/utils/Helpers";

type ISignUpPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: ISignUpPageProps
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "SignUp",
  });

  return {
    title: t("title"),
    description: t("submit"),
  };
}

export default async function SignUpPage(props: ISignUpPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="relative flex items-center pl-25 min-h-screen w-full bg-cover bg-center bg-[url('/back.png')]">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative p-4 rounded-lg border-2 border-transparent before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-blue-500 before:animate-pulse">
        <SignUp path={getI18nPath("/sign-up", locale)} />
      </div>
    </div>
  );
}
