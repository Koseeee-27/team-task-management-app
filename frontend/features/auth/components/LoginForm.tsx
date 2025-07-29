'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client' // 以前作成したSupabaseクライアント
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const LoginForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)


  // フォームが送信されたときの処理
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const supabase = createClient()

    // SupabaseのsignInWithPassword関数を呼び出す
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      // エラーがあればメッセージを表示
      setError('メールアドレスまたはパスワードが正しくありません。')
      console.error(error)
    } else {
      // ログイン成功後、ダッシュボードに移動
      router.push('/dashboard')
      // ページをリフレッシュしてサーバー側の認証状態を更新
      router.refresh()
    }
  }


  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>ログインフォーム</CardTitle>
        <CardDescription>
          ログインしてください
        </CardDescription>
        {/* ↓ログインフォームのときはたぶんいる */}
        <CardAction>
              <Button variant="link"> アカウント作成がまだの方はこちら</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form id='signup-form' onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Eメール </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="m@example.com"
                required
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">パスワード</Label>
                {/* ↓パスワードを忘れた方はこちらのやつ */}
                {/* <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a> */}
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                required
                autoComplete='new-password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" form='signup-form' className="w-full">
          ログイン
        </Button>
        <Button variant="outline" className="w-full">
          Googleでログイン
        </Button>
      </CardFooter>
    </Card>
  )
}

export default LoginForm