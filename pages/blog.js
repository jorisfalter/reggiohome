import Link from "next/link";
import data from "../data/post.json";
import Layout from "./../components/layout/layout";
function CaregoryList() {
  console.log(data);
  return (
    <>
      <Layout>
        <main>
          {/* <!--archive header--> */}
          <div className="archive-header pt-50">
            <div className="container">
              <h2 className="font-weight-900">Blog</h2>
              <div className="breadcrumb">
                <Link href="/">
                  <a rel="nofollow">Home</a>
                </Link>
                <span></span> Blog
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="pb-50">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post-module-3">
                    <div className="loop-list loop-list-style-1">
                      {data.map((item, i) => (
                        <article className="hover-up-2 transition-normal wow fadeInUp animated">
                          <div className="row mb-40 list-style-2">
                            <div className="col-md-4">
                              <div className="post-thumb position-relative border-radius-5">
                                <div
                                  className="img-hover-slide border-radius-5 position-relative"
                                  style={{
                                    backgroundImage: `url(assets/imgs/news/${item.img})`,
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
                                <h5 className="post-title font-weight-900 mb-20">
                                  <Link href={`/blog/${item.id}`}>
                                    <a>{item.title}</a>
                                  </Link>
                                </h5>
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

                  {/* Page counter */}
                  {/* <div className="pagination-area mb-30 wow fadeInUp animated">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-start">
                        <li className="page-item">
                          <Link href="/#">
                            <a className="page-link">
                              <i className="elegant-icon arrow_left"></i>
                            </a>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link href="/#">
                            <a className="page-link">01</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#">
                            <a className="page-link">02</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#">
                            <a className="page-link">03</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#">
                            <a className="page-link">04</a>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link href="/#">
                            <a className="page-link">
                              <i className="elegant-icon arrow_right"></i>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
                </div>

                <div className="col-lg-4">
                  <div className="widget-area">
                    {/* Most Popular */}

                    {/* <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Most popular</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          {data.slice(1, 5).map((item, i) => (
                            <li className="mb-30 wow fadeInUp animated">
                              <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                  <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                    <Link href={`/blog/${item.id}`}>
                                      <a>{item.title}</a>
                                    </Link>
                                  </h6>
                                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span className="post-on">{item.date}</span>
                                  </div>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                  <Link href={`/blog/${item.id}`}>
                                    <a className="color-white">
                                      <img
                                        src={`assets/imgs/news/${item.img}`}
                                        alt=""
                                      />
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div> */}

                    {/* Instagram widget  */}
                    {/* <div className="sidebar-widget widget_instagram wow fadeInUp animated">
                      <div className="widget-header-1 position-relative mb-30">
                        <h5 className="mt-5 mb-30">Instagram</h5>
                      </div>
                      <div className="instagram-gellay">
                        <ul className="insta-feed">
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-3.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-3.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-4.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-4.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-5.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/#">
                              <a
                                href="/assets/imgs/thumbnail-5.jpg"
                                className="play-video"
                                data-animate="zoomIn"
                                data-duration="1.5s"
                                data-delay="0.1s"
                              >
                                <img
                                  className="border-radius-5"
                                  src="/assets/imgs/news/thumb-6.jpg"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default CaregoryList;
