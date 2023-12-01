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
                  Christmas Literacy Activities
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    With Christmas approaching, there are numerous possibilities
                    for Literacy related activities in the classroom. How can
                    you ensure that the children can engage with these
                    activities in a child-led manner, while still addressing the
                    learning goals you have set?
                  </p>

                  <p>
                    The focus of literacy for Early Childhood Education often
                    revolves around building awareness of literacy related
                    activities, fostering social-emotional skills, communication
                    and developing phonemic and phonological awareness. Many of
                    these objectives can be accomplished through intentionally
                    planned and engaging child led centers.{" "}
                  </p>

                  <ul>
                    <li>
                      <b>The reading corner</b>
                      <p>
                        A reading corner provides an opportunity to learn
                        different reading behaviors. Activities such as telling
                        stories based on the pictures, retelling stories that
                        previously read stories, Handling books correctly (e.g.,
                        having the book the right side up, turning pages left to
                        right), are just a few of the possibilities. And most of
                        all, who wouldn’t enjoy cuddling up in a cozy corner,
                        with pillows, a christmas tree and nice lighting. By
                        adding a variety of books, children are introduced to
                        both fiction and nonfiction books and gaining an
                        understanding about the differences between them.{" "}
                      </p>
                    </li>

                    <li>
                      <b>Literacy center</b>
                      <p>
                        Transform the literacy center into Santa’s office.
                        Santa, with plenty to organize leading up to Christmas,
                        needs to plan and communicate with his elves to prepare
                        all the presents and logistics. Include various
                        materials in Santa’s office that encourage literacy use,
                        such as:{" "}
                      </p>
                      <ul>
                        {" "}
                        <li>
                          Santa’s list, where children can actually write on
                        </li>
                        <li>Different writing materials </li>
                        <li>An old laptop or computer with keyboard </li>
                        <li>A phone for calling the elves</li>
                        <li>A list of the names of the children</li>
                        <li>
                          A mailbox for Santa to receive letters from the
                          children{" "}
                        </li>
                        <li>
                          Different types of papers for children to create their
                          own messages or wishlists to Santa
                        </li>
                      </ul>
                    </li>

                    <li>
                      <b>Vocabulary</b>
                      <p>
                        When working on vocabulary, try to link it to one of the
                        centers you’ve already created, such as Santa’s workshop
                        or a bakery. Discuss the different materials and tools
                        in these centers. You can even arrange a visit to a real
                        bakery. Add labels to the items in the center in the
                        classroom with the new words learned. Some children
                        might even be able to write down the words themselves.{" "}
                      </p>{" "}
                    </li>
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                      <img
                        className="border-radius-10"
                        src={`/assets/imgs/news/9-1.png`} //  naam van de foto
                        alt="happy children" //  dit is een beschrijving voor Google
                        height="300px"
                      />
                    </figure>
                    <li>
                      <b>Story baskets</b>
                      <p>
                        In this center, children continually work on
                        communication, listening, books and stories. After
                        reading a book to the children, create a story basket
                        center in your classroom. Here children can retell,
                        expand on, or create their own stories. You can also
                        have a Santa basket, where children can create their own
                        stories without having to read a story first.{" "}
                      </p>
                    </li>
                  </ul>

                  <p>Let the Christmas magic begin!</p>
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
