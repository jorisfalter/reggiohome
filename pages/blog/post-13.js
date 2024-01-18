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
                  100 Languages: Observational drawing
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    Maybe one of the languages easiest to use in a Reggio Emilia
                    inspired classroom is observational drawing, also called
                    graphic representations, where children draw what they see.
                  </p>
                  <p>
                    <em>What is observational drawing?</em>
                  </p>
                  <p>
                    Observational drawing is a technique where you create
                    graphic representations of objects, or scenes by directly
                    observing them in real life. Instead of relying on memory,
                    imagination, or pre-existing images, observational drawing
                    involves closely studying the visual characteristics of the
                    subject and translating those observations onto paper.
                  </p>

                  <p>
                    <em>
                      How can you use observational drawing in your classroom?
                    </em>
                  </p>
                  <p>
                    Observing objects or specific scenes can teach us a lot
                    about a certain topic or subject. This language is a great
                    starting point for any project you’d like to explore in the
                    classroom or even to discover new interests of your
                    children. You can take the children outside to observe
                    scenes in the real world, think about nature, the different
                    people and vehicles passing by at school, or even the
                    architecture around the school. Or you can bring certain
                    objects into the classroom, like natural materials, or other
                    materials they’re interested in.{" "}
                  </p>
                  <p>
                    These graphic representations can be used for future
                    documentation of the children's learning journey. When their
                    knowledge about a certain topic grows, their observations
                    become more detailed, showing understanding of specific
                    attributes of the objects, leading to clearer graphic
                    representations. It’s a great way to document their growth
                    in understanding.{" "}
                  </p>

                  <p>
                    <em>What materials do you need?</em>{" "}
                  </p>
                  <p>
                    If you’re planning on using the representations for
                    documentation it’s important to use quality drawing
                    materials. This will make it easier to remove backgrounds
                    and have high solution drawings in your documentation. What
                    I like to use is the following:
                  </p>
                  <ul>
                    <li>150 gram paper</li>
                    <li> Black marker or fine liner </li>
                  </ul>

                  <p>
                    <em>What skills do children learn?</em>
                  </p>
                  <p>
                    A big takeaway of observational drawing is eye for detail.
                    By asking them what else do you see? Or is this area also
                    blank on the leave? The children are encouraged to look for
                    small details, and make graphic representations as accurate
                    as possible. They start to understand an object is not just
                    its outlines, they’ll have new discoveries which will lead
                    to new questions. For example when looking at leaves. The
                    children will find the veins in the leaves that keep the
                    leaf in shape, which can lead to new questions and new
                    discoveries. When looking in the mirror they realize they
                    have eyebrows, and some of us have wreckless or other spots
                    on our face.
                  </p>
                  <p>
                    <em> Role of the teacher</em>
                  </p>
                  <p>
                    As a teacher it’s our responsibility to encourage the
                    children and to guide them to a better understanding. We can
                    do this by asking questions of what the children are
                    representing, what other things they notice in the object or
                    scene, or why they choose to represent something a certain
                    way. Children will not give you a clear representation at
                    their first try, but by encouraging them they will get a
                    better eye for detail. By listening to their explanations
                    you will get a better understanding of what they understand
                    and what they tried to represent and can direct them within
                    their graphic representations.
                  </p>
                  <p>
                    <em>
                      {" "}
                      An example of observational drawing to find out what the
                      children are interested in?
                    </em>
                  </p>
                  <p>
                    At my school we actively looked for the interests of our
                    children at the beginning of the school year. These
                    interests would lead us to a year long project that would
                    evolve along the way. At the start of the school year I
                    would take my children outside to different areas on the
                    school grounds and ask the children to draw what they saw.
                    When listening to their conversations and analyzing their
                    graphic representations, it was evident that insects were
                    everywhere. From small dots around the school shrine in
                    Thailand, ants finding their way to a dead bug and
                    butterflies sipping from the flowers. We eventually had a
                    project where we explored the differences between moths and
                    butterflies.{" "}
                  </p>

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/12-1.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>
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
