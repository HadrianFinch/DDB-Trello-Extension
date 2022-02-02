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

document.querySelector('#search').addEventListener('input', function()
{
    var dom = getSourceAsDOM("https://www.dndbeyond.com/search?q=" + this.value);
    console.log(dom);
    console.log(dom.querySelector('a.link'));
    document.querySelector('p').innerHTML = dom.querySelector('a.link');
});

// Elements with IDs are available as properties of `window`.
window.estimate.addEventListener('submit', function (event) 
{
    // Stop the browser trying to submit the form itself.
    event.preventDefault();
    return t.set('card', 'shared', 'estimate', window.estimateSize.value)
        .then(function () 
        {
            t.closePopup();
        });
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
            t.sizeTo('#estimate');
        });
});