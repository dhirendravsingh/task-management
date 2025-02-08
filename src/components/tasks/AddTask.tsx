import React from 'react'
import Form from '../form/Form';
import Input from '../input/Input';
import Button from '../button/Button';
import * as actions from '@/actions';
const AddTask = () => {
  return (
    <div>
      <Form action={actions.addTask}>
        <div className='flex gap-4 items-center'>
            <Input name='input' type='text' placeholder='Add a task'/>
            <Button text='Add' type='submit' bgColor='bg-blue-600'/>
        </div>
      </Form>
    </div>
  )
}

export default AddTask
