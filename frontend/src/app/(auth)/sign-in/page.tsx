"use client"

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUserSchema } from '@/types/schema';
import { TLoginUser } from '@/types/type';
import { useLoginUser } from '@/services/mutation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const SignIn = () => {
  const login = useLoginUser();
  const form = useForm<TLoginUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit: SubmitHandler<TLoginUser> = (data) => {
    login.mutate(data);
  };

  return (
    <Form {...form}>

    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormItem>
        <Label htmlFor="email">Email</Label>
        <FormControl>
          <Input id="email" {...form.register('email')} />
        </FormControl>
        <FormMessage>{form.formState.errors.email?.message}</FormMessage>
      </FormItem>

      <FormItem>
        <Label htmlFor="password">Password</Label>
        <FormControl>
          <Input id="password" type="password" {...form.register('password')} />
        </FormControl>
        <FormMessage>{form.formState.errors.password?.message}</FormMessage>
      </FormItem>

      <button type="submit">Sign In</button>
    </form>
    </Form>
  );
};

export default SignIn;
