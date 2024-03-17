'use client'
import React from 'react'
import CardComponent from './CardComponent'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function CarouselComponent() {
  return (
    <div>
      <Carousel >
        <CarouselContent className="h-[800px]">
            <CarouselItem className="basis-1/3">
                <div className="h-[500px] w-[350px]">
                    <CardComponent/>
                </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
                <div className="h-[500px] w-[350px]">
                    <CardComponent/>
                </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
                <div className="h-[500px] w-[350px]">
                    <CardComponent/>
                </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
                <div className="h-[500px] w-[350px]">
                    <CardComponent/>
                </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
                <div className="h-[500px] w-[350px]">
                    <CardComponent/>
                </div>
            </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CarouselComponent
