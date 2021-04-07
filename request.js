axios.defaults.baseURL = "https://developer.duyiedu.com/vue/bz";

// 响应拦截器
axios.interceptors.response.use(response => {
    const { status } = response;
    const { baseURL, url } = response;

    if (status == 200) {
        if (url == '/video') {
            return {
                count: response.data.count,
                data: response.data,
            }
        }
        return response.data;
    }
    return response;
})