import XL_BG1 from '@assets/img/xl-bg-1.png';
import XL_BG2 from '@assets/img/xl-bg-2.png';
import XL_BG3 from '@assets/img/xl-bg-3.png';
import LG_BG1 from '@assets/img/lg-bg-1.png';
import LG_BG2 from '@assets/img/lg-bg-2.png';
import LG_BG3 from '@assets/img/lg-bg-3.png';
import SM_BG1 from '@assets/img/sm-bg-1.png';
import SM_BG2 from '@assets/img/sm-bg-2.png';
import SM_BG3 from '@assets/img/sm-bg-3.png';

const mainBackground = [
  { imgName: 'background-1', imgSrc: [XL_BG1, LG_BG1, SM_BG1] },
  { imgName: 'background-2', imgSrc: [XL_BG2, LG_BG2, SM_BG2] },
  { imgName: 'background-3', imgSrc: [XL_BG3, LG_BG3, SM_BG3] },
];

const MOCK_SHARE_DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  type: `자료공유 ${i + 1}`,
  title:
    '유교과 같이 스터디 하실 분 모집합니다. 유교과 같이 스터디 하실 분 모집합니다.',
  views: Math.floor(Math.random() * 100000),
  createdAt: '2023.12.14.',
}));

const MOCK_COMMUNITY_DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  type: `소통방 ${i + 1}`,
  title:
    '유교과 같이 스터디 하실 분 모집합니다. 유교과 같이 스터디 하실 분 모집합니다.',
  views: Math.floor(Math.random() * 100000),
  createdAt: '2023.12.14.',
}));

export { mainBackground, MOCK_SHARE_DATA, MOCK_COMMUNITY_DATA };
