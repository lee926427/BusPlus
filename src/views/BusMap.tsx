import GoogleMap from "@/components/GoogleMap/Map.tsx"




function BusMap(){
    const Map = GoogleMap({mapId:"",googleMapsApiKey:""})
    return (
        <div></div>
    )
}

function Layout(){
    return(
        <div>
            <header></header>
            <main>
                <aside></aside>
                <BusMap></BusMap>
                <aside></aside>
            </main>
            <footer></footer>
        </div>
    )
}
export default BusMap;
