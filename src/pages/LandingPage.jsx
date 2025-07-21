import React from "react";
import { ArrowDown, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Features } from "../components/Features";
import ModelViewer from "../components/ModelViewer";

function LandingPage() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        GraphCraft
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex flex-col items-center justify-center w-[600px]"
      >
        <h1 className="space-grotesk text-center">
          Transform your spreadsheets into stunning visualizations and seamlessly convert between file formats with professional-grade precision.
        </h1>
      </motion.div>

      <div className="flex gap-5 mt-5">
        <motion.button
          whileHover={{ scale: 1.07, filter: "brightness(1.07)" }}
          whileTap={{ scale: 0.97 }}
          className="gap-2 text-lg px-3 py-2 bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-1 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm hover:cursor-pointer flex items-center rounded-md font-medium"
          onClick={scrollToFeatures}
        >
          <BarChart3 className="mr-2 h-5 w-5" />
          Explore Features
        </motion.button>

        <SignedOut>
          <motion.div
            whileHover={{ scale: 1.07, filter: "brightness(1.07)" }}
            whileTap={{ scale: 0.97 }}
          >
            <SignUpButton className="text-lg px-3 py-1.5 rounded-lg text-black font-medium bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm hover:cursor-pointer" />
          </motion.div>
        </SignedOut>
      </div>

      <div className="flex justify-around gap-14 mt-10 w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl font-bold bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent px-7 py-3 border-2 border-white md:border-border/100 rounded-md"
        >
          Multiple <br /> Charts
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-2 border-white md:border-2 md:border-border/100 rounded-md py-3 px-7"
        >
          <h2 className="font-bold text-2xl bg-gradient-to-r from-primary via-chart-4 to-chart-5 bg-clip-text text-transparent ">
            100%
          </h2>
          <div className="font-light ">Secure Processing</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-2 border-white md:border-2 md:border-border/100 rounded-md py-3 px-7"
        >
          <h1 className="font-bold text-2xl bg-gradient-to-r from-primary via-chart-2 to-chart-5 bg-clip-text text-transparent shadows-into-light-regular">
            1-Click
          </h1>
          <div className="font-light ">Download</div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="cursor-pointer mt-8"
        onClick={scrollToFeatures}
      >
        <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
      </motion.div>

      <Features />

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        whileHover={{ scale: 1.03, boxShadow: "0 6px 50px #00c8c824" }}
        style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
      >
        <ModelViewer
          url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
           minHeight={250}
    maxWidth="100%"
    fadeIn
        />
      </motion.div> */}
    </div>
  );
}

export default LandingPage;
