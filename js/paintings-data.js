var data = 
'{ "paintings" : [' +
'{ "title":"Dark Energy" , "year":"2018" , "size":"100x140cm", "medium":"acrylic on canvas" , "price":"1650\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48418359_2120883867967661_6878386289138204672_n.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=fc010d0d65c4bee6e5e9fac34acf5903&oe=5D0B5E2D"  },' +
'{ "title":"Daydreaming" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"1450\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48417846_2120884534634261_1117125426095849472_n.jpg?_nc_cat=102&_nc_ht=scontent.frkv3-1.fna&oh=02b8cca7182dfe0a930d2472ab181f65&oe=5D3BF3DE"  },' +
'{ "title":"Memories" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"1150\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48420368_2120883741301007_2615559977170894848_n.jpg?_nc_cat=106&_nc_ht=scontent.frkv3-1.fna&oh=17f917f3e7e2f9a7a95ac6caeda5c656&oe=5D06B3DC"  },' +
'{ "title":"Conciousness" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"1450\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49189196_2120884937967554_5135963699768459264_n.jpg?_nc_cat=101&_nc_ht=scontent.frkv3-1.fna&oh=af8a93f112c9e1bd5583c0bcc4d07c2c&oe=5D39767A"  },' +
'{ "title":"Lucid Dreaming" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"1450\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49126909_2120884124634302_7041380830597349376_n.jpg?_nc_cat=110&_nc_ht=scontent.frkv3-1.fna&oh=6bee3f3e8dbdeffa4d656da7ca3f8ab1&oe=5D4B8D96"  },' +
'{ "title":"Deep Meditation" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"1450\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48994285_2120747424647972_6720915393449295872_n.jpg?_nc_cat=111&_nc_ht=scontent.frkv3-1.fna&oh=8b86cc027d7b3d10d123987dc01c3776&oe=5D44DAB6"  },' +
'{ "title":"Meditation 2" , "year":"2018" , "size":"120x80cm", "medium":"acrylic on canvas" , "price":"-", "location":"Reykjavik, Iceland" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48944888_2120747337981314_1076427265186725888_o.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=a340044eed8c981cae723024c20f676e&oe=5D0914CF"  },' +
'{ "title":"Meditation 1" , "year":"2018" , "size":"120x80cm", "medium":"acrylic on canvas" , "price":"650\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49091435_2120747307981317_2227394456594677760_o.jpg?_nc_cat=100&_nc_ht=scontent.frkv3-1.fna&oh=d8b11789ccb07fe15e9473eae74be9ae&oe=5D387AE2"  },' +
'{ "title":"Titanium White" , "year":"2018" , "size":"120x80cm", "medium":"acrylic on canvas" , "price":"-", "location":"New York, New York, USA" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48430249_2120747781314603_8888741647240658944_o.jpg?_nc_cat=111&_nc_ht=scontent.frkv3-1.fna&oh=2e0ac406e9dc87cec23cb1c26aa91171&oe=5D087FDE"  },' +
'{ "title":"Introspection 1(tryptich)" , "year":"2017" , "size":"50x50cm", "medium":"acrylic on canvas" , "price":"-", "location":"Frankfurt am Main, Germany" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48982053_2120747724647942_8097495103792218112_n.jpg?_nc_cat=100&_nc_ht=scontent.frkv3-1.fna&oh=f576b321e4a0ea42d691ffc91ea9e17a&oe=5D3BFC13"  },' +
'{ "title":"Introspection 2(tryptich)" , "year":"2017" , "size":"50x50cm", "medium":"acrylic on canvas" , "price":"-", "location":"Frankfurt am Main, Germany" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48411495_2120747714647943_5787080956590424064_n.jpg?_nc_cat=105&_nc_ht=scontent.frkv3-1.fna&oh=777b291fa2c04d192363658631b72b4b&oe=5D4C7EA8"  },' +
'{ "title":"Introspection 3(tryptich)" , "year":"2017" , "size":"50x50cm", "medium":"acrylic on canvas" , "price":"-", "location":"Frankfurt am Main, Germany" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49144870_2120747657981282_1219955163729494016_n.jpg?_nc_cat=106&_nc_ht=scontent.frkv3-1.fna&oh=e7ef2bb902695d6be296dc8507318faa&oe=5D39CAF2"  },' +
'{ "title":"Mindfulness" , "year":"2018" , "size":"100x140cm", "medium":"acrylic on canvas" , "price":"1450\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48398051_2120883361301045_5616738786944745472_n.jpg?_nc_cat=107&_nc_ht=scontent.frkv3-1.fna&oh=b0d5f2bf7e7a9fa00ec5e188387e2972&oe=5D48548D"  },' +
'{ "title":"Lucid" , "year":"2018" , "size":"120x120cm", "medium":"acrylic on canvas" , "price":"2100\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48414994_2120883534634361_3066594485996617728_n.jpg?_nc_cat=106&_nc_ht=scontent.frkv3-1.fna&oh=ffec76c3f8fb95fcae8038eb25ff8d1a&oe=5D4EBCF6"  },' +
'{ "title":"Meditation 3" , "year":"2018" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"290\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49210956_2120747537981294_4231074026769874944_o.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=7d515f4400bd60f03980fc15ef4d904f&oe=5D442BAC"  },' +
'{ "title":"Blind Crossing (Night)" , "year":"2018" , "size":"80x100cm", "medium":"acrylic on canvas" , "price":"650\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48423117_2120762884646426_1147291330762768384_n.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=40e0f679395615c231453d52f6e178a7&oe=5D0F69D3"  },' +
'{ "title":"Blind Crossing (Day)" , "year":"2018" , "size":"100x100cm", "medium":"acrylic on canvas" , "price":"650\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49089492_2120762871313094_4470662339221258240_n.jpg?_nc_cat=103&_nc_ht=scontent.frkv3-1.fna&oh=958b7f5421561b62967b32c1ba2765ab&oe=5D439BA7"  },' +
'{ "title":"Absolute Space" , "year":"2018" , "size":"80x80cm", "medium":"acrylic on canvas" , "price":"290\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48417846_2120747257981322_8653311988413235200_n.jpg?_nc_cat=100&_nc_ht=scontent.frkv3-1.fna&oh=0ec8c5ccaa7d88f12b92a62ab9ed2463&oe=5D3DC28F"  },' +
'{ "title":"Interstellar" , "year":"2018" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"490\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49212735_2120884301300951_3726067696182231040_o.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=bd17800b29db895a7e322cd574f6cf07&oe=5D43CDC0"  },' +
'{ "title":"Explanation" , "year":"2018" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"290\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49035845_2120883681301013_4696883390597562368_o.jpg?_nc_cat=107&_nc_ht=scontent.frkv3-1.fna&oh=d54a42400a824f0dc3e0ba8fc4f99014&oe=5D0B4258"  },' +
'{ "title":"Burgundy" , "year":"2018" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"490\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49385091_2120747581314623_25972431743090688_o.jpg?_nc_cat=103&_nc_ht=scontent.frkv3-1.fna&oh=8d1468d4688e93708654b2b0ab41f93e&oe=5D47C650"  },' +
'{ "title":"Abstract Blue Sea and the Sky" , "year":"2016" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"550\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49343532_2120747217981326_5217228286349803520_o.jpg?_nc_cat=103&_nc_ht=scontent.frkv3-1.fna&oh=529ebd729780d305ea143025beb0d66b&oe=5D0AA8BB"  },' +
'{ "title":"Passion And Joy" , "year":"2016" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"550e + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49106260_2120747631314618_7822713206547152896_o.jpg?_nc_cat=109&_nc_ht=scontent.frkv3-1.fna&oh=c9751e04841d5f5abb5fde9525787be7&oe=5D4A714C"  },' +
'{ "title":"In Yellow" , "year":"2018" , "size":"80x60cm", "medium":"acrylic on canvas" , "price":"290\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49069790_2120884737967574_6217972880546725888_o.jpg?_nc_cat=103&_nc_ht=scontent.frkv3-1.fna&oh=554ef302949fae62ffe5331735bd99d9&oe=5D39442A"  },' +
'{ "title":"Blue Lagoon" , "year":"2018" , "size":"60x80cm", "medium":"acrylic on canvas" , "price":"350\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48991595_2120747474647967_2832536291831185408_n.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=d1def78340eb1e3cbb24f5a59a93a00e&oe=5D4FB633"  },' +
'{ "title":"Will You Follow? IV" , "year":"2018" , "size":"80x80cm", "medium":"acrylic on canvas" , "price":"1650\u20ac + shipping", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48963678_2120747211314660_3602713525316747264_o.jpg?_nc_cat=103&_nc_ht=scontent.frkv3-1.fna&oh=e665dd0cfad0e61a9b784bde4ae80d4a&oe=5D0F5514"  },' +
'{ "title":"Not a Waterfall" , "year":"2016" , "size":"50x100cm", "medium":"acrylic on canvas" , "price":"-", "location":"Reykjavik, Iceland" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49118498_2120747571314624_8955102289282990080_n.jpg?_nc_cat=107&_nc_ht=scontent.frkv3-1.fna&oh=cdaea62a4d3018ffa451fb8201c7fdc5&oe=5D4D3231"  },' +
'{ "title":"We Live in a Rainbow of Chaos" , "year":"2016" , "size":"100x50cm", "medium":"acrylic on canvas" , "price":"190\u20ac", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48939849_2120747431314638_2684161703083507712_o.jpg?_nc_cat=109&_nc_ht=scontent.frkv3-1.fna&oh=50fd66bdba1eef463c6640188996249b&oe=5D501E15"  },' +
'{ "title":"Directions, Unknown Directions" , "year":"2016" , "size":"100x50cm", "medium":"acrylic on canvas" , "price":"-", "location":"San Francisco, California, USA" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48935234_2120747371314644_1955209034583769088_o.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=c4b2de74d7661c71fc3e3445d0728005&oe=5D37A021"  },' +
'{ "title":"Sunset Sky" , "year":"2016" , "size":"70x70cm", "medium":"acrylic on canvas" , "price":"-", "location":"Reykjavik, Iceland" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49114140_2120747394647975_5784588780342083584_n.jpg?_nc_cat=109&_nc_ht=scontent.frkv3-1.fna&oh=38594934ace134ea5084c7a0d834ccaf&oe=5D3A5F28"  },' +
'{ "title":"Black Rainbow" , "year":"2016" , "size":"70x70cm", "medium":"acrylic on canvas" , "price":"-", "location":"Reykjavik, Iceland" , "availability" : "sold" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48429665_2120747347981313_8948559701176483840_n.jpg?_nc_cat=107&_nc_ht=scontent.frkv3-1.fna&oh=d0a04b46e3516969c5a105112f4e67df&oe=5D4C2BAF"  },' +
'{ "title":"Flamingo" , "year":"2016" , "size":"80x80cm", "medium":"acrylic on canvas" , "price":"350\u20ac", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/49161897_2120747254647989_5134216597266759680_n.jpg?_nc_cat=108&_nc_ht=scontent.frkv3-1.fna&oh=dac2a765f69c4333630abea95d21fdf0&oe=5D4D6A26"   },' + 
'{ "title":"Lime (Traces)" , "year":"2016" , "size":"40x50cm", "medium":"acrylic on canvas" , "price":"150\u20ac", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48417265_2120883204634394_2096113756080701440_n.jpg?_nc_cat=109&_nc_ht=scontent.frkv3-1.fna&oh=a66f1fcdaa7a04b5c4fd85e0d9f0a168&oe=5D4FDC44"   },' +
'{ "title":"Purple (Traces)" , "year":"2016" , "size":"40x50cm", "medium":"acrylic on canvas" , "price":"150\u20ac", "location":"Reykjavik, Iceland" , "availability" : "available" , "src":"https://scontent.frkv3-1.fna.fbcdn.net/v/t1.0-9/48414164_2120883201301061_1731584424081883136_n.jpg?_nc_cat=100&_nc_ht=scontent.frkv3-1.fna&oh=e8512707f797b90e5beb2bc88daeefc7&oe=5D35FA0E"  }]}'

