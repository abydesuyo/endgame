$(document).ready(function () {

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Social Share buttons ***********************/
    var share_bar = document.getElementsByClassName('share-bar');
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    po.src = 'https://apis.google.com/js/platform.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);

    for (var i = 0; i < share_bar.length; i++) {
        var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
            'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
            'style="width:105px; height:21px;">' +
            '</iframe>' +

            '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

            '<div class="g-plusone" data-size="medium"></div>';

        // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

        share_bar[i].innerHTML = html;
        share_bar[i].style.display = 'inline-block';
    }

    /********************** Embed youtube video *********************/
    // $('.player').YTPlayer();
    //Remove this from init and move it to main page so that we can initialize this after deciding if we are going to English or Polish


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Alicja's and Aby's Party",

            // Event start date
            start: new Date('Oct 16, 2022 18:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Oct 16, 2022 21:00'),

            // Event Address
            address: '6 Chome-2-31 Toyosu, Koto City, Tokyo',

            // Event Description
            description: "Feel free to reach out to us (absi.alinka@gmail.com) in case you have face need any help or face other challenges around logistics :)"
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();
        var tempvar = $('#invite_code').val();
        var current_lang = document.documentElement.lang;
        var rsvp_mesg_dict = {
            'info':{
                'en':'<strong>Just a sec!</strong> We are saving your details.',
                'pl':'<strong> Chwileczkę! </strong> Zapisujemy Twoje dane.',
            },
            'badinvitecode':{
                'en':'<strong>Sorry!</strong> Your invite code is incorrect.',
                'pl':'<strong> Przepraszamy! </strong> Twój kod jest nieprawidłowy.',
            },
            'badserver':{
                'en':'<strong>Sorry!</strong> There is some issue with the server.',
                'pl':'<strong> Przepraszamy! </strong> Wystąpił problem z serwerem.'
            }
        }
        // $('#alert-wrapper').html(alert_markup('info', `Using code ${tempvar}`));
        $('#alert-wrapper').html(alert_markup('info', rsvp_mesg_dict['info'][current_lang]));

        if (MD5($('#invite_code').val()) !== '1b4b16ae294b41580302d0090a902233'
            || 
            MD5($('#invite_code').val()) !== '1b4b16ae294b41580302d0090a902233') 
            {
            $('#alert-wrapper').html(alert_markup('danger', rsvp_mesg_dict['badinvitecode'][current_lang]));
        } else {
            // $.post('https://script.google.com/macros/s/AKfycbyYbKvXmV1KSqEIWw3Tj9swjdj_MObNNX618qH9cshuSrZhQnLidM22/exec', data)
            $.post('https://script.google.com/macros/s/AKfycbxG1DXTJQUF_ZGfzUrNC9exseliscxxKb53-6ZRoDxaN7nR34QeT5fbN42-up9UyTwn/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', rsvp_mesg_dict['badserver'][current_lang]));
                });
        }
    });

});


/**************** Language Switcher *****************/

