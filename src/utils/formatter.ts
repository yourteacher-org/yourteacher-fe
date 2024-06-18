const numberFormatter = new Intl.NumberFormat('ko-kr', {
  notation: 'standard',
}).format;

const makeDisplayFileName = (str: string, range: number) => {
  const forward = str.slice(0, range);
  const backward =
    str.length > range ? ` ... ${str.slice(str.length - 10)}` : '';

  return forward + backward;
};

export { numberFormatter, makeDisplayFileName };
