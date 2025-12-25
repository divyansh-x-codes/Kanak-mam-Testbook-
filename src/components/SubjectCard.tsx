import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SubjectCardProps {
  title: string;
  titleHindi: string;
  icon: LucideIcon;
  color: string;
  description: string;
  chaptersCount: number;
  index: number;
  onClick?: () => void;
}

const SubjectCard = ({
  title,
  titleHindi,
  icon: Icon,
  color,
  description,
  chaptersCount,
  index,
  onClick,
}: SubjectCardProps) => {
  const colorVariants: Record<string, string> = {
    physics: "from-physics/20 to-physics/5 border-physics/30 hover:border-physics/60",
    chemistry: "from-chemistry/20 to-chemistry/5 border-chemistry/30 hover:border-chemistry/60",
    biology: "from-biology/20 to-biology/5 border-biology/30 hover:border-biology/60",
    pedagogy: "from-pedagogy/20 to-pedagogy/5 border-pedagogy/30 hover:border-pedagogy/60",
  };

  const iconColorVariants: Record<string, string> = {
    physics: "text-physics",
    chemistry: "text-chemistry",
    biology: "text-biology",
    pedagogy: "text-pedagogy",
  };

  const glowColorVariants: Record<string, string> = {
    physics: "group-hover:shadow-[0_20px_60px_-15px_hsl(200,90%,50%,0.3)]",
    chemistry: "group-hover:shadow-[0_20px_60px_-15px_hsl(280,70%,55%,0.3)]",
    biology: "group-hover:shadow-[0_20px_60px_-15px_hsl(150,70%,45%,0.3)]",
    pedagogy: "group-hover:shadow-[0_20px_60px_-15px_hsl(330,70%,55%,0.3)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <button
        onClick={onClick}
        className={cn(
          "w-full p-6 md:p-8 rounded-2xl border bg-gradient-to-br backdrop-blur-sm",
          "transition-all duration-500 ease-out cursor-pointer text-left",
          colorVariants[color],
          glowColorVariants[color]
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-xl bg-background/50 flex items-center justify-center mb-6",
            "group-hover:scale-110 transition-transform duration-300"
          )}
        >
          <Icon className={cn("w-7 h-7", iconColorVariants[color])} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-muted-foreground mb-4">{titleHindi}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6">{description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {chaptersCount} Chapters
          </span>
          <span
            className={cn(
              "text-sm font-medium",
              iconColorVariants[color],
              "group-hover:translate-x-1 transition-transform duration-300"
            )}
          >
            Explore →
          </span>
        </div>
      </button>
    </motion.div>
  );
};

export default SubjectCard;
