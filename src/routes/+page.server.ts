import { bingApi } from "./api";
import { error } from "@sveltejs/kit";

export const load = (async () => {
    const idx = Math.floor(Math.random() * 7);
    const response = await bingApi(
        "get",
        `/HPImageArchive.aspx?format=js&idx=${idx}&n=1`
    );
    if (response.status === 200) {
        const data = await response.json();
        const imageInfo = data.images?.[0] || {};
        const { url = "" } = imageInfo;
        return {
            imageUrl: `https://cn.bing.com/${url}`
        };
    }
    throw error(404, "Unable to fetch Bing picture info")

});
