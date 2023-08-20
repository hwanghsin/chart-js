import { useState } from "react";

const Max = 100000;

const labels = ["3月", "4月", "5月", "6月", "7月"];

export const useGenerateData = () => {
  const [bar, setBar] = useState([56361, 71688, 65157, 91351, 60122]);

  const rnd = () => {
    const expense = Math.floor(Math.random() * Max);
    if (expense < 60000) return 60000;
    return expense;
  };

  const updateBarData = () => {
    setBar([rnd(), rnd(), rnd(), rnd(), rnd()]);
  };

  return {
    barData: {
      type: "bar",
      labels,
      datasets: [
        {
          label: "單月支出",
          data: bar,
          borderWidth: 1,
        },
      ],
    },
    updateBarData,
  };
};
