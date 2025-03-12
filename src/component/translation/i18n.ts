import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                title: "Game is coming soon",
                description:
                    "We are launching something amazing. To get the latest updates, please subscribe to our newsletter.",
            },
        },
        vi: {
            translation: {
                title: "Trò chơi sắp ra mắt",
                description:
                    "Chúng tôi sẽ ra mắt một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.",
            },
        },
    },
    lng: "vi",
    fallbackLng: "vi",
    interpolation: { escapeValue: false },
});

export default i18n;
