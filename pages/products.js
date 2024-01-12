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
              <h2 className="font-weight-900">Documentation Template</h2>
              <br></br>
              <p style={{ fontSize: "1.25rem" }}>
                A beautiful and easy way to document the Project Provocations
                and experiences in your classroom.
              </p>

              <div className="row">
                <div className="col-lg-8">
                  <div className="post-module-3">
                    <div className="loop-list loop-list-style-1">
                      <article className="hover-up-2 transition-normal wow fadeInUp animated">
                        <div className="row mb-40 list-style-2">
                          <div className="col-md-4">
                            <div className="post-thumb position-relative border-radius-5">
                              <div
                                className="img-hover-slide border-radius-5 position-relative"
                                style={{
                                  backgroundImage: `url(assets/imgs/news/prod1.png)`,
                                  borderColor: "black",
                                  borderStyle: "solid",
                                  borderWidth: "1px",
                                }}
                              >
                                <Link
                                  href={`https://docs.google.com/presentation/d/1127kKhJBwA8brUzdqISQQK88Iwtoiq64Job4mE8daiQ/edit?pli=1#slide=id.p`}
                                >
                                  <a className="img-link"></a>
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* start of product list */}
                          <div className="col-md-8 align-self-center">
                            <div className="post-content">
                              <h5 className="post-title font-weight-900 mb-20">
                                <Link
                                  href={`https://docs.google.com/presentation/d/1127kKhJBwA8brUzdqISQQK88Iwtoiq64Job4mE8daiQ/edit?pli=1#slide=id.p`}
                                >
                                  <a>Documentation Template</a>
                                </Link>
                              </h5>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">2 Jan 2024</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
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
