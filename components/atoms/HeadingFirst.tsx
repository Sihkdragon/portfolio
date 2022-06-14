interface PropsHeadingFirst {
  children: React.ReactNode;
  color?: "dark" | "light" | "main";
  weight?: "extrabold" | "semibold";
  classname?: string;
}
const HeadingFirst = ({
  children,
  color = "dark",
  weight = "extrabold",
  classname = "",
}: PropsHeadingFirst) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl md:text-5xl font-${weight} text-${color}  ${classname}`}
    >
      {children}
    </h1>
  );
};

export default HeadingFirst;
