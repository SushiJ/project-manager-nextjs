import clsx from "clsx";

interface CardProps {
  className?: string;
  children: any;
}
const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        "rounded-2xl gap-2 px-10 py-4 drop-shadow-xl bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
