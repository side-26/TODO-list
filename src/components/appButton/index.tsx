
import { AppBtnPropsType } from "./types";
export default function AppButton({
  children,
  className,
  ...props
}: AppBtnPropsType) {
  return (
    <div className={className}>
      <button {...props} className="w-full h-full lg:px-16">
        {children}
      </button>
    </div>
  );
}
