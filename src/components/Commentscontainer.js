import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Renu",
    text: "Hardest choice requires the strongest will",
    replies: [],
  },
  {
    name: "jagadeesh",
    text: "hello this is good",
    replies: [
      {
        name: "kpk",
        text: "yaa its good",
        replies: [
          {
            name: "sjb",
            text: "ya kpk its true",
            replies: [],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />

      <div className="ml-8 border-l border-gray-300 pl-4 mt-2">
        <CommentsList comments={comment.replies} />
      </div>

    </div>
  ));
};

const Commentscontainer = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default Commentscontainer;