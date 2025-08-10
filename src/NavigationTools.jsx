import { useNavigate, useParams } from 'react-router';
import { topics } from './Topics';

const NavigationTools = () => {
  const nameOfTopic = useParams();
  const navigate = useNavigate();
  const indexTopic = topics.findIndex((item) => item.path == nameOfTopic.topic);

  const nextTopic = topics[indexTopic + 1];
  const prevTopic = topics[indexTopic - 1];

  const onHomePage = () => {
    navigate('/');
  };

  const onNextTopic = () => {
    navigate(`/${nextTopic.path}`);
  };

  const onPrevTopic = () => {
    navigate(`/${prevTopic.path}`);
  };

  return (
    <>
      {prevTopic && (
        <button onClick={onPrevTopic}>
          Предыдущая тема: {prevTopic.title}
        </button>
      )}
      <button onClick={onHomePage}>Домой</button>
      {nextTopic && (
        <button onClick={onNextTopic}>Следующая тема: {nextTopic.title}</button>
      )}
    </>
  );
};

export default NavigationTools;
