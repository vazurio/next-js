import React from "react";

const Card = (props) => (
  <>
    <div className="Card">
      <img src={props.image} width="100%" height="260px" />
      <div className="CardBlock">
        <div className="One">
          <h4>{props.title}</h4>
          <p>{props.subtitle}</p>
        </div>
        <a href="/Lesson">
          {" "}
          <button> &rarr;</button>
        </a>
      </div>
    </div>

    <style jsx>{`
      .Card {
        max-width: 320px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        border-radius: 20px;
      }

      .CardBlock {
        background: blue;
        border-radius: 20px;
        padding: 15px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .CardBlock h4 {
        margin: 0;
        color: white;
        line-height: 1.5;
        font-size: 18px;
        margin-right: 10px;
      }

      .CardBlock p {
        color: white;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
      }

      .CardBlock button {
        cursor: pointer;
        border: none;
        background: white;
        padding: 6px 30px;
        font-weight: 600;
        font-size: 18px;
        border-radius: 18px;
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);

        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .CardBlock button:hover {
        background: transparent;
        border: 1px solid #eaeaea;
        color: white;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        transform: translateY(-3px);
      }
    `}</style>
  </>
);

export default Card;
