import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Logo from "../svg/Logo";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email required.",
  }),
});

const Footer = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <footer className="px-[24px] py-[34px] bg-black text-white sm:py-[75px] sm:px-[42px] lg:px-[80px]">
      <div className="sm:flex sm:flex-wrap sm:mx-[-40px] sm:justify-between">
        <div className="sm:mb-[50px] sm:px-10 sm:flex-[1_1_50%] lg:flex-[0_1_375px]">
          <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em]">
            You are Apeftheias
          </h2>
          <p>
            Be the first to know about our latest products and deals, just for
            you!
          </p>
          <Form {...form}>
            <form className="mt-[18px]" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="h-[45px] text-[14px] px-[12px] py-[14px] bg-transparent border border-white rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-white/30"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="default" className="mt-5 hover:text-white">
                Subscribe
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-12 sm:mb-[50px] sm:px-10 sm:flex-[1_1_50%] sm:mt-0 lg:flex-[0_1_auto]">
          <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Customer care
          </h2>
          <ul className="flex flex-col gap-3">
            <li>About us</li>
            <li>FAQ</li>
            <li>Order Requests Form</li>
            <li>Store</li>
            <li>Serviceable Areas</li>
          </ul>
        </div>
        <div className="mt-12 sm:mb-[50px] sm:px-10 sm:flex-[1_1_50%] sm:mt-0 lg:flex-[0_1_auto]">
          <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Account
          </h2>
          <ul className="flex flex-col gap-3">
            <li>Account Login</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="mt-12 sm:mb-[50px] sm:px-10 sm:flex-[1_1_50%] sm:mt-0 lg:flex-[0_1_auto]">
          <h2 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Socials
          </h2>
          <ul className="flex flex-col gap-3">
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Viber</li>
            <li>YouTube</li>
            <li>Facebook</li>
            <li>Facebook Group</li>
          </ul>
        </div>
      </div>
      <div className="mt-[60px]">
        <div>
          <a href="/" className="flex items-center justify-center gap-1">
            <span className="text-sm">&copy;</span>
            <Logo fill="white" width="100" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
