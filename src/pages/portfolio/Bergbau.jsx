import React from "react";
import { Link } from "react-router-dom";
import Head from '../../components/Head';

const isWebpSupported = () => {
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d')) && elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const webpSupported = isWebpSupported();

const BergbauFoto = `${import.meta.env.BASE_URL}images/bergbau/risiko_main.${webpSupported ? 'webp' : 'jpg'}`

const PortfolioBergbau = () => {
    return (
        <div>
            <Head
                title="GIS-Projekte | Risikomanagement"
                description="GIS-technische Umsetzung zur Erstellung von 3D-Bergbaustrukturen."
                keywords="gis services, qgis expertise, kartographie, geoinformation, programmierung, visualisierung"
            />
            {/* <!-- start page title section --> */}
            <section className="parallax" data-parallax-background-ratio="0.5"
                style={{ background: `url(${BergbauFoto})`, maxHeight: '540px' }}>
                <div className="opacity-light bg-extra-dark-gray"></div>
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div
                            className="col-12 d-flex flex-column justify-content-center text-center one-second-screen page-title-large">
                            {/* <!-- start page title -->
                            <!-- end page title -->
                            <!-- start sub title -->
                            <!-- end sub title --> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end page title section --> */}

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center md-margin-10px-bottom sm-margin-30px-bottom">
                            <h4 className="font-weight-300 text-extra-dark-gray margin-15px-bottom">Risikomanagement
                                oberflächennaher Strukturen</h4>
                            <p className="text-medium line-height-28 sm-line-height-26">GIS-technische Umsetzung eines vorgegebenen
                                Workflows zur Erstellung von 3D-Bergbaustrukturen.
                            </p>
                            <span className="text-extra-dark-gray opacity9 alt-font mb-0 text-uppercase text-small">25
                                August 2022&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                Kirill
                                Lisochenko & Martin Burzynski&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Programmierung,
                                Datenbearbeitung, 3D-Modellierung</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="no-padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h5 className="alt-font text-green">Projektziel</h5>
                            <p className="text-medium line-height-28 sm-line-height-26">Die Ruhrkohle-Aktiengesellschaft (RAG)
                                befasst sich neben den sogenannten „Ewigkeitsarbeiten“ in der ehemaligen
                                Steinkohleregion an der Ruhr auch mit dem Risikomanagement des oberflächennahen Bergbaus. Die
                                hinterblieben Hohlräume
                                sind durch Umwelteinflüsse Einsturz gefährdet und können in den oberen Schichten zum Einsacken
                                der Erdoberflächen
                                führen. Um Unfälle zu vermeiden, weißt die RAG sogenannte Gefährdungsflächen aus, die aus
                                historischen Risswerken
                                ermittelt wurden. Diese stellen jedoch nicht die exakte Position der bergbaulichen Strukturen da
                                und können nur durch
                                weitere Berechnungen verortet werden. Mittels GIS ist es möglich dreidimensionale Körper zu
                                visualisieren. Ein Problem
                                stellt dabei die Größe der Datenmenge dar. Bei einem Datensatz von ca. 16 000 Strecken, Abbauen
                                und anderen
                                bergbaulichen Objekten, ist die manuelle Bearbeitung nur mit einem extrem hohen Zeitaufwand
                                realisierbar.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Das Ziel dieser Projektarbeit ist es ein Verfahren zu entwickeln, das bergbauliche Strukturen
                                auf Grundlage
                                ausgewiesener Gefährdungsflächen und anderen historischen Risswerkinformationen automatisiert
                                darstellt. Das Projekt
                                soll sich dabei auf Strecken und Abbauen beschränken.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Zur Realisierung des Projektziels werden die Programme ArcGIS Pro, Code Editoren wie Spyder oder
                                VScode und verschiedene
                                Python bibliotheken verwendet. Mit deren hilfe soll ein Skript entworfen werden, dass Strecken
                                und Abbaue als 3D Feature
                                Classes in einer Geodatabase automatisiert hinterlegen kann. Das Skript soll bei der Übergabe
                                als benutzerfreundliches
                                tool in ArcGIS Pro anwendbar sein. Die Eingabe in der GUI (Graphical User interface soll aus
                                folgenden Dateien bestehen:</p>

                            <ul className="p-md-0 list-style-2">
                                <li className="text-medium line-height-28">shape-file der Gefährdungsflächen der Strecken und Abbaue
                                </li>
                                <li className="text-medium line-height-28">shape-file der zugehörigen Floezausbisslinien</li>
                                <li className="text-medium line-height-28">Excel-Tabelle mit weiteren Risswerkinformationen</li>
                                <li className="text-medium line-height-28">DGM-file der zu betrachtenden Fläche.</li>
                            </ul>
                            <h5 className="alt-font text-green">Hauptteil</h5>
                            <h6 className="alt-font text-green">Vorüberlegung</h6>
                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/stollenbau.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="Stollenbau" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Beim Schreiben eines
                                        Python-Skripts müssen Strecken und Abbaue einzeln betrachtet werden. Strecken dienten
                                        damals als
                                        unterirdischen Tunner, die zur Erschließung und Aufteilung der Abbaufelder ausgebaut
                                        wurden. Sie fungierten als
                                        Verbindungsstücke zu den Schächten und wurden für den Abtransport der Mineralien
                                        genutzt. Sie befinden sich nahezu
                                        waagerecht im Raum und wurden bei der Bearbeitung der 3D-Körper ohne Rotation erstellt.
                                        Abbaue hingegen orientieren sich
                                        entlang der Floeze, welche in einem gewissen Floezeinfallswinkel vorliegen. Die Abbaue
                                        liegen somit rotiert im Raum und
                                        müssen getrennt in der Skriptbearbeitung behandelt werden.</p>
                                </div>
                            </div>
                            <h6 className="alt-font text-green">Aufbereitung der Strecken Feature Class</h6>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Zu Beginn des Skriptentwurf
                                müssen die sidepackages arcpy und math importiert werden. Erst dann können ArcGIS Funktionen
                                und Methoden und mathematischen Formel genutzt werden. Zur Darstellung von Höheneigenschaften
                                können in ArcGIS Pro
                                verschiedene Höhenmodelle genutzt werden. Für die extrudebetween Funktion müssen jedoch
                                sogenannte TINs (Triangulated
                                Irregular Networks) vorliegen.
                            </p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Da Strecken weitgehend waagerecht verlaufen und die Sohlenhöhen als gleichbleibend angenommen
                                werden, wird den TINs
                                jeweils nur eine Höhe zugeteilt. Die Höheninformation liegen weder in den Attributen der
                                shp-files noch in der
                                Excel-Tabelle vor und müssen aus der Teufenhöhe und einem digitalem Geländemodell (DGM)
                                berechnet werden. Dabei wird mit
                                der arcpy-Funktion featureClasstoFeatureClass zur weiteren Bearbeitung eine Kopie aus den
                                Gefährdungsflächen erstellt.
                                Diese liegt nun in Form einer Feature Class (FC) vor, welche fortan als Strecken FC betrachtet
                                wird. Im nächsten Schritt
                                soll die FC um ausgewählte Spalteninformationen der Excel-Tabelle erweitert werden. Dafür wurden
                                mit der Funktion
                                arcpy.management.AddFields die Spalten mit den Namen 'floezeinfallen', 'maechtigkeit',
                                'teufe_festgestein',
                                'teufe_karbon', 'teufe_grubenbau' erweitert, die aus der exceltabelle in gleicher Reihenfolge
                                entnommen wurden. Mit der
                                gleichen Ausführung werden die Spalten 'Z_Wert_Boden' und 'Z_Wert_Decke' erstellt, die später
                                die berechneten Z-Werte
                                der Strecken als Eintrag erhalten.</p>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Im nächsten Schritt werden die Informationen der Excel-Tabelle in die neuen Spalten der Strecken
                                FC überführt. Hierfür
                                wird der UpdateCursor genutzt und für die Zuordnung der Spalten- Informationen zwei
                                If-Bedingungen gesetzt. Dabei werden
                                beim iterieren nur den Objektreihen Informationen zugewiesen bei denen die Namen und
                                Gefahrenarten der Strecken
                                identisch mit denen der Excel-Tabelle sind (sinngemäße Übertragung: „NAME“ == „Bezeichnung“
                                AND „GEF_ART“ ==
                                „Grubenbauart“).</p>
                            <h5 className="alt-font text-green">Umsetzung</h5>
                            <h6 className="alt-font text-green">Berechnung der Sohlen- und Firstenhöhen</h6>
                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/StreckeUndAbbauFrage.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="Strecke" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Um die Sohlenhöhen
                                        der Strecken Features berechnen zu können, wird die Höheninformation im Bereich der
                                        einzelnen
                                        Features aus einem Pixel der DGM (absolute Höhe) entnommen und um die Teufe reduziert.
                                        Die Firsthöhen ergeben sich aus
                                        den Sohlenhöhen und der Mächtigkeit. Beide Informationen sind durch die
                                        Spaltenerweiterung verfügbar. Da Oberflächen
                                        unregelmäßige Strukturen aufweisen, soll die abgegriffene Höhe aus der DGM immer von
                                        einem der Anfangspunkte der
                                        Strecken gewählt werden. Dieser wird mit der distanceto-Methode ermittelt, da der
                                        Stützpunkt mit der größten Distanz zur
                                        Abbaue gleichzeitig den Anfang der Strecken markiert.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/StreckeUndAbbau_punkte.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="StreckeUndAbbau" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Über den searchcursor
                                        werden die Punkte der Features ausgelesen und die Distanzen zur Abbaue- Geometrie
                                        verglichen. Ist
                                        die Entfernung größer gelangen die Koordinaten des Punktes in eine neue Liste. Die
                                        XY-Koordinaten mit der kleineren
                                        Entfernung wir aus der Liste ersetzt, sodass am Ende nur ein Punkt übrig bleibt. Diese
                                        Methode wird durch alle
                                        Stützpunkte iteriert bis der Punkt mit der größten Entfernung feststeht. Die Startpunkte
                                        bzw. Abgreifpunkte zur
                                        Höhenermittlung werden in einer dictionary festgelhalten. Als keys werden die
                                        Streckennamen und Koordinaten als values
                                        definiert.</p>
                                </div>
                            </div>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Da das DGM im UTM-Format vorliegt, müssen die Koordinaten der Abgreifpunkte aus dem
                                Gauss-Krüger-System (DHDN 3- Degree
                                Gauss Zone 2) ins UTM-System (ETRS 1989 UTM Zone 32N) umgewandelt werden. Dies wird mit der
                                Funktion
                                Transformer.from_crs und transformer.transform durchgeführt. Die Höhenwerte werden anschließend
                                aus den umgewandelten
                                Variablen mit der getcellvalue methode aus der DGM ausgelesen und in eine neue Liste mit
                                Zuordnung der Strecken
                                gespeichert.</p>
                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/tins_skizze.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="Tins skizze" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Für die
                                        3D-Visualisierung wurde hier die Funktion extrudebetween gewählt. Dabei werden
                                        prinzipiell drei digitale Objekte
                                        benötigt. Zum einen b ein Oberflächenmodell, dass die Sohlenhöhe der Strecken begrenzt,
                                        also die absolute Höhe des
                                        Streckenbodens darstellt. Zum anderen ein zweites Höhenmodell mit der absoluten Höhe der
                                        Firste, die der Streckendecke.</p>
                                </div>
                            </div>
                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Das dritte Objekt ist eine Liste mit den X- und Y- Koordinaten des zu erstellenden 3D-Körpers.
                                Diese sind bereits
                                bekannt, da die Strecken exakt unter der Gefährdungsflächen liegen und somit die Koordinaten der
                                zugehörigen
                                Gefährdungsfläche kopiert bzw. abgegriffen werden können. Die extrudebetween Methode erstellt
                                mit ihrer Ausführung
                                innerhalb der zugewiesenen Oberflächenmodellen und im Bereich der XY-Koordinaten einen neuen 3D
                                Körper und speichert
                                diese in eine neue FeatureClass ab. Im folgenden Abschnitt soll noch einmal detaillierter auf
                                die Methode zum Abgreifen
                                der XY Koordinaten und der Erstellung der Oberflächenmodelle eingegangen werden.</p>



                            <h5 className="alt-font text-green">TINs Entwurf und Erstellen der 3D Feature Class mit den
                                Streckenkörpern</h5>

                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="alignright col-lg-6"> Die meisten Oberflächenanalysen in GIS werden von Raster-
                                        oder
                                        TIN-Daten ausgeführt</p>
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/tins_new.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="Tins new skizze" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Zur automatisierten
                                        Feature Class Erstellung der dreidimensionalen Strecken werden nur noch zwei Funktionen
                                        benötigt.
                                        Wie bereits zu Beginn des Hauptteils erwähnt, bedarf es neben den XYGeometrien der
                                        Strecken, die jeweiligen TINs aus den
                                        Firsthöhen und Sohlenböden um die extrudebetween-Funktion durchführen zu können. Diese
                                        können nun für jedes Feature
                                        erstellt werden. Bei den in_features muss dabei vor der Ausführung der Parameter sf_type
                                        mit „Soft Clip“ angegeben werden. Mit dieser Einstellung wird die Rolle des
                                        Eingabe-Features definiert, die so die
                                        TIN-Oberflächenerstellung auf die
                                        Flächen der einzelnen Features begrenzt. Jedes Feature erhält dadurch jeweils zwei
                                        individuelle
                                        TINs. Wie auch die
                                        Feature Classes werden TINs in eine file Gedatabase abgespeichert und können in ArcGIS
                                        Pro
                                        visualisiert werden.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="alignright col-lg-6"> Modellierung und Erstellung eines dreidimensionalen Objekts
                                        auf der Grundlage der Daten</p>
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/3DStrecke2.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="3DStrecke" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Im letzten Schritt
                                        kann nun die extrudebetween-Funktion angewandt werden. Dabei müssen keine weiteren
                                        Parametereinstellungen beachtet werden. Die TINs und Strecken-Polygone sind exakt so
                                        beschnitten, dass nur noch die
                                        Eingabe-Werte, der Speicherort und der 3D Feature Class Name eingegeben werden muss. Die
                                        erstellten TINs werden
                                        anschließend mit der management.Delete- Funktion zur Reduktion überflüssiger Daten
                                        gelöscht. Die Strecken-Körper können
                                        jetzt in ArcGIS Pro visualisiert werden (Abb. rechts). In ArcGIS Pro muss dafür die
                                        Anzeige unter dem Reiter Ansicht von
                                        2D Karte in eine globale Szene umgewandelt werden. Um das Sichtfeld unter der Oberfläche
                                        zu aktivieren muss das
                                        Navigieren unter der Oberfläche aktiviert sein.</p>
                                </div>
                            </div>

                            <h5 className="alt-font text-green">Ergebnis und Fazit</h5>

                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="alignright col-lg-6">Am Ende der Berechnungen und Transformationen haben wir ein
                                        fertiges 3D-Modell</p>
                                    <img className="alignright col-lg-6" src={`${import.meta.env.BASE_URL}images/bergbau/3DStrecke3.${webpSupported ? 'webp' : 'jpg'}`}
                                        alt="3DStrecke" data-no-retina />

                                    <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">Aus dem bis hierhin
                                        beschriebenen Skripts wurde mit der tool-box und einer GUI in ArcGIS pro eine
                                        benutzerfreundliches
                                        tool entworfen. Dabei wurde die GUI so erstellt dass man die Pfade der Eingabe-Dateien
                                        einträgt, wie bereits im Teil
                                        Lösungsansatz beschrieben, eine Geodatabase als output-path und den neuen 3D Feature
                                        Class Namen.
                                        In Eigenleistung wurde ein Programm geschrieben, das 3D Objekte von bergbaulichen
                                        Strecken automatisiert ausgibt und
                                        eine 2D Feature Class der Abbau-Flächen erstellt.<br />Den Projektpartnern Herrn Schnell
                                        und Herrn Wiland von der RAG wurden nach Abschluss der
                                        Projektzzeit das Python-Skript
                                        als py-Datei, das fertige tool als tbx-Datei und dieser Projektbericht digital
                                        übergeben.</p>
                                </div>
                            </div>

                            <p className="text-medium text-dark-gray line-height-28 sm-line-height-26">
                                Unten können Sie ein kurzes Video sehen, das 2D-Polygone zeigt, die aus den Originaldaten
                                gewonnen wurden, sowie
                                3D-Objekte, die mit den oben genannten Visualisierungsmethoden gewonnen wurden.
                            </p>

                            <div className="col fit-videos text-center sm-margin-30px-bottom">
                                {/* <!-- start vimeo video --> */}
                                <div
                                    className="fluid-width-video-wrapper"
                                    style={{
                                        width: "640px",
                                        height: "480px",
                                        margin: "0 auto", // Центрируем
                                        position: "relative",
                                    }}
                                >
                                    <iframe
                                        src={`${import.meta.env.BASE_URL}images/bergbau/Scene640_480_191123.mp4`}
                                        title="Video Embed"
                                        allowFullScreen
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                        }}>
                                    </iframe>
                                </div>
                                {/* <!-- end vimeo video --> */}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div
                                    className="col-12 text-center margin-30px-top margin-10px-bottom md-margin-50px-bottom sm-margin-30px-bottom">
                                    <h6 className="font-weight-300 margin-15px-bottom">Datenquellen und Anwendungen:</h6>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="p-0 list-style-5">
                                        <li className="margin-5px-bottom"><label className="datenquelle w-60 d-inline-block">A Python
                                            library to read/write Excel 2010</label><a className="text-decoration-underline"
                                                href="https://osmnx.readthedocs.io/en/stable/index.html"
                                                target="_blank">openpyxl</a>
                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-60 d-inline-block">A
                                            Cartographic projections and coordinate transformations library</label><a
                                                className="text-decoration-underline" href="https://pypi.org/project/pyproj/"
                                                target="_blank">pyproj</a>

                                        </li>
                                        <li className="margin-5px-bottom"><label className="datenquelle w-60 d-inline-block">A
                                            Python site package used with ArcGIS Pro</label><a
                                                className="text-decoration-underline"
                                                href="https://pro.arcgis.com/en/pro-app/latest/arcpy/get-started/what-is-arcpy-.htm"
                                                target="_blank">ArcPy</a>

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
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Previous
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Ubahn" ><i className="ti-arrow-left blog-nav-icon"></i>Berliner U-Bahn Geschichte</Link>
                            </div>
                        </div>
                        <div className="w-10 text-center">
                            <div className="text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Home</span>
                                <Link className="blog-nav-home" to="/" aria-label="Home page link"><i className="ti-layout-grid2-alt"></i></Link>
                            </div>
                        </div>
                        <div className="w-45 text-end">
                            <div className="blog-nav-link blog-nav-link-next text-extra-dark-gray">
                                <span className="text-dark-gray text-extra-small text-uppercase d-none d-md-block">Next
                                    Project</span>
                                <Link className="blog-nav-home" to="/portfolio/Clustering" ><i className="ti-arrow-right blog-nav-icon"></i>Clustering</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
};

export default PortfolioBergbau;