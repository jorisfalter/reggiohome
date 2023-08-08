import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import comments from "../../data/comments.json";

const SingleVendor = () => {
  return (
    <>
      <Layout>
        {/* {singleData && ( */}
        <>
          <main className="bg-grey pb-30">
            <div className="container single-content">
              <div className="entry-header entry-header-style-1 mb-50 pt-50">
                <h1 className="entry-title mb-50 font-weight-900">
                  {/* {singleData.title} */}
                  The Environment as the 'Third Teacher'{" "}
                </h1>
                <div className="row"></div>
              </div>
              {/* <!--end single header--> */}

              {/* <!--figure--> */}
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    <i>
                      When thinking of education everyone agrees you need a
                      teacher and educational materials.
                    </i>
                  </p>
                  <p>
                    What if someone would tell you this is not enough? To create
                    active engagement, collaboration, creativity and true
                    holistic development, you need more. This is when the third
                    teacher comes in, the environment where the learning takes
                    place. The role of the third teacher goes beyond the
                    limitations of a human presence and plays a vital role in
                    shaping the learning experience. It is not merely a backdrop
                    but an active participant in the learning process, it
                    creates engagement, creativity and excitement to learn.
                  </p>

                  <p className="question excerpt">
                    How to set up an your environment as an engaging and
                    stimulating third teacher:
                  </p>
                  <p>
                    <i>Natural and open spaces</i>
                  </p>
                  <p>
                    Nature plays a significant role, and the third teacher
                    leverages this connection. The inclusion of natural elements
                    such as plants, natural light and outdoor spaces, creates a
                    harmonious and calming atmosphere, facilitating engagement
                    and inspiration.
                  </p>

                  <p>
                    <i>Aesthetics and organization</i>
                  </p>
                  <p>
                    The physical space is carefully curated to fit the current
                    learning activities. With the understanding of ‘less is
                    more’ materials and activities are carefully chosen and set
                    up in a visually appealing, welcoming and organized setting
                    that engages students and invites them to participate
                    actively.
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/3-thirdteacher1.jpg`}
                      alt="lighttable"
                      height="300px"
                    />
                  </figure>
                  <p>
                    <i>Documentation and reflection</i>
                  </p>
                  <p>
                    Making learning visible for the children by documenting
                    their learning journeys, displaying children's work and
                    encouraging reflections, fosters metacognition,
                    collaboration and communication. The documentation includes
                    conversations, photos and children’s work and acts as a
                    visual narrative for the children, enabling them to revisit
                    their progress, celebrate achievements and identify areas of
                    growth.
                  </p>
                  <p>
                    <i>Flexibility and provocations</i>
                  </p>
                  <p>
                    Flexibility is key. The environment responds and adapts to
                    the children's interests and inquiries, with minor
                    adjustments. Open-ended materials, provocations and learning
                    centers encourage children to explore, experiment, problem
                    solve and think critically, leading them to deeper
                    understandings and new curiosities.
                  </p>
                  <p>
                    By acknowledging the profound influence of the learning
                    environment, we unlock boundless potential for student
                    engagement, creativity and growth. The meticulously designed
                    space, adaptable nature, purposeful documentation,
                    harmonious integration with nature and invigorating
                    provocations converge to create an environment where
                    students become active participants in their own educational
                    journey.{" "}
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/3-thirdteacher2.jpg`}
                      alt="lighttable"
                      height="300px"
                    />
                  </figure>

                  <blockquote>
                    <p>xxx</p>
                  </blockquote>

                  <p></p>
                  <p></p>
                </div>

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
