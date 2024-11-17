'use client'
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import NewPostForm from "./NewPostForm";

export default function NewPostModal() {
    const [open, setOpen] = useState(false);
    function Toggle(){
        setOpen(!open)
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
            <Button onClick={Toggle}>New Post</Button>
                <DialogContent>
                    <DialogTitle> Create Seo Content</DialogTitle>
                      <NewPostForm Toggle={Toggle}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}