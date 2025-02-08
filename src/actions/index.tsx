"use server"

import prisma from "@/utils/prisma"
import { revalidatePath } from "next/cache";


export async function addTask(formData: FormData){ 
    const input = formData.get("input") as string;
    if(!input.trim()) return;

    await prisma.task.create({ 
        data : {
            title: input,            
        }
    })

    revalidatePath("/")
}

export async function changeTask(formData: FormData){ 
    const inputId = formData.get("inputId") as string;
    const task = await prisma.task.findUnique({ where: { id: inputId } });

    const updateStatus = !task?.isCompleted;

    await prisma.task.update({ 
        where: { id: inputId },
        data: { isCompleted: updateStatus }
    })

    revalidatePath("/")
 }


 export async function editTask(formData: FormData){  
    const newTitle = formData.get("newTitle") as string;
    const inputId = formData.get("inputId") as string;

    await prisma.task.update({ 
        where: { id: inputId },
        data: { title: newTitle }
    })

    revalidatePath("/")
 }

 export async function deleteTask(formData: FormData){  
    const inputId = formData.get("inputId") as string;
    await prisma.task.delete({ where: { id: inputId } });
    revalidatePath("/")
 }
