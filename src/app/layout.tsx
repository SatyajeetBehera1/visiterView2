
import "globals.css";
import TopNavBar from "components/TopNavBar";
import { ButtonProvider } from "components/ButtonContext";
import Create from "page";
import Head from "./Head";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <Head />
        <ButtonProvider>
          <TopNavBar />
          <Create />
        </ButtonProvider>
      </body>
    </html>
  );
}
