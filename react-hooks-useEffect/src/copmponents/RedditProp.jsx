import { useEffect, useState } from "react";

const RedditProps = ( {reactJsProps} ) => {
  const [redit, setRedit] = useState([]);

  const getRedditData = () => {
    const url = `https://www.reddit.com/r/${reactJsProps}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        return (
          console.log(data.data.children),
          setRedit(data.data.children),
          console.log(data)
        );
      });
  };

  useEffect(getRedditData, []);

  return (
    <div>
      {redit.map((item, i) => {
        return (
          <div key={i}>
            <li>Title:{item.data.title}</li>
          </div>
        );
      })}
    </div>
  );
};

export default RedditProps;
