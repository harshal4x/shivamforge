
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginForm() {
  const { login, isLoading } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLoginError(null);
    try {
      await login(data.username, data.password);
    } catch (error) {
      setLoginError('Invalid credentials. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your username" 
                    {...field} 
                    className="forge-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your password" 
                    type="password" 
                    {...field} 
                    className="forge-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {loginError && (
            <div className="text-red-500 text-sm">{loginError}</div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-forge text-white"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>

          {/* <div className="text-sm text-gray-500 text-center mt-4">
            <p>For demo purposes:</p>
            <p>Username: admin</p>
            <p>Password: admin123</p>
          </div> */}
        </form>
      </Form>
    </div>
  );
}
