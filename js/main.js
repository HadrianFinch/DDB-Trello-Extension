/* global TrelloPowerUp */

var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';

window.TrelloPowerUp.initialize(
{
    // 'card-buttons': function (t, options) 
    // {
    //     return [
    //     {
    //         icon: GREY_ROCKET_ICON,
    //         text: 'Estimate Size',
    //         callback: function (t) 
    //         {
    //             return t.popup(
    //             {
    //                 title: "Estimation",
    //                 url: './popup.html',
    //             });
    //         }
    //     }];
    // },
    // 'card-badges': function (t, options) 
    // {
    //     return t.get('card', 'shared', 'estimate')
    //         .then(function (estimate) 
    //         {
    //             return [
    //             {
    //                 icon: estimate ? GREY_ROCKET_ICON : WHITE_ROCKET_ICON,
    //                 text: estimate || 'No Estimate!',
    //                 color: estimate ? null : 'red',
    //             }];
    //         });
    // },
    // 'card-detail-badges': function (t, options) 
    // {
    //     return t.get('card', 'shared', 'estimate')
    //         .then(function (estimate) 
    //         {
    //             return [
    //             {
    //                 title: 'Estimate',
    //                 text: estimate || 'No Estimate!',
    //                 color: estimate ? null : 'red',
    //                 callback: function (t) 
    //                 {
    //                     return t.popup(
    //                     {
    //                         title: "Estimation",
    //                         url: './popup.html',
    //                     });
    //                 }
    //             }]
    //         });
    // },
    'attachment-sections': function (t, options) 
    {
        // options.entries is a list of the attachments for this card
        // you can look through them and 'claim' any that you want to
        // include in your section.

        // we will just claim urls for Yellowstone
        var claimed = options.entries.filter(function (attachment) 
        {
            return attachment.url.indexOf('https://www.dndbeyond.com/spells/') === 0;
        });

        // you can have more than one attachment section on a card
        // you can group items together into one section, have a section
        // per attachment, or anything in between.
        if (claimed && claimed.length > 0) 
        {
            // if the title for your section requires a network call or other
            // potentially lengthy operation you can provide a function for the title
            // that returns the section title. If you do so, provide a unique id for
            // your section
            return [
            {
                id: 'Spells', // optional if you aren't using a function for the title
                claimed: claimed,
                icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
                title: 'D&D Beyond - Spells',
                content: 
                {
                    type: 'iframe',
                    url: t.signUrl('./spells.html', 
                    {
                        arg: 'you can pass your section args here'
                    }),
                    height: 230
                }
            }];
        }
        else
        {
            return [];
        }
    }
});
