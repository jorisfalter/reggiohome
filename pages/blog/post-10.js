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
                  More Christmas Literacy Activities
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    {" "}
                    Understanding and recognizing sounds in words are crucial
                    skills for learning to read. This article presents some
                    Christmas activities for children that they can do on their
                    own.{" "}
                  </p>

                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/10-1.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>

                  <ul>
                    <li>
                      <b>Organizing Santa's presents</b>
                      <p>
                        {" "}
                        Imagine a mix-up at the North Pole, the Christmas
                        presents don’t have names on them! Make some presents,
                        provide a list of children’s names and different kinds
                        of letters. The children can match the letters to the
                        names and put them on the gifts to fix the mix-up.{" "}
                      </p>{" "}
                    </li>
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                      <img
                        className="border-radius-10"
                        src={`/assets/imgs/news/10-2.png`} //  naam van de foto
                        alt="happy children" //  dit is een beschrijving voor Google
                        height="300px"
                      />
                    </figure>
                    <li>
                      <b>Santa's letter 'S'</b>
                      <p>
                        This is a great opportunity to focus on the letter ‘S’.
                        Encourage children to come up with words that include
                        the letter ‘S’. Create sorting boxes where the children
                        can categorize items that start with specific letters,
                        like sorting objects that start with ‘S’.
                      </p>
                    </li>
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                      <img
                        className="border-radius-10"
                        src={`/assets/imgs/news/10-3.png`} //  naam van de foto
                        alt="happy children" //  dit is een beschrijving voor Google
                        height="300px"
                      />
                    </figure>
                    <li>
                      <b>Christmas card writing</b>
                      <p>
                        Inspire the children to write Christmas cards by reading
                        “The jolly Christmas Postman.” Set up a center with the
                        book, several words from the Christmas cards in the
                        story, paper, pencils, and a mailbox. Children can use
                        the provided words to create their own Christmas cards
                        for their friends.{" "}
                      </p>
                    </li>
                  </ul>
                  <p>Let the Christmas magic continue!</p>
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
