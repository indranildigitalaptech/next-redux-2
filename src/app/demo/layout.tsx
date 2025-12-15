
import StoreProvider from "@/lib/StoreProvider";


export default function DemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreProvider>{children}</StoreProvider>
    </div>
  );
}
