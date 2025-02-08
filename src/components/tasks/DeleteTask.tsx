import React from 'react'
import { TaskProps } from './ChangeTask'
import { FaTrash } from 'react-icons/fa'
import Form from '../form/Form'
import Button from '../button/Button'
import Input from '../input/Input'
import * as actions from "@/actions"


const DeleteTask = (task : {task : TaskProps}) => {
        
  return (
    <Form action={actions.deleteTask}>
            <Input name="inputId" value={task.task.id} type="hidden"></Input>
            <Button type='submit' actionButton bgColor="bg-red-400" text={<FaTrash/>}></Button>
    </Form>
  )
}   

export default DeleteTask
