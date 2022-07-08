import React from "react";
import { getSortedPostsData } from "../lib/posts";
import styles from "../styles/blogM.module.css";
import Head from "next/head";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import Footer from "../components/Footer/Footer";

export default function blog({ allPostsData }) {
  let singleCategoryPost = allPostsData.map((post) => {
    return post.category;
  });
  let categoryPostTag = Array.from(new Set(singleCategoryPost));
  return (
    <>
      <Head>
        <title>blog</title>
      </Head>
      <section className={styles.blogHead}>
        <p>Latest Blogs</p>
      </section>
      <section className={styles.blogWrap}>
        {allPostsData
          .slice(0, 3)
          .map(({ id, date, title, author, readTime, headerImg }) => {
            const url = `/blog/${id}`;
            return (
              <div
                className={styles.blog}
                key={id}
                style={{
                  background: `linear-gradient(0deg, rgba(0,0,0,0.8) 34%, rgba(255,255,255,0) 83%), url(${headerImg}) no-repeat center center `,
                  backgroundSize: "cover",
                }}
              >
                <a href={url}>
                  <h4>{title}</h4>
                </a>
                <div className={styles.profileWrap}>
                  <Image
                    src="/Blog/avatar-02.webp"
                    width="80"
                    height="45"
                    layout="intrinsic"
                    alt="blog_writer"
                    className={styles.blogIMg}
                  />
                  <span>
                    <h5>{author}</h5>
                    <p>
                      {date} <BsDot className={styles.dot} />
                      <IoTimeOutline className={styles.time} />
                      {readTime}
                    </p>
                  </span>
                </div>
              </div>
            );
          })}
      </section>
      <section className={styles.allBlog}>
        {allPostsData
          .map(({ id, date, title, author, readTime, tag, headerImg, category }) => {
            let url = `/blog/${id}`;
            let tUrl = `/blog/category/${category
              .toLowerCase()
              .replace(/\s+/g, "-")}`;
            return (
              <div className={styles.blogBox} key={id}>
                <div className={styles.lBlogBox}>
                  <Image
                    src="/blog.png"
                    width="200"
                    height="340"
                    layout="intrinsic"
                  />
                </div>
                <div className={styles.rBlogBox}>
                  <a href={tUrl} target="_blank" className={styles.link}>
                    <span>{tag}</span>
                  </a>
                  <a href={url}>
                    <h4>{title}</h4>
                  </a>
                  <p style={{ fontWeight: "bold" }} className={styles.author}>
                    {author}
                  </p>
                  <p className={styles.iBox}>
                    {date}
                    <BsDot className={styles.dot} />
                    <IoTimeOutline className={styles.time} />
                    {readTime}
                  </p>
                </div>
              </div>
            );
          })}
      </section>
      <section className={styles.quote}>
        <h3>
          <span>Get Inspired to Achieve </span>Enhanced Outcomes.
        </h3>
        <p>
          <span>
            “While one person hesitates because he feels inferior, the other is
            busy making mistakes and becoming superior.”
          </span>
          <span className={styles.aName}>Henry C. Link</span>
        </p>
      </section>
      {[...categoryPostTag].map((post, i) => {
        let tag = post;
        const categoryPosts = allPostsData.filter((post) => post.category === tag);
        let makeUrl = post.toLowerCase().replace(/\s+/g, "-");
        let url = `/blog/category/${makeUrl}`;
        return (
          <section className={styles.categoryPosts} key={i}>
            <span>
              <p className={styles.tagNameH}>
                {post}{" "}
                <a href={url}>
                  <button>view more</button>
                </a>
              </p>{" "}
            </span>
            <div className={styles.categoryWrapper}>
              <div>
                {categoryPosts
                  .slice(0, 2)
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/blog/${id}`;
                      let tUrl = `/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;
                      return (
                        <div className={styles.categoryPost} key={id}>
                          <div className={styles.leftCategoryPost}>
                            <Image
                              src="/blog.png"
                              width="300"
                              height="267"
                              alt={categoryPosts.id}
                              layout="intrinsic"
                              className={styles.categoryPostImg}
                            />
                          </div>
                          <div className={styles.rightCategoryPost} key={id}>
                            <a
                              href={tUrl}
                              target="_blank"
                              className={styles.link}
                            >
                              <span className={styles.tagSpan}>{tag}</span>
                            </a>
                            <a href={url} target="_blank">
                              <h4>{title}</h4>
                            </a>
                            <p>{desc}</p>
                            <div className={styles.profileWrap}>
                              <Image
                                src="/Blog/avatar-02.webp"
                                width="80"
                                height="45"
                                layout="intrinsic"
                                alt="blog_writer"
                                className={styles.blogIMg}
                              />
                              <span>
                                <h5>{author}</h5>
                                <p>
                                  {date} <BsDot className={styles.dot} />
                                  <IoTimeOutline className={styles.time} />
                                  {readTime}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
              <div className={styles.categoryPostRightSide}>
                {categoryPosts
                  .map(
                    ({
                      id,
                      date,
                      title,
                      author,
                      readTime,
                      headerImg,
                      tag,
                      category,
                      desc,
                    }) => {
                      let url = `/blog/${id}`;
                      let tUrl = `/blog/category/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`;
                      return (
                        <div className={styles.categoryPost} key={id}>
                          <div className={styles.leftCategoryPost}>
                            <Image
                              src="/blog.png"
                              width="300"
                              height="267"
                              alt={categoryPosts.id}
                              layout="intrinsic"
                              className={styles.categoryPostImg}
                            />
                          </div>
                          <div className={styles.rightCategoryPost} key={id}>
                            <a
                              href={tUrl}
                              target="_blank"
                              className={styles.link}
                            >
                              <span className={styles.tagSpan}>{tag}</span>
                            </a>
                            <a href={url} target="_blank">
                              <h4>{title}</h4>
                            </a>
                            <p>{desc}</p>
                            <div className={styles.profileWrap}>
                              <Image
                                src="/Blog/avatar-02.webp"
                                width="80"
                                height="45"
                                layout="intrinsic"
                                alt="blog_writer"
                                className={styles.blogIMg}
                              />
                              <span>
                                <h5>{author}</h5>
                                <p>
                                  {date} <BsDot className={styles.dot} />
                                  <IoTimeOutline className={styles.time} />
                                  {readTime}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </section>
        );
      })}
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
