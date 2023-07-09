import React from "react";

function WhatsappFloat() {
  return (
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
  );
}

export default WhatsappFloat;