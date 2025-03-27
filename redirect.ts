// redirect.ts
export default function handler(req: Request): Response {
  // Redirect any request to the specified target URL
  return Response.redirect('https://google.com', 301);
}
