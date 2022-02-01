var t = window.TrelloPowerUp.iframe();

const getTitle = (url) => 
{  
    return fetch(`https://crossorigin.me/${url}`)
    .then((response) => response.text())
    .then((html) => 
    {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const title = doc.querySelectorAll('title')[0];
        return title.innerText;
    });
};

// you can access arguments passed to your iframe like so
var arg = t.arg('arg');

t.render(function () 
{
    // make sure your rendering logic lives here, since we will
    // recall this method as the user adds and removes attachments
    // from your section
    t.card('attachments')
        .get('attachments')
        .filter(function (attachment) 
        {
            return attachment.url.indexOf('https://www.dndbeyond.com/spells/') == 0;
        })
        .then(function (spellsAttachments) 
        {
            var urls = spellsAttachments.map(function (a) { return a.url; });

            for (let i = 0; i < urls.length; i++) 
            {
                var url = urls[i];
                var container = document.querySelector('#content');

                var div = document.createElement('div');
                div.classList.add("spellCard");
                container.appendChild(div);
                
                var spellNameElm = document.createElement('h1');
                spellNameElm.innerHTML = getTitle(url);
            }
        })
        .then(function () 
        {
            return t.sizeTo('#content');
        });
});