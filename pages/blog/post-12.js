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
        <>
          <main className="bg-grey pb-30">
            <div className="container single-content">
              <div className="entry-header entry-header-style-1 mb-50 pt-50">
                <h1 className="entry-title mb-50 font-weight-900">
                  {" "}
                  The light table: Why every classroom should have one
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    In the Reggio Emilia approach, light is considered an
                    essential element in creating a beautiful, stimulating, and
                    inspiring environment that fosters children’s creativity,
                    curiosity, and sense of wonder. It is seen as a tool that
                    supports learning, exploration, and self-expression.{" "}
                  </p>

                  <p>
                    Light is used in various ways in the classroom, from the use
                    of natural light to create a more comfortable environment to
                    exploration and inquiry where children explore materials
                    that interact with light. One way to do this is by using a
                    light table.{" "}
                  </p>

                  <p>
                    The light table is a surface with translucent glass of
                    plastic with a light behind it. The unique visual effects
                    produced by a light table, including shadows, reflections,
                    and color mixing, stimulate children’s curiosity and
                    encourage them to investigate and inquire about the
                    materials placed on top of the light table. Working with a
                    light table can enhance children’s focus and concentration,
                    helping to support the development of attention skills.{" "}
                  </p>

                  <p>
                    The light table is a flexible learning tool that offers
                    endless learning opportunities. Here are some ideas of what
                    you can do on the light table:
                  </p>

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/12-1.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <b>Fine motor skills using sand </b>
                  <p>
                    Place some sand on top of the light table. The children can
                    use their fingers or brushes to create their own sand
                    drawings on the light table. If you’d like to have it more
                    teacher-guided, you can place letters or other forms
                    underneath the sand for children to trace.{" "}
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/12-2.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <b>Project explorations with natural materials</b>
                  <p>
                    The light from the light table will give a new dimension to
                    the materials you place on top of it. When placing various
                    leaves in different stages, children get to explore these
                    leaves in a new way. They will see other details then they
                    might have seen without the light table. Add some magnifying
                    glasses and some pens and papers for observational drawings,
                    where children can document their newly found knowledge.{" "}
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/12-3.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <b>Color explorations with paint</b>
                  <p>
                    Ever thought of covering your light table with a plastic
                    sheet and having children paint directly on it? It’s a great
                    way for the children to explore colors and even mix them.
                    Have various colors available and different materials to
                    paint with and let children explore the endless
                    possibilities with paint.
                  </p>
                  <b>Building community and exploring identity</b>
                  <p>
                    At the start of the school year, we work on building a
                    community within our classroom. The light table is an ideal
                    place to collaborate with their (new) classmates and to
                    explore what we look like. Have photos printed of each child
                    and place them on the light table. The children can place a
                    vellum paper on top of the photo to trace their classmates
                    and create friend portraits.{" "}
                  </p>
                  <p>
                    <b>Other items to put on the light table.</b>
                  </p>
                  <ul>
                    <li>
                      Anything translucent, like magnatiles, shapes, letters,
                      etc.
                    </li>
                    <li>Photos from different provocations. </li>
                    <li>
                      Natural materials like wooden blocks, sticks, flowers,
                      pasta, etc.{" "}
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </main>
        </>
      </Layout>
    </>
  );
};

export default SingleVendor;
