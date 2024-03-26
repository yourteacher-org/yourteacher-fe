const RenderItems = (
  activeItem: number,
  VISIBLE_ITEMS_COUNT: number,
  TOTAL_ITEMS: number,
) => {
  const calculatedStart = activeItem - Math.floor(VISIBLE_ITEMS_COUNT / 2);
  const startIndex =
    calculatedStart <= 0 ? calculatedStart + TOTAL_ITEMS : calculatedStart;

  const items = Array.from({ length: VISIBLE_ITEMS_COUNT }, (_, index) => {
    const calculatedItemNumber = ((startIndex + index - 1) % TOTAL_ITEMS) + 1;
    const itemNumber =
      calculatedItemNumber === 0 ? TOTAL_ITEMS : calculatedItemNumber;
    const isActive = activeItem === itemNumber;

    return {
      itemNumber,
      isActive,
    };
  });

  return items;
};

export default RenderItems;
