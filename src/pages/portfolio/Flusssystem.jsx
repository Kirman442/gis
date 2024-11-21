import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "prismjs/themes/prism-okaidia.css";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Code from "../../components/code";
import { Fluss1, Fluss2, Fluss3, Fluss4 } from "./kartenCode";

// import gallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const flussImages = [
    {
        src: '/images/flusssystem/France.jpg',
        thumb: '/images/flusssystem/France.jpg',
        alt: 'France',
    },
    {
        src: "/images/flusssystem/Germany.jpg",
        thumb: "/images/flusssystem/Germany.jpg",
        alt: "Germany"
    },
    {
        src: "/images/flusssystem/Uruguay.jpg",
        thumb: "/images/flusssystem/Uruguay.jpg",
        alt: "Uruguay",
    },
    {
        src: "/images/flusssystem/Venezuela.jpg",
        thumb: "/images/flusssystem/Venezuela.jpg",
        alt: "Venezuela",
    },
    {
        src: "/images/flusssystem/South_America_upland50_ord_flow6.jpg",
        thumb: "/images/flusssystem/South_America_upland50_ord_flow6.jpg",
        alt: "South America",
    }
];

const PortfolioFlusssystem = () => {
    const [thumbnails, setThumbnails] = useState([]);

    // On-the-fly preview generationу
    useEffect(() => {
        const generateThumbnails = async () => {
            const thumbPromises = flussImages.map((image) => createThumbnail(image.src));
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
                const scaleFactor = 0.1; // Compression up to 20% of original size
                canvas.width = img.width * scaleFactor;
                canvas.height = img.height * scaleFactor;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                resolve(canvas.toDataURL());
            };
        });
    };
    return (
        <div>
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 p-0 cover-background md-h-500px sm-h-300px"
                            style={{ background: "url('/images/flusssystem/VenezuelaTitle.jpg')" }}></div>
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Die
                                    Visualisierung des Flusssystems</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="w-90 w-100 margin-35px-bottom text-medium line-height-28">Filtern
                                    und stilisieren das globale Flusssystem eines
                                    ganzen Kontinents oder eines bestimmten
                                    Landes.</p>
                                <span className="text-dark-gray opacity6 alt-font mb-0 text-uppercase text-small">25
                                    May 2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programmierung,
                                    Datenbearbeitung</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end about product section --> */}

            {/* <!-- start about product section --> */}
            <section className="wow animate__fadeIn">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h5 className="alt-font text-green">Einleitung</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Nachdem ich <a href="https://www.qgistutorials.com/en/docs/3/river_styling_expressions.html"
                                    target="_blank"><strong className="text-decoration-underline">diesen Beitrag</strong></a>
                                auf LinkedIn angesehen hatte, fühlte ich mich inspiriert, diesen Weg zu wiederholen, jedoch
                                ausschließlich durch die
                                Programmierung mit Python und ein wenig Übung im Umgang mit GeoPandas, Matplotlib, PIL, OSMnx
                                und anderen Bibliotheken.
                                Schließlich hat jedes Projekt viele Feinheiten, und jedes Mal entdeckt man etwas Neues. Und
                                dieses Mal war keine
                                Ausnahme.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Das Projektziel ist es, das
                                globale Flusssystem eines bestimmten Landes oder ganzen Kontinents zu filtern und zu
                                stilisieren, wobei der Prozess der Datenerfassung mithilfe von Python automatisiert wird.
                                Die Visualisierung des Flusssystems kann auf einem einzigen Parameter oder einer Kombination von
                                ihnen basieren, zum
                                Beispiel:
                            </p>
                            <ul className="p-0 list-style-3">
                                <li className="text-medium line-height-28">Die Flussordnungsnummer gemäß dem
                                    Strahler-Ordnungssystem: Die Ordnung 1
                                    repräsentiert Quellbäche; wenn zwei Bäche 1.
                                    Ordnung aufeinandertreffen, bilden sie einen Fluss 2. Ordnung; wenn zwei Flüsse 2. Ordnung
                                    aufeinandertreffen, bilden
                                    sie einen Fluss 3. Ordnung; und so weiter.
                                </li>
                                <li className="text-medium line-height-28">Der Flussordnungsindikator gemäß dem klassischen
                                    Ordnungssystem: Die
                                    Ordnung 1 repräsentiert den Hauptfluss von der
                                    Quelle bis zur Mündung; Ordnung 2 repräsentiert alle Zuflüsse, die in einen Fluss 1. Ordnung
                                    münden; Ordnung 3
                                    repräsentiert alle Zuflüsse, die in einen Fluss 2. Ordnung münden, und so weiter. Dieses
                                    Ordnungssystem kann verwendet
                                    werden, um "Hauptflüsse" zu bestimmen, d.h. den Hauptstamm eines Flusses von der Quelle bis
                                    zur Mündung.</li>
                                <li className="text-medium line-height-28">Der Flussordnungsindikator unter Verwendung des
                                    Flussabflusses zur
                                    Ermittlung der Größen: Ordnung 1 repräsentiert
                                    Flussabschnitte mit einem mittleren mehrjährigen Abfluss &ge; 100.000 m3/s; Ordnung 2
                                    repräsentiert Flussabschnitte mit
                                    einem mittleren mehrjährigen Abfluss &ge; 10.000 m3/s und &lt; 100.000 m3/s; ... Ordnung 9
                                    repräsentiert Flussabschnitte mit einem mittleren mehrjährigen Abfluss &ge; 0,001 m3/s und
                                    &lt; 0,01 m3/s; und Ordnung 10 repräsentiert Flussabschnitte mit einem mittleren
                                    mehrjährigen Abfluss &lt; 0,001 m3/s (d.h. 0 in den vorliegenden Daten aufgrund der Rundung
                                    auf 3 Stellen). </li>
                                <li className="text-medium line-height-28">Der Gesamtflächenindikator im Oberlauf, in
                                    Quadratkilometern, berechnet
                                    von den Quellen bis zum Übergangspunkt (d.h. dem
                                    untersten Pixel) der Erreichbarkeit. Die Fläche des Oberlaufs umfasst nur das unmittelbar
                                    mit dem Einzugsgebiet
                                    verbundene Gebiet, d.h. es umfasst nicht die endorheischen Regionen, die in ein größeres
                                    Becken eingebettet sein können.</li>
                                <li className="text-medium line-height-28">Die Linienfarben der Flüsse - eine passende Farbpalette
                                    von Matplotlib
                                    oder Colorcet.</li>
                            </ul>
                            <h5 className="alt-font text-green">Daten vorbereiten</h5>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Auf der HydroSHEDS-Website im Abschnitt <a
                                    href="https://www.hydrosheds.org/products/hydrorivers" target="_blank"><strong
                                        className="text-decoration-underline">HydroRIVERS</strong></a> werden Daten in Form von
                                Geodatenbank und Shapefile bereitgestellt.
                                Für das Projekt habe ich zwei Dateien heruntergeladen - Europa und Naher Osten und Südamerika im
                                Shapefile-Format. Die
                                Größe ist natürlich nicht klein. Europa und Naher Osten - 263 MB, Südamerika - 406 MB. Daher
                                liegt die Schwierigkeit in
                                der Arbeit mit solch großen Dateien in Python. Zum Beispiel dauert das Lesen eines gesamten
                                Shapefiles für Europa und
                                Nahen Osten 304 Sekunden, und für das Shapefile von Südamerika - 510 Sekunden. Ich beschloss, es
                                wäre besser, wenn ich
                                ein Land aus dem Subdataset auswähle (idealerweise ein kleineres), und mit den erhaltenen Daten
                                zu experimentieren.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Aber während der Arbeit stieß ich auf die Möglichkeit, Geodatensätze in das Parquet- oder
                                Feather-Format zu konvertieren
                                und sie dann zu komprimieren, und GeoPandas ermöglicht es, Dateien in diesem Format zu lesen,
                                indem sie sie unterwegs in
                                das gdf-Format umwandeln. Der Geschwindigkeitsgewinn erwies sich einfach als fantastisch, ich
                                konnte nicht einmal
                                vermuten, dass durch den Unterschied zwischen den GeoDataFrame-, Shapefile-, Feather- oder
                                Parquet-Formaten die Lese-
                                und Umwandlungsgeschwindigkeit so stark erhöht werden könnte. Die oben genannte Datei Europa und
                                Naher Osten wird nun
                                anstelle von 5 Minuten in 1,46 Sekunden in ein GeoDataFrame gelesen und umgewandelt, wenn sie 95
                                MB groß ist, das ist
                                einfach eine erstaunliche Geschwindigkeit.</p>
                            <h6 className="alt-font text-green">Vergleich der Datenlesegeschwindigkeit:</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Europa: Shapefile 263 MB - 304 Sekunden. Feather 95 MB - 1,46 Sekunden.<br />
                                Südamerika: Shapefile 406 MB - 517 Sekunden. Feather 134MB - 3,94 Sekunden.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Deshalb habe ich die Shapefiles der Kontinente in das Feather-Format umgewandelt, ein Land
                                daraus ausgewählt, um damit
                                zu arbeiten, das erhaltene GeoDataFrame ebenfalls in Feather umgewandelt, und die Arbeit ging
                                viel schneller voran. Denn
                                nach dem Laden wird die Datei in ein gdf umgewandelt, und dann erfolgt die Arbeit damit nach den
                                üblichen Regeln von
                                GeoPandas, d.h. es wird nur die Geschwindigkeit des ursprünglichen Datenladens gewonnen, aber in
                                diesem Fall ist dies
                                ein enormer Geschwindigkeitsgewinn.</p>
                            <h6 className="alt-font text-green">Parquet und Feather Formate</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die Formate Parquet und Feather sind zwei moderne binäre Datenformate, die eine effiziente
                                Komprimierung sowie eine hohe
                                Lese- und Schreibgeschwindigkeit der Daten ermöglichen.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>Parquet:</b> Dieses spaltenbasierte Speicherformat ist für komplexe analytische Abfragen
                                optimiert. Es unterstützt
                                verschiedene Datentypen, Komprimierungsmethoden und Schemas, um Speicherplatz zu sparen und den
                                Zugriff auf Daten zu
                                beschleunigen. Parquet wird häufig in Datenverarbeitungssystemen wie Apache Spark und Hadoop
                                verwendet, um große
                                Datenmengen zu verarbeiten.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                <b>Feather:</b> Feather ist ein binäres Datenformat, das für schnelles Lesen und Schreiben von
                                Daten in pandas DataFrame
                                entwickelt wurde. Feather bietet hohe Leistung durch minimale Ein-/Ausgabe-Verzögerung und
                                die Eliminierung der
                                Notwendigkeit für zusätzliche Serialisierung/Deserialisierung von Daten. Feather eignet sich
                                ideal für den
                                plattformübergreifenden Datenaustausch zwischen verschiedenen Programmiersprachen.
                            </p>

                            <h5 className="alt-font text-green">Programmierung</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wie ich bereits erwähnt habe, kann die Visualisierung des Flusssystems auf einem einzelnen
                                Parameter oder einer
                                Kombination von ihnen basieren, daher habe ich zunächst den Indikator für die Gesamtfläche im
                                Oberlauf ausgewählt -
                                UPLAND_SKM und auf der Grundlage dieses Parameters eine neue Spalte line_width im gdf
                                hinzugefügt. Und ich habe eine
                                Funktion für die Linienbreite geschrieben, die auf den Daten aus dieser Spalte basiert.
                            </p>
                            <Code code={Fluss1} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Wir können zusätzliche Daten aus anderen Spalten hinzufügen oder die Visualisierung nur auf der
                                Grundlage anderer oben
                                genannter Projektziele durchführen. Zum Beispiel so:
                            </p>
                            <Code code={Fluss2} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                und erhalten ein völlig anderes Ergebnis.<br />
                                Es mag so aussehen, als gäbe es zu viele Flüsse oder genauer gesagt, ein Flusssystem sieht
                                unrealistisch aus, aber dabei
                                muss man berücksichtigen, dass nicht nur Flüsse oder ihre Zuflüsse berücksichtigt werden,
                                sondern auch allerlei Bäche
                                und Bächlein, deren Wasserdurchfluss pro Sekunde bis zu 0,001 m3/s beträgt. Wir können die Werte
                                filtern, indem wir
                                zusätzliche Parameter in der Ergebnisauswahl angeben.
                                Dann bestimmen wir auf der Grundlage der Fluss-ID in der Spalte MAIN_RIV die eindeutigen Flüsse
                                und erstellen basierend
                                darauf eine Farbpalette. In meinem Fall habe ich die 'Set2'-Palette aus den matplotlib-Colormaps
                                verwendet.
                            </p>
                            <Code code={Fluss3} language="python" />
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Dann bereiten wir den Subplot vor und drucken sofort unser modifiziertes gdf.
                            </p>
                            <Code code={Fluss4} language="python" />
                            <h5 className="alt-font text-green margin-35px-top">Visualisierung</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Das ist alles, die Hauptarbeit ist getan, der Code ist sehr kurz, aber meiner Meinung nach
                                fehlen nur noch ein paar
                                kleine Details und abschließende Feinheiten.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich hatte den Wunsch, einen Rahmen hinzuzufügen (das Bild sieht meiner Meinung nach mit einem
                                Rahmen abgeschlossen aus)
                                und eine kurze Beschreibung dessen, was auf dem Bildschirm zu sehen ist, hinzuzufügen. Das
                                Stoppen dauerte ein paar
                                Tage. Der Rahmen war schnell gemacht, aber das Experimentieren mit Beschriftungen und dem
                                Hinzufügen des Namens des
                                Landes, der Hauptstadt des Landes, der Koordinaten der Stadt hat mich ein wenig verwirrt, denn
                                ich wollte diese Daten
                                ausschließlich aus der Geocodierung erhalten, dh nichts manuell eingeben außer dem Land. Obwohl
                                ich im Grunde genommen
                                das Land nicht angeben musste, die Namen aller Länder des Kontinents erhalten und mir erlauben
                                konnte, die
                                entsprechenden Zahlen zu drücken, oder sogar eine grafische Benutzeroberfläche in tkinter
                                erstellen konnte, aber etwas
                                hat mich aufgehalten :)
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Kurz gesagt, jetzt können wir sowohl die Daten des gesamten Kontinents als auch die Daten eines
                                einzelnen Landes drucken
                                und speichern. Wir können noch tiefer gehen und die Daten von Städten oder sogar beliebigen
                                Gebieten visualisieren, aber
                                das hängt von den Anforderungen ab. Also, beim Visualisieren eines Landes drucken wir seine
                                Hauptstadt, die Koordinaten
                                der Hauptstadt und können eine Flagge an ihrer Position hinzufügen. Und natürlich den Rahmen um
                                das Bild. So, ich fand
                                es interessant, jetzt möchte ich mich ein wenig ausruhen und mit anderen Daten experimentieren,
                                da gibt es sehr viel
                                Interessantes.
                            </p>

                            <div className="row">
                                <div className="col-12 filter-content overflow-hidden">
                                    <LightGallery
                                        plugins={[lgZoom, lgThumbnail]} mode="lg-fade">
                                        {flussImages.map((image, index) => (
                                            <a
                                                key={image.src}
                                                className="gallery-item grid-item "
                                                data-src={image.thumb}
                                                data-sub-html={image.alt}
                                            >
                                                <img
                                                    className="img-responsive"
                                                    src={thumbnails[index] || image.src}
                                                    alt={image.alt}
                                                />
                                            </a>
                                        ))}
                                    </LightGallery>
                                    {/* <ul className="hover-option2 portfolio-gallery portfolio-wrapper grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col"
                                        style="position: relative; height: 570px;">
                                        <li className="grid-sizer"></li>

                                    </ul> */}
                                </div>
                            </div>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Der vollständige Code dieses Abenteuers ist auf <a
                                    href="https://github.com/Kirman442/hydrorivers.git" target="_blank"><strong
                                        className="text-decoration-underline">GitHub</strong></a> verfügbar.
                            </p>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                </div>
                                <div className="col-lg-8 col-md-10">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-30 d-inline-block">Python
                                            packages
                                            and
                                            libraries:
                                        </label>json, urllib.request, os, osmnx, matplotlib, geopandas, PIL
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-30 d-inline-block">HydroSHEDS</label><a
                                                className="text-decoration-underline" href="https://www.hydrosheds.org/"
                                                target="_blank">Seamless
                                                hydrographic data for global and regional applications</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-medium-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Kunstkarten" ><i className="ti-arrow-left blog-nav-icon"></i>Kunstkarten mit Python erstellen</Link>
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
                                <Link className="blog-nav-home" to="/portfolio/Ubahn" ><i className="ti-arrow-right blog-nav-icon"></i>Berliner U-Bahn Geschichte</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default PortfolioFlusssystem;