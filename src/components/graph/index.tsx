"use client"

import styles from "./styles.module.scss"
import { Pie } from 'react-chartjs-2';
import { useContext } from "react";
import { DataContext } from "@/context";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  PieController,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  PieController,
);

export const Graph: React.FC = () =>
{
  const { data } = useContext(DataContext)

  const buildNames = () =>
  {
    return data.map((item) => item.firstName + " " + item.lastName)
  }

  const buildData = () =>
  {
    return data.map((item) => item.participation)
  }

  const dataGraph = {
    labels: buildNames(),
    datasets: [
      {
        label: '% of participation',
        data: buildData(),
        backgroundColor: [
          'rgba(44, 150, 221)',
          'rgba(21, 186, 154)',
          'rgba(233, 75, 53)',
          'rgba(156, 85, 184)',
          'rgba(189, 195, 199)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 1,
      },
      {
        data: [],
      },
    ],
  };

  return (
    <div className={styles.graph}>
      {data.length > 0 && (
        <Pie
          data={dataGraph}
          options={{
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  boxWidth: 36,
                  font: {
                    size: 12
                  },
                },
                align: "center",
              }
            }
          }}
        />
      )}
    </div>
  )
}
