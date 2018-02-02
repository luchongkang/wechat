export default {
    test: [{key :'AA', color: 4},
    {key :'AKs', color: 1,c: 1,s: 0},
    {key :'AQs', color: 1,c: 1,s: 0},
    {key :'AJs', color: 1,c: 1,s: 0},
    {key :'ATs', color: 1,c: 1,s: 0}],
    color: ['','blue','blue1','yellow','gray'],
    ranks : {'A':14, 
         'K':13,
         'Q':12,
         'J':11,
         'T':10,
         '9':9,
         '8':8,
         '7':7,
         '6':6,
         '5':5,
         '4':4,
         '3':3,
         '2':2
    },
    tranks : {0:'A', 
          1:'K',
          2:'Q',
          3:'J',
          4:'T',
          5:'9',
          6:'8',
          7:'7',
          8:'6',
          9:'5',
          10:'4',
          11:'3',
          12:'2'
    },
    pfIndexToPocket : [
    {key :'AA', color: 4,c: 0,s: 0},
    {key :'AKs', color: 1,c: 1,s: 0},
    {key :'AQs', color: 1,c: 1,s: 0},
    {key :'AJs', color: 1,c: 1,s: 0},
    {key :'ATs', color: 1,c: 1,s: 0},
    {key :'A9s', color: 1,c: 1,s: 0},
    {key :'A8s', color: 1,c: 1,s: 0},
    {key :'A7s', color: 1,c: 1,s: 0},
    {key :'A6s', color: 1,c: 1,s: 0},
    {key :'A5s', color: 1,c: 1,s: 0},
    {key :'A4s', color: 1,c: 1,s: 0},
    {key :'A3s', color: 1,c: 1,s: 0},
    {key :'A2s', color: 1,c: 1,s: 0},
    {key :'AKo', color: 2,c: 2,s: 0},
    {key :'KK', color: 0,c: 0,s: 0},
    {key :'KQs', color: 1,c: 1,s: 0},
    {key :'KJs', color: 1,c: 1,s: 0},
    {key :'KTs', color: 1,c: 1,s: 0},
    {key :'K9s', color: 1,c: 1,s: 0},
    {key :'K8s', color: 1,c: 1,s: 0},
    {key :'K7s', color: 1,c: 1,s: 0},
    {key :'K6s', color: 1,c: 1,s: 0},
    {key :'K5s', color: 1,c: 1,s: 0},
    {key :'K4s', color: 1,c: 1,s: 0},
    {key :'K3s', color: 1,c: 1,s: 0},
    {key :'K2s', color: 1,c: 1,s: 0},
    {key :'AQo', color: 2,c: 2,s: 0},
    {key :'KQo', color: 2,c: 2,s: 0},
    {key :'QQ', color: 0,c: 0,s: 0},
    {key :'QJs', color: 1,c: 1,s: 0},
    {key :'QTs', color: 1,c: 1,s: 0},
    {key :'Q9s', color: 1,c: 1,s: 0},
    {key :'Q8s', color: 1,c: 1,s: 0},
    {key :'Q7s', color: 1,c: 1,s: 0},
    {key :'Q6s', color: 1,c: 1,s: 0},
    {key :'Q5s', color: 1,c: 1,s: 0},
    {key :'Q4s', color: 1,c: 1,s: 0},
    {key :'Q3s', color: 1,c: 1,s: 0},
    {key :'Q2s', color: 1,c: 1,s: 0},
    {key :'AJo', color: 2,c: 2,s: 0},
    {key :'KJo', color: 2,c: 2,s: 0},
    {key :'QJo', color: 2,c: 2,s: 0},
    {key :'JJ', color: 0,c: 0,s: 0},
    {key :'JTs', color: 1,c: 1,s: 0},
    {key :'J9s', color: 1,c: 1,s: 0},
    {key :'J8s', color: 1,c: 1,s: 0},
    {key :'J7s', color: 1,c: 1,s: 0},
    {key :'J6s', color: 1,c: 1,s: 0},
    {key :'J5s', color: 1,c: 1,s: 0},
    {key :'J4s', color: 1,c: 1,s: 0},
    {key :'J3s', color: 1,c: 1,s: 0},
    {key :'J2s', color: 1,c: 1,s: 0},
    {key :'ATo', color: 2,c: 2,s: 0},
    {key :'KTo', color: 2,c: 2,s: 0},
    {key :'QTo', color: 2,c: 2,s: 0},
    {key :'JTo', color: 2,c: 2,s: 0},
    {key :'TT', color: 0,c: 0,s: 0},
    {key :'T9s', color: 1,c: 1,s: 0},
    {key :'T8s', color: 1,c: 1,s: 0},
    {key :'T7s', color: 1,c: 1,s: 0},
    {key :'T6s', color: 1,c: 1,s: 0},
    {key :'T5s', color: 1,c: 1,s: 0},
    {key :'T4s', color: 1,c: 1,s: 0},
    {key :'T3s', color: 1,c: 1,s: 0},
    {key :'T2s', color: 1,c: 1,s: 0},
    {key :'A9o', color: 2,c: 2,s: 0},
    {key :'K9o', color: 2,c: 2,s: 0},
    {key :'Q9o', color: 2,c: 2,s: 0},
    {key :'J9o', color: 2,c: 2,s: 0},
    {key :'T9o', color: 2,c: 2,s: 0},
    {key :'99', color: 0,c: 0,s: 0},
    {key :'98s', color: 1,c: 1,s: 0},
    {key :'97s', color: 1,c: 1,s: 0},
    {key :'96s', color: 1,c: 1,s: 0},
    {key :'95s', color: 1,c: 1,s: 0},
    {key :'94s', color: 1,c: 1,s: 0},
    {key :'93s', color: 1,c: 1,s: 0},
    {key :'92s', color: 1,c: 1,s: 0},
    {key :'A8o', color: 2,c: 2,s: 0},
    {key :'K8o', color: 2,c: 2,s: 0},
    {key :'Q8o', color: 2,c: 2,s: 0},
    {key :'J8o', color: 2,c: 2,s: 0},
    {key :'T8o', color: 2,c: 2,s: 0},
    {key :'98o', color: 2,c: 2,s: 0},
    {key :'88', color: 0,c: 0,s: 0},
    {key :'87s', color: 1,c: 1,s: 0},
    {key :'86s', color: 1,c: 1,s: 0},
    {key :'85s', color: 1,c: 1,s: 0},
    {key :'84s', color: 1,c: 1,s: 0},
    {key :'83s', color: 1,c: 1,s: 0},
    {key :'82s', color: 1,c: 1,s: 0},
    {key :'A7o', color: 2,c: 2,s: 0},
    {key :'K7o', color: 2,c: 2,s: 0},
    {key :'Q7o', color: 2,c: 2,s: 0},
    {key :'J7o', color: 2,c: 2,s: 0},
    {key :'T7o', color: 2,c: 2,s: 0},
    {key :'97o', color: 2,c: 2,s: 0},
    {key :'87o', color: 2,c: 2,s: 0},
    {key :'77', color: 0,c: 0,s: 0},
    {key :'76s', color: 1,c: 1,s: 0},
    {key :'75s', color: 1,c: 1,s: 0},
    {key :'74s', color: 1,c: 1,s: 0},
    {key :'73s', color: 1,c: 1,s: 0},
    {key :'72s', color: 1,c: 1,s: 0},
    {key :'A6o', color: 2,c: 2,s: 0},
    {key :'K6o', color: 2,c: 2,s: 0},
    {key :'Q6o', color: 2,c: 2,s: 0},
    {key :'J6o', color: 2,c: 2,s: 0},
    {key :'T6o', color: 2,c: 2,s: 0},
    {key :'96o', color: 2,c: 2,s: 0},
    {key :'86o', color: 2,c: 2,s: 0},
    {key :'76o', color: 2,c: 2,s: 0},
    {key :'66', color: 0,c: 0,s: 0},
    {key :'65s', color: 1,c: 1,s: 0},
    {key :'64s', color: 1,c: 1,s: 0},
    {key :'63s', color: 1,c: 1,s: 0},
    {key :'62s', color: 1,c: 1,s: 0},
    {key :'A5o', color: 2,c: 2,s: 0},
    {key :'K5o', color: 2,c: 2,s: 0},
    {key :'Q5o', color: 2,c: 2,s: 0},
    {key :'J5o', color: 2,c: 2,s: 0},
    {key :'T5o', color: 2,c: 2,s: 0},
    {key :'95o', color: 2,c: 2,s: 0},
    {key :'85o', color: 2,c: 2,s: 0},
    {key :'75o', color: 2,c: 2,s: 0},
    {key :'65o', color: 2,c: 2,s: 0},
    {key :'55', color: 0,c: 0,s: 0},
    {key :'54s', color: 1,c: 1,s: 0},
    {key :'53s', color: 1,c: 1,s: 0},
    {key :'52s', color: 1,c: 1,s: 0},
    {key :'A4o', color: 2,c: 2,s: 0},
    {key :'K4o', color: 2,c: 2,s: 0},
    {key :'Q4o', color: 2,c: 2,s: 0},
    {key :'J4o', color: 2,c: 2,s: 0},
    {key :'T4o', color: 2,c: 2,s: 0},
    {key :'94o', color: 2,c: 2,s: 0},
    {key :'84o', color: 2,c: 2,s: 0},
    {key :'74o', color: 2,c: 2,s: 0},
    {key :'64o', color: 2,c: 2,s: 0},
    {key :'54o', color: 2,c: 2,s: 0},
    {key :'44', color: 0,c: 0,s: 0},
    {key :'43s', color: 1,c: 1,s: 0},
    {key :'42s', color: 1,c: 1,s: 0},
    {key :'A3o', color: 2,c: 2,s: 0},
    {key :'K3o', color: 2,c: 2,s: 0},
    {key :'Q3o', color: 2,c: 2,s: 0},
    {key :'J3o', color: 2,c: 2,s: 0},
    {key :'T3o', color: 2,c: 2,s: 0},
    {key :'93o', color: 2,c: 2,s: 0},
    {key :'83o', color: 2,c: 2,s: 0},
    {key :'73o', color: 2,c: 2,s: 0},
    {key :'63o', color: 2,c: 2,s: 0},
    {key :'53o', color: 2,c: 2,s: 0},
    {key :'43o', color: 2,c: 2,s: 0},
    {key :'33', color: 0,c: 0,s: 0},
    {key :'32s', color: 1,c: 1,s: 0},
    {key :'A2o', color: 2,c: 2,s: 0},
    {key :'K2o', color: 2,c: 2,s: 0},
    {key :'Q2o', color: 2,c: 2,s: 0},
    {key :'J2o', color: 2,c: 2,s: 0},
    {key :'T2o', color: 2,c: 2,s: 0},
    {key :'92o', color: 2,c: 2,s: 0},
    {key :'82o', color: 2,c: 2,s: 0},
    {key :'72o', color: 2,c: 2,s: 0},
    {key :'62o', color: 2,c: 2,s: 0},
    {key :'52o', color: 2,c: 2,s: 0},
    {key :'42o', color: 2,c: 2,s: 0},
    {key :'32o', color: 2,c: 2,s: 0},
    {key :'22', color: 0,c: 0,s: 0}
    ],
    pfPocketToIndex : {
    'AA':0,
    'AKs':1,
    'AQs':2,
    'AJs':3,
    'ATs':4,
    'A9s':5,
    'A8s':6,
    'A7s':7,
    'A6s':8,
    'A5s':9,
    'A4s':10,
    'A3s':11,
    'A2s':12,
    'AKo':13,
    'KK':14,
    'KQs':15,
    'KJs':16,
    'KTs':17,
    'K9s':18,
    'K8s':19,
    'K7s':20,
    'K6s':21,
    'K5s':22,
    'K4s':23,
    'K3s':24,
    'K2s':25,
    'AQo':26,
    'KQo':27,
    'QQ':28,
    'QJs':29,
    'QTs':30,
    'Q9s':31,
    'Q8s':32,
    'Q7s':33,
    'Q6s':34,
    'Q5s':35,
    'Q4s':36,
    'Q3s':37,
    'Q2s':38,
    'AJo':39,
    'KJo':40,
    'QJo':41,
    'JJ':42,
    'JTs':43,
    'J9s':44,
    'J8s':45,
    'J7s':46,
    'J6s':47,
    'J5s':48,
    'J4s':49,
    'J3s':50,
    'J2s':51,
    'ATo':52,
    'KTo':53,
    'QTo':54,
    'JTo':55,
    'TT':56,
    'T9s':57,
    'T8s':58,
    'T7s':59,
    'T6s':60,
    'T5s':61,
    'T4s':62,
    'T3s':63,
    'T2s':64,
    'A9o':65,
    'K9o':66,
    'Q9o':67,
    'J9o':68,
    'T9o':69,
    '99':70,
    '98s':71,
    '97s':72,
    '96s':73,
    '95s':74,
    '94s':75,
    '93s':76,
    '92s':77,
    'A8o':78,
    'K8o':79,
    'Q8o':80,
    'J8o':81,
    'T8o':82,
    '98o':83,
    '88':84,
    '87s':85,
    '86s':86,
    '85s':87,
    '84s':88,
    '83s':89,
    '82s':90,
    'A7o':91,
    'K7o':92,
    'Q7o':93,
    'J7o':94,
    'T7o':95,
    '97o':96,
    '87o':97,
    '77':98,
    '76s':99,
    '75s':100,
    '74s':101,
    '73s':102,
    '72s':103,
    'A6o':104,
    'K6o':105,
    'Q6o':106,
    'J6o':107,
    'T6o':108,
    '96o':109,
    '86o':110,
    '76o':111,
    '66':112,
    '65s':113,
    '64s':114,
    '63s':115,
    '62s':116,
    'A5o':117,
    'K5o':118,
    'Q5o':119,
    'J5o':120,
    'T5o':121,
    '95o':122,
    '85o':123,
    '75o':124,
    '65o':125,
    '55':126,
    '54s':127,
    '53s':128,
    '52s':129,
    'A4o':130,
    'K4o':131,
    'Q4o':132,
    'J4o':133,
    'T4o':134,
    '94o':135,
    '84o':136,
    '74o':137,
    '64o':138,
    '54o':139,
    '44':140,
    '43s':141,
    '42s':142,
    'A3o':143,
    'K3o':144,
    'Q3o':145,
    'J3o':146,
    'T3o':147,
    '93o':148,
    '83o':149,
    '73o':150,
    '63o':151,
    '53o':152,
    '43o':153,
    '33':154,
    '32s':155,
    'A2o':156,
    'K2o':157,
    'Q2o':158,
    'J2o':159,
    'T2o':160,
    '92o':161,
    '82o':162,
    '72o':163,
    '62o':164,
    '52o':165,
    '42o':166,
    '32o':167,
    '22':168
    },
    pfPocketEquity : {
    'AA':   0.852037,
    'AKs':  0.670446,
    'AQs':  0.662089,
    'AJs':  0.653927,
    'ATs':  0.646024,
    'A9s':  0.627812,
    'A8s':  0.619438,
    'A7s':  0.60984,
    'A6s':  0.599058,
    'A5s':  0.599229,
    'A4s':  0.590336,
    'A3s':  0.582203,
    'A2s':  0.573789,
    'AKo':  0.653201,
    'KK':   0.823957,
    'KQs':  0.634004,
    'KJs':  0.625673,
    'KTs':  0.617886,
    'K9s':  0.599885,
    'K8s':  0.583123,
    'K7s':  0.575377,
    'K6s':  0.566407,
    'K5s':  0.557929,
    'K4s':  0.548846,
    'K3s':  0.54055,
    'K2s':  0.532117,
    'AQo':  0.644318,
    'KQo':  0.614558,
    'QQ':   0.799252,
    'QJs':  0.602592,
    'QTs':  0.594676,
    'Q9s':  0.576643,
    'Q8s':  0.560177,
    'Q7s':  0.543023,
    'Q6s':  0.536126,
    'Q5s':  0.527694,
    'Q4s':  0.518553,
    'Q3s':  0.510192,
    'Q2s':  0.50169,
    'AJo':  0.635633,
    'KJo':  0.605687,
    'QJo':  0.581347,
    'JJ':   0.774695,
    'JTs':  0.575279,
    'J9s':  0.556625,
    'J8s':  0.540156,
    'J7s':  0.523248,
    'J6s':  0.506059,
    'J5s':  0.499868,
    'J4s':  0.490705,
    'J3s':  0.482316,
    'J2s':  0.473782,
    'ATo':  0.627217,
    'KTo':  0.597389,
    'QTo':  0.572908,
    'JTo':  0.552477,
    'TT':   0.750118,
    'T9s':  0.540275,
    'T8s':  0.523344,
    'T7s':  0.50639,
    'T6s':  0.489407,
    'T5s':  0.472163,
    'T4s':  0.465305,
    'T3s':  0.456925,
    'T2s':  0.448395,
    'A9o':  0.607728,
    'K9o':  0.578119,
    'Q9o':  0.553604,
    'J9o':  0.532512,
    'T9o':  0.515317,
    '99':   0.720573,
    '98s':  0.508008,
    '97s':  0.491177,
    '96s':  0.474283,
    '95s':  0.457219,
    '94s':  0.43862,
    '93s':  0.432643,
    '92s':  0.424152,
    'A8o':  0.598726,
    'K8o':  0.560202,
    'Q8o':  0.535998,
    'J8o':  0.514902,
    'T8o':  0.497213,
    '98o':  0.48097,
    '88':   0.69163,
    '87s':  0.479363,
    '86s':  0.462433,
    '85s':  0.44545,
    '84s':  0.427016,
    '83s':  0.408735,
    '82s':  0.402716,
    'A7o':  0.588412,
    'K7o':  0.551874,
    'Q7o':  0.517657,
    'J7o':  0.496819,
    'T7o':  0.479081,
    '97o':  0.462978,
    '87o':  0.450508,
    '77':   0.66236,
    '76s':  0.453718,
    '75s':  0.436755,
    '74s':  0.418493,
    '73s':  0.400359,
    '72s':  0.381559,
    'A6o':  0.576825,
    'K6o':  0.542233,
    'Q6o':  0.510241,
    'J6o':  0.478443,
    'T6o':  0.46092,
    '96o':  0.444913,
    '86o':  0.432409,
    '76o':  0.423227,
    '66':   0.632847,
    '65s':  0.431334,
    '64s':  0.413333,
    '63s':  0.395336,
    '62s':  0.37669,
    'A5o':  0.576965,
    'K5o':  0.53314,
    'Q5o':  0.501201,
    'J5o':  0.471809,
    'T5o':  0.442509,
    '95o':  0.426691,
    '85o':  0.414275,
    '75o':  0.40512,
    '65o':  0.399443,
    '55':   0.603249,
    '54s':  0.414534,
    '53s':  0.39693,
    '52s':  0.378493,
    'A4o':  0.567297,
    'K4o':  0.523275,
    'Q4o':  0.491277,
    'J4o':  0.461864,
    'T4o':  0.435041,
    '94o':  0.406711,
    '84o':  0.394468,
    '74o':  0.385498,
    '64o':  0.380105,
    '54o':  0.381553,
    '44':   0.570228,
    '43s':  0.386419,
    '42s':  0.36829,
    'A3o':  0.558446,
    'K3o':  0.514257,
    'Q3o':  0.482194,
    'J3o':  0.452755,
    'T3o':  0.425946,
    '93o':  0.400195,
    '83o':  0.374838,
    '73o':  0.366023,
    '63o':  0.360776,
    '53o':  0.362648,
    '43o':  0.351459,
    '33':   0.536931,
    '32s':  0.359844,
    'A2o':  0.549286,
    'K2o':  0.505087,
    'Q2o':  0.472954,
    'J2o':  0.443485,
    'T2o':  0.416684,
    '92o':  0.390979,
    '82o':  0.368277,
    '72o':  0.345836,
    '62o':  0.340751,
    '52o':  0.342846,
    '42o':  0.331998,
    '32o':  0.323032,
    '22':   0.50334
    },
    sort: ["AA","KK","QQ","JJ","TT","99","88","AKs","77","AQs","AJs","AKo","ATs","AQo","AJo","KQs","66","A9s","ATo","KJs","A8s","KTs","KQo","A7s","A9o","KJo","55","QJs","K9s","A5s","A6s","A8o","KTo","QTs","A4s","A7o","K8s","A3s","QJo","K9o","A5o","A6o","Q9s","K7s","JTs","A2s","QTo","44","A4o","K6s","K8o","Q8s","A3o","K5s","J9s","Q9o","JTo","K7o","A2o","K4s","Q7s","K6o","K3s","T9s","J8s","33","Q6s","Q8o","K5o","J9o","K2s","Q5s","T8s","K4o","J7s","Q4s","Q7o","T9o","J8o","K3o","Q6o","Q3s","98s","T7s","J6s","K2o","22","Q2s","Q5o","J5s","T8o","J7o","Q4o","97s","J4s","T6s","J3s","Q3o","98o","87s","T7o","J6o","96s","J2s","Q2o","T5s","J5o","T4s","97o","86s","J4o","T6o","95s","T3s","76s","J3o","87o","T2s","85s","96o","J2o","T5o","94s","75s","T4o","93s","86o","65s","84s","95o","T3o","92s","76o","74s","T2o","54s","85o","64s","83s","94o","75o","82s","73s","93o","65o","53s","63s","84o","92o","43s","74o","72s","54o","64o","52s","62s","83o","42s","82o","73o","53o","63o","32s","43o","72o","52o","62o","42o","32o"]
}

