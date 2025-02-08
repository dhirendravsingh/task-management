"use client"

import React from 'react'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import Button from '../button/Button';
import Form from '../form/Form';
import { TaskProps } from './ChangeTask';
import Input from '../input/Input';
import * as actions from "@/actions"
const EditTask = ({task}: {task: TaskProps}) => {
    const [editing, setEditing] = useState(false);

    const handleEdit = () => { 
        if(task.isCompleted){ 
            alert("Task is completed, you can't edit it")
        }
        setEditing(!editing);
    }

    const handleSubmit = async () => {
        setEditing(false);
     }
  return (
    <div>
      <Button text={<MdEdit/>} onClick={handleEdit}/>
      {editing ? (
        <Form action={actions.editTask} onSubmit={handleSubmit}>
            <Input name="inputId" value={task.id} type="hidden"></Input>
            <div className='flex justify-center'>
            <Input name="newTitle"placeholder="Edit Todo" type="text"></Input>
            <Button type='submit' text="Save"></Button>
            </div>
        </Form>
      ): null}
    </div>
  )
}

export default EditTask
