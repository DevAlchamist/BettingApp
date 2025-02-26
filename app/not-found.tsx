import { Construction } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center py-20 w-full h-full">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
          <Construction className="w-10 h-10" />
          Oops! You’ve wandered into the void... 🚀
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This page is so lost, even GPS gave up! Maybe it eloped with another
          URL? 🤔 Try heading back before you get stuck in the 404 dimension! 🔄
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dafb7jd5n/image/upload/v1740547537/pavlm4kgz5ijh45hgopd.png"
        alt="Cloudinary Image"
        className="object-contain"
      />{" "}
    </div>
  );
};

export default page;
