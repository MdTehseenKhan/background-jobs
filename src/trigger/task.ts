import { schemaTask } from "@trigger.dev/sdk/v3";
import { z } from "zod";

export const myTask = schemaTask({
  id: "my-task",
  schema: z.object({
    name: z.string(),
    age: z.number(),
  }),
  run: async (payload) => {
    console.log(payload.name, payload.age);
  },
});