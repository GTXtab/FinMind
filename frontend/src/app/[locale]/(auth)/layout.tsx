import { ClerkProvider } from '@clerk/nextjs';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/libs/I18nRouting';
import { ClerkLocalizations } from '@/utils/AppConfig';

export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  const clerkLocale = ClerkLocalizations.supportedLocales[locale] ?? ClerkLocalizations.defaultLocale;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';
  let afterSignOutUrl = '/sign-in';

  if (locale !== routing.defaultLocale) {
    signInUrl = `/${locale}${signInUrl}`;
    signUpUrl = `/${locale}${signUpUrl}`;
    dashboardUrl = `/${locale}${dashboardUrl}`;
    afterSignOutUrl = `/${locale}${afterSignOutUrl}`;
  }

  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk',
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
          socialButtonsPlacement: 'top',
          socialButtonsVariant: 'blockButton',
        },
        elements: {
          footer: 'hidden',
          footerAction: 'hidden',
          footerText: 'hidden',
          card: 'w-full max-w-md mx-auto',
          main: 'flex items-center justify-center py-8',
          cardContent: 'p-8',
          headerTitle: 'text-center text-2xl font-bold',
          headerSubtitle: 'text-center text-gray-600',
          formField: 'mb-4',
          formFieldLabel: 'block text-sm font-medium mb-2',
          formFieldInput: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
          formButtonPrimary: 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500',
          socialButtons: 'space-y-2',
          socialButton: 'w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50',
        },
      }}
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
      afterSignOutUrl={afterSignOutUrl}
    >
      {props.children}
    </ClerkProvider>
  );
}
