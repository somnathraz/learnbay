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
        heading="Gain Clarity: Explore the possibilities and chart your Career Journey"
        head1="Explore Career Options:"
        head2="Embrace Opportunities:"
        head5="Personalized Goal:"
        head6="Strategize for Success:"
        para5="Bridge the gap between aspirations and expertise."
        para6="Overcome obstacles and maximize your potential."
        para1="Find your ideal path based on skills, interests, and goals."
        para2="Discover growth potential in emerging industries."
      />
      <Survey
        header="Are you seeking the perfect course that will propel your career to new heights?"
        para="Unleash your full potential with our personalized and tailored course suggestions that will guide you towards your ideal learning journey."
      />
      <Footer />
    </div>
  );
};

export default ThankYouDemo;