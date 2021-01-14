import { useParams, useHistory } from 'react-router-dom';

const NewsDetail = () => {
  const { title, cat } = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.push('/news');
  };

  return (
    <h1>
      <button onClick={handleClick}>Back</button>
      <br />
      {title} - {cat}
    </h1>
  );
};

export default NewsDetail;
