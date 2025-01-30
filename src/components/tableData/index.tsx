"use client"
import styles from "./styles.module.scss"
import { DataContext } from "@/context"
import { useContext } from "react"
import { DefaultData } from "@/types/defaultData"

export const TableData: React.FC = () =>
{
  const { data } = useContext(DataContext)

  return (
    <div className={styles.tableData}>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th></th>
              <th>First name</th>
              <th>Last name</th>
              <th>Participation</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 && (
              <>
                {data.map((item: DefaultData, key: number) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.participation}%</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      )}
    </div>
  )
}
