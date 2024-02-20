export interface SubMenusType {
  [key: string]: string[];
}
// SubMenusType 인터페이스는 문자열 키에 대한 배열 값을 갖습니다.

// 이런 일반 객체의 경우에는 컴포넌트 밖으로 빼시는 것이 좋습니다.
// 컴포넌트가 리렌더링될 때, 이 객체도 재생성되는데, 그럴 필요가 없으니까요!
export const SUB_MENUS: SubMenusType = {
  about: ['보육뉴스', '자료방'],
  content: ['자료공유', '소통방', '교사방'],
  edu: ['교육일정', '교육프로그램'],
  context: ['채용 공고'],
  info: ['공지사항', '1:1문의', 'FAQ'],
};

// 아래 MENUS의 각 요소들이랑 값들이 일치하여야한다.
export const MENU_PAGE: { [key: string]: string } = {
  정보나눔: 'about',
  'Q&A': 'content',
  교육: 'edu',
  공고: 'context',
  고객센터: 'info',
};

// 여기 이 MENUS의 각 요소대비해서 MENU_PAGE의 개수와 key값이 안 맞아욥!
export const MENUS: string[] = ['정보나눔', 'Q&A', '교육', '공고', '고객센터'];

export const SUB_PAGE: { [key: string]: string } = {
  보육뉴스: 'news',
  자료방: 'data',
  자료공유: 'share',
  소통방: 'communication',
  교사방: 'teacher',
  교육일정: 'date',
  교육프로그램: 'program',
  채용공고: 'hire',
  공지사항: 'inquire',
  문의: 'notice',
  FAQ: 'Faq',
};
