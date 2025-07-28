import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const SignupForm = () => {
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
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Eメール </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
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
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
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