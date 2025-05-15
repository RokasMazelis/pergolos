import { Config } from "./components/App/App";
import {
  ColorOption,
  EnabledOption,
  Models,
  ModelsStore,
  PickItem,
} from "./types";

export const constructionColors: ColorOption[] = [
  { label: "Cream White", value: "#F1F0EA", price: 0 },
  { label: "Grey Aluminium", value: "#999999", price: 0 },
  { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
  { label: "Structural Black", value: "#0E0E10", price: 0 },
  { label: "Wood effect varnish", value: "#9B7C66", price: 0 },
];
// export const zipConstructionColors: ColorOption[] = [   //Nelabai suprantu, kas 2ia per dalis, tipo stogo rėmas?
//   { label: "Cream White", value: "#F1F0EA", price: 0 },
//   { label: "Grey Aluminium", value: "#999999", price: 0 },
//   { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
//   { label: "Wood effect varnish", value: "#9B7C66", price: 0 },
// ];
export const louvreRoofColors: ColorOption[] = [
  { label: "Cream White", value: "#F1F0EA", price: 0 },
  { label: "Grey Aluminium", value: "#999999", price: 0 },
  { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
  { label: "Structural Black", value: "#0E0E10", price: 0 },
  { label: "Wood effect varnish", value: "#9B7C66", price: 0 },
];
export const shuttersConstructionColors: ColorOption[] = [
  { label: "Cream White", value: "#F1F0EA", price: 0 },
  { label: "Grey Aluminium", value: "#999999", price: 0 },
  { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
  { label: "Structural Black", value: "#0E0E10", price: 1500 },
  { label: "Wood effect varnish", value: "#9B7C66", price: 0 },
];
export const shuttersColors: ColorOption[] = [
  { label: "Cream White", value: "#F1F0EA", price: 1500 },
  { label: "Grey Aluminium", value: "#999999", price: 0 },
  { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
  { label: "Structural Black", value: "#0E0E10", price: 1500 },
  { label: "Wood effect varnish", value: "#9B7C66", price: 0 },
];

// export const zipFabricColors: ColorOption[] = [
//   { label: "Serge 600 1% - 001001", value: "#515254", price: 0 },
//   { label: "Serge 600 5% - 001001", value: "#444846", price: 0 },
//   { label: "Serge 600 1% - 001010", value: "#302f34", price: 0 },
//   { label: "Serge 600 5% - 001010", value: "#353532", price: 0 },
//   { label: "Serge 600 1% - 002002", value: "#e2e3d9", price: 0 },
//   { label: "Serge 600 5% - 002002", value: "#dedfd5", price: 0 },
//   { label: "Serge 600 5% - 003003", value: "#a89675", price: 0 },
//   { label: "Serge 600 1% - 007007", value: "#aca89d", price: 0 },
//   { label: "Serge 600 5% - 007007", value: "#99978b", price: 0 },
//   { label: "Serge 600 5% - 008007", value: "#bcbaa9", price: 0 },
//   { label: "Serge 600 1% - 008008", value: "#dac9ab", price: 0 },
//   { label: "Serge 600 5% - 008008", value: "#c8b697", price: 0 },
//   { label: "Serge 600 1% - 010010", value: "#221d1e", price: 0 },
//   { label: "Serge 600 5% - 010010", value: "#08030c", price: 0 },
//   { label: "Serge 600 5% - 010011", value: "#dbddcd", price: 0 },
//   { label: "Serge 600 5% - 011011", value: "#201810", price: 0 },
//   { label: "Serge 600 5% - 033033", value: "#726d62", price: 0 },
// ];
// export const roofColors: ColorOption[] = [
//   { label: "Cream White", value: "#F1F0EA", price: 0 },
//   { label: "Grey Aluminium", value: "#999999", price: 0 },
//   { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
//   { label: "Colour Brown", value: "#924522", price: 1500 },
// ];
export const allColours: ColorOption[] = Array.from(
  new Set(
    roofColors
      .concat(constructionColors)
      .concat(zipConstructionColors)
      .concat(zipFabricColors)
  )
);
export const louvresColors: ColorOption[] = [
  { label: "Cream White", value: "#F1F0EA", price: 1500 },
  { label: "Grey Aluminium", value: "#999999", price: 0 },
  { label: "Anthracite Mettalic", value: "#383E42", price: 0 },
  { label: "Structural Black", value: "#0E0E10", price: 1500 },
];

export const lighting: PickItem[] = [
  {
    src: `${process.env.PUBLIC_URL}/lighting/box.png`,
    label: "Box",
    value: "lighting:box",
    price: 0,
  },
  {
    src: `${process.env.PUBLIC_URL}/lighting/line.png`,
    label: "Line",
    value: "lighting:line",
    price: 0,
  },
  {
    src: `${process.env.PUBLIC_URL}/lighting/spot.png`,
    label: "Spot",
    value: "lighting:spot",
    price: 0,
  },
  {
    src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
    label: "Strip",
    value: "lighting:strip",
    price: 0,
  },
];
export const irSildytuvai: EnabledOption[] = [
  {
    label: "IR šildytuvas 1.5 kW",
    disclaimer: "Papildomas tekstas Carport #1",
    cost: 0,
    type: "numeric",
    min: 1,
    max: 4,
  },
  {
    label: "IR šildytuvas 1.5 kW",
    disclaimer: "Papildomas tekstas Carport #1",
    cost: 0,
    type: "numeric",
    min: 0,
    max: 4,
  },
  {
    label: "IR šildytuvas 2 kW",
    disclaimer: "Papildomas tekstas Carport #1",
    cost: 0,
    type: "numeric",
    min: 0,
    max: 4,
  },
];

export const models: ModelsStore = {
  carport: {
    pavilon: {
      label: "Pavilon",
      value: "pavilon",
      price: 7200,
      modelUrl: `${process.env.PUBLIC_URL}/pergola/carport/3d/Carport3.glb`,
      benefits: [
        "Privalumas #1",
        "Privalumas #2",
        "Privalumas #3",
        "Privalumas #4",
        "Privalumas #5",
      ],
      settings: {
        key: "technic_pro",
        name: "Technic PRO",
        length: {
          // min: 216,
          // max: 696,
          allowedValues: [
            216, 236, 256, 276, 296, 316, 336, 356, 376, 396, 416, 436, 456,
            476, 496, 516, 536, 556, 576, 596, 616, 636, 656, 676, 696,
          ],
          individualRequestRanges: {
            min: 216,
            max: 696,
          },
          // interval: 25,
          upperText: "Ilgis",
        },
        height: {
          min: 275,
          max: 300,
          individualRequestRanges: {
            min: 270,
            max: 320,
          },
          interval: 50,
          upperText: "Aukštis",
        },
        width: {
          // min: 220,
          // max: 450,
          allowedValues: [220, 270, 300, 330, 365, 400, 420, 450],
          individualRequestRanges: {
            min: 220,
            max: 450,
          },
          // interval: 50,
          upperText: "Plotis",
        },
        defaultColorOptions: [
          {
            label: "konstrukcijos",
            groupNames: [],
            meshNames: [
              // "Komponen10",
              // "Komponen05",
              // "Komponen17",
              // "Komponen27",
              // "Komponen20",
              // "Komponen25",
              // "Komponen03",
              "ifcbuild78",
            ],
            availableColors: constructionColors,
          },
          {
            label: "stogo",
            groupNames: [],
            meshNames: [
              // "IfcBuildin",
              // "IfcBuild02",
              // "IfcBuild05",
              // "IfcBuild06",
              // "IfcBuild04",
              // "IfcBuild01",
              "ifcbuil224",
            ],
            availableColors: louvreRoofColors,
          },
        ],
        wallOptions: [
          {
            itemName: "Roletai",
            label: "roletų",
            value: "zip_screener",
            individualRequestRanges: {
              min: 150,
              max: 450,
            },
            groupNames: ["roletai_3", "roletai_2", "roletai_1", "roletai_4"],
            meshNames: [],
            src: `${process.env.PUBLIC_URL}/walls/zip_screener.png`,
            defaultColorOptions: [
              {
                label: "konstrukcijos",
                groupNames: [],
                meshNames: [
                  "Komponen10",
                  "Komponen05",
                  "Komponen17",
                  "Komponen27",
                  "Komponen20",
                  "Komponen25",
                  "Komponen03",
                ],
                availableColors: zipConstructionColors,
              },
              {
                label: "panelės",
                groupNames: [],
                meshNames: [
                  "IfcBuildin",
                  "IfcBuild02",
                  "IfcBuild05",
                  "IfcBuild06",
                  "IfcBuild04",
                  "IfcBuild01",
                ],
                availableColors: zipFabricColors,
              },
            // ],
            // availableTypes: [
              // {
              //   label: "Stiklo storis",
              //   value: "8mm",
              //   type:"text",
              //   group: "glass_width",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
              // {
              //   label: "Stiklo storis",
              //   value: "10mm",
              //   type:"text",
              //   group: "glass_width",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
              // {
              //   label: "Stiklų kiekis",
              //   value: "5 stiklų",
              //   type:"image",
              //   src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
              //   group: "glass_amount",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },{
              //   label: "Stiklų kiekis",
              //   value: "6 stiklų",
              //   group: "glass_amount",
              //   price: 10,
              //   type:"image",
              //   src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
            // ],
            // price: 10,
          // },
          {
            itemName: "Langinės",
            label: "langinių",
            value: "shutters",
            src: `${process.env.PUBLIC_URL}/walls/shutters.png`,
            groupNames: [
              // "langines4cvr_1",
              // "Langinesdvigubos_4",
              // "disabled",
              // "Langinesdvigubos_2",
              groupNames: [
                "langines4cvr_1",
                "langines4cvr_3",
                "langinescvr_2",
                "langinescvr_4",
                "langineviena_1",
                "langineviena_3"
              ],
            ],
            meshNames: [],
            defaultColorOptions: [
              {
                label: "konstrukcijos",
                groupNames: [],
                meshNames: [
                  // "Komponen10",
                  // "Komponen05",
                  // "Komponen17",
                  // "Komponen27",
                  // "Komponen20",
                  // "Komponen25",
                  // "Komponen03",
                  "_0130_Ga" // Cia yra mesh, kurio spalva pakeitus pasikeicia konstrukcijos spalva, ir dar roletu korpuso spalva
                ],
                availableColors: constructionColors,
              },
              RAL7016.001 ("langai keturiu stiklu")
              RAL7016.002 ("langu remai sesiu stiklu")



              {
                label: "panelės",
                groupNames: [],
                meshNames: [
                  "IfcBuildin",
                  "IfcBuild02",
                  "IfcBuild05",
                  "IfcBuild06",
                  "IfcBuild04",
                  "IfcBuild01",
                ],
                availableColors: constructionColors,
              },
            ],
            availableTypes: [
              // {
              //   label: "Stiklo storis",
              //   value: "8mm",
              //   type:"text",
              //   group: "glass_width",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
              // {
              //   label: "Stiklo storis",
              //   value: "10mm",
              //   type:"text",
              //   group: "glass_width",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
              // {
              //   label: "Stiklų kiekis",
              //   value: "5 stiklų",
              //   type:"image",
              //   src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
              //   group: "glass_amount",
              //   price: 10,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },{
              //   label: "Stiklų kiekis",
              //   value: "6 stiklų",
              //   group: "glass_amount",
              //   price: 10,
              //   type:"image",
              //   src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
              //   benefits: [
              //     "Privalumas #1",
              //     "Privalumas #2",
              //     "Privalumas #3",
              //     "Privalumas #4",
              //     "Privalumas #5"
              //   ]
              // },
            ],
            price: 10,
          },
          // {itemName:"Roletai", label: "roletų", groupNames: [], meshNames: [], availableColors: constructionColors, availableTypes: [{itemName: "8mm", price: 10}] , price: 10},
          // {label: "žaliuzių", groupNames: [], meshNames: [], availableColors: constructionColors},
        ],
        // roofOptions: [
        //   {
        //     itemName: "Lubų plokštė",
        //     src: `${process.env.PUBLIC_URL}/walls/roof_panel_carport.png`,
        //     label: "lubų",
        //     value: "roof_panel",
        //     groupNames: [],
        //     meshNames: [],
        //     defaultColorOptions: [],
        //     availableTypes: [],
        //     availableColors: constructionColors,
        //   },
        ],
        lighting: [
          // {
          //   src: `${process.env.PUBLIC_URL}/lighting/strip_carport.png`,
          //   label: "Strip #1",
          //   value: "lighting:strip_carport",
          //   price: 0,
          //   type: "numeric",
          //   min: 1,
          //   max: 4,
          //   benefits: ["Privalumas #1", "Kartu įskaičiuota ...", "ir t.t."],
          // },
          {
            src: `${process.env.PUBLIC_URL}/lighting/spot.png`,
            label: "Spot",
            value: "lighting:spot",
            price: 50,
            type: "numeric",
            min: 8,
            max: 25,
            benefits: ["LED Spot apšvietimas montuojamas ant sijų ir sukuria jaukią atmosferą. Rekomenduojama sumontuoti minimum 8  lemputes, kad apšvietimas būtų optimalus. (Šiltai balta)"],
          },
          {
            src: `${process.env.PUBLIC_URL}/lighting/strip.png`,
            label: "Strip #2",
            value: "lighting:strip",
            price: 0,
            type: "numeric",
            min: 1,
            max: 4,
            benefits: ["LED strip montuojama prie gegnių 90° kampų, tad kartu apšviečia ir konstrukcią ir stoginės vidų (Šiltai balta)"],
          },
          {
            src: `${process.env.PUBLIC_URL}/lighting/box.png`,
            label: "Box",
            value: "lighting:box",
            price: 120,
            type: "numeric",
            min: 4,
            max: 25,
            benefits: ["LED box - sukuria nuostabiai jaukią natūralios spalvos atmosferą. Vienas elementas sudarytas iš kelių šiltos šviesos diodų (125mm x 35mm), montuojamas prie stygų, (rekomenduojame pasirinkti minimum 4 tokio tipo šviesas)"],
          },
        ],
        // car_charging: [
        //   {
        //     src: `${process.env.PUBLIC_URL}/pergola/carport/options/28.png`,
        //     label: "Mašininė krovimo stotelė JUICEBOX PRO",
        //     value: "car_charger",
        //     price: 1670,
        //     type: "numeric",
        //     min: 1,
        //     max: 2,
        //     benefits: [
        //       "JuiceBox Pro užtikrina išmanų ir pilnavertį įkrovimą tiek privačioje, tiek gyvenamojoje aplinkoje.",
        //       "Pasiekiamas 22 kW, 32 A ir 3 fazių galios lygis, o JuiceBox Pro yra aprūpintas visomis saugumo ir ryšio funkcijomis, kurios užtikrina, kad įkrovimas namuose ar biure būtų pilnas, paprastas ir be rūpesčių.",
        //       "Jis turi Demand Limitation Pro funkciją, leidžiančią įkrauti didžiausia prieinama galia, jos neviršijant.",
        //     ],
        //   },
        // ],
        ir_lighting: [
          {
            label: "IR šildytuvas GR1 1,5 kW",
            value: "ir_lighting:gr1",
            price: 0,
            type: "text",
            benefits: ["Privalumas #1", "Kartu įskaičiuota ...", "ir t.t."],
          },
          {
            label: "IR šildytuvas GR2 1,5 kW",
            value: "ir_lighting:gr2",
            price: 0,
            type: "text",
            benefits: ["Privalumas #1", "Kartu įskaičiuota ...", "ir t.t."],
          },
          {
            label: "IR šildytuvas GR3 2 kW",
            value: "ir_lighting:gr3",
            price: 0,
            type: "text",
            benefits: ["Privalumas #1", "Kartu įskaičiuota ...", "ir t.t."],
          },
        // ],
        // solar_panel: [
        //   {
        //     label: "10x Saulės kolektorių paketas, 4.2 kW",
        //     value: "solar_panel:1",
        //     price: 5350,
        //     type: "text",
        //     benefits: [
        //       "10 TIGER NEO N 54HL4-B fotovoltinių modulių (400-420 W) užtikrina stabilų elektros gamybą.",
        //       "Huawei 5 kW inverteris optimizuoja energijos konversiją.",
        //       "Puikus pasirinkimas vidutinio dydžio namams.",
        //     ],
        //   },
        //   {
        //     label: "12x Saulės kolektorių paketas, 5.04 kW",
        //     value: "solar_panel:2",
        //     price: 5850,
        //     type: "text",
        //     benefits: [
        //       "12 TIGER NEO N 54HL4-B fotovoltinių modulių (400-420 W) leidžia generuoti dar daugiau elektros.",
        //       "Huawei 5 kW inverteris užtikrina aukštą efektyvumą.",
        //       "Didesnė galia reiškia dar greitesnį investicijos atsipirkimą.",
        //     ],
        //   },
        //   {
        //     label: "5x Saulės kolektorių paketas, 2.85 kW",
        //     value: "solar_panel:3",
        //     price: 4350,
        //     type: "text",
        //     benefits: [
        //       "5 TIGER NEO N 72HL4-BDV fotovoltiniai moduliai (550-570 W) – kompaktiškas ir efektyvus sprendimas.",
        //       "Huawei 3 kW inverteris užtikrina optimalų veikimą mažesniems poreikiams.",
        //       "Puikus variantas mažesniems namams ar papildomai saulės energijos gamybai.",
        //     ],
        //   },
        //   {
        //     label: "10x Saulės kolektorių paketas, 5.7 kW",
        //     value: "solar_panel:4",
        //     price: 6100,
        //     type: "text",
        //     benefits: [
        //       "10 TIGER NEO N 72HL4-BDV fotovoltinių modulių (550-570 W) didesnei energijos gamybai.",
        //       "Huawei 5 kW inverteris užtikrina stabilų ir efektyvų veikimą.",
        //       "Puikus pasirinkimas didesniems namams ar verslo objektams.",
        //     ],
        //   },
        // ],
        // amountOfGenericPhotos: 4,
        // enabledOptions: [
        //   {
        //     label: "Mašinų krovimo stotelė",
        //     type: "numeric",
        //     min: 1,
        //     max: 2,
        //     disclaimer: "Papildomas tekstas Carport #1",
        //     cost: 10,
        //   },
        ],
      },
    },
  },
};

export const initialConfig: Record<string, Config> = {
  carport: {
    model_type: "pavilon",
    model: "Technic RPO",
    stogo_color: "#924522",
    width: 300,
    length: 490,
    height: 270,
    konstrukcijos_color: "#9B7C66",
    walls: {
      north_wall: {
        value: "shutters",
        additionalOptions: [],
        colors: [
          { name: "konstrukcijos", value: "#9B7C66" },
          { name: "panelės", value: "#9B7C66" },
        ],
      },
      east_wall: {
        value: "shutters",
        additionalOptions: [],
        colors: [
          { name: "konstrukcijos", value: "#9B7C66" },
          { name: "panelės", value: "#9B7C66" },
        ],
      },
      south_wall: {
        value: "zip_screener",
        additionalOptions: [],
        colors: [
          { name: "konstrukcijos", value: "#9B7C66" },
          { name: "panelės", value: "#9B7C66" },
        ],
      },
      west_wall: {
        value: "shutters",
        additionalOptions: [],
        colors: [
          { name: "konstrukcijos", value: "#9B7C66" },
          { name: "panelės", value: "#9B7C66" },
        ],
      },
      roof: {
        value: "roof_panel",
        additionalOptions: [],
        colors: [],
      },
    },
    lighting: {
      value: "lighting:strip_carport",
      count: 3,
    },
    ir_heaters: "ir_lighting:gr1",
    car_charging: {
      value: "car_charger",
      count: 2,
    },
    solar_panel: "solar_panel:2",
  },

  technic_pro: {
    model_type: "tende",
    model: Models.TECHNIC_PRO,
  },
};
