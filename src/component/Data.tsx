export interface SubMenusType {
  [key: string]: string[];
}

export const SUB_MENUS: SubMenusType = {
  share: ['보육뉴스', '자료방'],
  qna: ['자료공유', '소통방', '교사방'],
  edu: ['교육일정', '교육프로그램'],
  notice: ['채용공고'],
  front: ['공지사항', '1:1문의', 'FAQ'],
};

export const MENU_PAGE: { [key: string]: string } = {
  정보나눔: 'share',
  'Q&A': 'qna',
  교육: 'edu',
  공고: 'notice',
  고객센터: 'front',
};

export const MENUS: string[] = ['정보나눔', 'Q&A', '교육', '공고', '고객센터'];

export const SUB_PAGE: { [key: string]: string } = {
  보육뉴스: 'news',
  자료방: 'collection',
  자료공유: 'sharing',
  소통방: 'communication',
  교사방: 'teacher',
  교육일정: 'date',
  교육프로그램: 'program',
  채용공고: 'hire',
  공지사항: 'notify',
  '1:1문의': 'inquiry',
  FAQ: 'faq',
};
