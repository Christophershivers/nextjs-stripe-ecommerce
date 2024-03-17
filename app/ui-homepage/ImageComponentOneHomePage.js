'use client'
import React from 'react'
import { Typography, Button } from '@material-tailwind/react'

function ImageComponentOneHomePage() {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 border border-gray-300 rounded-xl items-center mt-6 overflow-hidden">
            <div className="lg:row-auto row-start-2">
            <img src="https://www.material-tailwind.com/image/categories-5.svg" alt="card-image" className="h-full w-full object-cover object-top"/>
            </div>
            <div className="p-6 lg:text-left text-center">
            <Typography
                variant="h6"
                className="uppercase font-bold text-gray-500"
            >
                UP TO 70%
            </Typography>
            <Typography
                variant="h1"
                color="blue-gray"
                className="my-4 lg:mx-0 mx-auto max-w-lg lg:!text-6xl text-4xl !leading-snug"
            >
                Formal and <br /> Elegance Series
            </Typography>
            <Typography className="mb-6 font-bold text-gray-500">
                From sleek denim to cozy jackets, find your perfect city look
            </Typography>
            <Button>shop now</Button>
            </div>
        </div>
    </section>
  )
}

export default ImageComponentOneHomePage
