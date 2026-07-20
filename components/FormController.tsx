import { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormControllerPropsType<T extends FieldValues>
  extends PropsWithChildren {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}

const FormController = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
}: FormControllerPropsType<T>) => (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
);

export { FormController };
