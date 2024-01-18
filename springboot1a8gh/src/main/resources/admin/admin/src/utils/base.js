const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot1a8gh/",
            name: "springboot1a8gh",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot1a8gh/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "免税商品优选购物商城设计"
        } 
    }
}
export default base
