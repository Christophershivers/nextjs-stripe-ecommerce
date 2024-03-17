'use client'
import React from 'react'
import { Typography, Button } from '@material-tailwind/react'

function ImageComponentTwoHomePage() {
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-300 rounded-xl items-center place-items-center mt-6 overflow-hidden">
            <div className="p-6 lg:text-left text-center">
            <Typography
                variant="h6"
                className="uppercase font-bold text-gray-500"
            >
                UP TO 50%
            </Typography>
            <Typography
                variant="h1"
                color="blue-gray"
                className="my-4 max-w-lg lg:!text-6xl text-4xl !leading-snug"
            >
                Urban <br /> New Collection
            </Typography>
            <Typography className="mb-6 font-bold text-gray-500">
                Functional, fashionable, and now at up to 50% off!
            </Typography>
            <Button>explore now</Button>
            </div>
            <img src="https://www.material-tailwind.com/image/categories-6.png" alt="card-image" className="h-full w-full object-cover object-top"/>
        </div>
      </section>
    </div>
  )
}

export default ImageComponentTwoHomePage
