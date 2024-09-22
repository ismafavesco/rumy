import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Loader from '@/components/shared/Loader';

// Define your validation schema using Zod
const LoginValidation = z.object({
  email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
  password: z.string().min(1, "Password is required"),
});

const LoginForm: React.FC = () => {
  const isLoading = false; // Replace with actual loading state logic

  const form = useForm<z.infer<typeof LoginValidation>>({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginValidation>) => {
    // Handle login logic here
    console.log('Login Values:', values);
  };

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        {/*LOGO*/}
       <img className="hidden" src="/assets/images/logo.svg" alt='logo' />
       {/*Create Account*/}
       <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
      Ready to find your next home parner?
       </h2>
       <p className="text-light-3 small-medium md:base-regular mt-2">
      To use the website, please enter your account details.
       </p>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="shad-button_primary">
            {isLoading ? <Loader /> : "Log in"}
          </Button>

          {/* Signup Link */}
          <p className="text-small-regular text-light text-center mt-2">
            Don't have an account?
            <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default LoginForm;
