import AddTask from "@/components/tasks/AddTask";
import prisma from "@/utils/prisma";
import Task from "@/components/tasks/Task";

async function getTasks(){ 
  const data = await prisma.task.findMany({
    select : {
      id: true,
      title: true,
      isCompleted: true,
    }, 
      orderBy : {
        createdAt: "desc"   
    }
  })
  return data;
}

export default async function Home() {
  const tasks = await getTasks();

  return (
   <div className="w-screen py-20 flex justify-center items-center flex-col">
    <span className="text-4xl font-extrabold uppercase">Task Management</span>
    <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
      <span className="lowercase">w/</span>Server Actions
    </h1>
    <div className="flex justify-center flex-col items-center">
      <AddTask/>
      <div className="flex flex-col gap-5 items-center justify-center mt-10 w-screen">
        {tasks.map((task, index)=>(
          <div key={index} className="w-full">
          <Task task={task}/>
          </div>
        ))}
      </div>
    </div>
     </div>
         
  );
}
