import { cn } from "@/lib/utils";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
type TFormInputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number;
  rows?: number;
};
const FormInput: FC<TFormInputProps> = ({
  name,
  type,
  label,
  placeholder,
  required = true,
  defaultValue,
  rows = 10,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block capitalize">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id=""
          rows={rows}
          defaultValue={defaultValue}
          className="input text-black dark:text-slate-100 bg-white dark:bg-slate-800"
          {...register(name, { required: required })}
        ></textarea>
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          className={cn(
            "input file:bg-primaryColor file:border-none file:text-white text-black dark:text-slate-100 bg-white dark:bg-slate-800 file:rounded-md",
            errors[name]?.type === "required" &&
              "border-rose-500    focus:ring-rose-500"
          )}
          placeholder={placeholder}
          {...register(name, { required: required })}
        />
      )}
      {errors[name]?.type === "required" && (
        <p className="text-sm text-rose-500 ">{label} is required</p>
      )}
    </div>
  );
};

export default FormInput;
