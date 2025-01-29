"use client"
import styles from "./styles.module.scss"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../input"
import { DefaultData } from "@/types/defaultData"
import { useContext } from "react"
import { DataContext } from "@/context"

export const FormHeader: React.FC = () =>
{
  const reactForm = useForm<DefaultData>()

  const { setData, data } = useContext(DataContext)

  const handleForm: SubmitHandler<DefaultData> = (dataForm) =>
  {
    dataForm.participation = Number(dataForm.participation)

    const newData = data

    newData.push(dataForm)

    setData([...newData])
  }

  return (
    <div className={styles.form}>
      <Input reactForm={reactForm} type={'text'} name={'firstName'} label={"First Name"}/>
      <Input reactForm={reactForm} type={'text'} name={'lastName'} label={"Last Name"}/>
      <Input reactForm={reactForm} type={'number'} name={'participation'} label={"Participation"}/>
      <button onClick={reactForm.handleSubmit(handleForm)}>Send</button>
    </div>
  )
}
