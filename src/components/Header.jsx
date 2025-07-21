import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import GooeyNav from "../pages/GooeyNav";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
function Header() {
  return (
    <>
      <motion.div
        className="text-center mb-16 flex justify-between sticky top-0 z-50 px-4 bg-background/30 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link>
          <motion.img
            src="/generated-image.png"
            className="h-15 backdrop-brightness-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          ></motion.img>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/dashboard/:id"
                className={navigationMenuTriggerStyle()}
              >
                Dashboard
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About Us
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <motion.div>
          <SignedOut>
            <SignInButton
              className={buttonVariants()}
              style={{ cursor: "pointer" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </SignedOut>
          <SignedIn>
            <UserButton
              className={buttonVariants()}
              style={{ cursor: "pointer" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </SignedIn>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Header;
