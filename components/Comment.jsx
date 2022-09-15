import React from "react";
import LikeCount from "./LikeCount";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={props.profile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.owner}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.content}</span>
          <LikeCount liked={props.liked} />
        </div>
      </div>

      {props.replies.map((reply, i) => {
        return <Reply
          key={i}
          owner={reply.username}
          content={reply.replyText}
          profile_img={reply.userImagePath}
          liked={reply.likeNum}
        />
      })}</div>
  );
}
