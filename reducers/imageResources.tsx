
import { ImageSourcePropType } from "react-native"

export type ShapeData<T> = {
    polygonPoints?: string
    path?: string;
    fill: T
}

export interface ImageReducerState {
    iconImage?: ImageSourcePropType,
    cardImage?: ImageSourcePropType
    SvgPaths?: ShapeData<boolean>[],
    SvgViewbox?: string,
}

/*
fill boolean refers to theme reducer shoices in App
*/
export const imageReducer = (state: ImageReducerState, action: string) => {
    switch (action) {
        case 'storm': {
            return {
                cardImage: require('../assets/cards/storm.png'),
                SvgPaths: [
                    {
                        path: "M375.771,103.226c1.137-5.199,1.736-10.559,1.736-16.04c0-47.913-45.389-86.754-101.377-86.754    c-39.921,0-74.447,19.749-90.979,48.451c-3.419-0.298-6.888-0.451-10.398-0.451c-41.397,0-76.993,21.236-92.738,51.671    C35.289,107.836,0,143.023,0,185.27c0,47.913,45.388,86.754,101.377,86.754h241.377c55.988,0,101.377-38.841,101.377-86.754    C444.131,147.25,415.551,114.945,375.771,103.226z",
                        fill: true
                    },
                    {
                        polygonPoints: "289.232,280.023 203.678,371.373 279.623,371.373 239.523,443.699 327.887,347.631 251.941,347.631   ",
                        fill: true
                    },
                    {
                        polygonPoints: "168.739,294.847 116.246,350.895 162.842,350.895 138.239,395.271 192.454,336.326 145.858,336.326   ",
                        fill: true
                    }
                ],
                SvgViewbox: '0 0 440 440'
            }
        };
        case 'tickets':
            return {
                cardImage: require('../assets/cards/ticket-bucket-bot.jpg'),
                SvgPaths: [
                    {
                        path: 'm 431.80106,942.32749 c -13.626,-2.70879 -79.97202,-26.21621 -88.80994,-31.46672 -15.23873,-9.05316 -26.53795,-21.52857 -33.91554,-37.44595 -5.44123,-11.73961 -7.19701,-19.92887 -7.6203,-35.54233 -0.2595,-9.57209 -0.9319,-15.40201 -2.31099,-20.0371 -7.38185,-24.81009 -36.40647,-37.09169 -60.39266,-25.55479 -7.64887,3.67896 -10.97064,6.804 -21.88817,20.59189 -9.35099,11.80948 -27.11561,22.94397 -43.23595,27.09938 -11.37142,2.93127 -29.13017,3.00085 -40,0.15674 C 116.5103,835.64986 62.473812,816.2963 54.754612,811.8797 35.759622,801.01161 23.226502,785.82 15.956282,764.85162 c -3.16074,-9.11606 -3.28743,-10.07281 -3.3077,-24.97913 l -0.0211,-15.5 11.14619,-32.5 C 92.368492,491.86422 241.7301,59.236012 243.58679,55.180469 c 9.46063,-20.664738 28.78499,-36.768011 52.24923,-43.540043 11.08947,-3.2005404 32.22877,-3.2274744 43.79149,-0.05579 12.47277,3.421309 67.36745,22.652746 73.49995,25.749502 20.4536,10.328417 35.9421,28.722152 42.9772,51.038355 1.6922,5.36804 2.3969,10.96333 3.0226,23.999997 0.8784,18.3008 1.84,22.45846 7.0842,30.63076 8.6831,13.53154 23.6211,20.78507 40.3891,19.61205 13.9344,-0.9748 23.5225,-6.60045 33.4285,-19.6135 9.1169,-11.9765 17.9092,-19.46862 29.5703,-25.19748 13.2419,-6.5055 19.5128,-8.07144 34.7077,-8.66697 16.7069,-0.6548 20.2823,0.19171 62.5778,14.81612 33.88,11.71461 44.9635,16.34685 52.7426,22.0434 11.7688,8.61803 23.7443,24.02234 28.9513,37.24055 4.4586,11.31829 5.7938,19.66827 5.306,33.18301 l -0.4347,12.04795 -10.5573,30.95205 c -40.4909,118.71222 -218.3383,633.99338 -220.3169,638.32895 -3.0907,6.7722 -9.8095,16.18913 -16.0275,22.46351 -18.3737,18.54047 -48.2551,27.38114 -74.7473,22.1146 z m 29.2811,-28.93034 c 14.0846,-3.74823 29.5002,-15.55498 35.285,-27.02466 1.387,-2.75 5.684,-14.225 9.549,-25.5 3.8649,-11.275 53.933,-156.625 111.2624,-323 57.3295,-166.375 105.0709,-305.41526 106.0922,-308.97836 5.5459,-19.35006 -0.4492,-40.49055 -15.5272,-54.75274 -3.9359,-3.72289 -9.3971,-7.96811 -12.1361,-9.43382 -5.4676,-2.92588 -71.6463,-26.09142 -77.8359,-27.24612 -6.3689,-1.18813 -19.7658,-0.73449 -25.901,0.87705 -13.2297,3.47507 -24.2459,11.55933 -34.327,25.19107 -13.0128,17.59597 -36.0559,28.34991 -57.9161,27.02879 -28.7417,-1.73702 -52.8701,-19.45399 -62.7532,-46.07828 -2.7149,-7.31386 -3.0876,-9.77189 -3.8067,-25.10759 -0.4384,-9.35 -1.3234,-18.8 -1.9667,-21.000001 -3.8339,-13.11177 -15.8149,-28.01235 -27.4734,-34.167997 -3.3,-1.7424 -20.625,-8.200018 -38.5,-14.350261 -29.83489,-10.265296 -33.25644,-11.226108 -41.72525,-11.716965 -17.97197,-1.041668 -31.76202,4.028663 -43.88365,16.135152 -3.90993,3.905041 -8.24727,9.350074 -9.63855,12.100074 -1.39127,2.75 -10.18858,27.274997 -19.54957,54.499998 -9.36099,27.225 -59.64141,173.25 -111.73425,324.5 -52.092848,151.25 -95.328668,277.25 -96.079608,280 -1.81836,6.65903 -1.75099,19.69031 0.13932,26.9477 3.69548,14.1879 14.91094,28.7966 27.04223,35.22388 8.11701,4.30046 68.263298,25.1008 76.371778,26.41158 10.64391,1.72065 24.95266,-0.80104 35.0576,-6.17835 7.72384,-4.11021 14.12317,-9.87103 20.99964,-18.90433 6.90517,-9.07102 12.0152,-13.69854 21.00036,-19.01745 13.09949,-7.75445 28.57093,-11.0456 42.65949,-9.07471 24.63084,3.44568 44.47088,17.37221 54.92439,38.55364 5.38955,10.9206 7.41612,20.59853 7.41612,35.41591 0,12.71699 1.65184,19.87566 6.79105,29.43082 4.57958,8.51465 14.77786,18.43531 23.45291,22.81446 5.82589,2.94089 68.06279,24.9872 75.75599,26.83521 5.7272,1.37572 21.084,1.12863 26.9547,-0.4337 z m -21.4547,-24.50018 c -5.4456,-1.18489 -65.1203,-21.83739 -69.5449,-24.06843 -4.516,-2.27712 -11.3816,-9.69957 -13.54036,-14.63855 -1.1667,-2.6693 -1.90325,-8.4795 -2.44884,-19.3175 -1.55931,-30.97543 -10.10464,-50.60208 -30.3342,-69.6706 -25.77843,-24.29892 -63.41613,-32.54093 -96.87327,-21.21359 -15.91458,5.38809 -32.47221,16.77277 -41.96236,28.85245 -8.02229,10.21131 -15.06708,16.59536 -20.26875,18.36775 -9.75075,3.32241 -13.65902,2.5941 -46.82089,-8.72516 -35.007948,-11.9494 -36.332448,-12.51153 -41.658798,-17.68058 -5.73926,-5.56976 -8.28149,-11.17115 -8.82156,-19.43687 -0.38652,-5.91572 0.0132,-8.4068 2.56715,-16 2.60414,-7.74233 116.826298,-339.59639 196.660398,-571.36506 17.08855,-49.61028 26.57819,-75.767601 28.50244,-78.564401 5.51428,-8.01473 16.95118,-13.231224 26.9324,-12.28416 6.63332,0.6294 63.94974,20.26327 70.69694,24.2174 4.6618,2.73195 9.4428,8.44491 12.1372,14.502821 1.0698,2.40533 1.7942,8.66057 2.3162,20 0.6138,13.33298 1.2606,18.18842 3.3695,25.29659 11.7784,39.69798 46.5273,66.3713 89.0917,68.387 32.3223,1.53068 61.8617,-12.9798 81.4551,-40.01267 7.1171,-9.81945 17.261,-14.51333 28.9134,-13.379 5.182,0.50447 63.869,20.11702 72.6143,24.26691 4.7814,2.26893 10.9762,8.4675 13.6415,13.64991 1.5147,2.94497 2.3327,6.64423 2.6074,11.79126 l 0.4004,7.5 -111.9723,325 c -61.5848,178.75 -112.458,326.24992 -113.0518,327.7776 -1.8089,4.65468 -9.8014,12.34422 -15.2801,14.70113 -5.8202,2.50377 -13.4913,3.31571 -19.3279,2.04575 z',
                        fill: true
                    },
                ],
                SvgViewbox: '0 0 765 950'
            };
        case 'acorn':
            return {
                cardImage: require('../assets/cards/acorn_stash.png'),
                SvgPaths: [
                    {
                        path: 'M2903 3223 c-10 -4 -95 -113 -128 -164 -58 -91 -95 -139 -140 -182 -50 -48 -115 -86 -115 -68 0 13 -95 34 -146 33 -24 -1 -55 -9 -70 -18 -17 -12 -44 -17 -82 -16 -61 0 -130 32 -256 115 -31 20 -60 37 -65 37 -4 0 -25 13 -46 30 -20 16 -60 41 -89 55 -28 15 -58 30 -66 35 -39 23 -136 61 -165 64 -18 2 -44 10 -57 17 -36 20 -202 19 -320 -1 -95 -16 -170 -46 -190 -75 -4 -5 -8 -6 -8 -2 0 11 -70 -43 -70 -54 0 -4 -14 -23 -31 -41 -37 -41 -68 -96 -92 -168 -19 -58 -34 -160 -23 -160 3 0 23 11 44 24 20 14 57 30 81 36 64 17 198 14 246 -5 22 -9 49 -19 60 -22 22 -7 165 -79 204 -103 357 -216 776 -600 1052 -965 96 -126 239 -344 239 -364 0 -8 13 -42 29 -75 69 -147 74 -249 16 -395 l-24 -61 24 0 c34 0 128 21 141 31 6 5 29 15 50 23 54 19 175 111 196 150 9 17 25 54 34 81 9 28 20 55 24 60 38 53 48 310 17 423 -21 78 -92 231 -155 332 -53 85 -67 102 -76 92 -4 -3 -4 0 -1 9 3 9 -13 43 -38 81 -24 37 -52 94 -62 127 -19 63 -19 58 16 213 12 53 11 62 -9 109 l-21 51 20 28 c11 15 44 45 72 66 29 21 77 59 109 84 31 25 70 55 86 68 38 29 45 56 21 78 -11 10 -33 42 -50 71 -17 29 -36 59 -43 66 -21 21 -77 145 -83 185 -10 64 -24 80 -60 65z',
                        fill: true
                    },
                    {
                        path: 'M856 2583 c-123 -14 -441 -347 -581 -606 -134 -249 -201 -410 -221 -527 -38 -224 -39 -364 -4 -550 6 -36 14 -76 17 -90 5 -29 13 -60 47 -185 13 -49 27 -106 30 -125 3 -19 10 -53 16 -75 16 -66 12 -212 -6 -251 -9 -19 -14 -37 -12 -39 3 -3 24 2 48 10 41 14 199 23 217 12 4 -3 51 -12 103 -21 52 -9 142 -30 200 -47 136 -40 120 -37 305 -60 235 -30 356 -18 595 58 48 15 225 88 250 104 8 4 31 16 50 26 71 34 295 187 381 259 133 113 205 189 248 262 33 56 40 80 46 142 7 80 -8 169 -39 227 -9 18 -16 36 -16 42 0 5 -16 36 -36 68 -19 32 -40 67 -47 78 -36 59 -105 156 -139 195 -122 140 -181 203 -353 378 -301 305 -520 486 -730 602 -199 111 -252 127 -369 113z m209 -272 c10 -6 16 -7 38 -10 16 -2 99 -80 122 -114 24 -36 14 -47 -97 -102 -195 -97 -341 -213 -438 -350 -125 -175 -211 -317 -235 -385 -8 -25 -19 -54 -24 -65 -30 -63 -51 -120 -51 -135 0 -9 -3 -20 -7 -24 -10 -10 -33 -78 -33 -101 -1 -11 -7 -38 -15 -60 -17 -44 -38 -166 -36 -205 1 -14 -2 -20 -8 -15 -13 15 -41 105 -41 132 0 14 -5 33 -10 43 -11 20 -15 286 -5 330 3 14 12 59 20 100 7 41 16 82 19 90 3 8 7 27 10 41 2 15 16 51 30 81 14 30 26 58 26 61 0 13 74 164 109 222 164 274 346 453 481 475 45 8 126 3 145 -9z',
                        fill: true
                    }
                ],
                SvgViewbox: '0 0 3200 3200'
            };
        case 'energy':
            return {
                cardImage: require('../assets/cards/energy_reserve.png'),
                SvgPaths: [
                    {
                        path: 'M20.796 1c31.629 5.815 45.711 4.744 58.731 0 0 0 4.376 42.061 21.428 62.559 0 0-30.335 8.504-50.112 37.308 0 0-19.364-27.014-49.842-37.789 9.542-13.121 18.357-39.075 19.796-62.078z',
                        fill: true
                    },
                    {
                        path: 'M38.272 10.497c-.211-1.696 6.723 4.506 26.444-.587 0 0-14.239 11.917-15.834 31.303 0 0 15.408 3.458 29.732-1.089 0 0-21.436 27.626-26.954 52.361 0 0-6.005-13.6.205-36.533 0 0-7.38-5.067-33.694 1.59 0 0 22.678-26.323 20.101-47.044z',
                        fill: false
                    }
                ],
                SvgViewbox: '0 0 100 100'
            };
        case 'experience':
            return {
                cardImage: require('../assets/cards/experience.png'),
                SvgPaths: [
                    {
                        path: 'M.775 171.102c96.217.111 192.488-.717 288.65.386 26.868 13.406 51.584 31.281 75.087 50.039-11.696 41.378-8.552 88.438 16.055 124.74 17.434 27.474 47.611 45.239 79.445 50.314l.055 497.248C351.107 834.08 244.959 767.49 151.445 685.175c-32.053-28.467-63.28-62.729-70.893-106.423-9.103-51.97 12.689-102.395 14.345-154.035.717-40.108-.111-81.541-16.331-118.946-15.227-40.494-46.783-71.224-70.065-106.865-6.014-8.054-7.503-17.985-7.724-27.805zm624.469 50.148c23.834-18.316 48.551-36.301 75.418-49.763 96.108-1.103 192.268-.275 288.43-.386-.719 8.219-.497 16.992-5.572 23.999-21.572 35.253-52.523 64.548-68.963 103.057-19.475 40.108-20.799 85.734-19.529 129.485 2.481 50.369 22.675 99.581 14.454 150.339-7.613 44.134-39.115 78.616-71.39 107.36-94.23 83.251-201.702 149.842-311.491 210.418-.055-166.337-.055-332.675-.055-499.012 35.75-4.359 69.403-25.378 86.837-57.156 20.965-35.418 22.731-79.334 11.861-118.34z',
                        fill: true,
                    }
                ],
                SvgViewbox: '0 0 1000 1000'
            };
        case 'poison':
            return {
                cardImage: require('../assets/cards/poison_counter.png'),
                SvgPaths: [
                    {
                        path: 'm598 529c0.6-57.8-17.7-116.1-53.7-161.4-17.4-19.1-31.7-40.9-50.1-59-40.6-40.3-101.4-43-150.3-68.3-2.9-25.5-12.2-51-6.5-76.7 1.7-8.6 4.3-17.2-0.3-25.4-12.8-29.5-1.8-61.6-4.1-92.4-1.7-16.1-0.6-35.8-16-45.7-3.6 33.5-15.9 64.7-25.9 96.4-4.6 24.8-4.6 50.6-15.3 73.9 6.8 23.7-6.6 43.6-21.1 61.1-32.1 16.4-70.2 20.3-98.2 44.4-19.9 16.9-41.4 31.7-63.7 45.5-16.7 20.9-35.2 41.1-42.7 67.5-29.9 36.1-33.4 84.5-50.3 126.7-0.3 62.7 12.4 130.2 52.4 180.5 28.7 23.7 48.7 55.5 77.3 79.1 27.5 16.4 56.8 29.9 85.2 44.6 18.5 4.3 37.6 6.4 56 11.5 14.9 76.9 25.1 155.6 55.1 228.5 9.9-29.9 8.7-62 17.3-92.3 12.1-44.7-12.7-91.2 1.3-135.2 21-18.7 55.9-6.6 79.2-22.6 44.3-27.3 91.1-53.8 123.2-95.6 11.9-24 37.1-41.9 37.1-70.7 0.2-38.7 22.8-75 14.2-114.2m-328.4 237.2c-32.1-7.8-61.9-23.1-88.8-41.9-28.9-19.3-39.7-55.2-68.3-75-26.7-31.9-21-75.5-31.9-113.3 4.4-26.4 9.6-52.5 12.3-79.2 13-21.1 33.2-38 38.7-63.5 19.1-27.4 48.2-46.3 71.6-70.1 17-19.6 44.1-11.3 66.4-12.1-2.2 21.6-4 44 1.4 65.3 2.6 13.1 8.6 26 6.5 39.7-4.5 29.2 6.5 58.5-1.3 87.3-15.6 60.3 1.4 121.2 2.9 182-2.2 26.9-3.5 54-9.6 80.6m243.1-114.3c-21.2 15.1-39.3 33.6-57.8 51.7-32.2 22.3-64.1 45.8-102.4 57 3.4-27.3 6.8-55.5-1.9-82.2-21.4-60.5 4.8-123.8 9.2-184.9-3.9-36.4-0.2-75.2-16.9-108.7-2.2-25.1 8.7-49.5 16.1-73.1 25.3 10.1 49.2 23.8 70.2 41.3 25.5 19.1 64.5 31.4 70.2 67 2.9 23.4 28.5 37.5 27.7 61.4-1.6 56.8 6.3 116.3-14.4 170.5',
                        fill: true,
                    }
                ],
                SvgViewbox: '-100 0 1050 1050'
            };
        case "blessing":
            return {
                cardImage: require('../assets/cards/citys-blessing.png')
            };
        case "initiative":
            return {
                cardImage: require('../assets/cards/initiative.png')
            };
        case "monarch":
            return {
                cardImage: require('../assets/cards/monarch.png')
            }

        default: return state
    }
}

