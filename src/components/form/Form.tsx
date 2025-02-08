"use client"

import React from 'react'
import { useRef } from 'react';

interface FormProps {
  children: React.ReactNode;
  action: (formData: FormData)=> void;
  onSubmit?: ()=> void;
  className?: string;
}

const Form = ({children,action, onSubmit, className }: FormProps) => {
    const ref = useRef<HTMLFormElement>(null);
  return (
   <form action={async (formData)=>{
    await action(formData);
    ref.current?.reset();
   }} onSubmit={onSubmit} className={className} ref={ref}>{children}</form>
      
    
  )
}

export default Form
