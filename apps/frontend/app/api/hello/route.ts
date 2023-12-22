import { Client } from "@temporalio/client";

export async function GET(request: Request) {
  new Client();
  return new Response('Hello, from API!');
}
