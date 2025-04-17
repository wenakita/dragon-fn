import { Container, Grid, Box } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import HomeBanner from "./HomeBanner";

function HomeGrid() {
  return (
    <div className="mt-5 container ms-auto me-auto  text-white  p-4">
      <div className="grid grid-rows-1 ">
        <HomeBanner />
      </div>
      <div className="grid md:grid-flow-col  grid-rows-3 gap-4 border mt-2">
        <div className="row-span-3 border text-white col-span-2 p-2 rounded-md bg-stone-900">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 5, label: "Jackpot" },
                  { id: 1, value: 3, label: "Liquidity" },
                  { id: 2, value: 1, label: "Marketing" },
                  { id: 3, value: 1, label: "Development" },
                ],
                arcLabel: (item) => `${item.value}%`, // or any label
              },
            ]}
            width={400}
            height={200}
            className="text-white"
          />
        </div>
        <div className="col-span-2 border ...">02</div>
        <div className="col-span-2 row-span-2 border ...">03</div>
      </div>
    </div>
  );
}

{
  /* <h3 className="text-white text-bold text-xs md:text-[17px] font-bold flex align-text-bottom">
Win big with DRAGON — a deflationary token powered by a verifiable
lottery, jackpot rewards up to 69%, and bulletproof security with
no minting or blacklist functions.
</h3> */
}

export default HomeGrid;
