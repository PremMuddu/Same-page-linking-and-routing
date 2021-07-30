
    var history = '';

    var routes = {
        '':          'home.html',     
        '/':         'home.html',
        '#/home':    'home.html',                
        '#/signin':  'signin.html',        
        '#/blog':    'blog.html',
        '#/pricing': 'pricing.html',
    };

    async function router(){
        console.log(location.hash);
        var innerElement = '';

    
        var link = window.location.hash;


        var count = (link.split("/").length - 1);        
        if (count > 1) {
    
            innerElement = link.split("/")[2];            

            
            link = '#/' + link.split("/")[1];
        }

               
        if (history === link && innerElement){
            scrollIntoView(innerElement);
            history = link;
            return;            
        }
        history = link;  
        var route = routes[link];

        if (route) loadPage(route, innerElement);
    };
    router();

    async function loadPage(url, innerElement){
    
        const res     = await fetch(url);
        const content = await res.text();
        const element = document.getElementById('content');
        element.innerHTML = content;

        window.scrollTo(0, 0);

        if (innerElement) {            
            scrollIntoView(innerElement);
        }        
    }

    function scrollIntoView(id){
        document.getElementById(id).scrollIntoView();
    }

    window.addEventListener('hashchange', router);    
  
  