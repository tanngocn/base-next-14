import type { ChangeEvent, FC, FocusEvent } from "react";
import type { ControllerRenderProps } from "react-hook-form";
import cx from "classnames";
import { Input, InputProps } from "@nextui-org/react";

type ITextInput = {
  field?: ControllerRenderProps<any, string>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
};

const TextInput: FC<InputProps & ITextInput> = ({
  field,
  onChange,
  onBlur,
  disabled,
  className,
  maxLength = 255,
  ...props
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    field?.onChange(e);
    if (onChange) onChange(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement> | any) => {
    if (e.target.value.trim() !== field?.value)
      field?.onChange(e.target.value.trim());

    field?.onBlur();
    if (onBlur) onBlur(e);
  };

  return (
    <Input
      {...field}
      maxLength={maxLength}
      onChange={handleChange}
      onBlur={handleBlur}
      {...props}
      disabled={disabled}
      className={cx(className, {
        disabled,
      })}
    />
  );
};

export default TextInput;
