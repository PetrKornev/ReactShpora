import { topics } from './Topics';
import { Link } from 'react-router';

const MainPage = () => {
  return (
    <>
      Главная страница
      <div>
        Выбери тему:{' '}
        {topics.map((item) => (
          <Link key={item.path} to={`/${item.path}`}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default MainPage;
