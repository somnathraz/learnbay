import React from "react";
import FirstHeader from "../components/Thankyou/FirstHeader/FirstHeader";
import ThankStats from "../components/Thankyou/ThankStat/ThankStats";
import TyPageCta from "../components/Thankyou/TyPageCta/TyPageCta";
import Survey from "../components/Thankyou/Survey/Survey";
import Footer from "../components/Footer/Footer";

const ThankYouDemo = () => {
  return (
    <div>
      <FirstHeader />
      <ThankStats
        img1="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/NewDesignImage/GIF.gif"
        heading="Take a 2-min survey for higher counselling"
        desc="tat point 1 here lorem ipsum doret trinkettat point 1 here lorem ipsum doret trinket tat point 1 here lorem ipsum doret trinket"
        head1="Stat point 1 here"
        head2="Stat point 1 here"
        head5="Stat point 1 here"
        head6="Stat point 1 here"
        para5="Stat point 1 here lorem ipsum doret trinket"
        para6="Stat point 1 here lorem ipsum doret trinket"
        para1="Stat point 1 here lorem ipsum doret trinket"
        para2="Stat point 1 here lorem ipsum doret trinket"
      />
      <TyPageCta url="" heading="" para="" />
      <Survey
        header="Take a 2-min survey for higher counselling"
        topPara="ENTER SOME TEXT HERE PLACEHOLDER"
        para="Stat point 1 here lorem ipsum doret trinket Stat point 1 here lorem ipsum doret trinket Stat point 1 here lorem ipsum doret trinket Stat point 1 here lorem ipsum doret trinket"
      />
      <Footer />
    </div>
  );
};

export default ThankYouDemo;