type IconsObj = {
    [key: string]: {
        pathData: ShapeData<string>[];
        viewBox: string
    }
}

export const iconData: IconsObj = {
    'New Game': {
        pathData: [{
            path: 'M 19,45.9167L 25.6082,45.9167C 28.6524,49.3179 33.0762,51.4583 38,51.4583C 42.9238,51.4583 47.3476,49.3179 50.3918,45.9167L 58.5833,45.9167L 58.5833,57L 19,57L 19,45.9167 Z M 56.2083,48.2917L 53.4374,48.2917L 53.4374,53.0417L 56.2083,53.0417L 56.2083,48.2917 Z M 39.5833,33.25L 30.0833,23.75L 39.5833,14.25L 39.5833,20.6703C 46.7082,21.4579 52.25,27.4985 52.25,34.8333C 52.25,42.7034 45.8701,49.0833 38,49.0833C 30.1299,49.0833 23.75,42.7034 23.75,34.8333C 23.75,32.0174 24.5668,29.3923 25.9763,27.1819L 30.6522,30.1575C 29.7908,31.5083 29.2917,33.1125 29.2917,34.8333C 29.2917,39.6428 33.1905,43.5417 38,43.5417C 42.8095,43.5417 46.7083,39.6428 46.7083,34.8333C 46.7083,30.5646 43.6368,27.0132 39.5833,26.2686L 39.5833,33.25 Z ',
            fill: 'white'
        }],
        viewBox: "0 0 65 65"
    },
    "Players": {
        pathData: [{
            path: "M.221 16.268a15.064 15.064 0 0 0 1.789 1.9C2.008 18.111 2 18.057 2 18a5.029 5.029 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.784A2.968 2.968 0 0 1 4 9a2.988 2.988 0 0 1 5.022-2.2 5.951 5.951 0 0 1 2.022-.715 4.994 4.994 0 1 0-7.913 6.085 7.07 7.07 0 0 0-2.91 4.098zM23.779 16.268a7.07 7.07 0 0 0-2.91-4.1 4.994 4.994 0 1 0-7.913-6.086 5.949 5.949 0 0 1 2.022.715 2.993 2.993 0 1 1 3.614 4.74 1 1 0 0 0 .175 1.784A5.029 5.029 0 0 1 22 18c0 .057-.008.111-.01.167a15.065 15.065 0 0 0 1.789-1.899z",
            fill: 'white'
        },
        {
            path: "M18.954 20.284a7.051 7.051 0 0 0-3.085-5.114A4.956 4.956 0 0 0 17 12a5 5 0 1 0-8.869 3.17 7.051 7.051 0 0 0-3.085 5.114 14.923 14.923 0 0 0 1.968.849C7.012 21.088 7 21.046 7 21a5.031 5.031 0 0 1 3.233-4.678 1 1 0 0 0 .175-1.785A2.964 2.964 0 0 1 9 12a3 3 0 1 1 6 0 2.964 2.964 0 0 1-1.408 2.537 1 1 0 0 0 .175 1.785A5.031 5.031 0 0 1 17 21c0 .046-.012.088-.013.133a14.919 14.919 0 0 0 1.967-.849z",
            fill: "white"
        }],
        viewBox: "0 0 24 24"
    },
    "Coin Flip": {
        pathData: [{
            path: "M113.278,230.207h72.42c4.366,0,7.907-3.54,7.907-7.906v-32.608c15.392-13.067,24.141-31.926,24.141-52.341   c0-37.815-30.62-68.582-68.258-68.582S81.23,99.536,81.23,137.352c0,20.415,8.749,39.273,24.141,52.341v32.608   C105.371,226.667,108.912,230.207,113.278,230.207z M97.044,137.352c0-29.096,23.526-52.769,52.444-52.769   s52.444,23.673,52.444,52.769c0,16.763-7.653,32.158-20.999,42.238c-1.979,1.494-3.142,3.83-3.142,6.31v28.494h-9.172v-19.868   c0-4.366-3.54-7.906-7.906-7.906c-4.367,0-7.907,3.54-7.907,7.906v19.868h-6.639v-19.868c0-4.366-3.54-7.906-7.906-7.906   c-4.367,0-7.907,3.54-7.907,7.906v19.868h-9.169v-28.494c0-2.479-1.163-4.815-3.142-6.31   C104.698,169.51,97.044,154.114,97.044,137.352z",
            fill: "white"
        }, {
            path: "M132.128,163.443c5.018-5.075,8.785-13.303,3.762-18.377c-5.018-5.072-16.923-5.072-21.945,0   c-5.023,5.074-5.023,13.302,0,18.377C118.967,168.516,127.103,168.516,132.128,163.443z",
            fill: "white"
        }, {
            path: "M185.032,163.443c5.024-5.075,5.024-13.303,0-18.377c-5.022-5.072-16.928-5.072-21.946,0   c-5.021,5.074-1.255,13.302,3.764,18.377C171.873,168.516,180.01,168.516,185.032,163.443z",
            fill: "white"
        }, {
            path: "M144.686,169.574c2.654,0,4.802-2.176,4.802-4.859c0,2.684,2.147,4.859,4.8,4.859c2.651,0,4.803-2.176,4.803-4.859   c0-4.86-9.602-10.934-9.602-10.934s-9.603,6.073-9.603,10.934C139.886,167.398,142.036,169.574,144.686,169.574z",
            fill: "white"
        }, {
            path: "M148.5,0C66.617,0,0,66.617,0,148.5S66.617,297,148.5,297S297,230.383,297,148.5S230.383,0,148.5,0z M148.5,277.232   c-70.983,0-128.733-57.748-128.733-128.732S77.517,19.768,148.5,19.768S277.233,77.516,277.233,148.5   S219.483,277.232,148.5,277.232z",
            fill: "white"
        }, {
            path: "M148.448,52.383c5.455,0,9.872-4.429,9.872-9.884c0-5.466-4.427-9.884-9.883-9.884c-5.465,0-9.884,4.428-9.884,9.894   C138.564,47.964,142.991,52.383,148.448,52.383z",
            fill: "white"
        }, {
            path: "M107.896,60.447c1.255,0,2.539-0.246,3.785-0.761c5.031-2.096,7.423-7.877,5.337-12.918   c-2.096-5.041-7.877-7.433-12.917-5.337c-5.041,2.085-7.434,7.877-5.338,12.918C100.334,58.145,104.011,60.447,107.896,60.447z",
            fill: "white"
        }, {
            path: "M46.746,117.07c1.245,0.514,2.519,0.751,3.785,0.751c3.874,0,7.561-2.293,9.133-6.098   c2.095-5.042-0.297-10.823-5.347-12.918c-5.042-2.086-10.823,0.306-12.919,5.347c0.01,0,0.01,0,0.01,0   C39.313,109.192,41.706,114.975,46.746,117.07z",
            fill: "white"
        }, {
            path: "M185.225,59.646c1.235,0.515,2.52,0.751,3.774,0.751c3.885,0,7.562-2.292,9.143-6.107   c2.086-5.04-0.315-10.823-5.356-12.907c-5.041-2.086-10.823,0.306-12.908,5.356C177.782,51.779,180.184,57.563,185.225,59.646z",
            fill: "white"
        }, {
            path: "M223.394,83.367c2.531,0,5.06-0.968,6.998-2.896c3.855-3.864,3.845-10.121-0.019-13.976   c-3.864-3.864-10.121-3.854-13.975,0.01c-3.855,3.854-3.855,10.12,0.01,13.976C218.334,82.408,220.864,83.367,223.394,83.367z",
            fill: "white"
        }, {
            path: "M216.555,216.37c-3.854,3.864-3.845,10.121,0.021,13.975c1.927,1.928,4.457,2.886,6.977,2.886   c2.541,0,5.07-0.968,6.998-2.904c0.01,0,0.01,0,0.01,0c3.845-3.865,3.845-10.121-0.02-13.977   C226.666,212.496,220.409,212.506,216.555,216.37z",
            fill: "white"
        }, {
            path: "M246.423,117.723c1.265,0,2.551-0.248,3.786-0.762c5.04-2.095,7.432-7.887,5.336-12.928   c-2.095-5.039-7.877-7.422-12.918-5.326c-5.04,2.096-7.432,7.877-5.336,12.917C238.871,115.43,242.549,117.723,246.423,117.723z",
            fill: "white"
        }, {
            path: "M42.516,158.621c5.456-0.011,9.874-4.438,9.864-9.895c0-0.068,0.01-0.147,0.01-0.227h-0.01   c0-5.456-4.429-9.884-9.884-9.884c-5.456,0-9.884,4.428-9.884,9.884c0,0.039,0,0.079,0,0.119c0,0.049,0,0.088,0,0.138   c0.01,5.455,4.438,9.864,9.884,9.864C42.506,158.621,42.516,158.621,42.516,158.621z",
            fill: "white"
        }, {
            path: "M185.421,237.273c-5.04,2.096-7.422,7.887-5.326,12.928c1.581,3.796,5.258,6.078,9.133,6.078   c1.264,0,2.55-0.237,3.795-0.762c5.04-2.094,7.422-7.886,5.326-12.916C196.244,237.56,190.463,235.179,185.421,237.273z",
            fill: "white"
        }, {
            path: "M254.487,138.498c-5.455,0.01-9.873,4.438-9.873,9.893c0.01,5.457,4.438,9.874,9.894,9.874   c5.455-0.01,9.884-4.438,9.874-9.894C264.371,142.915,259.943,138.488,254.487,138.498z",
            fill: "white"
        }, {
            path: "M250.287,179.82c-5.05-2.096-10.833,0.307-12.908,5.357c-2.095,5.041,0.307,10.822,5.357,12.908   c1.235,0.504,2.511,0.75,3.766,0.75c3.884,0,7.57-2.303,9.143-6.107C257.729,187.678,255.328,181.896,250.287,179.82z",
            fill: "white"
        }, {
            path: "M148.665,244.617c-5.466,0.01-9.884,4.438-9.874,9.893c0.01,5.466,4.438,9.884,9.904,9.874   c5.455-0.01,9.872-4.439,9.863-9.904C158.549,249.025,154.12,244.607,148.665,244.617z",
            fill: "white"
        }, {
            path: "M46.825,180.156c-5.041,2.096-7.422,7.888-5.317,12.928c1.581,3.796,5.248,6.078,9.122,6.078   c1.266,0,2.56-0.246,3.806-0.76c5.03-2.106,7.413-7.897,5.308-12.928C57.647,180.434,51.855,178.051,46.825,180.156z",
            fill: "white"
        }, {
            path: "M111.868,237.392c-5.04-2.075-10.822,0.326-12.907,5.368c-2.076,5.049,0.326,10.832,5.376,12.907   c1.226,0.515,2.511,0.751,3.766,0.751c3.885,0,7.561-2.303,9.133-6.117C119.32,245.25,116.919,239.477,111.868,237.392z",
            fill: "white"
        }, {
            path: "M73.53,83.446c2.53,0,5.061-0.968,6.987-2.896c3.855-3.865,3.855-10.121-0.01-13.977c-3.854-3.854-10.111-3.854-13.976,0   c-3.854,3.865-3.854,10.121,0.011,13.986C68.47,82.488,71,83.446,73.53,83.446z",
            fill: "white"
        }, {
            path: "M66.69,216.627c-3.854,3.864-3.844,10.121,0.021,13.975c1.938,1.918,4.457,2.877,6.978,2.877   c2.54,0,5.07-0.969,7.007-2.906c3.846-3.864,3.835-10.12-0.028-13.976C76.802,212.743,70.536,212.752,66.69,216.627z",
            fill: "white"
        }],
        viewBox: "0 -15 320 320"
    },
    "Dice": {
        pathData: [{
            path: "M263.296,4.469c-4.715-1.707-9.877-1.707-14.592,0L20.416,87.499L256,151.733l235.605-64.235L263.296,4.469z      M256,109.856c-11.776,0-21.333-9.557-21.333-21.333S244.224,67.189,256,67.189s21.333,9.557,21.333,21.333     S267.776,109.856,256,109.856z",
            fill: "white"
        }, {
            path: "M277.333,190.155v19.989v298.667l220.629-80.235c8.427-3.072,14.037-11.093,14.037-20.053V126.155L277.333,190.155z      M341.333,408.523c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333c11.776,0,21.333,9.557,21.333,21.333     S353.109,408.523,341.333,408.523z M405.333,323.189c-11.776,0-21.333-9.557-21.333-21.333s9.557-21.333,21.333-21.333     s21.333,9.557,21.333,21.333S417.109,323.189,405.333,323.189z M448,237.856c-11.776,0-21.333-9.557-21.333-21.333     s9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333S459.776,237.856,448,237.856z",
            fill: "white"
        }, {
            path: "M0,408.523c0,8.96,5.611,16.981,14.037,20.053l220.629,80.235V210.144v-19.989L0,126.155V408.523z M170.667,237.856     c11.776,0,21.333,9.557,21.333,21.333s-9.557,21.333-21.333,21.333s-21.333-9.557-21.333-21.333S158.891,237.856,170.667,237.856     z M170.667,365.856c11.776,0,21.333,9.557,21.333,21.333s-9.557,21.333-21.333,21.333s-21.333-9.557-21.333-21.333     S158.891,365.856,170.667,365.856z M64,195.189c11.776,0,21.333,9.557,21.333,21.333S75.776,237.856,64,237.856     s-21.333-9.557-21.333-21.333S52.224,195.189,64,195.189z M64,323.189c11.776,0,21.333,9.557,21.333,21.333     c0,11.776-9.557,21.333-21.333,21.333s-21.333-9.557-21.333-21.333C42.667,332.747,52.224,323.189,64,323.189z",
            fill: "white"
        }
        ],
        viewBox: "0 -15 532 532"
    },
}

export const manaSymbols: any[] = [
    require('../assets/icons/mana/black.png'),
    require('../assets/icons/mana/blue.png'),
    require('../assets/icons/mana/white.png'),
    require('../assets/icons/mana/green.png'),
    require('../assets/icons/mana/red.png')
]
