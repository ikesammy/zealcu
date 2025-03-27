// redirect.ts
export default function handler(req: Request): Response {
  // Perform the redirect to your target URL
  return Response.redirect('https://example.com', 301);
}
