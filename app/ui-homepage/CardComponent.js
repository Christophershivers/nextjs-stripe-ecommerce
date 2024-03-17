'use client'
import React from 'react'
import { HeartIcon } from "@heroicons/react/24/outline";
import {
    Card,
    CardBody,
    Rating,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";

function CardComponent() {
  return (
    <div>
        <Card shadow={false} className="border border-gray-300 ">
            <CardBody>
                <img src="https://www.material-tailwind.com/image/product-3.png" alt="" className="min-w-[280px] w-full" />
                <div>
                <Typography variant="h5" className="mb-2 !text-gray-700">
                    $2.99
                </Typography>
                <Typography className="mb-2" color="blue-gray" variant="h4">
                    item
                </Typography>
                <div className="mb-2 flex gap-3">
                    <Rating value={4} className="text-amber-400" />
                    <Typography
                    variant="small"
                    className="font-medium text-gray-500"
                    >
                    4.7 (134 Reviews)
                    </Typography>
                </div>
                <Typography className="mb-5 text-base font-normal leading-[27px] !text-gray-500">
                    This is a description
                </Typography>
                <Typography className="mb-2" color="blue-gray" variant="h6">
                    Size
                </Typography>
                <div className="mb-6 flex items-center gap-4">
                    <Button
                    size="sm"
                    color="gray"
                    variant="outlined"
                    className="text-gray-300 border-gray-300"
                    >
                    XS
                    </Button>
                    <Button size="sm" color="gray" variant="outlined">
                    S
                    </Button>
                    <Button size="sm" color="blue-gray" variant="outlined">
                    M
                    </Button>
                    <Button size="sm" color="blue-gray" variant="outlined">
                    L
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                    <Button className="w-56">add to cart</Button>
                    <IconButton color="gray" variant="text" className="shrink-0">
                    <HeartIcon className="h-6 w-6" />
                    </IconButton>
                </div>
                </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default CardComponent
