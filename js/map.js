ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.753889598163646,37.625218093556015],
        zoom: 16,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([55.753889598163646,37.625218093556015], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: "Concert Home",
        balloonContentBody: "ул. Арбат, 1а, Москва 119019, Россия",
        balloonContentFooter: "+7 (495) 000-00-00",
        iconCaption: 'Улица Ильинка, 4',
    }, {
        preset: 'islands#redDotIconWithCaption'
    });

    myMap.geoObjects.add(myPlacemark);
    ymapsTouchScroll(myMap);
}