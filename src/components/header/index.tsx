import { FormHeader } from "./components/formHeader"
import styles from "./styles.module.scss"

export const Header: React.FC = () =>
{
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <FormHeader/>
      </div>
    </div>
  )
}
