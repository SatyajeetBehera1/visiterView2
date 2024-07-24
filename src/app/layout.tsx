'use client';
import "globals.css";
import TopNavBar from "components/TopNavBar";
import { ButtonProvider } from "components/ButtonContext";
import Create from "page";

export const metadata = {
  title: "NovaZen",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ButtonProvider>
          <TopNavBar />
          <Create />
        </ButtonProvider>
      </body>
    </html>
  );
}
