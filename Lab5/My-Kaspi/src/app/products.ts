export interface Products {
    img : string;
    name: string;
    description: string;
    rating: number;
    price: number;
    source: string;
    category: string;
    like: number;
    id: number;
}


export const products = [
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd1/hbe/49348562681886/sony-playstation-5-belyj-100746577-1-Container.jpg",
        name: "Игровая приставка Sony PlayStation 5 белый",
        description:"С Sony PlayStation 5 вы ощутите истинную силу игры Молниеносная скорость загрузки благодаря сверхскоростному накопителю SSD, невероятный эффект погружения благодаря тактильной отдаче, адаптивным спусковым кнопкам и 3D-звуку, а также потрясающие игры нового поколения для PlayStation 5. ",
        rating:9.89,
        price : 333985,
        source: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000#!/item",
        category: "Аудио, Видео, Развлечения",
        like : 11,
        id: 1
    },  
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg",
        name: "Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серый",
        description:"Мощный. Простой в использовании и универсальный. iPad создан специально для ваших любимых занятий. Работайте, играйте, творите, учитесь, общайтесь и делайте множество других дел. Благодаря чипу A13 Bionic новый iPad реагирует быстрее в любой ситуации: когда вы отправляете сообщения, ищете контент в интернете или используете одновременно несколько приложений.",
        rating:9.15,
        price:178470,
        source : "https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=750000000#!/item",
        category: "Телефоны и гаджеты",
        like : 0,
        id: 2
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h60/31545786138654/detroit-become-human-ps4-10700843-1-Container.jpg",
        name: "Видеоигра Detroit Become Human PS4",
        description:"Detroit- Become Human - это интерактивный приключенческий проект об эмоциональном андроиде по имени Кара. Действие проекта разворачивается в недалеком будущем в городе Детроит, где подобные Каре андроиды могут выглядеть, говорить и двигаться как реальные люди.",
        rating:100,
        price: 14990,
        source: "https://kaspi.kz/shop/p/detroit-become-human-ps4-10700843/?c=750000000#!/item",
        category: "Аудио, Видео, Развлечения",
        like : 0,
        id: 3
    },
    {
        img : "https://resources.cdn-kaspi.kz/medias/sys_master/images/images/hab/hed/62948780671006/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg",
        name: "Apple iPhone 14 Pro Max 256Gb фиолетовый",
        description:" смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A15 Bionic. Big and bigger (Большой и ещё больше). 4K@24/25/30/60fps, 1080p@25/30/60/120/240fps, HDR, Dolby Vision HDR (up to 60fps), Cinematic mode (4K@30fps), stereo sound rec.",
        rating:9.65,
        price:697999,
        source: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item",
        category: "Телефоны и гаджеты",
        like : 0,
        id: 4
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg",
        name: "Наушники JBL Tune 510BT черный",
        description:"Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов. Эти простые в использовании наушники работают до 40 часов на одном заряде аккумулятора, а, подключив зарядный кабель USB-C всего на пять минут к сети питания, вы получите еще 2 часа воспроизведения. Если вам поступит вызов, когда вы смотрите видео на другом устройстве, JBL Tune 510BT автоматически переключатся на мобильное устройство.",
        rating:7.96,
        price:25503,
        source:"https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000#!/item",
        category: "Аудио, Видео, Развлечения",
        like : 0,
        id: 5
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf0/h05/65599304007710/instax-mini-11-fioletovyi-plenka-20-sht-103580120-2.jpg",
        name: "Фотокамера моментальной печати Instax MINI 11 фиолетовый + пленка 20 шт",
        description:"Фотокамера моментальной печати FujiFilm Instax mini 11, представленная в симпатичной нежно-фиолетовой расцветке корпуса, обладает самым передовым для своего класса техническим оснащением, благодаря которому она создает яркие снимки с размерами 62x46 мм. Модель способна в автоматическом режиме устанавливать наиболее оптимальное значение выдержки в диапазоне от 1/2 сек до 1/250 сек, благодаря чему вам не придется производить никаких настроек перед процессом фотосъемки.",
        rating:9.5,
        price:60700,
        source:"https://kaspi.kz/shop/p/instax-mini-11-fioletovyi-plenka-20-sht-103580120/?c=750000000#!/item",
        category: "Аудио, Видео, Развлечения",
        like : 0,
        id: 6
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h03/63935931252766/art-sketchbook-a4-blk-9788862931939-107190254-1.jpg",
        name: "Moleskine скетчбук ART SKETCHBOOK, A4, 96 листов, черный",
        description:"Классический скетчбук для рисования с уплотненной бумагой 165 г/м2. Твердая черная обложка, резинка для плотного закрытия книжки. 176 страниц.",
        rating:8.25,
        price: 15950,
        source: "https://kaspi.kz/shop/p/moleskine-sketchbuk-art-sketchbook-a4-96-listov-chernyi-107190254/?c=750000000#!/item",
        category: "Канцелярия",
        like : 0,
        id: 7
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/h9e/34242100527134/lego-harry-potter-pervyj-urok-poletov-76395-101618084-1.jpg",
        name: "Конструктор LEGO Harry Potter Первый урок полетов 76395",
        description:"тип: блочный,количество деталей: 264,серия LEGO: Harry Potter,пол ребенка: универсальный,цвет: мультиколор,основной материал: пластик",
        rating:7.25,
        price: 5513,
        source:"https://kaspi.kz/shop/p/bela-harry-potter-pervyi-urok-poletov-detalei-288-sht-104758165/?c=750000000#!/item",
        category: "Аудио, Видео, Развлечения",
        like : 0,
        id: 8

    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
        name: "Телевизор Xiaomi Mi TV P1 50 L50M6-6ARG 127 см черный",
        description:"Инновационный трехсторонний безрамочный дизайн обеспечивает более высокое соотношение размера экрана и корпуса, а также углы обзора 178° для более реалистичного изображения и приятного просмотра. Разрешение 4K UHD обеспечивает реалистичное изображение с большей детализацией и большей глубиной. Поддерживает Dolby Vision и HDR10 +. Расширенный динамический диапазон делает яркие места еще ярче, а темные места еще темнее, повышая резкость, контрастность и цвет изображений, а высокий уровень детализации позволяет увидеть больше, чем когда-либо. ",
        rating:8.76,
        price:244990,
        source: "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item",
        category: "Бытовая техника",
        like : 0,
        id: 9
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5b/h19/48289555709982/xiaomi-bhr5055eu-mi-robot-vacuum-mop-2-belyj-103450270-1.jpg",
        name: "Робот-пылесос Xiaomi Mi Robot Vacuum Mop 2 BHR5055EU белый",
        description:"Эластичная тряпка робота-пылесоса изготовлена из сверхтонких волокон, которые покрыты высокомолекулярным антибактериальным полимером. Таким образом, в ходе уборки, пылесос не только избавляет дом от пыли, но и обеспечивает дополнительную защиту от размножения болезнетворных бактерий. ",
        rating:9.56,
        price: 136781,
        source: "https://kaspi.kz/shop/p/xiaomi-mi-robot-vacuum-mop-2-bhr5055eu-belyi-103450270/?c=750000000#!/item",
        category: "Бытовая техника",
        like : 0,
        id: 10
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
        name: "Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный",
        description:"Ноутбук TUF Gaming A15 представляет собой стильную и надежную геймерскую платформу, которая поможет добиться успеха в любой игре. В его аппаратную конфигурацию входит видеокарта GeForce GTX 1650, обеспечивающая плавное изображение на дисплее с частотой обновления 144 Гц. Мощный процессор AMD Ryzen 5 гарантирует быструю работу в широком спектре задач, а усовершенствованная система охлаждения помогает поддерживать его производительность на высоком уровне при минимальном уровне шума.",
        rating:9.5,
        price: 369990,
        source: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
        category: "Телефоны и гаджеты",
        like : 0,
        id: 11
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/ha5/33549396574238/amazfit-bip-u-pro-cernyj-100914321-1-Container.jpg",
        name: "Смарт-часы Amazfit Bip U Pro черный",
        description:"Безрамочный дизайн часов Amazfit Bip U Pro оборудованы экраном AMOLED с диагональю 1.43 дюйма и разрешением 320x302 пикселя, обеспечивающим превосходное визуальное отображение, благодаря которому все входящие звонки, сообщения и напоминания становятся предельно четкими. Amazfit Bip U Pro — ультрамодные часы, поэтому их можно персонализировать, чтобы отразить уникальный характер каждого пользователя. Возможность выбора из более чем 50 циферблатов, которые подойдут под ваше настроение и наряд. При этом можно загрузить свои фотографии, чтобы сделать циферблат еще более персонализированным.",
        rating:8.96,
        price: 25368,
        source: "https://kaspi.kz/shop/p/amazfit-bip-u-pro-chernyi-100914321/?c=750000000#!/item",
        category: "Телефоны и гаджеты",
        like : 0,
        id: 12
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h4a/33574671450142/huion-kamvas-13-cernyj-101001692-1-Container.jpg",
        name: "Графический планшет HUION Kamvas 13",
        description:"Kamvas 13 - это первый графический монитор, который поддерживает подключение к устройству на операционной системе Android через полнофункциональный кабель Type-C. Пользователи могут выразить свои идеи в любое время и в любом месте благодаря своим портативным гаджетам.",
        rating:8.62,
        price: 136787,
        source: "https://kaspi.kz/shop/p/huion-kamvas-13-101001692/?c=750000000#!/item",
        category: "Телефоны и гаджеты",
        like : 0,
        id: 13
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h40/48076324143134/deerma-dx700-belyj-3701383-4-Container.jpg  ",
        name: "Пылесос Deerma DX700 белый",
        description:"Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий. Технология циклонной фильтрации благодаря высокой силе всасывания гарантирует быстрый сбор пыли и мусора. Контейнер емкостью 0.8 л легко очищается от собранного мусора. Фильтр HEPA задерживает даже мелкие частицы пыли, тщательно очищая воздух в помещении. Рукоятка эргономичной формы позволяет с комфортом удерживать пылесос под любым углом. ",
        rating:9.42,
        price: 19698,
        source: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000#!/item",
        category: "Бытовая техника",
        like : 0,
        id: 14
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h13/h18/51251427639326/centek-ct-1164-serebristyj-100358682-1-Container.jpg ",
        name: "Кофеварка CENTEK CT-1164 серебристый, черный",
        description:"Появление кофеварки рожковой Centek CT-1164 превратит процесс дегустации соответствующего напитка в настоящее удовольствие. Так, не выходя из дома, вы сможете насладиться вкусом любимого капучино или латте – а все благодаря предусмотренному ручному капучинатору, мгновенно превращающему молоко в густую пышную пенку. Используя специальную ложку из комплекта, вы сможете наполнить рожок не только необходимым количеством молотых зерен, но и тщательно разровнять их. Кофеварка рожковая Centek CT-1164 впечатлит увеличенной до 1150 Вт мощностью и возросшим до 15 бар давлением.",
        rating:9.26,
        price: 60410,
        source: "https://kaspi.kz/shop/p/kofevarka-centek-ct-1164-serebristyi-chernyi-100358682/?c=750000000#!/item",
        category: "Бытовая техника",
        like : 0,
        id: 15
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h98/31820622921758/lg-f2j3ns0w-white-3601511-1-Container.jpg",
        name: "Стиральная машина LG F2J3NS0W белый",
        description:"Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня. ШИРОКИЙ ВЫБОР. Есть программы для хлопка, смешанных тканей и шерсти, поэтому даже тонкий трикотаж не растянется и не покроется затяжками",
        rating:8.93,
        price: 191419,
        source: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000#!/item",
        category: "Бытовая техника",
        like : 0,
        id: 16
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1b/h1d/47523919200286/marker-2000000015347-80-cvetov-103046406-1.jpg",
        name: "Маркер Marker 2000000015347, 80 шт, 1 мм, мультиколор",
        description:"Доступные профессиональные маркеры с широким спектром палитры для самых смелых рисунков и изображений.  Маркеры: высокое качество, нетоксичны и быстро сохнут, яркие и насыщенные, не сохнут на протяжении нескольких лет при правильной эксплуатации. Комплект качественных спиртовых маркеров для молодых и взрослых художников. Он прекрасно подойдет тем, кто профессионально рисует комиксы, забавные наброски, эскизы татуировок, каллиграфические изображения, а также изготавливает другие авторские произведения изобразительного искусства в современном стиле.",
        rating:9.16,
        price: 6848,
        source: "https://kaspi.kz/shop/p/marker-marker-2000000015347-80-sht-1-mm-mul-tikolor-103046406/?c=750000000#!/item",
        category: "Канцелярия",
        like : 0,
        id: 17
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h82/hd1/32406020653086/sonet-3541138-16x2-5-ml-100102473-1.jpg",
        name: "Краски Сонет 3541138 16x2.5 мл",
        description:"- тип: акварельные\n- объем: 2.5 мл \n- количество цветов: 16\n- форма выпуска: кювета ",
        rating:9.51,
        price: 3055,
        source: "https://kaspi.kz/shop/p/sonet-3541138-16x2-5-ml-100102473/?c=750000000#!/item",
        category: "Канцелярия",
        like : 0,
        id: 18
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h71/67414366027806/almaznaya-vyshivka-108263329-1.jpg",
        name: "Алмазная мозаика Painting Diamond GB70061",
        description:"Алмазная мозаика – это вид творчества, при котором картину выкладывают разноцветными круглыми стразами или квадратными камушками на клеевую основу. В результате получается яркая, красивая и необычная картина, словно написанная на холсте.",
        rating:9.32,
        price: 4849,
        source: "https://kaspi.kz/shop/p/painting-diamond-gb70061-108263329/?c=750000000#!/item",
        category: "Канцелярия",
        like : 0,
        id: 19
    },
    {
        img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h87/47100253569054/papka-konvert-erich-krause-fizzy-vivid-a4-fiksatsiya-knopka-mul-tikolor-prozrachnyi-102842687-1.jpg",
        name: "Папка-конверт Erich Krause Fizzy Vivid, А4, фиксация кнопка, мультиколор, прозрачный",
        description:"Папка-конверт на кнопке формата А4 из высококачественного прозрачного пластика с текстурой поверхности Orange Peel, на которой не видно отпечатков пальцев и мелких царапин. Предназначена для хранения и транспортировки небольшого количества документов. ",
        rating:8.32,
        price: 250,
        source: "https://kaspi.kz/shop/p/papka-konvert-erich-krause-fizzy-vivid-a4-fiksatsija-knopka-mul-tikolor-prozrachnyi-102842687/?c=750000000#!/item",
        category: "Канцелярия",
        like : 0,
        id: 20
    },

]
  