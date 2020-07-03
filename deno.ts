import { serve } from "https://deno.land/std@0.57.0/http/server.ts";

const app = serve({ port: 8000 });

let message: string;

message = 'Hello Deno on console...!';

console.log(message);

for await (const req of app) {
    req.respond({ body: "Hello deno World\n" });
}