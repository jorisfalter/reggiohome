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
                  Technology in the classroom, yes or no?
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <p>
                  {" "}
                  In discussions about technology in early childhood
                  environments, opinions vary widely regarding its appropriate
                  use. But what do we mean when we talk about the term
                  ‘technology’? And how can we make it meaningful for the
                  children?
                </p>

                <figure className="image mb-30 m-auto text-center border-radius-10">
                  <img
                    className="border-radius-10"
                    src={`/assets/imgs/news/11-1.png`} //  naam van de foto
                    alt="happy children" //  dit is een beschrijving voor Google
                    height="300px"
                  />
                </figure>
                <p>
                  When consulting the Oxford dictionary for the definition of
                  technology, the response is as follows:
                </p>
                <i>
                  “Technology is the application of scientific knowledge for
                  practical purposes, especially in industry. It entails
                  machinery and equipment developed from the application of
                  scientific knowledge and the branch of knowledge dealing with
                  engineering or applied sciences.”
                </i>

                <p>
                  {" "}
                  In simpler terms, Technology involves the use of equipment or
                  tools developed from scientific knowledge, such as cameras,
                  robots, computers, phones, software, and more.{" "}
                </p>
                <p>
                  How can we use these tools appropriately in an early childhood
                  setting?
                </p>

                <p>
                  <b>Distinguish between active and passive use </b>
                </p>
                <p>
                  In the early childhood years, children establish the
                  fundamentals for social interaction and empathy. To foster
                  this, children require engagement with others. When
                  integrating technology into early years environments, it is
                  imperative to ensure that children can maintain personal
                  interactions₁.{" "}
                </p>
                <p>
                  Effectively using technology in early childhood settings,
                  necessitates an understanding of the differences between
                  active and passive technology use.
                </p>
                <p>
                  <i>Passive Technology</i> use refers to situations where
                  children merely consume content, such as watching videos on a
                  screen without interacting with others.
                </p>
                <p>
                  {" "}
                  <i>Active technology</i> use occurs when children employ
                  technology as a tool for meaningful learning, such as
                  recording sounds, documenting their stories, or using video
                  chat to communicate with distant individuals₂.{" "}
                </p>

                <p>
                  It is evident that, with early learners, the emphasis should
                  be on active technology use, as it can serve as a valuable
                  learning tool₂. Appropriate technology experiences enable
                  children to control the medium, explore functionality and
                  stimulate real life use₃.
                </p>
                <p>
                  To ensure appropriate technology experiences a guideline with
                  questions has been outlined for parents and educators, using
                  the 3 C’s: content, context, and child’s needs₄. These
                  questions include:
                </p>
                <ul>
                  <li>
                    Content: How does technology help children to learn, engage,
                    express, imagine, or explore?
                  </li>
                  <li>
                    Context: What social interactions are happening before,
                    during, and after technology use? Does it complement, rather
                    than interrupt, children’s learning experiences and play
                    patterns?
                  </li>
                  <li>
                    The individual child: What does this child need right now
                    for growth and development? Is this technology an
                    appropriate match for the child’s needs, abilities,
                    interests, and development stage?
                  </li>
                </ul>
                <p>
                  It is key that adult supervision and intentional planning is
                  important, when using technology in an early years setting.
                  Effective ways of using technology include engagement through
                  activity apps, communications via video chats, learning with
                  guided apps, creating digital content such as books or songs₂.
                </p>

                <p>
                  {" "}
                  When looking at a Reggio Emilia inspired classroom, we see the
                  children as capable. They are naturally curious and observe
                  the world around them. Seeing adults using technology, they
                  are naturally curious themselves. We can see the use of
                  technology as another language we can interact with, we
                  communicate with it and learn from it. As Loris Malaguzzi has
                  said:{" "}
                  <i>
                    “The meeting of the children and the computer is, in effect,
                    the meeting of two ‘intelligences’ that need to get to know
                    each other. The child’s intelligence is fluid, intuitive,
                    curious, and yet able to ‘decentralize’ itself and
                    assimilate new interactive rules, to adjust its performance,
                    to find and alternate communicative and constructive
                    proposals and solutions. The intelligence of the machine is
                    more linear, rigid, programmed, in many ways an imposition,
                    and in other ways receptive and willing to execute commands,
                    able to listen to children and to encourage them to rethink
                    their actions, to indicate the way out of a problem, to
                    suggest the means for arriving at a ‘joining of forces’.”{" "}
                  </i>
                </p>

                <p>
                  Drawing from the findings, technology can be a valuable
                  complement to early childhood environments, provided it is
                  employed purposefully and under the watchful eye of adults.
                  Consider the role of technology in your upcoming project, how
                  do you intend to integrate it thoughtfully and with
                  appropriate supervision?
                </p>

                <ol>
                  <li>
                    <a href="https://www.childrenandscreens.org/learn-explore/research/how-does-technology-affect-kids-social-development/">
                      How does technology affect kids’ social development?
                    </a>{" "}
                    - Georgene Troseth, PHD, November 2023
                  </li>
                  <li>
                    <a href="https://tech.ed.gov/earlylearning/principles/">
                      Guiding Principles for Use of Technology with Early
                      Learners
                    </a>{" "}
                    - Office of Educational Technology, N.D.
                  </li>
                  <li>
                    National Association for the Education of Young Children &
                    Fred Rogers Center for Early Learning and Children’s Media
                    at Saint Vincent College (2012), page 8.
                  </li>
                  <li>
                    Guernsey, L. (2012) Screen Time: How electronic media—from
                    baby videos to educational software—affects your young
                    child. New York, NY: Basic Books.
                  </li>
                </ol>
              </article>
            </div>
          </main>
        </>
      </Layout>
    </>
  );
};

export default SingleVendor;
