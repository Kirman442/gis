import React from "react";
import { Link } from "react-router-dom";
import Head from '../../components/Head';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const AccidentsFoto = `${import.meta.env.BASE_URL}images/accidents/accidents_main1024.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioAccidents = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Deutschland Straßenverkehr Unfälle Visualisierung"
                description="React + Supabase + Deck.gl und verschiedene geospatiale Abfragen und Filterungen"
                keywords="gis services, Deck.gl, Supabase, PostgreSQL, programmierung, visualisierung"
            />
            {/* <!-- start about product section --> */}
            <section className="p-0 bg-extra-dark-gray top-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 cover-background p-0 md-h-500px sm-h-300px"
                            style={{ background: `url(${AccidentsFoto})` }}></div>
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
                                <h3 className="alt-font text-extra-light-gray font-weight-600 mb-0">Unfallkarte: Schnell, Präzise, GPU-optimiert</h3>
                                <div className="bg-deep-green separator-line-horrizontal-full d-inline-block margin-25px-tb"></div>
                                <p className="text-medium-gray w-90 w-100 margin-35px-bottom text-medium line-height-28">Geovisualisierung von Unfällen auf deutschen Straßen: Ein Experiment mit React, Supabase und Deck.gl</p>
                                <span className="text-light-gray opacity6 alt-font mb-0 text-uppercase text-small">30
                                    März 2025&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
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
                                Nach meiner Erfahrung mit deck.gl im Projekt "Bayern auf einen Blick" interessierte mich, wie die Kombination aus React + Supabase + Deck.gl mit verschiedenen räumlichen Abfragen und Filterungen funktionieren würde. Supabase unterstützt die PostGIS-Erweiterung und andere Geo-Erweiterungen von PostgreSQL "out of the box" sowie einen vollwertigen RESTful API mit PostgREST.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Supabase generiert automatisch eine API direkt aus Ihrem Datenbankschema, sodass Sie über eine Restful-Schnittstelle direkt vom Browser aus eine Verbindung zu Ihrer Datenbank herstellen können.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Für solche Experimente ist es wünschenswert, einen großen Datensatz mit Hunderttausenden von Geodaten zu verwenden, um den Browser und das Framework richtig zu belasten, denn deck.gl ist ein GPU-gestütztes Framework für die visuelle explorative Datenanalyse großer Datensätze. In diesem Beispiel verwende ich "Die Straßenverkehrsunfallstatistik erfasst alle Unfälle mit Personen- oder Sachschäden auf öffentlichen Straßen und Plätzen, die von der Polizei aufgenommen werden" mit 269.000 Datensätzen aus ganz Deutschland. Ich denke, das ist ein sehr guter Ausgangspunkt, um das Zusammenspiel aller drei Komponenten - React.js + Supabase + Deck.gl - zu erleben.
                            </p>

                            <h6 className="alt-font text-green">Datenvorbereitung</h6>


                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Der ursprüngliche Datensatz hatte eine Größe von 43,5 MB, ich habe ihn auf 19 MB reduziert, wobei alle 269.000 Datensätze erhalten blieben. Nach dem Export zu Supabase entstand eine Tabelle mit einer Größe von 103 MB, ohne Indizes 86 MB. Eine Datenabfrage aus einer so großen Tabelle wäre für Benutzer nicht sehr komfortabel, daher habe ich die Tabelle nach dem Feld "Land" partitioniert. Das Ergebnis waren 16 Tabellen, jede mit eigenen Daten und Indizes.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Anfangs habe ich auch materialisierte Ansichten für jede Tabelle erstellt, aber dann verwarf ich diese Idee, weil ich mich für eine parallele/sequentielle Datenladung entschied. Für eine sehr schnelle Darstellung der Daten auf der Karte laden wir nur drei Spalten in der Tabelle: id und zwei mit Koordinaten, wobei ich die Anzahl der Nachkommastellen auf 5 reduziert habe. Diese Genauigkeit ist für unser Beispiel völlig ausreichend - eine Genauigkeit von bis zu 10 Metern, während es vorher 10 Stellen waren - submillimetergenaue Präzision, die absolut unnötig ist.
                            </p>


                            <blockquote className="border-color-green">
                                <p>Kurz mal eine kleine Ausführung dazu.</p>

                                <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                    Man sollte jedoch nicht vergessen, dass die tatsächliche Genauigkeit dieser Koordinaten davon abhängt, wie sie erfasst wurden (z. B. GPS, Luftbild, Satellitenaufnahme etc.) und welche Geräte dabei verwendet wurden. Ein normales GPS-Gerät liefert in der Regel keine so hohe Genauigkeit. Solche Werte findet man oft in sehr präzisen, bearbeiteten Daten oder in Ergebnissen von Vermessungen. Ich bezweifle aber, dass Polizisten, die zu Unfällen und Vorfällen fahren, solche hochpräzisen Geräte oder Vermessungsausrüstung dabei haben.
                                </p>
                                <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                    Außerdem ist es wichtig, den Unterschied zwischen Präzision und Genauigkeit zu verstehen:<br /><br />
                                    Präzision bedeutet, wie viele Stellen nach dem Komma eine Zahl hat, was zeigt, wie detailliert eine Messung ist.
                                    Genauigkeit bedeutet, wie nah der gemessene Wert am tatsächlichen Wert liegt.
                                    Das heißt, auch wenn die erste Koordinate sehr präzise angegeben ist, kann ihre tatsächliche Genauigkeit geringer sein, wenn die Messmethode diese Präzision nicht ermöglicht hat.
                                </p> </blockquote>


                            <h6 className="alt-font text-green">Daten laden und verarbeiten</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die Parallelisierung maximieren wir - 16 gleichzeitig, was Supabase ermöglicht. Wir laden, verarbeiten, konvertieren die Koordinaten in den Float-Typ und erhalten ein Array von Koordinaten für jede Tabelle zur Anzeige auf der Karte. Nach der Zusammenführung zu einem einzigen Array werden die Daten auf der Karte angezeigt, und sofort danach beginnt das Laden der Attribute. In unserem Beispiel sind das 6 Eigenschaften: drei Listen - Land, Wochentag, Unfallkategorien und drei Arten von Unfällen - Unfall mit Rad, Unfall mit Pkw, Unfall mit Fußgänger. Der Prozess wird ebenfalls parallelisiert, und diese Eigenschaften werden den bereits geladenen Daten auf der Karte hinzugefügt.
                            </p>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Die Benutzeroberfläche wird dabei dank asynchroner Funktionen nicht blockiert. Zur Leistungsüberwachung habe ich Funktionen geschrieben, die die Geschwindigkeit und Größe der geladenen Daten messen:<br /><br />
                                <ul className="p-0 list-style-3">
                                    <li>Paralleles Laden: 16 gleichzeitige Anfragen an die Supabase</li>
                                    <li>Geodaten (Koordinaten) in 2,78 Sekunden geladen. Anzahl: 269.048, Gesamtgröße: 6,67 MB</li>
                                    <li>Attribute in 2,11 Sekunden geladen und zusammengeführt. Anzahl: 269.048, Gesamtgröße: 11,29 MB</li>
                                    <li>Null UI-Block: Stream-Verarbeitung im Hintergrund</li>
                                </ul>
                            </p>


                            <h6 className="alt-font text-green">Zusammenfassung und Schlussfolgerungen</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Mit unserem Ansatz, React und Deck.gl zu nutzen, erreichen wir stabile 55-60 FPS hin, sogar wenn wir alle 269.000 Punkte verarbeiten. Gerade auf Mobilgeräten macht sich das stark bemerkbar, wo der Unterschied in der Performance extrem wichtig für die Bedienbarkeit der App ist.

                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Weil unser technischer Stack so effizient ist, mussten wir uns gar nicht erst mit räumlichen Abfragen über die Datenbank rumschlagen – bei so einer Datenmenge geht das in React auf der Client-Seite viel einfacher und schneller. Das Rendern ist sofort da, wir brauchen keine extra Anfragen an die Datenbank zu schicken, sehr erfreulich. Am Ende haben wir eine richtig leistungsstarke Anwendung bekommen, um Verkehrsunfälle in ganz Deutschland zu visualisieren und zu analysieren.
                            </p>


                            <h5 className="alt-font text-green">Web-App</h5>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26 margin-35px-top">
                                Web-App in einem <a href="https://kirman442.github.io/accidents/" target="_blank"><strong
                                    className="text-decoration-underline">neuen Fenster öffnen.</strong></a>
                            </p>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <iframe className="w-100 h-850px" src="https://kirman442.github.io/accidents/" title="Web-App"></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row justify-content-center margin-50px-top">
                                <div className="col-12 text-center margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <p className="text-extra-large font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</p>
                                </div>

                                <div className="col-lg-8 col-md-10">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block">Supabase</label><a className="text-decoration-underline"
                                            href="https://supabase.com/" target="_blank">Open Source SQL Database</a>
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
                                        <li className="margin-5px-bottom"><label className="datenquelle w-50 d-inline-block"> Statistisches Bundesamt (Destatis):</label><a className="text-decoration-underline"
                                            href="https://www.destatis.de/DE/Home/_inhalt.html" target="_blank">Die Straßenverkehrsunfallstatistik</a>
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
                                <Link className="blog-nav-home" to="/portfolio/MobileNetwork" ><i className="ti-arrow-left blog-nav-icon"></i>Visualizing large-scale internet speed data</Link>

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
                                <Link className="blog-nav-home" to="/portfolio/Bayern" ><i className="ti-arrow-right blog-nav-icon"></i>Bayern auf einen Blick</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end blog navigation bar section --> */}


        </div >
    );
};

export default PortfolioAccidents;