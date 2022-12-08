import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  debug: true,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false // react already safes from xss
  },
  resources: {
    en: {
      "translation": {
        "home": {
          "greetings": "Hi there!",
          "desc": "This is badfalcon`s personal website."
        },
        "about": {
          "title": "About me",
          "head" : {
            "name" :  "name",
            "nickname" :  "nickname",
            "born" :  "born",
            "upbringing" :  "upbringing",
            "hobby" : "hobby"
          },
          "body" : {
            "name" :  "Jun Masuda",
            "nickname" :  "badfalcon",
            "born" :  "Shizuoka Japan",
            "upbringing" :  "Born in Japan,Grown up at America and Malaysia.\nBilingual of English and Japanese.",
            "hobby" : "gaming/riddle solving/programming"
          }
        },
        "works": {
          "title": "Works"
        },
        "contact" : {
          "title": "Contact",
          "label_address" : "Email",
          "label_name" : "Name",
          "label_message" : "Message",
          "message_sent" : "Message Sent"
        }
      }
    },
    ja: {
      "translation":{
        "home": {
          "greetings": "やぁ",
          "desc": "ここはbadfalconの個人のサイトです。"
        },
        "about": {
          "title": "自己紹介",
          "head" : {
            "name" :  "氏名",
            "nickname" :  "ハンドルネーム",
            "born" :  "生まれ",
            "upbringing" :  "育ち",
            "hobby" : "趣味"
          },
          "body" : {
            "name" :  "増田 淳",
            "nickname" :  "badfalcon",
            "born" :  "静岡県",
            "upbringing" :  "生まれは日本、アメリカ,マレーシアと海外で育つ。\n日本語と英語のバイリンガル。",
            "hobby" : "ゲーム/謎解き/プログラミング"
          }
        },
        "works": {
          "title": "成果物"
        },
        "contact" : {
          "title": "連絡先",
          "label_address" : "メールアドレス",
          "label_name" : "お名前",
          "label_message" : "メッセージ",
          "message_sent" : "送信が完了しました。"
        }
      }
    }
  }
});

export default i18n;