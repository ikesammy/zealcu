// redirect.ts
export default function handler(req: Request): Response {
  // Perform the redirect to your target URL
  return Response.redirect('https://your-target-url.com', 301);
}
