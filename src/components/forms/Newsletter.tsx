import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

type Inputs = z.infer<typeof schema>;

const Newsletter = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: Inputs) => {
        setLoading(true);
        try {
          const res = await fetch("/api/subscribe.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
      
          if (!res.ok) {
            throw new Error("Something went wrong");
          }
      
          const resData = await res.json();
      
          toast.success(resData.message);
        } catch (error) {
          console.error(error);
          toast.error("Failed to submit email");
        } finally {
          setLoading(false);
        }
      };

    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div
                    className="gap-16 justify-between items-center p-6 text-white bg-gray-900 rounded-lg dark:bg-white/[.075] lg:flex lg:gap-24 md:p-12">
                    <div className="w-full">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-primary">Sign Up For Our Newsletter</h2>
                        <p className="font-light text-white sm:text-xl">Stay up to date with deals/discounts, announcements, special events and more!</p>
                    </div>
                    <div className="mt-6 w-full lg:mt-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
                                <div className="relative w-full">
                                    <label htmlFor="member_email"
                                        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email
                                        address</label>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-950 dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Enter your email" type="email" {...register("email")}
                                        disabled={loading}></input>
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <button type="submit" disabled={loading}
                                        className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary border-primary hover:border-primary-700 sm:rounded-none sm:rounded-r-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{loading ? "Loading..." : "Subscribe"}</button>
                                </div>
                            </div>
                        </form>
                        <Toaster />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

