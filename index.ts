
Bun.serve({
    fetch(req){
        const url = new URL(req.url);
        // test path
        if (url.pathname === "/test1"){
            return new Response("response from test 1")
        }

        if (url.pathname === "/test2"){
            return new Response("response from test 2")
        }
        return new Response("404!")
    }
}
   
)