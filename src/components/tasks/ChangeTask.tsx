import React from 'react'
import Form from '../form/Form';
import Input from '../input/Input';
import Button from '../button/Button';
import * as actions from '@/actions';
import { FaCheck } from 'react-icons/fa';

export interface TaskProps{
    id: string;
    title?: string;
    isCompleted: boolean;
    createdAt?: Date;
}

const ChangeTask = ({task}: {task: TaskProps}) => {
  return (
    <Form action={actions.changeTask}>
        <Input name='inputId' type='hidden' value={task.id} />
        <Button text={<FaCheck/>} type='submit' actionButton bgColor={task.isCompleted ? 'bg-green-400' : 'bg-blue-500'}/>
    </Form>
  )
}

export default ChangeTask
