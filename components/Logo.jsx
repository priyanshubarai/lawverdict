"use client";
import Image from "next/image";

const Logo = ({ testId }) => (
  <figure title="Your Brand" data-testid={testId} className="flex items-center">
    <Image
      src="/logo.avif"    
      alt="Your Company Logo"
      width={40}          
      height={40}
      priority         
    />
  </figure>
);

export default Logo;
