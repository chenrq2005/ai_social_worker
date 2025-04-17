"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { GithubIcon, AppLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";
import { useAuth } from "@/app/auth/AuthContext";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link aria-label="Home" href="/">
          <AppLogo />
        </Link>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
            AI-powered Social Worker For Cancer Patients
          </p>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="flex flex-row items-center gap-4">
          {/* <Link
            isExternal
            color="foreground"
            href="https://labs.heygen.com/interactive-avatar"
          >
            Avatars
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://docs.heygen.com/reference/list-voices-v2"
          >
            Voices
          </Link> */}

          <Link
            isExternal
            aria-label="Github"
            href="https://github.com/chenrq2005/heygen_social_worker"
            className="flex flex-row justify-center gap-1 text-foreground"
          >
            <GithubIcon className="text-default-500" />
            Github Repo
          </Link>
          <ThemeSwitch />
          {isAuthenticated && (
            <Button
              color="danger"
              variant="light"
              size="md"
              onClick={logout}
              className="text-base font-medium"
            >
              Logout
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
