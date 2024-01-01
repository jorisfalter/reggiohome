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
              <div className="breadcrumb">
                <Link href="/">
                  <a rel="nofollow">Home</a>
                </Link>
                <span></span> Products
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="pb-50">
            <div className="container">
              <h2 className="font-weight-900">Coming Soon:</h2>
              <p style={{ fontSize: "1.25rem" }}>
                A beautiful and easy way to document the Project provocations
                and experiences in your classroom.
              </p>
              <p style={{ fontSize: "1.25rem" }}>
                Feel free to read the blog in the meantime:
              </p>

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
