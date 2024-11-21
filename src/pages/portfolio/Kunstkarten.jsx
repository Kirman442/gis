import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import 'prismjs/themes/prism-solarizedlight.css';
// import "prismjs/themes/prism.css";
import "prismjs/themes/prism-okaidia.css";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// import gallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import Code from "../../components/code";
import { py1, py2, py3, py4, py5 } from "./kartenCode";

import KunstkartenFoto from "/images/kunstkarten/kunstkarten_portfolio1.jpg"

const OldImages = [
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Dortmund_1.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Dortmund_1.jpg`,
        alt: 'Dortmund',
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Koln_1.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Koln_1.jpg`,
        alt: "Köln",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Paris_1.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/city-of-Paris_1.jpg`,
        alt: "Paris",
    }
];

const NewImages = [
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Dortmund_final_9500_211011.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Dortmund_final_9500_211011.jpg`,
        alt: 'Dortmund',
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Tripoly_final_12500_20052.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Tripoly_final_12500_20052.jpg`,
        alt: "Tripoli"
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Dubai_final_12500_211042.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Dubai_final_12500_211042.jpg`,
        alt: "Dubai",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Ho-Chi-Minh_final_7000_211042.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Ho-Chi-Minh_final_7000_211042.jpg`,
        alt: "Ho-Chi-Minh",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Istanbul_final_19500_211042.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Istanbul_final_19500_211042.jpg`,
        alt: "Istanbul",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Moscow_final_19000_211042.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Moscow_final_19000_211042.jpg`,
        alt: "Moscow",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Paris_final_19500_111052.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Paris_final_19500_111052.jpg`,
        alt: "Paris",
    },
    {
        src: `${import.meta.env.BASE_URL}images/kunstkarten/Stockholm_final_7500_20112.jpg`,
        thumb: `${import.meta.env.BASE_URL}images/kunstkarten/Stockholm_final_7500_20112.jpg`,
        alt: "Stockholm",
    }
];

