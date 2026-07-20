"use client";
import type { JSX } from "react";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Input } from "./Input";

interface InputControllerProps extends React.ComponentProps<"input"> {
  name: string;
  rules?: object;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: ReactNode;
  onChangeHandler?: (value: string) => string;
}

export const InputController = (props: InputControllerProps): JSX.Element => {
  const {
    name,
    rules,
    defaultValue,
    onBlur: onBlurProps,
    placeholder,
    errorMessage,
    onChangeHandler = (value) => value,
    ...rest
  } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onBlur, onChange, value },
        fieldState: { error },
      }) => (
        <div className="flex column w-full">
          <Input
            onChange={(e) => onChange(onChangeHandler(e.target.value))}
            value={value}
            onBlur={(e) => {
              onBlur();
              onBlurProps?.(e);
            }}
            placeholder={placeholder}
            {...rest}
          />
          {error &&
            (errorMessage || (
              <div className="flex items-center color-red">
                {error ? errorMessage || error?.message : ""}
              </div>
            ))}
        </div>
      )}
    />
  );
};
