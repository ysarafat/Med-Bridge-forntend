import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type TFormWrapperProps = {
  children: ReactNode;
  className?: string;
  onSubmit: SubmitHandler<FieldValues>;
};
const FormWrapper: FC<TFormWrapperProps> = ({
  onSubmit,
  children,
  className,
}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={cn("", className)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormWrapper;
