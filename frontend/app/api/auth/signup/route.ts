import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // パスワードをハッシュ化（暗号化）する
    const hashedPassword = await bcrypt.hash(password, 10);

    // データベースに新しいユーザーを作成
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
  }
}