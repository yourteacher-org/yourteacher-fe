const MOCKAG_SCHEDUL_DATA = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `2023년 보육교사 자격기준 설명회 ${i + 1}`,
  contents: [
    '보육교사 자격기준 세부사항 안내',
    '보육실습 기준 세부 사항 안내',
    '보육교사 국가자격증 단체신청 안내',
  ],
  applyStartDate: '2023-10-25',
  applyEndDate: '2023-11-15',
  eduStartDate: '2023-11-17',
  eduEndDate: '2023-12-20',
}));

export { MOCKAG_SCHEDUL_DATA };
