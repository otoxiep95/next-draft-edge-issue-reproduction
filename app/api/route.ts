import { draftMode } from "next/headers";
import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-dynamic";

/**
 * Activates the Next.JS `draftMode` by setting the `__prerender_bypass` cookie and
 * redirects the user to the requested URL.
 *
 * @see http://localhost:3000/api/
 */
export async function GET(request: NextRequest) {
 

    draftMode().enable();

    return NextResponse.json({ message: "ok" });
 
}
