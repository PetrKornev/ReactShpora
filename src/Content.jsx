import { useParams, useNavigate } from 'react-router';
import { topics } from './Topics';

const Content = () => {
  const navigate = useNavigate();
  const TopicName = useParams();
  const topicContent = topics.find((item) => item.path == TopicName.topic);
  const onHomePage = () => {
    navigate('/');
  };
  const toNextTopic = () => {
    navigate(`/${nextTopic.path}`);
  };
  const toPrevTopic = () => {
    navigate(`/${prevTopic.path}`);
  };

  const topicIndex = topics.findIndex((item) => item.path == TopicName.topic);
  const nextTopic = topics[topicIndex + 1];
  const prevTopic = topics[topicIndex - 1];

  return (
    <>
      <h1>Тема: {topicContent.title}</h1>
      <div> {topicContent.content}</div>
      {prevTopic && (
        <button onClick={toPrevTopic}>
          Предыдущая тема: {prevTopic.title}
        </button>
      )}
      <button onClick={onHomePage}>На главную</button>
      {nextTopic && (
        <button onClick={toNextTopic}>Следующая тема: {nextTopic.title}</button>
      )}
    </>
  );
};

export default Content;
