import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ReactElement } from 'react';
import { InputText } from '../../InputCustom';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { X } from 'lucide-react';

export function SurveyDialog({ children, onClose }: { children: ReactElement; onClose: () => void }) {
  const method = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });
  const onSubmit = (data: any) => {
    // TODO
    console.log(data);
  };
  const { control, handleSubmit } = method;

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="tablet:max-w-full max-w-[calc(100%-32px)] px-[8px] tablet:px-[16px] tablet:max-w-[600px] tablet:px-[24px]">
        <DialogClose asChild>
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" onClick={onClose} />
            <span className="sr-only">Close</span>
          </div>
        </DialogClose>

        <DialogHeader>
          <DialogTitle>
            <h2 className="heading-2 mt-[24px]  mx-auto">{'Survey'}</h2>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="group-form mb-4">
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => {
                    return <InputText field={field} placeholder="Name" type="text" />;
                  }}
                ></Controller>
              </div>
              <div className="group-form mb-4">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => <InputText field={field} placeholder="Phone" type="text" />}
                ></Controller>
              </div>
              <div className="group-form">
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => <InputText field={field} placeholder="Email" type="text" />}
                ></Controller>
              </div>
              <Button variant={'default'} className="w-full tablet:w-fit px-10 py-2 h-[48px] mt-[20px]">
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}
