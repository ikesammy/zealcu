// redirect.ts
import { serve } from "https://deno.land/std/http/server.ts";

const redirectUrl = "https://verft.top/ss/arv"; // URL you want to redirect to

// Handle requests and redirect to the specified URL
serve(() => new Response(null, { status: 302, headers: { "Location": redirectUrl } }));
