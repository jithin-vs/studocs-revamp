import Header from "@/components/layout/header";

export default function WithoutHeaderLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <Header />
          {children}
        </>
    );
  }