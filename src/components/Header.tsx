import React from 'react'
import { Menubar } from "@/components/ui/menubar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';

const Header = () => {
    return (
        <Menubar className='w-full bg-red-500 h-12'>
            <div>
                <Avatar>
                    <AvatarImage src="https://res.cloudinary.com/dailynarratives/image/upload/v1726640220/fxs3nia7vdopiqrbhlye.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className='text-zinc-50'>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Home
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    News
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"/"} legacyBehavior passHref >
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    About
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div>

            </div>
        </Menubar>
    )
}

export default Header