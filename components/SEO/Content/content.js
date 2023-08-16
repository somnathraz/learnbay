import { React, useState } from "react";
import styles from "./content.module.css";
import Form from "../../Form/Form";
import Popup from "../../Popup/Popup";

function DataAnalytics({dataScienceCounselling}) {
  const [read, setRead] = useState(false);
  const handler = () => {
    setRead(!read);
  };
  const [popups, setPopups] = useState(false);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.container}>
            <Popup
        trigger={popups}
        setTrigger={setPopups}
        className="popupModal"
        downloadBrochure
      >
        <div className="leftPopup">
          <div
            className="whiteP"
            style={{ width: "350px", height: "400px" }}
          ></div>
        </div>
        <div className="RightPopup">
          <h5>Apply For Counselling</h5>
          <Form
            dataScienceCounselling={dataScienceCounselling}
          />
        </div>
      </Popup>
      <div className={styles.content}>
        <h1>Upskill Yourself with Data Analytics Course Online</h1>
        <p>
          Boost your career with Learnbay’s Data Analytics Program to land on
          the field of endless opportunities. Enroll in an industry-paced 
          <b> online data analytics certification</b> in association with IBM &
          Microsoft. With existing domain knowledge, this course brings the
          massive privilege of having a job-ready future. From flexible learning
          platforms to 100% placement assistance, this course enhances your
          career to future-proof success. 
        </p>
        {read ? (
              <>
        <h4 style={{fontSize:"28px"}}>India’s Industry-led Best Online Data Analytics Course </h4>
        <h2 style={{fontSize:"24px"}}>
          <b>Briefing With the Best Online Data Analytics Course</b>
        </h2>
        <h3>Course Overview</h3>
        <p>
          Amidst tech shift, this <b>data analytics online training</b> brings a
          universal course module curated with the latest data analytics tools.
          This guide offers a consistent learning scope for data enthusiasts to
          update their knowledge in data analytics. With flexible learning
          sessions (Live online / hybrid) and real-time industry
          projects, working professionals can unleash the power of data.
        </p>
        <p>
          Apart from this, a course completion certificate & capstone project
          certificate from <b>Microsoft and IBM (dual certification)</b>, level
          up the chances of career growth.
        </p>
        <h3>About IBM & Microsoft Certifications</h3>
        <p>
          Learnbay offers a scope of earning dual certifications in the data
          analytics course program. The completion of the course program
          certifies the learners with dual certification (IBM & Microsoft). Dual
          certification here is like a getaway ticket to flourishing career
          growth scope in the trending industries. These certificates help the
          learners get better job offers & get interview calls from reputed
          MNCs. 
        </p>
        <h3>What is Data Analytics?</h3>
        <p>
          At present, each sector deals with huge yet vague data. Extracting raw
          data is simple but real hardship starts with deriving facts. Data
          analytics deals with the most related tools that help experts gather
          valuable facts from the raw datasets.
        </p>
        <p>
          Strategically formed data help business leaders reach better
          decisions. Data analytics tools guide data experts to improve their
          yield through better views of the trends & facts.
        </p>
        <p>
          From healthcare to the retail sector, all need data to function aptly.
          With the scope of data analytics tools, healthcare professionals can
          detect grave diseases & retailers can track consumer choices. 
        </p>
        <p>
          Hence, data analytics has become pervasive with vast use in both tech
          and non-tech sectors. If you intend to pursue a career in data
          analytics, you must choose to enroll in an 
          <b> online data analytics certification</b> program. 
        </p>
        <h3>Why is Data Analytics important for the expert & the business?</h3>
        <p>
          Data analytics is a broad term that covers data analysis methods. With
          specific use of data analytics tools & techniques, an expert can study
          complex data patterns to reach the facts. Since the digital era
          surrounds industries, the need for seamless actions increases quickly. 
        </p>
        <p>
          Some pros led by data analytics that make it vital for industries are
          - 
        </p>
        <ul>
          <li>Impactful decisions made by the business leaders</li>
          <li>
            Streamlining business actions as per industry trends with lesser
            errors
          </li>
          <li>Insightful trace of risks and timely address</li>
          <li>Boost business yields</li>
          <li>Tailored offers to the customers backed with facts</li>
        </ul>
        <p>
          Yet, if you become a skilled data analyst through 
          <b> data analytics online training</b>, you will learn about its
          real-time uses across firms. 
        </p>
        <h3>Why Choose Data Analytics Program?</h3>
        <p>
          Data analytics skills are trending like hot cake due to explosive
          growth in data usage. Due to this, a surge in demand for skilled data
          analysts is visible in each field. So, it's high time to make a wise
          career decision in data analytics that will help you to get into
          leading MNCs with alluring packages.
        </p>
        <p>
          Your dream to evolve as a data analyst can come true with a leading
          data analytics program. Learnbay offers the 
          <b> best online course for data analytics</b> that equips you with 
          <b> unique benefits like</b> -
        </p>
        <ul>
          <li><b>Flexible Learning Platform</b></li>
          <p>
            Learnbay’s data analytics program offers a flexible learning setup
            for working professionals. The flexibility of the course comes in
            two forms - 
          </p>
          <ul style={{listStyle:"lower-latin"}}>
            <li>
              <b>Flexible career move</b> – The data analytics course program
              targets both tech & non-tech enthusiasts. With basic knowledge of
              applied mathematics, one can start learning data analytics. Unlike
              in the past, data experts see diverse options for careers that go
              beyond coding skills. Hence, with basic domain knowledge &
              numerical skills, pursuing a career in data analytics is possible.
              Learnbay ensures that professional existing knowledge and years of
              experience do not get wasted.
            </li><br/>
            <li>
              <b>Flexible sessions</b> – This program offers an industry-paced
              training session for the working experts on weekdays and weekends.
              Hence, having a work-study balance is possible. Plus, the experts
              can opt for classroom study or online training mode as per their
              schedule. In the case of hybrid sessions, theoretical training is
              open online, and real-time projects take place in innovation labs. 
            </li><br/>
          </ul>
          <li>
            <b>Industry-led Training</b> <br />
            It is simple to gain theoretical knowledge of data analytics
            concepts, but the <b>best online data analytics course</b> program
            offers real-time learning. The custom-fit training scope with this
            program provides the scope for mastering trending analytics tools.
            Capstone projects allow you to learn the use of analytics tools to
            hone your talent. Learnbay brings industry-paced project innovation
            labs guided by experts to train the learners in real-time.
          </li><br/>
          <li>
          <b>100% Job Assistance</b> <br />
            Learnbay’s data analytics program brings a job-ready program for
            learners who gain a least score of 70% in their tasks. This
            job-ready program starts once you complete your capstone projects,
            case studies, & pass the assessments. <br /><br/>
            <b>What will you get from this program? </b>
            <br />
            <ul>
              <li>Resume building</li>
              <li>Project handling for portfolio design</li>
              <li>Professional grooming sessions to crack interviews </li>
              <li>1:1 mock interviews with experts from leading MNCs</li>
              <li>5-8 interview calls</li>
              <li>One year of placement help</li>
            </ul>
            <p>
              Learnbay allies with 300+ placement & hiring partners that conduct
              interviews in trending data roles. The aspirants with good results
              will be eligible for Learnbay’s prime mentoring & exclusive
              placement drive with industry leaders. 
            </p>
            <p>
              <b>
                And these program is available in offline mode at our experience
                centers in top metro cities also. 
              </b>
            </p>
          </li>
          <li>
            Globally Approved Certificate
            <br />
            <p>
              The <b>online data analytics certification</b> is famous for the
              worth a course completion certificate holds in real-time.
              Learnbay’s allies with IBM & Microsoft enhance the quality of the
              certificate. The certificate helps you get lucrative job offers
              with better salary hikes. It brings an excellent career growth
              scope for the aspirants who learn, grow, and succeed under tech
              giants like IBM & Microsoft. The best part here is, you get <b>industrial project experience certification</b> also along with the course completion certificate. Plus, you can opt for offline
              project sections under the in-person supervision of industry
              experts.
            </p>
          </li>
        </ul>
        <h3>Is Data Analytics Course Worth Pursuing? </h3>
        <p>
          The answer is yes. Amidst tech innovations in each sector, the need
          for a skilled data analyst continues to grow. The practice of
          extracting insights from raw data has become famous in the data field.
          The explosive use of data in the industry creates millions of
          analytics jobs each year.
        </p>
        <p>
          Projections reveal a growth of 23% in data analyst jobs by 2031. Yet, 
          <b> data analytics online training</b> can only lessen the skills gap
          in the industry.
        </p>
        <p>
          Irrespective of the domain skills, you can learn data analytics tools
          and use them in real-time. An industry-paced course has the benefit of
          bringing course modules with the latest trends on the board. With the
          data analytics course program, you get eligible for the job roles like
          business analyst, data engineer, domain-specific data analyst,
          quantitative analyst, and risk analyst. 
        </p>
        <p>
          Also, upskilling gets easier with a proven course program. The 
          <b> best online data analytics course</b> program offers training in
          Python programming, statistics, ML, SQL, PowerBI, Big data, time
          series, & advanced Excel. Thus, your duty of extracting insights from
          complex data gets easy. Yet, a career counseling session can clear
          your doubts clearer.
        </p>
        <h3>How does career counseling at Learnbay works?</h3>
        <p>
          Before opting for a data analytics course or any other course, an
          industry expert (career counselor) will approach you with the vital
          details. This session will guide you through industry trends in the
          field of data, your eligibility, and a wise career move that shall
          have a better scope for growth in the domain. A clear guide in this
          course program offers you room for wise investment in education. 
        </p>
        <h3>Is data analytics an IT job? </h3>
        <p>
          No, the data analytics job is open for both tech & non-tech experts.
          But it requires basic knowledge of IT tools and programming languages
          like Python & SQL.
        </p>
        <p><b>Then who must opt for a data analytics course?</b></p>
        <p>Anyone who has - </p>
        <ul>
          <li>A graduation degree with good academics</li>
          <li>At least one year of work experience in the IT/Non-IT field</li>
          <li>
            A career at early or mid-stage in any discipline wishful to switch
            to a data analytics career
          </li>
        </ul>
        <p>
          <b>Note:</b> If you wish to have the upper hand in programming for
          better analysis, then you must enroll for the 
          <b> best DSA course online</b> today.
        </p>
        <h3>Is Learnbay’s certification in data analytics worth it?</h3>
        <p>
          Once you are done with the data analytics course program successfully
          with a minimum of 70% marks, you get eligible for certification from
          IBM & Microsoft powered by Learnbay. Learnbay’s dual certification
          brings the scope of getting your resume highlighted amongst the crowd.
          The certification opens the chance for premium job roles in MNCs. And
          getting 70% marks in Learnbay is not an easy task unless you complete
          your course with a cent percent of dedication.
        </p>
        <p>Plus, you must opt for this due to the following reasons -</p>
        <ul>
          <li>Better access to start-ups and their project sites</li>
          <li>Work with industry-level projects</li>
          <li>Get a tag of globally recognized certified data analyst</li>
        </ul>
        <h3>How to earn certification in data analytics?</h3>
        <p>
          Learnbay’s <b>data analytics course online</b> goes through
          counseling, learning, project work, & assessment to gain
          certification. Learning is the key step here that supports your
          theoretical and practical knowledge. If you can learn the concepts
          well, then you can pass the assessments & handle real-time projects
          too.
        </p>
        <h3>
          What are the domain specializations available? Is it necessary for you
          to choose one?
        </h3>
        <p>
          The data analytics course online by Learnbay curates a domain-specific
          program that helps learners to have industry-specific careers. The
          aspirants can choose any one domain and start making their profiles as
          data analysts in the same. From learning to real-time project work,
          learners must stick to one domain. 
        </p>
        <p>Available domains are -</p>
        <ul>
          <li>Oil, Energy & Gas</li>
          <li>Healthcare</li>
          <li>BFSI</li>
          <li>Manufacturing</li>
          <li>Supply chain, E-Commerce & Retail</li>
        </ul>
        <p>
          Domain specialization is vital for working professionals willing to
          make a career in a more focused field. A student with MBA in HR or
          B.Com in Accounts can opt for the HR analyst or Financial analyst
          role. Choosing the right domain makes the learning journey easy and
          data-driven. 
        </p>
        <h3>
          Why is Learnbay tagged as the best online data analytics course
          provider?
          
        </h3>
        <p>
            The flexibility of learning is the first and foremost factor for
            joining Learnbay. Next, its collaboration with IBM & Microsoft
            offers you industry-level projects & global certification that opens
            up top-level job offers.
          </p>
          <button onClick={() => popupShow(true, false)} style={{margin:"auto"}} >Apply for Counselling</button>
          </>
            ) : (
              ""
            )}
          <p
              style={{
                color: "#2D9CD7",
                fontWeight: "600",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handler}
              className={styles.readP}
            >
              {read ? "Read Less..." : "Read More..."}
            </p>
      </div>
    </div>
  );
}

export default DataAnalytics;
