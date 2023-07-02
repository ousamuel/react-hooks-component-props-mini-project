import React from "react";

function Article1({ title, date, preview, minutes }) {
  if (date == "" || date == null) {
    date = "January 1, 1970";
  }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>
        {renderCoffee()} {minutes} min read
      </p>
    </article>
  );

  function renderCoffee() {
    const coffeeCount = Math.ceil(minutes / 5);
    const bentoCount = Math.ceil(minutes / 10);
    let emojiArray = [];
    let emoji = "";
    if (minutes < 30) {
      loadAndReturnArray(coffeeCount);
      emoji = "☕️";
    } else {
      loadAndReturnArray(bentoCount);
      emoji = "🍱";
    }

    function loadAndReturnArray(count) {
      for (let i = 0; i < count; i++) {
        emojiArray.push(i);
      }
    }
    return emojiArray.map((count) => {
      return <span key={count}>{emoji}</span>;
    });
  }
  // if (minutes < 30){
  //     for (let i = 0; i < coffeeCount; i++) {
  //       emojiArray.push(i);
  //     }
  //   } else {}

  //   return emojiArray.map((count) => {
  //     return <span key={count}>☕️</span>;
  //   });
}

export default Article1;
