export function useMobileState() {
  const [isMobile, setIsMobile] = useState(false);

  /* this is another effect that handles resizing of the window to set the mobile styles for the subReddit
  component. I'm pretty sure it's only necessary in dev, but maybe for edge cases it's good? */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobile(false);
      } else if (window.innerWidth < 767) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}
