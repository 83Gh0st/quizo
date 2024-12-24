import { type User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { type AvatarProps } from "@radix-ui/react-avatar";

interface Props extends AvatarProps {
  user: Pick<User, "name" | "image">;
}

const UserAvatar = ({ user, ...props }: Props) => {
  const getInitials = (name: string | undefined) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    return nameParts
      .map((part) => part.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2); // Get first 2 initials, e.g., "John Doe" → "JD"
  };

  return (
    <Avatar {...props}>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={user.image}
            alt="profile picture"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
          {/* Display initials as fallback */}
          {user.name ? getInitials(user.name) : "?"}
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
