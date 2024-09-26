import { useState } from "react";

export default function NotificationBell() {
  const [notifications, setNotifications] = useState(3); // Par exemple, 3 notifications

  return (
    <div className="relative inline-block">
      <div className="text-2xl cursor-pointer relative">
        🔔
        {notifications > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {notifications}
          </span>
        )}
      </div>
    </div>
  );
}
