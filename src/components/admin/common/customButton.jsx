import { Button } from "@/components/ui/button";

export default function CustomButton({ children, icon: Icon, isLoading = false, loadingText = "İşleniyor...", ...props }) {
  return (
    <Button {...props}>
      {Icon ? <Icon className={isLoading ? "animate-spin" : ""} /> : null}
      {isLoading ? loadingText : children}
    </Button>
  );
}

