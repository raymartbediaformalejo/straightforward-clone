import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useLoginUser, useLogout } from "@/services/mutation";
import { loginUserSchema } from "@/types/schema";
import { TLoginUser } from "@/types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const SignIn = () => {
  const login = useLoginUser();
  const logout = useLogout();
  const form = useForm<TLoginUser>({
    resolver: zodResolver(loginUserSchema),
  });

  const handleLogin: SubmitHandler<TLoginUser> = async (data) =>
    login.mutate(data);

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleLogin)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e);
                form.trigger("email");
              };
              return (
                <FormItem className="flex flex-col">
                  <Label htmlFor="email">Email</Label>
                  <FormControl>
                    <>
                      <Input
                        id="email"
                        type="text"
                        onChange={changeHandler}
                        placeholder="Enter your email"
                        value={field.value}
                      />
                      <FormMessage />
                    </>
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                field.onChange(e);
                form.trigger("password");
              };
              return (
                <FormItem className="flex flex-col">
                  <Label htmlFor="password">Password</Label>
                  <FormControl>
                    <>
                      <Input
                        id="password"
                        type="text"
                        onChange={changeHandler}
                        placeholder="Enter your password"
                        value={field.value}
                      />
                      <FormMessage />
                    </>
                  </FormControl>
                </FormItem>
              );
            }}
          />

          <div className=" w-full  flex flex-col justify-center items-center mt-[60px]">
            <div className="flex flex-col justify-center gap-2 mx-auto">
              <button
                type="submit"
                className="w-[300px]  bg-blue-400 text-white py-2 rounded-lg"
              >
                Login
              </button>
              <button className="w-[300px]  border-[1px] border-[#00000080] text-gray-400 py-2 rounded-lg">
                Continue with Google
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="w-[300px]  bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>
            </div>

            <div className="mt-5">
              <p className=" text-[#00000080] text-sm">
                Don't have an account?{" "}
                <Link to="/sign-up" className=" text-primary-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
