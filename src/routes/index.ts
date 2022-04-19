import { bingApi } from "./_api";

export const get = async () => {
    const response = await bingApi(
        "get",
        "/HPImageArchive.aspx?format=js&idx=0&n=1"
    );
    if (response.status === 404) {
        return {
            body: {
                imageUrl: ""
            }
        };
    }

    if (response.status === 200) {
        const data = await response.json();
        const imageInfo = data.images?.[0] || {};
        const { url = "" } = imageInfo;
        return {
            body: {
                imageUrl: `https://cn.bing.com/${url}`
            }
        };
    }
};
