import { UseFormReturn, FieldValues, Path } from "react-hook-form"
import styles from "./styles.module.scss"

interface InputProps<T extends FieldValues> {
  reactForm: UseFormReturn<T>
  type: "text" | "number"
  name: Path<T>
  label: string
}

export const Input = <T extends FieldValues>({ reactForm, type, name, label }: InputProps<T>) =>
{
  const error = reactForm.formState.errors[name as keyof T]

  return (
    <div className={styles.inputItem}>
      <div className={styles.input}>
        <input
          type={type}
          placeholder={label}
          {...reactForm.register(name, {
            required: "Campo Obrigatório",
          })}
        />
      </div>
      {error && <span className={styles.error}>{String(error.message)}</span>}
    </div>
  )
}
