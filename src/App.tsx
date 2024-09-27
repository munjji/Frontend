import ExpandedBox from 'components/box/ExpandedBox';
import './App.css';
import SquareBox from 'components/box/SquareBox';

function App() {
  return (
    <div className="App">
      <ExpandedBox color="main" title="vs" isClick={false} />
      <SquareBox color="main" content="안녕하세요 저는 이지희 입니다 하하하" question={false} />
    </div>
  );
}

export default App;
