import DataScience from "../../public/Data-science-course-by-skilllslash.ico";
import DataEngineering from "../../public/Data-engineering-course.ico";
import BusinessAnalytics from "../../public/Business-analytics-course.ico";
import FullStack from "../../public/Full-stack-develeopr-course.ico";
import CloudComputing from "../../public/CLOUD-COMPUTING-IOT-COURSE-BY-SKILLSLASH.ico";
import CloudDev from "../../public/CLOUD-DEVOPS-COURSE-.ico";
import DigitalMarketing from "../../public/DIGITAL-MARKETING-COURSE-BY-SKILLSLASH.ico";

const TabData = [
  {
    id: "Popular Courses",
    title: "View All",
    desc: [
      {
        id: 1,
        img: { DataScience },
        name: "Advance Data Science and AI Course",
        time: "9 Months",
        mode: "online live class",
      },
      {
        id: 2,
        img: { BusinessAnalytics },
        name: "Business Analytics Program For Professionals",
        time: "8 Months",
        mode: "online live class",
      },
      {
        id: 3,
        img: { FullStack },
        name: "Full Stack Developer Course With Certification",
        time: "8 Months",
        mode: "online live class",
      },
    ],
  },
  {
    id: "Data Science and AI",
    title: "For 1+ year Experience",
    desc: [
      {
        id: 1,
        img: { DataScience },
        name: "Advance Data Science and AI Course",
        time: "9 Months",
        mode: "online live class",
      },
      {
        id: 2,
        img: { BusinessAnalytics },
        name: "Business Analytics Program For Professionals",
        time: "8 Months",
        mode: "online live class",
      },
      {
        id: 3,
        img: { DataEngineering },
        name: "Data Engineering course with Industry Experience",
        time: "8 Months",
        mode: "online live class",
      },
    ],
  },
  {
    id: "Software Development",
    title: "For non-techies",
    desc: [
      {
        id: 1,
        img: { FullStack },
        name: "Full Stack Developer Course With Certification",
        time: "8 Months",
        mode: "online live class",
      },
    ],
  },
  {
    id: "Cloud Computing",
    title: "For Managers",
    desc: [
      {
        id: 1,
        img: { CloudComputing },
        name: "Cloud Computing & IoT course with certification",
        time: "7 Months",
        mode: "online live class",
      },
      {
        id: 2,
        img: { CloudDev },
        name: "Cloud & DevOps course with certification",
        time: "7 Months",
        mode: "online live class",
      },
    ],
  },

  {
    id: "Digital Marketing",
    title: "Job Guaranteed",
    desc: [
      {
        id: 1,
        img: { DigitalMarketing },
        name: "Digital marketing certification program",
        time: "5 Months",
        mode: "online live class",
      },
    ],
  },
];
export default TabData;
