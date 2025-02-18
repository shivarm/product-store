import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar min-h-[4rem] justify-between">
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl
               bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  PODUCTSTORE
                </span>
              </div>
            </Link>
          </div>
          {/*Todo: RIGHT ELEMENTS */}
        </div>
      </div>
    </div>
  );
};
