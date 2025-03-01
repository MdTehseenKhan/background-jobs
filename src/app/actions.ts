'use server'

import { myTask } from "@/trigger/task";
import { inngest } from '@/inngest/client';

export async function sendInngestEvent() {
  await inngest.send({
    name: 'test/hello.world',
    data: {
      email: 'test@test.com',
    },
  });
}


export async function triggerHelloWorld() {  
  const handle = await myTask.trigger({ name: "Alice", age: 30 }); // this will throw an error

  //You can use the handle to check the status of the task, cancel and retry it.
  console.log('Task is running with handle', handle.id);
}
