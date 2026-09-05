import { cn } from "@/lib/cn";

/* ── Badge ── */
interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "muted" | "ember";
  className?: string;
}

export function Badge({ children, variant = "gold", className }: BadgeProps) {
  const variants = {
    gold: "bg-gold/15 text-gold border-gold/20",
    muted: "bg-white/5 text-sand border-white/10",
    ember: "bg-ember/15 text-ember border-ember/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-accent font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ── Tag ── */
interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block uppercase tracking-[0.2em] text-[0.65rem] font-accent font-medium text-taupe",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ── Divider ── */
interface DividerProps {
  ornamental?: boolean;
  className?: string;
}

export function Divider({ ornamental = false, className }: DividerProps) {
  if (ornamental) {
    return (
      <div className={cn("divider-ornament text-gold text-xs", className)}>
        ✦
      </div>
    );
  }
  return (
    <hr className={cn("border-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent", className)} />
  );
}

/* ── Skeleton ── */
interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("skeleton", className)} />;
}

/* ── Input ── */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={inputId} className="block text-xs text-sand mb-2 font-accent tracking-wide">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full bg-graphite border-2 rounded-lg py-3 px-4 text-cream",
          "focus:outline-none transition-colors duration-300",
          error ? "border-ember" : "border-white/10 focus:border-gold"
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-ember">{error}</p>}
    </div>
  );
}

/* ── TextArea ── */
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function TextArea({ label, error, className, id, ...props }: TextAreaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={textareaId} className="block text-xs text-sand mb-2 font-accent tracking-wide">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "w-full bg-graphite border-2 rounded-lg py-3 px-4 text-cream resize-none min-h-[120px]",
          "focus:outline-none transition-colors duration-300",
          error ? "border-ember" : "border-white/10 focus:border-gold"
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-ember">{error}</p>}
    </div>
  );
}

/* ── Select ── */
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("relative", className)}>
      <label htmlFor={selectId} className="block text-xs text-sand mb-2 font-accent tracking-wide">
        {label}
      </label>
      <select
        id={selectId}
        className={cn(
          "w-full bg-graphite border-2 rounded-lg py-3 px-4 text-cream appearance-none",
          "focus:outline-none transition-colors duration-300 cursor-pointer",
          error ? "border-ember" : "border-white/10 focus:border-gold"
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-graphite">
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 bottom-4 pointer-events-none text-taupe">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      {error && <p className="mt-1 text-xs text-ember">{error}</p>}
    </div>
  );
}
