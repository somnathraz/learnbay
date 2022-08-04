import Head from "next/head";
import Review from "../components/Review/Review";
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Learnbay's Reviews</title>
        <meta name="description" content="Learnbay's Reviews" />
        <link rel="icon" href="/Learnbay-Favicon-L.png" />
      </Head>
      <main>
        <Review />
        <div className={styles.Button} style={{marginBottom:"70px"}}>
            <a href="https://www.google.com/search?q=learnbay&rlz=1C1VDKB_enIN998IN998&oq=learnbay&aqs=chrome..69i57j0i512j69i60l3j69i65l2j69i60.4177j0j4&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2,lf:1&tbm=lcl&rflfq=1&num=10&rldimm=929460808219846945&lqi=CghsZWFybmJheUiy4PDezq2AgAhaDhAAGAAiCGxlYXJuYmF5kgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl&ved=2ahUKEwiHl_LgqL74AhWkSmwGHS7oCRQQvS56BAhPEAE&sa=X&rlst=f#lrd=0x3bae15781e02d009:0xce61bae3a976921,1,,,&rlfi=hd:;si:929460808219846945,l,CghsZWFybmJheUiy4PDezq2AgAhaDhAAGAAiCGxlYXJuYmF5kgEbc29mdHdhcmVfdHJhaW5pbmdfaW5zdGl0dXRl;mv:[[12.9401592,77.6972323],[12.910202499999999,77.6379955]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!2m4!1e17!4m2!17m1!1e2,lf:1" target="_blank"><button style={{margin:"auto"}}>View All Reviews</button></a>
            </div>
      </main>
    </div>
  );
}