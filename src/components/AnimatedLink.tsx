import React from "react";

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, children }) => {
  return (
    <div
      className="
        relative
        text-white
        font-semibold
        after:absolute
        after:left-0
        after:bottom-0
        after:w-full
        after:h-0.5
        after:bg-white
        after:scale-x-0
        hover:after:scale-x-100
        after:transition-transform
        after:transform
        after:origin-bottom-left
        after:duration-300
      "
    >
      {children}
    </div>
  );
};

export default AnimatedLink;
