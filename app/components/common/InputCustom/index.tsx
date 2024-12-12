import { Input } from '@/components/ui/input';
import { FocusEvent } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

export function InputText({
  type,
  placeholder,
  field,
}: {
  field?: ControllerRenderProps<any, string>,
  type: string;
  placeholder: string;
}) {

  const handleChange = (e: any) => {
    field?.onChange(e);
  };
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (e.target.value.trim() !== field?.value) field?.onChange(e.target.value.trim());

      field?.onBlur();
    };
  return <Input {...field} type={type} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} />;
}
