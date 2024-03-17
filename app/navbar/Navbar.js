import React from "react";
import { Button } from "@/components/ui/button"
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    Card,
  } from "@material-tailwind/react";

function NavbarComponent() {
    const navigationList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography color="blue-gray" as="li" variant="small" className="p-1 font-normal">Home</Typography>
            <Typography color="blue-gray" as="li" variant="small" className="p-1 font-normal">About</Typography>
        </ul>
    )
  return (
        <div className="">
            <Navbar className=" h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex justify-between container">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold">
                            Style<span className="text-primary">Vista</span>
                        </Typography>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navigationList}</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <Button  size="sm" className="hidden lg:inline-block"><span>Sign Up</span></Button>
                        <Button variant="secondary" size="sm" className="hidden lg:inline-block"><span>Log In</span></Button>
                    </div>
                </div>
                
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