const PortfolioKunstkarten = () => {
    const [thumbnails, setThumbnails] = useState([]);

    // On-the-fly preview generationу
    useEffect(() => {
        const generateThumbnails = async () => {
            const thumbPromises = NewImages.map((image) => createThumbnail(image.src));
            const thumbs = await Promise.all(thumbPromises);
            setThumbnails(thumbs);
        };

        generateThumbnails();
    }, []);

    // Preview function
    const createThumbnail = (src) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const scaleFactor = 0.17; // Compression up to 20% of original size
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL());
            };
        });
    };
    return (
        <div>
            {/* <!-- start page title section --> */}
            <section data-parallax-background-ratio="0.3"
                style={{
                    backgroundImage: `url(${KunstkartenFoto})`,
                    maxHeight: '650px'
                }}>
                <div className="opacity-light bg-extra-dark-gray"></div>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div
                            className="col-12 d-flex flex-column justify-content-center text-center one-second-screen page-title-large">
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page title section --> */}
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center md-margin-10px-bottom sm-margin-30px-bottom">
                            <h4 className="font-weight-300 text-extra-dark-gray margin-15px-bottom">Kunstkarten
                                mit Python erstellen</h4>
                            <p className="text-medium line-height-28 sm-line-height-26">Sehen wir uns an, wie wir mit Python und
                                OpenStreetMap-Daten schöne Karten erstellen können.</p>
                            <span className="text-dark-gray opacity6 alt-font mb-0 text-uppercase text-small">18
                                April 2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                Programmierung,
                                Datenbearbeitung, Visualisierung</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h5 className="alt-font text-green">OSMnx installieren</h5>
                            <p className="text-medium line-height-28 sm-line-height-26">Als
                                erstes brauchen wir Python und einen Workflow. Ich
                                werde Conda verwenden, um den Workflow zu erstellen,
                                der Code-Editor ist Spyder oder VSCode. Wir werden
                                auch das Python-Paket OSMnx benutzen, mit dem wir
                                Geodaten von OpenStreetMap laden können.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Das <a href="https://osmnx.readthedocs.io/en/stable/index.html" target="_blank"><strong
                                    className="text-decoration-underline">OSMNX </strong></a>
                                Python-Paket wurde von Jeff Boeing
                                geschrieben und kann zum Abrufen, Modellieren,
                                Analysieren und Visualisieren von Straßennetzen und
                                anderen räumlichen Daten aus OpenStreetMap verwendet
                                werden. Die Benutzer können städtische Netze, die
                                für Fußgänger, Autos oder Radfahrer geeignet sind,
                                mit einer einzigen Zeile Python-Code herunterladen
                                und modellieren und sie dann leicht analysieren und
                                visualisieren. Genauso einfach können Sie mit
                                städtischen Einrichtungen/Punkten von Interesse,
                                Gebäudegrundrissen, Haltestellen, Höhendaten,
                                Straßenausrichtungen, Geschwindigkeit/Reisezeit und
                                Routenführung arbeiten.</p>
                            <h6 className="alt-font text-green">Straßen und
                                Straßennetzen herunterladen</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Nach
                                der erfolgreichen Installation von OSMnx können wir
                                mit der Programmierung beginnen. Für unsere Aufgabe
                                müssen wir noch 2 weitere Pakete importieren -
                                <a href="https://geopy.readthedocs.io/en/stable/" target="_blank"><strong
                                    className="text-decoration-underline">geopy.geocoders</strong></a>
                                und <a href="https://pillow.readthedocs.io/en/stable/index.html" target="_blank"><strong
                                    className="text-decoration-underline">PIL</strong></a>,
                                aber dazu komme ich
                                später. Als erstes müssen wir die Daten
                                herunterladen. Es gibt viele Möglichkeiten, dies zu
                                tun, eine der einfachsten ist die Verwendung der
                                graph_from_place() Methode.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                graph_from_place() benötigt ein paar Parameter.
                                place ist die Abfrage, die OpenStreetMaps verwendet,
                                um die Daten des angegebenen Ortes abzurufen,
                                retain_all gibt alle Straßen zurück, auch wenn sie
                                nicht mit anderen Elementen verbunden sind, simplify
                                bereinigt den bereitgestellten Graphen ein wenig,
                                und network_type gibt an, welche Art von Straßennetz
                                abgerufen werden soll.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich möchte alle möglichen Daten erhalten
                                (network_type='all'), aber man kann nur Fahrbahnen
                                mit 'drive' oder Fußwege mit 'walk' laden.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Eine andere Möglichkeit, die Daten zu laden, ist die
                                Verwendung von graph_from_point(), mit der wir
                                Koordinaten angeben können. In manchen Fällen ist
                                diese Option bequemer, z. B. bei Orten mit ähnlichen
                                Namen, und bietet eine höhere Genauigkeit. Mit
                                'dist' können wir nur die Knoten speichern, die sich
                                innerhalb der angegebenen Grenzen vom Zentrum des
                                Graphs befinden.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wir müssen bedenken, dass wir, wenn wir Daten aus
                                großen Städten wie Madrid oder Berlin herunterladen
                                wollen, ein wenig warten müssen, um alle
                                Informationen zu erhalten. Es hängt auch davon ab,
                                welche Entfernung für die Kartenausschnitte gewählt
                                wird.</p>
                            <Code code={py1} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Man kann auch einen benutzerdefinierten Filter
                                verwenden - einen Filter, der anstelle des
                                voreingestellten network_type verwendet wird und die
                                Art des gewünschten Stadtnetzes angibt, z. B.
                                Kanalnetz -
                                ["waterway"~"canal"]', Metronetz -
                                ["railway"~"subway"] oder
                                ["highway"~"motorway|motorway_link|trunk|trunk_link"]',
                                um Autobahnen, Schnellstraßen und ihre Verbindungen
                                zu erhalten.</p>

                            <h5 className="alt-font text-green">Datenverarbeitung</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Sowohl graph_from_place() als auch
                                graph_from_point() geben einen MultiDiGraph zurück,
                                den wir auspacken und in die Liste einfügen können.
                                Jetzt müssen wir sie nur noch anzeigen, einfärben
                                und die Breite der Linien an die Länge der
                                Verkehrsnetzabschnitte anpassen.
                            </p>
                            <Code code={py2} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Danach zeichnen wir die Karte mit dem Modul
                                ox.plot_graph. Wir fügen eine Hintergrundfarbe und
                                optional einen Kartenrand mit bbox border hinzu, der
                                standardmäßig undefiniert ist. Bounding Box oder Der
                                Rand hat die Weltseitenform (Norden, Süden, Osten,
                                Westen). Wenn keine, wird aus den räumlichen
                                Ausdehnungen der gezeichneten Geometrien berechnet.
                                Das heißt, in unserem Fall durch die Koordinaten
                                einer Adresse oder eines Ortes, und alles, was sich
                                auf die räumliche Geometrie dieses Ortes bezieht,
                                wird in die Karte aufgenommen.
                            </p>

                            <div className="row justify-content-center">
                                <div className="col-lg-7 margin-four-bottom">
                                    <p className="text-extra-large  text-dark-gray text-center line-height-28">Vollständige
                                        unbeschriftete Karte von Köln</p>
                                    <img src={`${import.meta.env.BASE_URL}images/kunstkarten/koeln1.jpg`} className="w-100" data-no-retina />
                                </div>
                            </div>

                            <h5 className="alt-font text-green">Beschriftung</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die Karte ist fertig, aber was ist eine Karte ohne
                                einen Namen? Wir könnten ihn in einem Grafikeditor
                                wie Photoshop, Raw Therapee oder Gimp schreiben,
                                aber wir suchen nicht nach einfachen Wegen und
                                werden alles direkt hier machen, denn es gibt viele
                                Bibliotheken für Python, die uns gerne helfen. Für
                                unsere Aufgabe benötigen wir 2 weitere Pakete -
                                geopy.geocoders und PIL , die ich schon am Anfang
                                erwähnt habe.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die erste ist für die Geo-Location eines Ortes oder
                                einer Adresse erforderlich, um den vollständigen
                                geografischen Namen (falls vorhanden) und seine
                                Koordinaten zu erhalten.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Namen des Ortes werden wir später abschneiden und
                                nur Paris Frankreich stehen lassen (obwohl wir
                                natürlich alles schreiben können), und die
                                Koordinaten in dieser Form werden für ihre weitere
                                Umwandlung in das DMS-Koordinatensystem
                                (Degrees/Minutes/Seconds) benötigt, das auf der
                                Karte gut aussieht. Latitude und Longitude
                                Koordinaten 48.8534951 2.3483915 wandeln sich zu
                                48°51′ N / 2°20′ E
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Dazu müssen wir eine Funktion schreiben, die Lon/Lat
                                in DMS umwandelt. Wir suchen nach einer
                                Umrechnungsformel, finden sie und finden parallel
                                dazu in dem Buch Learning Scientific Programming
                                with Python eine hervorragende Lösung für unser
                                Problem. Wir müssen sie für uns noch ein wenig
                                verfeinern und los geht's!
                            </p>
                            <Code code={py3} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die zweite Bibliothek zum Drucken von Text auf ein
                                Bild. Dafür brauchen wir ttf-Fonts, ich habe sie von
                                hier ( CaviarDreams , BerlinSmallCaps )
                                heruntergeladen, und dann mit ihnen und dem Bild
                                experimentieren, um alles schön zu machen, obwohl
                                der Begriff der Schönheit für jeden anders ist :)
                            </p>
                            <Code code={py4} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Überlagerung des Standortnames und der Koordinaten
                                auf der Karte
                            </p>
                            <Code code={py5} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Man wählt die Schriftarten aus, spielt mit ihrer
                                Größe, Farbe und Transparenz, richtet sie in der
                                Mitte oder am Rand des Bildes aus (in meinem Fall in
                                der Mitte) und voila, unsere Karte mit unserer
                                Beschriftung ist fertig. Wir können sie auf einem
                                Datenträger speichern, ausdrucken und in einem
                                Rahmen an die Wand hängen (dafür müssen wir ein
                                großes Format statt figsize=(8, 8) - figsize=(27,
                                40) für den Druck der Karte wählen, und da es sich
                                um ein Vektorbild handelt, können Sie es ohne
                                Qualitätsverlust einfach groß machen).
                            </p>
                            <h5 className="alt-font text-green">Erste Version</h5>
                            <section className="wow animate__fadeIn bg-light-gray"
                                style={{ visibility: "visible", animationName: "fadeIn" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 filter-content overflow-hidden">
                                            <ul className="hover-option2 portfolio-gallery portfolio-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-medium">
                                                <li className="grid-sizer"></li>
                                                <LightGallery
                                                    speed={500}
                                                    plugins={[lgThumbnail, lgZoom]}
                                                >
                                                    {OldImages.map((image, index) => (
                                                        <li
                                                            key={image.src}
                                                            data-src={image.src}
                                                            className="grid-item wow animate__fadeInUp"
                                                            style={{ visibility: "visible", animationName: "fadeInUp" }}
                                                        >
                                                            <figure>
                                                                <div className="portfolio-img bg-extra-dark-gray">
                                                                    <img
                                                                        src={image.thumb}
                                                                        alt={image.alt}
                                                                        className="project-img-gallery"
                                                                        data-no-retina
                                                                    />
                                                                </div>
                                                                <figcaption>
                                                                    <div className="portfolio-hover-main text-center">
                                                                        <div className="portfolio-hover-box align-middle">
                                                                            <div className="portfolio-hover-content position-relative">
                                                                                <i className="ti-zoom-in text-white-2 fa-2x"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </figcaption>
                                                            </figure>
                                                        </li>
                                                    ))}
                                                </LightGallery>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Früher hieß der letzte Menüpunkt - Viola!, aber
                                jetzt nur noch Erste Version, da beschlossen wurde,
                                alles neu zu machen, und ich werde Ihnen jetzt
                                sagen, warum.
                            </p>
                            <h5 className="alt-font text-green">Zweite Version</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich kam auf dieses Projekt zurück, weil ich dachte,
                                es wäre schön, auch Gewässer oder vielmehr
                                Wasserflächen zu visualisieren, da die Karte ohne
                                sie sehr seltsam aussieht, zumal die Daten dazu in
                                OSM verfügbar sind. Und als ich anfing, mich mit
                                diesem Thema zu befassen, beschloss ich, alles neu
                                zu machen, da die Visualisierung von Straßen rein
                                schematisch implementiert war, obwohl sie für die
                                erste Version im Allgemeinen nicht schlecht war. Ein
                                und dieselbe Straße konnte unterschiedliche
                                Linienstärken und farben haben, weil Länge und Farbe
                                auf der Grundlage der Länge der Koordinatensegmente
                                ein und derselben Straße berechnet wurden, nicht auf
                                ihrem Zweck oder gesamten Teil. Das heißt, wenn eine
                                Straße von A nach B als "Fußgängerzone" oder
                                "Autobahn" bezeichnet wird, sollte sie zur
                                Visualisierung die gleiche Linienstärke und Farbe
                                haben.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Bei der Arbeit mit Wasseroberflächen hat sich
                                herausgestellt, dass sie meist aus vielen Polygonen
                                und nicht aus einem einzigen Multipolygon bestehen.
                                Wenn man also eine Wasserfläche betrachtet, besteht
                                sie bei der Visualisierung aus Polygonen und man
                                kann die Grenzen jedes einzelnen Polygons sehen.
                                Meiner Meinung nach sieht das ästhetisch nicht sehr
                                ansprechend aus.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Es wurde beschlossen, alle Wasserflächen zu einem
                                Multipolygon zu verschmelzen, so dass diese Grenzen
                                nicht mehr sichtbar sind. Ich werde Ihnen nun ein
                                Beispiel zeigen.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="alignleft" src={`${import.meta.env.BASE_URL}images/kunstkarten/Berlin_water_grenze.png`} />
                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Teil
                                        der Spree in Berlin. Hier können Sie
                                        deutlich sehen, was ich meine.
                                        Hier wird der Flussabschnitt aus Polygonen
                                        gebildet.</p>
                                </div>
                                <div className="col-lg-6">
                                    <img className="alignleft" src={`${import.meta.env.BASE_URL}images/kunstkarten/Berlin_water_ohne_grenze.png`} />
                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Und
                                        hier ist ein Multipolygon</p>
                                    <p className="d-inline-block"></p>
                                </div>
                            </div>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich habe auch ein Textmenü implementiert, in dem man auswählen kann, was man auf der Karte
                                darstellen möchte - Gebäude, Straßen, Wasser, Eisenbahnverbindungen, d.h. wenn man möchte,
                                kann man
                                nur Straßen und Wasser oder nur Gebäude usw. darstellen, und man kann das Menü auch
                                verwenden, um
                                eine geeignete Farbpalette auszuwählen.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                So wurde fast der gesamte Code umgeschrieben, und jetzt ist es möglich, Wasserflächen,
                                Gebäude und
                                Eisenbahninfrastruktur in die Karte einzufügen, verschiedene Paletten für die Visualisierung
                                zu
                                verwenden, Namen neu anzuordnen und einen Farbverlauf anzuwenden. Außerdem wurde ein Rahmen
                                hinzugefügt, mit dem die Karte viel hübscher aussieht.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Sie können jetzt sehr gut sehen, wie sich die Karten gegenüber der ersten Version verändert
                                haben.
                            </p>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 filter-content overflow-hidden">
                                        <LightGallery
                                            plugins={[lgZoom, lgThumbnail]} mode="lg-fade">
                                            {NewImages.map((image, index) => (
                                                <a
                                                    key={image.src}
                                                    className="gallery-item grid-item "
                                                    data-src={image.thumb}
                                                    data-sub-html={image.alt}
                                                >
                                                    <img
                                                        className="img-responsive "
                                                        src={thumbnails[index] || image.src}
                                                        alt={image.alt}
                                                    />
                                                </a>
                                            ))}
                                        </LightGallery>
                                    </div>
                                </div>
                            </div>
                            <p className="text-medium padding-20px-top text-dark-gray line-height-28 sm-line-height-26">
                                Natürlich ist OSMnx nicht nur für diesen Zweck gedacht. Es ist eine sehr leistungsfähige
                                Bibliothek
                                für
                                die
                                Analyse von Geodaten, die auf NetworkX und GeoPandas basiert und mit der OpenStreetMap API
                                für
                                <a href="https://osmnx.readthedocs.io/en/stable/getting-started.html#introducing-osmnx"
                                    target="_blank"><strong className="text-decoration-underline"> verschiedene Arten von
                                        Geodatenanalysen</strong></a> interagiert.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der vollständige Code ist auf <a href="https://github.com/Kirman442/osmnx_maps.git"
                                    target="_blank"><strong className="text-decoration-underline">GitHub</strong></a> verfügbar.
                            </p>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                        <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                    </div>
                                    <div className="col-lg-10 col-md-10">
                                        <ul className="p-0 list-style-5">
                                            <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">OSMnx
                                                Python
                                                package</label><a className="text-decoration-underline"
                                                    href="https://osmnx.readthedocs.io/en/stable/index.html"
                                                    target="_blank">Download, model, analyze, and visualize street networks</a>
                                            </li>
                                            <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">GeoPy
                                                Python</label><a className="text-decoration-underline"
                                                    href="https://geopy.readthedocs.io/en/stable/" target="_blank">Geocoding web
                                                    services</a>
                                            </li>
                                            <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Python
                                                Imaging
                                                Library</label><a className="text-decoration-underline"
                                                    href="https://pillow.readthedocs.io/en/stable/index.html" target="_blank">Image
                                                    processing capabilities</a>

                                            </li>
                                            <li className="margin-5px-bottom"><label className="datenquelle w-40 d-inline-block">Geo-Python
                                                Bibliotheken</label><a className="text-decoration-underline"
                                                    href="https://geopandas.org/en/stable/getting_started/introduction.html"
                                                    target="_blank">Geopandas</a>,<a className="text-decoration-underline"
                                                        href="https://shapely.readthedocs.io/en/stable/index.html"
                                                        target="_blank">Shapely</a>

                                            </li>
                                            <li className="margin-5px-bottom"><label
                                                className="datenquelle w-40 d-inline-block">Fonts</label><a
                                                    className="text-decoration-underline"
                                                    href="https://www.dafont.com/caviar-dreams.font"
                                                    target="_blank">CaviarDreams</a>,<a className="text-decoration-underline"
                                                        href="https://www.dafont.com/berlin-small-caps.font"
                                                        target="_blank">BerlinSmallCaps</a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Dresden" ><i className="ti-arrow-left blog-nav-icon"></i>Infrastruktur um Dresden</Link>
                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" ><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Flusssystem" ><i className="ti-arrow-right blog-nav-icon"></i>Die Visualisierung des Flusssystems</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div >
    );
};

export default PortfolioKunstkarten;