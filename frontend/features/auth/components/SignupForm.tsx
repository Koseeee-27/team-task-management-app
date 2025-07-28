'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client' // 作成したクライアントをインポート

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const SignupForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hello');

    setError(null)
    const supabase = createClient()

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      // Supabaseのデフォルト設定では確認メールが飛びます。
      // 確認が完了するとログイン状態になります。
      alert('確認メールを送信しました。メールを確認してください。')
      router.push('/login')
    }
  }


  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>新規登録フォーム</CardTitle>
        <CardDescription>
          アカウントを作成してください。
        </CardDescription>
        {/* ↓ログインフォームのときはたぶんいる */}
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form id='signup-form' onSubmit={handleSignUp}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Eメール </Label>
              <Input
                id="email"
                type="email"
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
          新規登録
        </Button>
        <Button variant="outline" className="w-full">
          Googleで登録
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SignupForm