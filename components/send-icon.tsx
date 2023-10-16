"use client";

import { SendIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const TelegramIcon = (className: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && <SendIcon className="text-blue-500 " />;
};

export default TelegramIcon;
