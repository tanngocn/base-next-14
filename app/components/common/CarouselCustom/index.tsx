import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardCustom } from "../CardCustom";
import Star from "@/assets/svg/review-2.svg";
import { Button } from "../../ui/button";
import { useRef } from "react";
function SlideCustom() {
  const slideRef = useRef<Slider>(null);
  const settings = {
    centerMode: true,
    className: "center",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 1000,
  };
  const handleNextSlide = () => {
    if (!slideRef.current) return;
    slideRef.current.slickNext();
  };

  const handlePrevSlide = () => {
    if (!slideRef.current) return;
    slideRef.current.slickPrev();
  };
  return (
    <div className="slider-container">
      <Slider {...settings} ref={slideRef}>
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
        <CardCustom
          image={Star}
          title="WORKS LIKE A CHARM"
          classDescription={" line-clamp-3 "}
          className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
          description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
        />
      </Slider>

      <div className="flex items-center justify-center gap-10 mt-[24px]">
        <Button
          className="prev rounded-full size-[50px] content-16 bg-blue flex items-center justify-center"
          onClick={handlePrevSlide}
        >
          {"<"}
        </Button>
        <Button
          className="next rounded-full size-[50px] content-16 bg-blue flex items-center justify-center"
          onClick={handleNextSlide}
        >
          {">"}
        </Button>
      </div>

      <div className="flex items-center mt-[16px]">
        <Button
          variant={"default"}
          className="uppercase px-8 py-4 w-full tablet:w-fit !mx-[auto] h-[48px]"
        >
          Shop nori press
        </Button>
      </div>
    </div>
  );
}
export default SlideCustom;
