import React from "react";
import styles from "./CityText.module.css";

const CityText = ({ CityText, CityTextB, CityTextLB, CityTextL, cityText }) => {
  return (
    <section className={styles.CityText}>
      {cityText ? (
        <>
          <p className={styles.CityTextP}>
            <b>Data Science Course Certification Training locations in Bangalore </b>
             :  Ammrutha halli [560092], Maruthi Seva Nagar [560033], Kuvempu Layout [560077], Bellandur [560103], Jayanagar III Block [560011], Anandnagar [560024], Nandinilayout [560096], B SK II Stage [560070], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank"> Indiranagar [560038]</a>, Yelahanka [560063], Chickpet [560053], Domlur [560071], Bansashankari III Stage [560085], Vimanapura [560017], Nagarbhavi [560072], Basaveshwaranagar [560079], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Bommanahalli [560068]</a>, Mico Layout [560076], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Electronic City [560100]</a>, Taverekere [560029], Nehru Nagar [560020], Agram[560007], Halsuru Pete [560002], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Basavanagudi [560004]</a>, R.M.V. Extension II [560094], Jayanagar [560041], Carmelaram [560035], New Thippasandra [560075], Kanakanagar [560032], Nayandahalli [560039], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Fraser Town [560005]</a>, Jalahalli East [560014], Kacharakanahalli [560084], Malleswaram West [560055], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Bannerghatta [560083]</a>, Srirampuram [560021], Rajarajeshwarinagar [560098], Sivan Chetty Gardens [560042], Dommasandra [562125], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Whitefield [560066]</a>, Vidyaranyapura [560097], Bolare [560082], Mathikere [560054], Doddanekkundi [560037], Hampinnagar [560104], C.V.Raman Nagar [560093], Chikkabanavara [560090], Attur [560064], Kumbalagodu [560074], Bhattarahalli [560049], Chikkalasandra [560061], Sharada Nagar [560065], Jalahalli West [560015], H.K.P Road [560051], Jp Nagar III Phase [560078], Sadashiva nagar [560080], Krishnarajapuram R S [560016], Mahalakshipuram Layout [560086], Guddadahalli [560026], Chudenapura [560060], Vidhana Soudha [560001], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Shanthinagar [560027]</a>, Rajaji Nagar [560010], Chandapura [560099], Ramakrishna Hegde Nagar [560045], Shalabh Bhatnagar [560012], Peenya [560058], Ashoknagar [560050], Jalahalli Nacen [560013], Banawadi [560043], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Malleswaram [560003]</a>, Doddakallasandra [560062], K.G Road [560009], Muthusandra [560087], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Marathahalli [560056]</a>, JC Nagar [560006], Chamrajpet [560018], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">HSR Layout [560102]</a>, Devanagundi [560067], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Yeswanthpura [560022]</a>, Mahadevapura [560048],Hulsur Bazaar [560008],Magadi Road [560023], Adugodi [560030], Bagalgunte [560073], Devasandra [560036], Rv Niketan [560059], Narasimharaja Colony [560019], <a href="https://www.learnbay.co/data-science-course-training-in-bangalore" style={{ color: "#2D9CD7", fontWeight: "600" }}
                target="_blank">Koramangala VI Bk [560095]</a>, Agara [560034], Vijayanagar East [560040], Benson Town [560046], Viveknagar S.O [560047], Dasarahalli [560057], Bapagrama [560091], Richmond Town [560025].
          </p>
          <p className={styles.CityTextP}>
            <b>Locations Offered</b>
            : Data Science Training in Bangalore, Data Science Course in Bangalore, Data Science Training in BTM, Data Science Training in Marathahalli, Data Science Institute in Bangalore, Data Science Training in Whitefield, Data Science Training in Kundalahalli, Data Science Training in ITPL, Data Science Training Institute in Marathahalli, Data Science Course in BTM, Data Science Course in Marathahalli, Data Science Course in Whitefield, Data Science Course Bommanahalli, Data Science Training in Bommanahalli, Data Science Training in Electronic city, Data Science Training in Koramangala, Data Science Classes in BTM, Data Science Classes in Bommanahalli, Data Science Classes in Whitefield, Data Science Classes in Marathahalli, Data Science Course in Koramangala, Data Science Training in Jayanagar, Data Science Certification in Bangalore, Data Science Certification Training in Bangalore, Data Science Certification in BTM, Data Science Certification in Whitefield, Best Data Science Training, Best Data Science Course
          </p>
        </>
      ) : (
        <>
          <p className={styles.CityTextP}>
            <b>{CityTextB}</b>
            {CityText}
          </p>
          <p className={styles.CityTextP}>
            <b>{CityTextLB}</b>
            {CityTextL}
          </p>
        </>
      )}
    </section>
  );
};

export default CityText;
