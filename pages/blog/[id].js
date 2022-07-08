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
  BsFacebook,
} from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";

export default function Post({ postData, posts }) {
  return (
    <>
    <section className={styles.MainS}>
    <Head>
          <title>{postData.title}</title>
        </Head>
        <div className={styles.DivImg}>
        <img src={postData.Img} width="100%" ></img>
        </div>
    </section>

        <main>
        <div className={styles.Open}>
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
          <div className={styles.rightInfo}>
              <div className={styles.table}>
                <h5>Table of content</h5>
                <div className={styles.contentT}>
                  {postData.table.map((table, i) => {
                    const removeSpecial = table.replace(
                      /[&\/\\#,’!+()$~%.'":*?<>{}]/g,
                      ""
                    );

                    const uMake = removeSpecial
                      .toLowerCase()
                      .replace(" ", "-");

                    const url = `#${uMake}`;
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
                <div className={styles.relatePost}>
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
            <div className={styles.leftInfo}>
              <article dangerouslySetInnerHTML={{ __html: postData.body }} />
              <hr />
              <div className={styles.tag}>
                <div className={styles.lSide}>
                  <p>Tags</p> {postData.tag.map((tag,i)=>{ return <span key={i}>#{tag}</span> })}
                </div>
                {/* <div className={styles.rSide}>
                  <p>
                    share <BsFacebook className={styles.tIcon} />
                    <BsInstagram className={styles.tIcon} />
                    <FaLinkedinIn className={styles.tIcon} />
                  </p>
                </div> */}
              </div>

              <hr />
            </div>
          </div>
        </div>
        </main>
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
