export type AppBtnPropsType = {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    children: string | JSX.Element;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void
}