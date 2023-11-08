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
                  Documentation: An insight in the child’s learning{" "}
                </h1>
              </div>

              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    When entering a Reggio Emilia-inspired classroom, you might
                    have noticed the documentation displays around the
                    classroom. Besides not only looking beautiful, it also
                    serves a purpose. These pieces are intentionally made by the
                    educators and transform single moments into meaningful
                    records of learning journeys. Understanding the art of
                    documentation can change the way you approach teaching and
                    its outcomes.{" "}
                  </p>
                  <p>
                    But why is documentation a powerful tool, and how can it
                    contribute to the learning and development of children?
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/6-1.jpg`} //  naam van de foto
                      alt="documentation" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>

                  <p className="question excerpt">
                    <b>The power of documentation</b>
                  </p>
                  <p>
                    Documentation is used in many educational philosophies,
                    including Reggio Emilia-inspired learning, Montessori, and
                    project-based learning. It's not just a collection of single
                    moments; it's about capturing and tracking the child's
                    learning experiences from the first steps they take until
                    they become experts. Documentation has a central role in the
                    discourse of meaning-making and is seen as an important
                    device for the construction of an ethical relationship with
                    the “other” and the world. It is a narrative of children's,
                    teachers', and parents' lives.{" "}
                  </p>

                  <p>
                    Documentation has a central role in the discourse of
                    meaning-making and is seen as an important device for the
                    construction of an ethical relationship with the “other” and
                    the world. It is a narrative of children's, teachers', and
                    parents' lives.
                  </p>
                  <p className="question excerpt">
                    Fostering open questions in your classroom:
                  </p>
                  <p>
                    <ul>
                      <li>
                        <i>Child centered learning: </i>Reggio Emilia places a
                        strong emphasis on child-centered learning, where
                        educators observe and respond to children's interests
                        and ideas. Through documentation, these moments are
                        captured, allowing the educator to tailor the curriculum
                        to the children's interests and needs.
                      </li>
                      <li>
                        <i>Reflection and Assessment: </i>Documentation serves
                        as a method for teachers to reflect on their teaching
                        practices. By reviewing documentation, educators can
                        assess the effectiveness of their approach and make
                        adjustments to better support each child's development.
                      </li>
                      <li>
                        <i>Communication and collaboration: </i>Documentation
                        serves as a means of communication between educators,
                        parents, and children themselves. It supports the
                        children in sharing their experiences and learned
                        skills. Besides, it enables educators to communicate
                        effectively about the children's development, strengths,
                        and areas of growth.
                      </li>
                    </ul>
                  </p>

                  <p className="question excerpt">
                    <b> Tips for effective documentation </b>
                  </p>
                  <p>
                    Any educator who has created documentation before knows how
                    time-consuming it can be, especially when starting to
                    incorporate programs like Photoshop, which offer endless
                    possibilities. How can you create documentation in an
                    effective manner?
                  </p>
                  <p>
                    <ul>
                      <li>
                        <i>Be present: </i>Observation is the foundation of
                        documentation. Be present in the moment, paying
                        attention to the children's actions, thoughts, and
                        conversations. Have a notebook or recorder ready to
                        record children's quotes and take photos of what they're
                        doing.
                      </li>
                      <li>
                        <i>Use technology wisely: </i>Digital tools can enhance
                        your documentation and make it more time-efficient. For
                        example, when your photos directly upload to the drive
                        which you can access via the program you're using to
                        make your documentation, this will save you time. Also,
                        online programs to remove backgrounds can, in some
                        cases, help. We are piloting an extension on Google
                        Slides with integrated fonts, so no more changing font
                        sizes when documenting children's quotes.
                      </li>
                      <li>
                        <i>Involve the children: </i>Encourage children to
                        participate in the documentation process. They can
                        describe observations, add experiences, and write down
                        thoughts directly on the documentations itself.
                      </li>
                    </ul>
                  </p>

                  <p>
                    Documentation is an ongoing process; it gives meaning to
                    what we do, serves as a tool to assess where children are,
                    and provides feedback on how to adapt the learning moving
                    forward. It's a tool that empowers educators, parents, and
                    children to be a part of the learning journey. We can unlock
                    new possibilities for learning and foster a deeper
                    understanding of the incredible potential within each child.
                  </p>
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
