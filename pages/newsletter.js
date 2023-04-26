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
                <span></span> Newsletter
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
          </div>
          <div className="pb-50">
            <div className="container">
              <p className="font-large">Join our community!</p>

              <iframe
                src="https://reggiohome.substack.com/embed"
                width="100%"
                height="320px"
                style={{ border: "1px solid #EEE", background: "white" }}
                frameborder="0"
                scrolling="no"
              ></iframe>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
export default CaregoryList;
