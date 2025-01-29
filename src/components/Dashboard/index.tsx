import { Graph } from "../graph"
import { TableData } from "../tableData"
import styles from "./styles.module.scss"

export const Dashboard: React.FC = () =>
{
  return (
    <div className={styles.dashboard}>
      <div className={styles.content}>
        <div className={styles.infosText}>
          <h1>DATA</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className={styles.infos}>
          <TableData/>
          <Graph/>
        </div>
      </div>
    </div>
  )
}
