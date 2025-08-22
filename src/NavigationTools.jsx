import { useNavigate, useParams } from 'react-router';
import { topics } from './Topics';
import { Button } from 'antd';

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
        <Button color="default" variant="solid" onClick={onPrevTopic}>
          Предыдущая тема: {prevTopic.title}
        </Button>
      )}
      <Button color="default" variant="solid" onClick={onHomePage}>
        Домой
      </Button>
      {nextTopic && (
        <Button color="default" variant="solid" onClick={onNextTopic}>
          Следующая тема: {nextTopic.title}
        </Button>
      )}
    </>
  );
};

export default NavigationTools;
