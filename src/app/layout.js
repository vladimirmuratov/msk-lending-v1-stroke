import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import {Metrika} from '@/components/Metrika'
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-stroke.vercel.app'),
    title: 'Лечение и реабилитация после инсульта в Москве — помощь 24/7',
    description: 'Лечение и реабилитация после инсульта в ведущих клиниках Москвы. Восстановление речи, движения, памяти. Индивидуальные программы, сопровождение 24/7.',
    keywords: ['реабилитация после инсульта, восстановление после инсульта, лечение инсульта москва, госпитализация после инсульта, восстановление речи после инсульта, реабилитация в москве, патронаж после инсульта, нейрореабилитация, физиотерапия инсульт, помощь после инсульта.'],
    other: {
         ['yandex-verification']: '55bf3e721d47fe09',
    },
    openGraph: {
        title: 'Реабилитация после инсульта в Москве — восстановление, госпитализация, лечение. Звоните! 8 (499) 719-81-00, 24/7',
        description: 'Медицинская Сервисная Компания предлагает реабилитацию после инсульта в Москве: госпитализация без ожидания, физиотерапия, восстановление речи и памяти, патронаж пожилых пациентов. Круглосуточная поддержка 24/7.',
        images: ['/images/banner6.webp'],
        url: 'https://msk-stroke.vercel.app',
        type: 'website',
        locale: 'ru_RU',
    },
    alternates: {
        canonical: 'https://msk-stroke.vercel.app',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
