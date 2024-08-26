export interface SubMenusType {
  [key: string]: string[];
}

export const SUB_MENUS: SubMenusType = {
  about: ['보육뉴스', '자료방'],
  content: ['자료공유', '소통방', '교사방'],
  edu: ['교육일정', '교육프로그램'],
  context: ['채용 공고'],
  info: ['공지사항', '1:1문의', 'FAQ'],
};

export const MENU_PAGE: { [key: string]: string } = {
  정보나눔: 'about',
  'Q&A': 'content',
  교육: 'edu',
  공고: 'context',
  고객센터: 'info',
};

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
