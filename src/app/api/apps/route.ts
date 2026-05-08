import { NextResponse } from 'next/server';
import { scrapeDeveloperData } from '@/services/scraper';

export async function GET() {
  try {
    const data = await scrapeDeveloperData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
