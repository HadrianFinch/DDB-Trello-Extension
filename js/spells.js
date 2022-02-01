var t = window.TrelloPowerUp.iframe();

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
            document.getElementById('urls').textContent = urls.join(', ');
        })
        .then(function () 
        {
            return t.sizeTo('#content');
        });
});