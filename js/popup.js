/* global TrelloPowerUp */
function getSourceAsDOM(url)
{
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    parser=new DOMParser();
    return parser.parseFromString(xmlhttp.responseText,"text/html");      
}

var t = TrelloPowerUp.iframe();

document.querySelector('#add').addEventListener('click', function()
{
    var term = document.querySelector('#search').value;
    t.attach("https://www.dndbeyond.com/search?q=" + term);
});

t.render(function() 
{
    return t.get('card', 'shared', 'estimate')
        .then(function (estimate) 
        {
            window.estimateSize.value = estimate;
        })
        .then(function () 
        {
            t.sizeTo('body');
        });
});
