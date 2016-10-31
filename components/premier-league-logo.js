import React, { PropTypes } from 'react';
import clrs from '../clrs';

const PremierLeagueLogo = ({ css, fill = clrs.white }) => (
  <svg viewBox="0 0 259 322" version="1.1" xmlns="http://www.w3.org/2000/svg" className={ css }>
    <path fill={ fill }
      d="M197.449519,312.202093 C216.43577,297.528556 230.039403,277.23148 236.004694,254.676493 L238.321947,245.914857 L242.984692,250.507492 C245.549198,253.033431 247.8662,254.718102 248.133586,254.251183 C248.400961,253.784274 249.573653,250.466757 250.73955,246.878933 C261.723931,213.076736 260.748032,181.009942 247.96685,155.771454 C244.606238,149.135395 235.841812,136.048921 235.841812,137.667145 C235.841812,137.96509 237.380572,141.546662 239.261274,145.626203 C250.715484,170.472148 252.783877,202.489465 244.838117,231.951921 L243.654346,236.341269 L237.416932,229.429214 L231.179508,222.517169 L230.017585,231.938181 C227.591152,251.61194 222.314302,266.950222 213.348957,280.388986 C208.399236,287.808475 196.357737,300.851473 191.035464,304.558312 C188.926054,306.027463 188.845537,305.908488 187.137732,298.798505 C186.178624,294.805534 185.113809,291.002892 184.771475,290.348192 C184.344328,289.531292 182.418545,290.263088 178.633336,292.680739 C158.000419,305.859061 136.28116,312.134933 115.994591,310.780482 C106.13759,310.122369 93.9959727,307.365867 86.6593529,304.120538 C82.7157606,302.376093 82.1434942,301.760633 82.6627793,299.822325 C85.007825,291.069069 86.4834392,273.326683 85.9809481,259.925565 C85.4352497,245.372157 84.1378947,237.360161 80.235605,224.444377 L78.1572424,217.56542 L71.3715629,227.956932 C63.101838,240.621096 54.6280106,251.150681 45.3553269,260.284718 L38.36839,267.167198 L36.7419297,262.270376 C30.465417,243.373574 29.4257129,208.371388 34.5625009,188.898749 C35.6196022,184.891456 35.6598882,183.652949 34.7331328,183.652949 C34.0658829,183.652949 29.2519077,184.999813 24.0354097,186.645987 C11.510276,190.598534 11.6355207,190.611551 12.4620519,185.442716 C14.8854226,170.287789 28.3761375,143.063343 39.6418186,130.593573 C43.8233523,125.96512 43.9716654,126.11338 33.6887871,124.642482 C30.9823788,124.255348 28.5979071,123.428192 28.3899609,122.804352 C27.7439188,120.866225 39.6616183,106.046697 48.8951059,97.3064269 L57.7001662,88.9717077 L58.4518449,94.1948253 C59.3973513,100.764768 62.4960267,106.926953 66.9980821,111.190291 C68.9194485,113.009774 70.6522228,114.337701 70.848692,114.141228 C71.0451602,113.944756 70.243239,111.32705 69.0666446,108.324107 C66.2384911,101.105977 66.0381551,90.304113 68.6346365,85.0307569 C72.74561,76.6815248 81.9391207,74.1221571 91.7255175,78.6025189 L97.3391018,81.1724996 L95.8740052,78.3393332 C95.0682151,76.7810917 93.2540308,74.1336582 91.8424957,72.4561464 L89.2760767,69.4061259 L97.3441699,66.2947391 C115.005997,59.4836186 136.067526,56.384312 153.119253,58.0871653 L163.081751,59.0820603 L168.994394,65.4175267 L174.907037,71.7529931 L174.224849,66.4554073 L173.542651,61.1578226 L176.340902,61.8334173 C181.069182,62.9749905 195.846259,68.3049249 202.723439,71.3493173 L209.246755,74.2370617 L205.232407,70.7434899 C196.684987,63.3049148 179.058335,56.007465 162.579957,53.0853387 C158.440161,52.3512238 148.504649,51.76681 140.501042,51.7866408 C120.530463,51.8361177 106.125316,54.7644663 86.8091353,62.7013766 C82.3933523,64.5157977 76.793454,66.5427395 74.3649158,67.205691 C71.5893092,67.9633872 68.048373,70.164631 64.8308388,73.1326052 C62.0156347,75.7294559 57.0025999,79.8527104 53.6907627,82.2953941 C45.1203722,88.6165824 31.0110502,102.459555 24.6405536,110.797206 C19.2612016,117.83765 12.0419002,129.16588 12.0419002,130.566476 C12.0419002,130.964418 13.9612604,131.588489 16.3071451,131.953313 C24.5611107,133.236951 24.4337866,133.094431 21.5403699,137.810889 C9.8428021,156.878672 2.57757753,177.702541 0.557062756,197.954064 C0.0932951448,202.602379 0.265727457,203.72469 1.44366166,203.72469 C2.61412818,203.72469 9.72663288,201.698498 20.5723901,198.275343 C21.2196776,198.071043 21.5947302,205.840914 21.6287989,220.160696 C21.6736994,239.032749 22.0036718,243.812684 23.8288032,252.029573 C26.1710801,262.574673 31.1045655,276.158916 33.9044017,279.772502 L35.6741904,282.056666 L42.6753019,276.318888 C51.7373066,268.892103 60.0037487,260.355391 67.5741762,250.605934 C72.8821089,243.770202 73.7751418,243.016177 74.7058002,244.584412 C76.5565663,247.703109 76.0044188,281.065393 73.920401,292.04035 C70.5399184,309.84281 69.9521124,307.396356 78.6105587,311.560901 C94.5724331,319.238252 117.778226,322.764214 135.558627,320.213778 C145.93642,318.725178 162.932999,313.192523 171.395888,308.548173 C174.864726,306.644519 177.8595,305.086982 178.050964,305.086982 C178.242419,305.086982 178.92831,307.232149 179.575152,309.85402 C182.849184,323.124713 182.412032,322.323439 185.505448,320.723771 C187.030961,319.934902 192.405792,316.100145 197.449519,312.202093 L197.449519,312.202093 L197.449519,312.202093 Z M211.45275,219.997051 C212.851399,217.631396 214.868629,212.891263 215.935492,209.463422 L217.875245,203.230975 L214.556273,196.703615 L211.23729,190.176265 L204.488548,189.879906 C197.999906,189.594967 197.536089,189.73579 192.453823,193.533906 C184.645123,199.369554 177.677078,203.374759 172.866725,204.792497 C170.52084,205.483888 168.60148,206.213917 168.60148,206.414795 C168.60148,208.345155 176.996485,222.792844 178.118144,222.792844 C180.4418,222.792844 190.751007,217.959278 194.458208,215.131661 C196.31673,213.714094 198.00659,212.723534 198.21346,212.930403 C198.562126,213.27907 200.716265,229.046375 200.716265,231.249781 C200.716265,232.957063 208.798844,224.485855 211.45275,219.997051 L211.45275,219.997051 L211.45275,219.997051 Z M177.13197,187.649443 C181.547753,185.490657 188.547772,181.09606 192.687569,177.883678 L200.214472,172.042992 L200.503906,163.332399 L200.793351,154.621795 L195.987765,152.170433 C193.344698,150.822184 189.423412,148.517065 187.273799,147.047954 C183.367547,144.378292 183.362649,144.37774 178.296412,146.034813 C168.48409,149.244265 146.522565,162.160309 146.522565,164.721694 C146.522565,165.211084 149.766118,171.72888 153.730457,179.205694 L160.93835,192.799892 L165.020812,192.187212 C167.266167,191.850238 172.716187,189.808239 177.13197,187.649443 L177.13197,187.649443 L177.13197,187.649443 Z M226.281662,183.427684 C228.983208,174.330569 227.608203,154.641817 223.770557,147.471107 C222.817922,145.691095 222.367341,145.842255 216.806184,149.807548 L210.860353,154.047131 L210.806259,163.296812 L210.752166,172.546492 L215.337866,177.709747 C217.860001,180.549537 220.644112,184.383992 221.52477,186.230753 C222.405427,188.077523 223.491429,189.362637 223.938105,189.08658 C224.384772,188.810523 225.439391,186.264022 226.281692,183.427684 L226.281662,183.427684 L226.281662,183.427684 Z M164.064413,127.383529 C159.108168,122.378079 154.149826,117.783025 153.04588,117.172292 C151.941935,116.561569 146.045008,115.787031 139.941603,115.4511 C130.407656,114.926344 128.036291,114.431385 123.106771,111.937281 C119.951012,110.340614 117.520776,108.549211 117.706239,107.956392 C118.316289,106.006393 127.555462,100.402975 132.660187,98.8870364 C137.427075,97.4714166 137.948248,97.51434 143.529587,99.782246 C146.753922,101.092409 151.298334,103.301153 153.628272,104.69057 C157.845656,107.205508 157.876155,107.208188 160.473147,105.291156 C161.907875,104.232081 164.518235,102.954524 166.273941,102.452159 L169.46612,101.538774 L167.532168,104.710451 C163.894355,110.676454 164.777111,112.936362 174.961923,123.731185 L184.234114,133.558721 L190.177076,132.010778 C198.999449,129.712845 208.894506,130.047973 217.275452,132.928559 C218.379397,133.307995 215.443905,130.01915 210.752136,125.620016 C199.73563,115.290647 200.18313,115.782816 196.220908,109.638404 C192.321089,103.590769 193.369446,102.900692 199.600026,107.414094 C203.404213,110.169844 203.951077,110.310416 205.365412,108.896081 C206.224804,108.036689 208.21022,106.670456 209.777442,105.860009 C212.481366,104.461762 212.733959,104.522549 214.722105,107.050063 C217.973356,111.183356 218.440385,114.45213 216.055581,116.383222 C214.063391,117.996408 214.107308,118.10894 218.828864,123.489913 C221.467495,126.497061 223.97868,128.60631 224.409259,128.177136 C224.839848,127.747962 225.20397,124.360856 225.218422,120.650233 C225.249533,112.67563 222.902484,106.715828 217.280259,100.492695 C212.343654,95.028465 196.880576,83.381208 188.503354,78.8170607 L181.810161,75.1704248 L180.698939,80.4868188 C178.863428,89.2684012 178.886601,89.2630842 169.462557,83.0649436 C159.515896,76.5230745 151.327328,72.2547866 148.723642,72.2547866 C141.194953,72.2547866 122.196638,79.4552889 113.782876,85.4975985 L109.220609,88.773969 L112.143938,91.3859648 L115.067276,93.9979617 L109.970489,96.677509 C104.091617,99.7682159 95.0949406,107.176093 95.8117125,108.335859 C96.0792588,108.768756 98.5663683,109.423837 101.338627,109.791582 C105.662512,110.365172 106.382214,110.776331 106.401121,112.683729 C106.466455,119.271324 113.595295,127.815042 122.385483,131.840469 C126.423797,133.689789 129.102401,133.955931 145.518978,134.138965 C155.730476,134.252812 165.440181,134.788286 167.096099,135.328898 C173.27103,137.344853 172.859258,136.265686 164.064413,127.383529 L164.064413,127.383529 Z M79.0563892,57.8181809 C106.626798,43.940782 141.237183,39.8118071 171.479326,46.7922417 C174.994048,47.6035024 177.959016,48.132181 178.068156,47.9670829 C178.177286,47.8019848 178.827871,43.6023764 179.513893,38.6346205 C180.199925,33.6668646 181.99193,25.9130086 183.496147,21.4038298 C186.849322,11.3519892 186.227509,11.5035499 174.864585,23.5076965 L166.770124,32.0589375 L166.143605,23.3037345 C165.799013,18.4883723 165.194934,11.5606711 164.801207,7.90884161 L164.085338,1.26915245 L151.059009,15.6866412 C143.894521,23.6162605 137.791568,30.1041306 137.496875,30.1041306 C137.202181,30.1041306 133.829948,25.0234712 130.00302,18.8137763 C126.176092,12.6040815 122.071521,6.04899007 120.881759,4.24690602 L118.718547,0.9703894 L113.897144,15.2863635 C111.245376,23.1601492 108.709281,30.6097779 108.261391,31.8410949 C107.486742,33.9706976 106.70001,33.5610705 92.1255975,23.4396543 C83.6988083,17.5875455 76.234454,12.5808384 75.5381452,12.3136404 C74.6324039,11.9660741 74.4245208,12.6433368 74.8076392,14.6935577 C76.320914,22.7917084 79.1478993,41.612451 78.8897837,41.8705665 C78.7267199,42.0336294 76.5269022,40.5892297 74.0013002,38.6607891 C68.8967945,34.7632092 57.2217813,27.721069 56.7509856,28.255735 C56.5848649,28.4443933 58.6503674,32.4179367 61.3409913,37.0858308 C64.0316142,41.7537259 67.4755506,49.091282 68.9941816,53.391513 C70.5128135,57.691744 71.8795074,61.2112877 72.0312799,61.2127218 C72.1830523,61.2141268 75.3443515,59.6866121 79.0563892,57.8181809 L79.0563892,57.8181809 L79.0563892,57.8181809 Z" />
  </svg>
);

PremierLeagueLogo.propTypes = {
  css: PropTypes.object,
  fill: PropTypes.string,
};

export default PremierLeagueLogo;
