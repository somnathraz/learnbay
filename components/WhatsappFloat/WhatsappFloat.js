import React from "react";

function WhatsappFloat({ chat360code1 }) {
  return (
    <>
      {chat360code1 ? (
        <script
          dangerouslySetInnerHTML={{
            __html: `var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?77928';
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                var options = {
              "enabled":true,
              "chatButtonSetting":{
                  "backgroundColor":"#4dc247",
                  "ctaText":"",
                  "borderRadius":"10",
                  "marginLeft":"0",
                  "marginBottom":"30",
                  "marginRight":"30",
                  "position":"right"
              },
              "brandSetting":{
                  "brandName":"Learnbay",
                  "brandSubTitle":"The Learner's Path",
                  "brandImg":"https://course.learnbay.co/Learnbay-Favicon-L.png",
                  "welcomeText":"Hi there! How can I help you?",
         "messageText":"I am looking for course, and free career counselling session.",

                  "backgroundColor":"#0a5f54",
                  "ctaText":"Start Chat",
                  "borderRadius":"25",
                  "autoShow":false,
                  "phoneNumber":"+917349222263"
              }
            };
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);`,
          }}
        />
      ) : (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (botId) {
              var s = document.createElement("script");
              s.async = true;
              s.type = 'text/javascript';
              s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
              s.onload = function () {
                window.loadChat360Bot(botId);
              };
              s.onerror = function (err) {
                console.error(err);
              };
              document.body.appendChild(s);
            })("25650848-8eaa-4160-ad08-5f3a3b1ffaa2");
      `,
          }}
        />
      )}
    </>
  );
}

export default WhatsappFloat;
 