var dictionary = {
    'intro': {
        'en': 'HOW WE MET',
        'pl': 'JAK SIĘ POZNALIŚMY',
    },
    'events': {
        'en': 'EVENT TIMELINE',
        'pl': 'PLAN WYDARZENIA',
    },
    'story': {
        'en': 'OUR STORY',
        'pl': 'NASZA HISTORIA',
    },
    'city': {
        'en': 'GLIMPLSE OF THE CITY',
        'pl': 'RZUT OKA NA MIASTO',
    },
    'venue': {
        'en': 'VENUE',
        'pl': 'MIEJSCE WYDARZENIA',
    },
    'savethedate': {
        'en': 'Save the Date',
        'pl': 'ZAPISZ DATĘ',
    },
    'savethedatetext': {
        'en': 'It is the 16<sup>th</sup> of October \'22 and we would like you to be a part of our joyful moment.',
        'pl': 'Ceremonia odbędzie się 16<sup>th</sup> Październik \'22 i będzie nam miło jeżeli dołączycie do nas.',
    },
    'storycontent': {
        'en': 'On that fateful night, thanks to an unusual movie date (Dunkirk), we found each other instead. Aby was late and Alicja almost gave up his ticket. The movie went into detail about the horrible ways soldiers could get killed. It was looking hopeless by the minute, and we kept asking each other whose idea it was to pick this movie! That is when, Alicja turned on the charm machine aka lollipop. Best thing that ever happened to Aby that year ;o) That very moment, somehow we knew we were bound to be together. The following 5 years flew by! There was a lot of fun in the beginning. We tested our relationship quite some. We even made the doomed Zushi beach trip, and yet we did not come undone. A lot more tests followed along with all the happiness, but in the end, the happiness prevailed. And once we covered the final frontier of Polish and Indian home trips, we knew we could survive despite our parents thinking we were a little crazy. We withstood 2+ years of the pandemic, 400km bike trip in August sun, a birthday proposal, drinking nights in Torami, and two white monstrous dogs in Niseko. And better yet, we started bringing out the best in each other. We set dates for wedding and started pushing and pulling endlessly to get the paperwork done to get married. Thanks to the pandemic, this was a whole lot more fun that we signed up for! But, we did not give up. Our love was stronger than before, but it looked less and less likely by the day, that we could get married because of the paperwork. But then, one day, to our surprize, the papers came. Then, we acted quickly, and on the 8th of August, we formally got married in the city hall. But we havent echanged the vows and rings yet... Now we hope you can join us to celebrate the accomplishment of the impossible with us! And so here we are :) ',
        'pl': 'Tamtej pamiętnej nocy, dzięki niezwykłej randce filmowej (Dunkierka), znaleźliśmy się nawzajem. Aby się spóźnił, a Alicja prawie oddała swój bilet. W filmie szczegółowo omówiono okropne sposoby, w jakie żołnierze mogą zostać zabici. Wyglądało to bardzo beznadziejnie i ciągle pytaliśmy się, czyj to był pomysł. I wtedy Alicja włączyła machinę zaklęć, czyli wyjęła z torebki lizaki. To była najlepsza rzecz, jaka spotkała Aby w tym roku (Uwaga do Aby: nie pierwszy pocałunek? ;)). W tym momencie jakoś wiedzieliśmy, że jesteśmy ze sobą związani. Kolejne 5 lat minęło! Na początku było dużo zabawy. Całkiem przetestowaliśmy nasz związek. Odbyliśmy nawet wyprawę na plażę, którą dowodził Alex Zushi, a mimo to się nie cofnęliśmy. Wraz z całym szczęściem nastąpiło o wiele więcej testów, ale ostatecznie szczęście zwyciężyło. A kiedy pokonaliśmy ostatnią granicę polskich i indyjskich wyjazdów do domu, wiedzieliśmy, że możemy przetrwać, mimo że nasi rodzice myśleli, że jesteśmy trochę szaleni. Wytrzymaliśmy ponad 2 lata pandemii, 400-kilometrową wycieczkę rowerową w sierpniowym słońcu, propozycję urodzinową, noce z piciem w Torami i dwa białe potworne psy w Niseko. A jeszcze lepiej, zaczęliśmy wydobywać z siebie to, co najlepsze. Ciągnęliśmy i ciągnęliśmy bez końca, żeby załatwić papierkową robotę do ślubu. Nie poddaliśmy się. Nasza miłość była silniejsza niż wcześniej, ale z dnia na dzień wydawało się coraz mniej prawdopodobne, że możemy się pobrać z powodu papierkowej roboty. Ale pewnego dnia, ku naszemu przerażeniu, przyszły gazety. Działaliśmy szybko i 8 sierpnia formalnie wzięliśmy ślub w ratuszu. Ale nie zmieniliśmy jeszcze ślubów i pierścieni... Teraz mamy nadzieję, że dołączysz do nas, aby świętować z nami osiągnięcie niemożliwego!',
    },
    'eventdate':{
        'en':'16th October',
        'pl':'16th Październik',
    },
    'reception':{
        'en':'Wedding Reception ',
        'pl':'PRZYJĘCIE WESELNE ',
    },
    'receptiondata':{
        'en':'Polish style wedding reception. Plenty of food and drinks. And a photobooth if you are bored',
        'pl':'Mnóstwo jedzenia i napojów. A jeśli się nudzisz, fotobudka',
    },
    'dancedata':{
        'en':'Dance to your favourite tunes while having Polish food and Vodka?',
        'pl':'Tańcz do ulubionych melodii.',
    },
    'dance':{
        'en':'Dance All Night ',
        'pl':'TAŃCZ CAŁĄ NOC ',
    },
    'disclaimer':{
        'en':'Please arrive on time, the place is only available until 21:30. If you stay too late, you will end up helping to clean the place :)',
        'pl':'Prosimy o punktualne przybycie, miejsce jest dostępne tylko do 21:30. Jeśli zostaniesz za późno, w końcu pomożesz w sprzątaniu tego miejsca :)',
    },
    'ceremony':{
        'en':'Ceremony',
        'pl':'Ceremonia',
    },
    'ceremonydata':{
        'en':'Exchange of rings',
        'pl':'Wymiana pierścieni',
    },
    'wishes':{
        'en':'Toast to the Couple',
        'pl':'Toast za parę',
    },
    'wishesdata':{
        'en':'Wishes to the Couple, glass of your favourite drink',
        'pl':'Życzenia Pary, kieliszek ulubionego drinka ze stołu',
    },
    'firstdance':{
        'en':'First Dance',
        'pl':'Pierwszy taniec',
    },
    'firstdancedata':{
        'en':'First dance of the couple and opening of the dance floor',
        'pl':'Pierwszy taniec pary młodej otwierający szaleństwa na parkiecie',
    },
    'guestbook':{
        'en':'Guest Book',
        'pl':'Księga Gości',
    },
    'guestbookdata':{
        'en':'Please feel free to take a Guestbook snap using the INSTAX and write a message for us in the Guestbook.',
        'pl':'Zachęcamy do zrobienia przystawki do Księgi Gości za pomocą INSTAX i napisania do nas wiadomości w Księdze Gości.',
    },
    'surprise':{
        'en':'Surprise',
        'pl':'Niespodzianka',
    },
    'surprisedata':{
        'en':'Guess you have to be around to find out!',
        'pl':'Żeby sie dowiedzieć co jest niespodzianką, trzeba zostać do północy :)',
    },
    'dinner':{
        'en':'Dinner',
        'pl':'Obiad',
    },
    'dinnerdata':{
        'en':'Starter, Soup, Main Course, Desert',
        'pl':'Przystawka, zupa, danie główne, deser',
    },
    'buffet':{
        'en':'Buffet and Drinks ',
        'pl':'Bufet i napoje',
    },
    'buffetdata':{
        'en':'Food (Buffet, Sweets, Snacks) and Drinks',
        'pl':'Jedzenie (bufet, słodycze, przekąski) i napoje',
    },
    'cake':{
        'en':'Cake Cutting',
        'pl':'Cięcie ciasta',
    },
    'cakedata':{
        'en':'Cake Cutting Ceremony',
        'pl':'Ceremonia Krojenia Ciasta',
    },
    'warmdish':{
        'en':'Warm Dish',
        'pl':'Ciepły posiłek',
    },
    'warmdishdata':{
        'en':'Separate warm dish on top of the buffet to keep you going',
        'pl':'Zastrzyk energi by dalej tańczyć',
    },
    'warmdish2':{
        'en':'Second Warm Dish',
        'pl':'Drugi ciepły posiłek ',
    },
    'warmdish2data':{
        'en':'Another warm dish on top of the buffet to keep you going',
        'pl':'Doładowanie energii dla najbardziej wytrwałych',
    },
    'finish':{
        'en':'Finish',
        'pl':'Zakończenie',
    },
    'finishdata':{
        'en':'End of the Night',
        'pl':'Zakończenie imprezy',
    },
    'dresscode':{
        'en':'Dress Code',
        'pl':'Strój',
    },
    'formalwear':{
        'en':'Formal Western Wear',
        'pl':'Strój formalny',
    },
    'semiformalwear':{
        'en':'Comfortable Wear',
        'pl':'Wygodne noszenie',
    },
    'formaldesc':{
        'en':'You can wear what makes you feel fabulous but yet comfortable. Please avoid wearing white (bride color) or black (funeral color). Ladies can wear what is fashioable and Gentlemen can adorn thier Summer Suits. (If it is a sweltering summer, a spare shirt to change into would be handy).',
        'pl':'Załóż to co sprawia, że ​​czujesz się jak gwiazda.',
    },
    'ladiesformal':{
        'en':'Here are some samples',
        'pl':'Oto kilka przykładów dla Pań',
    },
    'gentsformaldesc':{
        'en':'Gentlemen can adorn thier',
        'pl':'Inspiracje dla Panów',
    },
    'gentsformal':{
        'en':'Summer Suits',
        'pl':'letnie garnitury',
    },
    'wearadvice':{
        'en':'If it is a sweltering summer, a spare shirt to change into would be handy.',
        'pl':'Jeśli jest upalne lato, warto pomyśleć o zapasowej koszuli.',
    },
    'semiformalweardesc':{
        'en':'You can wear anything that is contemporary & fashionable that you feel comforatble in, as long as you do not steal the thunder of the night ;)',
        'pl':'Możesz nosić wszystko, co jest współczesne i modne, w czym czujesz się komfortowo, o ile nie kradniesz nocnych grzmotów ;)',
    },
    'ladies':{
        'en':'Ladies',
        'pl':'Pań',
    },
    'gents':{
        'en':'Gents',
        'pl':'Panów',
    },
    'citydesc':{
        'en':'City of Iconic Landmarks',
        'pl':'Miasto kultowych zabytków',
    },
    'directions':{
        'en':'How do I get there?',
        'pl':'JAK SIĘ TAM DOSTANĘ?',
    },
    'directionstip':{
        'en':'It\'s much simpler than you think!',
        'pl':'To znacznie prostsze niż myślisz!',
    },
    'showinfo':{
        'en':'Show info',
        'pl':'Pokaż informację',
    },
    'showmap':{
        'en':'Show Map',
        'pl':'Pokaż mapę',
    },
    'thankyou':{
        'en':'Thank you!',
        'pl':'Dziękuję!',
    },
    'thankyoumessage':{
        'en':'We are excited to have you join us on our big day.',
        'pl':'Cieszymy się, że dołączysz do nas w tym ważnym dniu.',
    },
    'rsvpmessage':{
        'en':'We would greatly appreciate if you could RSVP before 1st of October \'22.',
        'pl':'Bylibyśmy bardzo wdzięczni za RSVP przed 1 października \'22.',
    },
    'youremail':{
        'en':'Your email',
        'pl':'Twój email',
    },
    'yourname':{
        'en':'Your name',
        'pl':'Twoje imię i nazwisko',
    },
    'yourplusone':{
        'en':'Partner / Kids',
        'pl':'Partner/Partnerka / Dzieci',
    },
    'yourinvitecode':{
        'en':'Invite Code',
        'pl':'kod RSVP',
    },
    'food':{
        'en':'Dietary Preference',
        'pl':'Preferencje dietetyczne',
    },
    'vegopt':{
        'en':'Vegetarian',
        'pl':'Wegetariański',
    },
    'nonvegopt':{
        'en':'Non-Vegetarian',
        'pl':'Nie-wegetarianskie',
    },
    'allergies':{
        'en':'comments',
        'pl':'uwagi',
    },
    'checkin':{
        'en':'CHECK-IN',
        'pl':'ZAPISZ ODPOWIEDŹ',
    },
};

window.change_lang = function(current_lang) {
    $('#bgndVideo').load(location.href+' #bgndVideo>*','');
    document.getElementById('maincontents').style.display = 'block';
    document.getElementById('languagepicker').style.display = 'none';
    document.documentElement.setAttribute('lang', current_lang);
    $('.player').YTPlayer();
    translate(current_lang);
}

function translate(current_lang) {
    $("[data-translate]").each(function() {
      var key = $(this).data('translate');
      if ($(this).is("input")) {
        $(this).attr('placeholder', dictionary[key][current_lang])
      } else {
        $(this).html(dictionary[key][current_lang] || "N/A");
      }
    });
  }

/********************** Extras **********************/

// Google map
function initMap() {
    var location = {lat: 35.64722559300683, lng: 139.79230138650695};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 35.64722559300683, lng: 139.79230138650695}
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};
