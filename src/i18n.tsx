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
        },
        "privacy": {
          "title": "Privacy Policy",
          "introduction": "This privacy policy explains the privacy practices for my Chrome extension and IDE plugin and so on provided as an individual.",
          "data_collection_title": "Data Collection",
          "data_collection": "This service does not collect personal information from users. Exceptionally, if minimal information is needed, explicit consent will be obtained beforehand.",
          "data_usage_title": "Data Usage",
          "data_usage": "Any information collected may be used for providing and improving the service.",
          "data_sharing_title": "Data Sharing",
          "data_sharing": "I, as the developer, do not sell, rent, or intentionally share your personal information with third parties.",
          "data_protection_title": "Data Protection",
          "data_protection": "As little user information is collected, the risk of data leakage is considered very low. Necessary security measures will be applied nonetheless.",
          "contact_title": "Contact",
          "contact": "For questions or concerns regarding privacy, please contact me from the contact page.",
          "policy_changes_title": "Policy Changes",
          "policy_changes": "This privacy policy may be updated as needed. Any changes will be posted on this page."
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
        },
        "privacy": {
          "title": "プライバシーポリシー",
          "introduction": "このプライバシーポリシーは、私が個人で公開しているChrome拡張およびIDEプラグインその他ツールにおけるプライバシーに関する方針を説明しています。",
          "data_collection_title": "情報の収集",
          "data_collection": "本サービスでは、ユーザーの個人情報を収集することはありません。本サービスの機能上最小限の情報が必要な場合は、事前に明示的な許可をいただきます。",
          "data_usage_title": "情報の使用",
          "data_usage": "収集した情報は、本サービスの提供やサービスの改善に利用する場合があります。",
          "data_sharing_title": "情報の共有",
          "data_sharing": "開発者である私は、お客様の個人情報を第三者に販売、貸与、または意図的に共有することはありません。",
          "data_protection_title": "情報の保護",
          "data_protection": "ユーザー情報をほとんど収集しないため、情報の漏洩リスクは非常に低いと考えています。それでも、必要なセキュリティ対策を講じます。",
          "contact_title": "お問い合わせ",
          "contact": "プライバシーに関するご質問やご不明点がある場合、CONTACT ページからご連絡ください。",
          "policy_changes_title": "プライバシーポリシーの変更",
          "policy_changes": "このプライバシーポリシーは、必要に応じて変更されることがあります。変更があった場合には、本ページ上でお知らせいたします。"
        }
      }
    }
  }
});

export default i18n;