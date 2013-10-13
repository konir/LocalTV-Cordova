// LocalTVApp besteht aus:
// Stations (Modell)
// Controller

// Applikation erzeugen
var LocalTVApp = {
	stations : new Stations(),
	controller : new LocalTVAppController()
};

// Station erzeugen
// ----------------------------------------------------------------------
// Schweiz
// ----------------------------------------------------------------------
LocalTVApp.stations.createStation("./img/tele_baern.png", "Tele Bärn", "http://rtmp.infomaniak.ch/livecast/barntele/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tele_basel.png", "Tele Basel", "http://xapp510394368c1000199.f.l.z.lb.core-cdn.net/10096xtelebase/ios_500/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tele_zueri.png", "Tele Züri", "http://rtmp.infomaniak.ch/livecast/telezuri/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tele1.png", "Tele 1",
		"http://rrr.sz.xlcdn.com/?account=ZentralschweizerFernsehenTele1AG&file=live-mbr-2500&type=live&service=wowza&protocol=http&output=playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tele_ostschweiz.png", "Tele Ostschweiz", "http://rtmp.infomaniak.ch/livecast/tvo/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/srf_1.png", "SRF 1", "http://www.srf.ch/player/tv/videoembed?id=c4927fcf-e1a0-0001-7edd-1ef01d441651&autoplay=true", "CH");
// LocalTVApp.stations.createStation("./img/srf_2.png", "SRF 2", "http://www.srf.ch/player/tv/videoembed?id=c49c1d64-9f60-0001-1c36-43c288c01a10&autoplay=true", "CH");
// LocalTVApp.stations.createStation("./img/srf_info.png", "SRF Info", "http://www.srf.ch/player/tv/videoembed?id=c49c1d73-2f70-0001-138a-15e0c4ccd3d0&autoplay=true", "CH");
LocalTVApp.stations.createStation("./img/telebielingue.png", "Tele Bielingue", "http://rtmp.infomaniak.ch/livecast/telebielinguech/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/kanal9.png", "Canal 9", "http://httpstream.canal9.ch/canal9live.m3u8", "CH");
LocalTVApp.stations.createStation("./img/canal_alpha.png", "Canal Alpha NE", "http://rtmp.infomaniak.ch/livecast/canalalpha/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/canal_alpha.png", "Canal Alpha JU", "http://rtmp.infomaniak.ch/livecast/canalalphaju/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/la_tele.png", "La Tele", "http://rtmp.infomaniak.ch/livecast/latele/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/rts_un.png", "RTS un", "https://srgssr_uni_9_ch-lh.akamaihd.net/i/enc9uni_ch@112904/master.m3u8", "CH");
LocalTVApp.stations.createStation("./img/rts_deux.png", "RTS deux", "https://srgssr_uni_10_ch-lh.akamaihd.net/i/enc10uni_ch@112993/master.m3u8", "CH");
LocalTVApp.stations.createStation("./img/rts_info.png", "RTS Info", "http://srgssr_uni_11_ww-lh.akamaihd.net/i/enc11uni_ww@112996/master.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tvm3.png", "TVM3", "http://rtmp.infomaniak.ch/livecast/tvm3/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/rouge_tv.png", "Rouge TV", "http://rtmp.infomaniak.ch/livecast/rougetv/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/radio_pilatus.png", "Radio Pilatus", "http://video.radiopilatus.ch:443/rtplive/cam1.stream/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/radio_pilatus.png", "Pilatus Beatz", "http://rtmp.infomaniak.ch/livecast/beatz_3/playlist.m3u8", "CH");
LocalTVApp.stations.createStation("./img/tele_ticino.png", "Tele Ticino", "http://rtmp.infomaniak.ch/livecast/teleticinolive/playlist.m3u8", "CH");

