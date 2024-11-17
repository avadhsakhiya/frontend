'use client'
import { useEffect, useMemo, useState } from "react";
import NewPostModal from "./NewPostModal/NewPostModal";
import content from "@/store/content";

export default function PostList() {

    useEffect(() => {
       content.getContentList()
    },[])

    useEffect(() => {
        console.log(content.list);
        setList(content.list)
     },[content.list.length])
    const [list, setList] = useState([]);
    const data = useMemo(()=>{console.log(content.list)}, [content.list.length])
    return (
        <section>
            <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-bold text-xl">Posts</div>
                        <NewPostModal form />
                    </div>
                   <div className="gap-3 flex flex-col">
                   {/* {list?.map((e) => {
                        return (
                            <div className="bg-white shadow sm:rounded-lg border">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Little bit of carding, little bit of cards</h3>
                                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                                        <p>Share. Care. Its all just emptiness.
                                            Commodo dragon, I jam in my  jammies.</p>
                                    </div>
                                    <div className="mt-3 text-sm">
                                        <a href="https://pebble.social" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Learn more about Pebble
                                            <span aria-hidden="true"> →</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })} */}
                   </div>

                </div>
            </div>

        </section>
    )
}