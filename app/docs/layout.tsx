export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto w-full max-w-3xl px-5 py-12 sm:py-16'>
      {children}
    </div>
  );
}
