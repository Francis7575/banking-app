
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
    {children}
    <div className="auth-asset">
      <div>
        <img
          src="/icons/auth-image.svg"
          alt="Auth image"
          className="rounded-l-xl w-[500px] h-[500px]"
        />
      </div>
    </div>
  </main>
  );
}
