import { Fragment } from 'react';
import { topics } from './Topics';
import NavigationTools from './NavigationTools';
import { useParams } from 'react-router';

const Test = () => {
  const nameOfTopic = useParams();
  const findTopic = topics.find((item) => item.path == nameOfTopic.topic);

  const { content, title } = findTopic;

  const parseContent = (content) => {
    return content.map((item) => {
      const [[tag, text]] = Object.entries(item);
      switch (tag) {
        case 'q': {
          return <h2>{text}</h2>;
        }
        case 'a': {
          return <p>{text}</p>;
        }
        case 'c': {
          return (
            <pre>
              <code>{text}</code>
            </pre>
          );
        }
      }
    });
  };
  return (
    <>
      <h1>{title}</h1>
      {parseContent(content).map((c, i) => (
        <Fragment key={i}>{c}</Fragment>
      ))}
      <NavigationTools />
    </>
  );
};

export default Test;
