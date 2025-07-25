import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
// JWTの秘密鍵。実際には.envファイルで管理してください。
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-key';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // メールアドレスでユーザーを検索
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // 入力されたパスワードとDBのハッシュ化されたパスワードを比較
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // パスワードが一致したら、JWT（デジタルトークン）を生成
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1h', // トークンの有効期限
    });

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 });
  }
}