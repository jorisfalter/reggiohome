import Layout from "./../components/layout/layout";
function About() {
  return (
    <>
      <Layout>
        <main className="bg-grey pb-30">
          <div className="container single-content">
            <div className="entry-header entry-header-style-1 mb-50 pt-50 text-center">
              <h1 className="entry-title mb-20 font-weight-900 ">
                About Reggio Home
              </h1>
              {/* <p className="text-muted">
                <span
                  className="typewrite d-inline"
                  data-period="2000"
                  data-type='[ " Travel Blogger. ", "Content Writter. ", "Food Guides " ]'
                ></span>
              </p> */}
            </div>
            {/* <!--end single header--> */}
            <figure className="image mb-30 m-auto text-center border-radius-10">
              <img
                className="border-radius-10"
                src="/assets/imgs/news/MarjonFounderReggioHome.jpg"
                alt="post-title"
                width="500px"
              />
            </figure>
            {/* <!--figure--> */}
            <article className="entry-wraper">
              <p className="font-large">
                Welcome to our website! We are passionate educators dedicated to
                bringing Reggio Emilia inspired learning into homes all over the
                world. Our goal is to provide parents and educators with the
                tools they need to create engaging, child-centered learning
                environments that promote creativity, exploration, and critical
                thinking.
              </p>
              <p className="font-large">
                At the heart of Reggio Home is the Reggio Emilia philosophy of
                education, which emphasizes the importance of child-centered
                learning and project-based exploration. We believe that children
                learn best when they are given the freedom to explore their
                interests and curiosities in a supportive, nurturing
                environment.
              </p>
              <p className="font-large">
                Our team brings years of experience in the field of education,
                and we have seen firsthand the benefits of using Reggio Emilia
                inspired learning. We have worked with children of all ages and
                backgrounds, and we are committed to helping parents and
                educators create learning experiences that are tailored to the
                unique needs and interests of each child.
              </p>
              <p className="font-large">
                Our services will include a range of resources, including online
                courses, coaching, and materials. We believe that every child
                has the potential to thrive in a Reggio Emilia inspired learning
                environment, and we are excited to help parents and educators
                bring this approach into their homes and classrooms.
              </p>
              <p className="font-large">
                We invite you to explore our website and sign up for our
                newsletter, to be the first to learn about our new products.
                Thank you for visiting, and we look forward to working with you
                soon!
              </p>
              <p className="font-large">Marjon - Founder Reggio Home</p>

              {/* <h3 className="mt-30">Where to find us</h3>

              <hr className="wp-block-separator is-style-wide" />
              <p>
                <span className="mr-5">
                  <ion-icon
                    name="location-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="location outline"
                  ></ion-icon>
                </span>
                <strong>Address</strong>: Lorem 142 Str., 2352, Ipsum, State,
                USA
              </p>
              <p>
                <span className="mr-5">
                  <ion-icon
                    name="home-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="home outline"
                  ></ion-icon>
                </span>
                <strong>Our website</strong>:{" "}
                <a href="https://alithemes.com">https://alithemes.com</a>
              </p>
              <p>
                <span className="mr-5">
                  <ion-icon
                    name="planet-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="planet outline"
                  ></ion-icon>
                </span>
                <strong>Support center</strong>:{" "}
                <a href="https://alithemes.ticksy.com">
                  https://alithemes.ticksy.com
                </a>
              </p>
              <h3 className="mt-30">Some additional title</h3>
              <hr className="wp-block-separator is-style-wide" />
              <p>Some additional content. </p> */}
            </article>
          </div>
          {/* <!--container--> */}
        </main>
      </Layout>
    </>
  );
}
export default About;
