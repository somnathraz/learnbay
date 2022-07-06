import React from "react";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/posts";
import Head from "next/head";
import styles from "../../styles/blog.module.css";
import {
  BsDot,
  BsInstagram,
  BsGlobe2,
  BsLinkedin,
  BsFacebook,
} from "react-icons/bs";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import Footer from "../../components/Footer/Footer";

export default function Post({ postData, posts }) {
  return (
    <>
      <div className={styles.Open}>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <main>
          <div className={styles.headerInfo}>
            <h1>{postData.mainH1}</h1>
            <span>
              By <strong>{postData.author}</strong> <BsDot className="bIcon" />
              Published in <strong>{postData.tag}</strong>{" "}
              <BsDot className="bIcon" />
              <strong className={styles.time}>{postData.time}</strong>
            </span>
          </div>
          <div className={styles.bodyInfo}>
            <div className={styles.leftInfo}>
              <Image
                src="/Blog/Data-Science-Course-In-India.webp"
                width="740"
                height="490"
                layout="responsive"
                className={styles.HeadImg}
              />
              <article dangerouslySetInnerHTML={{ __html: postData.body }} />
              <hr />
              <div className={styles.tag}>
                <div className={styles.lSide}>
                  <p>Tags</p> <span>#{postData.tag} </span>
                </div>
                <div className={styles.rSide}>
                  <p>
                    share <BsFacebook className={styles.tIcon} />
                    <BsInstagram className={styles.tIcon} />
                    <FaLinkedinIn className={styles.tIcon} />
                  </p>
                </div>
              </div>

              <hr />
            </div>
            <div className={styles.rightInfo}>
              <div className={styles.ProfileInfo}>
                <Image
                  src="/Blog/avatar-01.webp"
                  width="340"
                  height="193"
                  layout="intrinsic"
                />

                <h5>{postData.author}</h5>
                <p>{postData.position}</p>
                <div className={styles.icon}>
                  <div className={styles.circleDiv}>
                    <BsInstagram className={styles.SIcon} />
                  </div>
                  <div className={styles.circleDiv}>
                    <BsGlobe2 className={styles.SIcon} />
                  </div>
                  <div className={styles.circleDiv}>
                    <BsLinkedin className={styles.SIcon} />
                  </div>
                </div>
              </div>
              <div className={styles.table}>
                <h5>Table of content</h5>
                <div className={styles.contentT}>
                  {postData.table.map((table, i) => {
                    const uMake = table.replaceAll(" ", "-");
                    const lurl = uMake.toLowerCase();

                    const url = `#${lurl}`;
                    return (
                      <div key={i}>
                        <div className={styles.numberBack}>
                          <span className={styles.number}>{i}</span>
                        </div>
                        <span>
                          <a href={url}>
                            <p>{table}</p>
                          </a>
                        </span>
                      </div>
                    );
                  })}
                </div>
                <h5>Related Posts</h5>
                {posts.map((post, i) => {
                  return (
                    <div className={styles.rPost} key={i}>
                      <a href={post.id}>
                        {" "}
                        <h5>{post.title}</h5>
                      </a>
                      <span>
                        {post.author}
                        <p className={styles.rPostD}>
                          <IoTimeOutline className={styles.timeIcon} />
                          {post.date}
                        </p>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className={styles.MainS}>
        <div>
        <img src="/demo.png"></img>
        </div>
        <div className={styles.headerInfo}>
            <h1>{postData.mainH1}</h1>
            <span>
              By <strong>{postData.author}</strong> <BsDot className="bIcon" />
              Published in <strong>{postData.tag}</strong>{" "}
              <BsDot className="bIcon" />
              <strong className={styles.time}>{postData.time}</strong>
            </span>
          </div>
      </section>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
      posts,
    },
  };
}
