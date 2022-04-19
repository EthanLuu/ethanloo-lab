const bingBase = "https://cn.bing.com";

export const bingApi = (method: string, resource: string, data: any = null) => {
    return fetch(`${bingBase}/${resource}`, {
        method,
        headers: {
            "content-type": "application/json"
        },
        body: data && JSON.stringify(data)
    });
};
