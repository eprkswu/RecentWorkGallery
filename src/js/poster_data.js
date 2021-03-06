var iconBase = '../img/map_pin/';
var posterBase = '../img/poster_image/';
var icons = {
    '1': iconBase+'pin_2.gif',
    '2': iconBase+'pin_1.gif',
    '3': iconBase+'pin_3.png'
};
var iconIntervalTime = 2000;
var posterIntervalTime = 2000;
var maxEmojiCount = 800;

var displays = [
    {
        date:'11.1 ~ 30',
        placename:'연세필정신건강의학과의원 광화문점',
        address:'서울 종로구 종로 19 르메이에르 종로타운 4층, 413-2, 414-1호',
        icon:icons['1'],
        position:[37.571022, 126.979830],
        marker:null,
        poster_index:1,
        type:''
    },
    {
        date:'11.1 ~ 30',
        placename:'루프트 합정',
        address:'서울 마포구 독막로8길 16',
        icon:icons['1'],
        position:[37.547448,126.917779],
        marker:null,
        poster_index:2,
        type:''
    },
    {
        date:'11.1 ~ 30',
        placename:'게방식당',
        address:'서울 강남구 선릉로131길 17',
        icon:icons['1'],
        position:[37.517491,127.039433],
        marker:null,
        poster_index:3,
        type:'multi'
    },
    {
        date:'2017.11.7 ~ 2018.1.7',
        placename:'더북소사이어티(에이랜드)',
        address:'서울 강남구 논현로175길 78, 4층',
        icon:icons['1'],
        position:[37.523902,127.022644],
        marker:null,
        poster_index:4,
        type:''
    },
    {
        date:'11.1 ~ 30',
        placename:'식물학',
        address:'서울 강남구 신사동 516-16, 1층',
        icon:icons['1'],
        position:[37.518647, 127.021594],
        marker:null,
        poster_index:5,
        type:''
    },
    {
        date:'11.1 ~ 30',
        placename:'문화공간 숨도-미소서식지',
        address:'서울 마포구 백범로71 숨도빌딩 2층',
        icon:icons['1'],
        position:[37.549196,126.939713],
        marker:null,
        poster_index:6,
        type:''
    },
    {
        date:'11.4 ~ 30',
        placename:'루프트 명동',
        address:'서울 중구 삼일대로 308',
        icon:icons['2'],
        position:[37.562336,126.989246],
        marker:null,
        poster_index:8,
        type:'multi'
    },
    {
        date:'11.1 ~ 12.11',
        placename:'헤이그라운드',
        address:'서울 성동구 뚝섬로1나길 5',
        icon:icons['2'],
        position:[37.544621,127.047665],
        marker:null,
        poster_index:9,
        type:'multi'
    },
    {
        date:'11.1 ~ 30',
        placename:'네오위즈 판교타워',
        address:'경기도 성남시 분당구 대왕판교로645번길 14',
        icon:icons['2'],
        position:[37.400513,127.104380],
        marker:null,
        poster_index:10,
        type:'multi'
    },
    {
        date:'11.7 ~ 12.7',
        placename:'B2 보안책방',
        address:'서울 종로구 효자로 33',
        icon:icons['1'],
        position:[37.579085,126.973629],
        marker:null,
        poster_index:7,
        type:''
    }
];

var display_posters = [
    {
        title:'아름다운 반복',
        writer:'김병호-이기준',
        poster:posterBase+'1_replication.jpg'
    },
    {
        title:'보통의 정의',
        writer:'박혜수-이동영',
        poster:posterBase+'2_botong.jpg'
    },
    {
        title:'철학자들',
        writer:'박제성-초코딩',
        poster:posterBase+'3_philosopher.jpg'
    },
    {
        title:'5개의 축',
        writer:'백현주-정진열',
        poster:[
            posterBase+'4_axis_01.jpg',
            posterBase+'4_axis_02.jpg',
            posterBase+'4_axis_03.jpg',
            posterBase+'4_axis_04.jpg',
            posterBase+'4_axis_05.jpg'
        ]
    },
    {
        title:'헬리오스 벽지',
        writer:'이윤성-신신',
        poster:posterBase+'5_hellios.jpg'
    },
    {
        title:'여기_거기',
        writer:'이은경-조형석',
        poster:posterBase+'6_here_there.jpg'
    },
    {
        title:'무제',
        writer:'정소영-섬광',
        poster:posterBase+'7_untitled.jpg'
    },
    {
        title:'기억',
        writer:'홍범-강구룡',
        poster:posterBase+'8_memory.jpg'
    },
    {
        title:'',
        writer:'',
        poster:[
            posterBase+'luft_01.jpg',
            posterBase+'luft_02.jpg',
            posterBase+'luft_03.jpg',
            posterBase+'luft_04.jpg',
            posterBase+'luft_05.jpg',
            posterBase+'luft_06.jpg',
            posterBase+'luft_07.jpg'
        ]
    },
    {
    	title:'',
        writer:'',
        poster:[
            posterBase+'hey_01.jpg',
            posterBase+'hey_02.jpg',
            posterBase+'hey_03.jpg',
            posterBase+'hey_04.jpg',
            posterBase+'hey_05.jpg'
        ]
    },
    {
    	title:'',
        writer:'',
        poster:[
            posterBase+'neo_01.jpg',
            posterBase+'neo_02.jpg',
            posterBase+'neo_03.jpg',
            posterBase+'neo_04.jpg',
            posterBase+'neo_05.jpg'
        ]
    }
    
];