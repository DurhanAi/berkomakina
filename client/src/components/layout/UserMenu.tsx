import { useState } from "react";
import { Link } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserMenu() {
  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+90 539 769 19 54"
            className="text-sm font-medium text-gray-700 hover:text-primary flex items-center"
          >
            <i className="ri-phone-line mr-1 text-primary"></i>
            +90 539 769 19 54
          </a>
          <a
            href="tel:+447732946723"
            className="text-sm font-medium text-gray-700 hover:text-primary flex items-center"
          >
            <i className="ri-phone-line mr-1 text-primary"></i>
            +44 7732 946 723
          </a>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary border border-gray-200 rounded-full px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <i className="ri-customer-service-2-line text-primary"></i>
              <span>İletişim</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="text-sm font-medium">İletişime Geçin</div>
              <div className="text-xs text-gray-500">
                Size nasıl yardımcı olabiliriz?
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="tel:+905397691954">
                <i className="ri-phone-line mr-2 text-primary"></i>
                +90 539 769 19 54
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="tel:+447732946723">
                <i className="ri-phone-line mr-2 text-primary"></i>
                +44 7732 946 723
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="mailto:info@berkomakina.com">
                <i className="ri-mail-line mr-2 text-primary"></i>
                info@berkomakina.com
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/callback">
                <i className="ri-customer-service-line mr-2 text-primary"></i>
                Sizi Arayalım
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/contact">
                <i className="ri-map-pin-line mr-2 text-primary"></i>
                Haritada Göster
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
