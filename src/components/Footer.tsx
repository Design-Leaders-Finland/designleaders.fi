const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto text-center text-foreground">
        <p>
          © {new Date().getFullYear()} Design Leaders Finland. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
