import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 sm:px-12 py-20">
      {/* Hero Section */}
      <main className="text-center max-w-2xl flex flex-col items-center gap-6">
        <Image
          src="/logo.svg"
          alt="Linklyst Logo"
          width={80}
          height={80}
          className="dark:invert mb-4"
          priority
        />

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Linklyst
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
          A social way to organize your web world — beautifully.
        </p>

        <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl">
          Save the links you love, organize them visually, and discover what
          others are sharing. Turn your bookmarks into inspiration.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/signup"
            className="bg-foreground text-background font-medium rounded-full px-6 py-3 text-sm sm:text-base hover:opacity-90 transition"
          >
            Get Started
          </a>
          <a
            href="/explore"
            className="border border-foreground/20 hover:border-foreground/40 text-foreground font-medium rounded-full px-6 py-3 text-sm sm:text-base transition"
          >
            Explore Public Feed
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-sm text-muted-foreground">
        <p>
          Made with ❤️ by <span className="font-semibold">CodeThat</span>
        </p>
      </footer>
    </div>
  );
}
