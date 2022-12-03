import { AppBtnPropsType } from "./types";
export default function AppButton({
  children,
  className,
  ...props
}: AppBtnPropsType) {
  return (
    <div>
      <button {...props} className={`w-full h-full ${className}`}>
        {children}
      </button>
    </div>
  );
}
