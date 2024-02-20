import Button from '@components/Button';
import './index.css';
import ChevronButton from '@components/ChevronButton';

const App = () => {
  return (
    <div className="p-[200px]">
      <Button>소통방</Button>
      <div className="mt-10">
        <ChevronButton direction="right" />
      </div>
    </div>
  );
};

export default App;
