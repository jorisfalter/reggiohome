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
                  Running marathons and building travel apps!
                </h1>
                <div className="row"></div>
              </div>
              {/* <!--end single header--> */}
              <figure className="image mb-30 m-auto text-center border-radius-10">
                <img
                  className="border-radius-10"
                  src={`/assets/imgs/news/1-icebath.jpg`}
                  alt="icebath"
                  height="300px"
                />
              </figure>
              {/* <!--figure--> */}
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p className="question excerpt">
                    Hello! Who are you and what are you working on?
                  </p>

                  <p>
                    Hi, I’m Joris and I’m currently freelancing while building
                    travel apps and a health focused website.
                  </p>
                  <p>
                    I’m mostly building for fun, most of my apps are not
                    monetizable. I might build a more commercial app in the
                    future.
                  </p>

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/2-marathon.jpg`}
                      alt="marathon"
                      height="300px"
                    />
                  </figure>
                  <p className="question excerpt">
                    Take us through your workout routine?
                  </p>
                  <p>
                    I work out every weekday, 20 minutes in the morning. First
                    thing after waking up. It’s either swimming, running or
                    yoga.
                  </p>
                  <p>
                    I live in Thailand, it’s amazing to swim. The outside pool
                    is warm enough 10 months of the year.
                  </p>
                  <p>
                    Running on the contrary gets very hot. On Fridays I do long
                    runs of 15 to 25 kms, in preparation for marathons, and for
                    these I leave at 5am to make sure I’m back inside by 7.30am
                    before the sun gets too hot.
                  </p>
                  <p>
                    For yoga I’m using free Youtube sessions of 20 minutes.
                    There are so many these days, though I would like to take a
                    real offline course one day to actually improve.
                  </p>
                  <blockquote>
                    <p>
                      I work out every weekday, 20 minutes in the morning. First
                      thing after waking up
                    </p>
                  </blockquote>
                  <p className="question excerpt">
                    What does your diet look like?
                  </p>
                  <p>
                    I combine Paleo with Keto principles. Mostly veggies, fruits
                    and meats. Keto strictly speaking doesn’t allow you to eat
                    fruits, but this is what we humans been eating for millions
                    of years.
                  </p>
                  <p>
                    Recently I try to focus more on proteins: chicken,
                    egg-whites, …
                  </p>
                  <p>I avoid refined sugars, bread, cheese, …</p>
                  <p>I do drink milk.</p>
                  <p>
                    I am doing intermittent fasting to reduce my weight. I was
                    eating from 4pm to 8pm every day, but because I’m not losing
                    weight I’m tightening the window from 5pm to 7pm.
                  </p>
                  <p>
                    It conflicts with social events on weekends so I don't do it
                    on weekends.
                  </p>
                  <p>I don’t drink alcohol or coffee.</p>

                  <p className="question excerpt">
                    Do you do any other health related actions (meditation,
                    going on retreats, …)?
                  </p>
                  <p>
                    I try to meditate 15 minutes every morning. I use Tony
                    Robbins’ priming exercise, which is probably more a
                    visualisation, rather than a meditation.
                  </p>
                  <p>
                    I did a Wim Hofman icebath workshop a year ago, and ever
                    since I’ve been looking for other activities which bring me
                    out of my comfort zone. Maybe a Tony Robbins event...
                  </p>
                  <p className="question excerpt">
                    How do you combine it with a family life?
                  </p>

                  <p>
                    The two biggest challenges are being able to do the workouts
                    in the morning when the 9 month old has had issues during
                    the night.
                  </p>
                  <p>
                    And having the mental awareness about what I’m eating. A
                    baby puts you on a train which continuously rushes through
                    and it’s more difficult to find a moment to step out and
                    take a look at what I am doing, eating, thinking, …
                  </p>
                  {/* <!--Begin Subcrible--> */}
                  <div className="border-radius-10 border bg-white mb-30 p-30 wow fadeIn animated">
                    <div className="row justify-content-between">
                      <div className="col-md-5 mb-2 mb-md-0">
                        <h5 className="font-weight-bold secondfont mb-30 mt-0">
                          Become a member
                        </h5>
                        <p className="font-small">
                          Sign up to get the newest articles in your inbox.
                        </p>
                      </div>
                      <div className="col-md-7">
                        <div className="row">
                          <div className="col-md-12">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter your e-mail address"
                            />
                          </div>
                          <div className="col-md-12 mt-2">
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--End Subcrible--> */}
                  <p className="question excerpt">
                    Any specific challenges you’re training for, or any changes
                    or improvements in your lifestyle planned?
                  </p>

                  <p>
                    I recently did a marathon which I really enjoyed. I’m
                    intending to do another one in the second half of 2023.
                  </p>
                  <p>
                    I want to be able to do a Front Hand Spring, and chain them
                    together. I've been practicing for a while now.{" "}
                  </p>
                  <p> I’m currently losing weight, back to 67kgs.</p>
                  <p>And I want to do a cryotherapy session this year.</p>
                  <p>
                    On the longer term, I would like to climb the Matterhorn,
                    ski the Haute Route, and do an unspecified long distance
                    cycling or horseriding challenge!{" "}
                  </p>
                  <p className="question excerpt">
                    Anything specific that you learned that you would love to
                    share?
                  </p>

                  <p>
                    Take mental breaks. Find a time for yourself every day or
                    every couple of days. As private as possible and just don’t
                    do anything, but let thoughts come to you. Put away your
                    phone.
                  </p>
                  <p>
                    A bath is a good environment for this. It helps reflect and
                    structure my goals.
                  </p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p className="question excerpt">
                    Any tools or tracking you use (Strava, Spreadsheets, Apple
                    Watch, …)?
                  </p>
                  <p>
                    I use Strava for tracking my workout. I have a spreadsheet
                    in which I track my daily habits and metrics (my weight,
                    whether I did sports, if I meditated, if I did intermittent
                    fasting, whether I read something that day, if I posted on
                    Twitter, if I made an plan for the next day in the evening,
                    whether I listened to something inspirational, …).
                  </p>

                  <p></p>
                  <p></p>
                  <p className="question excerpt">
                    What have been the most influential books, podcasts, or
                    other resources?
                  </p>
                  <p>
                    About business, Richard Branson, Marc Benioff and Tony
                    Robbins are very inspiring, as well as Pieter Levels.
                  </p>
                  <p>
                    In health and diet, I learned a lot from the Tim Ferriss
                    show, also Wim Hofman who talks about fasting for example.
                    There is a lot of conflicting information out there.
                  </p>
                  <p></p>
                  <p></p>
                  <p className="question excerpt">
                    Advice for other entrepreneurs or freelancers who want to
                    get started or are just starting out?
                  </p>
                  <p>
                    There has never been a better time to start than right now!
                  </p>
                  <p></p>
                  <p></p>
                  <p className="question excerpt">
                    Where can we go to learn more?
                  </p>
                  <p>
                    You can find me on{" "}
                    <Link href="https://twitter.com/JorisFalter">Twitter</Link>,
                    my{" "}
                    <Link href="https://jorisfalter.ck.page/">newsletter</Link>,
                    my{" "}
                    <Link href="https://www.jorisfalter.com">
                      personal site
                    </Link>{" "}
                    or{" "}
                    <Link href="https://www.strava.com/athletes/7207717">
                      Strava
                    </Link>
                    .
                  </p>
                  <p className="question excerpt">
                    Anyone you would recommend me interviewing?
                  </p>
                  <p>
                    I have two friends, Greg and Tara, who are both working in
                    the freelance and entrepreneurship scene, and combine it
                    with living healthy.!
                  </p>
                  <p>
                    As well as Lynne Tye who combines Iron Mans with
                    entrepreneurship.
                  </p>
                  <p>
                    Or the Furlough founder who had some really challenging
                    goals for 2023 in his newsletter.
                  </p>
                </div>
                <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                  <div className="tags">
                    <span>Tags: </span>

                    <Link href="/category">
                      {/* <a>{singleData.tags[0]}</a> */}Marathon
                    </Link>
                    <Link href="/category">
                      {/* <a>{singleData.tags[1]}</a> */}Freelancing
                    </Link>
                    <Link href="/category">
                      {/* <a>{singleData.tags[2]}</a> */}Travel
                    </Link>
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
                                <a>The Best Time to Travel to Cambodia</a>
                              </Link>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 Jan</span>
                              <span className="post-by has-dot">13k views</span>
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
                                <a>
                                  20 Photos to Inspire You to Visit Cambodia
                                </a>
                              </Link>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">27 August</span>
                              <span className="post-by has-dot">14k views</span>
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
