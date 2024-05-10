export function GET(request) {
    console.log(request);

    // return Response.json({message: 'Hello, Next.js!'});
    return new Response('Hello, Next.js!');
}