import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LogoutButton from "./LogoutButton";

interface UserDropdownProps {
  user: {
    name?: string;
    image?: string;
    role?: string;
  };
}

function UserDropdown({ user }: UserDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { icon: User, label: "My Profile", href: "/profile" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    ...(user.role === "ADMIN" ? [{ icon: Code, label: "Add Problem", href: "/add-problem" }] : []),
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        className="flex items-center gap-2 p-1 rounded-full cursor-pointer bg-base-200 hover:bg-base-300 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
      >
        <div className="avatar">
          <div className="w-8 lg:w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
            <img
              src={user.image || "https://avatar.iran.liara.run/public/boy"}
              alt="User Avatar"
              className="object-cover"
            />
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-base-content/60" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 top-full mt-2 w-56 bg-base-100 rounded-2xl shadow-xl border border-base-300/20 backdrop-blur-xl z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* User Info */}
            <div className="p-4 border-b border-base-300/20">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img
                      src={user.image || "https://avatar.iran.liara.run/public/boy"}
                      alt="User Avatar"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-base-content">{user.name}</p>
                  <p className="text-sm text-base-content/60 capitalize">{user.role?.toLowerCase()}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm font-medium",
                      "hover:bg-primary hover:text-primary-content rounded-2xl transition-colors duration-200",
                      "group"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Logout Button */}
              <motion.div
                className="border-t border-base-300/20 mt-2 pt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
              >
                <LogoutButton className="flex items-center gap-3 px-4 py-3 text-sm font-medium w-full hover:bg-primary/20 hover:text-error-content transition-colors duration-200 group">
                  <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  Logout
                </LogoutButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default UserDropdown;