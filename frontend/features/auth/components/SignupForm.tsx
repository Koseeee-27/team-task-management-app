import { login, signup } from '@/features/auth/actions'

import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignupForm() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>サインアップフォーム</CardTitle>
        <CardDescription>アカウントを作成するための情報を入力してください。</CardDescription>
      </CardHeader>
      <CardContent>
        <form id='signup-form'>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor="email">メールアドレス:</Label>
              <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              autoComplete='email'
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor="password">パスワード:</Label>
              <Input 
              id="password" 
              name="password" 
              type="password" 
              required 
              autoComplete='current-password'
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        {/* <Button formAction={login} className="w-full">ログイン</Button> */}
        <Button formAction={signup} form='signup-form' className='w-full'>サインアップ</Button>
      </CardFooter>
    </Card>
  )
}