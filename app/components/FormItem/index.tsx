import { ErrorMessage } from "@hookform/error-message";
import cx from "classnames";
import {
  Children,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  memo,
} from "react";
import { Controller, useFormContext } from "react-hook-form";

type props = {
  label: string | ReactElement;
  name: string;
  placeholder: string;
  required?: boolean;
  children: ReactNode;
};
const FormItem: FC<PropsWithChildren<props>> = ({
  name,
  label,
  required,
  children,
  placeholder,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control">
      {label && (
        <div className={cx("label")}>
          {label}
          {required ? <span className="color-sixth"> *</span> : ""}
        </div>
      )}

      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // Element is HTML
          if (typeof child?.type === "string") return child;

          // Element is React Element
          return (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                return cloneElement<any>(child, {
                  field,
                  ...props,
                });
              }}
            />
          );
        }
        return null;
      })}

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <div className={cx("error-text")}>{message}</div>
        )}
      />
    </div>
  );
};

export default memo(FormItem);
