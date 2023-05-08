import Link from "next/link";
import Layout from "./../components/layout/layout";
import Menu from "./../components/layout/menu";
// import PostCarousel1 from "./../components/slider/PostCarousel1";
import post from "../data/post.json";
// import author from "../data/author.json";
function Home() {
  return (
    <>
      <Layout>
        <main>
          <div className="featured-1">
            <div className="container">
              {/* <div className="row"> */}
              {/* <div className="col-lg-6 test1"> */}
              <div className="reggio-home-front-pic-div">
                <img
                  class="reggio-home-front-pic"
                  src="/assets/imgs/authors/ReggioHomeFrontFull.png"
                  alt=""
                />
              </div>
              {/* </div> */}
              {/* <div className="col-lg-6 test2"></div> */}
              {/* </div> */}
            </div>
          </div>
          {/* <Menu addClass={addClass} /> */}
          {/* <Menu /> */}

          <div className="container intro-section">
            <div className="row">
              <div class="col-md-8 introparagraph ">
                <h1 class="introtext">Welcome</h1>
                <p>
                  We are passionate in bringing Reggio Emilia inspired learning
                  to your home!{" "}
                </p>

                <p>
                  Our goals is to provide you with valuable resources, practical
                  tips and individual support on implementing this innovative
                  approach in your home environment.{" "}
                </p>

                <p>
                  Although our platform is still under construction, we are
                  thrilled to offer you the opportunity to sign up for our
                  newsletter and stay up-to-date on the latest information and
                  updates.{" "}
                </p>

                <p>
                  Thank you for you interest, and we look forward to sharing our
                  knowledge with you soon!
                </p>
              </div>
              <div className="col-md-4">
                <img
                  src="/assets/imgs/theme/ReggioHomeLogoBlackWhite.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="newsletter-section">
            <div className="container">
              <div className="newsletter">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "480px",
                    margin: "auto",
                    textAlign: "center",
                  }}
                >
                  <p className="font-large">Join our community.</p>

                  <iframe
                    src="https://reggiohome.substack.com/embed"
                    width="100%"
                    height="320px"
                    style={{ border: "1px solid #EEE", background: "white" }}
                    frameborder="0"
                    scrolling="no"
                  ></iframe>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="recent-blog-posts mt-15 mb-15">
                Recent Blog Posts
              </div>
              <div className="all-articles mt-15 mb-15">
                <Link href="/blog">
                  <a>All Articles</a>
                </Link>
              </div>
            </div>

            <div className="loop-grid mb-30">
              <div className="row">
                {post
                  .reverse()
                  .slice(0, 2)
                  .map((item, i) => (
                    <article
                      className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                      data-wow-delay="0.2s"
                    >
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{
                            backgroundImage: `url(assets/imgs/news/${item.img})`,
                          }}
                        >
                          <Link href={`/blog/${item.id}`}>
                            <a className="img-link"></a>
                          </Link>

                          <ul className="social-share">
                            <li>
                              <Link href="#">
                                <a>
                                  <i className="elegant-icon social_share"></i>
                                </a>
                              </Link>
                            </li>
                            <li>
                              <Link href="#">
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
                              <Link href="#">
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
                              <Link href="#">
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
                        <div className="post-content p-30">
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <Link href={`/blog/${item.id}`}>
                                <a>{item.title}</a>
                              </Link>
                            </h5>
                            <div className="entry-meta meta-0 font-x-small mb-10">
                              <Link href={`/category/${item.category}`}>
                                <a>
                                  <span className="post-cat text-info">
                                    {item.category}
                                  </span>
                                </a>
                              </Link>
                            </div>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">{item.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default Home;
