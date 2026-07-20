"use client";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import { FormController } from "@/components/FormController";
import { Input } from "@/components/Input";
import { InputController } from "@/components/InputController";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { useForm, SubmitHandler } from "react-hook-form";

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];
type Inputs = {
  example: string;
  exampleRequired: string;
  test111: string;
};

export default function Home() {
  const methods = useForm<Inputs>({ defaultValues: { test111: "" } });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing its name

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <FormController<Inputs> methods={methods} onSubmit={onSubmit}>
        {/* register your input into the hook by invoking the "register" function */}
        <Input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <Input {...register("exampleRequired", { required: true })} />
        <InputController name="test111" />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <Button type="submit">submit</Button>
      </FormController>
      {/* <Button variant="default">default</Button>
      <Input placeholder="destructive" />
      <Checkbox title="title" checked />
      select:{" "}
      <Select items={items} defaultValue={"Banana"}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}
    </div>
  );
}
