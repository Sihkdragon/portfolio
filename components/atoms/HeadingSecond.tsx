interface PropsHeadingSecond {
  children: React.ReactNode;
  color?: "dark" | "light" | "main" | "white";
  weight?: "extrabold" | "semibold" | "bold" | "medium" | "light" | "extralight";
  classname?: string;
}
const HeadingSecond = ({
  children,
  color = "dark",
  weight = "extrabold",
  classname = "",
}: PropsHeadingSecond) => {
  return (
    <h2 className={`text-lg md:text-3xl font-${weight} text-${color} ${classname}`}>
      {children}
    </h2>
  );
};

export default HeadingSecond;
