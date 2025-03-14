import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    header: {
                        title: "ABOUT US",
                        game: "GAMES",
                        partners: "PARTNERS",
                        contactUs: "CONTACT US"
                    },
                    title: "We're Getting Ready",
                    countdown: "Countdown to Launch",
                    description: "We will be back with something amazing. Get the latest updates about our games. Please sign up for our newsletter.",
                    subscribe: "Subscribe",
                    email: "Email your email",
                    countdown_children: {
                        day: "Days",
                        hours: "Hours",
                        minutes: "Minutes",
                        second: "Second"
                    },
                    aboutUs: {
                        title: "About Us",
                        description: "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.",
                        user: "Users",
                        game: "Games",
                        everyhour: "24 - Hour",
                        subEveryhour: "24/7 access ensures operators' businesses runs smoothly all year long.",
                        design: "Design",
                        subDesign: "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
                        team: "Team",
                        subTeam: "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games. "
                    },
                    games: "Games",
                    gameInfo: {
                        ourGames: "Our Games",
                        description: "As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress."
                    },
                    partners: "Partners",
                    language: "Language",
                    english: "English",
                    vietnamese: "Vietnamese",
                    footer: {
                        address: "Address",
                        street: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US",
                        subscribe: "Subscribe",
                        subscribeDescription: "Subscribe to our newsletter and be the first to know about our updates"
                    },
                }
            },
            vi: {
                translation: {
                    header: {
                        title: "VỀ CHÚNG TÔI",
                        game: "TRÒ CHƠI",
                        partners: "ĐỐI TÁC",
                        contactUs: "LIÊN HỆ"
                    },
                    title: "Chúng Tôi Đang Chuẩn Bị",
                    countdown: "Đếm ngược đến ngày ra mắt",
                    description: "Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.",
                    subscribe: "Đăng ký",
                    email: "Địa chỉ email của bạn",
                    countdown_children: {
                        day: "Ngày",
                        hours: "Giờ",
                        minutes: "Phút",
                        second: "Giây"
                    },
                    aboutUs: {
                        title: "Về Chúng Tôi",
                        description: "Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.",
                        user: "Người chơi",
                        game: "Trò chơi",
                        everyhour: "Truy Cập 24/7",
                        subEveryhour: "Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm. ",
                        design: "Thiết Kế",
                        subDesign: "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo. ",
                        team: "Đội Ngũ",
                        subTeam: "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử. "
                    },
                    games: "Trò Chơi",
                    gameInfo: {
                        ourGames: "Trò chơi",
                        description: "Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng."
                    },
                    partners: "Đối Tác",
                    language: "Ngôn ngữ",
                    english: "Tiếng Anh",
                    vietnamese: "Tiếng Việt",
                    footer: {
                        address: "Địa chỉ",
                        street: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ",
                        subAddress: "Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam",
                        subscribe: "Theo dõi",
                        subscribeDescription: "Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi"
                    },

                }
            }
        },
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;