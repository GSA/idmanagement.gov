---
layout: wide
collection: university
title: FICAM Policy Matrix Map
permalink: /university/policymap/
#sidenav: university
sticky_sidenav: true

# subnav:
#   - text: Back to ICAM Policy Matrix
#     href: /university/policymatrix/ 

---

<div class="usa-section">
  <div class="grid-container">
    <div class="grid-row grid-gap flex-align-start">
      <main class="usa-layout-docs usa-layout-docs__main usa-prose{% if sidenav %} desktop:grid-col-9{% endif %}" id="main-content">
        <h2>FICAM Policy Matrix Map</h2>
        <p>The policy map below presents a visual overview of the laws, policies and standards relevant to FICAM. The documents are organized according to the government body that produced it, and the relationships between the documents are illustrated by arrows connecting them.</p>
        <p><i>Click on a policy on the map to view its associated document in a new window.</i></p>
        <p>
          <a href="{{site.baseurl}}/university/policymatrix/" title="Back to FICAM Policy Matrix" class="usa-button" type="button">
            <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="{{site.baseurl}}/assets/img/sprite.svg#arrow_back"></use></svg>  Back to FICAM Policy Matrix
          </a>
        </p>
      </main>
    </div>
  </div>
  <div class="grid-container" style="max-width:85%;margin-top:20px;">

  <!-- Start of Policy Matrix (SVG) Upated: 11/15/2024 - CJB --> 
  <style>
      /* needed to remove underline in links - do not remove */    
      a {
        text-decoration: none;
      }

      /* SVG link text must not inherit the site's blue anchor color. Black
         remains readable on every pastel policy-map panel and button. */
      svg text, svg tspan {
        fill: #1b1b1b;
      }

    /* Act of Congress Buttons */
      .aocbutton {
        fill: rgb(255, 204, 153);
        stroke: #000;
        stroke-miterlimit: 10;
        letter-spacing: .03em;
        cursor: pointer;
        font-family: Arial-BoldMT, Arial; 
        font-size: 12px; 
      }
      .aocbutton:hover, .text:hover {
        fill: rgba(0, 0, 0, 0.325);
        stroke: #000000;
      }

      /* Executive Order Buttons */
      .eobutton {
        fill: rgb(205, 235, 139);
        stroke: #000;
        stroke-miterlimit: 10;
        letter-spacing: .03em;
        cursor: pointer;
        font-family: Arial-BoldMT, Arial; 
        font-size: 12px; 
      }
      .eobutton:hover  {
        fill: rgba(0, 0, 0, 0.325);
        stroke: #000000;
      }

      /* OMB and OPM Buttons */
      .fpbutton {
        /* fill: rgb(204, 229, 255); */
        fill: #C0D7F0;
        stroke: #000;
        stroke-miterlimit: 10;
        letter-spacing: .03em;
        cursor: pointer;
        font-family: Arial-BoldMT, Arial; 
        font-size: 12px; 
      }
      .fpbutton:hover  {
        fill: rgba(0, 0, 0, 0.325);
        stroke: #000000;
      }

      /* Technical Standard Buttons */
      .tsbutton {
        fill: rgb(216, 216, 216);
        stroke: #000;
        stroke-miterlimit: 10;
        letter-spacing: .03em;
        cursor: pointer;
        font-family: Arial-BoldMT, Arial; 
        font-size: 12px; 
      }
      .tsbutton:hover  {
        fill: rgba(0, 0, 0, 0.325);
        stroke: #000000;
      }

      .gbbutton {
        fill: rgb(181, 159, 205);
        stroke: #000;
        stroke-miterlimit: 10;
        letter-spacing: .03em;
        /* cursor: pointer; */
        font-family: Arial-BoldMT, Arial; 
        font-size: 12px; 
      }
      /* .gbbutton:hover  {
        fill: rgb(145, 119, 172);
        stroke: #000000;
      } */

  </style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1506 1695.8">
    <g id="Executive_Orders_Base" data-name="Executive Orders Base">
      <rect id="Panel" x="665" y="174.8" width="763" height="151" style="fill: #d5e8d4;"/>
      <text id="Executive_Orders" data-name="Executive Orders" transform="translate(1248.13 317.68)" style="font-family: Arial-BoldMT, Arial; font-size: 11px; font-weight: 700;"><tspan x="0" y="0">Executive Orders and Directives</tspan></text>
    </g>
    <g id="Act_of_Congress_Base" data-name="Act of Congress Base">
      <rect id="Panel-2" data-name="Panel" x="37" y="174.8" width="631" height="151" style="fill: #ffe6cc;"/>
      <text transform="translate(46.16 319.03)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Act of Congress</tspan></text>
    </g>
    <g id="OMB_and_OPM_Panels" data-name="OMB and OPM Panels">
      <rect id="OMB_Panel" data-name="OMB Panel" x="37" y="344.8" width="1391" height="161.38" style="fill: #cce5ff;"/>
      <g id="OPM_Panel" data-name="OPM Panel">
        <rect x="1196.71" y="344.85" width="231.29" height="271.04" style="fill: #cce5ff;"/>
      </g>
      <text transform="translate(47.37 498.82)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">OMB Circulars and Memoranda</tspan></text>
      <text transform="translate(1206.13 608.78)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">OPM Memoranda</tspan></text>
    </g>
    <g id="OPM_and_OMB_dividing_lines" data-name="OPM and OMB dividing lines">
      <line x1="1195.71" y1="344.84" x2="1195.95" y2="506.17" style="fill: none; stroke: #666; stroke-miterlimit: 10; stroke-width: 2px;"/>
      <line x1="1067.27" y1="344.84" x2="1067.51" y2="506.17" style="fill: none; stroke: #666; stroke-miterlimit: 10; stroke-width: 2px;"/>
    </g>
    <g id="NIST_Technical_Standards_Panel" data-name="NIST Technical Standards Panel">
      <rect id="NIST_TSPanel" data-name="NIST TSPanel" x="35.96" y="524.56" width="1042.2" height="332.64" style="fill: #eee;"/>
      <text transform="translate(47.15 849.07)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">NIST </tspan><tspan x="30.67" y="0" style="letter-spacing: -.07em;">T</tspan><tspan x="37.11" y="0">echnical Standards</tspan></text>
    </g>
    <g id="DOD_Guidance_Panel" data-name="DOD Guidance Panel">
      <rect id="NIST_TSPanel-2" data-name="NIST TSPanel" x="38" y="881.85" width="140.64" height="94.86" style="fill: #eee;"/>
      <text transform="translate(98.24 971.27)" style="font-family: ArialMT, Arial; font-size: 11px;"><tspan x="0" y="0">DOD Guidance</tspan></text>
    </g>
    <g id="NSA_Guidance_Panel" data-name="NSA Guidance Panel">
      <rect id="NIST_TSPanel-3" data-name="NIST TSPanel" x="185.67" y="881.85" width="234.83" height="94.86" style="fill: #eee;"/>
      <text transform="translate(340.49 971.27)" style="font-family: ArialMT, Arial; font-size: 11px;"><tspan x="0" y="0">NS</tspan><tspan x="15.28" y="0" style="letter-spacing: -.06em;">A</tspan><tspan x="22.01" y="0" xml:space="preserve"> Guidance</tspan></text>
    </g>
    <g id="GSA_Panels" data-name="GSA Panels">
      <rect id="Base_Panel" data-name="Base Panel" x="38" y="1072.84" width="1229.52" height="404.64" style="fill: #e6e4fa;"/>
      <rect id="First_Inner_Gray_Panel" data-name="First Inner Gray Panel" x="94.26" y="1132.96" width="1154.78" height="322.44" style="fill: #eee; stroke: #000; stroke-miterlimit: 10;"/>
      <rect id="Third_Blue_Box_with_Border" data-name="Third Blue Box with Border" x="114.55" y="1202.44" width="1122.73" height="233.28" style="fill: #e6e4fa; stroke: #000; stroke-miterlimit: 10;"/>
      <rect id="Forth_Gray_Base_Panel" data-name="Forth Gray Base Panel" x="135.53" y="1252.48" width="1092.39" height="164.52" style="fill: #eee; stroke: #000; stroke-miterlimit: 10;"/>
      <rect id="Inner_Blue_Box_with_Border_2" data-name="Inner Blue Box with Border 2" x="776.5" y="1289.72" width="440.86" height="116.08" style="fill: #e6e4fa; stroke: #000; stroke-miterlimit: 10;"/>
      <rect id="Inner_Blue_Box_with_Border_1" data-name="Inner Blue Box with Border 1" x="593" y="1289.72" width="169.25" height="116.08" style="fill: #e6e4fa; stroke: #000; stroke-miterlimit: 10;"/>
    </g>
    <g id="FedRAMP_Panel" data-name="FedRAMP Panel">
      <rect id="NIST_TSPanel-4" data-name="NIST TSPanel" x="466.16" y="880.52" width="353.88" height="106.64" style="fill: #eee;"/>
      <g id="Jointly_Signed_By" data-name="Jointly Signed By">
        <g id="eorect">
          <rect x="1025.5" y="412.3" width="209" height="16.16" rx="6.07" ry="6.07" style="fill: #e6e6e6;"/>
          <path d="M1228.43,412.8c3.07,0,5.57,2.5,5.57,5.57v4.02c0,3.07-2.5,5.57-5.57,5.57h-196.86c-3.07,0-5.57-2.5-5.57-5.57v-4.02c0-3.07,2.5-5.57,5.57-5.57h196.86M1228.43,411.8h-196.86c-3.63,0-6.57,2.94-6.57,6.57v4.02c0,3.63,2.94,6.57,6.57,6.57h196.86c3.63,0,6.57-2.94,6.57-6.57v-4.02c0-3.63-2.94-6.57-6.57-6.57h0Z" style="fill: #bab9b9;"/>
        </g>
        <text id="Jointly_Signed_By-2" data-name="Jointly Signed By" transform="translate(1058.04 424.6) scale(.94 1)"><tspan><tspan x="0" y="0" style="font-family: Arial-ItalicMT, Arial; font-size: 9px; font-style: italic;">Jointly signed by OMB, DNI, and OPM</tspan><tspan x="153.06" y="0" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"> </tspan></tspan></text>
      </g>
    </g>
    <g id="ISC_Standards_Panel" data-name="ISC Standards Panel">
      <rect id="ISC_Panel" data-name="ISC Panel" x="1284.08" y="697.3" width="154.08" height="254.61" style="fill: #eee;"/>
      <text transform="translate(1357.78 941.72)" style="font-family: ArialMT, Arial; font-size: 11px;"><tspan x="0" y="0">ISC Standards</tspan></text>
    </g>
    <g id="DHS_Panel" data-name="DHS Panel">
      <rect id="Zero_Trust_background_box" data-name="Zero Trust background box" x="1297.13" y="1216.09" width="110.34" height="59.55" style="fill: #eee; stroke: #000; stroke-miterlimit: 10;"/>
      <rect x="1284.08" y="1072.84" width="133.92" height="211.46" style="fill: #e6e4fa;"/>
    </g>
    <g id="EO_Lines" data-name="EO Lines">
      <g id="_Line_-2" data-name="&amp;lt;Line&amp;gt;">
        <g>
          <polyline points="1267.38 230.12 1487.12 230.3 1487.12 771.14 1423.54 771.14" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1417.5,771.14c2.84-1.05,6.36-2.85,8.55-4.76l-1.72,4.76,1.72,4.75c-2.18-1.9-5.71-3.7-8.55-4.75Z"/>
        </g>
        <g>
          <polyline points="1418 270.3 1447.88 270.3 1447.88 671.3 1193.54 671.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1187.5,671.3c2.84-1.05,6.36-2.85,8.55-4.76l-1.72,4.76,1.72,4.75c-2.18-1.9-5.71-3.7-8.55-4.75Z"/>
        </g>
        <g>
          <polyline points="1467.32 230.3 1467.32 715.46 1423.54 715.33" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1417.5,715.31c2.84-1.04,6.37-2.83,8.56-4.73l-1.73,4.75,1.71,4.76c-2.18-1.91-5.7-3.72-8.53-4.78Z"/>
        </g>
        <g>
          <line x1="427.28" y1="411.8" x2="427.1" y2="688.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M427.1,694.3c-1.05-2.84-2.85-6.37-4.75-8.55l4.75,1.72,4.76-1.72c-1.91,2.18-3.71,5.71-4.76,8.54Z"/>
        </g>
        <g>
          <polyline points="491.05 447.8 491.05 711.8 439.53 711.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M433.5,711.19c2.85-1.02,6.39-2.78,8.6-4.67l-1.77,4.74,1.67,4.77c-2.16-1.93-5.67-3.76-8.5-4.84Z"/>
        </g>
        <g>
          <path d="M507.2,447.8c-.21,0-.05,121.72,0,150.47" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M507.2,604.3c-1.06-2.84-2.86-6.36-4.77-8.54l4.76,1.71,4.75-1.73c-1.9,2.19-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <polyline points="537.26 447.8 537.53 535.22 697.64 535.22 697.82 1347.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M697.82,1353.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <line x1="717" y1="479.8" x2="718.51" y2="1149.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M718.52,1155.3c-1.06-2.84-2.87-6.36-4.78-8.54l4.76,1.71,4.75-1.73c-1.9,2.19-3.69,5.72-4.74,8.56Z"/>
        </g>
      </g>
      <g id="_Line_-3" data-name="&amp;lt;Line&amp;gt;">
        <line x1="827.5" y1="534.3" x2="827.5" y2="315.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
      </g>
      <g id="_Line_-4" data-name="&amp;lt;Line&amp;gt;">
        <g>
          <line x1="827.5" y1="315.3" x2="827.5" y2="537.87" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M827.5,543.91c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <line x1="917.5" y1="264.8" x2="917.5" y2="587.76" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M917.5,593.8c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <polyline points="916.88 409.36 978.87 409.36 978.87 549.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M978.87,555.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <polyline points="1207.22 305.43 1207.22 335.56 1247.36 335.56 1287.5 335.56 1287.5 350.76" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1287.5,356.8c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <line x1="1247.36" y1="335.56" x2="1247.36" y2="358.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1247.36,364.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
        <g>
          <polyline points="917.5 315.3 1011 315.3 1011 357.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
          <path d="M1011,363.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
        </g>
      </g>
    </g>
    <g id="AOC_Lines" data-name="AOC Lines">
      <g>
        <line x1="601.5" y1="369.26" x2="601.5" y2="245.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M601.5,375.3c1.05-2.84,2.85-6.36,4.76-8.55l-4.76,1.72-4.75-1.72c1.9,2.18,3.7,5.71,4.75,8.55Z"/>
      </g>
      <g>
        <line x1="367.5" y1="419.26" x2="367.5" y2="315.8" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M367.5,425.3c1.05-2.84,2.85-6.36,4.76-8.55l-4.76,1.72-4.75-1.72c1.9,2.18,3.7,5.71,4.75,8.55Z"/>
      </g>
      <line x1="237.5" y1="235.3" x2="17.5" y2="235.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
      <path d="M287.5,255.8v184.5" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
      <g>
        <line x1="287.01" y1="440.3" x2="318.46" y2="440.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M324.5,440.3c-2.84,1.05-6.36,2.85-8.55,4.76l1.72-4.76-1.72-4.75c2.18,1.9,5.71,3.7,8.55,4.75Z"/>
      </g>
      <line x1="17.5" y1="1150.78" x2="17.5" y2="234.81" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
      <g>
        <line x1="17.01" y1="1150.31" x2="80.46" y2="1150.31" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M86.5,1150.31c-2.84,1.05-6.36,2.85-8.55,4.76l1.72-4.76-1.72-4.75c2.18,1.9,5.71,3.7,8.55,4.75Z"/>
      </g>
      <line x1="287.5" y1="440.3" x2="287.5" y2="752.64" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
      <g>
        <line x1="287.5" y1="752.14" x2="329.08" y2="752.19" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M335.12,752.2c-2.84,1.05-6.37,2.84-8.55,4.74l1.73-4.75-1.71-4.76c2.18,1.91,5.7,3.71,8.54,4.77Z"/>
      </g>
      <g>
        <line x1="287.5" y1="555.35" x2="330.96" y2="555.51" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M337,555.53c-2.84,1.04-6.37,2.83-8.57,4.72l1.74-4.75-1.7-4.76c2.18,1.91,5.69,3.72,8.53,4.79Z"/>
      </g>
      <g>
        <line x1="287.5" y1="585.09" x2="330.96" y2="585.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M337,585.28c-2.84,1.04-6.37,2.83-8.57,4.72l1.74-4.75-1.7-4.76c2.18,1.91,5.69,3.72,8.53,4.79Z"/>
      </g>
      <g>
        <line x1="287.39" y1="615.28" x2="330.85" y2="615.44" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M336.89,615.46c-2.84,1.04-6.37,2.83-8.57,4.72l1.74-4.75-1.7-4.76c2.18,1.91,5.69,3.72,8.53,4.79Z"/>
      </g>
      <g>
        <line x1="287.5" y1="645.19" x2="330.96" y2="645.35" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M337,645.37c-2.84,1.04-6.37,2.83-8.57,4.72l1.74-4.75-1.7-4.76c2.18,1.91,5.69,3.72,8.53,4.79Z"/>
      </g>
      <g>
        <line x1="273.54" y1="655.16" x2="287.5" y2="655.14" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M267.5,655.17c2.84,1.05,6.37,2.84,8.55,4.74l-1.73-4.75,1.71-4.76c-2.18,1.91-5.7,3.71-8.54,4.77Z"/>
      </g>
      <g>
        <polyline points="526.1 916.3 526.1 975.46 1132.7 975.1 1132.17 703.84" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1132.16,697.8c1.06,2.84,2.86,6.36,4.77,8.54l-4.76-1.71-4.75,1.73c1.9-2.19,3.69-5.71,4.74-8.56Z"/>
      </g>
      <g>
        <polyline points="562 935.32 447.44 935.32 447.52 740.26 439.54 740.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M433.5,740.26c2.84-1.05,6.36-2.85,8.55-4.76l-1.72,4.76,1.72,4.75c-2.18-1.9-5.71-3.7-8.55-4.75Z"/>
      </g>
      <g>
        <polyline points="384.5 795.3 384.5 865.3 167.6 865.3 167.6 940.3 157.54 940.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M151.5,940.3c2.84-1.05,6.36-2.85,8.55-4.76l-1.72,4.76,1.72,4.75c-2.18-1.9-5.71-3.7-8.55-4.75Z"/>
      </g>
      <g>
        <polyline points="1408.5 1190.55 1438.16 1190.55 1438.16 975.46 1147 975.46 1147 703.84" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1147,697.8c1.05,2.84,2.85,6.36,4.76,8.55l-4.76-1.72-4.75,1.72c1.9-2.18,3.7-5.71,4.75-8.55Z"/>
      </g>
      <g>
        <polyline points="38 906.91 38 1015.72 487.28 1015.72 487.28 922.34" style="fill: none; stroke: #000; stroke-dasharray: 12 12; stroke-miterlimit: 10;"/>
        <path d="M487.28,916.3c1.05,2.84,2.85,6.36,4.76,8.55l-4.76-1.72-4.75,1.72c1.9-2.18,3.7-5.71,4.75-8.55Z"/>
      </g>
      <g>
        <line x1="78" y1="1064.3" x2="78" y2="1059.3" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <polyline points="78 1050.48 78 1045.48 83 1045.48" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <line x1="92.99" y1="1045.48" x2="487.75" y2="1045.48" style="fill: none; stroke: #000; stroke-dasharray: 9.99 9.99; stroke-miterlimit: 10;"/>
        <polyline points="492.75 1045.48 497.75 1045.48 497.75 1040.48" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <line x1="497.75" y1="1030.24" x2="497.75" y2="932.96" style="fill: none; stroke: #000; stroke-dasharray: 10.24 10.24; stroke-miterlimit: 10;"/>
        <line x1="497.75" y1="927.84" x2="497.75" y2="922.84" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M497.75,916.8c1.05,2.84,2.85,6.36,4.76,8.55l-4.76-1.72-4.75,1.72c1.9-2.18,3.7-5.71,4.75-8.55Z"/>
      </g>
      <g>
        <polyline points="1333 1064.3 1333 1035.4 507.2 1035.4 507.2 922.84" style="fill: none; stroke: #000; stroke-dasharray: 10 10; stroke-miterlimit: 10;"/>
        <path d="M507.2,916.8c1.05,2.84,2.85,6.36,4.76,8.55l-4.76-1.72-4.75,1.72c1.9-2.18,3.7-5.71,4.75-8.55Z"/>
      </g>
    </g>
    <g id="OPM_Lines" data-name="OPM Lines">
      <g>
        <polyline points="1153 496.8 1152.5 549.3 1221.16 549.07" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1227.19,549.05c-2.84,1.06-6.35,2.87-8.53,4.78l1.7-4.76-1.74-4.75c2.19,1.9,5.72,3.68,8.56,4.73Z"/>
      </g>
      <g>
        <line x1="1287.5" y1="395.8" x2="1287.5" y2="429.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1287.5,435.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
      </g>
      <g>
        <line x1="1337.84" y1="395.8" x2="1337.84" y2="429.76" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1337.84,435.8c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
      </g>
      <g>
        <line x1="1368" y1="495.8" x2="1368" y2="518.26" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M1368,524.3c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
      </g>
      <g>
        <line x1="227.52" y1="399.8" x2="227.52" y2="428.16" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M227.52,434.2c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
      </g>
      <g>
        <line x1="227.52" y1="460.8" x2="227.52" y2="539.53" style="fill: none; stroke: #000; stroke-miterlimit: 10;"/>
        <path d="M227.52,545.56c-1.05-2.84-2.85-6.36-4.76-8.55l4.76,1.72,4.75-1.72c-1.9,2.18-3.7,5.71-4.75,8.55Z"/>
      </g>
    </g>
  <!-- Act of Congress Section -->
  <g id="Privacy_Act_of_1974" data-name="Privacy Act of 1974">
      <a href="https://www.dodig.mil/Portals/48/Documents/Programs/Privacy%20Program/pa1974.pdf" title="Privacy Act of 1974" target="_blank" rel="noopener noreferrer">
      <rect id="aocrect" class="aocbutton" x="304.5" y="275.3" width="97" height="40" />
      <text transform="translate(313.21 294.1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Privacy</tspan><tspan x="42.7" y="0" style="letter-spacing: -.04em;"> </tspan><tspan x="45.59" y="0" xml:space="preserve">Act of  </tspan><tspan x="26.45" y="11">1974 </tspan></text>
      </a>
  </g>
  <g id="_6_USC_1523_Federal_Cybersecurity_Requirements" data-name="6 USC 1523 Federal Cybersecurity Requirements">
    <a href="https://uscode.house.gov/view.xhtml?req=6+USC+1523:+Federal+cybersecurity+requirements" title="6 USC 1523 Federal Cybersecurity Requirements" target="_blank" rel="noopener noreferrer">
    <rect id="aocrect-4" class="aocbutton" data-name="aocrect" x="167" y="267.88" width="101.16" height="44.64"/>
    <text id="_6_USC_1523_Federal_Cybersecurity_Requirements-2" data-name="6 USC 1523 Federal Cybersecurity Requirements" transform="translate(195.84 283.35)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Federal </tspan><tspan x="-18.68" y="11">Cybersecurity </tspan><tspan x="-18.67" y="22">Requirements</tspan></text>
    </a>
  </g> 
    <g id="Government_Paperwork_Elimination_Act" data-name="Government Paperwork Elimination Act">
      <a href="https://www.govinfo.gov/content/pkg/PLAW-105publ277/html/PLAW-105publ277.htm" title="Government Paperwork Elimination Act" target="_blank" rel="noopener noreferrer">
      <rect id="aocrect-2" class="aocbutton" data-name="aocrect" x="373.76" y="213.64" width="116.16" height="42.16"/>
      <text transform="translate(396.5 227.77)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Government </tspan><tspan x="4.66" y="11">Paperwork </tspan><tspan x="-8.11" y="22">Elimination</tspan><tspan x="56.56" y="22" style="letter-spacing: -.04em;"> </tspan><tspan x="59.45" y="22">Act</tspan></text>
      </a>
    </g>
    <g id="E-SSIGN_Act_of_2000" data-name="E-SSIGN Act of 2000">
      <a href="https://www.govinfo.gov/content/pkg/USCODE-2021-title15/html/USCODE-2021-title15-chap96.htm" target="_blank" title="E-SSIGN Act of 2000" rel="noopener noreferrer">
      <rect id="aocrect-3" class="aocbutton" data-name="aocrect" x="467.5" y="275.3" width="89" height="40"/>
      <text transform="translate(480.45 294.1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E-SIGN</tspan><tspan x="41.34" y="0" style="letter-spacing: -.04em;"> </tspan><tspan x="44.23" y="0">Act </tspan><tspan x="11.1" y="11">of 2000</tspan></text>
      </a>
    </g>
    <g id="FITARA_2017" data-name="FITARA 2017">
      <a href="https://www.congress.gov/bill/115th-congress/house-bill/3243/text" title="FITARA 2017" target="_blank" rel="noopener noreferrer">
      <rect id="aocrect-4" class="aocbutton" data-name="aocrect" x="557.5" y="205.3" width="89" height="40"/>
      <text transform="translate(565.66 229.98)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">FI</tspan><tspan x="10.66" y="0" style="letter-spacing: -.07em;">T</tspan><tspan x="17.1" y="0">AR</tspan><tspan x="34.44" y="0" style="letter-spacing: -.04em;">A</tspan><tspan x="42.66" y="0" xml:space="preserve"> 2017</tspan></text>
      </a>
    </g>
    <g id="FISMA2014">
      <a href="https://www.congress.gov/113/plaws/publ283/PLAW-113publ283.pdf" title="FISMA 2014" target="_blank" rel="noopener noreferrer">
      <rect id="fismarect" class="aocbutton" x="235" y="215.3" width="86" height="40" />
      <text transform="translate(244.54 239.85)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">FISM</tspan><tspan x="28.66" y="0" style="letter-spacing: -.04em;">A</tspan><tspan x="36.88" y="0" xml:space="preserve"> 2014 </tspan></text>
      </a>
    </g>
    <g id="Congress">
      <rect id="gbrect" x="27.5" y="164.3" width="111" height="50" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text transform="translate(55.83 193.6)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Congress</tspan></text>
    </g>
    <g id="OMB">
      <rect id="gbrect-2" data-name="gbrect" x="26.5" y="334.3" width="111" height="50.83" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="OMB-2" data-name="OMB" transform="translate(68.86 364.01) scale(1.01 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">OMB</tspan></text>
    </g>
    <g id="NIST">
      <rect id="gbrect-3" data-name="gbrect" x="30.5" y="515.3" width="111" height="50.83" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="NIST-2" data-name="NIST" transform="translate(72.19 545.01) scale(1.01 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">NIST</tspan></text>
    </g>
    <g id="DOD">
      <rect id="gbrect-4" data-name="gbrect" x="26.5" y="865.3" width="103" height="41" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="DOD-2" data-name="DOD" transform="translate(65.03 890.6) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">DOD</tspan></text>
    </g>
    <g id="NSA">
      <rect id="gbrect-5" data-name="gbrect" x="316.5" y="871.8" width="110.96" height="34.58" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="NSA-2" data-name="NSA" transform="translate(350.58 893.81) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">NSA</tspan></text>
    </g>
    <g id="FedRAMP">
      <rect id="gbrect-6" data-name="gbrect" x="457.5" y="864.8" width="111" height="51.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="FedRAMP-2" data-name="FedRAMP" transform="translate(476.96 895.31) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">FedRAMP</tspan></text>
    </g>
    <g id="ISC">
      <rect id="gbrect-7" data-name="gbrect" x="1306.5" y="684.8" width="111" height="51.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="ISC-2" data-name="ISC" transform="translate(1349.61 715.31) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">ISC</tspan></text>
    </g>
    <g id="DHS">
      <rect id="gbrect-8" data-name="gbrect" x="1277.5" y="1064.8" width="111" height="51.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="DHS-2" data-name="DHS" transform="translate(1317.17 1095.31) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">DHS</tspan></text>
    </g>
    <g id="CISA">
      <rect id="gbrect-9" data-name="gbrect" x="1296" y="1164.8" width="112.5" height="51.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="CISA-2" data-name="CISA" transform="translate(1333.58 1195.31) scale(1.29 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">CISA</tspan></text>
    </g>
    <g id="FPKI_Policy_Authority" data-name="FPKI Policy Authority">
      <rect id="gbrect-10" data-name="gbrect" x="767" y="1274.8" width="112.5" height="51.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="FPKI_Policy_Authority-2" data-name="FPKI Policy Authority" transform="translate(780.59 1298.31) scale(1.28 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">FPKI Policy</tspan><tspan x="6.35" y="14">Authority</tspan></text>
    </g>
    <g id="FPKI_Policy_Authority_copy" data-name="FPKI Policy Authority copy">
      <rect id="gbrect-11" data-name="gbrect" x="563.5" y="1274.8" width="129" height="41.6" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="FPKI_Policy_Authority-3" data-name="FPKI Policy Authority" transform="translate(582.66 1293.27) scale(1.57 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0" style="letter-spacing: -.07em;">P</tspan><tspan x="7.11" y="0">ACSmod </tspan><tspan x="18.56" y="14">WG</tspan></text>
    </g>
    <g id="White_House" data-name="White House">
      <rect id="gbrect-12" data-name="gbrect" x="1327.5" y="164.3" width="111" height="51" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text transform="translate(1347.17 193.6)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">White House</tspan></text>
    </g>
    <g id="DNI">
      <rect id="gbrect-13" data-name="gbrect" x="1076.5" y="334.3" width="113.99" height="52.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="DNI-2" data-name="DNI" transform="translate(1123.4 364.46)" style="font-family: Arial-BoldMT, Arial; font-size: 12.35px; font-weight: 700;"><tspan x="0" y="0">DNI</tspan></text>
    </g>
    <g id="OPM">
      <rect id="gbrect-14" data-name="gbrect" x="1364" y="334.3" width="75.66" height="52.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="OPM-2" data-name="OPM" transform="translate(1387.96 364.46)" style="font-family: Arial-BoldMT, Arial; font-size: 12.35px; font-weight: 700;"><tspan x="0" y="0">OPM</tspan></text>
    </g>
    <g id="USDS">
      <rect id="gbrect-15" data-name="gbrect" x="1287.5" y="243.3" width="130" height="53" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="USDS_Sub_Title" data-name="USDS Sub Title" transform="translate(1335.83 274.6)" style="font-family: Arial-BoldMT, Arial; font-size: 12.35px; font-weight: 700;"><tspan x="0" y="0">USDS</tspan></text>
      <text id="USDS-2" data-name="USDS" transform="translate(1306.28 287.66)" style="font-family: Arial-BoldItalicMT, Arial; font-size: 8px; font-style: italic; font-weight: 700;"><tspan x="0" y="0">(under the White House)</tspan></text>
    </g>
    <g id="GSA">
      <rect id="gbrect-16" data-name="gbrect" x="26.5" y="1064.3" width="111.96" height="52.5" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="GSA-2" data-name="GSA" transform="translate(71.74 1095.16)" style="font-family: Arial-BoldMT, Arial; font-size: 14.35px; font-weight: 700;"><tspan x="0" y="0">GSA</tspan></text>
    </g>
    <g id="Federal_CIO_Council" data-name="Federal CIO Council">
      <rect id="gbrect-17" data-name="gbrect" x="86.5" y="1124.3" width="111.96" height="51.87" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <g id="Federal_CIO_Council-2" data-name="Federal CIO Council">
        <path d="M114.56,1148.16v-8.59h5.11v1.45h-3.61v2.03h3.11v1.45h-3.11v3.65h-1.5Z"/>
        <path d="M124.03,1146.18l1.42.28c-.18.6-.47,1.06-.87,1.37s-.89.47-1.48.47c-.94,0-1.63-.35-2.09-1.06-.36-.57-.53-1.28-.53-2.14,0-1.03.23-1.84.7-2.42s1.06-.88,1.77-.88c.8,0,1.44.31,1.9.92s.69,1.55.67,2.81h-3.58c.01.49.13.87.35,1.14.22.27.49.41.82.41.22,0,.41-.07.56-.21.15-.14.27-.37.35-.68ZM124.11,1144.52c-.01-.48-.12-.84-.32-1.09-.2-.25-.45-.37-.74-.37-.31,0-.57.13-.77.39s-.3.62-.3,1.07h2.14Z"/>
        <path d="M131.65,1148.16h-1.33v-.91c-.22.36-.48.62-.78.79s-.6.26-.91.26c-.62,0-1.15-.29-1.59-.86s-.66-1.38-.66-2.41.22-1.86.65-2.41c.43-.55.98-.82,1.63-.82.6,0,1.13.29,1.57.87v-3.09h1.43v8.59ZM127.83,1144.92c0,.66.08,1.14.24,1.44.23.43.55.64.97.64.33,0,.61-.16.84-.48.23-.32.35-.8.35-1.44,0-.71-.11-1.23-.34-1.54-.22-.31-.51-.47-.86-.47s-.62.16-.85.47c-.23.31-.34.77-.34,1.39Z"/>
        <path d="M136.18,1146.18l1.42.28c-.18.6-.47,1.06-.87,1.37s-.89.47-1.48.47c-.94,0-1.63-.35-2.09-1.06-.36-.57-.53-1.28-.53-2.14,0-1.03.23-1.84.7-2.42s1.06-.88,1.77-.88c.8,0,1.44.31,1.9.92s.69,1.55.67,2.81h-3.58c.01.49.13.87.35,1.14.22.27.49.41.82.41.22,0,.41-.07.56-.21.15-.14.27-.37.35-.68ZM136.27,1144.52c-.01-.48-.12-.84-.32-1.09-.2-.25-.45-.37-.74-.37-.31,0-.57.13-.77.39s-.3.62-.3,1.07h2.14Z"/>
        <path d="M140.22,1148.16h-1.43v-6.22h1.33v.88c.23-.42.43-.69.61-.83.18-.13.39-.2.62-.2.33,0,.64.1.94.31l-.44,1.44c-.24-.18-.46-.27-.67-.27s-.37.06-.51.19-.25.36-.33.69-.12,1.03-.12,2.09v1.92Z"/>
        <path d="M143.97,1143.84l-1.3-.27c.15-.6.4-1.05.75-1.34s.88-.43,1.59-.43c.64,0,1.11.09,1.42.26s.53.39.66.66c.13.27.19.76.19,1.47l-.02,1.92c0,.55.02.95.07,1.21.05.26.13.54.26.83h-1.41c-.04-.11-.08-.27-.14-.49-.02-.1-.04-.16-.05-.19-.24.27-.51.48-.78.62s-.57.21-.89.21c-.56,0-.99-.17-1.31-.52-.32-.35-.48-.79-.48-1.32,0-.35.07-.67.22-.94s.35-.49.61-.63.64-.27,1.14-.38c.67-.14,1.13-.28,1.39-.4v-.16c0-.32-.07-.54-.2-.68-.14-.13-.39-.2-.77-.2-.25,0-.45.06-.6.17-.14.12-.26.32-.35.61ZM145.88,1145.17c-.18.07-.47.15-.87.25s-.66.19-.78.29c-.19.15-.28.35-.28.58s.07.43.22.6c.15.17.34.25.57.25.26,0,.5-.1.74-.29.17-.15.29-.33.34-.54.04-.14.06-.41.06-.8v-.33Z"/>
        <path d="M148.69,1148.16v-8.59h1.43v8.59h-1.43Z"/>
        <path d="M159.26,1145l1.46.53c-.22.94-.6,1.63-1.12,2.09-.52.46-1.18.68-1.98.68-.99,0-1.8-.39-2.44-1.17s-.96-1.84-.96-3.2c0-1.43.32-2.54.96-3.33.64-.79,1.48-1.19,2.53-1.19.91,0,1.65.31,2.22.93.34.37.59.89.76,1.58l-1.49.41c-.09-.45-.27-.8-.55-1.05-.28-.26-.62-.39-1.02-.39-.55,0-1,.23-1.34.69-.34.46-.52,1.2-.52,2.22,0,1.09.17,1.86.51,2.32s.78.69,1.32.69c.4,0,.74-.15,1.03-.44s.5-.75.62-1.38Z"/>
        <path d="M161.97,1148.16v-8.59h1.51v8.59h-1.51Z"/>
        <path d="M164.6,1143.92c0-.88.11-1.61.34-2.2.17-.44.4-.83.69-1.18.29-.35.61-.61.96-.77.46-.23,1-.34,1.61-.34,1.1,0,1.98.39,2.64,1.18.66.79.99,1.88.99,3.28s-.33,2.47-.98,3.25c-.65.78-1.53,1.17-2.62,1.17s-1.99-.39-2.64-1.17-.98-1.85-.98-3.22ZM166.15,1143.86c0,.97.2,1.71.58,2.21s.88.75,1.48.75,1.09-.25,1.48-.75.58-1.25.58-2.24-.19-1.72-.56-2.2-.87-.73-1.49-.73-1.12.25-1.5.74c-.38.49-.57,1.23-.57,2.22Z"/>
        <path d="M129.46,1159l1.46.53c-.22.94-.6,1.63-1.12,2.09-.52.46-1.18.68-1.98.68-.99,0-1.8-.39-2.44-1.17s-.96-1.84-.96-3.2c0-1.43.32-2.54.96-3.33.64-.79,1.48-1.19,2.53-1.19.91,0,1.65.31,2.22.93.34.37.59.89.76,1.58l-1.49.41c-.09-.45-.27-.8-.55-1.05-.28-.26-.62-.39-1.02-.39-.55,0-1,.23-1.34.69-.34.46-.52,1.2-.52,2.22,0,1.09.17,1.86.51,2.32s.78.69,1.32.69c.4,0,.74-.15,1.03-.44s.5-.75.62-1.38Z"/>
        <path d="M131.87,1158.96c0-.55.12-1.08.35-1.59s.56-.9.99-1.17c.43-.27.91-.4,1.44-.4.82,0,1.49.31,2.01.92.52.61.78,1.38.78,2.32s-.26,1.72-.79,2.34-1.19.93-1.99.93c-.5,0-.97-.13-1.42-.39s-.79-.64-1.02-1.13-.35-1.1-.35-1.82ZM133.33,1159.05c0,.62.13,1.09.38,1.42.25.33.57.49.94.49s.69-.16.94-.49c.25-.33.38-.8.38-1.43s-.13-1.08-.38-1.41c-.25-.33-.57-.49-.94-.49s-.69.16-.94.49c-.25.33-.38.8-.38,1.42Z"/>
        <path d="M142.11,1162.16v-.93c-.2.33-.46.59-.78.79-.32.19-.66.29-1.01.29s-.69-.09-.98-.28-.5-.44-.63-.77-.19-.79-.19-1.38v-3.94h1.43v2.86c0,.88.03,1.41.08,1.61.05.2.15.35.29.47.14.12.32.17.53.17.24,0,.46-.08.66-.23.19-.15.33-.35.4-.57s.11-.79.11-1.68v-2.62h1.43v6.22h-1.33Z"/>
        <path d="M149.83,1162.16h-1.43v-3.18c0-.67-.03-1.11-.09-1.3s-.16-.35-.3-.46-.3-.16-.5-.16c-.25,0-.47.08-.67.23-.2.16-.33.36-.4.62-.07.26-.11.73-.11,1.43v2.82h-1.43v-6.22h1.33v.91c.47-.7,1.06-1.05,1.78-1.05.32,0,.6.07.86.2s.46.3.59.5c.13.2.23.43.28.69s.08.63.08,1.11v3.87Z"/>
        <path d="M155.99,1157.78l-1.41.29c-.05-.32-.16-.57-.32-.73-.17-.16-.39-.25-.65-.25-.36,0-.64.14-.85.42s-.32.76-.32,1.42c0,.74.11,1.26.32,1.56s.5.46.87.46c.27,0,.49-.09.67-.27.17-.18.29-.48.37-.92l1.4.28c-.15.74-.43,1.3-.84,1.68s-.97.57-1.66.57c-.79,0-1.42-.29-1.89-.86-.47-.57-.7-1.37-.7-2.38s.24-1.83.71-2.4,1.11-.86,1.91-.86c.66,0,1.18.16,1.57.49s.67.82.84,1.49Z"/>
        <path d="M157.07,1155.1v-1.52h1.43v1.52h-1.43ZM157.07,1162.16v-6.22h1.43v6.22h-1.43Z"/>
        <path d="M159.97,1162.16v-8.59h1.43v8.59h-1.43Z"/>
      </g>
    </g>
    <g id="Federal_CISO_Council" data-name="Federal CISO Council">
      <rect id="gbrect-18" data-name="gbrect" x="106.5" y="1185.3" width="111.96" height="51.87" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <g id="Federal_CISO_Council-2" data-name="Federal CISO Council">
        <path d="M131.09,1209.16v-8.59h5.11v1.45h-3.61v2.03h3.11v1.45h-3.11v3.65h-1.5Z"/>
        <path d="M140.56,1207.18l1.42.28c-.18.6-.47,1.06-.87,1.37s-.89.47-1.48.47c-.94,0-1.63-.35-2.09-1.06-.36-.57-.53-1.28-.53-2.14,0-1.03.23-1.84.7-2.42s1.06-.88,1.77-.88c.8,0,1.44.31,1.9.92s.69,1.55.67,2.81h-3.58c.01.49.13.87.35,1.14.22.27.49.41.82.41.22,0,.41-.07.56-.21.15-.14.27-.37.35-.68ZM140.64,1205.52c-.01-.48-.12-.84-.32-1.09-.2-.25-.45-.37-.74-.37-.31,0-.57.13-.77.39s-.3.62-.3,1.07h2.14Z"/>
        <path d="M148.17,1209.16h-1.33v-.91c-.22.36-.48.62-.78.79s-.6.26-.91.26c-.62,0-1.15-.29-1.59-.86s-.66-1.38-.66-2.41.22-1.86.65-2.41c.43-.55.98-.82,1.63-.82.6,0,1.13.29,1.57.87v-3.09h1.43v8.59ZM144.36,1205.92c0,.66.08,1.14.24,1.44.23.43.55.64.97.64.33,0,.61-.16.84-.48.23-.32.35-.8.35-1.44,0-.71-.11-1.23-.34-1.54-.22-.31-.51-.47-.86-.47s-.62.16-.85.47c-.23.31-.34.77-.34,1.39Z"/>
        <path d="M152.71,1207.18l1.42.28c-.18.6-.47,1.06-.87,1.37s-.89.47-1.48.47c-.94,0-1.63-.35-2.09-1.06-.36-.57-.53-1.28-.53-2.14,0-1.03.23-1.84.7-2.42s1.06-.88,1.77-.88c.8,0,1.44.31,1.9.92s.69,1.55.67,2.81h-3.58c.01.49.13.87.35,1.14.22.27.49.41.82.41.22,0,.41-.07.56-.21.15-.14.27-.37.35-.68ZM152.79,1205.52c-.01-.48-.12-.84-.32-1.09-.2-.25-.45-.37-.74-.37-.31,0-.57.13-.77.39s-.3.62-.3,1.07h2.14Z"/>
        <path d="M156.74,1209.16h-1.43v-6.22h1.33v.88c.23-.42.43-.69.61-.83.18-.13.39-.2.62-.2.33,0,.64.1.94.31l-.44,1.44c-.24-.18-.46-.27-.67-.27s-.37.06-.51.19-.25.36-.33.69-.12,1.03-.12,2.09v1.92Z"/>
        <path d="M160.5,1204.84l-1.3-.27c.15-.6.4-1.05.75-1.34s.88-.43,1.59-.43c.64,0,1.11.09,1.42.26s.53.39.66.66c.13.27.19.76.19,1.47l-.02,1.92c0,.55.02.95.07,1.21.05.26.13.54.26.83h-1.41c-.04-.11-.08-.27-.14-.49-.02-.1-.04-.16-.05-.19-.24.27-.51.48-.78.62s-.57.21-.89.21c-.56,0-.99-.17-1.31-.52-.32-.35-.48-.79-.48-1.32,0-.35.07-.67.22-.94s.35-.49.61-.63.64-.27,1.14-.38c.67-.14,1.13-.28,1.39-.4v-.16c0-.32-.07-.54-.2-.68-.14-.13-.39-.2-.77-.2-.25,0-.45.06-.6.17-.14.12-.26.32-.35.61ZM162.41,1206.17c-.18.07-.47.15-.87.25s-.66.19-.78.29c-.19.15-.28.35-.28.58s.07.43.22.6c.15.17.34.25.57.25.26,0,.5-.1.74-.29.17-.15.29-.33.34-.54.04-.14.06-.41.06-.8v-.33Z"/>
        <path d="M165.22,1209.16v-8.59h1.43v8.59h-1.43Z"/>
        <path d="M175.79,1206l1.46.53c-.22.94-.6,1.63-1.12,2.09-.52.46-1.18.68-1.98.68-.99,0-1.8-.39-2.44-1.17s-.96-1.84-.96-3.2c0-1.43.32-2.54.96-3.33.64-.79,1.48-1.19,2.53-1.19.91,0,1.65.31,2.22.93.34.37.59.89.76,1.58l-1.49.41c-.09-.45-.27-.8-.55-1.05-.28-.26-.62-.39-1.02-.39-.55,0-1,.23-1.34.69-.34.46-.52,1.2-.52,2.22,0,1.09.17,1.86.51,2.32s.78.69,1.32.69c.4,0,.74-.15,1.03-.44s.5-.75.62-1.38Z"/>
        <path d="M178.49,1209.16v-8.59h1.51v8.59h-1.51Z"/>
        <path d="M181.05,1206.37l1.46-.16c.09.57.27.98.54,1.25s.63.4,1.09.4c.48,0,.85-.12,1.1-.35s.37-.51.37-.83c0-.2-.05-.38-.15-.52-.1-.14-.28-.27-.54-.37-.18-.07-.58-.2-1.21-.38-.81-.23-1.37-.51-1.7-.85-.46-.47-.69-1.05-.69-1.73,0-.44.11-.85.32-1.23s.53-.67.93-.87c.4-.2.89-.3,1.47-.3.94,0,1.64.24,2.11.71.47.47.72,1.1.75,1.89l-1.51.08c-.06-.44-.2-.76-.41-.95s-.53-.29-.95-.29-.78.1-1.03.31c-.16.13-.24.31-.24.53,0,.2.07.38.22.52.19.18.65.38,1.38.57s1.27.41,1.62.62c.35.21.63.5.82.87s.3.83.3,1.37c0,.49-.12.95-.36,1.38s-.57.75-1.01.96-.97.31-1.62.31c-.94,0-1.67-.25-2.17-.75-.5-.5-.81-1.23-.9-2.19Z"/>
        <path d="M188.07,1204.92c0-.88.11-1.61.34-2.2.17-.44.4-.83.69-1.18.29-.35.61-.61.96-.77.46-.23,1-.34,1.61-.34,1.1,0,1.98.39,2.64,1.18.66.79.99,1.88.99,3.28s-.33,2.47-.98,3.25c-.65.78-1.53,1.17-2.62,1.17s-1.99-.39-2.64-1.17-.98-1.85-.98-3.22ZM189.62,1204.86c0,.97.2,1.71.58,2.21s.88.75,1.48.75,1.09-.25,1.48-.75.58-1.25.58-2.24-.19-1.72-.56-2.2-.87-.73-1.49-.73-1.12.25-1.5.74c-.38.49-.57,1.23-.57,2.22Z"/>
        <path d="M149.46,1220l1.46.53c-.22.94-.6,1.63-1.12,2.09-.52.46-1.18.68-1.98.68-.99,0-1.8-.39-2.44-1.17s-.96-1.84-.96-3.2c0-1.43.32-2.54.96-3.33.64-.79,1.48-1.19,2.53-1.19.91,0,1.65.31,2.22.93.34.37.59.89.76,1.58l-1.49.41c-.09-.45-.27-.8-.55-1.05-.28-.26-.62-.39-1.02-.39-.55,0-1,.23-1.34.69-.34.46-.52,1.2-.52,2.22,0,1.09.17,1.86.51,2.32s.78.69,1.32.69c.4,0,.74-.15,1.03-.44s.5-.75.62-1.38Z"/>
        <path d="M151.87,1219.96c0-.55.12-1.08.35-1.59s.56-.9.99-1.17c.43-.27.91-.4,1.44-.4.82,0,1.49.31,2.01.92.52.61.78,1.38.78,2.32s-.26,1.72-.79,2.34-1.19.93-1.99.93c-.5,0-.97-.13-1.42-.39s-.79-.64-1.02-1.13-.35-1.1-.35-1.82ZM153.33,1220.05c0,.62.13,1.09.38,1.42.25.33.57.49.94.49s.69-.16.94-.49c.25-.33.38-.8.38-1.43s-.13-1.08-.38-1.41c-.25-.33-.57-.49-.94-.49s-.69.16-.94.49c-.25.33-.38.8-.38,1.42Z"/>
        <path d="M162.11,1223.16v-.93c-.2.33-.46.59-.78.79-.32.19-.66.29-1.01.29s-.69-.09-.98-.28-.5-.44-.63-.77-.19-.79-.19-1.38v-3.94h1.43v2.86c0,.88.03,1.41.08,1.61.05.2.15.35.29.47.14.12.32.17.53.17.24,0,.46-.08.66-.23.19-.15.33-.35.4-.57s.11-.79.11-1.68v-2.62h1.43v6.22h-1.33Z"/>
        <path d="M169.83,1223.16h-1.43v-3.18c0-.67-.03-1.11-.09-1.3s-.16-.35-.3-.46-.3-.16-.5-.16c-.25,0-.47.08-.67.23-.2.16-.33.36-.4.62-.07.26-.11.73-.11,1.43v2.82h-1.43v-6.22h1.33v.91c.47-.7,1.06-1.05,1.78-1.05.32,0,.6.07.86.2s.46.3.59.5c.13.2.23.43.28.69s.08.63.08,1.11v3.87Z"/>
        <path d="M175.99,1218.78l-1.41.29c-.05-.32-.16-.57-.32-.73-.17-.16-.39-.25-.65-.25-.36,0-.64.14-.85.42s-.32.76-.32,1.42c0,.74.11,1.26.32,1.56s.5.46.87.46c.27,0,.49-.09.67-.27.17-.18.29-.48.37-.92l1.4.28c-.15.74-.43,1.3-.84,1.68s-.97.57-1.66.57c-.79,0-1.42-.29-1.89-.86-.47-.57-.7-1.37-.7-2.38s.24-1.83.71-2.4,1.11-.86,1.91-.86c.66,0,1.18.16,1.57.49s.67.82.84,1.49Z"/>
        <path d="M177.07,1216.1v-1.52h1.43v1.52h-1.43ZM177.07,1223.16v-6.22h1.43v6.22h-1.43Z"/>
        <path d="M179.97,1223.16v-8.59h1.43v8.59h-1.43Z"/>
      </g>
    </g>
    <!-- Executive Order Section -->
    <g id="ICAMSC">
      <rect id="gbrect-19" data-name="gbrect" x="126.5" y="1245.3" width="111.96" height="51.87" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="ICAMSC-2" data-name="ICAMSC" transform="translate(162.48 1276.16)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">ICAMSC</tspan></text>
    </g>
    <g id="E.O._13681" data-name="E.O. 13681">
      <a href="https://www.govinfo.gov/content/pkg/FR-2014-10-23/pdf/2014-25439.pdf" title="E.O. 13681" target="_blank" rel="noopener noreferrer">
        <rect id="eorect-2" class="eobutton" data-name="eorect" x="698" y="195.8" width="79" height="29" />
        <text transform="translate(707.15 214.6)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E.O. 13681 </tspan></text>
      </a>
    </g>
    <g id="E.O._14028" data-name="E.O. 14028">
      <a href="https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity" title="E.O. 14028" target="_blank" rel="noopener noreferrer">
        <rect id="eorect-3" class="eobutton" data-name="eorect" x="697.5" y="245.3" width="80" height="30" />
        <text transform="translate(706.84 264.41)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E.O. 14028 </tspan></text>
      </a>
    </g>
    <g id="E.O._13556" data-name="E.O. 13556">
      <a href="https://www.federalregister.gov/documents/2010/11/09/2010-28360/controlled-unclassified-information" title="E.O. 13556" target="_blank" rel="noopener noreferrer">
      <rect id="eorect-4" class="eobutton" data-name="eorect" x="787.5" y="285.3" width="80" height="30" />
      <text transform="translate(796.84 304.41)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E.O. 13556 </tspan></text>
      </a>
    </g>
    <g id="E.O._13286" data-name="E.O. 13286">
      <a href="https://www.federalregister.gov/documents/2003/03/05/03-5343/amendment-of-executive-orders-and-other-actions-in-connection-with-the-transfer-of-certain-functions" title="E.O. 13286" target="_blank" rel="noopener noreferrer">
      <rect id="eorect-5" class="eobutton" data-name="eorect" x="1187.5" y="215.3" width="80" height="30" />
      <text transform="translate(1196.84 234.41)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E.O. 13286 </tspan></text>
      </a>
    </g>
    <g id="E.O._13467" data-name="E.O. 13467">
      <a href="https://www.federalregister.gov/documents/2008/07/02/08-1409/reforming-processes-related-to-suitability-for-government-employment-fitness-for-contractor" title="E.O. 13467" target="_blank" rel="noopener noreferrer">
      <rect id="eorect-6" class="eobutton" data-name="eorect" x="1147.5" y="275.3" width="80" height="30" />
      <text transform="translate(1156.84 294.41)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">E.O. 13467 </tspan></text>
      </a>
    </g>
    <g id="HSPD-12">
      <a href="https://www.opm.gov/suitability/suitability-executive-agent/policy/final-credentialing-standards.pdf" title="HSPD-12" target="_blank" rel="noopener noreferrer">
      <rect id="eorect-7" class="eobutton" data-name="eorect" x="837.01" y="204.8" width="160.99" height="59.74"/>
      <text id="HSPD-12-2" data-name="HSPD-12" transform="translate(865.88 242.85) scale(1.01 1)" style="font-family: Arial-BoldMT, Arial; font-size: 23.89px; font-weight: 700;"><tspan x="0" y="0">HSPD-12 </tspan></text>
      </a>
    </g>
    <g id="M-19-03">
      <g id="eorect-8" data-name="eorect">
        <a href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2018/12/M-19-03.pdf" title="M-19-03" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="197" y="374.8" width="63.5" height="24.5"/>
        <text id="M-19-03-2" data-name="M-19-03" transform="translate(208 392.35) scale(.93 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-19-03 </tspan></text>
        </a>
        <path d="M260,375.3v23.5h-62.5v-23.5h62.5M261,374.3h-64.5v25.5h64.5v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-19-16">
      <g id="eorect-9" data-name="eorect">
        <a href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2019/04/M-19-16.pdf" title="m-19-16" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="195" y="435.8" width="63.5" height="24.5" />
        <text id="M-19-16-2" data-name="M-19-16" transform="translate(206 453.35) scale(.93 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-19-16 </tspan></text>
        </a>
        <path d="M258,436.3v23.5h-62.5v-23.5h62.5M259,435.3h-64.5v25.5h64.5v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-19-17">
      <g id="eorect-10" data-name="eorect">
        <a href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2019/05/M-19-17.pdf" title="m-19-17" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="475" y="422.8" width="72.5" height="24.5" />
        <text id="M-19-17-2" data-name="M-19-17" transform="translate(490.26 439.85) scale(.93 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-19-17 </tspan></text>
        </a>
        <path d="M547,423.3v23.5h-71.5v-23.5h71.5M548,422.3h-73.5v25.5h73.5v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-19-19">
      <g id="eorect-11" data-name="eorect">
        <a href="https://bidenwhitehouse.archives.gov/wp-content/uploads/2019/06/M-19-19-Data-Centers.pdf" title="m-19-19" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="566" y="374.8" width="72.5" height="24.5" />
        <text id="M-19-19-2" data-name="M-19-19" transform="translate(581.26 391.85) scale(.93 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-19-19 </tspan></text>
        </a>
        <path d="M638,375.3v23.5h-71.5v-23.5h71.5M639,374.3h-73.5v25.5h73.5v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-22-09">
      <g id="eorect-12" data-name="eorect">
        <a href="https://www.whitehouse.gov/wp-content/uploads/2022/01/M-22-09.pdf" title="m-22-09" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="657.5" y="374.8" width="73" height="24.5" />
        <text id="M-22-09-2" data-name="M-22-09" transform="translate(673.26 391.85) scale(.93 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-22-09 </tspan></text>
        </a>
        <path d="M730,375.3v23.5h-72v-23.5h72M731,374.3h-74v25.5h74v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-15-13">
      <g id="eorect-13" data-name="eorect">
        <a href="https://obamawhitehouse.archives.gov/sites/default/files/omb/memoranda/2015/m-15-13.pdf" title="m-15-13" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="676.5" y="454.8" width="81" height="24.5" />
        <text id="M-15-13-2" data-name="M-15-13" transform="translate(694.01 471.85) scale(1.03 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-15-13 </tspan></text>
        </a>
        <path d="M757,455.3v23.5h-80v-23.5h80M758,454.3h-82v25.5h82v-25.5h0Z"/>
      </g>
    </g>
    <g id="M-05-24">
      <g id="eorect-14" data-name="eorect">
        <a href="https://georgewbush-whitehouse.archives.gov/omb/memoranda/fy2005/m05-24.pdf" title="m-05-24" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="975.5" y="363.8" width="71" height="23.5" />
        <text id="M-05-24-2" data-name="M-05-24" transform="translate(989.49 380.33) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">M-05-24 </tspan></text>
        </a>
        <path d="M1046,364.3v22.5h-70v-22.5h70M1047,363.3h-72v24.5h72v-24.5h0Z"/>
      </g>
    </g>
    <g id="_5_CFR_731" data-name="5 CFR 731">
      <g id="eorect-15" data-name="eorect">
        <a href="https://www.ecfr.gov/current/title-5/chapter-I/subchapter-B/part-731" title="5-cfr-731" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="1206.5" y="364.8" width="62" height="30.5" />
        <text id="_5_CFR_731-2" data-name="5 CFR 731" transform="translate(1210.22 384.6) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">5 CFR 731 </tspan></text>
        </a>
        <path d="M1268,365.3v29.5h-61v-29.5h61M1269,364.3h-63v31.5h63v-31.5h0Z"/>
      </g>
    </g>
    <g id="Springer_Memo" data-name="Springer Memo">
      <g id="eorect-16" data-name="eorect">
        <a href="https://www.opm.gov/suitability/suitability-executive-agent/policy/final-credentialing-standards.pdf" title="Springer Memo" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="1277.5" y="356.8" width="72" height="38.5"/>
        <text id="Springer_Memo-2" data-name="Springer Memo" transform="translate(1290.3 374.6) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">Springer</tspan><tspan x="7.34" y="12">Memo </tspan></text>
        </a>
        <path d="M1349,357.3v37.5h-71v-37.5h71M1350,356.3h-73v39.5h73v-39.5h0Z"/>
      </g>
    </g>
    <g id="Credentialing_Box" data-name="Credentialing Box">
      <g id="eorect-17" data-name="eorect">
        <a href="https://www.opm.gov/suitability/suitability-executive-agent/policy/cred-standards.pdf" title="Credentialing Standards Memo 2020" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="1327.5" y="435.8" width="81" height="59.5" />
        <text id="Credentialing_Box-2" data-name="Credentialing Box" transform="translate(1334.96 457.74) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 11px; font-weight: 700;"><tspan x="0" y="0">Credentialing</tspan><tspan x="8.25" y="12">Standards</tspan><tspan x="5.49" y="24">Memo 2020</tspan></text>
        </a>
        <path d="M1408,436.3v58.5h-80v-58.5h80M1409,435.3h-82v60.5h82v-60.5h0Z"/>
      </g>
    </g>
    <g id="OMB_Circular_A-130" data-name="OMB Circular A-130">
      <g id="eorect-18" data-name="eorect">
        <a href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a130/a130revised.pdf" title="OMB Circular A-130" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="387" y="364.8" width="91.5" height="46" />
        <text id="OMB_Circular_A-130-2" data-name="OMB Circular A-130" transform="translate(405.05 383.75) scale(.72 1)" style="font-family: Arial-BoldMT, Arial; font-size: 12px; font-weight: 700;"><tspan x="0" y="0">OMB Circular </tspan><tspan x="22" y="14">A-130</tspan></text>
        </a>
        <path d="M478,365.3v45h-90.5v-45h90.5M479,364.3h-92.5v47h92.5v-47h0Z"/>
      </g>
    </g>
    <g id="OMB_Circular_A-108" data-name="OMB Circular A-108">
      <g id="eorect-19" data-name="eorect">
        <a href="https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/OMB/circulars/a108/omb_circular_a-108.pdf" title="OMB Circular A-108" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="325" y="424.8" width="93.5" height="32.14"/>
        <text id="OMB_Circular_A-108-2" data-name="OMB Circular A-108" transform="translate(343.45 438) scale(1.05 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8.46px; font-weight: 700;"><tspan x="0" y="0">OMB Circular </tspan><tspan x="15.51" y="9.87">A-108</tspan></text>
        </a>
        <path d="M418,425.3v31.14h-92.5v-31.14h92.5M419,424.3h-94.5v33.14h94.5v-33.14h0Z"/>
      </g>
    </g>
    <g id="PIV_Guidance_Box" data-name="PIV Guidance Box">
      <g id="eorect-20" data-name="eorect">
        <a href="https://www.opm.gov/suitability/suitability-executive-agent/policy/memo-issuing-piv-credentials-and-suspension-criteria.pdf" title="Guidance on Executive Branch-Wide Requirements for Issuing Personal Identity Verification (PIV) Credentials and Suspension Mechanism" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="997.5" y="435.8" width="311" height="60.5" />
        <text id="PIV_Guidance_Box-2" data-name="PIV Guidance Box" transform="translate(1005.03 456.8) scale(1.13 1)" style="font-family: Arial-BoldMT, Arial; font-weight: 700;"><tspan style="font-size: 10px;"><tspan x="0" y="0">Guidance on Executive Branch-</tspan><tspan x="150.6" y="0" style="letter-spacing: 0em;">W</tspan><tspan x="159.95" y="0">ide Requirements for </tspan></tspan><tspan style="font-size: 10px;"><tspan x="9.95" y="11">Issuing Personal </tspan><tspan x="92.76" y="11" style="letter-spacing: -.06em;">V</tspan><tspan x="98.87" y="11">erification (PIV) Credentials and </tspan></tspan><tspan x="73.02" y="24.22" style="font-size: 10px;">Suspension Mechanism</tspan><tspan x="186.94" y="24.22" style="font-size: 13.22px;"> </tspan></text>
        </a>
        <path d="M1308,436.3v59.5h-310v-59.5h310M1309,435.3h-312v61.5h312v-61.5h0Z"/>
      </g>
    </g>
    <g id="HSPD-12_PIV_Box" data-name="HSPD-12/PIV Box">
      <g id="eorect-21" data-name="eorect">
        <a href="https://georgewbush-whitehouse.archives.gov/omb/memoranda/fy2005/m05-24.pdf" title="M-05-24" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="1317.5" y="524.8" width="102" height="59.5"/>
        <text id="HSPD-12_PIV" data-name="HSPD-12/PIV" transform="translate(1336.88 546.74) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 11px; font-weight: 700;"><tspan x="0" y="0">HSPD-12/PIV</tspan><tspan x="-8.85" y="12">Suspension and</tspan><tspan x="-8.86" y="24">Revocation </tspan><tspan x="53.49" y="24" style="letter-spacing: -.06em;">F</tspan><tspan x="59.6" y="24">AQ</tspan></text>
        </a>
        <path d="M1419,525.3v58.5h-101v-58.5h101M1420,524.3h-103v60.5h103v-60.5h0Z"/>
      </g>
    </g>
    <g id="Clearance_Decision" data-name="Clearance Decision Making Guide">
      <g id="eorect-22" data-name="eorect">
        <a href="https://www.opm.gov/suitability/suitability-executive-agent/policy/decision-making-guide.pdf" title="Clearance Decision Making Guide" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="1227.5" y="524.8" width="75" height="48.5" />
        <text id="Clearance_Decision-2" data-name="Clearance Decision" transform="translate(1240.78 541.24) scale(.94 1)" style="font-family: Arial-BoldMT, Arial; font-size: 11px; font-weight: 700;"><tspan x="0" y="0">Clearance</tspan><tspan x="1.54" y="12">Decision-</tspan><tspan x="-9.76" y="24">Making Guide</tspan></text>
        </a>
        <path d="M1302,525.3v47.5h-74v-47.5h74M1303,524.3h-76v49.5h76v-49.5h0Z"/>
      </g>
    </g>
    <g id="Federal_Common_Policy" data-name="Federal Common Policy">
      <g id="eorect-23" data-name="eorect">
        <a href="https://www.idmanagement.gov/docs/fpki-x509-cert-policy-common.pdf" title="Federal Common Policy" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="886.5" y="1304.3" width="101" height="41" style="fill: #cce5ff;"/>
        <text id="Federal_Common_Policy-2" data-name="Federal Common Policy" transform="translate(895.26 1323.26) scale(1.11 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.33px; font-weight: 700;"><tspan x="0" y="0">Federal Common </tspan><tspan x="24.37" y="10.18">Policy</tspan></text>
        </a>
        <path d="M987,1304.8v40h-100v-40h100M988,1303.8h-102v42h102v-42h0Z"/>
      </g>
    </g>
    <g id="Federal_Bridge_Certificate_Policy" data-name="Federal Bridge Certificate Policy">
      <g id="eorect-24" data-name="eorect"><!-- Not updated -->
        <a href="https://www.idmanagement.gov/docs/fpki-x509-cert-policy-fbca.pdf" title="Federal Bridge Certificate Policy" target="_blank" rel="noopener noreferrer">
        <rect class="fpbutton" x="886.5" y="1353.3" width="101" height="41" style="fill: #cce5ff;"/>
        <text id="Federal_Bridge_Certificate_Policy-2" data-name="Federal Bridge Certificate Policy" transform="translate(901.29 1372.26) scale(1.11 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.33px; font-weight: 700;"><tspan x="0" y="0">Federal Bridge</tspan><tspan x="-5.19" y="10.18">Certificate Policy</tspan></text>
        </a>
        <path d="M987,1353.8v40h-100v-40h100M988,1352.8h-102v42h102v-42h0Z"/>
      </g>
    </g>
    <!-- NIST Technical Standards Section -->
    <g id="NIST_RMF" data-name="NIST RMF">
      <a href="https://csrc.nist.gov/projects/risk-management" title="NIST RMF" target="_blank" rel="noopener noreferrer">
      <rect id="gbrect-20" class="tsbutton" data-name="gbrect" x="47.41" y="574.3" width="90.19" height="41.5"/>
      <text id="NIST_RMF-2" data-name="NIST RMF" transform="translate(69.25 598.56)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">NIST RMF</tspan></text>
      </a>
    </g>
    <g id="SOFA-B">
      <a href="https://pages.nist.gov/SOFA/SOFA.html" title="SOFA-B" target="_blank" rel="noopener noreferrer">
      <rect id="gbrect-21" class="tsbutton" data-name="gbrect" x="47.41" y="624.3" width="90.19" height="41.5"/>
      <text id="SOFA-B-2" data-name="SOFA-B" transform="translate(73.9 648.56)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">SO</tspan><tspan x="14.16" y="0" style="letter-spacing: -.06em;">F</tspan><tspan x="19.6" y="0">A-B</tspan></text>
      </a>
    </g>
    <g id="SP_1800-13" data-name="SP 1800-13">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1800-13.pdf" title="SP 1800-13" target="_blank" rel="noopener noreferrer">
      <rect id="gbrect-22" class="tsbutton" data-name="gbrect" x="47.41" y="674.3" width="90.19" height="41.5"/>
      <text id="SP_1800-13-2" data-name="SP 1800-13" transform="translate(66.58 698.56)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="6.53" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="12.89" y="0" xml:space="preserve"> 1800-13</tspan></text>
      </a>
    </g>
    <g id="SP_1800-207" data-name="SP 1800-207">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-207.pdf" title="SP 1800-207" target="_blank" rel="noopener noreferrer">
      <rect id="gbrect-23" class="tsbutton" data-name="gbrect" x="47.41" y="724.3" width="90.19" height="41.5" />
      <text id="SP_1800-207-2" data-name="SP 1800-207" transform="translate(63.84 748.56)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="6.53" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="12.89" y="0" xml:space="preserve"> 1800-207</tspan></text>
      </a>
    </g>
    <g id="NIST_Privacy_Framework" data-name="NIST Privacy Framework">
      <a href="https://www.nist.gov/privacy-framework/privacy-framework" title="NIST Privacy Framework" target="_blank" rel="noopener noreferrer">
      <rect id="gbrect-24" class="tsbutton" data-name="gbrect" x="47.41" y="774.3" width="90.19" height="41.5" />
      <text id="NIST_Privacy_Framework-2" data-name="NIST Privacy Framework" transform="translate(62.39 792.68)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">NIST Privacy </tspan><tspan x="3.81" y="11.76">Framework</tspan></text>
      </a>
    </g>
    <g id="SP_White_Box" data-name="SP White Box">
      <rect id="whitepanel" x="167.41" y="604.3" width="100.09" height="91" style="fill: #fff; stroke: #000; stroke-miterlimit: 10;"/>
    </g>
    <g id="SP_800-53A" data-name="SP 800-53A">
      <a href="https://csrc.nist.gov/pubs/sp/800/53/a/r5/final" title="SP 800-53A" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-25" data-name="gbrect" x="176.41" y="653.3" width="81.09" height="32" />
      <text id="SP_800-53A-2" data-name="SP 800-53A" transform="translate(190.26 673.26)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="6.53" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="12.89" y="0" xml:space="preserve"> 800-53</tspan><tspan x="46.12" y="0" style="letter-spacing: -.04em;">A</tspan></text>
      </a>
    </g>
    <g id="SP_800-53" data-name="SP 800-53">
      <a href="https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" title="SP 800-53" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-26" data-name="gbrect" x="176.41" y="615.3" width="81.09" height="32" />
      <text id="SP_800-53-2" data-name="SP 800-53" transform="translate(193.82 635.26)" style="font-family: Arial-BoldMT, Arial; font-size: 9.8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="6.53" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="12.89" y="0" xml:space="preserve"> 800-53</tspan></text>
      </a>
    </g>
    <g id="PIV_Privileged_User_Guide" data-name="PIV Privileged User Guide">
      <a href="https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.04212016.pdf" title="PIV Privileged User Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-27" data-name="gbrect" x="185.5" y="545.3" width="82.97" height="30.97" />
      <text id="PIV_Privileged_User_Guide-2" data-name="PIV Privileged User Guide" transform="translate(195.42 559.91)" style="font-family: Arial-BoldMT, Arial; font-size: 9.61px; font-weight: 700;"><tspan x="0" y="0">PIV Privileged </tspan><tspan x="6.41" y="9.61">User Guide</tspan></text>
      </a>
    </g>
    <g id="SP_800-37" data-name="SP 800-37">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf" title="SP 800-37" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-28" data-name="gbrect" x="337.3" y="545.3" width="71.2" height="22" />
      <text id="SP_800-37-2" data-name="SP 800-37" transform="translate(350.68 558.54) scale(1.19 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-37</tspan></text>
      </a>
    </g>
    <g id="SP_800-162" data-name="SP 800-162">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-162.pdf" title="SP 800-162" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-29" data-name="gbrect" x="337.3" y="574.3" width="71.2" height="21.17" />
      <text id="SP_800-162-2" data-name="SP 800-162" transform="translate(349.2 588.05) scale(1.13 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-162</tspan></text>
      </a>
    </g>
    <g id="SP_800-122" data-name="SP 800-122">
      <a href="https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-122.pdf" title="SP 800-122" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-30" data-name="gbrect" x="337.3" y="605.3" width="71.2" height="21.17" />
      <text id="SP_800-122-2" data-name="SP 800-122" transform="translate(349.2 619.05) scale(1.13 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-122</tspan></text>
      </a>
    </g>
    <g id="SP_800-205" data-name="SP 800-205">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-205.pdf" title="SP 800-205" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-31" data-name="gbrect" x="337.3" y="634.3" width="71.2" height="21.17" />
      <text id="SP_800-205-2" data-name="SP 800-205" transform="translate(349.2 648.05) scale(1.13 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-205</tspan></text>
      </a>
    </g>
    <g id="SP_White_Box-2" data-name="SP White Box">
      <!-- Panel, no linkage -->
      <rect id="whitepanel-2" data-name="whitepanel" x="335.5" y="694.3" width="98" height="101" style="fill: #fff; stroke: #000; stroke-miterlimit: 10;"/>
    </g>
    <g id="SP_800-63" data-name="SP 800-63"><!-- updated link to intro -->
      <a href="https://pages.nist.gov/800-63-4/sp800-63/introduction/" title="SP 800-63" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-32" data-name="gbrect" x="346.28" y="705.3" width="74.22" height="17.23"/>
      <text id="SP_800-63-2" data-name="SP 800-63" transform="translate(359.53 717.03) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-63</tspan></text>
      </a>
    </g>
    <g id="SP_800-63A" data-name="SP 800-63A">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63A-4.2pd.pdf" title="SP 800-63A" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-33" data-name="gbrect" x="346.28" y="725.3" width="74.22" height="17.23" />
      <text id="SP_800-63A-2" data-name="SP 800-63A" transform="translate(355.85 737.03) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-63</tspan><tspan x="37.66" y="0" style="letter-spacing: -.04em;">A</tspan></text>
      </a>
    </g>
    <g id="SP_800-63B" data-name="SP 800-63B">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63B-4.2pd.pdf" title="SP 800-63B" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-34" data-name="gbrect" x="346.28" y="745.3" width="74.22" height="17.23" />
      <text id="SP_800-63B-2" data-name="SP 800-63B" transform="translate(355.85 757.03) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-63B</tspan></text>
      </a>
    </g>
    <g id="SP_800-63C1" data-name="SP 800-63C1">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63C-4.2pd.pdf" title="SP 800-63C1" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-35" data-name="gbrect" x="346.28" y="765.3" width="74.22" height="17.23" />
      <text id="SP_800-63C1-2" data-name="SP 800-63C-2" transform="translate(355.85 777.03) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-63C</tspan></text>
      </a>
    </g>
    <g id="NIST_IAM_Roadmap1" data-name="NIST IAM Roadmap1">
      <a href="https://www.nist.gov/identity-access-management/identity-and-access-management-roadmap" title="NIST IAM Roadmap" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-36" data-name="gbrect" x="497.39" y="605.3" width="71.11" height="38.89" />
      <text id="NIST_IAM_Roadmap1-2" data-name="NIST_IAM_Roadmap1-2" transform="translate(513.94 623.24) scale(.79 1)" style="font-family: Arial-BoldMT, Arial; font-size: 11px; font-weight: 700;"><tspan x="0" y="0">NIST IAM</tspan><tspan x="-.92" y="11">Roadmap</tspan></text>
      </a>
    </g>
    <g id="NIST_Inter-Agency_Box" data-name="NIST Inter-Agency Box">
      <!-- bounding box, no link -->
      <rect class="tsbutton" id="NIST_Inter-Agency_Box-2" data-name="NIST Inter-Agency Box" x="476.5" y="729.3" width="212" height="107" style="fill: #fff; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="NIST_Inter-Agency_Reports_Text" data-name="NIST Inter-Agency Reports Text" transform="translate(498.57 744.74) scale(1.27 1)" style="font-family: ArialMT, Arial; font-size: 11px;"><tspan x="0" y="0">NIS</tspan><tspan x="18.34" y="0" style="letter-spacing: -.02em;">T</tspan><tspan x="24.86" y="0" xml:space="preserve"> Inter-Agency Reports</tspan></text>
    </g>
    <g id="NISTIR_7966" data-name="NISTIR 7966">
      <a href="https://nvlpubs.nist.gov/nistpubs/ir/2015/NIST.IR.7966.pdf" title="NISTIR 7966" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-38" data-name="gbrect" x="487.28" y="754.3" width="90.22" height="31" />
      <text id="NISTIR_7966t" data-name="NISTIR 7966t" transform="translate(499.39 773.38) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">NISTIR 7966</tspan></text>
      </a>
    </g>
    <g id="NISTIR_8149" data-name="NISTIR 8149">
      <a href="https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8149.pdf" title="NISTIR 8149" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-39" data-name="gbrect" x="487.28" y="795.3" width="90.22" height="31" />
      <text id="NISTIR_8149t" data-name="NISTIR 8149t" transform="translate(499.39 814.38) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">NISTIR 8149</tspan></text>
      </a>
    </g>
    <g id="NISTIR_8335" data-name="NISTIR 8335">
      <a href="https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8335-draft.pdf" title="NISTIR 8335" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-40" data-name="gbrect" x="587.28" y="754.3" width="90.22" height="31" />
      <text id="NISTIR_8335t" data-name="NISTIR 8335t" transform="translate(599.39 773.38) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">NISTIR 8335</tspan></text>
      </a>
    </g>
    <g id="NISTIR_8344" data-name="NISTIR 8344">
      <a href="https://nvlpubs.nist.gov/nistpubs/ir/2021/NIST.IR.8344-draft.pdf" title="NISTIR 8344" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-41" data-name="gbrect" x="587.28" y="795.3" width="90.22" height="31" />
      <text id="NISTIR_8344t" data-name="NISTIR 8344t" transform="translate(599.39 814.38) scale(1.27 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">NISTIR 8344</tspan></text>
      </a>
    </g>
    <g id="FIPS_201_Gray_Box" data-name="FIPS 201 Gray Box">
      <!-- bounding box, no link -->
      <rect id="FIPS_201_Gray_Box-2" data-name="FIPS 201 Gray Box" x="770" y="593.8" width="292" height="214" style="fill: #d8d8d8; stroke: #000; stroke-miterlimit: 10;" />
      <text id="FIPS_201" data-name="FIPS 201" transform="translate(841.7 628.82) scale(1.27 1)" style="font-family: ArialMT, Arial; font-size: 28px;"><tspan x="0" y="0">FIPS 201</tspan></text>
    </g>
    <g id="FIPS_201_White_Box" data-name="FIPS 201 White Box">
      <!-- bounding box, no link -->
      <rect id="NIST_Inter-Agency_Box-3" data-name="NIST Inter-Agency Box" x="776.5" y="639.3" width="280" height="162" style="fill: #fff; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="FIPS_201_related_standards" data-name="FIPS 201 related standards" transform="translate(831.76 658.74) scale(1.27 1)" style="font-family: ArialMT, Arial; font-size: 11px;"><tspan x="0" y="0">FIPS 201 related standards</tspan></text>
    </g>
    <g id="SP_800-73" data-name="SP 800-73">
      <a href="https://csrc.nist.gov/pubs/sp/800/73/pt1/5/final" title="SP 800-73" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-42" data-name="gbrect" x="787.23" y="678.3" width="76.34" height="25.1" />
      <text id="SP_800-73-2" data-name="SP 800-73" transform="translate(800.44 694) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-73</tspan></text>
      </a>
    </g>
    <g id="SP_800-79" data-name="SP 800-79">
      <a href="https://csrc.nist.gov/pubs/sp/800/79/2/final" title="SP 800-79" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-43" data-name="gbrect" x="787.23" y="718.3" width="76.34" height="25.1" />
      <text id="SP_800-79-2" data-name="SP 800-79" transform="translate(800.44 734) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-79</tspan></text>
      </a>
    </g>
    <g id="SP_800-96" data-name="SP 800-96">
      <a href="https://csrc.nist.gov/pubs/sp/800/96/final" title="SP 800-96" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-44" data-name="gbrect" x="787.23" y="758.3" width="76.34" height="25.1" />
      <text id="SP_800-96-2" data-name="SP 800-96" transform="translate(800.44 774) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-96</tspan></text>
      </a>
    </g>
    <g id="SP_800-76" data-name="SP 800-76">
      <a href="https://csrc.nist.gov/pubs/sp/800/76/2/final" title="SP 800-76" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-45" data-name="gbrect" x="877.23" y="678.3" width="76.34" height="25.1" />
      <text id="SP_800-76-2" data-name="SP 800-76" transform="translate(890.44 694) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-76</tspan></text>
      </a>
    </g>
    <g id="SP_800-85" data-name="SP 800-85">
      <a href="https://csrc.nist.gov/pubs/sp/800/85/b/final" title="SP 800-85" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-46" data-name="gbrect" x="877.23" y="718.3" width="76.34" height="25.1" />
      <text id="SP_800-85-2" data-name="SP 800-85" transform="translate(890.44 734) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-85</tspan></text>
      </a>
    </g>
    <g id="SP_800-116" data-name="SP 800-116">
      <a href="https://csrc.nist.gov/pubs/sp/800/116/r1/final" title="SP 800-116" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-47" data-name="gbrect" x="877.23" y="758.3" width="76.34" height="25.1" />
      <text id="SP_800-116-2" data-name="SP 800-116-2" transform="translate(887.78 774) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-</tspan><tspan x="28.76" y="0" style="letter-spacing: -.06em;">1</tspan><tspan x="32.77" y="0">16</tspan></text>
      </a>
    </g>
    <g id="SP_800-78" data-name="SP 800-78">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-78-5.pdf" title="SP 800-78" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-48" data-name="gbrect" x="967.23" y="678.3" width="76.34" height="25.1" />
      <text id="SP_800-78-2" data-name="SP 800-78" transform="translate(980.44 694) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-78</tspan></text>
      </a>
    </g>
    <g id="SP_800-87" data-name="SP 800-87">
      <a href="https://csrc.nist.gov/pubs/sp/800/87/r2/final" title="SP 800-87" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-49" data-name="gbrect" x="967.23" y="718.3" width="76.34" height="25.1" />
      <text id="SP_800-87-2" data-name="SP 800-87" transform="translate(980.44 734) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-87</tspan></text>
      </a>
    </g>
    <g id="SP_800-157" data-name="SP 800-157">
      <a href="https://csrc.nist.gov/pubs/sp/800/157/final" title="SP 800-157" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-50" data-name="gbrect" x="967.23" y="758.3" width="76.34" height="25.1" />
      <text id="SP_800-157-2" data-name="SP 800-157" transform="translate(977.48 774) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-157</tspan></text>
      </a>
    </g>
    <g id="SP_800-171" data-name="SP 800-171">
      <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171Ar3.pdf" title="SP 800-171" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-51" data-name="gbrect" x="787.23" y="544.3" width="80.27" height="23" />
      <text id="SP_800-171-2" data-name="SP 800-171" transform="translate(799.48 559) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-171</tspan></text>
      </a>
    </g>
    <g id="SP_800-116-3" data-name="SP 800-116">
      <a href="https://csrc.nist.gov/pubs/sp/800/116/r1/final" title="SP 800-116" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-52" data-name="gbrect" x="936.23" y="555.3" width="85.27" height="17" />
      <text id="SP_800-116-4" data-name="SP 800-116" transform="translate(950.78 567) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">S</tspan><tspan x="5.34" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="10.53" y="0" xml:space="preserve"> 800-</tspan><tspan x="28.76" y="0" style="letter-spacing: -.06em;">1</tspan><tspan x="32.77" y="0">16</tspan></text>
      </a>
    </g>
    <g id="Cloud_Security_Architecture" data-name="Cloud Security Architecture">
      <a href="https://www.cisa.gov/sites/default/files/2023-05/Cloud%20Security%20Technical%20Reference%20Architecture%20v2.pdf" title="Cloud Security Architecture" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-53" data-name="gbrect" x="1107.23" y="644.3" width="80.27" height="53" />
      <text id="Cloud_Security_Architecture-2" data-name="Cloud Security Architecture" transform="translate(1109.44 669.66) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">Cloud Security </tspan><tspan x="4.66" y="9">Architecture</tspan></text>
      </a>
    </g>
    <!-- ISC Section -->
    <g id="Risk_Management" data-name="Risk Management">
      <a href="https://www.cisa.gov/resources-tools/resources/isc-standard-risk-management-process" title="Risk Management" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-54" data-name="gbrect" x="1306.5" y="744.3" width="111" height="51" />
      <text id="Risk_Management-2" data-name="Risk Management" transform="translate(1317.24 761.16) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">Risk Management</tspan><tspan x="-3.34" y="12">Process for Federal</tspan><tspan x="16.89" y="24">Facilities</tspan></text>
      </a>
    </g>
    <g id="PACS_Best_Practices_Guide" data-name="PACS Best Practices Guide">
      <a href="https://www.cisa.gov/sites/default/files/publications/isc-planning-managing-physical-security-resources-dec-2015-508.pdf" title="PACS Best Practices Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-55" data-name="gbrect" x="1306.5" y="804.3" width="111" height="51" />
      <text id="PACS_Best_Practices_Guide-2" data-name="PACS Best Practices Guide" transform="translate(1348.11 821.16) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0" style="letter-spacing: -.07em;">P</tspan><tspan x="4.74" y="0">ACS </tspan><tspan x="-16.76" y="12">Best Practices</tspan><tspan x="-.52" y="24">Guide</tspan></text>
      </a>
    </g>
    <g id="Facility_Acess" data-name="Facility Acess"><!-- site down at time of update -->
      <a href="https://www.cisa.gov/sites/default/files/2025-02/Facility%20Access%20Control%20-%20An%20Interagency%20Security%20Committee%20Best%20Practice-02-20.pdf" title="Facility Acess Control" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-56" data-name="gbrect" x="1306.5" y="864.3" width="111" height="51" />
      <text id="Facility_Acess-2" data-name="Facility Acess" transform="translate(1327.19 887.16) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">Facility</tspan><tspan x="27.57" y="0" style="letter-spacing: -.04em;"> </tspan><tspan x="29.49" y="0">Acess</tspan><tspan x="12.31" y="12">Control</tspan></text>
      </a>
    </g>
    <!-- DOD Guidance Section -->
    <g id="Selecting_Secure_MFA" data-name="Selecting Secure MFA"><!-- Not updated - site down at time of update -->
      <a href="https://media.defense.gov/2024/Jul/31/2003515137/-1/-1/0/MULTIFACTOR_AUTHENTICATION_SOLUTIONS_UOO17091520.PDF" title="Selecting Secure MFA" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-57" data-name="gbrect" x="56.5" y="924.3" width="95" height="32" />
      <text id="Selecting_Secure_MFA-2" data-name="Selecting Secure MFA" transform="translate(61.6 937.66) scale(1.33 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">Selecting Secure</tspan><tspan x="23.79" y="12">M</tspan><tspan x="30.46" y="12" style="letter-spacing: -.06em;">F</tspan><tspan x="34.9" y="12" style="letter-spacing: -.04em;">A</tspan></text>
      </a>
    </g>
    <!-- NSA Guidance Section -->
    <g id="Transition_to_Multi-Factor_Authentication" data-name="Transition to Multi-Factor Authentication">
      <a href="https://media.defense.gov/2019/Sep/09/2002180346/-1/-1/0/Transition%20to%20Multi-factor%20Authentication%20-%20Copy.pdf" title="Transition to Multi-Factor Authentication" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-58" data-name="gbrect" x="196.5" y="894.3" width="100.97" height="51" />
      <text id="Transition_to_Multi-Factor_Authentication-2" data-name="Transition to Multi-Factor Authentication" transform="translate(212.57 913.69) scale(1.19 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.48px; font-weight: 700;"><tspan x="0" y="0" style="letter-spacing: -.06em;">T</tspan><tspan x="5.27" y="0">ransition to</tspan><tspan x="1.32" y="10">Multi-Factor</tspan><tspan x="-4.74" y="20">Authentication</tspan></text>
      </a>
    </g>
    <g id="Mitigating_Cloud2" data-name="Mitigating Cloud2">
      <a href="https://media.defense.gov/2020/Jan/22/2002237484/-1/-1/0/CSI-MITIGATING-CLOUD-VULNERABILITIES_20200121.PDF" title="Mitigating Cloud" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-59" data-name="gbrect" x="306.4" y="914.3" width="100.97" height="32.2" />
      <text id="Mitigating_Cloud" data-name="Transition to Multi-Factor Authentication" transform="translate(315.92 928.84) scale(1.15 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">Mitigating Cloud</tspan><tspan x="3.4" y="10.39" style="letter-spacing: -.04em;">V</tspan><tspan x="9.07" y="10.39">ulnerablilities</tspan></text>
      </a>
    </g>
    <!-- FedRAMP Section -->
    <g id="FedRAMP_Digital_Identity_Requirements" data-name="FedRAMP Digital Identity Requirements">
      <a href="https://s3.amazonaws.com/sitesusa/wp-content/uploads/var/www/html/sites/www/app/wordpress/wp-content/blogs.dir/482/files/2016/06/FedRAMP_Digital_Identity_Requirements_v1.0.pdf" title="FedRAMP Digital Identity Requirements" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-60" data-name="gbrect" x="562.41" y="920.3" width="122.09" height="42" />
      <text id="FedRAMP_Digital_Identity_Requirements-2" data-name="FedRAMP Digital Identity Requirements" transform="translate(581.27 939.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">FedRAM</tspan><tspan x="36.5" y="0" style="letter-spacing: -.02em;">P</tspan><tspan x="42.34" y="0" xml:space="preserve"> Digital</tspan><tspan x="-11.09" y="11">Identity Requirements</tspan></text>
      </a>
    </g>
    <g id="FIPS_201_Approved_Products_List_APL_" data-name="FIPS 201 Approved Products List (APL)">
      <a href="https://www.idmanagement.gov/fips201/" title="FIPS 201 Approved Products List (APL)" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-61" data-name="gbrect" x="255.78" y="1084.3" width="107.72" height="41" />
      <text id="FIPS_201_Approved_Products_List_APL_-2" data-name="FIPS 201 Approved Products List (APL)" transform="translate(261.99 1103.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">FIPS 201</tspan><tspan x="37.52" y="0" style="letter-spacing: -.04em;"> </tspan><tspan x="39.69" y="0">Approved</tspan><tspan x="-1.16" y="10">Products List (APL)</tspan></text>
      </a>
    </g>
    <g id="Application_Rationalization_Playbook" data-name="Application Rationalization Playbook">
      <a href="https://www.cio.gov/assets/files/Application-Rationalization-Playbook.pdf" title="Application Rationalization Playbook" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-62" data-name="gbrect" x="257.78" y="1145.3" width="100.72" height="51" />
      <text id="Application_Rationalization_Playbook-2" data-name="Application Rationalization Playbook" transform="translate(279.58 1164.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">Application</tspan><tspan x="-7.5" y="10">Rationalization</tspan><tspan x="4.49" y="20">Playbook</tspan></text>
      </a>
    </g>
    <g id="HTTPS_Compliance_Guide" data-name="HTTPS Compliance Guide">
      <a href="https://https.cio.gov/guide/#are-federally-operated-certificate-revocation-services-crl-ocsp-also-required-to-move-to-https" title="HTTPS Compliance Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-63" data-name="gbrect" x="706" y="1155.3" width="112.5" height="40" />
      <text id="HTTPS_Compliance_Guide-2" data-name="HTTPS Compliance Guide" transform="translate(714.28 1173.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">HTTPS Compliance</tspan><tspan x="28.76" y="11">Guide</tspan></text>
      </a>
    </g>
    <g id="ICAM_Acquisition_Guide" data-name="ICAM Acquisition Guide">
      <a href="https://www.dhs.gov/sites/default/files/publications/icam_acquisition_guidance_final_version_-_092019.pdf" title="ICAM Acquisition Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-64" data-name="gbrect" x="1296" y="1124.3" width="101.5" height="34" />
      <text id="ICAM_Acquisition_Guide-2" data-name="ICAM Acquisition Guide" transform="translate(1303.45 1139.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">ICAM</tspan><tspan x="23" y="0" style="letter-spacing: -.04em;"> </tspan><tspan x="25.16" y="0">Acquisition </tspan><tspan x="24.33" y="11">Guide</tspan></text>
      </a>
    </g>
    <g id="Zero_Trust_Maturity_Model" data-name="Zero Trust Maturity Model">
      <a href="https://www.cisa.gov/sites/default/files/2023-04/CISA_Zero_Trust_Maturity_Model_Version_2_508c.pdf" title="Zero Trust Maturity Model" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-65" data-name="gbrect" x="1306.5" y="1223.3" width="91" height="43" />
      <text id="Zero_Trust_Maturity_Model-2" data-name="Zero Trust Maturity Model" transform="translate(1325.81 1243.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">Zero </tspan><tspan x="22" y="0" style="letter-spacing: -.06em;">T</tspan><tspan x="27.01" y="0">rust </tspan><tspan x="-9.75" y="11">Maturity Model</tspan></text>
      </a>
    </g>
    <g id="FICAM_Playbooks" data-name="FICAM Playbooks">
      <a href="https://www.idmanagement.gov/playbooks/" title="ICAM PM Playbook" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-66" data-name="gbrect" x="247.5" y="1263.3" width="90" height="43" />
      <text id="FICAM_Playbooks-2" data-name="FICAM Playbooks" transform="translate(276.36 1282.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">FICAM </tspan><tspan x="-8.26" y="11">Playbooks</tspan></text>
      </a>
    </g>
    <g id="ICAM_PM_Playbook" data-name="ICAM PM Playbook">
      <a href="https://www.idmanagement.gov/university/pm/" title="ICAM PM Playbook" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-67" data-name="gbrect" x="347.5" y="1263.3" width="90" height="43" />
      <text id="ICAM_PM_Playbook-2" data-name="ICAM PM Playbook" transform="translate(370.23 1282.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">ICAM PM </tspan><tspan x="-.51" y="11">Playbook</tspan></text>
      </a>
    </g>
    <g id="PIV_Guides" data-name="PIV Guides">
      <a href="https://www.idmanagement.gov/university/piv/" title="PIV Guides" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-68" data-name="gbrect" x="347.5" y="1313.3" width="90" height="43" />
      <text id="PIV_Guides-2" data-name="PIV Guides" transform="translate(365.26 1337.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">PIV Guides</tspan></text>
      </a>
    </g>
    <g id="PIV_in_E-PACS" data-name="PIV in E-PACS">
      <a href="https://www.idmanagement.gov/docs/pacs-piv-epacs.pdf" title="PIV in E-PACS" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-69" data-name="gbrect" x="247.5" y="1313.3" width="90" height="43" />
      <text id="PIV_in_E-PACS-2" data-name="PIV in E-PACS" transform="translate(257.48 1337.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">PIV in E-</tspan><tspan x="36.51" y="0" style="letter-spacing: -.07em;">P</tspan><tspan x="41.84" y="0">ACS</tspan></text>
      </a>
    </g>
    <g id="PACS_Guide" data-name="PACS Guide">
      <a href="https://www.idmanagement.gov/university/pacs/" title="PACS Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-70" data-name="gbrect" x="247.5" y="1363.3" width="90" height="43" />
      <text id="PACS_Guide-2" data-name="PACS Guide" transform="translate(262.44 1387.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0" style="letter-spacing: -.07em;">P</tspan><tspan x="5.34" y="0">ACS Guide</tspan></text>
      </a>
    </g>
    <g id="ICAM_Governance_Framework" data-name="ICAM Governance Framework">
      <a href="https://www.idmanagement.gov/docs/playbook-identity-governance-framework.pdf" title="ICAM Governance Framework" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-71" data-name="gbrect" x="347.5" y="1363.3" width="90" height="43" />
      <text id="ICAM_Governance_Framework-2" data-name="ICAM Governance Framework" transform="translate(379.57 1376.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">ICAM </tspan><tspan x="-14.51" y="11">Governance </tspan><tspan x="-12.51" y="22">Framework</tspan></text>
      </a>
    </g>
    <g id="FPKI_Guide" data-name="FPKI Guide">
      <a href="https://www.idmanagement.gov/university/fpki/" title="FPKI Guide" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-72" data-name="gbrect" x="147.5" y="1363.3" width="90" height="43" />
      <text id="FPKI_Guide-2" data-name="FPKI Guide" transform="translate(164.68 1387.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">FPKI Guide</tspan></text>
      </a>
    </g>
    <g id="SSO_Playbook" data-name="SSO Playbook">
      <a href="https://www.idmanagement.gov/playbooks/sso/" title="SSO Playbook" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-73" data-name="gbrect" x="147.5" y="1313.3" width="90" height="43" />
      <text id="SSO_Playbook-2" data-name="SSO Playbook" transform="translate(157.08 1337.52) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">SSO Playbook</tspan></text>
      </a>
    </g>
    <g id="FICAM_Architecture" data-name="FICAM Architecture">
      <a href="https://www.idmanagement.gov/arch/" title="FICAM Architecture" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-74" data-name="gbrect" x="457.5" y="1263.3" width="90" height="43" />
      <text id="FICAM_Architecture-2" data-name="FICAM Architecture" transform="translate(486.36 1282.02) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9px; font-weight: 700;"><tspan x="0" y="0">FICAM </tspan><tspan x="-12.26" y="11">Architecture</tspan></text>
      </a>
    </g>
    <g id="ePACS_800-53_Overlay" data-name="ePACS 800-53 Overlay">
      <a href="https://www.idmanagement.gov/docs/pacs-800-53-overlay.pdf" title="ePACS 800-53 Overlay" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-75" data-name="gbrect" x="667.5" y="1353.3" width="74" height="40" />
      <text id="ePACS_800-53_Overlay-2" data-name="ePACS 800-53 Overlay" transform="translate(673.93 1371.16) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 8px; font-weight: 700;"><tspan x="0" y="0">e</tspan><tspan x="4.45" y="0" style="letter-spacing: -.07em;">P</tspan><tspan x="9.19" y="0">ACS 800-53</tspan><tspan x="11.93" y="10">Overlay</tspan></text>
      </a>
    </g>
    <g id="Common_Profiles" data-name="Common Profiles">
      <a href="https://www.idmanagement.gov/docs/fpki-x509-cert-profile-common.pdf" title="Common Profiles" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-76" data-name="gbrect" x="997.5" y="1304.3" width="101" height="41" />
      <text id="Common_Profiles-2" data-name="Common Profiles" transform="translate(1002.4 1327.64) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.33px; font-weight: 700;"><tspan x="0" y="0">Common Profiles</tspan></text>
      </a>
    </g>
    <g id="FBCA_Profiles" data-name="FBCA Profiles">
      <a href="https://www.idmanagement.gov/docs/fpki-x509-cert-profiles-fbca.pdf"  title="FBCA Profiles" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-77" data-name="gbrect" x="997.5" y="1353.3" width="101" height="41" />
      <text id="FBCA_Profiles-2" data-name="FBCA Profiles" transform="translate(1011.08 1376.64) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.33px; font-weight: 700;"><tspan x="0" y="0">FBC</tspan><tspan x="19.18" y="0" style="letter-spacing: -.04em;">A</tspan><tspan x="25.57" y="0" xml:space="preserve"> Profiles</tspan></text>
      </a>
    </g>
    <g id="FPKI_800-53_Overlay" data-name="FPKI 800-53 Overlay">
      <a href="https://www.idmanagement.gov/docs/fpki-overlay-sp-800-53.pdf" title="FPKI 800-53 Overlay" target="_blank" rel="noopener noreferrer">
      <rect class="tsbutton" id="gbrect-78" data-name="gbrect" x="1107.5" y="1353.3" width="101" height="41" style="fill: #d8d8d8; stroke: #000; stroke-miterlimit: 10;"/>
      <text id="FPKI_800-53_Overlay-2" data-name="FPKI 800-53 Overlay" transform="translate(1126.62 1371.55) scale(1.17 1)" style="font-family: Arial-BoldMT, Arial; font-size: 9.33px; font-weight: 700;"><tspan x="0" y="0">FPKI 800-53 </tspan><tspan x="9.33" y="10.18">Overlay</tspan></text>
      </a>
    </g>
    <!-- Legend of Policy Matrix - Key -->
    <g id="Cloud_Security_Arch_Text" data-name="Cloud Security Arch Text">
      <rect id="white_underlay" x="1081" y="555.8" width="110" height="83" style="fill: #fff;"/>
      <text id="Cloud_Security_Arch_Text-2" data-name="Cloud Security Arch Text" transform="translate(1088.02 579.1) scale(.94 1)" style="font-size: 12px;"><tspan style="font-family: Arial-ItalicMT, Arial; font-style: italic;"><tspan x="0" y="0">The Cloud Security</tspan></tspan><tspan style="font-family: Arial-ItalicMT, Arial; font-style: italic;"><tspan x="6.67" y="14">Architecture was</tspan></tspan><tspan style="font-family: Arial-ItalicMT, Arial; font-style: italic;"><tspan x="15.33" y="28">developed by</tspan></tspan><tspan style="font-family: Arial-ItalicMT, Arial; font-style: italic;"><tspan x="3.67" y="42">USDS, CISA, and</tspan></tspan><tspan x="23.35" y="56" style="font-family: Arial-ItalicMT, Arial; font-style: italic;">FedRAM</tspan><tspan x="70.69" y="56" style="font-family: Arial-ItalicMT, Arial; font-style: italic; letter-spacing: -.04em;">P</tspan><tspan x="78.25" y="56" style="font-family: Arial-ItalicMT, Arial; font-style: italic;"> </tspan><tspan x="81.59" y="56" style="font-family: Arial-BoldMT, Arial; font-weight: 700;"> </tspan></text>
    </g>
    <g id="Cloud_Security_Arch_Text_copy" data-name="Cloud Security Arch Text">
      <rect id="white_underlay-2" data-name="white_underlay" x="729" y="890.8" width="82" height="77" style="fill: #eee;"/>
      <text id="Cloud_Security_Arch_Text-3" data-name="Cloud Security Arch Text" transform="translate(738.55 906.1) scale(.94 1)" style="font-family: Arial-ItalicMT, Arial; font-size: 12px; font-style: italic;"><tspan x="0" y="0">FedRAM</tspan><tspan x="47.34" y="0" style="letter-spacing: -.04em;">P</tspan><tspan x="54.9" y="0" xml:space="preserve"> is</tspan><tspan x="18.11" y="14">jointly</tspan><tspan x="1.76" y="28">operated by</tspan><tspan x="3.11" y="42">GSA, DHS,</tspan><tspan x="8.44" y="56">and DOD</tspan></text>
    </g>
    <g id="Ledgend_Key_Areas_" data-name="Ledgend (Key Areas)">
      <g id="Key:_Government_Body_Area" data-name="Key: Government Body Area">
        <rect id="gbrect-79" data-name="gbrect" x="854.27" y="78.48" width="245.06" height="27.18" style="fill: #b59fcd; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text id="Produced_by" data-name="Produced by" transform="translate(917.65 91.31) scale(1.3 1)" style="font-family: ArialMT, Arial; font-size: 9.08px;"><tspan x="0" y="0">Produced by GSA/CIO </tspan><tspan x="-5.46" y="9.08">Council/ICAMSC/FPKI</tspan><tspan x="85.4" y="9.08" style="letter-spacing: -.07em;">P</tspan><tspan x="90.79" y="9.08" style="letter-spacing: -.06em;">A</tspan></text>
      </g>
      <g id="Key:_Act_of_Congress_Area" data-name="Key: Act of Congress Area">
        <rect id="gbrect-80" data-name="gbrect" x="109.51" y="78.56" width="245.06" height="27.1" style="fill: #fc9; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text id="Produced_by-2" data-name="Produced by" transform="translate(172.23 94.69) scale(1.35 1)" style="font-family: ArialMT, Arial; font-size: 8.72px;"><tspan x="0" y="0">Produced by Congress</tspan></text>
      </g>
      <g id="Key:_Executive_Order_Area" data-name="Key: Executive Order Area">
        <rect id="gbrect-81" data-name="gbrect" x="357.7" y="78.56" width="245.06" height="27.1" style="fill: #cdeb8b; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text id="Produced_by-3" data-name="Produced by" transform="translate(411.91 95.93) scale(1.3 1)" style="font-family: ArialMT, Arial; font-size: 9.08px;"><tspan x="0" y="0">Produced by White House</tspan></text>
      </g>
      <g id="Key:_Federal_Policy_Area" data-name="Key: Federal Policy Area">
        <g id="eorect-25" data-name="eorect">
          <rect x="605.97" y="77.75" width="244.31" height="27.54" style="fill: #C0D7F0;"/>
          <path d="M849.9,78.12v26.79h-243.56v-26.79h243.56M850.65,77.37h-245.06v28.29h245.06v-28.29h0Z"/>
        </g>
        <text id="produced_by" data-name="produced by" transform="translate(653.14 94.8) scale(1.3 1)" style="font-family: ArialMT, Arial; font-size: 9.08px;"><tspan x="0" y="0">Produced by OMB/DNI/OPM</tspan></text>
      </g>
      <g id="Key:_Technical_Standards_Area" data-name="Key: Technical Standards Area">
        <g id="gbrect-82" data-name="gbrect">
          <rect x="1103.81" y="78.31" width="244.31" height="27.54" style="fill: #d8d8d8;"/>
          <path d="M1347.74,78.69v26.79h-243.56v-26.79h243.56M1348.49,77.94h-245.06v28.29h245.06v-28.29h0Z"/>
        </g>
        <text id="Produced_by-4" data-name="Produced by" transform="translate(1123.8 95.07) scale(1.3 1)" style="font-family: ArialMT, Arial; font-size: 9.08px;"><tspan x="0" y="0">Produced by NIST/ISC/NSA/FedRAM</tspan><tspan x="151.45" y="0" style="letter-spacing: -.02em;">P</tspan></text>
      </g>
    </g>
    <g id="Ledgend_Key_" data-name="Ledgend (Key)">
      <g id="Key:_Government_Body" data-name="Key: Government Body">
        <rect id="gbrect-83" data-name="gbrect" x="854.27" y="33.34" width="245.06" height="40.95" style="fill: #e6e4fa; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text transform="translate(924.1 58.7) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0">Government Body</tspan></text>
      </g>
      <g id="Key:_Act_of_Congress" data-name="Key: Act of Congress">
        <rect id="gbrect-84" data-name="gbrect" x="109.51" y="33.43" width="245.06" height="40.95" style="fill:#ffe6cc; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text transform="translate(185.09 58.78) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0">Act of Congress</tspan></text>
      </g>
      <g id="Key:_Executive_Order" data-name="Key: Executive Order">
        <rect id="gbrect-85" data-name="gbrect" x="357.7" y="33.43" width="245.06" height="40.95" style="fill: #d5e8d4; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text transform="translate(433.6 58.78) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0">Executive Order</tspan></text>
      </g>
      <g id="Key:_Federal_Policy" data-name="Key: Federal Policy">
        <rect id="gbrect-86" data-name="gbrect" x="605.59" y="33.43" width="245.06" height="40.95"/>
        <g id="eorect-26" data-name="eorect">
          <rect x="605.97" y="33.72" width="244.31" height="40.28" style="fill: #cce5ff;"/>
          <path d="M849.9,34.09v39.53h-243.56v-39.53h243.56M850.65,33.34h-245.06v41.03h245.06v-41.03h0Z"/>
        </g>
        <text id="Federal_Policy" data-name="Federal Policy" transform="translate(686.79 58.78) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0">Federal Policy</tspan></text>
      </g>
      <g id="Key:_Technical_Standard" data-name="Key: Technical Standard">
        <g id="gbrect-87" data-name="gbrect">
          <rect x="1103.81" y="34.29" width="244.31" height="40.28" style="fill: #eee;"/>
          <path d="M1347.74,34.66v39.53h-243.56v-39.53h243.56M1348.49,33.91h-245.06v41.03h245.06v-41.03h0Z"/>
        </g>
        <text id="Technical_Standard" data-name="Technical Standard" transform="translate(1170.19 59.3) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0" style="letter-spacing: -.07em;">T</tspan><tspan x="7.31" y="0">echnical Standard</tspan></text>
      </g>
      <g id="Key_Heading" data-name="Key Heading">
        <rect x="109.51" y="2" width="1237.69" height="27.84" style="fill: #fff; stroke: #000; stroke-miterlimit: 10; stroke-width: .75px;"/>
        <text id="Technical_Standard-2" data-name="Technical Standard" transform="translate(717.17 18.8) scale(.89 1)" style="font-family: Arial-BoldMT, Arial; font-size: 13.63px; font-weight: 700;"><tspan x="0" y="0">Key</tspan></text>
      </g>
    </g>
  </svg>
<!-- End of Policy Matrix (SVG) - CJB -->
  </div> <!-- grid-container -->
</div> <!-- usa-section --> 
