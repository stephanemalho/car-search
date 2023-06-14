import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
