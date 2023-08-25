import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server'
 
export async function GET() {
  // const res = await fetch('https://data.mongodb-api.com/...', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY,
  //   },
  // })
  // const data = await res.json()
  const data = {poop:'plop'}
 
  return NextResponse.json({ data })
}

