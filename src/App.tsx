import MainLayout from '@layouts/MainLayout';
import Section from '@layouts/Section';
import './index.css';

const App = () => {
  return (
    <div className="bg-red-200 relative">
      <MainLayout>
        <Section as="section" className="px-20 min-h-[300px]">
          메인 레이아웃
        </Section>
      </MainLayout>
    </div>
  );
};

export default App;