// ----------------------------------------------------------------------
// Deutschland
// ----------------------------------------------------------------------
LocalTVApp.stations.createStation("./img/alex_berlin.png", "Alex Berlin", "http://alex-stream.rosebud-media.de:1935/live/alexlivetv.smil/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ard_das_erste.png", "ARD Das Erste", "http://metafiles.gl-systemhaus.de/daserste/hls/int.m3u8", "DE");
LocalTVApp.stations.createStation("./img/baden_tv.png", "Baden TV", "http://cdn2.siebnich.info/rtplive/btv.stream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/hamburg1.png", "Hamburg 1", "http://stream2.telvi.de/hamburg1live/live/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_dessau.png", "OK Dessau", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-dessau_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_magdeburg.png", "OK Magdeburg", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-magdeburg_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_merseburg.png", "OK Merseburg", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-merseburg_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_salzwedel.png", "OK Salzwedel", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-salzwedel_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_stendal.png", "OK Stendal", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-stendal_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_wernigerode.png", "OK Werningerode", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-wernigerode_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ok_wettin.png", "OK Wettin", "http://62.113.210.250/medienasa-live/_definst_/mp4:ok-wettin_high/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/nrw_tv.png", "NRW TV", "http://streaming001.broadcast.tneg.de/nrwtv/nrwtv/nrwlive.stream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/rbb_tv.png", "RBB Brandenburg", "http://rbb_live-lh.akamaihd.net/i/rbb_brandenburg@107638/master.m3u8", "DE");
LocalTVApp.stations.createStation("./img/rbb_tv.png", "RBB Berlin", "http://rbb_live-lh.akamaihd.net/i/rbb_berlin@108248/master.m3u8", "DE");
LocalTVApp.stations.createStation("./img/tv_suedbaden.png", "TV Südbaden", "http://tvsuedbaden.iptv-playoutcenter.de:1935/tvsuedbaden/tvsuedbaden.stream_2/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/trp1_fernsehen.png", "TRP1", "http://stream2.telvi.de/trp1live/livestream1/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/dw_tv.png", "DW Europa", "http://dwtvios_europa-i.akamaihd.net/hls/live/200515/dwtveuropa/1/playlist1x.m3u8", "DE");
LocalTVApp.stations.createStation("./img/pearl_tv.png", "Pearl TV", "http://enstyle-i.akamaihd.net/hls/live/203253/live/index.m3u8", "DE");
LocalTVApp.stations.createStation("./img/astro_tv.png", "Astro TV", "http://178.63.71.23/astrotv/astrotv1/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/qvc.png", "QVC", "http://ios-stream.qvc.de/qvc.m3u8", "DE");
LocalTVApp.stations.createStation("./img/wdr_fernsehen.png", "WDR", "http://wdr_ios_fs-i.akamaihd.net/hls/live/200964/1/playlist1x.m3u8", "DE");
LocalTVApp.stations.createStation("./img/mdr.png", "MDR Sachsen", "http://mdr_sachsen_hls-lh.akamaihd.net/i/livetvmdrsachsen_de@106902/master.m3u8?bkup=off", "DE");
LocalTVApp.stations.createStation("./img/mdr.png", "MDR Sachsen-Anhalt", "http://mdr_sa_hls-lh.akamaihd.net/i/livetvmdrsachsenanhalt_de@106901/master.m3u8?bkup=off", "DE");
LocalTVApp.stations.createStation("./img/mdr.png", "MDR Thüringen", "http://mdr_th_hls-lh.akamaihd.net/i/livetvmdrthueringen_de@106903/master.m3u8?bkup=off", "DE");
LocalTVApp.stations.createStation("./img/mdr.png", "MDR Plus", "http://mdr_event1_hls-lh.akamaihd.net/i/livetvmdrevent1_de@106904/master.m3u8?bkup=off", "DE");
LocalTVApp.stations.createStation("./img/tvaktuell.png", "TV Aktuell", "http://tvaktuellr.iptv-playoutcenter.de:1935/tvaktuellr/tvaktuellr.stream_3/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/dresden_tv.png", "Dresden Fernsehen", "http://video07.kanal8.de:1935/dresdenfernsehenlive/livestream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/sachsen_fernsehen.png", "Sachsen Fernsehen", "http://video01.kanal8.de:1935/sachsenfernsehenlive/mobile/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/leipzig_tv.png", "Leipzig Fernsehen", "http://video61.kanal8.de:1935/leipzigfernsehenlive/livestream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/oberfranken_tv.png", "TV Oberfranken", "http://tvoberfranken.iptv-playoutcenter.de:1935/tvoberfranken/tvoberfranken_1/playlist.m3u8", "DE");
// LocalTVApp.stations.createStation("./img/oberfranken_tv.png", "TV Oberfranken 2", "http://tvoberfranken.iptv-playoutcenter.de:1935/tvoberfranken/tvoberfranken_2/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/franken_fernsehen.png", "Franken TV", "http://frankentv.iptv-playoutcenter.de:1935/frankentv/frankentv.stream_1/playlist.m3u8", "DE");
// LocalTVApp.stations.createStation("./img/bw_family.png", "BW Family TV", "http://www.bwfamily.tv/iphone", "DE");
LocalTVApp.stations.createStation("./img/light_channel.png", "Light Channel TV", "http://streamer1.streamhost.org:1935/salive/lctvde/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/tv_touring.png", "TV Touring Würzburg", "http://tvtouringw.iptv-playoutcenter.de:1935/tvtouringw/tvtouringw.stream_2/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/tv_touring.png", "TV Touring Schweinfurt", "http://tvtourings.iptv-playoutcenter.de:1935/tvtourings/tvtourings.stream_2/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/fan_tv.png", "Fan TV", "http://fan.iptv-playoutcenter.de:1935/fan/fan.stream_1/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/filstalwelle.png", "Filstalwelle", "http://62.113.210.27/filstalwelle-live/_definst_/mp4:livestream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ndr.png", "NDR Hamburg", "http://ndr_fs-lh.akamaihd.net/i/ndrfs_hh@119223/master.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ndr.png", "NDR Meklenburg Vorpommern", "http://ndr_fs-lh.akamaihd.net/i/ndrfs_mv@119226/master.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ndr.png", "NDR Schleswig Holstein", "http://ndr_fs-lh.akamaihd.net/i/ndrfs_sh@119225/master.m3u8", "DE");
LocalTVApp.stations.createStation("./img/ndr.png", "NDR Niedersachsen", "http://ndr_fs-lh.akamaihd.net/i/ndrfs_nds@119224/master.m3u8", "DE");
LocalTVApp.stations
		.createStation("./img/br.png", "BR Rundschau News", "http://cdn-rsn-ios.br.de/i/br/bayerisches-fernsehen/rundschau/rsn100/rundschaunews_,0,A,.mp4.csmil/master.m3u8?__b__=200", "DE");
