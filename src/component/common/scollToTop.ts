import 'react-i18next';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
declare module 'react-i18next' {
    interface CustomTypeOptions {
        resources: {
            translation: {
                title: string;
                countdown: string;
                description: string;
                subscribe: string;
                email: string;
                aboutUs: string;
                games: string;
                partners: string;
                language: string;
                english: string;
                vietnamese: string;
            };
        };
    }
}