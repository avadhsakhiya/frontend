import { LoaderCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function LoadingSubmit({ loading, buttonTitle }) {
    return (
        <Button type="submit" disabled={loading}>
            {loading ? (
                <span className="flex gap-2 align-middle items-center">
                    <span>{buttonTitle}</span>
                    <LoaderCircle className="animate-spin" />
                </span>
            ) : (
                <span>{buttonTitle}</span>
            )}
        </Button>
    )
}