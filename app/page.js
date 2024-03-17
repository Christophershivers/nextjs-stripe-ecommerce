import Image from "next/image";
import CaptionComponent from "./ui-homepage/CaptionComponent";
import ImageComponentOneHomePage from "./ui-homepage/ImageComponentOneHomePage";
import ImageComponentTwoHomePage from "./ui-homepage/ImageComponentTwoHomePage";
import CarouselComponent from "./ui-homepage/Carousel";

export default function Home() {
  return (
    <main className="container flex flex-col gap-y-5">
      <CaptionComponent/>
      <ImageComponentOneHomePage/>
      <ImageComponentTwoHomePage/>
      <CarouselComponent/>
      
    </main>
  );
}