LocalTVApp.stations.createStation("./img/br.png", "BR Rundschau Kultur", "http://cdn-rsn-ios.br.de/i/br/bayerisches-fernsehen/rundschau/rsku/rundschaukultur_,0,A,.mp4.csmil/master.m3u8?__b__=200",
		"DE");
LocalTVApp.stations.createStation("./img/br.png", "BR Rundschau Wirtschaft",
		"http://cdn-rsn-ios.br.de/i/br/bayerisches-fernsehen/rundschau/rswi/rundschauwirtschaft_,0,A,.mp4.csmil/master.m3u8?__b__=200", "DE");
LocalTVApp.stations.createStation("./img/center.png", "Center TV Köln",
		"http://x3282azmediac12001.f.l.z.lb.core-cdn.net/10894xkoeln/_definst_/12001centertvkoeln/live/3282azmedia/live_de_300/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/center.png", "Center TV Münster", "http://mf.centertv.c.nmdn.net/centertv/centertv.stream/playlist.m3u8", "DE");
LocalTVApp.stations.createStation("./img/deluxe.png", "Deluxe Music", "http://flash.cdn.deluxemusic.tv/deluxemusic.tv-live/web_850.stream/playlist.m3u8", "DE");

// Wdr maus. http:// www.wdrmaus.de/aktuelle-sendung/
// Ard tagesschau live stream. http:// www.tagesschau.de/templates/pages/multimedia/livestream_player.jsp
// Kika plus net. http:// kikaplus.net/clients/kika/kikaplus/mobile/index.php

// ----------------------------------------------------------------------
// Österreich
// ----------------------------------------------------------------------
LocalTVApp.stations.createStation("./img/okto_tv.png", "OKTO TV", "http://atwse.lbs.atusmedia.cc:1935/oktolive/okto-low.stream/playlist.m3u8", "AT");
LocalTVApp.stations.createStation("./img/w24_wien.png", "W24", "http://212.186.194.254/hls-live/livepkgr/_definst_/liveevent.m3u8", "AT");
LocalTVApp.stations.createStation("./img/austria24tv.png", "Austria 24", "http://streaming.austria24.tv/live/stream_240p/playlist.m3u8", "AT");
LocalTVApp.stations.createStation("./img/red_bull_tv.png", "RedBull TV", "http://live.iphone.redbull.de.edgesuite.net/iphone.m3u8", "AT");
// LocalTVApp.stations.createStation("./img/muehlviertel_tv.png", "Mühlviertel TV", "http://muehlviertel.tv/live", "AT");

// ----------------------------------------------------------------------
// Other countrie
// ----------------------------------------------------------------------

LocalTVApp.stations.createStation("./img/suedtirol_tv.png", "Südtirol TV", "http://77.72.196.214:8554/live/SuedtirolTV/playlist.m3u8", "Div");
LocalTVApp.stations.createStation("./img/nasa_tv.png", "NASA TV", "http://www.nasa.gov/multimedia/nasatv/NTV-Public-IPS.m3u8", "Div");
LocalTVApp.stations.createStation("./img/bloomberg_tv.png", "Bloomberg USA", "http://live.bltvios.com.edgesuite.net/oza2w6q8gX9WSkRx13bskffWIuyf/BnazlkNDpCIcD-QkfyZCQKlRiiFnVa5I/master.m3u8", "Div");
LocalTVApp.stations.createStation("./img/bloomberg_tv.png", "Bloomberg ASIA", "http://live.bltvios.com.edgesuite.net/oza2w6q8gX9WSkRx13bskffWIuyf/w4dTdlNToKUvtqJ1WMDu5IuNP9as1iF0/master.m3u8", "Div");
LocalTVApp.stations.createStation("./img/bloomberg_tv.png", "Bloomberg EU", "http://live.bltvios.com.edgesuite.net/oza2w6q8gX9WSkRx13bskffWIuyf/x0dDdlNTrs64I5H-29bfEFu4qeIira5r/master.m3u8", "Div");
LocalTVApp.stations.createStation("./img/al_jazeera.png", "Al-Jazeera EN", "http://aljazeera-eng-apple-live.adaptive.level3.net/apple/aljazeera/english/appleman.m3u8?dev=website", "Div");
