

 var onfetch=e=>{
    console.log(e.request.url);
    if(e.request.url=="/data"){
        console.log("match");
      e.respondWith(fetch("/").then(()=>{
          return Response.redirect("data://text/html,<script>alert(document.domain)</script>");
      }));
    }
  }
  
