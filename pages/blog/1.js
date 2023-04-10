import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import comments from "../../data/comments.json";

const SingleVendor = () => {
  // let Router = useRouter();

  // const [singleData, setSingleData] = useState(null);

  // const { id } = Router.query;

  // useEffect(() => {
  //   setSingleData(data.find((data) => data.id == id));
  // }, [id]);

  return (
    <>
      {/* {singleData && (
                <>

                    <img src={`/images/blog/${singleData.img}`} className="w-100 rounded" alt="" />
                    <h3>{singleData.title}</h3>
                </>
            )} */}

      <Layout>
        {/* {singleData && ( */}
        <>
          <main className="bg-grey pb-30">
            <div className="container single-content">
              <div className="entry-header entry-header-style-1 mb-50 pt-50">
                <h1 className="entry-title mb-50 font-weight-900">
                  {/* {singleData.title} */}
                  What is Reggio Emilia?{" "}
                </h1>
                <div className="row"></div>
              </div>
              {/* <!--end single header--> */}
              <figure className="image mb-30 m-auto text-center border-radius-10">
                <img
                  className="border-radius-10"
                  src={`/assets/imgs/news/1-lighttable.jpg`}
                  alt="lighttable"
                  height="300px"
                />
              </figure>
              {/* <!--figure--> */}
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    <i>
                      Have you ever heard of Reggio Emilia inspired education?
                      It's a fascinating approach to early childhood education
                      that originated in the city of Reggio Emilia in Italy. The
                      Reggio Emilia approach is based on the belief that
                      children are capable, curious, and creative individuals
                      who should be at the center of their own learning
                      experiences. In this blog post, we'll explore what Reggio
                      Emilia inspired education is all about, and why it's such
                      an exciting and effective way to teach young children.
                    </i>
                  </p>
                  <p className="question excerpt">Child-Centered Learning</p>
                  <p>
                    The Reggio Emilia approach prioritizes the child as the
                    center of the learning process. Children are viewed as
                    competent and capable individuals with their own unique
                    interests and ideas. In Reggio Emilia inspired education,
                    the curriculum is not predetermined, but rather emerges from
                    the interests and experiences of the children. Teachers
                    observe and document children's ideas, questions, and
                    interests, and use this information to plan learning
                    experiences that are meaningful and relevant to the
                    children.
                  </p>

                  {/* <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/2-marathon.jpg`}
                      alt="marathon"
                      height="300px"
                    />
                  </figure> */}
                  <p className="question excerpt">Collaborative Learning</p>
                  <p>
                    Collaboration is a key component of Reggio Emilia inspired
                    education. Children work in small groups to explore ideas
                    and solve problems together, and adults work collaboratively
                    with children and other adults to support the learning
                    process. Teachers are viewed as co-learners, working
                    alongside children to explore and discover new ideas and
                    concepts.
                  </p>

                  <blockquote>
                    <p>
                      Children are capable, curious, and creative individuals
                      who should be at the center of their own learning
                      experiences
                    </p>
                  </blockquote>
                  <p className="question excerpt">
                    Environment as the <i>Third Teacher</i>
                  </p>
                  <p>
                    The physical environment is also considered an important
                    component of the learning process. Learning spaces are
                    designed to be beautiful, inviting, and engaging, with
                    natural materials and open-ended materials that encourage
                    exploration and creativity. The environment is often
                    referred to as the third teacher, alongside children and
                    adults. When children are surrounded by a stimulating and
                    supportive environment, they are more likely to be engaged
                    and excited about learning.
                  </p>

                  <p className="question excerpt">Documentation</p>
                  <p>
                    Documentation is another important aspect of Reggio Emilia
                    inspired education. Teachers carefully observe and record
                    children's learning experiences, and use this documentation
                    to reflect on and plan for future learning opportunities. By
                    documenting the children's learning experiences, teachers
                    can gain valuable insights into their interests and needs,
                    and can use this information to tailor the curriculum to
                    meet their unique needs.
                  </p>

                  <p className="question excerpt">Respect for Diversity</p>

                  <p>
                    Finally, Reggio Emilia inspired education values diversity
                    and encourages children to explore and appreciate
                    differences in culture, language, and background. By
                    exposing children to a variety of cultures and experiences,
                    they develop a deep respect for diversity and become more
                    open-minded and tolerant individuals.
                  </p>

                  <p>
                    <i>
                      Reggio Emilia inspired education is an exciting and
                      innovative approach to early childhood education. By
                      prioritizing the child as the center of the learning
                      process, fostering collaboration, creating a stimulating
                      and supportive environment, documenting children's
                      learning experiences, and valuing diversity, children
                      develop a love of learning that will stay with them for
                      the rest of their lives. If you're a parent or educator
                      looking for a new and effective way to teach young
                      children, you might want to consider the Reggio Emilia
                      approach!
                    </i>
                  </p>
                  <p>
                    <i>
                      Interested to know how to set up Reggio Emilia inspired
                      learning at your home? Sign up for our newsletter and be
                      the first to learn about our new projects.
                    </i>
                  </p>

                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                {/* <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                  <div className="tags">
                    <span>Tags: </span>

                    <Link href="/category">Something</Link>
                  </div>
                </div>  

                {/* ////////////////////////// */}
                {/* useful! - Social media shares*/}
                {/* remove pinterest, add whatsapp, or other  */}
                {/* <div className="single-social-share clearfix wow fadeIn animated">
                  <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                    <li className="list-inline-item text-muted">
                      <span>Share this:</span>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a
                          className="social-icon fb text-xs-center"
                          target="_blank"
                        >
                          <i className="elegant-icon social_facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a
                          className="social-icon tw text-xs-center"
                          target="_blank"
                        >
                          <i className="elegant-icon social_twitter "></i>
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="/#">
                        <a
                          className="social-icon pt text-xs-center"
                          target="_blank"
                        >
                          <i className="elegant-icon social_pinterest "></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div> */}

                {/* //////////////////////// */}
                {/* usefull - related posts! */}
                {/* <!--related posts--> */}
                {/* <div className="related-posts">
                  <div className="post-module-3">
                    <div className="widget-header-2 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Related posts</h5>
                    </div>
                    <div className="loop-list loop-list-style-1">
                      {data.slice(1, 3).map((item, i) => (
                        <article className="hover-up-2 transition-normal wow fadeInUp animated">
                          <div className="row mb-40 list-style-2">
                            <div className="col-md-4">
                              <div className="post-thumb position-relative border-radius-5">
                                <div
                                  className="img-hover-slide border-radius-5 position-relative"
                                  style={{
                                    backgroundImage: `url(/assets/imgs/news/${item.img})`,
                                  }}
                                >
                                  <Link href={`/blog/${item.id}`}>
                                    <a className="img-link"></a>
                                  </Link>
                                </div>
                                <ul className="social-share">
                                  <li>
                                    <Link href="/#">
                                      <a>
                                        <i className="elegant-icon social_share"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#">
                                      <a
                                        className="fb"
                                        title="Share on Facebook"
                                        target="_blank"
                                      >
                                        <i className="elegant-icon social_facebook"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#">
                                      <a
                                        className="tw"
                                        target="_blank"
                                        title="Tweet now"
                                      >
                                        <i className="elegant-icon social_twitter"></i>
                                      </a>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/#">
                                      <a
                                        className="pt"
                                        target="_blank"
                                        title="Pin it"
                                      >
                                        <i className="elegant-icon social_pinterest"></i>
                                      </a>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-8 align-self-center">
                              <div className="post-content">
                                <div className="entry-meta meta-0 font-small mb-10">
                                  <Link href={`/blog/${item.id}`}>
                                    <a>
                                      <span className="post-cat text-primary">
                                        {item.category}
                                      </span>
                                    </a>
                                  </Link>
                                </div>
                                <h5 className="post-title font-weight-900 mb-20">
                                  <Link href={`/blog/${item.id}`}>
                                    <a>{item.title}</a>
                                  </Link>
                                  <span className="post-format-icon">
                                    <i className="elegant-icon icon_star_alt"></i>
                                  </span>
                                </h5>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">{item.date}</span>
                                  <span className="time-reading has-dot">
                                    {item.readTime} mins read
                                  </span>
                                  <span className="post-by has-dot">
                                    {item.views} views
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div> */}
                {/* <!--More posts--> */}
                {/* ///// dit is niet zichtbaar */}
                <div className="single-more-articles border-radius-5">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">You might be interested in</h5>
                    <button className="single-more-articles-close">
                      <i className="elegant-icon icon_close"></i>
                    </button>
                  </div>
                  <div className="post-block-list post-module-1 post-module-5">
                    <ul className="list-post">
                      <li className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <Link href="/single">
                              <a className="color-white">
                                <img
                                  src="/assets/imgs/news/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <Link href="/single">
                                <a>Another article 1</a>
                              </Link>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              {/* <span className="post-on">27 Jan</span> */}
                              {/* <span className="post-by has-dot">13k views</span> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mb-10">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <Link href="/single">
                              <a className="color-white">
                                <img
                                  src="/assets/imgs/news/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <Link href="/single">
                                <a>Another article 2</a>
                              </Link>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              {/* <span className="post-on">27 August</span>
                              <span className="post-by has-dot">14k views</span> */}
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!--Comments--> */}
                {/* <div className="comments-area">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Comments</h5>
                  </div>
                  {comments.map((item, i) => (
                    <div className="comment-list wow fadeIn animated">
                      <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                          <div className="thumb">
                            <img
                              src={`/assets/imgs/authors/${item.img}`}
                              alt=""
                            />
                          </div>
                          <div className="desc">
                            <p className="comment">{item.desc}</p>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <h5>
                                  <Link href="/#">
                                    <a>{item.name}</a>
                                  </Link>
                                </h5>
                                <p className="date">
                                  {item.date} {new Date().getFullYear()} at{" "}
                                  {item.time}
                                </p>
                              </div>
                              <div className="reply-btn">
                                <Link href="/#">
                                  <a className="btn-reply">Reply</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {item.reply &&
                        item.reply.map((cmntr, i) => (
                          <>
                            <div className="single-comment depth-2 justify-content-between d-flex mt-50">
                              <div className="user justify-content-between d-flex">
                                <div className="thumb">
                                  <img
                                    src={`/assets/imgs/authors/${cmntr.img}`}
                                    alt=""
                                  />
                                </div>
                                <div className="desc">
                                  <p className="comment">{cmntr.desc}</p>
                                  <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                      <h5>
                                        <Link href="/#">
                                          <a>{cmntr.name}</a>
                                        </Link>
                                      </h5>
                                      <p className="date">
                                        {cmntr.date} {new Date().getFullYear()}{" "}
                                        at {cmntr.time}
                                      </p>
                                    </div>
                                    <div className="reply-btn">
                                      <Link href="/#">
                                        <a className="btn-reply">Reply</a>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ))}
                    </div>
                  ))}
                </div> */}
                {/* <!--comment form--> */}
                {/* <div className="comment-form wow fadeIn animated">
                  <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Leave a Reply</h5>
                  </div>
                  <form
                    className="form-contact comment_form"
                    action="#"
                    id="commentForm"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control w-100"
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="9"
                            placeholder="Write Comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            name="website"
                            id="website"
                            type="text"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn button button-contactForm"
                      >
                        Post Comment
                      </button>
                    </div>
                  </form>
                </div> */}
              </article>
            </div>
            {/* <!--container--> */}
          </main>
        </>
        {/* )} */}
      </Layout>
    </>
  );
};

export default SingleVendor;
