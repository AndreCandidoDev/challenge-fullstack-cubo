"use client"

import { useContext } from "react"
import { Graph } from "../graph"
import { TableData } from "../tableData"
import styles from "./styles.module.scss"
import { DataContext } from "@/context"

export const Dashboard: React.FC = () =>
{
  const { data } = useContext(DataContext)

  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <div className={styles.infosText}>
          <h1>DATA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          {data.length === 0 && (
            <div className={styles.noData}>
              <h3>Insira as Informações acima p/ visualizar</h3>
            </div>
          )}
        </div>
        <div className={styles.infos}>
          <TableData/>
          <Graph/>
        </div>
      </div>
    </div>
  )
}
