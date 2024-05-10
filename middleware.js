import { NextResponse } from "next/server";

export function middleware(req, res, next) {
    console.log(req);

    /* we can let or not user to go to any page or not */

    return NextResponse.next();
}

export const config = {
    /* only use middleware in this route */
    matcher: '/news',
}