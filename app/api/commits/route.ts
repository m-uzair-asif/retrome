import { fetchCommitsByDate } from "@/utils/githubCommits";
import { NextResponse } from "next/server";

export async function GET() {
    const commits = await fetchCommitsByDate();
    return NextResponse.json(commits);
}
