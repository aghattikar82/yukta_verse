import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Note: In production (Vercel), this will be read-only and reset on boot.
// A real database (like PostgreSQL or Firebase) is required for production.
const dataFilePath = path.join(process.cwd(), 'data.json');

const defaultData = {
  announcement: {
    text: "🚀 Next Batch Starting Soon! Enroll early for a 10% discount.",
    isActive: true
  }
};

function readData() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const p = fs.readFileSync(dataFilePath, 'utf-8');
      return JSON.parse(p);
    }
  } catch (e) {
    console.error("Error reading data", e);
  }
  return defaultData;
}

function writeData(data: any) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("Error writing data", e);
  }
}

export async function GET() {
  const data = readData();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = readData();
    const updatedData = { ...data, ...body };
    writeData(updatedData);
    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to update data" }, { status: 500 });
  }
}
