import Last5Post from "@/pages/Dashboard/Last5Post";
import { useGetPostQuery } from "@/redux/features/supplyPost/supplyPostApi";
import { TPost } from "@/types/postTypes";
import { ArcElement, Chart as ChartJs, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import Loading from "../../components/Loading";
ChartJs.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const { data: postData, isLoading } = useGetPostQuery(undefined);
  const postDataset = postData?.data?.map((post: TPost) => post.qty);

  const postLabels = postData?.data?.map((post: TPost) => post.category);

  const data = {
    labels: postLabels,
    datasets: [
      {
        data: postDataset,
        backgroundColor: [
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "cyan",
          "magenta",
          "pink",
          "brown",
          "teal",
          "lavender",
          "maroon",
          "navy",
          "olive",
          "indigo",
          "turquoise",
          "violet",
          "peach",
          "lime",
          "gold",
          "silver",
          "plum",
          "beige",
        ],
      },
    ],
  };
  const options = {};
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between gap-10">
      <Last5Post />
      <div className=" w-[100%] lg:w-[50%] h-[500px] mx-auto">
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default PieChart;
