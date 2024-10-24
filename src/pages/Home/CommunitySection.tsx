import { useState } from 'react';

import Section from '@layouts/Section';
import ChevronButton from '@components/ChevronButton';

import { ANIMATION } from '@constants/animation';
import { MOCK_COMMUNITY_DATA, MOCK_SHARE_DATA } from '@data/main';

import CommunityContent from './CommunityContent';

const ANIMATION_DELAY = 500;

const CommunitySection = () => {
  const [index, setIndex] = useState(0);
  const [trigger, setTrigger] = useState('');

  const handleClickPrevPage = () => {
    setTimeout(
      () => (index < 1 ? setIndex(index + 1) : setIndex(0)),
      ANIMATION_DELAY,
    );

    setTrigger(ANIMATION.FADE_OUT_LEFT);
    setTimeout(() => setTrigger(ANIMATION.FADE_IN_LEFT), ANIMATION_DELAY);
  };

  const handleClickNextPage = () => {
    setTimeout(
      () => (index > 0 ? setIndex(index - 1) : setIndex(1)),
      ANIMATION_DELAY,
    );

    setTrigger(ANIMATION.FADE_OUT_RIGHT);
    setTimeout(() => setTrigger(ANIMATION.FADE_IN_RIGHT), ANIMATION_DELAY);
  };

  return (
    <Section as="section" className="relative xl:max-w-[1920px] mx-auto">
      <div
        className={`
        flex xl:flex-row sm:flex-col
        xl:px-[16.25rem] lg:px-[1.875rem]
        lg:py-40 sm:py-24
        xl:gap-[3.25rem]
        ${trigger}`}
      >
        {index === 0 && (
          <CommunityContent
            CommunityTitle="자료공유"
            description={
              <>
                유어티처의 자료공유 게시판에서{' '}
                <br className="xl:block sm:hidden" />
                선생님들과 다양한 정보를 공유해보세요.
              </>
            }
            shareData={MOCK_SHARE_DATA}
          />
        )}
        {index === 1 && (
          <CommunityContent
            CommunityTitle="소통방"
            description={
              <>
                유어티처의 소통방은 여러 선생님들과{' '}
                <br className="xl:block sm:hidden" />
                다양한 이야기를 나눌 수 있습니다.
              </>
            }
            shareData={MOCK_COMMUNITY_DATA}
          />
        )}
      </div>
      <ChevronButton
        direction="left"
        className="absolute
          xl:top-[50%] lg:top-[12.5rem] sm:top-[7.75rem]
          xl:left-[7.5rem] lg:left-[calc(50%-8.75rem)] sm:left-[calc(50%-6.875rem)]
          xl:-translate-y-[50%]
        "
        onClick={handleClickPrevPage}
      />
      <ChevronButton
        direction="right"
        className="absolute
          xl:top-[50%] lg:top-[12.5rem] sm:top-[7.75rem]
          xl:right-[7.5rem] xl:left-auto lg:left-[calc(50%+5.675rem)]  sm:left-[calc(50%+4.675rem)]
          xl:-translate-y-[50%]"
        onClick={handleClickNextPage}
      />
    </Section>
  );
};

export default CommunitySection;
