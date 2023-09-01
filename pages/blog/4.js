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
                  Building a Strong Classroom Community: A Fun and Engaging
                  Start to the School Year{" "}
                </h1>
              </div>

              {/* <!--figure--> */}
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/4-1.jpeg`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <p>
                    The beginning of a new school year is a magical time, full
                    of fresh starts, new friendships, and exciting adventures.
                    As we establish classroom routines, it's also the perfect
                    moment to create a nurturing and collaborative classroom
                    community. Children are remarkable individuals with
                    potential waiting to be unlocked. To help them flourish, we
                    emphasize the importance of building a strong community
                    right from the start of the school year. We achieve this
                    through three key pillars:
                  </p>

                  <p className="question excerpt">
                    (1) Creating a Welcoming Atmosphere:
                  </p>
                  <p>
                    Just like meeting new people, entering a new room or space
                    leaves a lasting impression. A warm and inviting environment
                    not only encourages children to explore and ask questions,
                    but it also helps them feel at ease. Here are a couple of
                    classroom activities to foster this welcoming environment:{" "}
                  </p>
                  <p>
                    <ul>
                      <li>
                        <b>Message Center: </b>Display individual photos of each
                        child along with their names in the classroom. This
                        familiarity helps children feel welcomed and aids them
                        in recognizing their peers. Encourage children to write
                        welcome messages to each other, facilitating connections
                        and name learning.
                      </li>
                      <li>
                        <b>Project Showcase: </b>Display past project
                        documentation, either from children in the same year
                        level or from the current students. This sparks
                        excitement about upcoming projects and celebrates each
                        child's achievements.
                      </li>
                    </ul>
                  </p>

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/4-2.jpeg`} //  naam van de foto
                      alt="building relationships" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <p className="question excerpt">
                    (2) Building Relationships:
                  </p>
                  <p>
                    Strong relationships are the foundation of any successful
                    community. Here are some simple and effective ways to
                    cultivate relationships among the children:
                  </p>
                  <p>
                    <ul>
                      <li>
                        <b>Name Games: </b> Engage in various name games to help
                        children learn their classmates' names. Fun activities
                        like this promote bonding and familiarity.
                      </li>
                      <li>
                        <b>This is My Name: </b> Invite parents to share the
                        story behind their child's name through letters. Include
                        baby photos for a personal touch. This creates a name
                        book for the classroom library, celebrating each child's
                        unique identity.
                      </li>
                    </ul>
                  </p>
                  <blockquote>
                    <p>
                      Children are remarkable individuals with potential waiting
                      to be unlocked. To help them flourish, we emphasize the
                      importance of building a strong community right from the
                      start of the school year
                    </p>
                  </blockquote>
                  <p className="question excerpt">
                    (3) Encouraging Communication:
                  </p>
                  <p>
                    Effective communication is crucial for community building.
                    In a Reggio Emilia inspired environment, expressive
                    languages play a vital role. Here are ways to encourage
                    communication through various languages:
                  </p>
                  <p>
                    <li>
                      <ul>
                        <li>
                          <b>Friend Portraits:</b> Let children create portraits
                          of their friends using natural materials on a light
                          table. This creative activity promotes communication
                          through art and observation.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <b>My Secret Bag: </b>Encourage children to share
                          stories about their lives by bringing in special items
                          from home. These items could be photographs, clothing,
                          or cherished toys, sparking engaging circle time
                          discussions.
                        </li>
                      </ul>
                    </li>
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/4-3.jpeg`} //  naam van de foto
                      alt="secret bag" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                  <p>
                    Incorporating these foundational principles—establishing a
                    welcoming environment, fostering relationships, and
                    promoting expressive communication—creates a harmonious and
                    vibrant classroom community. This approach blends profound
                    concepts with enjoyable activities, inviting our young
                    learners to embark on a shared journey of discovery,
                    learning, and friendship throughout the school year.
                  </p>
                  <p></p>
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
