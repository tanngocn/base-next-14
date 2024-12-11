import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import CardFooterImg from '@/assets/svg/card-footer.svg';
type CardProps = React.ComponentProps<typeof Card>;

export function CardCustom({
  className,
  ...props
}: CardProps & { title: string; image?: StaticImageData; description: string; classDescription?: String }) {
  return (
    <Card className={cn(className)} {...props}>
      <div className="card-heading py-[16px] flex flex-col items-center  gap-4">
        {props?.image && <Image src={props.image} alt="image-card" />}
        <h3 className="content-16 font-[600]">{props?.title}</h3>
      </div>
      <CardContent className="grid gap-4">
        <div className={cn(' flex items-center text-center px-4 text-text content-16', props?.classDescription)}>
          {props.description}
        </div>
      </CardContent>

      <CardFooter>
        <Image src={CardFooterImg} alt="card-footer" />
      </CardFooter>
    </Card>
  );
}
