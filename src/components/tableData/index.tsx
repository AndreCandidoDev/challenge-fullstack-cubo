"use client"
import { DataContext } from "@/context"
import styles from "./styles.module.scss"
import { useContext, useEffect } from "react"
import { DefaultData } from "@/types/defaultData"

export const TableData: React.FC = () =>
{
  const { data } = useContext(DataContext)

  useEffect(() => { console.log("Aaaaa", data) }, [data])

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
                    <td>{item.participation}</td>
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
