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
                  Technology in the classroom
                </h1>
              </div>
              <article className="entry-wraper mb-50">
                <div className="entry-main-content wow fadeIn animated">
                  <p>
                    Ever since Chat GPT became world famous, AI has been the
                    talk of the day. New applications are released daily and
                    whereas Artificial Intelligence used to be just for big
                    corporations, it’s now being used in everyday life by
                    individuals. Some applications we might not even be aware of
                    using Artificial Intelligence, like Siri or Alexa, or even
                    the face recognition on your photos. Other applications it’s
                    more straightforward. Who has not been talking to an AI
                    chatbot like chat GPT or the chatbot of the customer service
                    of a company? But what about the applications where you can
                    generate stories, photos or even compose music? How can we
                    use these new developments in our classroom?
                  </p>
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <img
                      className="border-radius-10"
                      src={`/assets/imgs/news/8-1.png`} //  naam van de foto
                      alt="happy children" //  dit is een beschrijving voor Google
                      height="300px"
                    />
                  </figure>

                  <p>
                    <p className="question excerpt">
                      What is Artificial Intelligence (AI)?{" "}
                    </p>
                  </p>

                  <p>
                    Artificial intelligence (AI) refers to the development of
                    computer systems that can perform tasks that typically
                    require human intelligence. These tasks include learning
                    from experience, understanding natural language, recognizing
                    patterns, and solving complex problems. AI systems are
                    designed to analyze data, adapt to changing circumstances,
                    and make informed decisions, often mimicking human cognitive
                    functions. Machine learning, a subset of AI, enables systems
                    to improve their performance over time by learning from data
                    without explicit programming. AI applications range from
                    virtual personal assistants and recommendation systems to
                    advanced tasks such as image recognition, language
                    translation, and data analyzing. The goal of AI is to create
                    intelligent machines that can enhance efficiency, solve
                    challenging problems, and augment human capabilities across
                    various domains.
                  </p>

                  <p>
                    There are many forms of AI. The most used is the data
                    collection AI, making work easier for teachers. However, in
                    this article, I want to focus on the AI applications that
                    can be implemented within our classroom Projects, where
                    children can learn about and experience the aspects of an AI
                    integrated application to create new content.
                  </p>

                  <p>
                    Technology is developing quickly. The suggestions offered in
                    this app are merely suggestions. New and better technologies
                    might have been developed by the time you’d like to
                    implement these. Use this information as inspiration for the
                    possibilities out there, and never stop dreaming about other
                    possibilities!
                  </p>

                  <p>
                    <p className="question excerpt">
                      Visual programming Languages
                    </p>
                  </p>

                  <p>
                    Understanding basic programming language (also called
                    coding) is the foundation of AI. Coding is the process of
                    instructing a computer to perform specific tasks by
                    providing it with a set of instructions written in a
                    programming language. These instructions, known as code, are
                    a series of step-by-step commands that tell the computer
                    what actions to take. It is the fundamental skill behind
                    software development, allowing programmers to create
                    applications, websites, games and other software.{" "}
                  </p>

                  <p>
                    Coding involves problem solving, logic, and creativity.
                    Programmers need to analyze problems, break them down into
                    smaller, manageable tasks and then write code to solve each
                    part.
                  </p>

                  <p>
                    There are several platforms available for children to learn
                    about the basics of coding, using a drag and drop interface,
                    allowing children to assemble simple programs by assembling
                    visual blocks.
                  </p>

                  <ul>
                    <li>
                      <a href="https://scratch.mit.edu">
                        <i style={{ color: "blue" }}>Scratch</i>
                      </a>
                      <p>
                        {" "}
                        Scratch is one of the world’s largest free coding
                        platforms for children. It’s being used in homes and
                        schools all over the world. Children learn to create
                        stories, animations and games using a coding language
                        with a simple digital interface.
                      </p>

                      <p>
                        Scratch has endless possibilities. Their strength is the
                        possibility to upload your own media for your projects.
                        For example, when your children have written their own
                        stories and you would like the children to experiment
                        with different ways to present their stories. With
                        Scratch, you can code your story, by uploading a
                        personal background and characters.{" "}
                      </p>
                    </li>
                  </ul>
                  <p>
                    <p className="question excerpt">Machine Learning</p>
                  </p>
                  <p>
                    Machine Learning (ML) is a subset of AI that focuses on the
                    development of algorithms and models that enable computers
                    to learn and make predictions or decisions without being
                    explicitly programmed.{" "}
                  </p>

                  <ul>
                    <li>
                      <a href="https://teachablemachine.withgoogle.com">
                        <i style={{ color: "blue" }}>
                          Google Teachable Machine
                        </i>
                      </a>
                      <p>
                        Imagine you’re doing a project on the differences
                        between moths and butterflies. The children have
                        researched multiple resources on the differences and
                        have made a list of these differences. How cool would it
                        be if they could build their own machine? A machine that
                        will tell them whether the animal found is a moth or a
                        butterfly by submitting a simple photo. Google’s
                        teachable machine is a free interface.{" "}
                      </p>
                    </li>
                  </ul>

                  <p>
                    As mentioned before, technology is developing fast and new
                    applications are rolled out each day. We can only imagine
                    how business will be done in 15 years from now, but I know
                    for sure that technology will not stand still. Introducing
                    children to these concepts at a young age will make them
                    flexible, and critical thinkers. It is our task as educators
                    to embrace the future, teach the children the capabilities
                    and the dangers hidden in these developments. Only then can
                    we ensure the children will be ready for the future.{" "}
                  </p>
                  <br></br>
                  <p>
                    {" "}
                    <i>
                      {" "}
                      Disclaimer: Using technology with children is only
                      beneficial when used appropriately. Before using any
                      technology suggested in this article, ask yourself if it’s
                      developmentally appropriate to the age group you’re
                      teaching. Adult supervision is important
                    </i>
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
