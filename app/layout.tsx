import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car search",
  description: "Découvrez notre sélection de véhicules et trouvez celui qui vous convient le mieux.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body cz-shortcut-listen="value" className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
