"use client";
import { Button } from "@nextui-org/react";
import { FormProvider, useForm } from "react-hook-form";
import FormItem from "./components/FormItem";
import TextInput from "./components/FormItem/components/TextInput";

export default function Home() {
  const formContext = useForm({
    defaultValues: { name: "" },
  });
  const { reset, handleSubmit } = formContext;

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormProvider {...formContext}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem name="name" placeholder="Enter your name" label="name">
            <TextInput />
          </FormItem>

          <Button type="submit" variant="solid" color="primary">
            Submit
          </Button>
        </form>
      </FormProvider>
    </main>
  );
}
