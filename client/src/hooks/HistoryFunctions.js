import { useHistory } from 'react-router-dom';
export default function HistoryFunctions() {
  const history = useHistory();

  const handleClick = {
    GoHome() {
      history.push('/');
    },
    GoForward(x) {
      history.push(`/${x}`);
    },
  };

  return { history, handleClick };
}
