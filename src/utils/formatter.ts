const numberFormatter = new Intl.NumberFormat('ko-kr', {
  notation: 'standard',
}).format;

export { numberFormatter };
