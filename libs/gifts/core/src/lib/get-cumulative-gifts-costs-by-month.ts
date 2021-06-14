export const getCumulativeGiftsCostsByMonth = (
  giftsCostsByMonth: number[]
): number[] =>
  giftsCostsByMonth.reduce(
    (result, monthCosts, i) => {
      const previousMonthsCosts = i > 0 ? result[i - 1] : 0;
      result[i] = previousMonthsCosts + monthCosts;
      return result;
    },
    [] as number[]
  );
