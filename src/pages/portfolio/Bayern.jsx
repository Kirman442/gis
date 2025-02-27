import React from "react";
import { Link } from "react-router-dom";
import Code from "../../components/code";
import Head from '../../components/Head';
import { Cluster1, Cluster2, Cluster3, Cluster4, Cluster5, Cluster6 } from "./kartenCode";

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const ClusteringFoto = `${import.meta.env.BASE_URL}images/bayern/Map_of_Bayern_min2.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioBayern = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Clustering"
                description="Clustering ist eine Methode zur Reduzierung von Punkten in einer Ebene, indem sie auf der Grundlage ihrer räumlichen Nähe zueinander in Clustern gruppiert werden."
                keywords="gis services, qgis expertise, kartographie, geoinformation, programmierung, visualisierung"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 cover-background p-0 md-h-500px sm-h-300px"
                            style={{ background: `url(${ClusteringFoto})` }}></div>
                        {/* <img
                                src={ClusteringFoto}
                                alt="Clustering"
                                className="cover-background"
                                style={{
                                    objectFit: "cover",
                                    width: "90%",
                                    height: "100%",
                                }}
                            />
                        </div> */}
                        <div className="col-xl-4 col-lg-5 p-0">
                            <div
                                className="padding-seventeen-lr padding-twenty-tb lg-padding-40px-lr md-padding-50px-tb sm-padding-30px-all">
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Visualisierung Bayerns</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="text-medium-gray w-90 w-100 margin-35px-bottom text-medium line-height-28">Eine interaktive Karte der Städte und Regionen mit deck.gl und react-map-gl </p>
                                <span className="text-light-gray opacity6 alt-font mb-0 text-uppercase text-small">25
                                    Februar 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                    Programmierung,
                                    Datenbearbeitung, Web-App erstellen</span>
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
                            <h4 className="alt-font text-green">Einleitung</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ich interessiere mich schon seit langem für geografische Visualisierungswerkzeuge.  Vor allem, nachdem ich die Kepler.gl-Bibliothek kennengelernt hatte.  Ursprünglich von Uber entwickelt, wurde Kepler.gl für die Bedürfnisse von analytischen Abteilungen geschaffen, die ein tieferes Verständnis der städtischen Dynamik suchen.  Uber Engineering verfügt über kolossale Mengen an Geodaten von Tausenden von Autos, die täglich in verschiedenen Metropolen der Welt unterwegs sind.  Kepler.gl wurde als effektives Werkzeug für die Analyse und Interpretation dieser Daten entwickelt, das ein „Live-Bild“ des Stadtverkehrs ermöglicht.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Unabhängig davon, welche konkreten Werkzeuge und Technologien man verwendet, besteht der Prozess der Erstellung einer Datenvisualisierung normalerweise aus einigen wichtigen Schritten: Datenerfassung, Vorverarbeitung, die untersuchende Analyse der vorbereiteten Daten und schließlich die Erstellung der eigentlichen visuellen Darstellung. Kepler.gl automatisiert und vereinfacht drei dieser vier Schritte in erheblichem Maße, was die Analyse und Visualisierung großer Mengen an Geoinformationen deutlich einfacher macht. Mit diesem Tool kann man relativ schnell und, was wirklich zählt, ziemlich eindrucksvoll eine interaktive Karte auf Basis eigener Geodaten erstellen.</p>

                            <h4 className="alt-font text-green">Kepler.gl vs. Deck.gl:  Analytisches Werkzeug vs. Programmierplattform</h4>


                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Aber Kepler.gl ist eher so ein „analytisches“ Werkzeug, für diejenigen, die Daten untersuchen.  Ich als Programmierer hatte jedoch Interesse an einem tieferen Verständnis der Mechanismen zur Erstellung solcher Visualisierungen, an der Möglichkeit, tiefer in den Prozess einzutauchen.  In diesem Kontext erregte Deck.gl meine Aufmerksamkeit.  Deck.gl, ebenfalls von Uber entwickelt, ist jedoch keine fertige Analyselösung, sondern eine Plattform, eine Programmbibliothek zur Erstellung maßgeschneiderter Visualisierungen auf Basis von WebGL.  Die WebGL-Technologie setzt natürlich ein gewisses Maß an technischem Fachwissen voraus, bietet aber im Gegenzug unzählige Möglichkeiten zur Feinabstimmung und Erstellung wirklich einzigartiger visueller Darstellungen.  Einer der Hauptvorteile von Deck.gl ist die Verfügbarkeit einer React-Komponente, die in Verbindung mit meiner Erfahrung in der React-Entwicklung vielversprechend für ein experimentelles Projekt erschien.
                            </p>
                            <h4 className="alt-font text-green">Vergessene Flask-Idee und wiedererwachtes Deck.gl-Verlangen</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die ursprüngliche Idee war, eine kleine Anwendung mit Flask API und React.js zu entwickeln.  Auch ein gewisser Datenbestand wurde bereits vorbereitet.  Im Laufe der Arbeit erinnerte ich mich jedoch an den lang gehegten Wunsch, die Möglichkeiten von Deck.gl zu erkunden.  Diese Erinnerung führte zu einer Überprüfung des ursprünglichen Plans.  Es entstand der Wunsch, ein kleines Projekt zu realisieren, um die Effizienz von Deck.gl bei der Arbeit mit Geodaten in der Praxis zu beurteilen.  Das Flask-orientierte Konzept trat vorübergehend in den Hintergrund und wich dem Wunsch, Deck.gl zu erforschen.
                            </p>
                            <h4 className="alt-font text-green">Datensatz: Umfang und Struktur</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Als Themengebiet für das Experiment wurde Bayern gewählt.  Der im Projekt verwendete Datensatz umfasste etwa 2000 geografische Koordinaten von Städten (als Punktobjekte), polygonale Darstellungen von Regierungsbezirken (Bezirke), Landkreisen, kreisfreien Städten sowie eine Kontur Bayerns zur Visualisierung der Grenzen.  Obwohl der verwendete Datensatz nicht als extrem groß bezeichnet werden kann, erscheint er für die Zwecke der experimentellen Entwicklung und Demonstration der Möglichkeiten von Deck.gl als durchaus ausreichend.  Insbesondere die geometrische Komplexität von Polygonobjekten wie der kreisfreien Stadt Augsburg beläuft sich auf etwa 2400 Koordinaten, was eine gewisse Belastung bei der Visualisierung und dem Rendering darstellt.
                            </p>
                            <h4 className="alt-font text-green">Entwicklungsphasen: Von den Daten zur Visualisierung</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der Entwicklungsprozess des Projekts umfasste mehrere Schlüsselphasen, von der Suche und Aufbereitung der Daten bis hin zur direkten Implementierung der interaktiven Karte unter Verwendung der Bibliothek Deck.gl und des Frameworks React.js.  Der erste Schritt war die Suche und Sammlung der benötigten Geodaten.  Zu den Datenquellen gehörten sowohl offene Geoportale als auch spezialisierte Geodienste.  Die erhaltenen Daten stellten eine heterogene Mischung aus Formaten und Strukturen dar, was eine vorbereitende Verarbeitung und Konvertierung der Daten in ein einheitliches, standardisiertes Format erforderte, das für die Verwendung in Deck.gl geeignet ist.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Ein erheblicher Teil der Arbeit war der Entwicklung der React-Anwendung gewidmet, die als „Container“ für die interaktive Karte dient.  Im Rahmen der React-Komponente wurden die Logik zum Laden und Verarbeiten von Daten, zum Erstellen und Konfigurieren von Deck.gl-Layern sowie interaktive Bedienelemente für die Karte implementiert.  Für die Gestaltung der Benutzeroberfläche wurde das Framework Tailwind CSS verwendet, das Komfort und Flexibilität bei der Anpassung des Erscheinungsbilds der Anwendung bietet.
                            </p>

                            <h4 className="alt-font text-green">Technische Feinheiten: Deck.gl – Das Geheimnis der Performance</h4>



                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Performance ist die zentrale Herausforderung bei der Visualisierung großer Datenmengen auf einer Karte. Und Deck.gl löst sie mit Bravour. Wie? Das Geheimnis liegt in der intelligenten Arbeit mit Layern. Stellen Sie sich einen Künstler vor, der eine Stadt malt: Anstatt jedes Element immer wieder neu zu zeichnen, erstellt er Entwurfslayer – schnelle Skizzen von Konturen. Deck.gl verwendet Layer wie „Skizzen“, leicht und sparsam.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Beim Aktualisieren der Karte zeichnet Deck.gl nicht alles komplett neu. Es vergleicht die neuen „Entwurfslayer“ mit den alten und aktualisiert auf der WebGL-Leinwand nur die veränderten Details, wie ein Künstler, der nur Striche auf einem Gemälde korrigiert. Das „schwere“ Rendering findet nur dort statt, wo es wirklich notwendig ist.
                            </p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">

                                Ein weiteres „Geheimnis“ sind die UpdateTriggers. Das ist wie ein Befehl an Deck.gl: „Pass auf, diese Parameter könnten sich ändern!“. Zum Beispiel die Farbe der Bäume je nach Jahreszeit. Die Daten über die Bäume sind dieselben, nur die Farbe ändert sich. UpdateTriggers ermöglichen es Deck.gl, solche „feinen“ Änderungen zu verfolgen und nur das Notwendige neu zu zeichnen, wodurch selbst bei komplexen Visualisierungen eine flüssige Darstellung gewährleistet wird.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Deck.gl – das ist die „Magie“ effizienter Arbeit mit Geodaten, basierend auf intelligentem Layer-Management und punktuellen Aktualisierungen. Effizienz und Dynamik – das ist sein Credo!
                            </p>


                            <h4 className="alt-font text-green">Blick in die Zukunft: Neue Karten, neue Daten, neue Entdeckungen</h4>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die Bayern-Karte ist nur der Anfang, ein erstes Experiment mit Deck.gl. Aber schon jetzt ist das Potenzial der Bibliothek für die Entwicklung moderner geoinformatorischer Webanwendungen erkennbar. Deck.gl ist ein leistungsstarkes und flexibles Werkzeug zur Visualisierung von Geodaten im Browser.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Vor uns liegt die Erforschung wirklich großer und dynamischer Daten, die Erweiterung der Kartenfunktionalität durch neue Layer und Analysewerkzeuge, die Integration mit Webtechnologien. Die Möglichkeiten sind riesig!
                            </p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">

                                Das Wichtigste ist: Das Experiment mit Deck.gl inspiriert! Ich habe Erfahrungen gesammelt, ein Verständnis für die Funktionsprinzipien der Bibliothek entwickelt. Es eröffnen sich neue Horizonte für die Kreativität in der Geovisualisierung. Bayern ist erst der Anfang. {/* Die Welt der Karten und Daten wartet! */}
                            </p>


                            <h4 className="alt-font text-green">Web-App</h4>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Web-App in einem <a href="https://kirman442.github.io/bayern/" target="_blank"><strong
                                    className="text-decoration-underline">neuen Fenster öffnen.</strong></a>
                            </p>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-850px" src="https://kirman442.github.io/bayern/" title="Web-App"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <p className="text-extra-large font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</p>
                                </div>

                                <div className="col-lg-8 col-md-10">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Python
                                            packages
                                            and
                                            libraries:
                                        </label>Geopandas , Json , Osmnx, d3-scale
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">react-map-gl</label><a className="text-decoration-underline"
                                            href="https://visgl.github.io/react-map-gl/" target="_blank">Part of vis.gl's Framework Suite</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-50 d-inline-block">deck.gl</label><a
                                                className="text-decoration-underline" href="https://deck.gl/"
                                                target="_blank">Framework for data analysis of large datasets</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label
                                            className="datenquelle w-50 d-inline-block">React.js</label><a
                                                className="text-decoration-underline" href="https://react.dev/"
                                                target="_blank">React library for web interfaces
                                            </a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Website
                                            erstellen:</label><a className="text-decoration-underline"
                                                href="https://pages.github.com/" target="_blank">GitHub
                                                Pages</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- start blog navigation bar section --> */}
            <section className="wow animate__fadeIn border-top border-color-medium-gray no-padding"
                style={{ visibility: "visible", animationName: "fadeIn" }}>
                <div className="container-fluid p-0">
                    <div className="row justify-content-between align-items-center g-0 padding-30px-lr md-padding-15px-lr">
                        <div className="w-45 text-start">
                            <div className="blog-nav-link blog-nav-link-prev text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Kunstkarten" ><i className="ti-arrow-left blog-nav-icon"></i>Kunstkarten mit Python erstellen</Link>

                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" aria-label="Home page link" ><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Dresden" ><i className="ti-arrow-right blog-nav-icon"></i>Infrastruktur um Dresden</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog navigation bar section --> */}


        </div >
    );
};

export default PortfolioBayern;