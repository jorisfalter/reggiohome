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
                  The atelier: a place for meaningful learning{" "}
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    Many Reggio Emilia-inspired schools have an atelier, a place
                    for children to explore, discover, and expand their
                    knowledge. But what is an atelier, and how can you ensure
                    optimal learning?
                  </p>
                  {/* <!--figure--> */}

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/4-1.jpeg`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
                </div>

                <p>
                  {" "}
                  An atelier is a rich and well-appointed research environment
                  for both teachers and students. It's often designed and
                  intentionally set up by the atelierista, a thoughtful and
                  skillful researcher. It is a space where children encounter
                  interesting and attractive materials, allowing them to explore
                  various materials and techniques with expressive
                  possibilities. It also assists teachers in understanding how
                  children learn. It is not just a place for activities but a
                  space where teachers give meaning to those activities.
                  Creating an atelier in a school environment allows the
                  educational process and various learning experiences for
                  children to be seen as a holistic and complete approach. It
                  enables children to consider academic and scientific topics
                  from different perspectives, using various languages to foster
                  a deeper understanding. But how can we ensure we give meaning
                  to the activities in an atelier?
                </p>

                <p className="question excerpt">Aesthetics</p>
                <p>
                  According to Vea Vechi, aesthetics is an attitude of empathy
                  towards things around us. It can be defined as the opposite of
                  indifference or conformism, or the opposite of the lack of
                  participation and involvement. Aesthetics bring meaning to
                  what we're learning; without aesthetics, an atelier simply
                  becomes a place for activities. Using aesthetics and poetic
                  language supports children in building deeper understandings.
                </p>

                <blockquote>
                  <p>
                    An atelier is a space where children encounter interesting
                    and attractive materials, allowing them to explore various
                    materials and techniques with expressive possibilities.
                  </p>
                </blockquote>
                <p className="question excerpt">Meaningful</p>
                <p>
                  It's evident that activities offered in an atelier need to
                  hold meaning. To ensure activities hold meaning, teachers need
                  to work as facilitators and researchers. This involves
                  analyzing previous documentations, researching possibilities,
                  and discussing next steps with other professionals to ensure
                  meaningful activities are set up.
                </p>

                <p className="question excerpt">Using all of our senses</p>
                <p>
                  Have you ever encountered something new, like a flower you've
                  never seen before? What did you do? Did you just look at it,
                  or did you smell it, touch it, and listen to it? To develop a
                  better understanding of a new topic, children use all their
                  senses. How does something feel? Can something make a sound?
                  Can we smell or even taste it? An atelier lets children
                  explore new aspects using all their senses.
                </p>

                <p className="question excerpt">
                  Expressive Languages (A child has 100 languages)
                </p>
                <p>
                  Children have 100 languages to express themselves. When using
                  both academic/scientific disciplines and expressive languages,
                  you create a richer approach to reality. Children are more
                  capable of expressing their ideas and building a deeper
                  understanding of the topics they learn. An atelier is equipped
                  with multiple expressive materials such as clay, paper, wire,
                  paint, and materials that make sound. Children can use all
                  these materials to learn new techniques and build a deeper
                  understanding.
                </p>

                <p>
                  An atelier serves as a dynamic and transformative space within
                  the educational landscape. It fosters curiosity, creativity
                  and a sense of meaning in learning for both students and
                  educators. By embracing aesthetics, meaningful activities,
                  sensory exploration and expressive language, we can unlock the
                  full potential of an atelier as a vehicle for holistic and
                  enriched understanding. It is a place where the boundaries of
                  traditional education blur, and the joy of discovery becomes a
                  guiding force, shaping the way we engage with the world and
                  each other.
                </p>
              </article>
            </div>
          </main>
        </>
      </Layout>
    </>
  );
};

export default SingleVendor;
