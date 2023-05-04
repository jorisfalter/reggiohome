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
                  Loris Malaguzzi’s ‘100 languages’{" "}
                </h1>
                <div className="row"></div>
              </div>
              {/* <!--end single header--> */}
              <figure className="image mb-30 m-auto text-center border-radius-10">
                <img
                  className="border-radius-10"
                  src={`/assets/imgs/news/2-100languages.jpg`}
                  alt="lighttable"
                  height="300px"
                />
              </figure>
              {/* <!--figure--> */}
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    <i>
                      As parents, we all want our children to reach their full
                      potential, to grow up to be confident, creative, and
                      successful individuals. But what if we told you that your
                      child has not just one language, but 100? That's the
                      concept behind Loris Malaguzzi's "100 languages."
                    </i>
                  </p>
                  <p className="question excerpt">Child-Centered Learning</p>
                  <p>
                    According to Malaguzzi, children have countless ways of
                    expressing themselves beyond just spoken or written
                    language. From art and music to movement and storytelling,
                    children have a variety of languages through which they can
                    communicate their thoughts, feelings, and ideas. By
                    embracing this concept, we can help our children develop a
                    wide range of skills and abilities, and encourage them to
                    explore their interests and passions.
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
                    So, why is this important? For one, it helps children
                    develop a sense of confidence and self-esteem. When we
                    recognize and celebrate their unique talents and abilities,
                    we help them feel valued and appreciated. This, in turn, can
                    lead to a lifelong love of learning and exploration, as
                    children continue to seek out new ways to express themselves
                    and develop their skills.
                  </p>

                  <blockquote>
                    <p>
                      Children have countless ways of expressing themselves
                      beyond just spoken or written language
                    </p>
                  </blockquote>

                  <p>
                    Moreover, by encouraging children to explore different forms
                    of expression, we help them develop a diverse set of skills
                    that can be valuable in many different areas of life. For
                    example, a child who loves to draw may also develop an
                    interest in painting, sculpture, or graphic design. By
                    nurturing these interests, we help them develop a variety of
                    skills that can be applied in many different contexts.
                  </p>

                  <p>
                    Perhaps most importantly, by recognizing and nurturing
                    children's talents and interests, we help them develop a
                    sense of purpose and meaning in their lives. When children
                    are able to pursue their passions and develop their skills,
                    they are more likely to feel fulfilled and satisfied with
                    their lives. This can have a positive impact on their
                    overall well-being and mental health, and can set them on a
                    path towards a happy and fulfilling future.
                  </p>

                  <p>
                    So, as parents, how can we help our children explore their
                    100 languages? It starts with giving them the freedom to
                    express themselves in different ways, and encouraging them
                    to pursue their interests and passions. This may involve
                    providing them with access to art supplies, musical
                    instruments, or other materials that allow them to explore
                    their creativity. It may also involve exposing them to
                    different cultural experiences, such as music, dance, and
                    storytelling from different parts of the world.
                  </p>

                  <p>
                    Ultimately, the goal is to help our children develop a sense
                    of curiosity and wonder about the world around them, and to
                    encourage them to explore their many different languages of
                    self-expression. By doing so, we can help them develop the
                    skills, confidence, and sense of purpose they need to
                    succeed in life.
                  </p>

                  <p>
                    Want to find out more about how you can incorporate the 100
                    languages at home? Sign up for our newsletter and be the
                    first to know about our new projects.
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
                </div> */}

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
